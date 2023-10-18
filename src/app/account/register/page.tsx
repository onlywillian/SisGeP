"use client"
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { useForm, SubmitHandler } from "react-hook-form";
import { IoLockOpen, IoPerson, IoHammer } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "@/contexts/authContext";

import Link from "next/link";
import InputButton from "@/components/InputButton";
import Button from "@/components/Button";
import { useState } from 'react';

type Inputs = {
  username: string;
  password: string;
  office: string;
}

export default function Register() {
  const { register, handleSubmit, formState: { isSubmitting,isSubmitted } } = useForm<Inputs>();
  const [ responsePositive,setResponsePositive ] = useState<boolean|void>(false);
  const { signUp } = useContext(AuthContext)

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const responsePositiveOk = await signUp(data);
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
          <h2 className="text-2xl text-center p-4">
            Seja bem vindo ao Sistema de Gerenciamento de Patrimônio
          </h2>
        </div>
        <div className="flex-[3] bg-white rounded-r-xl flex-col flex justify-center items-center gap-10">
          <h1 className="font-extrabold text-[#58AF9B] text-4xl">Cadastro</h1>
          <form className=" bg-white rounded-r-xl flex-col flex justify-center items-center gap-10"   onSubmit={handleSubmit(onSubmit)}>
            <InputButton width={"100%"}  placeholder="Nome de usuário" register={register("username")}>
              <IoPerson />
            </InputButton>
            <InputButton width={"100%"} type="password"placeholder="Senha" register={register("password")}>
              <IoLockOpen />
            </InputButton>
            <div className="w-[100%] p rounded-xl  inline-flex bg-gray outline-none " >
            <div className="flex justify-center items-center ml-4"><IoHammer /></div>
            <select 
              id="cargo" 
              className="w-[100%] p-4 rounded-xl bg-gray text-black outline-none " 
              {...register("office")}
            >
              <option value="">Cargo:</option>
              <option value="Professor">Professor(a)</option>
              <option value="Aluno">Aluno(a)</option>
              <option value="Funcionario">Funcionario(a)</option>
            </select>
            </div>
            <Link className="text-green" href="/account/login">Já possuo conta </Link>

            {isSubmitting || isSubmitted && responsePositive ? <Button disable={true}>Loading</Button> : <Button>Enviar</Button>}
          </form>
        </div>
      </div>
    </main>
  );
}
