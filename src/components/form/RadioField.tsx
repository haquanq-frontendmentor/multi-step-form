interface RadioFieldProps extends React.ComponentProps<"input"> {
  label: string;
}

let localInputId = 1;

export const RadioField = ({ label, id = (localInputId++).toString(), children, ...restProps }: RadioFieldProps) => {
  const inputId = "radio-input-" + id;
  return (
    <div className="focus-w relative rounded-lg">
      <input className="peer sr-only" id={inputId} type="radio" {...restProps} />
      <label className="peer/x absolute inset-0 cursor-pointer rounded-[inherit]" htmlFor={inputId}>
        <span className="sr-only">{label}</span>
      </label>
      <div
        className="cursor-pointer rounded-[inherit] px-4 py-5 inset-ring inset-ring-purple-200 transition-[background-color,box-shadow] peer-checked:bg-blue-50 peer-checked:inset-ring-purple-600 peer-hover/x:inset-ring-purple-600 peer-aria-invalid:inset-ring-red-500 md:py-[1.125rem]"
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
};
