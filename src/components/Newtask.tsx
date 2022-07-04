import { PlusCircle } from 'phosphor-react';
import styles from './Newtask.module.css';

export const Newtask = () => {
  return (
    <div className={styles.newtask}>
      <input
        className={styles.newtask__input}
        placeholder="Adicione uma nova tarefa"
      ></input>
      <button className={styles.newtask__button}>
        <p>Criar</p>
        <PlusCircle size={20} />
      </button>
    </div>
  );
};
