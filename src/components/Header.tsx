import todoLogo from '../assets/rocket.svg';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="todo-title" />
      <p className={styles.title}>
        to<span>do</span>
      </p>
    </header>
  );
};
