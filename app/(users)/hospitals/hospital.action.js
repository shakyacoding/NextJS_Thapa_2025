"use server";

import { db2 } from "@/config/db2";
import { revalidatePath } from "next/cache";

export const createHospitalAction = async (formData) => {
  try {
    // Assuming formData is of type FormData
    const data = Object.fromEntries(formData);
    const { name, city, state, department, established_year } = data;

    await db2.execute(
      `INSERT INTO hospital_db.hospital2 (name, city, state, department, established_year) VALUES (?, ?, ?, ?, ?)`,
      [name, city, state, department, established_year]
    );

    revalidatePath("/hospitals");

    // return { success: true, message: "Hospital data submitted successfully" };
  } catch (error) {
    if (error.message === "NEXT_REDIRECT") throw error;
    console.error('Database error:', error);
    throw new Error(error.message);
  }
};