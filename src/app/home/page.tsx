export default async function Home() {
    const response = await fetch(`${process.env.API_URL}/home`,{
      cache: "no-cache"
    });
    const data = await response.json();     

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-white text-3xl mb-20 font-bold">Visão Geral</h1>

      <div className="w-full flex gap-8 justify-center">
        <div className="bg-white w-40 p-4">
          <h1 className="font-bold mb-4">Equipamentos</h1>
          <p className="">Quantidade: {data.Equipments}</p>
        </div>
        <div className="bg-white w-40 p-4">
          <h1 className="font-bold mb-4">Espaços</h1>
          <p className="">Quantidade: {data.Locations}</p>
        </div>
        <div className="bg-white w-40 p-4">
          <h1 className="font-bold mb-4">Usuários</h1>
          <p className="">Quantidade: {data.Users}</p>
        </div>
      </div>
    </div>
  );
}
