import Form from "@/app/locations/update/[id]/Form";

export default async function UpdateSpace({params}: any) {
  const userDataResponse = await fetch(`${process.env.API_URL}/locations/${params.id}`, {
    cache: "no-cache"
  });
  const data = await userDataResponse.json();
  return (
    <Form data={data.Location} id={params.id}/>
  );
}
