"use client"

import Link from "next/link";
import { IoQrCode, IoSettingsSharp, IoTrashSharp, IoImageSharp } from "react-icons/io5";
import Popup from "./Popup";
import { useState } from "react";
import { notifySuccess } from "./Notifications";
import { AlertDialog, Button as ButtonRadix, Flex } from "@radix-ui/themes";

export default function EquipmentCell({equipment}: any){
    const [popup, setPopup] = useState(false);
    const [qr_code, setQrcode] = useState(false);

    async function handleDeleteIconClick(){
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/equipments/delete`, {
        method: "delete",
        body: JSON.stringify({
            id: equipment.id
        }), 
        headers: {
            "Content-Type": "application/json"
        }
      });
  
      notifySuccess("Local deletado com sucesso!","/equipments");
    }
    
    return(

        <>
        {popup && <Popup src={equipment.photo} setPopup={setPopup}/>}
        {qr_code && <Popup src={equipment.qr_code} setPopup={setQrcode}/>}
        <div className="w-full odd:bg-white even:bg-neutral-300 px-4 py-2 text-stone-600 font-bold flex justify-between">
            <h1 className="w-16">{equipment.name}</h1>
            <h1 className="w-32">{equipment.description}</h1>
            <h1 className="w-16">{equipment.Locations?.name}</h1>
            <h1 className="w-16">{equipment.Current?.name}</h1>
            <h1 className="w-16">{equipment.Last_Used?.username}</h1>
            <h1 className="w-16 cursor-pointer" onClick={() => setQrcode(true)}>
              <IoQrCode />
            </h1>
            <h1 className="w-10 cursor-pointer" onClick={() => setPopup(true)}>
              <IoImageSharp />
            </h1>
            <h1 className="w-16">
              <Link href={`/equipments/update/${equipment.id}`}>
                <IoSettingsSharp />
              </Link>
            </h1>
            <h1 className="w-16 cursor-pointer">
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
                    <ButtonRadix className="bg-red-500" onClick={handleDeleteIconClick}>
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
