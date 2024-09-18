import React, { useState } from "react";
import { ButtonComponent } from "../button-component/ButtonComponent";
import { FaMinus, FaPen } from "react-icons/fa";
import { Checkbox, Modal } from "antd";

export const TaskComponent = ({ tasks, setTasks }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);

  const showModal = (index) => {
    setSelectedTaskIndex(index);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setSelectedTaskIndex(null);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedTaskIndex(null);
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, taskIndex) => taskIndex !== index));
  };

  const handlePriority = (index, priority) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = { ...updatedTasks[index], priority };
    setTasks(updatedTasks);
    handleOk();
  };

  const handleCompleted = (index) => {
    const completedTasks = [...tasks];
    completedTasks[index] = {
      ...completedTasks[index],
      completed: !completedTasks[index].completed,
    };
    setTasks(completedTasks);
    handleOk();
  };

  const getBgColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-200";
      case "Medium":
        return "bg-orange-200";
      case "Low":
        return "bg-yellow-200";
      default:
        return "bg-gray-200";
    }
  };

  return (
    <section className="mt-7 flex flex-col justify-center">
      {tasks.map((task, index) => (
        <div
          key={index}
          className={`w-1/2 mb-2 rounded-md bg-gray-200 px-10 py-2 mx-auto flex justify-between items-center gap-5 ${getBgColor(
            task.priority
          )} ${task.completed ? "line-through text-gray-400" : ""}
           `}
        >
          <div className="flex gap-3">
            <p>{index + 1}.</p>
            <p>{task.name}</p>
          </div>
          <div className="space-x-2">
            <ButtonComponent
              type="primary"
              title={<FaMinus />}
              danger={true}
              onClick={() => handleDelete(index)}
            />
            <ButtonComponent
              type="primary"
              title={<FaPen />}
              onClick={() => showModal(index)}
            />

            <Modal
              title="Choose Priority"
              open={isModalOpen && selectedTaskIndex === index}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <div className="space-x-5 my-5 text-center">
                <ButtonComponent
                  type="primary"
                  title={"High Priority"}
                  className="rounded-md bg-green-500 text-white hover:!bg-green-400"
                  onClick={() => handlePriority(index, "High")}
                />
                <ButtonComponent
                  type="primary"
                  title={"Medium Priority"}
                  className="rounded-md bg-orange-500 text-white hover:!bg-orange-400"
                  onClick={() => handlePriority(index, "Medium")}
                />
                <ButtonComponent
                  type="primary"
                  title={"Low Priority"}
                  className="rounded-md bg-yellow-500 text-white hover:!bg-yellow-400"
                  onClick={() => handlePriority(index, "Low")}
                />

                <Checkbox
                  checked={task.completed}
                  onChange={() => handleCompleted(index)}
                  className="text-lg font-semibold mt-5 "
                >
                  Set Task as Completed
                </Checkbox>
              </div>
            </Modal>
          </div>
        </div>
      ))}
    </section>
  );
};
