import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import { doc, getDoc, writeBatch, collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/client';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

interface CheckboxGroupProps {
  title: string;
  options: string[];
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ title, options }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [showGraph, setShowGraph] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [chartData, setChartData] = useState<any>(null);

  const handleCheckboxChange = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleSubmit = async () => {
    if (selectedOptions.length === 0) {
      toast.error('Please select at least one option');
      return;
    }
    if (showGraph) {
      return;
    }

    const batch = writeBatch(db);
    const wordsCollection = title.toLowerCase().replaceAll(' ', '-');
    for (const word of selectedOptions) {
      const wordDocRef = doc(db, wordsCollection, word);

      try {
        const docSnapshot = await getDoc(wordDocRef);
        if (docSnapshot.exists()) {
          const currentValue = docSnapshot.data().value || 0;
          batch.update(wordDocRef, { value: currentValue + 1 });
        } else {
          batch.set(wordDocRef, { value: 1 });
        }
      } catch (error) {
        console.error('Error updating Firestore: ', error);
        toast.error('Error updating Firestore. Please try again later.');
        return;
      }
    }
    try {
      await batch.commit();
      setShowGraph(true);
      setIsSubmitted(true);
      fetchChartData(wordsCollection);
    } catch (error) {
      console.error('Error committing batch: ', error);
    }
  };

  const fetchChartData = async (wordsCollection: string) => {
    try {
      const collectionRef = collection(db, wordsCollection);
      const querySnapshot = await getDocs(collectionRef);
      const labels: string[] = [];
      const values: number[] = [];

      querySnapshot.forEach((doc) => {
        labels.push(doc.id);
        values.push(doc.data().value);
      });

      setChartData({
        labels,
        datasets: [
          {
            label: 'Word Frequency',
            data: values,
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#4BC0C0',
              '#9966FF',
              '#FF9F40',
              '#E7E9ED',
            ],
            hoverBackgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#4BC0C0',
              '#9966FF',
              '#FF9F40',
              '#E7E9ED',
            ],
          },
        ],
      });
    } catch (error) {
      console.error('Error fetching chart data: ', error);
    }
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        color: '#fff',
        formatter: (value: number, context: any) => {
          const label = context.chart.data.labels[context.dataIndex];
          const total = context.chart.data.datasets[0].data.reduce((acc: number, val: number) => acc + val, 0);
          const percentage = ((value / total) * 100).toFixed(1) + '%';
          return `${label}: ${percentage}`;
        },
        anchor: 'end',
        align: 'start',
        offset: 10,
      },
      legend: {
        position: 'bottom',
      },
    },
  };

  const handleToggleGraph = () => {
    if (!isSubmitted) {
      toast.error('Please submit your answers before viewing the graph.');
      return;
    }
    setShowGraph(!showGraph);
  };

  return (
    <div className="bg-gray-200 p-4 rounded-lg w-full max-w-3xl my-4">
      <h2 className="text-md font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-3 gap-2">
        {options.map(option => (
          <label key={option} className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              checked={selectedOptions.includes(option)}
              onChange={() => handleCheckboxChange(option)}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
      <div className='justify-center p-2 flex flex-row gap-x-2'>
        <Button
          className={`bg-teal-700 ${isSubmitted ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleSubmit}
          disabled={isSubmitted}
        >
          Submit answers
        </Button>
        <Button
          className='bg-teal-700'
          onClick={handleToggleGraph}
        >
          {showGraph ? 'Hide Graph' : 'Show Graph'}
        </Button>
      </div>
      {showGraph && chartData && (
        <div className="mt-4 justify-center flex items-center h-[300px]">
          <Pie data={chartData} options={chartOptions} />
        </div>
      )}
    </div>
  );
};

export default CheckboxGroup;
