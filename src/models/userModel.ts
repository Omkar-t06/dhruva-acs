import mongoose, {Schema, Document} from 'mongoose';

export interface Complaint extends Document {
    title: string;
    department: string;
    description: string;
    status: string;
    created_at: Date;
    updated_at: Date;
}

const ComplaintSchema: Schema<Complaint> = new Schema({
    title: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
        default: "Police"
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "Registered"
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        required: true,
        default: Date.now()
    },
});

export interface User extends Document {
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean;
    isAdmin: boolean;
    complaints: Complaint[];
}

const UserSchema: Schema<User> = new mongoose.Schema({
    username: {
      type: String,
      required: [true, 'Username is required'],
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      match: [/.+\@.+\..+/, 'Please use a valid email address'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    verifyCode: {
      type: String,
      required: [true, 'Verify Code is required'],
    },
    verifyCodeExpiry: {
      type: Date,
      required: [true, 'Verify Code Expiry is required'],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    complaints: [ComplaintSchema],
});
  
const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>('User', UserSchema);

export default UserModel;