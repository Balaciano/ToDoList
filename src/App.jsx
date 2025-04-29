import "./global.css";
import Header from "./components/Header/Header";
import DoBar from "./components/DoBar/DoBar";
import Task from "./components/Task/Task";
import Info from "./components/Info/Info";

import { FileText } from "phosphor-react";

import styles from "./app.module.css";
import { useEffect, useState } from "react";



function App() {
  const [tasks, setTasks] = useState([]);
  const [isEmpty, setIsEmpty] = useState();
  const [newTask, setNewTask] = useState("");

  //Utilizado para reagir a mudanças de estado
  useEffect(() => {
    //Se o tamanho da tasks for vazia, isEmpty é true
    setIsEmpty(tasks.length === 0);
  }, [tasks]);

  function handleCreateNewTask(event){
    event.preventDefault();

    const newTaskObject = { 
      id: Date.now(), // garante um ID único
      message: newTask,
      isComplete: false
    };

    //!!!!!!!  IMPORTANTE !!!!!!!
    //CASO A MENSAGEM SEJA VAZIA (TENTAR FAZER UMA VALIDAÇÃO NESSE INPUT COM O ZOD AO INVES DISSO)
    if (newTask.trim() === "") return;
    //

    setTasks([...tasks, newTaskObject]);
    setNewTask("");
  }

  
  function handleNewTaskInput(event){
    setNewTask(event.target.value);
  }

  function toggleTaskComplete(taskId) {
    const updatedTasks = tasks.map(task => {
      if (taskId === task.id) {
        return {...task, isComplete: !task.isComplete};
      }
      return task;
    })
    setTasks(updatedTasks);
  }

  function toggleDeleteTask(taskId) {
    const updatesTasks = tasks.filter(task => {
      if (taskId === task.id) {
        return false;
      }
      return task;
    })
    setTasks(updatesTasks);
  }


  return (
    <>
      <Header />
      <DoBar 
        onClick={handleCreateNewTask}
        functionReturn={handleNewTaskInput}
        value={newTask}
      />
      <div className={styles.tasksoptions}>
        <div className={styles.content}>
        <Info 
          tasks={tasks} 
        />
        <div className={styles.alltasks}>
          {isEmpty ?
          (
            <div className={styles.withoutTask}>
              <FileText size={56} color="var(--gray-400)"/>
              <div>
                <h1>Você ainda não tem tarefas cadastradas</h1>
                <h2>Crie tarefas e organize seus itens a fazer</h2>
              </div>
            </div>
          )
          : (
            <>
              {tasks.map(task => (
              <Task 
                key={task.id}
                id={task.id}
                isComplete={task.isComplete}
                message={task.message}
                onToggleComplete={toggleTaskComplete}
                onToggleDeleteTask={toggleDeleteTask}
              />
            ))}
            </>
          )}
        </div>
        </div>
      </div>
    </>
  )
}

export default App
