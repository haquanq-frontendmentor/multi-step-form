import { CheckmarkIcon } from "../../assets/images";

interface CheckboxProps extends React.ComponentProps<"input"> {
  label: string;
}

let localId = 0;

export const Checkbox = ({ label, id = (++localId).toString(), children, ...restProps }: CheckboxProps) => {
  const inputId = "checkbox-input-" + id;
  return (
    <div className="focus-w relative rounded-lg">
      <input className="peer sr-only" id={inputId} type="checkbox" {...restProps} />
      <label className="peer/x absolute inset-0 cursor-pointer rounded-[inherit]" htmlFor={inputId}>
        <span className="sr-only">{label}</span>
      </label>
      <div
        aria-hidden="true"
        className="flex items-center gap-4 rounded-[inherit] px-4 py-3 inset-ring-1 inset-ring-purple-200 transition-[background-color,box-shadow] peer-checked:bg-blue-50 peer-checked:inset-ring-purple-600 peer-hover/x:inset-ring-purple-600 sm:gap-6 sm:px-6 sm:py-[1.125rem] peer-checked:[&>*:first-child>*]:opacity-100"
      >
        <div className="relative aspect-square w-5 rounded-sm inset-ring-1 inset-ring-purple-200">
          <div className="absolute inset-0 flex items-center justify-center rounded-[inherit] bg-purple-600 opacity-0 transition-opacity">
            <img src={CheckmarkIcon} alt="" />
          </div>
        </div>
        <div className="grow">{children}</div>
      </div>
    </div>
  );
};
