import { db1 } from "@/config/db1.jsx";
export const revalidate = 30;

const StaticPage = async () => {
  const [patients] = await db1.execute("Select * from patients");
  console.log("Static patients");

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

export default StaticPage;
