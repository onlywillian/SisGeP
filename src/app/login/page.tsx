import Image from "next/image";
import Link from "next/link";
import InputButton from "../components/InputButton";
import { IoLockOpen, IoMail } from "react-icons/io5";
import Button from "../components/Button";

export default function Login() {
  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <div className="flex h-[95%] w-[95%] bg-[#58AF9B] rounded-xl">
        <h1 className="text-white text-xl font-extrabold mx-4 my-4 absolute">
          SisGeP
        </h1>
        <div className="flex-[2] text-white flex flex-col items-center justify-center">
          <h1 className="text-5xl font-extrabold my-10 ">Olá!</h1>
          <h2 className="text-2xl text-center">
            Seja bem vindo ao Sistema de Gerenciamento de Patrimônio
          </h2>
        </div>
        <div className="flex-[3] bg-white rounded-r-xl flex-col flex justify-center items-center gap-10">
          <h1 className="font-extrabold text-[#58AF9B] text-4xl">Login</h1>
          <InputButton placeholder="Insira seu nome aqui!">
            <IoMail />
          </InputButton>
          <InputButton placeholder="Insira sua senha aqui!">
            <IoLockOpen />
          </InputButton>
          <Link href="">Esqueceu sua senha?</Link>
          <Link href="">
            <Button>Enviar</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
