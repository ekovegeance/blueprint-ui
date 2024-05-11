import React from "react";

export default function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={`${
        className
          ? className
          : "bg-primary-700 hover:bg-primary-600 focus:ring-primary-50 text-white"
      } rounded-full px-7 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus:ring `}
    >
      {children ? children : "Tombol"}
    </button>
  );
}
