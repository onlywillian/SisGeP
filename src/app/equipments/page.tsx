import Button from "@/components/Button";
import Link from "next/link";
import EquipmentCell from "@/components/EquipmentCell"
import Alert from '@/components/Alert'

export default async function Equipments({equipment}: any) {
  const responseEquipments = await fetch('https://sisgep-api.onrender.com/equipments',{
    cache: "no-cache"
  });
  const equipmentsData = await responseEquipments.json();

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="flex justify-between absolute top-20 w-3/5 ">
        <h1 className="text-white text-3xl font-bold">Equipamentos</h1>
        <Link href="/equipments/new">
          <Button>Novo</Button>
        </Link>
      </div>

      <div className="w-4/5 max-h-10 overflow-auto justify-center flex flex-col">
        <div className="w-full bg-green px-4 py-2 text-white font-bold flex justify-between">
          <h1 className="w-16">Nome</h1>
          <h1 className="w-32">Descrição</h1>
          <h1 className="w-16">Local raíz</h1>
          <h1 className="w-16">Local atual</h1>
          <h1 className="w-16">Ultimo usuário</h1>
          <h1 className="w-16">Qrcode</h1>
          <h1 className="w-16">Foto</h1>
          <h1 className="w-16">Editar</h1>
          <h1 className="w-16">Deletar</h1>
        </div>
        
        {equipmentsData.Equipments && equipmentsData.Equipments.map((equipment: any) => (
          <EquipmentCell equipment={equipment} />
        ))}
      </div>
    </div>
  );
}
