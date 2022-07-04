import styles from './App.module.css';
import { Header } from './components/Header';
import { Search } from './components/Search';
import { Todos } from './components/Todos';

export const App = () => {
  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <Search />
        <Todos />
      </main>
    </div>
  );
};
