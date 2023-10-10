"use client";

import Button from "@/components/Button";
import InputButton from "@/components/InputButton";
import { ToastContainerComponent, notifyError, notifySuccess } from "@/components/Notifications";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  description: string;
  photo: FileList;
  initialLocation: string;
  actualLocation: string;
  lastUser: string;
};

export default function NewEquipment() {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const [ users, setUsers ] = useState([])
  const [ locations, setLocations ] = useState([])

  useEffect(() => {
    async function getUsersData() {
      const response = await fetch("http://localhost:3001/users");
      const data = await response.json();

      setUsers(data.Users);
    }

    async function getLocationsData() {
      const response = await fetch("http://localhost:3001/locations");
      const data = await response.json();

      setLocations(data.Locations);
    }

    getUsersData()
    getLocationsData()
  }, []);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("photo", data.photo[0]);
    formData.append("initialLocation", data.initialLocation);
    formData.append("actualLocation", data.actualLocation);
    formData.append("lastUsed", data.lastUser);

    const response = await fetch("http://localhost:3001/equipments/new", {
        method: "POST",
        body: formData,
    });
    const responseData = await response.json();
    if(!responseData.Error){
      notifySuccess("Equipamento criado com sucesso", "/equipments")
    }
  };

  return (
    <>
    <ToastContainerComponent />
    <div className="w-screen flex justify-center items-center p-4">
      <div className="w-3/5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col justify-around gap-4 items-center"
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
          <input
            type="file"
            id="foto"
            className="hidden"
            {...register("photo", {required: "Preencha esse campo"})}
            />
            {errors.photo && <p className="text-red-500">{errors.photo.message}</p>}
          <select 
            className="bg-[#EAEAEA] w-96 p-4 rounded-xl outline-none"
            {...register("initialLocation", {required: "Preencha esse campo"})}
          > 
            <option value="">Local Inicial</option>
            {locations?.map((location: any) => (
              <option value={location.id}>{location.name}</option>
            ))}
          </select>
          {errors.initialLocation && <p className="text-red-500">{errors.initialLocation.message}</p>}
          <select 
            className="bg-[#EAEAEA] w-96 p-4 rounded-xl outline-none"
            {...register("actualLocation", {required: "Preencha esse campo"})}
          >
            <option value="">Local Atual</option>
            {locations?.map((location: any) => (
              <option value={location.id}>{location.name}</option>
            ))}
          </select>
          {errors.actualLocation && <p className="text-red-500">{errors.actualLocation.message}</p>}
          <select 
            className="bg-[#EAEAEA] w-96 p-4 rounded-xl outline-none"
            {...register("lastUser", {required: "Preencha esse campo"})}
          >
            <option value="">Último Usuário a utilizar</option>
            {users?.map((user: any) => (
              <option value={user.id}>{user.username}</option>
            ))}
          </select>
          {errors.lastUser && <p className="text-red-500">{errors.lastUser.message}</p>}
          <Button>Cadastrar</Button>
        </form>
      </div>
    </div>
    </>
  );
}
