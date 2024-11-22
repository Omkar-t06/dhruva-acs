import React from 'react'
import { Button } from "@/components/ui/button";

function AboutUs() {
  return (
    <div>
      <h2 className="text-[#003366] font-semibold text-lg lg:text-xl m-8">About Us</h2>
        <h1 className="text-black font-extrabold text-3xl sm:text-4xl lg:text-5xl mt-2 m-8">
        What We Do
        </h1>
        <pre className="text-sm sm:text-base lg:text-lg font-light text-gray-700 whitespace-pre-line bg-white p-4 rounded-md border border-gray-200 mt-6">
          {`We are developing a user-friendly, encrypted system that ensures complete anonymity and privacy for individuals reporting critical issues.
          Acting as a bridge between users and government bodies, we enable the secure and efficient relay of complaints to drive accountability and action.
`}
        </pre>
        <Button
          className="mt-6 m-8 px-6 py-3 text-white bg-[#003366] rounded-md font-semibold text-lg transition-transform transform hover:scale-105 hover:bg-[#003366]/90"
          variant="outline"
        >
          Read More
        </Button>
    </div>
  )
}

export default AboutUs
