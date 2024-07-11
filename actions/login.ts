"use server";
import * as z from "zod";
import { RegisterSchema, loginSchema } from "../schemas";


export const login= async (props: z.infer<typeof loginSchema>)=>{
    const validatedFields= loginSchema.safeParse(props);

    if (!validatedFields.success){
        return {error: "Invalid Fields"}
    }
    return {success: "Email Sent"}
}
export const register= async (props: z.infer<typeof RegisterSchema>)=>{
    const validatedFields= RegisterSchema.safeParse(props);

    if (!validatedFields.success){
        return {error: "Invalid Fields"}
    }
    return {success: "Email Sent"}
}