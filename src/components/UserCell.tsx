"use client"

import Link from "next/link";
import { IoSettingsSharp, IoTrashSharp } from "react-icons/io5";
import { notifySuccess } from "./Notifications";
import { AlertDialog, Button as ButtonRadix, Flex } from "@radix-ui/themes";

interface ICellProps {
    user: any
}

export default function UserCell({ user }: ICellProps) {
  async function handleDeleteIconClick(){
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/delete`, {
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
        <h1 className="w-10 cursor-pointer">
        <AlertDialog.Root>
              <AlertDialog.Trigger>
                <ButtonRadix><IoTrashSharp /></ButtonRadix>
              </AlertDialog.Trigger>
              <AlertDialog.Content style={{ maxWidth: 450 }}>
                <AlertDialog.Title>Deseja Realmente deletar?</AlertDialog.Title>

                <Flex gap="3" mt="4" justify="end">
                  <AlertDialog.Cancel>
                    <ButtonRadix variant="soft" color="gray">
                      Cancelar
                    </ButtonRadix>
                  </AlertDialog.Cancel>
                  <AlertDialog.Action>
                    <ButtonRadix variant="solid" color="red" onClick={handleDeleteIconClick}>
                      Deletar
                    </ButtonRadix>
                  </AlertDialog.Action>
                </Flex>
              </AlertDialog.Content>
            </AlertDialog.Root>
        </h1>
      </div>
    </>
  )
}