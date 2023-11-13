export default async function Home() {
    const response = await fetch(`${process.env.API_URL}/home`,{
      cache: "no-cache"
    });
    const data = await response.json();     
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-white text-3xl mb-20 font-bold">Visão Geral</h1>

      <div className="w-full flex gap-8 justify-center">
      {
        data.Locations.map((location: any)=>{
          return (
          <div className="bg-white w-60 h-20 flex-col flex items-center justify-center">
            <h1 className="font-bold mb-4">{location.name}</h1>
            <p>{location.description}</p>
          </div>
          )
        })
      }
        
      </div>
    </div>
  );
}
