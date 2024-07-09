"use client";

import { Card,CardContent,CardFooter,CardHeader } from "../ui/card";
import { BackButton } from "./backButton";
import { Header } from "./header";
import { Social } from "./socials";


interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;

}

export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial  
} : CardWrapperProps) => {
    return (
    <Card className="w-[400px] shadow-md items-center bg-white border-gray-500">
        <CardHeader>
           <Header label={headerLabel}/>
        </CardHeader>
        <CardContent>
              {children}
        </CardContent>
        {showSocial && 
        <CardFooter>
            <Social/>
        </CardFooter>}
        <CardFooter>
            <BackButton label= {backButtonLabel}
                href= {backButtonHref}> 
                
            </BackButton>
        </CardFooter>
    </Card>
    )
}

