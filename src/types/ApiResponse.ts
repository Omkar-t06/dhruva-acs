import { Complaint } from "@/models/userModel";

export interface ApiResponse {
    success: boolean;
    message: string;
    complaints?: Array<Complaint>;
}