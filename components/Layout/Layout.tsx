import { Header } from '../Header/Header';
import styles from './Layout.module.css';

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
