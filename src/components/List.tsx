import { Task } from '../types/tasks';
import { Item } from './Item';
import styles from './List.module.css';

type ListProps = {
  tasks: Task[];
};

export const List = ({ tasks }: ListProps) => {
  return (
    <div className={styles.list}>
      {tasks.map(task => {
        return <Item key={task.id} content={task.content} />;
      })}
    </div>
  );
};
