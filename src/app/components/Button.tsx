export default function Button({ children }: any) {
  return (
    <button className="w-20 h-10 rounded-xl text-white bg-green">
      {children}
    </button>
  );
}
