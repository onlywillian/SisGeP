import Form from "@/app/locations/update/[id]/Form";

export default async function UpdateSpace({params}: any) {
  const userDataResponse = await fetch(`http://localhost:3001/locations/${params.id}`, {
    cache: "no-cache"
  });
  const data = await userDataResponse.json();
  return (
    <Form data={data.Location} id={params.id}/>
  );
}
