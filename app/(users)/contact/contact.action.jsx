"use server";

import { db1 } from "@/config/db1";
// import { redirect } from "next/navigation";

export const contactAction = async (fullName,email,message) => {

  try {
    // const { fullName, email, message } = Object.fromEntries(formData.entries());
    // console.log(fullName, email, message);

     await db1.execute(
    `insert into contact_form (full_name, email, message) values (?, ? , ?)`,
    [fullName, email, message]
  );
  return {success: true, message: "Form Submitted Successfully"};
  // redirect("/")


  } catch (error) {
    if (error.message === "NEXT_REDIRECT") throw error;
    return {success: false, message: "error while submitting"}
  }

    
}