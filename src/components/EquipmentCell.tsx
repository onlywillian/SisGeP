"use client"
import Link from "next/link";
import { IoQrCode, IoSettingsSharp, IoTrashSharp } from "react-icons/io5";
import Image from "next/image";
import Popup from "./Popup";
import { useState } from "react";
import { ToastContainerComponent, notifySuccess } from "./Notifications";

interface ICellProps {
    location: any
}


export default function EquipmentCell({equipment}: any){
    const [popup, setPopup] = useState(false);
    const [qr_code, setQrcode] = useState(false);

    async function handleDeleteIconClick(){
      const respose = await fetch("https://sisgep-api.onrender.com/equipments/delete", {
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
            <h1 className="w-16">{equipment.root_location_id}</h1>
            <h1 className="w-16">{equipment.current_location_id}</h1>
            <h1 className="w-16">{equipment.last_used}</h1>
            <h1 className="w-16" onClick={() => setQrcode(true)}>
              <IoQrCode />
            </h1>
            <h1 className="w-10 cursor-pointer" onClick={() => setPopup(true)}>
              <Image alt="" width="1000" height="10000" src={equipment.photo} />
            </h1>
            <h1 className="w-16">
              <Link href={`/equipments/update/${equipment.id}`}>
                <IoSettingsSharp />
              </Link>
            </h1>
            <h1 className="w-16 cursor-pointer" onClick={handleDeleteIconClick}>
              <IoTrashSharp />
            </h1>
          </div>
        
        </>
    )
}
