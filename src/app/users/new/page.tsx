"use client"

import Button from "@/components/Button";
import InputButton from "@/components/InputButton";

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  nome: string,
  password: string,
  cargo: string
}

export default function Update() {
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-3/5">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full flex flex-col justify-around gap-4 items-center">
          <InputButton placeholder="Nome" {...register("nome")}></InputButton>
          <InputButton placeholder="Password" {...register("password")}></InputButton>
          <select id="cargo" className="w-80 p-4 rounded-xl" {...register("cargo")}>
            <option value="">Cargo:</option>
            <option value="Professor">Professor(a)</option>
            <option value="Aluno">Aluno(a)</option>
            <option value="Gestor">Gestor(a)</option>
            <option value="Funcionario">Funcionario(a)</option>
          </select>
         
          <Button>Cadastrar</Button>
        </form>
      </div>
    </div>
  );
}
