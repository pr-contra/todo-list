import styles from './App.module.css';
import { Header } from './components/Header';
import { Newtask } from './components/NewTask';
import { Tasks } from './components/Tasks';
import { Task } from './types/tasks';

const tasks: Task[] = [
  {
    id: 1,
    content:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    done: false,
  },
  {
    id: 2,
    content:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    done: false,
  },
  {
    id: 3,
    content:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    done: true,
  },
];

// const tasks: Task[] = [];

export const App = () => {
  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <Newtask />
        <Tasks tasks={tasks} />
      </main>
    </div>
  );
};
