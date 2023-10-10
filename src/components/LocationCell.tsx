"use client"

import Link from "next/link";
import { IoSettingsSharp, IoTrashSharp, IoQrCode } from "react-icons/io5";
import { notifySuccess } from "./Notifications";
import Image from "next/image";
import Popup from "@/components/Popup"; 
import { useState } from "react";

interface ICellProps {
    location: any
}

export default function LocationCell({ location }: ICellProps) {
  async function handleDeleteIconClick(){
   const response = await fetch("http://localhost:3001/locations/delete", {
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
    {popup && <Popup src={location.photo} setPopup={setPopup}/>}
    {qrcode && <Popup src={location.qr_code} setPopup={setQrcode}/>}
    <div className="w-full odd:bg-white even:bg-neutral-300 px-4 py-2 text-stone-600 font-bold flex justify-between">
      <h1 className="w-16">{location.name}</h1>
      <h1 className="w-32">{location.description}</h1>
      <h1 className="w-16 cursor-pointer">
        
          <IoQrCode onClick={()=>setQrcode(true)}/>
      </h1> 
      <h1 className="w-16 cursor-pointer" onClick={()=>setPopup(true)}>
        <Image alt="" width="1000" height="10000" src={location.photo} ></Image>
      </h1>
      <h1 className="w-16 cursor-pointer">
        <Link href={`/locations/update/${location.id}`}>
          <IoSettingsSharp />
        </Link>
      </h1>
      <h1 className="w-16 cursor-pointer">
        <IoTrashSharp onClick={handleDeleteIconClick}/>
      </h1>
      
    </div>
    </>

  )
}