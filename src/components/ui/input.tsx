import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends Partial<
    React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>
  > {
  textarea?: boolean;
  multiline?: boolean;
  rows?: number;
}

const Input = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps & {
    backgroundImage?: string;
    backgroundRepeat?: string;
    backgroundPosition?: string;
    backgroundSize?: string;
  }
>((props, ref) => {
  const {
    className,
    type,
    textarea,
    multiline,
    rows,
    backgroundImage,
    backgroundRepeat,
    backgroundPosition,
    backgroundSize,
    ...restProps
  } = props;

  const inputProps = {
    className: cn(
      "flex  w-[365px] rounded-none bg-white px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    ),
    ...restProps,
  };

  if (textarea || multiline) {
    // Define the style object for the textarea element
    const textareaStyle = {
      resize: "vertical",
      height: "auto",
      backgroundImage: backgroundImage || "none",
      backgroundRepeat: backgroundRepeat || "initial",
      backgroundPosition: backgroundPosition || "initial",
      backgroundSize: backgroundSize || "initial",
      ...restProps.style,
    };

    return (
      <textarea
        {...inputProps}
        rows={rows || 4}
        ref={ref as React.Ref<HTMLTextAreaElement>}
      />
    );
  } else {
    return (
      <input
        type={type}
        {...inputProps}
        ref={ref as React.Ref<HTMLInputElement>}
      />
    );
  }
});

Input.displayName = "Input";

export { Input };
