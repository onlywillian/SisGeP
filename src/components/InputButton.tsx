interface IInputButton {
  placeholder: string;
  type?: string;
  value?: string;
  children?: any;
  register?: any;
  width?: any;
}

export default function InputButton({ placeholder, children, register, type, value, width }: IInputButton) {
  return (
    
    <div className={`flex flex-row bg-[#EAEAEA] rounded-xl w-[${width ? width : '55%'}]`}>
      {/* Icone */}
      <div className="flex justify-center items-center ml-4">{children}</div>
      <input
        type={type}
        defaultValue={value}
        className="bg-[#EAEAEA] w-96 p-4 rounded-xl outline-none"
        placeholder={placeholder}
        {...register}
      />
    </div>
  );
}
