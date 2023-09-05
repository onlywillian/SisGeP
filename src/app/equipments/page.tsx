import Button from "@/app/components/Button";
import { IoQrCode, IoSettingsSharp, IoTrashSharp } from "react-icons/io5";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="flex justify-between absolute top-20 w-3/5 ">
        <h1 className="text-white text-3xl font-bold">Euipamentos</h1>
        <Button>Novo</Button>
      </div>

      <div className="w-4/5  justify-center flex flex-col">
        <div className="w-full bg-green px-4 py-2 text-white font-bold flex justify-between">
          <h1>Nome</h1>
          <h1>QRcode</h1>
          <h1>Editar</h1>
          <h1>Deletar</h1>
        </div>
        <div className="w-full odd:bg-white even:bg-neutral-300 px-4 py-2 text-stone-600 font-bold flex justify-between">
          <h1>Exemplo</h1>
          <h1 className="w-10">
            <IoQrCode />
          </h1>
          <h1 className="w-10">
            <IoSettingsSharp />
          </h1>
          <h1 className="w-10">
            <IoTrashSharp />
          </h1>
        </div>
        <div className="w-full odd:bg-white even:bg-neutral-300 px-4 py-2 text-stone-600 font-bold flex justify-between">
          <h1>Exemplo</h1>
          <h1 className="w-10">
            <IoQrCode />
          </h1>
          <h1 className="w-10">
            <IoSettingsSharp />
          </h1>
          <h1 className="w-10">
            <IoTrashSharp />
          </h1>
        </div>
      </div>
    </div>
  );
}
