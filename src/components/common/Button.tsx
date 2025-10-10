import { cn } from "../../utils/cn";

interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "primary" | "secondary" | "text";
}

export const Button = (props: ButtonProps) => {
  const { className, variant = "primary", ...restProps } = props;
  return (
    <button
      className={cn(
        "text-md-2 focus-v text-white transition-colors",
        {
          "h-12 w-[7.6875rem] rounded-lg text-white": variant === "primary" || variant === "secondary",
          "bg-blue-950 hover:bg-blue-700": variant === "primary",
          "bg-purple-600 hover:bg-purple-400": variant === "secondary",
          "text-gray-500 hover:text-black": variant === "text",
        },
        className,
      )}
      {...restProps}
    >
      {props.children}
    </button>
  );
};
