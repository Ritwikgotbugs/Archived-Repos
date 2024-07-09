"use client";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
export const Social = () => {
    return (
        <div className="flex flex-row w-full gap-x-4">
        <div className="flex items-center w-full gap-x-2 ">
            <Button size={"lg"} className="w-full bg-black-900 border border-gray-500" variant={"outline"} onClick={()=> {}}>
                <FcGoogle
                    className="w-6 h-6"
                />
            </Button>
        </div>
        <div className="flex items-center w-full gap-x-2">
            <Button size={"lg"} className="w-full bg-black-900 border border-gray-500" variant={"outline"} onClick={()=> {}}>
                <FaGithub
                    className="w-6 h-6"
                />
            </Button>
        </div>
        </div>
    )
}