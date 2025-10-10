interface SwitchProps extends React.ComponentProps<"input"> {
  label: string;
}

export const Switch = ({ label, ...restProps }: SwitchProps) => {
  return (
    <label className="focus-w block h-5 w-[2.375rem] cursor-pointer rounded-full bg-blue-950 px-1 py-1">
      <span className="sr-only">{label}</span>
      <input className="peer sr-only" type="checkbox" {...restProps} />
      <span className="block aspect-square w-3 rounded-full bg-white transition-transform peer-checked:translate-x-[1.125rem]"></span>
    </label>
  );
};
