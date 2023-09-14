'use client'

interface IButtonProps {
  children: any;
  handleSendButton?: Function
}

export default function Button({ children, handleSendButton }: IButtonProps) {
  return (
    <button 
      className="p-4 rounded-xl text-white bg-green" 
      onClick={() => handleSendButton?.()}
    >
      {children}
    </button>
  );
}
