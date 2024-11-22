import React from 'react';
import { Button } from "@/components/ui/button";

function ContactUs() {
  return (
    <div>
      <h2 className="text-[#003366] font-semibold text-lg lg:text-xl m-8">
        Contact Us
      </h2>
      <h1 className="text-black font-extrabold text-3xl sm:text-4xl lg:text-5xl mt-2 m-8">
        Send a Message
      </h1>
      <pre className="text-sm sm:text-base lg:text-lg font-light text-gray-700 whitespace-pre-line bg-white p-4 rounded-md border border-gray-200 mt-6 m-8">
        {`Your voice matters. If you have a concern or need to report an issue, send us a message anonymously and securely. 
        Together, we can make a difference!`}
      </pre>
      <div className="mb-6 m-8">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Email address
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-6"
          placeholder="john.doe@company.com"
          required
        />
      </div>
      <div className="mb-6 m-8">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your message
        </label>
        <textarea
          id="message"
          rows= {4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-6"
          placeholder="Write your problem here..."
        ></textarea>
      </div>
      <Button
          className="mt-6 px-6 py-3 text-white bg-[#003366] rounded-md font-semibold text-lg transition-transform transform hover:scale-105 hover:bg-[#003366]/90 m-8"
          variant="outline"
        >
          Submit
        </Button>
    </div>
  );
}

export default ContactUs;





