import { Task } from '../types/tasks';
import { Empty } from './Empty';
import { Info } from './Info';
import { List } from './List';
import styles from './Tasks.module.css';

type TaskProps = {
  tasks: Task[];
};

export const Tasks = ({ tasks }: TaskProps) => {
  return (
    <section className={styles.test}>
      <Info />
      {tasks && tasks.length > 0 ? <List tasks={tasks} /> : <Empty />}
    </section>
  );
};
