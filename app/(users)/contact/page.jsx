import { contactAction } from "./contact.action";

export const metadata = {
  title: "Contact Page",
  description: "this is my Contact page",
  authors: [
    { name: "vinod thapa" },
    { name: "thapa technical", url: "thapatechical.com" },
  ],
  keywords: ["nextjs", "react_js", "fullstack"],
};

const Contact = async () => {
  return (
    <>
      <div className="flex justify-center align-middle  h-screen   mt-25 bg-gray-600 border-2 border-black">
        <div className="flex-col text-center">

          <h1 className="font-extrabold text-3xl">Get In Touch</h1>

          <div className="mt-7">
            <form className="space-y-6" action={contactAction}>


              {/* Name  */}
              <div>

                <label htmlFor="fullName">Full Name</label>
                <input className="ml-5"
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  placeholder="Enter your name" />
              </div>

              {/* Email  */}
              <div>

                <label htmlFor="email">Email Address</label>
                <input className="ml-5"
                  type="text"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter your Email" />
              </div>

              {/* Message  */}
              <div>

                <label 
                className="block"
                htmlFor="message">Message here</label>
                <textarea
                  className="w-full"
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Enter your message..."
                />
              </div>

              {/* Submit Button */}
                <button
                  
                  type="submit"
                  className="w-full bg-pink-600 hover:bg-pink-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                </button>

            </form>
          </div>
        </div>

      </div>
    </>
  )
};

export default Contact;
