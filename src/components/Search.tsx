import { PlusCircle } from 'phosphor-react';
import styles from './Search.module.css';

export const Search = () => {
  return (
    <div className={styles.search}>
      <input
        className={styles.search__input}
        placeholder="Adicione uma nova tarefa"
      ></input>
      <button className={styles.search__button}>
        <p>Criar</p>
        <PlusCircle size={20} />
      </button>
    </div>
  );
};
