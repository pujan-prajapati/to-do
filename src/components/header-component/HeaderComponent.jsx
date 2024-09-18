import React from "react";

export const HeaderComponent = (props) => {
  return (
    <h1 className="text-5xl underline underline-offset-8 font-bold text-red-500 text-center">
      {props.title}
    </h1>
  );
};
