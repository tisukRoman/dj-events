import Link from 'next/link';
import styles from '../styles/404.module.css';
import { FaExclamationTriangle } from "react-icons/fa";
import Layout from '../components/Layout';

export default function DefaultPage() {
    return (
        <Layout>
            <div className={styles.container}>
                <h1><FaExclamationTriangle /></h1>
                <h1>404</h1>
                <h3>SUCH PAGE DOES NOT EXIST</h3>
                <h3>YOU CAN GO TO THE MAIN PAGE</h3>
                <h3 className={styles.link}><Link href='/'>HOME</Link></h3>
            </div>
        </Layout>
    )
}
