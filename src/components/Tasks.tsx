import { Task } from '../types/tasks';
import { Empty } from './Empty';
import { Info } from './Info';
import { List } from './List';

type TaskProps = {
  tasks: Task[];
  removeTask: (id: string) => void;
  updateTask: (id: string) => void;
};

export const Tasks = ({ tasks, removeTask, updateTask }: TaskProps) => {
  return (
    <section>
      <Info tasks={tasks} />
      {tasks && tasks.length > 0 ? (
        <List tasks={tasks} removeTask={removeTask} updateTask={updateTask} />
      ) : (
        <Empty />
      )}
    </section>
  );
};
