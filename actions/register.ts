'use server'

import * as z from 'zod';
import { RegisterSchema } from '@/schemas';

interface RegisterResponse {
    error?: string;
    success?: string;
}

export const register = (values: z.infer<typeof RegisterSchema>): Promise<RegisterResponse> => {
    return new Promise((resolve) => {
        console.log(values);

        const validateFields = RegisterSchema.safeParse(values);

        if (!validateFields.success) {
            resolve({ error: "Invalid Data" });
        } else {
            resolve({ success: "Email Sent!" });
        }
    });
};