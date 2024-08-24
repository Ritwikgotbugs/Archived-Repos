'use client';
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from 'next/navigation';
import { auth, googleProvider } from '../../../firebase/client'; 
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.replace('/assessment');
        } catch (error) {
            console.error("Error signing in:", error);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            router.replace('/assessment');
        } catch (error) {
            console.error("Error signing in with Google:", error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form
                className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
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
