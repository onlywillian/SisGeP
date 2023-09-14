interface IInputButton {
  placeholder: string;
  children?: any;
  name: string;
}

export default function InputButton({ placeholder, children, name, ...rest }: IInputButton) {
  console.log(name, { ...rest });
  
 
  return (
    <div className="flex flex-row bg-[#EAEAEA] rounded-xl w-[55%]">
      {/* Icone */}
      <div className="flex justify-center items-center ml-4">{children}</div>
      <input
        type="text"
        className="bg-[#EAEAEA] w-96 p-4 rounded-xl outline-none"
        placeholder={placeholder}
        name={name}
        {...rest}
      />
    </div>
  );
}
