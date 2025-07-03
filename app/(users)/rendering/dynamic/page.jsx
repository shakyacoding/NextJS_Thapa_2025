import { db } from "@/config/db.jsx";
// test 
export const dynamic = 'force-dynamic';

const DynamicPage = async () => {
  const [patients] = await db.execute("Select * from patients");
  console.log("Dynamic patients");

  return (
    <>
    <div className="flex justify-center align-middle">

      <ul className="bg-sky-300 border-2 border-red border-dashed">
        {patients.map((data) => {
          return (
            <>
            <li key={data.id}>{data.name} , Age {data.age} , {data.gender} , Diseases = {data.disease}</li>

            </>
          )
        })}
      </ul>
    </div>
    </>
  );
};

export default DynamicPage;
