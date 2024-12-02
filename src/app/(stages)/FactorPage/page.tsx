 'use client';

// import { Button } from '@/components/ui/button';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';
// import { toast } from 'sonner';
// import { useFactorStore } from '../../../store';

// const FactorPage = () => {
//   const router = useRouter();
//   const { text, images, setText, setImages, reset } = useFactorStore();
//   const [localText, setLocalText] = useState<string>(text);
//   const [selectedFiles, setSelectedFiles] = useState<File[]>(images);

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files) {
//       const filesArray = Array.from(event.target.files);
//       setSelectedFiles((prevFiles) => [...prevFiles, ...filesArray].slice(0, 5));
//     }
//   };

//   const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();
//     const files = event.dataTransfer.files;
//     const filesArray = Array.from(files);
//     setSelectedFiles((prevFiles) => [...prevFiles, ...filesArray].slice(0, 5));
//   };

//   const handleSubmit = () => {
//     if (localText && selectedFiles.length) {
//       setText(localText);
//       setImages(selectedFiles);
  
//       // Mark stage as completed
//       const completedStages = JSON.parse(localStorage.getItem('completedStages') || '[]');
//       if (!completedStages.includes('facts')) {
//         completedStages.push('facts'); // Use the stage's unique ID
//         localStorage.setItem('completedStages', JSON.stringify(completedStages));
//       }
  
//       console.log('Form submitted', { text: localText, selectedFiles });
//       router.push(`/post-stage?origin=1`);
//     } else {
//       toast.info('Please fill all the fields');
//     }
//   };

//   return (
//     <div className="p-8 mx-auto max-w-4xl bg-white text-black rounded-3xl ">
//       <h1 className="text-3xl font-semibold mb-4">Facts</h1>
//       <h2 className="text-xl font-semibold mb-2 text-slate-500">The F Factor</h2>
//       <p className="text-lg mb-6 text-black">
//         Imposter syndrome (also commonly termed imposter phenomenon, fraud syndrome, impostors, and perceived fraudulence) 
//         was first described in 1978 by Suzanne Imes, Ph.D.
//       </p>
//       <p className="text-sm mb-6">
//         Now given that we are beginning and today's world is not void of knowledge, try posting a fact about IP in words or a picture and create an expression board.
//       </p>

//       <textarea
//         className="w-full p-2 mb-4 border-2 rounded-md focus:outline-none focus:border-2 focus:border-slate-700"
//         rows={5}
//         placeholder="Share your thoughts or facts here..."
//         value={localText}
//         onChange={(e) => setLocalText(e.target.value)}
//       />

//       <div
//         onDrop={handleDrop}
//         onDragOver={(event) => event.preventDefault()}
//         className="w-full p-4 mb-4 border-2 border-dashed rounded-md border-gray-300 flex flex-col items-center justify-center cursor-pointer"
//       >
//         <p className="text-gray-500 mb-2">Drag and drop up to 5 images here</p>
//         <input
//           type="file"
//           multiple
//           accept="image/*"
//           onChange={handleFileChange}
//           className="hidden"
//           id="image-upload"
//         />
//         <label htmlFor="image-upload" className="cursor-pointer text-teal-500">
//           Or click to select images
//         </label>
//       </div>

//       <div className="grid grid-cols-3 gap-4 mb-4">
//         {selectedFiles.map((file, index) => (
//           <div key={index} className="relative w-full h-24 bg-gray-100 rounded-md overflow-hidden">
//             <Image
//               src={URL.createObjectURL(file)}
//               alt={`Selected image ${index + 1}`}
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//         ))}
//       </div>

//       <div className="flex items-center justify-center flex-col">
//         <Button
//           onClick={handleSubmit}
//           className="bg-teal-900 text-white py-2 rounded-lg flex items-center justify-center hover:bg-teal-700 my-4 px-6 text-lg"
//         >
//           Submit
//         </Button>
//         <p className="font-light text-slate-500 text-sm mt-3 cursor-pointer">Report a problem?</p>
//         <Button
//           onClick={() => router.push('/dashboard')}
//           variant="outline"
//           className="border-2 border-teal-900 mt-2"
//         >
//           Back to Home Page
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default FactorPage;

// 'use client';

// 'use client';

// import { Button } from '@/components/ui/button';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';
// import { toast } from 'sonner';
// import { useFactorStore } from '../../../store';

// const FactorPage = () => {
//   const router = useRouter();
//   const { text, images, setText, setImages } = useFactorStore();
//   const [localText, setLocalText] = useState<string>(text);
//   const [selectedFiles, setSelectedFiles] = useState<File[]>(images);

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files) {
//       const filesArray = Array.from(event.target.files);
//       setSelectedFiles((prevFiles) => [...prevFiles, ...filesArray].slice(0, 5));
//     }
//   };

//   const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();
//     const files = event.dataTransfer.files;
//     const filesArray = Array.from(files);
//     setSelectedFiles((prevFiles) => [...prevFiles, ...filesArray].slice(0, 5));
//   };

//   const handleSubmit = () => {
//     if (localText && selectedFiles.length) {
//       setText(localText);
//       setImages(selectedFiles);

//       // Mark stage as completed
//       const completedStages = JSON.parse(localStorage.getItem('completedStages') || '[]');
//       if (!completedStages.includes('facts')) {
//         completedStages.push('facts'); // Use the stage's unique ID
//         localStorage.setItem('completedStages', JSON.stringify(completedStages));
//       }

//       console.log('Form submitted', { text: localText, selectedFiles });
//       router.push(`/post-stage?origin=1`);
//     } else {
//       toast.info('Please fill all the fields');
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-gray-50">
//       {/* Gradient Background Section */}
//       <div className="w-full bg-gradient-to-br from-green-200 via-white to-purple-200 py-12">
//         <h1 className="text-3xl font-semibold text-black text-center">Facts</h1>
//       </div>

//       {/* Content Section */}
//       <div className="w-full max-w-4xl mt-8 flex flex-col items-center px-6">
//         <h2 className="text-xl font-semibold mb-2 text-slate-500 text-center">The F Factor</h2>
//         <p className="text-lg mb-6 text-black text-center">
//           Imposter syndrome (also commonly termed imposter phenomenon, fraud syndrome, impostors, and perceived fraudulence) 
//           was first described in 1978 by Suzanne Imes, Ph.D.
//         </p>
//         <p className="text-sm mb-6 text-center">
//           Now given that we are beginning and today's world is not void of knowledge, try posting a fact about IP in words or a picture and create an expression board.
//         </p>

//         <textarea
//           className="w-full p-2 mb-4 border-2 rounded-md focus:outline-none focus:border-2 focus:border-slate-700"
//           rows={5}
//           placeholder="Share your thoughts or facts here..."
//           value={localText}
//           onChange={(e) => setLocalText(e.target.value)}
//         />

//         <div
//           onDrop={handleDrop}
//           onDragOver={(event) => event.preventDefault()}
//           className="w-full p-4 mb-4 border-2 border-dashed rounded-md border-gray-300 flex flex-col items-center justify-center cursor-pointer"
//         >
//           <p className="text-gray-500 mb-2">Drag and drop up to 5 images here</p>
//           <input
//             type="file"
//             multiple
//             accept="image/*"
//             onChange={handleFileChange}
//             className="hidden"
//             id="image-upload"
//           />
//           <label htmlFor="image-upload" className="cursor-pointer text-teal-500">
//             Or click to select images
//           </label>
//         </div>

//         <div className="grid grid-cols-3 gap-4 mb-4">
//           {selectedFiles.map((file, index) => (
//             <div key={index} className="relative w-full h-24 bg-gray-100 rounded-md overflow-hidden">
//               <Image
//                 src={URL.createObjectURL(file)}
//                 alt={`Selected image ${index + 1}`}
//                 layout="fill"
//                 objectFit="cover"
//               />
//             </div>
//           ))}
//         </div>

//         <Button
//           onClick={handleSubmit}
//           className="bg-teal-900 text-white py-2 rounded-lg flex items-center justify-center hover:bg-teal-700 my-4 px-6 text-lg"
//         >
//           Submit
//         </Button>
//         <p className="font-light text-slate-500 text-sm mt-3 cursor-pointer">Report a problem?</p>
//         <Button
//           onClick={() => router.push('/dashboard')}
//           variant="outline"
//           className="border-2 border-teal-900 mt-2 mb-10"
//         >
//           Back to Home Page
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default FactorPage;


'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import { useFactorStore } from '../../../store';

const FactorPage = () => {
  const router = useRouter();
  const { text, images, setText, setImages } = useFactorStore();
  const [localText, setLocalText] = useState<string>(text);
  const [selectedFiles, setSelectedFiles] = useState<File[]>(images);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setSelectedFiles((prevFiles) => [...prevFiles, ...filesArray].slice(0, 5));
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    const filesArray = Array.from(files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...filesArray].slice(0, 5));
  };

  const handleSubmit = () => {
    if (localText && selectedFiles.length) {
      setText(localText);
      setImages(selectedFiles);

      // Mark stage as completed
      const completedStages = JSON.parse(localStorage.getItem('completedStages') || '[]');
      if (!completedStages.includes('facts')) {
        completedStages.push('facts'); // Use the stage's unique ID
        localStorage.setItem('completedStages', JSON.stringify(completedStages));
      }

      console.log('Form submitted', { text: localText, selectedFiles });
      router.push(`/post-stage?origin=1`);
    } else {
      toast.info('Please fill all the fields');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      {/* Gradient Background Section */}
      <div className="w-full bg-gradient-to-b from-green-200 via-white to-transparent py-20">
        <h1 className="text-3xl font-semibold text-black text-center">Facts</h1>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-4xl -mt-12 flex flex-col items-center px-6">
        <h2 className="text-xl font-semibold mb-2 text-slate-500 text-center">The F Factor</h2>
        <p className="text-lg mb-6 text-black text-center">
          Imposter syndrome (also commonly termed imposter phenomenon, fraud syndrome, impostors, and perceived fraudulence) 
          was first described in 1978 by Suzanne Imes, Ph.D.
        </p>
        <p className="text-sm mb-6 text-center">
          Now given that we are beginning and today's world is not void of knowledge, try posting a fact about IP in words or a picture and create an expression board.
        </p>

        <textarea
          className="w-full p-2 mb-4 border-2 rounded-md focus:outline-none focus:border-2 focus:border-slate-700"
          rows={5}
          placeholder="Share your thoughts or facts here..."
          value={localText}
          onChange={(e) => setLocalText(e.target.value)}
        />

        <div
          onDrop={handleDrop}
          onDragOver={(event) => event.preventDefault()}
          className="w-full p-4 mb-4 border-2 border-dashed rounded-md border-gray-300 flex flex-col items-center justify-center cursor-pointer"
        >
          <p className="text-gray-500 mb-2">Drag and drop up to 5 images here</p>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            id="image-upload"
          />
          <label htmlFor="image-upload" className="cursor-pointer text-teal-500">
            Or click to select images
          </label>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          {selectedFiles.map((file, index) => (
            <div key={index} className="relative w-full h-24 bg-gray-100 rounded-md overflow-hidden">
              <Image
                src={URL.createObjectURL(file)}
                alt={`Selected image ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>

        <Button
          onClick={handleSubmit}
          className="bg-teal-900 text-white py-2 rounded-lg flex items-center justify-center hover:bg-teal-700 my-4 px-6 text-lg"
        >
          Submit
        </Button>
        <p className="font-light text-slate-500 text-sm mt-3 cursor-pointer">Report a problem?</p>
        <Button
          onClick={() => router.push('/dashboard')}
          variant="outline"
          className="border-2 border-teal-900 mt-2"
        >
          Back to Home Page
        </Button>
      </div>
    </div>
  );
};

export default FactorPage;
