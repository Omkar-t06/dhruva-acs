import dbConnect from '@/lib/dbConnect';
import UserModel from '@/models/userModel';
import mongoose from 'mongoose';
import { User } from 'next-auth';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/option';

export async function GET(request: Request) {
  await dbConnect();
  const session = await getServerSession(authOptions);
  const _user: User = session?.user;

  if (!session || !_user) {
    return Response.json(
      { success: false, message: 'Not authenticated' },
      { status: 401 }
    );
  }
  const userId = new mongoose.Types.ObjectId(_user._id);
  try {
    const user = await UserModel.aggregate([
      { $match: { _id: userId } },
      { $unwind: '$complaints' },
      { $sort: { 'messages.createdAt': -1 } },
      { $group: { _id: '$_id', complaints: { $push: '$complaints' } } },
    ]).exec();

    if (!user || user.length === 0) {
      return Response.json(
        { message: 'User not found', success: false },
        { status: 404 }
      );
    }

    return Response.json(
      { messages: user[0].complaints },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error('An unexpected error occurred:', error);
    return Response.json(
      { message: 'Internal server error', success: false },
      { status: 500 }
    );
  }
}