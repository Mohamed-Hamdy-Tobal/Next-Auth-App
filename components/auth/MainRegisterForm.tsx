'use client'

import React, { useState, useTransition } from 'react'
import * as z from 'zod'
import { RegisterSchema } from '@/schemas'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import FormError from '@/components/FormError'
import FormSuccess from '@/components/FormSuccess'
import { register } from '@/actions/register'

const MainRegisterForm = () => {

    const [isPending, startTransition] = useTransition()

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        startTransition(() => {
            register(values).then((data: { error?: string; success?: string }) => {
                if (data.error) {
                    setError(data.error);
                } else if (data.success) {
                    setSuccess(data.success);
                }
            });
        });
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 mb-3">
                        <FormField
                            control={form.control}
                            name='name'
                            render={({ field }) => {
                                return <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            type='name'
                                            placeholder='Jhon Doe'
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            }}
                        />
                        <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => {
                                return <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            type='email'
                                            placeholder='jhon.doe@example.com'
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            }}
                        />
                        <FormField
                            control={form.control}
                            name='password'
                            render={({ field }) => {
                                return <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Input
                                                {...field}
                                                disabled={isPending}
                                                type={showPassword ? "text" : "password"}
                                                placeholder='******'
                                            />
                                            <div className="absolute w-[50px] h-full inset-y-0 right-0 pr-3 flex justify-center items-center text-sm leading-5">
                                                <button disabled={isPending} type="button" onClick={togglePasswordVisibility} className="focus:outline-none">
                                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                                </button>
                                            </div>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            }}
                        />
                    </div>
                    <FormError message={error} />
                    <FormSuccess message={success} />
                    <Button disabled={isPending} type="submit" className='w-full'>Create an account</Button>
                </div>
            </form>
        </Form>
    )
}

export default MainRegisterForm