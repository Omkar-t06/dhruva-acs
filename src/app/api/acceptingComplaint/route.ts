import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/option';
import dbConnect from '@/lib/dbConnect';
import UserModel from '@/models/userModel';
import { User } from 'next-auth';

export async function POST(request: Request) {
  // Connect to the database
  await dbConnect();

  const session = await getServerSession(authOptions);
  const user: User = session?.user;
  if (!session || !session.user) {
    return Response.json(
      { success: false, message: 'Not authenticated' },
      { status: 401 }
    );
  }

  const userId = user._id;
  const { acceptComplaints } = await request.json();

  try {
    // Update the user's message acceptance status
    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { isAccecptingComplaints: acceptComplaints },
      { new: true }
    );

    if (!updatedUser) {
      // User not found
      return Response.json(
        {
          success: false,
          message: 'Unable to find user to update message acceptance status',
        },
        { status: 404 }
      );
    }

    // Successfully updated message acceptance status
    return Response.json(
      {
        success: true,
        message: 'Complaint acceptance status updated successfully',
        updatedUser,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating complaint acceptance status:', error);
    return Response.json(
      { success: false, message: 'Error updating complaint acceptance status' },
      { status: 500 }
    );
  }
}


export async function GET(request: Request) {
  // Connect to the database
  await dbConnect();

  // Get the user session
  const session = await getServerSession(authOptions);
  const user = session?.user;

  // Check if the user is authenticated
  if (!session || !user) {
    return Response.json(
      { success: false, message: 'Not authenticated' },
      { status: 401 }
    );
  }

  try {
    // Retrieve the user from the database using the ID
    const foundUser = await UserModel.findById(user._id);

    if (!foundUser) {
      // User not found
      return Response.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      );
    }

    // Return the user's message acceptance status
    return Response.json(
      {
        success: true,
        isAcceptingComplaints: foundUser.isAccecptingComplaints,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error retrieving complaint acceptance status:', error);
    return Response.json(
      { success: false, message: 'Error retrieving complaint acceptance status' },
      { status: 500 }
    );
  }
}