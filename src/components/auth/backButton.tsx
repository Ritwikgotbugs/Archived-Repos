"use client";

import Link from "next/link";
import { Button } from "../ui/button";

interface backButtonProps {
    label: string;
    href: string;

}

export const BackButton = ({ label, href }: backButtonProps) => {
    return (
    <Button variant={"link"} className="items-center justify-center w-full">
        <Link href={href}>
            {label}
        </Link>
    </Button>
    )
}