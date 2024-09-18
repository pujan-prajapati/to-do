import { Form, Input } from "antd";
import React from "react";
import { ButtonComponent } from "../button-component/ButtonComponent";
import { FaPlus } from "react-icons/fa";

export const FormComponent = (props) => {
  return (
    <>
      <section className="w-1/2 mx-auto">
        <Form
          onFinish={props.onFinish}
          className="flex justify-center gap-5 mt-20"
        >
          <Form.Item
            name="task"
            rules={[
              {
                required: true,
                message: "Please enter the task",
              },
            ]}
            className="w-[500px]"
          >
            <Input placeholder="Enter Task" size="large" />
          </Form.Item>

          <ButtonComponent
            htmlType="submit"
            type="primary"
            title={<FaPlus />}
          />
        </Form>
      </section>
    </>
  );
};
