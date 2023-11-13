"use client"

import Link from "next/link";
import { IoSettingsSharp, IoTrashSharp, IoQrCode, IoImageSharp } from "react-icons/io5";
import { notifySuccess } from "./Notifications";
import Popup from "@/components/Popup"; 
import { useState } from "react";
import { AlertDialog, Button as ButtonRadix, Flex } from "@radix-ui/themes";

interface ICellProps {
    location: any
}

export default function LocationCell({ location }: ICellProps) {
  async function handleDeleteIconClick(){
   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/locations/delete`, {
      method: "delete",
      body: JSON.stringify({
        name: location.name
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    notifySuccess("Local deletado com sucesso!","/locations");
  }
  const [popup, setPopup] = useState(false);
  const [qrcode, setQrcode] = useState(false);
  
  return (
    <>
    {popup && <Popup src={location?.photo} setPopup={setPopup}/>}
    {qrcode && <Popup src={location?.qr_code} setPopup={setQrcode}/>}
    <div className="w-full odd:bg-white even:bg-neutral-300 px-4 py-2 text-stone-600 font-bold flex justify-between">
      <h1 className="w-16">{location?.name}</h1>
      <h1 className="w-32">{location?.description}</h1>
      <h1 className="w-16 cursor-pointer">
          <IoQrCode onClick={()=>setQrcode(true)}/>
      </h1> 
      <h1 className="w-16 cursor-pointer" onClick={()=>setPopup(true)}>
        <IoImageSharp />  
      </h1>
      <h1 className="w-16 cursor-pointer">
        <Link href={`/locations/update/${location.id}`}>
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