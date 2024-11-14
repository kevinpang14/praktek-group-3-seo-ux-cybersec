import React from "react";
import DOMpurify from "dompurify";

const ContactForm = () => {
  const sanitizeInput = (input) => {
    return DOMpurify.sanitize(input);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const sanitizedData = {
      firstName: sanitizeInput(formData.get("hs-firstname-contacts-1")),
      email: sanitizeInput(formData.get("hs-email-contacts-1")),
      phoneNumber: sanitizeInput(formData.get("hs-phone-number-1")),
      details: sanitizeInput(formData.get("hs-about-contacts-1")),
    };
    console.log("Sanitized Data:", sanitizedData);
  };

  return (
    <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 w-1/2">
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4">
          {/* Grid */}
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="hs-firstname-contacts-1" className="sr-only">
                First Name
              </label>
              <input
                type="text"
                name="hs-firstname-contacts-1"
                id="hs-firstname-contacts-1"
                className="py-3 px-4 block w-full border-gray-200 bg-secondary rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                placeholder="First Name"
                required
              />
            </div>
          </div>
          {/* End Grid */}
          <div>
            <label htmlFor="hs-email-contacts-1" className="sr-only">
              Email
            </label>
            <input
              type="email"
              name="hs-email-contacts-1"
              id="hs-email-contacts-1"
              autoComplete="email"
              className="py-3 px-4 block w-full border-gray-200 bg-secondary rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label htmlFor="hs-phone-number-1" className="sr-only">
              Phone Number
            </label>
            <input
              type="text"
              name="hs-phone-number-1"
              id="hs-phone-number-1"
              className="py-3 px-4 block w-full border-gray-200 bg-secondary rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
              placeholder="Phone Number"
              required
            />
          </div>
          <div>
            <label htmlFor="hs-about-contacts-1" className="sr-only">
              Details
            </label>
            <textarea
              id="hs-about-contacts-1"
              name="hs-about-contacts-1"
              rows={4}
              className="py-3 px-4 block w-full border-gray-200 bg-secondary rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
              placeholder="Details"
              defaultValue={""}
              required
            />
          </div>
        </div>
        {/* End Grid */}
        <div className="mt-4 grid">
          <button
            type="submit"
            className="w-32 py-3 px-4 inline-flex justify-center items-left gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-accent text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            Send Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
