"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CardWrapper } from "./card-wrapper";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { RegisterSchema, loginSchema } from "../../../schemas";

import {
    FormItem,
    FormControl,
    FormField,
    FormLabel,
    FormMessage,
    Form
} from "../ui/form";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSucess } from "../form-success";
import { login, register } from "../../../actions/login";
import { useState } from "react";

export const RegisterForm = () => {

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            name: ""
        }
    });

    const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
        setError("");
        setSuccess("");
        register(data).then((props)=> {
            setError(props.error);
            setSuccess(props.success);
        })
    };

    return (
        <CardWrapper 
            headerLabel="Welcome"  
            backButtonLabel="Already have an account? Login"
            backButtonHref="/auth/login"
            showSocial
        >
            <Form {...form}>
                <form 
                    onSubmit={form.handleSubmit(onSubmit)} 
                    className="space-y-6"
                >
                    <div className="space-y-4">
                    <FormField 
                            control={form.control} 
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input 
                                            {...field} 
                                            className="border-gray-500" 
                                            placeholder="username" 
                                            type="input"
                                        />
                                    </FormControl>
                                    <FormMessage>{form.formState.errors.name?.message}</FormMessage>
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control} 
                            name="email" 
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input 
                                            {...field}
                                            className="border-gray-500" 
                                            placeholder="name@email.com" 
                                            type="email"
                                        />
                                    </FormControl>
                                    <FormMessage>{form.formState.errors.email?.message}</FormMessage>
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control} 
                            name="password" 
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input 
                                            {...field} 
                                            className="border-gray-500" 
                                            placeholder="******" 
                                            type="password"
                                        />
                                    </FormControl>
                                    <FormMessage>{form.formState.errors.password?.message}</FormMessage>
                                </FormItem>
                            )}
                        />
                        
                    </div>
                    <FormError message={error}/>
                    <FormSucess message={success}/>
                    <Button type="submit" className="w-full bg-secondary">Sign up</Button>
                </form>
            </Form>
        </CardWrapper>
    );
};
