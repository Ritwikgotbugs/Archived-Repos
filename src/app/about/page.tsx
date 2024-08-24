
import React from 'react';

const About: React.FC = () => {
return (
<section className="bg-white py-12">
    <div className="container mt-10  mb-10 px-4 flex flex-col items-center text-left">
    {/* Hero Title and Button */}
    <h1 className="text-4xl font-bold text-gray-800 mb-2">
    About us
    </h1>
    
    
    

    {/* New Text Content */}
    <div className="text-left align-baseline max-w-4xl mt-10">
    
        <p className="text-black mb-6">
        Tackling Impostor Phenomena – a step out for a better life
        The concept of being constantly on the move to either achieve goals or make ends meet, be it socially, academically, or professionally at times comes at any cost of evaluating oneself.</p>
        <p className="text-black mb-6">

“Impostor phenomena (IP) is an outcome that results from behavioral health processing when he/she experiences self-doubt concerning intelligence, skill and accomplishments.” (Huecker et al 2023)
When one internalizes this behavior, they are likely to develop pervasive/ atypical feelings of self-doubt, anxiety, depression or apprehension of rating success as non-rewarding/non-existent!
        </p>
        <p className="text-black mb-6">

So, Welcome to an at-ease approach to addressing Imposer Phenomena
This Small program is a seven-step process that helps you in the journey of discovery. It aims to provide you with a easy track that can address how one can overcome self-doubt, build resilience and overall address either the occurrence or presence of IP.
</p>


        
        <p className="text-black font-semibold italic">
        (Note: Feel free to go through the program if it is just for the experience or to enjoy some uplifting of self in a self-asserted manner)
        </p>
    </div>
    </div>

</section>


);
};

export default About;