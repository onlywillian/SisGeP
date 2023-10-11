import Form from "./Form";

export default async function Update({ params }: any) {
  const userDataResponse = await fetch(`https://sisgep-api.onrender.com/users/${params.id}`, {
    cache: "no-cache"
  });
  const data = await userDataResponse.json();

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-3/5">
        <Form data={data.Users} id={params.id}/>
      </div>
    </div>
  );
}
