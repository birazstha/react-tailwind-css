export default function Button({ children, fnc, isDisabled }) {
  return (
    <button onClick={fnc} className="border bg-blue-600 text-white p-1 rounded-md mr-1"  disabled={isDisabled}  >
      {children}
    </button>
  );
}
