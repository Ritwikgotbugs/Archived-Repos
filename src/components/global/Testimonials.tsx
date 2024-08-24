import React from 'react';

interface TestimonialProps {
  name: string;
  role: string;
  imageSrc: string;
  text: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: 'Dr. Carl Jackson',
    role: 'Lorem ipsum',
    imageSrc: './Group 12.png', // Replace with actual image paths
    text: '"Lorem ipsum is just sample text to take empty spaces"',
  },
  {
    name: 'Dr. Carl Jackson',
    role: 'Lorem ipsum',
    imageSrc: './Rectangle 8.png',
    text: '"Lorem ipsum is just sample text to take empty spaces"',
  },
  {
    name: 'Dr. Carl Jackson',
    role: 'Lorem ipsum',
    imageSrc: './doc.png',
    text: '"Lorem ipsum is just sample text to take empty spaces"',
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-white py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">See what others have to say</h2>
        <div className="flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/3 p-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <img
                  src={testimonial.imageSrc}
                  alt={testimonial.name}
                  className="w-150 h-150 rounded-lg mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.role}</p>
                <p className="mt-4 text-gray-800">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
