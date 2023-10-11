"use client"

import "react-toastify/dist/ReactToastify.css"; 
import Button from "@/components/Button";
import InputButton from "@/components/InputButton";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainerComponent, notifyError, notifySuccess } from "@/components/Notifications";

type Inputs = {
  name: string,
  description: string,
  photo: string
}

type IFormProps = {
    data: {
        name: string;
        description: string;
        photo: string
    },
    id: string
}

export default function Form({ data, id }: IFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    defaultValues: {
      name: data.name,
      description: data.description,
      photo: data.photo
    }
  })

  const onSubmit: SubmitHandler<Inputs> = async (formDataValues) => {
    const formData = new FormData();
    
    formData.append("id", id);
    formData.append("oldName", data.name);
    formData.append("newName", formDataValues.name);
    formData.append("newDescription", formDataValues.description);
    formData.append("photo", formDataValues.photo[0]);

    const response = await fetch(`https://sisgep-api.onrender.com/locations/update`, {
      method:"PUT",
      body: formData,
    })

    const responseData = await response.json();

    if (responseData.Error) return notifyError(responseData.Error);
    
    notifySuccess("Espaço atualizado com sucesso!", "/locations");
  }

  return (
    <>
      <ToastContainerComponent />
      <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full flex flex-col justify-around gap-4 items-center">
        <InputButton 
          placeholder="Nome" 
          value={data?.name}
          register={register("name")} 
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>} {/* Exiba a mensagem de erro */}
        <InputButton 
          placeholder="description" 
          value={data?.description}
          register={register("description")} 
        />
        
        <input className="bg-[#EAEAEA] w-96 p-4 rounded-xl outline-none" type="file" id="NewPhoto" {...register("photo")}/>
        
        {errors.description && <p className="text-red-500">{errors.description.message}</p>}
        
        {errors.photo && <p className="text-red-500">{errors.photo.message}</p>}
        
        <Button>Atualizar</Button>
      </form>
    </>
  );
}
