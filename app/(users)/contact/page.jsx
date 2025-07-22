"use client";

import { useState, useTransition } from "react";
import { useFormState } from "react-dom";
import { contactAction } from "./contact.action";

// import { useActionState } from "react";



const Contact = () => {
  // const [state, formAction, isPending] = useActionState(contactAction, null);
  
  const[ isPending, startTransition ] = useTransition()
  const [ contactFormResponse, setContactFormResponse ] = useState(null)

  const handleContactSubmit = (formData) => {
    const { fullName, email, message } = Object.fromEntries(formData)
    startTransition( async() => {
     const res = await contactAction( fullName, email, message )
     setContactFormResponse(res)
    })
  }  







  return (
    <>
      <div className="flex justify-center align-middle  h-screen   mt-25 bg-gray-600 border-2 border-black">
        <div className="flex-col text-center">

          <h1 className="font-extrabold text-3xl">Get In Touch</h1>

          <div className="mt-7">
            <form className="space-y-6" action={handleContactSubmit}>


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
                  type="email"
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

              <Submit />



            </form>
          </div>

          <section>
            {
              contactFormResponse && (
                <p className={` p-4 mt-5 text-center  ${contactFormResponse.success ? "bg-green-500" : "bg-red-600"}`}>
                  {contactFormResponse.message}

                </p>
              )
            }
          </section>
        </div>

      </div>
    </>
  )
};

export default Contact;

const Submit = () => {
  const { pending, data, method, action } = useFormState()
  return (
    <>
      <button

        type="submit"
        disabled={pending}
        className="w-full bg-pink-600 hover:bg-pink-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
      >
        {
          pending ? <span>Loading...</span> : <span>Send Message</span>
        }
      </button>
    </>
  )
}