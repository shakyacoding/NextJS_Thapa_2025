"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegistrationForm() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        fullName: " ",
        email: " ",
        password: " "
    });
    const [state, setState] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = () => {
        // Simulate successful registration
        setState({
            success: true,
            message: "Registration successfull!  Welcome abroad"
        });

        // Reset form
        setFormData({
            fullName: " ",
            email: " ",
            password: " ",
            confirmPassword: " ",
        })
        router.push("/")
    }

    return (
        <>
            <div className="flex justify-center align-middle  h-screen   mt-25 bg-gray-600 border-2 border-black">
                <div className="flex-col text-center">

                    <h1 className="font-extrabold text-3xl">Registration form </h1>

                    <div className="mt-7">
                        <form className="space-y-6" action={handleSubmit}>


                            {/* Name  */}
                            <div>

                                <label htmlFor="fullName">Full Name</label>
                                <input className="ml-5"
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    required
                                    placeholder="Enter your name"
                                    onChange={handleChange} />
                            </div>

                            {/* Email  */}
                            <div>

                                <label htmlFor="email">Email Address</label>
                                <input className="ml-5"
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="Enter your Email"
                                    onChange={handleChange} />
                            </div>

                            {/* password  */}
                            <div>

                                <label htmlFor="password">Password</label>
                                <input className="ml-5"
                                    type="password"
                                    id="password"
                                    name="password"
                                    required
                                    placeholder="Enter your Password"
                                    onChange={handleChange} />
                            </div>

                            {/* confirm password  */}

                            <div>

                                <label htmlFor="confirmPassword">Confirm password</label>
                                <input className="ml-5"
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    required
                                    placeholder="Confirm your password"
                                    onChange={handleChange} />
                            </div>

                            {/* Submit Button */}

                            <button

                                type="submit" className="bg-amber-400 p-4"
                            >
                             Submit 
                            </button>



                        </form>
                    </div>

                    <section>
                        {
                            state && (
                                <p className={` p-4 mt-5 text-center  ${state.success ? "bg-green-500" : "bg-red-600"}`}>
                                    {state.message}

                                </p>
                            )
                        }
                    </section>
                </div>

            </div>
        </>
    )
}