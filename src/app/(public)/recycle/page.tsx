import React from "react";

const Recycle = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-[#374151] mb-6 text-center">
        Recycle for a Better Planet
      </h1>
      <div className="space-y-10">
        {/* Hero Section */}
        <section className="bg-green-100 p-6 rounded-md text-center">
          <h2 className="text-2xl font-semibold text-green-800">
            Why Recycling Matters
          </h2>
          <p className="text-gray-700 mt-2">
            Recycling helps conserve resources, reduces pollution, and protects
            our environment for future generations. Start recycling today and be
            a part of the change.
          </p>
        </section>

        {/* Steps to Recycle */}
        <section>
          <h2 className="text-3xl font-medium text-[#374151] mb-4">
            Steps to Recycle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="bg-gray-100 p-4 rounded-md shadow-md text-center">
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                1. Collect
              </h3>
              <p className="text-gray-600">
                Gather recyclable items like paper, plastics, and metals.
              </p>
            </div>
            {/* Step 2 */}
            <div className="bg-gray-100 p-4 rounded-md shadow-md text-center">
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                2. Sort
              </h3>
              <p className="text-gray-600">
                Separate items based on their material type.
              </p>
            </div>
            {/* Step 3 */}
            <div className="bg-gray-100 p-4 rounded-md shadow-md text-center">
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                3. Recycle
              </h3>
              <p className="text-gray-600">
                Send the sorted items to your nearest recycling center.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section>
          <h2 className="text-3xl font-medium text-[#374151] mb-4">
            Benefits of Recycling
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Reduces waste in landfills.</li>
            <li>Conserves natural resources.</li>
            <li>Lowers energy consumption during manufacturing.</li>
            <li>Helps combat climate change by reducing emissions.</li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="bg-green-600 text-white p-6 rounded-md text-center">
          <h2 className="text-2xl font-semibold mb-2">
            Join Our Recycling Program
          </h2>
          <p className="mb-4">
            Sign up today to contribute to a sustainable future. Together, we
            can make a difference!
          </p>
          <button className="bg-white text-green-600 px-4 py-2 rounded-md shadow hover:bg-gray-200">
            Get Started
          </button>
        </section>
      </div>
    </div>
  );
};

export default Recycle;
