import Button from "@/components/Button";
import Link from "next/link";
import  LocationCell from "@/components/LocationCell"
 
export default async function Locations() {
  const responseLocations = await fetch("http://localhost:3001/locations", {
    cache: "no-cache"
  });
  const locationsData = await responseLocations.json();

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="flex justify-between absolute top-20 w-3/5 ">
        <h1 className="text-white text-3xl font-bold">Espaços</h1>
        <Link href="/locations/new">
          <Button>Novo</Button>
        </Link>
      </div>

      <div className="w-4/5  justify-center flex flex-col">
        <div className="w-full bg-green px-4 py-2 text-white font-bold flex justify-between">
          <h1 className="w-16">Nome</h1>
          <h1 className="w-32">Descrição</h1>
          <h1 className="w-16">QRcode</h1>
          <h1 className="w-16">Foto</h1>
          <h1 className="w-16">Editar</h1>
          <h1 className="w-16">Deletar</h1>
        </div>

        {locationsData.Locations.map((location: any) => (
          <LocationCell location={location}/>
        ))}

      </div>
    </div>
  )
}
