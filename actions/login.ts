'use server'

import * as z from 'zod';
import { LoginSchema } from '@/schemas';

interface LoginResponse {
    error?: string;
    success?: string;
}


export const login = (values: z.infer<typeof LoginSchema>): Promise<LoginResponse> => {
    return new Promise((resolve) => {
        console.log(values);

        const validateFields = LoginSchema.safeParse(values);

        if (!validateFields.success) {
            resolve({ error: "Invalid Data" });
        } else {
            resolve({ success: "Email Sent!" });
        }
    });
};