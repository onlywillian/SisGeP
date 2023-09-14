
import Button from "@/components/Button";
import InputButton from "@/components/InputButton";

export default function Update() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-3/5">
        <form className="w-full h-full flex flex-col justify-around gap-4 items-center">
          <InputButton placeholder="Nome"></InputButton>
          <textarea className="bg-gray rounded-xl p-4 w-96 resize-none outline-none" placeholder="Descrição"></textarea>
          <label htmlFor="foto" className="bg-[#EAEAEA] w-96 p-4 rounded-xl outline-none cursor-pointer">Foto</label>
          <input type="file" id="foto" className="hidden"/>
          <Button>Cadastrar</Button>
        </form>
      </div>
    </div>
  );
}
