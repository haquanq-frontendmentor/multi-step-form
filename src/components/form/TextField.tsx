interface TextFieldProps extends React.ComponentProps<"input"> {
  label: string;
  errorMessage?: string;
  type?: "text" | "password" | "email";
}

export const TextField = ({ label, errorMessage, type = "text", ...restProps }: TextFieldProps) => {
  const inputId = restProps.name + "-input";
  const hintId = restProps.name + "-hint";

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <label className="sm:text-sm-1 text-xs text-blue-950" htmlFor={inputId}>
          {label}
        </label>
        <p className="text-sm-3 text-red-500" id={hintId}>
          {errorMessage}
        </p>
      </div>
      <div className="relative rounded-sm sm:rounded-lg">
        <input
          className="text-sm-2 md:text-md-2 focus-v peer h-10 w-full rounded-[inherit] px-4 text-blue-950 placeholder:text-gray-500 sm:h-12"
          id={inputId}
          type={type}
          aria-invalid={Boolean(errorMessage)}
          aria-describedby={hintId}
          {...restProps}
        />
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] inset-ring inset-ring-purple-200 transition-shadow peer-hover:inset-ring-purple-600 peer-aria-invalid:inset-ring-red-500"></div>
      </div>
    </div>
  );
};
