'use client';
import { Button } from "@/components/ui/button";
import { db } from "@/firebase/client";
import { addDoc, collection } from "firebase/firestore";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

    const Home: NextPage = () => {
    const [selfKindness, setSelfKindness] = useState("");
    const [commonHumanity, setCommonHumanity] = useState("");
    const [mindfulness, setMindfulness] = useState("");
    const [isTypingSelfKindness, setIsTypingSelfKindness] = useState(false);
    const [isTypingCommonHumanity, setIsTypingCommonHumanity] = useState(false);
    const [isTypingMindfulness, setIsTypingMindfulness] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
        // Add a new document to Firestore
        await addDoc(collection(db, "entries"), {
            selfKindness: selfKindness,
            commonHumanity: commonHumanity,
            mindfulness: mindfulness,
            createdAt: new Date().toISOString(),
        });

        // Clear the input fields after submission
        setSelfKindness("");
        setCommonHumanity("");
        setMindfulness("");
        alert("Your responses have been submitted.");
        } catch (error) {
        console.error("Error adding document: ", error);
        alert("There was an error submitting your responses.");
        }
    };

    return (
        <div className="bg-white p-6 max-w-screen mx-72">
        <h1 className="text-5xl font-semibold mb-4 mt-20">Acceptance</h1>
        <h4 className="text-xl font-semibold text-gray-500">
            Acceptance – see you through the looking glass, looking only at you
        </h4>
        <p className="italic text-xl text-black mb-4 text-center mt-10">
            “Experiencing events fully and without defense as they are” – Hayes,
            1994.
        </p>
        <p className="text-black text-xl mb-4">
            During "Acceptance", one is open to the reality of the present moment
            without being in a state of belief or disbelief.
        </p>
        <p className="italic text-black mb-4 text-xl text-center">
            "Happiness can only exist in Acceptance" – George Orwell
        </p>
        <p className="mt-10 text-gray-900 mb-4 text-xl font-semibold">
            Open your KD – review all you have written one you have done lets try
            the below tasks
        </p>
        <form onSubmit={handleSubmit}>
            {/* Section 1: Practice Self-Kindness */}
            <h2 className="text-xl font-bold mb-2 mt-10 text-black">1. Practice Self-Kindness</h2>
            <p className="text-black mb-4 font-semibold">Try writing the following about you</p>
            <p className="mb-2 text-black">
            Imagine the time you were hurt or struggling to finish something and
            feeling down. Show yourself kindness and understanding by writing to
            yourself a reassuring note. <span className="text-black text-bold ">(5 lines)</span>
            </p>
            <textarea
            value={selfKindness}
            onChange={(e) => setSelfKindness(e.target.value)}
            onFocus={() => setIsTypingSelfKindness(true)}
            onBlur={() => setIsTypingSelfKindness(false)}
            placeholder="Write to yourself with warmth and patience..."
            className={`w-full p-2 mb-4 border rounded-md ${
                isTypingSelfKindness ? "border-dark-green" : "border-[#11857D]"
            }`}
            rows={5}
            required
            />
            <ul className="text-black text-sm mb-6">
            <li className="text-bold text-black underline font-bold">Rules</li>
            <li>1. Don’t be overly critical or angry</li>
            <li>2. Acknowledge the harm of self-judgment</li>
            <li>3. Write to you with warmth and patience</li>
            </ul>

            <h2 className="text-2xl font-bold mb-2 mt-10">2. Embrace Common Humanity</h2>
            <p className="text-black mb-4 font-semibold">Understand that  suffering and imperfection are universal experiences-</p>
            <p className="mb-2 text-black">
            It happens to different people at different time different form and different
            intensity but is always experience by all at some time or other so 
            </p>
            <p className="mb-2 text-black">
            List any 3 struggles you feel others have had the same as you or try
            to find out from friends. “Know that you're not alone in your
            struggles.”
            </p>
            <textarea
            value={commonHumanity}
            onChange={(e) => setCommonHumanity(e.target.value)}
            onFocus={() => setIsTypingCommonHumanity(true)}
            onBlur={() => setIsTypingCommonHumanity(false)}
            placeholder="Share struggles to build empathy..."
            className={`w-full p-2 mb-4 border rounded-md ${
                isTypingCommonHumanity ? "border-dark-green" : "border-[#11857D]"
            }`}
            rows={5}
            required
            />
            <p className="mb-2 text-black">
            This will enable you to build empathy and connection with your fellow humans- most often we don’t 
            do these or see others pain as were busy battling ours at times its ok so seek compassion to self by relating with others .
            </p>
            <h2 className="text-2xl font-bold mb-2 mt-10 text-black">3. Cultivate Mindfulness</h2>
            <p className="mb-2 text-black font-semibold">
            Stay present in the moment and observe your thoughts and emotions
            without judgment. List ways you can do this. List your favorite
            mindfulness technique.
            </p>
            <textarea
            value={mindfulness}
            onChange={(e) => setMindfulness(e.target.value)}
            onFocus={() => setIsTypingMindfulness(true)}
            onBlur={() => setIsTypingMindfulness(false)}
            placeholder="List your mindfulness techniques..."
            className={`w-full p-2 mb-4 border rounded-md ${
                isTypingMindfulness ? "border-dark-green" : "border-[#11857D]"
            }`}
            rows={5}
            required
            />

            <div className="flex items-center justify-center flex-col">
            <Button 
    className="bg-[#11857D] text-white py-2 rounded-lg flex items-center justify-center hover:bg-teal-700 my-4 px-6 text-lg"
    onClick={handleSubmit} >
    Submit
    </Button>
            <p className="font-light text-slate-500 text-sm mt-3 cursor-pointer border-slate-500">
                Report a problem?
            </p>
            <Link href="/post-stage" passHref>
                <Button className="border-2 border-[#11857D] mt-2 bg-white text-[#11857D]">
                <span className="text-xl text-[#11857D] mx-4">&#8592;</span>Back to
                Home Page
                </Button>
            </Link>
            </div>
        </form>
        </div>
    );
    };

    export default Home;



