'use client';
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from 'next/navigation';
import { auth, googleProvider } from '../../../firebase/client'; 
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { toast } from 'sonner';

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.replace('/assessment');
            toast.success('Successfully signed in');
        } catch (error: any) { 
            console.error("Error signing in:", error);
            if (error.code === 'auth/wrong-password' ||  error.code === 'auth/invalid-email' || error.code === 'auth/invalid-credentials') {
                toast.error("Invalid email or password. Please try again.");
            } else if (error.code === 'auth/user-not-found') {
                toast.error("User does not exist. Please sign up.");
            } 
            else {
                toast.error("Failed to sign in. Please try again later.");
            }
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            router.replace('/assessment');
            toast.success('Successfully signed in with Google');
        } catch (error) {
            console.error("Error signing in with Google:", error);
            toast.error("Failed to sign in with Google. Please try again.");
        }
    };
    
    return (
        <div className="flex justify-center items-start bg-gray-100 md:p-0 p-6 ">
            <form
                className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border-2 border-teal-800 my-10"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold mb-2 text-black">Login</h2>
                <p className="text-sm text-gray-600 mb-6">
                    Need an account? <a href="/signup" className="text-blue-500 font-semibold">Sign Up</a>
                </p>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Email Address"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                        required
                    />
                     <div className="text-right text-sm p-2">
                        <a href="/forgot-password" className="text-blue-500">Forgot password?</a>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full bg-teal-700 text-white py-3 rounded-lg hover:bg-teal-800 transition duration-300"
                >
                    Sign In
                </button>
                <button
                    type="button"
                    onClick={handleGoogleSignIn}
                    className="w-full mt-4 border border-teal-700 text-teal-700 py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-teal-100 transition duration-300"
                >
                    <FcGoogle size={24} />
                    Sign In with Google
                </button>
            </form>
        </div>
    );
}
