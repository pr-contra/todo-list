import { Task } from '../types/tasks';

type ListProps = {
  tasks: Task[];
};

export const List = ({ tasks }: ListProps) => {
  console.log(tasks);
  return (
    <div>
      {tasks.map(task => {
        return <div>{task.content}</div>;
      })}
    </div>
  );
};
