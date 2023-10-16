import Button from "@/components/Button";
import UserCell from "@/components/UserCell";
import { ToastContainerComponent } from "@/components/Notifications";
import Link from "next/link";

export default async function Users() {
  const responseUsers = await fetch("https://sisgep-api.onrender.com/users", {
    cache: "no-cache"
  });
  const usersData = await responseUsers.json();

  return (
    <>
      <ToastContainerComponent />
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
            <h1>Office</h1>
            <h1>Editar</h1>
            <h1>Deletar</h1>
          </div>

          {usersData.Users.map((user: any) => (
            <UserCell user={user} key={user.id}/>
          ))}
        </div>
      </div>
    </>
  );
}
