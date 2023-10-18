'use client'

import Link from "next/link";
import InputButton from "@/components/InputButton";
import { IoLockOpen, IoPerson } from "react-icons/io5";
import Button from "@/components/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "@/contexts/authContext";
import { useState } from "react";

type Inputs = {
  username: string;
  password: string;
}

export default function Login() {
  console.log(process.env);
  const { register, handleSubmit, formState: { isSubmitting, isSubmitted, } } = useForm<Inputs>()
  const [ responsePositive,setResponsePositive ] = useState<boolean|void>(false);
  const { signIn } = useContext(AuthContext)

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const responsePositiveOk = await signIn(data);
    setResponsePositive(responsePositiveOk)
    return responsePositive;
  }

  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <div className="flex h-[95%] w-[95%] bg-[#58AF9B] rounded-xl">
        <h1 className="text-white text-xl font-extrabold mx-4 my-4 absolute">
          SisGeP
        </h1>
        <div className="flex-[2] text-white flex flex-col items-center justify-center">
          <h1 className="text-5xl font-extrabold my-10 ">Olá!</h1>
          <h2 className="text-2xl text-center">
            Seja bem vindo ao Sistema de Gerenciamento de Patrimônio
          </h2>
        </div>
        <div className="flex-[3] bg-white rounded-r-xl flex-col flex justify-center items-center gap-10">
          <h1 className="font-extrabold text-[#58AF9B] text-4xl">Login</h1>
          <form 
            className="w-1/2 flex flex-col gap-4 items-center" 
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputButton 
              width={"100%"}  
              placeholder="Insira seu nome aqui!" 
              register={register("username")}
            >
              <IoPerson />
            </InputButton>
            <InputButton 
              width={"100%"}  
              type="password" 
              placeholder="Insira sua senha aqui!" 
              register={register("password")}
            >
              <IoLockOpen />
            </InputButton>
            <Link className="text-green" href="/account/register">Ainda não possuo uma conta</Link>
            {isSubmitting || isSubmitted && responsePositive ? <Button disable={true}>Loading</Button> : <Button>Enviar</Button>}
          </form>
        </div>  
      </div>
    </main>
  );
}
