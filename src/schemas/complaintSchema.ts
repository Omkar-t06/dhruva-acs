import { title } from 'process';
import {z} from 'zod';

export const complaintSchema = z.object({
    title: z
        .string()
        .min(2, 'Title must be at least 2 characters')
        .max(50, 'Title must be no more than 50 characters'),
    description: z
        .string()
        .min(2, 'Description must be at least 2 characters')
        .max(300, 'Description must be no more than 300 characters'),
    department: z.string()
})