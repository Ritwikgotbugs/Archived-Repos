"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CardWrapper } from "./card-wrapper";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { loginSchema } from "../../../schemas";

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
import { login } from "../../../actions/login";
import { useState } from "react";
import { useRouter } from "next/navigation";
export const LoginForm = () => {

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });
    const router= useRouter();  
    const onSubmit = (data: z.infer<typeof loginSchema>) => {
        setError("");
        setSuccess("");
        login(data).then((props)=> {
            setError(props.error);
            setSuccess(props.success);
        });
        router.push("/dashboard");
    };

    return (
        <CardWrapper 
            headerLabel="Welcome Back"  
            backButtonLabel="Don't have an account?"
            backButtonHref="/auth/register"
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
                    <Button type="submit" className="w-full bg-secondary">Login</Button>
                </form>
            </Form>
        </CardWrapper>
    );
};
