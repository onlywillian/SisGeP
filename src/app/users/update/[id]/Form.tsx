"use client"

import "react-toastify/dist/ReactToastify.css"; 
import Button from "@/components/Button";
import InputButton from "@/components/InputButton";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainerComponent, notifyError, notifySuccess } from "@/components/Notifications";

type Inputs = {
  username: string,
  password: string,
  office: string
}

type IFormProps = {
    data: {
        username: string;
        password: string;
        office: string;
    },
    id: string
}

export default function Form({ data, id }: IFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    defaultValues: {
      username: data.username,
      password: data.password,
      office: data.office  
    }
  })

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
   const response = await fetch(`https://sisgep-api.onrender.com/users/update`, {
      method:"PUT",
      body:JSON.stringify({
        id: id,
        newUsername: formData.username,
        newPassword: formData.password,
        newOffice: formData.office 
      }),
      headers:{
        "Content-Type": "application/json"
      },
    })
    const responseData = await response.json();

    if (responseData.Error) return notifyError(responseData.Error);
    
    notifySuccess("Usuário atualizado com sucesso!", "/users");
  }

  return (
    <>
      <ToastContainerComponent />
      <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full flex flex-col justify-around gap-4 items-center">
        <InputButton 
          placeholder="Nome" 
          value={data?.username}
          register={register("username")} 
        />
        {errors.username && <p className="text-red-500">{errors.username.message}</p>} {/* Exiba a mensagem de erro */}
        <InputButton 
          placeholder="Password" 
          value={data?.password}
          register={register("password")} 
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        <select 
          id="cargo" 
          className="w-80 p-4 rounded-xl bg-gray outline-none " 
          {...register("office")}
        >
          <option value={data?.office}>{data?.office}</option>
          <option value="Professor">Professor(a)</option>
          <option value="Aluno">Aluno(a)</option>
          <option value="Gestor">Gestor(a)</option>
          <option value="Funcionario">Funcionario(a)</option>
        </select>
        {errors.office && <p className="text-red-500">{errors.office.message}</p>}
          
        <Button>Salvar</Button>
      </form>
    </>
  );
}
