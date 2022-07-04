import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './App.module.css';
import { Header } from './components/Header';
import { Newtask } from './components/Newtask';
import { Tasks } from './components/Tasks';
import { Task } from './types/tasks';

export const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (newTask: string) => {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        content: newTask,
        done: false,
      },
    ]);
  };

  const removeTask = (id: string) => {
    const auxTasks = [...tasks];
    const indexToRemove = auxTasks.findIndex(task => task.id === id);
    auxTasks.splice(indexToRemove, 1);
    setTasks(auxTasks);
  };

  const updateTask = (id: string) => {
    const auxTasks = tasks.map(task => {
      return {
        id: task.id,
        content: task.content,
        done: task.id === id ? !task.done : task.done,
      };
    });

    setTasks(auxTasks);
  };

  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <Newtask addTask={addTask} />
        <Tasks tasks={tasks} removeTask={removeTask} updateTask={updateTask} />
      </main>
    </div>
  );
};
