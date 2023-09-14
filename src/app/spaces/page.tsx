import Button from "@/components/Button";
import Link from "next/link";
import { IoQrCode, IoSettingsSharp, IoTrashSharp } from "react-icons/io5";

export default async function Home() {
  const responseUsers = await fetch("http://localhost:3001/locations");
  const locationsData = await responseUsers.json();

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="flex justify-between absolute top-20 w-3/5 ">
        <h1 className="text-white text-3xl font-bold">Espaços</h1>
        <Link href="/spaces/new">
          <Button>Novo</Button>
        </Link>
      </div>


      <div className="w-4/5  justify-center flex flex-col">
        <div className="w-full bg-green px-4 py-2 text-white font-bold flex justify-between">
          <h1>Nome</h1>
          <h1>Descrição</h1>
          <h1>QRcode</h1>
          <h1>Editar</h1>
          <h1>Deletar</h1>
        </div>

        {locationsData.Locations.map((location: any) => (
          <div className="w-full odd:bg-white even:bg-neutral-300 px-4 py-2 text-stone-600 font-bold flex justify-between">
            <h1>{location.name}</h1>
            <h1>{location.description}</h1>
            <h1 className="w-10 cursor-pointer">
              <IoQrCode />
            </h1>
            <h1 className="w-10 cursor-pointer">
              <IoSettingsSharp />
            </h1>
            <h1 className="w-10 cursor-pointer">
              <IoTrashSharp />
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
