import "./global.css";
import Header from "./components/Header/Header";
import DoBar from "./components/DoBar/DoBar";
import Task from "./components/Task/Task";
import Info from "./components/Info/Info";

import { FileText } from "phosphor-react";

import styles from "./app.module.css";
import { useState } from "react";



function App() {
  const [tasks, setTasks] = useState([]);

  const [isEmpty, setIsEmpty] = useState(true);

  function handleNewTask(){
    event.preventDefault();
    setTasks([...tasks, {
      id: 4,
      message: "Olá,eu estou passando essa nova info",
      isComplete: true
    },]);
    setIsEmpty(false);
  }

  return (
    <>
      <Header />
      <DoBar 
        onClick={handleNewTask}
      />
      <div className={styles.tasksoptions}>
        <Info />
        <div className={styles.alltasks}>
          {isEmpty ?
          (
            <div className={styles.withouTask}>
              <FileText size={56} color="var(--gray-400)"/>
              <h1>Você ainda não tem tarefas cadastradas</h1>
              <h2>Crie tarefas e organize seus itens a fazer</h2>
            </div>
          )
          : (
            <>
              {tasks.map(task => (
              <Task 
                key={task.id}
                isComplete={task.isComplete}
                message={task.message}
              />
            ))}
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default App
