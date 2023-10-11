"use client";

import Button from "@/components/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import InputButton from "@/components/InputButton";
import { notifyError, notifySuccess } from "@/components/Notifications";

type Inputs = {
  name: string;
  description: string;
  photo: FileList;
};

export default function NewSpace() {
  const { register, handleSubmit, formState: { errors }  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("photo", data.photo[0]);

    const response = await fetch("https://sisgep-api.onrender.com/locations/new", {
      method: "POST",
      body: formData,
    });
    const responseData = await response.json();

    console.log(responseData);

    if (responseData.Error) return notifyError(responseData.Error);

    notifySuccess("Espaço cadastrado com sucesso!", "/locations");
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-3/5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full h-full flex flex-col justify-around gap-4 items-center"
        >
          <InputButton
            placeholder="Nome"
            register={register("name", {required: "Preencha esse campo"})}
          ></InputButton>
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          <textarea
            className="bg-gray rounded-xl p-4 w-96 resize-none outline-none"
            placeholder="Descrição"
            {...register("description", {required: "Preencha esse campo"})}
          ></textarea>
          {errors.description && <p className="text-red-500">{errors.description.message}</p>}
          <label
            htmlFor="foto"
            className="bg-[#EAEAEA] w-96 p-4 rounded-xl outline-none cursor-pointer"
          >
            Foto
          </label>
          {errors.photo && <p className="text-red-500">{errors.photo.message}</p>}
          <input
            multiple={false}
            type="file"
            id="foto"
            className="hidden"
            {...register("photo", {required: "Preencha esse campo"})}
          />
          <Button>Cadastrar</Button>
          
        </form>
      </div>
    </div>
  );
}
