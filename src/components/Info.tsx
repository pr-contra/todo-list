import { Task } from '../types/tasks';
import styles from './Info.module.css';

type InfoProps = {
  tasks: Task[];
};

export const Info = ({ tasks }: InfoProps) => {
  const totalTasks = tasks.length;
  const doneTasks = tasks.filter(task => task.done === true).length;

  return (
    <section className={styles.info}>
      <div className={styles.info__created}>
        <p>Tarefas criadas</p>
        <span className={styles.info__counter}>{totalTasks}</span>
      </div>
      <div className={styles.info__done}>
        <p>Concluídas</p>
        <span className={styles.info__counter}>
          {tasks.length ? `${doneTasks} de ${totalTasks}` : totalTasks}
        </span>
      </div>
    </section>
  );
};
