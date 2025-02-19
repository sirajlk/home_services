import { useLocation } from "react-router-dom";

const ContactUs = () => {

  const pathname = useLocation().pathname
  return (
    <div id="contact" className="bg-gray-100 w-full min-h-screen p-2 flex items-center">
        
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
    
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-700 mb-8">
            If you have any questions or would like to schedule a consultation with one of our real estate experts, please don't hesitate to contact us
            </p>
            <ul className="text-lg text-gray-700">
              <li className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                </svg>
                1234 Main St, Anytown USA 12345
              </li>
              <li className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4.5 8-11.8c0-4.1-2.3-7.6-5.5-9.4"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s-8-4.5-8-11.8c0-4.1 2.3-7.6 5.5-9.4"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
                (123) 456-7890
              </li>
              <li className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4.5 8-11.8c0-4.1-2.3-7.6-5.5-9.4"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s-8-4.5-8-11.8c0-4.1 2.3-7.6 5.5-9.4"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
                info@example.com
              </li>
            </ul>
          </div>
       
          <div className="mt-12 sm:mt-16 md:mt-0 ">
        <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
          <div>
            <label htmlFor="name" className=" text-lg font-medium text-gray-700">
              Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="given-name"
                className="py-3 px-4  w-full shadow-sm focus:ring-primary focus:border-primary border border-primary rounded-md"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className=" text-lg font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="py-3 px-4  w-full shadow-sm focus:ring-primary focus:border-primary border border-primary rounded-md"
              />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className=" text-lg font-medium text-gray-700">
              Phone
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="phone"
                id="phone"
                autoComplete="tel"
                className="py-3 px-4  w-full shadow-sm focus:ring-primary focus:border-primary border border-primary rounded-md"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className=" text-lg font-medium text-gray-700">
              Message
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows="4"
                className="py-3 px-4  w-full shadow-sm focus:ring-primary focus:border-primary border border-primary rounded-md"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center ">
            <button
              type="submit"
              className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Send Message
            </button>
          </div>
        </form>
        </div>
      </div>
    { pathname ==='/contact' && (
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14194.848047506724!2d33.8243366!3d27.1967868!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14528739189cdf03%3A0x316a7f9b75ed293e!2sFox%20Travel%20Egypt!5e0!3m2!1sen!2seg!4v1711527972683!5m2!1sen!2seg"
        referrerPolicy="no-referrer-when-downgrade"
        title="Branch Location"
        className="w-full h-96 mt-7"
        // style={{
        //   height: "500px",
        //   width: "700px",
        //   border: "1px solid #38a636",
        //   padding: "5px",
        //   borderRadius: "10px",
        // }}
      />
    )}
   </div>
    </div>
  );
};

export default ContactUs;