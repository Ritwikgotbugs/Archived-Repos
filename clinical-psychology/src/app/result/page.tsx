'use client';
import { useRouter, useSearchParams } from 'next/navigation';

const Result: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const score = searchParams.get('score');
  const numericScore = parseFloat(score as string);

  const getScoreFeedback = (): string => {
    if (numericScore <= 29) return "Negligible";
    if (numericScore <= 50) return "Mild to Moderate";
    if (numericScore <= 70) return "Moderate";
    return "Hmm, you definitely need a hand";
  };

  const getBoxClass = (min: number, max: number): string => {
    return numericScore >= min && numericScore <= max
      ? 'bg-teal-900 text-white'
      : 'bg-gray-300 text-black';
  };

  return (
    <div className="p-8 mx-auto text-center bg-white text-black">
      <h1 className="text-4xl font-bold mb-8">Your Score: {numericScore}%</h1>
      <p className="text-2xl font-semibold mb-8">{getScoreFeedback()}</p>
      
      <button
        className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-500"
        onClick={() => router.push('/dashboard')}
      >
        Get Started
      </button>

      <div className="mt-12 grid md:grid-cols-4 grid-cols-1 gap-4">
        <div className={`p-4 rounded-md ${getBoxClass(0, 29)}`}>
          <h2 className="text-xl font-semibold">0% - 29%</h2>
          <p>Negligible</p>
        </div>
        <div className={`p-4 rounded-md ${getBoxClass(30, 50)}`}>
          <h2 className="text-xl font-semibold">30% - 50%</h2>
          <p>Mild to Moderate</p>
        </div>
        <div className={`p-4 rounded-md ${getBoxClass(51, 70)}`}>
          <h2 className="text-xl font-semibold">51% - 70%</h2>
          <p>Moderate</p>
        </div>
        <div className={`p-4 rounded-md ${getBoxClass(71, 100)}`}>
          <h2 className="text-xl font-semibold">71% - 100%</h2>
          <p>Hmm, you definitely need a hand</p>
        </div>
      </div>
    </div>
  );
};

export default Result;
