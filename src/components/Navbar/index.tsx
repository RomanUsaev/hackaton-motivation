import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link'
import classNames from 'classnames';
import { IRootState } from  '@/interfaces/IRootState';

import styles from './navbar.module.scss';


export function Navbar() {

    const points = useSelector((state: IRootState) => state.points);
    const dispatch = useDispatch();
      
    /*
    const handleOnClick = (value: string) => {
        cookieCutter.set('languageUI', value);
        dispatch({
            type: 'SET_LANGUAGE_UI',
            languageUI: value,
        });
    } 
    */

    useEffect(() => {
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
        if ($navbarBurgers.length > 0) {
            $navbarBurgers.forEach( el => {
                el.addEventListener('click', () => {
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);
                    el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');
                });
            });
        }
    }, []);


    return (
        <>
            <nav className={classNames(styles.navBorder, "navbar is-fixed-top")} role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link href="/">
                        <a className="navbar-item">
                            <div className={styles.container}>
                                <img className={styles.logo}src="/images/logo_edScramble.png" />
                                <span className={styles.text}>hackaton-motivation</span>
                            </div>
                        </a>
                    </Link>
                    <div className={ styles.points }>
                        <img className={ styles.icon } src="/images/summit.png" /> Высота: { points }
                    </div>
                </div>
                

                <div className="navbar-end is-hidden-mobile">
                    <div className="navbar-item">
                        <div id="navbarBasicExample" className="navbar-menu">
                            <div className="navbar-start">
                                <Link href="/targets">
                                    <a className="navbar-item">
                                        <img className={ styles.icon } src="/images/map-marker-radius-outline.png" /> Цели
                                    </a>
                                </Link>
                                <Link href="/training">
                                    <a className="navbar-item">
                                        <img className={ styles.icon } src="/images/pickaxe.png" /> Тренировка
                                    </a>
                                </Link>
                                <Link href="/user">
                                    <a className="navbar-item">
                                        <img className={ styles.icon } src="/images/medal-outline.png" /> Достижения
                                    </a>
                                </Link>
                                <Link href="/rating">
                                    <a className="navbar-item">
                                        <img className={ styles.icon } src="/images/podium-silver.png" /> Рейтинг
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}


Navbar.getInitialProps = ({ req }) => {
    const isServer = !!req;
    const isBrowser = !req;

    // console.log(isServer, isBrowser);
    return {}
}
