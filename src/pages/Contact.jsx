import React from "react";
import contactNow from "../assets/shopme.jpg";

const Contact = () => {
  return (
    <div className="space-y-10 px-4 min-h-[80vh]">
      {/* Header Section */}
      <div className="py-8 text-center">
        <h2 className="text-5xl font-medium text-gray-500 mb-3">
          CONTACT <span className="text-gray-700">US</span>
        </h2>
        <p className="w-3/4 mx-auto text-xs sm:text-sm md:text-lg text-gray-600">
          Have questions or need assistance? We're here to help! Reach out to us
          for support, inquiries, or just to say hello — we’d love to hear from
          you.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="w-full md:w-1/2  overflow-hidden rounded-lg">
          <img
            src={contactNow}
            alt="Contact Us"
            className="w-full h-full object-cover "
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-8 text-gray-600 text-sm sm:text-base md:w-1/2">
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-1">
              Our Store
            </h3>
            <div className="flex flex-col space-y-2">
              <p>54709 Willms Station</p>
              <p>Suite 350, Sydney, Australia</p>
              <p>Tel: (+61415) 555-012</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:admin@trueEvents.com"
                  className="text-blue-500 underline"
                >
                  admin@trueEvents.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-1">
              Careers at VibeMart
            </h3>
            <div className="flex flex-col space-y-2">
              <p>Learn more about our teams and current job openings.</p>
              <a href="/" className="text-blue-500 underline mt-1 inline-block">
                View Careers
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
