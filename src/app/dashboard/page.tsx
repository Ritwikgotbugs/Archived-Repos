"use client";

import Link from "next/link";
import { useState } from "react";

const Dashboard = () => {
const [expandedCard, setExpandedCard] = useState<string | null>(null);

const handleToggle = (cardId: string) => {
setExpandedCard(expandedCard === cardId ? null : cardId);
};

const cardData = [
{
    id: "facts",
    title: "Facts",
    subtitle: "The F Factor",
    description:
    "Impostor syndrome (also commonly-termed impostor phenomenon, fraud syndrome, impostors, and perceived...",
    fullDescription:
    "Impostor syndrome (also commonly-termed impostor phenomenon, fraud syndrome, impostors, and perceived frauds) refers to a pattern of behavior where individuals doubt their accomplishments and have a persistent fear of being exposed as a fraud. Despite external evidence of their competence, those experiencing this phenomenon remain convinced that they are frauds and do not deserve all they have achieved.",
    imageSrc: "/stages/Facts.png",
    link: "/FactorPage",
},
{
    id: "feelings",
    title: "Feelings",
    subtitle: "The lingering F",
    description:
    "Now let's do some inward tracking of self – Below are few words kindly self the words that closely relate you or...",
    fullDescription:
    "Now let's do some inward tracking of self – Below are a few words. Kindly select the words that closely relate to you or define your current emotional state. This is an important exercise in self-awareness and emotional intelligence, helping you better understand and articulate your feelings.",
    imageSrc: "/stages/Feelings.png",
    link: "/stage-2",
},
{
    id: "success",
    title: "Success",
    subtitle: "Looking for S",
    description:
    "We often forget to celebrate success either because we feel others have to recognize it to celebrate it, reality ....",
    fullDescription:
    "We often forget to celebrate success either because we feel others have to recognize it to celebrate it. The reality is, success should be personally acknowledged and celebrated, no matter how small. Recognizing your achievements is key to building confidence and continuing your growth journey.",
    imageSrc: "/stages/success.png",
    link: "/success",
},
{
    id: "Perfectionism",
    title: "Perfectionism",
    subtitle: "The P Effect",
    description:
    "Perfectionism is a personality characteristic, which is defined as “striving for flawlessness and setting ex...",
    fullDescription:
    "Perfectionism is a personality characteristic, which is defined as “striving for flawlessness and setting exceedingly high standards for performance, accompanied by tendencies for overly critical evaluations” (Stoeber, 2011).",
    imageSrc: "/stages/perfect.png",
    link: "/stage-4",
},
{
    id: "The let downs",
    title: "The let downs",
    subtitle: "The lingering F",
    description:
    "Failure is defined as the gap between what is expected or desired and what is actually experienced – Henry....",
    fullDescription:
    "Failure is defined as the gap between what is expected or desired and what is actually experienced – Henry et al 2019 ",
    imageSrc: "/stages/down.png",
    link: "/let-downs",
},
{
    id: "Self Compassion",
    title: "Self Compassion",
    subtitle: "Because self-love is needed",
    description:
    "“the awareness that arises from paying attention, on purpose, in the present moment and non-judgment...",
    fullDescription:
    " “the awareness that arises from paying attention, on purpose, in the present moment and non-judgmentally.- Jon Kabat – Zinn ",
    imageSrc: "/stages/self.png",
    link: "/stage-6",
},
{
    id: "Acceptance",
    title: "Acceptance",
    subtitle: "see you through the looking glass",
    description:
    "During “Acceptance,” one is open to the reality of the present moment without being in a state of belief or disbelief...",
    fullDescription:
    "During “Acceptance,” one is open to the reality of the present moment without being in a state of belief or disbelief (Roemer & Orsillo, 2003). Acceptance is a key component of mindfulness and is the ability to be present in the moment without judgment.",
    imageSrc: "/stages/accept.png",
    link: "/stage-7",
},
];

return (
<div className="px-10 pb-10 bg-white">
    <h1 className="text-4xl font-bold my-10">Start Your Test</h1>
    <div className="flex flex-wrap justify-between">
    {cardData.map((card) => (
        <div
        key={card.id}
        className="bg-gray-200 rounded-md cursor-pointer shadow-lg overflow-hidden mb-10 w-full md:w-[30%] transform hover:scale-105 transition-transform duration-300"
        >
        <img
            src={card.imageSrc}
            alt={card.title}
            className="w-full h-48 object-cover"
        />
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2 text-black">{card.title}</h2>
            <h3 className="text-gray-500 mb-4">{card.subtitle}</h3>
            <p className="text-gray-700 mb-4">
            {expandedCard === card.id
                ? card.fullDescription
                : card.description}
            {card.fullDescription !== card.description && (
                <span
                onClick={() => handleToggle(card.id)}
                className="text-blue-500 cursor-pointer ml-2"
                >
                {expandedCard === card.id ? "Show Less" : "Read More"}
                </span>
            )}
            </p>
            <Link href={card.link}>
            <button className="bg-[#11857D] text-white py-1 px-4 rounded-md flex items-center justify-center hover:bg-[#11857D] w-auto">
                Start ➔
            </button>
            </Link>
        </div>
        </div>
    ))}
    </div>
    <div className="flex justify-center mt-10">
    <button className="bg-[#11857D] text-white py-2 px-6 rounded-lg flex items-center justify-center hover:bg-[#11857D] w-auto">
        Download Data ↓
    </button>
    </div>
</div>
);
};

export default Dashboard;
