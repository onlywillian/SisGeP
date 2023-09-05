import Link from "next/link";

export default function Aside() {
  return (
    <div className="w-1/5 bg-green h-screen text-center text-white flex flex-col">
      <h1 className="flex-1 text-3xl mt-4 font-bold">SisGeP</h1>
      <div className="flex-1 flex flex-col gap-2">
        <Link href={"/list/equipments"}>Equipamentos</Link>
        <Link href={"/list/equipments"}>Espaços</Link>
        <Link href={"/list/equipments"}>Usuários</Link>
      </div>
    </div>
  );
}
