import clipboard from '../assets/clipboard.svg';
import styles from './Empty.module.css';

export const Empty = () => {
  return (
    <section className={styles.empty}>
      <img src={clipboard} alt="clipboard" className={styles.empty__icon} />
      <div className={styles.empty__message}>
        <b>Você ainda não tem tarefas cadastradas</b>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </section>
  );
};
