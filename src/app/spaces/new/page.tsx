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
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("photo", data.photo[0]);

    const response = await fetch("http://localhost:3001/locations/new", {
      method: "POST",
      body: formData,
    });
    const responseData = await response.json();

    console.log(responseData);

    if (responseData.Error) return notifyError(responseData.Error);

    notifySuccess("Espaço cadastrado com sucesso!", "/spaces");
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
            register={register("name")}
          ></InputButton>
          <textarea
            className="bg-gray rounded-xl p-4 w-96 resize-none outline-none"
            placeholder="Descrição"
            {...register("description")}
          ></textarea>
          <label
            htmlFor="foto"
            className="bg-[#EAEAEA] w-96 p-4 rounded-xl outline-none cursor-pointer"
          >
            Foto
          </label>
          <input
            multiple={false}
            type="file"
            id="foto"
            className="hidden"
            {...register("photo")}
          />
          <Button>Cadastrar</Button>
        </form>
      </div>
    </div>
  );
}
