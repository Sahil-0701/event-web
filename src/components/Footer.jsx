const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-10 px-6 bg-gray-900">
      <hr className="border-gray-300" />
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14  text-sm text-gray-100 py-5">
        <div>
          <h1 className="text-xl font-bold mb-5">GET TO KNOW US</h1>
          <p className="w-full sm:w-2/3 text-gray-100 text-lg">
            True Events is your all-in-one sports event management platform
            designed to power every stage of your event journey — from
            discovering and promoting trending tournaments, managing team
            registrations, scheduling fixtures, tracking live stats and
            attendance, to delivering immersive fan experiences — all backed by
            real-time insights, secure operations, and a seamless digital
            interface trusted by organizers, athletes, and fans alike.
          </p>
        </div>

        <nav>
          <p className="text-xl font-bold mb-5">COMPANY</p>
          <ul className="flex flex-col text-gray-100 cursor-pointer text-lg">
            <li className="mb-2" onClick={scrollToTop}>
              Home
            </li>
            <li className="mb-2" onClick={scrollToTop}>
              About Us
            </li>
            <li className="mb-2" onClick={scrollToTop}>
              Contact us
            </li>
            <li className="mb-2" onClick={scrollToTop}>
              Privacy Policy
            </li>
          </ul>
        </nav>

        <address className="not-italic">
          <p className="text-xl font-bold mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col text-gray-100 text-lg">
            <li className="mb-2">
              <a href="tel:+61415555012" className="hover:underline">
                +123 456 7890
              </a>
            </li>
            <li className="mb-2">
              <a
                href="mailto:contact@trueEvents.com"
                className="hover:underline"
              >
                contact@trueEvents.com
              </a>
            </li>
          </ul>
        </address>
      </div>

      {/* Bottom Bar */}
      <hr className="border-gray-300" />
      <p className="py-5 text-sm text-center text-gray-100">
        © 2025 trueEvents.com — All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
