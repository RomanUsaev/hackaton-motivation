import classNames from 'classnames';
import styles from './footer.module.scss';

export function Footer() {
    return (
        <>
            <footer className={classNames(styles.footerBlock, "footer")}>
                <div className="content has-text-centered">
                    <p>© 2021 | hackathon-motivation</p>
                </div>
            </footer>
        </>
)}
