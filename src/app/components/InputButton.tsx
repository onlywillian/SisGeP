interface IInputButton {
  placeholder: string;
  children?: any;
}

export default function InputButton({ placeholder, children }: IInputButton) {
  return (
    <div className="flex flex-row bg-[#EAEAEA] rounded-xl w-[55%]">
      <div className="flex justify-center items-center ml-4">{children}</div>
      <input
        type="text"
        className="bg-[#EAEAEA] w-96 h-10 p-4 rounded-xl outline-none"
        placeholder={placeholder}
      />
    </div>
  );
}
