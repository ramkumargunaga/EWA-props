import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-none",
  round: "rounded-lg",
  circle: "rounded-[50%]",
};
const variants = {
  fill: {
    white_A700_01: "bg-white-A700_01 text-red-A400",
    amber_600_01: "bg-amber-600_01 shadow-bs text-white-A700",
    red_A400_7f: "bg-red-A400_7f text-white-A700",
    red_A400_66: "bg-red-A400_66 text-indigo-900",
    green_500_8c: "bg-green-500_8c text-green-900",
    pink_A400: "bg-pink-A400 shadow-bs text-white-A700",
    gray_50_01: "bg-gray-50_01 text-gray-800_02",
    red_A400_1e: "bg-red-A400_1e text-black-900",
    red_A400: "bg-red-A400 text-white-A700",
    gray_50: "bg-gray-50 text-gray-800",
    gray_100: "bg-gray-100",
  },
  outline: {
    red_A400_7f: "border border-red-A400_7f border-solid text-blue-900",
    white_A700: "border border-solid border-white-A700 text-white-A700",
  },
};
const sizes = {
  xs: "p-[3px]",
  sm: "p-1.5",
  md: "p-[9px]",
  lg: "pl-[11px] pr-2.5 py-[13px]",
  xl: "p-[15px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "md",
  variant = "fill",
  color = "gray_100",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "white_A700_01",
    "amber_600_01",
    "red_A400_7f",
    "red_A400_66",
    "green_500_8c",
    "pink_A400",
    "gray_50_01",
    "red_A400_1e",
    "red_A400",
    "gray_50",
    "gray_100",
    "white_A700",
  ]),
};

export { Button };
