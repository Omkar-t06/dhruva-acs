import UserModel from '@/models/userModel';
import dbConnect from '@/lib/dbConnect';
import { Complaint } from '@/models/userModel';

export async function POST(request: Request) {
  await dbConnect();
  const { username, title, department,description, status  } = await request.json();

  try {
    const user = await UserModel.findOne({ username }).exec();

    if (!user) {
      return Response.json(
        { message: 'User not found', success: false },
        { status: 404 }
      );
    }

    // Check if the user is accepting messages
    if (!user.isAccecptingComplaints) {
      return Response.json(
        { message: 'User is not accepting complaint', success: false },
        { status: 403 } // 403 Forbidden status
      );
    }

    const newComplaint = { title, department, description, status, created_at: new Date(),updated_at: new Date()};

    // Push the new message to the user's messages array
    user.complaints.push(newComplaint as Complaint);
    await user.save();

    return Response.json(
      { message: 'Complaint sent successfully', success: true },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error adding complaint:', error);
    return Response.json(
      { message: 'Internal server error', success: false },
      { status: 500 }
    );
  }
}