'use client';
import React from 'react';
import { Button } from "@/components/ui/button";

function DhruvaDoes() {
  return (
    <div className="p-6 sm:p-10 lg:p-16 bg-gray-50">
      {/* Heading Section */}
      
        <h2 className="text-[#003366] font-semibold text-lg lg:text-xl">Our Benefits</h2>
        <h1 className="text-black font-extrabold text-3xl sm:text-4xl lg:text-5xl mt-2">
          What Dhruva Does
        </h1>
        <pre className="text-sm sm:text-base lg:text-lg font-light text-gray-700 whitespace-pre-line bg-white p-4 rounded-md border border-gray-200 mt-6">
          {`Druva connects users with government bodies, ensuring complaints are relayed anonymously to 
          the appropriate authorities while protecting user identity.
          Encourages reporting by fostering trust, streamlining communication, and enabling quicker,
          transparent responses from authorities.`}
        </pre>
        <Button
          className="mt-6 px-6 py-3 text-white bg-[#003366] rounded-md font-semibold text-lg transition-transform transform hover:scale-105 hover:bg-[#003366]/90"
          variant="outline"
        >
          Read More
        </Button>
      

      {/* Benefits Section */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-5">
        {/* Benefit Cards */}
        <div className="p-6 bg-[#003366]/[15%] rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-[#003366] mb-4">Anonymity and Security</h2>
          <pre className="text-sm text-gray-700 whitespace-pre-line bg-white p-4 rounded-md border border-gray-200">
            {`Protects user identity with robust encryption, 
            encouraging safe and fearless reporting.`}
          </pre>
        </div>
        <div className="p-6 bg-[#003366]/[15%] rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-[#003366] mb-4">Ease of Reporting</h2>
          <pre className="text-sm text-gray-700 whitespace-pre-line bg-white p-4 rounded-md border border-gray-200">
            {`Provides a simple, user-friendly platform accessible to diverse communities.`}
          </pre>
        </div>
        <div className="p-6 bg-[#003366]/[15%] rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-[#003366] mb-4">Faster Response</h2>
          <pre className="text-sm text-gray-700 whitespace-pre-line bg-white p-4 rounded-md border border-gray-200">
            {`Streamlines communication between users and 
            government bodies, enabling quicker actions.`}
          </pre>
        </div>
        <div className="p-6 bg-[#003366]/[15%] rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-[#003366] mb-4">Promotes Accountability</h2>
          <pre className="text-sm text-gray-700 whitespace-pre-line bg-white p-4 rounded-md border border-gray-200">
            {`Enhances transparency by ensuring authorities receive reliable, 
            anonymous complaints for effective resolution.`}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default DhruvaDoes;
