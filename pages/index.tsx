import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Contador } from './componentes/Contador';
import { App } from './App';
import {Like} from './componentes/Like'

export default function Home() {
  return (
    <div className={styles.container}>
      Olá
      <Like />
    </div>
  );
}
