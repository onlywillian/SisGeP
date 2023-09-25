"use client"

import Button from "@/components/Button";
import InputButton from "@/components/InputButton";
import { ToastContainerComponent, notifyError, notifySuccess } from "@/components/Notifications";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  username: string,
  password: string,
  office: string
}

export default function Update() {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const response = await fetch("http://localhost:3001/users/new", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const responseData = await response.json()

    if (responseData.Error) return notifyError(responseData.Error)
    
    notifySuccess("Usuário cadastrado com sucesso!","/users");
  }

  return (
    <>
    <ToastContainerComponent />
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-3/5">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full flex flex-col justify-around gap-4 items-center">
          <InputButton 
            placeholder="Nome" 
            register={register("username", {required: "Preencha esse campo"})} 
          />
          {errors.username && <p className="text-red-500">{errors.username.message}</p>} {/* Exiba a mensagem de erro */}
          <InputButton 
            placeholder="Password" 
            type="password"
            register={register("password", {required: "Preencha esse campo"})} 
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          <select 
            id="cargo" 
            className="w-80 p-4 rounded-xl bg-gray outline-none text-zinc-400" 
            {...register("office", { required: "Preencha esse campo" })}
          >
            <option value="">Cargo:</option>
            <option value="Professor">Professor(a)</option>
            <option value="Aluno">Aluno(a)</option>
            <option value="Gestor">Gestor(a)</option>
            <option value="Funcionario">Funcionario(a)</option>
          </select>
          {errors.office && <p className="text-red-500">{errors.office.message}</p>}
         
          <Button>Cadastrar</Button>
        </form>
      </div>
    </div>
    </>
  );
}
