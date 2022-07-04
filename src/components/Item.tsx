import { Trash } from 'phosphor-react';
import styles from './Item.module.css';

type ItemProps = {
  content: string;
};

export const Item = ({ content }: ItemProps) => {
  return (
    <div className={styles.item}>
      <label className={styles.checkbox}>
        <input type="checkbox" checked={false} />
        <span className={styles.checkbox__checkmark}></span>
        <p>{content}</p>
      </label>
      <button className={styles.trash}>
        <Trash size={20} />
      </button>
    </div>
  );
};
