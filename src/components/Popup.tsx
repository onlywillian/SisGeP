"use client"

import Image from "next/image"

interface IPopup {
    src: string;
    setPopup?: any
}

export default function Popup({src, setPopup}: IPopup){
    console.log(src)

    return (
       <>
       
       <div className="w-2/5 p-4 absolute bg-green rounded-2xl left-1/3 z-10">
            <Image alt="" src={src} width={'1920'} height={"1080"}/>
       </div>
        <div 
            className="absolute h-screen w-screen bg-slate-500 opacity-80 left-0 top-0 "
            onClick={() => setPopup?.(false)}
        ></div>
       </> 
    )
}
