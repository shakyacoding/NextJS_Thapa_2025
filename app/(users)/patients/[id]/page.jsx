import { db1 } from "@/config/db1";
import { notFound } from "next/navigation";

const SinglePatient = async (props) => {
    const params = await props.params
    console.log("params: ", params);

    const [[patient]] = await db1.execute(
        "Select * from patients where id = ?",
        [params.id]
    )
    console.log("SinglePatient ~ patient:", patient)

    // if (!patient) return notFound()
    if(!patient) return (
        <>
        <div className="flex justify-center align-middle mt-25">
            <h1>Patient Not found</h1>
        </div>
        </>
    )

    return (
        <>
            <div className="flex justify-center align-middle mt-8">
                <div className="flex-col">

                    Name = {patient.name}
                    <br />
                    Age = {patient.age}
                    <br />
                    Sex = {patient.gender}
                    <br />
                    Diseases = {patient.disease}
                </div>
            </div>
        </>
    )
}


export default SinglePatient