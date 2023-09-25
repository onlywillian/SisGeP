"use client"

import Link from "next/link";
import { IoSettingsSharp, IoTrashSharp } from "react-icons/io5";
import { notifySuccess } from "./Notifications";

interface ICellProps {
    user: any
}

export default function Cell({ user }: ICellProps) {
  async function handleDeleteIconClick(){
    await fetch("http://localhost:3001/users/delete", {
      method: "delete",
      body: JSON.stringify({
        id: user.id
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    notifySuccess("Usuário deletado com sucesso!","/users");
  }

  return (
    <>
      <div className="w-full odd:bg-white even:bg-neutral-300 px-4 py-2 text-stone-600 font-bold flex justify-between">
        <h1 className="w-10">{user.username}</h1>
        <h1 className="w-10">{user.office}</h1>
        <h1 className="w-10 cursor-pointer">
          <Link href={`/users/update/${user.id}`}>
            <IoSettingsSharp />
          </Link>
        </h1>
        <h1 className="w-10 cursor-pointer" onClick={handleDeleteIconClick}>
          <IoTrashSharp />
        </h1>
      </div>
    </>
  )
}