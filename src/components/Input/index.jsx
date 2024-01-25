import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  fill: {
    green_500_8c: "bg-green-500_8c text-green-900",
    black_900_93: "bg-black-900_93 text-white-A700",
    white_A700: "bg-white-A700 text-black-900_89",
    gray_300: "bg-gray-300 text-black-900_a5",
  },
  outline: {
    red_A400: "border border-red-A400 border-solid text-black-900_89",
  },
};
const shapes = { round: "rounded", square: "rounded-none" };
const sizes = {
  xs: "pb-2 pt-0.5 px-0.5",
  sm: "pb-2.5 pt-[9px] px-[9px]",
  md: "pb-[21px] pt-4 px-4",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "square",
      size = "sm",
      variant = "fill",
      color = "gray_300",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "green_500_8c",
    "black_900_93",
    "white_A700",
    "gray_300",
    "red_A400",
  ]),
};

export { Input };
