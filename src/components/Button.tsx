'use client'

interface IButtonProps {
  children: any;
  handleSendButton?: Function
  disable?: boolean
}

export default function Button({ children, handleSendButton, disable }: IButtonProps) {
  return (
    <button 
      className={`p-4 rounded-xl text-white ${disable ? 'bg-zinc-800' : 'bg-green'}`}
      onClick={() => handleSendButton?.()}
      disabled={disable}
    >
      {children}
    </button>
  );
}
