'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from "sonner";

const questions = [
  "Self-doubt; I often second guess myself",
  "I fear being discovered that my success is due to Luck and good charm",
  "I have difficulty accepting that things have happened due to my hard work",
  "I often overwork myself hard to impress others and more to show them that I am capable",
  "I am always over concerned about how I performed even if I have passed or gotten good outcomes",
  "I think my successes are due to someone else or something that I have or was given.",
  "I often prefer to push myself to perfectionism.",
  "There are times that I feel I am not competent – it kind of happens too often these days.",
  "I feel anxious every time I am given a goal/task to finish even if there is ample time.",
  "I often feel burned out and overwhelmed.",
  "There is no satisfaction with my work even if I finish it on time."
];

const gradients = [
  "bg-teal-500",
  "bg-teal-600",
  "bg-teal-700",
  "bg-teal-700",
  "bg-teal-800",
  "bg-teal-800",
  "bg-teal-800",
  "bg-teal-900",
  "bg-teal-900",
  "bg-teal-950",
];

const AssessmentPage = () => {
  const router = useRouter();
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleAnswerChange = (index: number, value: number) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const calculatePercentage = (answers: any[], max = 10) => {
    const validAnswers = answers.filter((answer: null) => answer !== null);
    if (validAnswers.length === 0) return "0%";
    const sum = validAnswers.reduce((acc: any, val: any) => acc + val, 0);
    const average = sum / validAnswers.length;
    const percentage = (average / max) * 100;
    return percentage.toFixed(2) + "%";
  };

  const handleSubmit = () => {
    const unanswered = answers.includes(null);
    if (unanswered) {
      toast.warning("Please answer all the questions before submitting.");
      return;
    }

    const score = calculatePercentage(answers);

    const queryParams = new URLSearchParams({ score });
    questions.forEach((_, index) => {
      if (answers[index] !== null) {
        queryParams.append(`q${index + 1}`, answers[index]!.toString());
      }
    });

    router.push(`/result?${queryParams.toString()}`);
  };

  return (
    <>
      <div className="p-8 mx-auto bg-white text-black">
        <h1 className="text-3xl font-semibold mb-8">Imposter Phenomena Questionnaire</h1>
        {questions.map((question, index) => (
          <div key={index} className="mb-8">
            <div className='flex flex-row'>
              <p className="mb-4 text-lg pr-5">Q{index+1}:</p>
              <div className='flex flex-col'>
                <p className="mb-4 text-lg">{question}</p>
                <div className="flex space-x-5">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, i) => (
                    <button
                      key={num}
                      className={`w-10 h-10 rounded-md text-white ${gradients[i]} ${
                        answers[index] === num ? "ring-2 ring-offset-2 ring-yellow-500" : ""
                      }`}
                      onClick={() => handleAnswerChange(index, num)}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex items-center justify-center p-5'>
        <button
          className="bg-teal-900  ease-in-out transition-all text-white px-4 py-2 rounded-md hover:bg-teal-500 flex items-center"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default AssessmentPage;
