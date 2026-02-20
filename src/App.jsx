import { HeaderComponent } from "./components/header-component/HeaderComponent";
import { Wrapper } from "./components/wrapper/Wrapper";
import { useState } from "react";
import { FormComponent } from "./components/form-component/FormComponent";
import { TaskComponent } from "./components/task-component/TaskComponent";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleTasks = (values) => {
    setTasks((prev) => [
      ...prev,
      { name: values.task, priority: "None", completed: false },
    ]);
  };

  console.log(tasks);

  return (
    <>
      <Wrapper>
        <HeaderComponent title={"To-Do List"} />

        <FormComponent onFinish={handleTasks} />

        <TaskComponent tasks={tasks} setTasks={setTasks} />
      </Wrapper>
    </>
  );
}

export default App;
