import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './Newtask.module.css';

type NewTaskProps = {
  addTask: (newTask: string) => void;
};

export const Newtask = ({ addTask }: NewTaskProps) => {
  const [newTask, setNewTask] = useState('');

  const handleNewTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleNewTask = (e: FormEvent) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask('');
  };

  return (
    <form onSubmit={handleNewTask} className={styles.newtask}>
      <input
        type="text"
        className={styles.newtask__input}
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewTaskChange}
        value={newTask}
        required
      />
      <button type="submit" className={styles.newtask__button}>
        Criar
        <PlusCircle size={20} />
      </button>
    </form>
  );
};
