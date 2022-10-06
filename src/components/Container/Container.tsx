import * as style from './Container.module.css';

interface Props {
  children: React.ReactNode;
}

export const Container = ({ children }: Props) => (
  <div className={style.container}>{children}</div>
);
