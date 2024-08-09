'use server'

import * as z from 'zod';
import { RegisterSchema } from '@/schemas';
import bcrypt from 'bcryptjs'
import { db } from '@/lib/db';
import { getUserByEmail } from '@/data/user';

interface RegisterResponse {
    error?: string;
    success?: string;
}

export const register = async (values: z.infer<typeof RegisterSchema>): Promise<RegisterResponse> => {
    console.log(values);

    const validateFields = RegisterSchema.safeParse(values);

    const {email, password, name} = validateFields.data

    const hashPassword = await bcrypt.hash(password, 10)

    // For Filtering Emails And Find already exist
    const existingUser = await getUserByEmail(email)

    if (existingUser) {
        return {error: 'Email already exist!'}
    }

    await db.user.create({
        data: {
            name,
            email,
            password: hashPassword
        }
    })

    return {success: 'User Created!'}
};