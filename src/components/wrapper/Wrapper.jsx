import React from "react";

export const Wrapper = ({ children }) => {
  return (
    <section className="px-3 md:container md:px-0 py-5">{children}</section>
  );
};
