import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Contador } from './componentes/Contador';
import { app } from './componentes/Contador';

export default function Home() {
    return <div className={styles.container}>Olá
    <Contador />
    </div>
}