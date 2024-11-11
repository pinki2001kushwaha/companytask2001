import React from 'react';

const ResponsiveForm = () => {
  return (
    <div className="container mx-auto p-4 pt-24">
      <h2 className="text-center text-xl font-bold mb-6">Pro Form Layout</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 shadow rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Contact Form 2</h3>
          <form>
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <label className="block mb-2">First name</label>
                <input
                  type="text"
                  className="w-full border rounded p-2"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="flex-1">
                <label className="block mb-2">Last name</label>
                <input
                  type="text"
                  className="w-full border rounded p-2"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Email</label>
              <input
                type="email"
                className="w-full border rounded p-2"
                placeholder="yourmail@gmail.com"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Phone</label>
              <input
                type="tel"
                className="w-full border rounded p-2"
                placeholder="(321) 555-0115"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Select option</label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input type="radio" name="option" className="mr-2" />
                  Graphics Design
                </label>
                <label className="flex items-center">
                  <input type="radio" name="option" className="mr-2" />
                  Web Development
                </label>
                <label className="flex items-center">
                  <input type="radio" name="option" className="mr-2" />
                  Logo Design
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Message</label>
              <textarea
                className="w-full border rounded p-2"
                placeholder="Type your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Survey Form */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Survey Form</h3>
          <form>
            <div className="mb-4">
              <label className="block mb-2">Name</label>
              <input
                type="text"
                className="w-full border rounded p-2"
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Email</label>
              <input
                type="email"
                className="w-full border rounded p-2"
                placeholder="Enter your email address"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Age</label>
              <input
                type="number"
                className="w-full border rounded p-2"
                placeholder="Enter your age"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Which option best describes you?</label>
              <select className="w-full border rounded p-2">
                <option>Select your subject</option>
                <option>Graphics Designer</option>
                <option>Web Developer</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Would you recommend our site to a friend?</label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input type="radio" name="recommend" className="mr-2" />
                  Yes
                </label>
                <label className="flex items-center">
                  <input type="radio" name="recommend" className="mr-2" />
                  No
                </label>
                <label className="flex items-center">
                  <input type="radio" name="recommend" className="mr-2" />
                  Maybe
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveForm;
