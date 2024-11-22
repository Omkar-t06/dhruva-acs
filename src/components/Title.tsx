'use client';
import { Button } from "@/components/ui/button";
//import Spline from '@splinetool/react-spline/next';


function Title() {
  return (
    <div className="p-6 sm:p-10 lg:p-16 bg-gray-50 rounded-lg shadow-md">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black leading-tight mb-6">
        Anonymous Complaint System
      </h1>

      {/* Subtitle */}
      <h2 className="text-base sm:text-lg lg:text-xl font-medium text-[#003366]-600 mb-8">
        A Secure Platform for Giving a Voice to the Voiceless
      </h2>

      {/* Description */}
      <pre className="text-sm sm:text-base lg:text-lg font-light text-gray-700 whitespace-pre-line mb-8 bg-white p-4 rounded-md border border-gray-200">
        {`Dhruva is an anonymous complaint platform enabling secure, confidential reporting of critical issues.
It connects citizens with authorities while ensuring complete privacy through robust encryption.
Dhruva empowers individuals to raise their voices without fear, fostering justice and accountability.`}
      </pre>

      {/* Button */}
      <Button
        className="px-6 py-3 text-white bg-[#003366] rounded-md font-semibold text-lg transition-transform transform hover:scale-105 hover:bg-[#003366]/90"
        variant="outline"
      >
        Raise Complaint
      </Button>
      {/* <Spline
      scene="https://prod.spline.design/sN3P733YFn4fOCLL/scene.splinecode" 
      /> */}

    </div>
  );
}

export default Title;


