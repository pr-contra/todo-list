import { Trash } from 'phosphor-react';
import { Task } from '../types/tasks';
import styles from './Item.module.css';

type ItemProps = {
  task: Task;
  removeTask: (id: string) => void;
  updateTask: (id: string) => void;
};

export const Item = ({ task, removeTask, updateTask }: ItemProps) => {
  const { id, content, done } = task;
  return (
    <div className={styles.item}>
      <label className={styles.checkbox}>
        <input type="checkbox" onClick={() => updateTask(id)} checked={done} />
        <span className={styles.checkbox__checkmark}></span>
        <p>{content}</p>
      </label>
      <button className={styles.trash}>
        <Trash size={20} onClick={() => removeTask(id)} />
      </button>
    </div>
  );
};
