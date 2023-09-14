import Button from "@/components/Button";
import Link from "next/link";
import { IoQrCode, IoSettingsSharp, IoTrashSharp } from "react-icons/io5";

export default async function Home() {
  const responseUsers = await fetch("http://localhost:3001/users");
  const usersData = await responseUsers.json();

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="flex justify-between absolute top-20 w-3/5 ">
        <h1 className="text-white text-3xl font-bold">Usuários</h1>
        <Link href="/users/new">
          <Button>Novo</Button>
        </Link>
      </div>


      <div className="w-4/5  justify-center flex flex-col">
        <div className="w-full bg-green px-4 py-2 text-white font-bold flex justify-between">
          <h1>Nome</h1>
          <h1>office</h1>
          <h1>Editar</h1>
          <h1>Deletar</h1>
        </div>

        {usersData.Users.map((user: any) => (
          <div className="w-full odd:bg-white even:bg-neutral-300 px-4 py-2 text-stone-600 font-bold flex justify-between">
            <h1 className="w-10">{user.username}</h1>
            <h1 className="w-10">{user.office}</h1>
            <h1 className="w-10 cursor-pointer">
              <Link href={`/users/update/${user.id}`}>
                <IoSettingsSharp />
              </Link>
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
