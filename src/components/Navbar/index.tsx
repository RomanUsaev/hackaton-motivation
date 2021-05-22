import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import cookieCutter from 'cookie-cutter';
import classNames from 'classnames';
import { IRootState } from  '@/interfaces/IRootState'

import styles from './navbar.module.scss';


export function Navbar() {

    const languageUI = useSelector((state: IRootState) => state.languageUI);
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
                    <a className="navbar-item" href="#">
                        <div className={styles.container}>
                            <img className={styles.logo}src="/images/logo_edScramble.png" />
                            <span className={styles.text}>hackaton-motivation</span>
                        </div>
                    </a>
                </div>
                

                <div className="navbar-end is-hidden-mobile">
                    <div className="navbar-item">
                        <div id="navbarBasicExample" className="navbar-menu">
                            <div className="navbar-start">
                                <a className="navbar-item">
                                    Тренировка
                                </a>
                                <a className="navbar-item">
                                    Достижения
                                </a>
                                <a className="navbar-item">
                                    Рейтинги
                                </a>
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
