interface IInputButton {
  placeholder: string;
}

export default function InputButton({ placeholder }: IInputButton) {
  return (
    <input
      type="text"
      className="bg-[#EAEAEA] w-96 h-10 p-4 rounded-xl"
      placeholder={placeholder}
    />
  );
}
