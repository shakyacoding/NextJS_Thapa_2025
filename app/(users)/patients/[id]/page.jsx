import { db } from "@/config/db";
import { notFound } from "next/navigation";



// To make dynamic page to Static page, so that everytime it not fetch data from database
export async function generateStaticParams(){
    const [patient] = await db.execute('Select id from patients');
    return patient.map((patient) => ({id: patient.id.toString()}))
}





const SinglePatient = async (props) => {
    const params = await props.params
    console.log("params: ", params);

    const [[patient]] = await db.execute(
        "Select * from patients where id = ?",
        [params.id]
    )
    console.log("SinglePatient ~ patient:", patient)

    // if (!patient) return notFound()
    if(!patient) return (
        <>
        <div className="flex justify-center align-middle mt-25">
            <h1>Doctor Not found</h1>
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