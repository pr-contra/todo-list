import styles from './Info.module.css';

export const Info = () => {
  return (
    <section className={styles.info}>
      <div className={styles.info__created}>
        <p>Tarefas criadas</p>
        <span className={styles.info__counter}>0</span>
      </div>
      <div className={styles.info__done}>
        <p>Concluídas</p>
        <span className={styles.info__counter}>0</span>
      </div>
    </section>
  );
};
