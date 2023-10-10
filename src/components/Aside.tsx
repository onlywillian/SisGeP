import Link from "next/link";

export default function Aside() {
  return (
    <div className="w-1/5 bg-green h-screen text-center text-white flex flex-col">
      <h1 className="flex-1 text-3xl mt-4 font-bold"><Link href={"/home"}>SisGeP  </Link></h1>
      <div className="flex-1 flex flex-col gap-2">
        <Link href={"/equipments"}>Equipamentos</Link>
        <Link href={"/locations"}>Espaços</Link>
        <Link href={"/users"}>Usuários</Link>
      </div>
    </div>
  );
}
