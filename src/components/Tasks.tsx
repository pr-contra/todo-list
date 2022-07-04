import { Task } from '../types/tasks';
import { Empty } from './Empty';
import { Info } from './Info';
import { List } from './List';

type TaskProps = {
  tasks: Task[];
};

export const Tasks = ({ tasks }: TaskProps) => {
  return (
    <section>
      <Info />
      {tasks && tasks.length > 0 ? <List tasks={tasks} /> : <Empty />}
    </section>
  );
};
