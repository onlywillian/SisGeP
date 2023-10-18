import { ToastContainerComponent } from "@/components/Notifications";
import Form from "./Form";

export default async function UpdateEquipment({ params }: any) {
  const responseLocations = await fetch(`${process.env.API_URL}/locations`, {
    cache: "no-cache"
  });
  const locations = await responseLocations.json()
  const responseUsers = await fetch(`${process.env.API_URL}/users`, {
    cache: "no-cache"
  })
  const users = await responseUsers.json()
  const responseEquipment = await fetch(`${process.env.API_URL}/equipments/${params.id}`, {
    cache: "no-cache"
  })
  const equipment = await responseEquipment.json()

  return (
    <>
      <ToastContainerComponent />
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-3/5">
          <Form 
            locations={locations.Locations} 
            users={users.Users} 
            equipment={equipment.Equipment}
          />
        </div>
      </div>
    </>
  );
}
