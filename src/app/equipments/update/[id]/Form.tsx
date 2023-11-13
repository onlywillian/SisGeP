"use client"

import Button from "@/components/Button";
import InputButton from "@/components/InputButton";
import { notifyError, notifySuccess } from "@/components/Notifications";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  description: string;
  photo: FileList;
  initialLocation: string;
  actualLocation: string;
  lastUser: string;
};

interface IForm {
  locations: Array<Object>,
  users: Array<Object>,
  equipment: any
}

export default function Form({ locations, users, equipment }: IForm) {
    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
      const formData = new FormData();

      formData.append("id", equipment.id);
      formData.append("newName", data.name);
      formData.append("newDescription", data.description);
      formData.append("photo", data.photo[0]);
      formData.append("newRootLocationId", data.initialLocation);
      formData.append("newCurrentLocationId", data.actualLocation);
      formData.append("newLastUser", data.lastUser);

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/equipments/update`, {
          method: "PUT",
          body: formData,
      });
      const responseData = await response.json();
      
      notifySuccess("Equipamento alterado com sucesso", "/equipments");
    };

    return (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full h-full flex flex-col justify-around gap-4 items-center"
        >
          <InputButton
            placeholder="Nome"
            register={register("name")}
            value={equipment.name}
          ></InputButton>
          <textarea
            className="bg-gray rounded-xl p-4 w-96 resize-none outline-none"
            placeholder="Descrição"
            {...register("description")}
            defaultValue={equipment.description}
          ></textarea>
          <input 
            className="bg-[#EAEAEA] w-96 p-4 rounded-xl outline-none" 
            type="file" 
            id="NewPhoto" 
            {...register("photo")}
          />
          <select 
            className="bg-[#EAEAEA] w-96 p-4 rounded-xl outline-none"
            {...register("initialLocation")}
          >
            <option value={equipment.Locations?.id}>{equipment.Locations?.name}</option>
            {locations.map((location: any) => {
               if (location.id !== equipment.Locations?.id) {
                return <option value={location.id} key={location.id}>{location.name}</option>
              }
            })}
          </select>
          <select 
            className="bg-[#EAEAEA] w-96 p-4 rounded-xl outline-none"
            {...register("actualLocation")}
          >
            <option value={equipment.Current?.id}>{equipment.Current?.name}</option>
            {locations?.map((location: any) => {
              if (location.id !== equipment.Current?.id) {
                return <option value={location.id} key={location.id}>{location.name}</option>
              }
            })}
          </select>
          <select 
            className="bg-[#EAEAEA] w-96 p-4 rounded-xl outline-none"
            {...register("lastUser")}
          >
            <option value={equipment.Last_Used?.id}>{equipment.Last_Used?.username}</option>
            {users?.map((user: any) => {
              if (user.id !== equipment.Last_Used?.id) {
                return <option value={user.id} key={user.id}>{user.username}</option>
              }
            })}
          </select>
          <Button>Salvar</Button> 
        </form>
    )
}