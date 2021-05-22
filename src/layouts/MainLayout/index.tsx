import { useEffect } from "react";
import { IMain } from '@/interfaces/IMain';
import { Navbar } from '@/components/Navbar';
import { useDispatch } from 'react-redux';
import { Footer } from '@/components/Footer';

import Head from 'next/head';
// import cookieCutter from 'cookie-cutter';

import styles from './main.module.scss';


export function MainLayout(props: IMain) {
    const {children, title } = props;
    const dispatch = useDispatch();
    

    useEffect(() => {},[dispatch]);
    
    
    return (
        <>
            <Head>
                <title>{title} | hackaton-motivation</title>
            </Head>
            <div className={ styles.navbar }>
                <Navbar/>
            </div>
            <main>
                <div className="container is-fluid">
                    {children}
                </div>
            </main>
            <Footer/>
        </>
    );
}
  