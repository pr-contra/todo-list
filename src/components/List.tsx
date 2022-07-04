import { Task } from '../types/tasks';
import { Item } from './Item';
import styles from './List.module.css';

type ListProps = {
  tasks: Task[];
  removeTask: (id: string) => void;
  updateTask: (id: string) => void;
};

export const List = ({ tasks, removeTask, updateTask }: ListProps) => {
  return (
    <div className={styles.list}>
      {tasks.map(task => {
        return (
          <Item
            key={task.id}
            task={task}
            removeTask={removeTask}
            updateTask={updateTask}
          />
        );
      })}
    </div>
  );
};
