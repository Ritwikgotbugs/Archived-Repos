"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { CardWrapper } from "./card-wrapper"
import { useForm } from "react-hook-form"
import * as z from "zod";
import { loginSchema } from "../../../schemas";

import {
    FormItem,
    FormControl,
    FormField,
    FormLabel,
    FormMessage,
    Form
} from "../ui/form"
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const LoginForm = () => {
    const form= useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });
    return (
        <CardWrapper 
        headerLabel="Welcome Back"  
        backButtonLabel="Don't have an account?"
        backButtonHref="/auth/register"
        showSocial
        >
            <Form {...form}>
                <form 
                onSubmit={form.handleSubmit(()=> {})} 
                className="space-y-6">
                    <div className="space-y-4">
                        <FormField control={form.control} name="email" render={({field})=> (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                     <Input className="border-gray-500"  placeholder="name@email.com" type="email"/>
                                     </FormControl>
                                <FormMessage>{form.formState.errors.email?.message}</FormMessage>
                            </FormItem>

                        )}>
                        </FormField>
                        <FormField control={form.control} name="password" render={({field})=> (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                     <Input className="border-gray-500" {...field}  placeholder="******" type="password"/>
                                     </FormControl>
                                <FormMessage>{form.formState.errors.password?.message}</FormMessage>
                            </FormItem>

                        )}>
                        </FormField>
                        
                    </div>
                    <Button type="submit" className="w-full bg-secondary">Login</Button>
                </form>
            </Form>
        </CardWrapper>
    ) 
}