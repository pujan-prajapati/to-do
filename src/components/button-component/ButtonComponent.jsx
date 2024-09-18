import { Button } from "antd";
import React from "react";

export const ButtonComponent = (props) => {
  return (
    <Button
      className={`rounded-full h-11 ${props.className}`}
      type={props.type}
      htmlType={props.htmlType}
      danger={props.danger}
      onClick={props.onClick}
    >
      {props.title}
    </Button>
  );
};
