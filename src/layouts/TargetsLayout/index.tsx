import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from  '@/interfaces/IRootState';
import classNames from 'classnames';
import styles from './targets.module.scss';

export function TargetsLayout() {

    const [mouseTarget, setMouseTarget] = useState<number>(0);
    const points = useSelector((state: IRootState) => state.points);
    
      return (
        <>
            <div className="columns is-centered">
                <div className="column is-6">
                    <div className="content is-normal">
                        <h1 className={ styles.title }>Цели</h1>
                        <div className={ styles.canvas }>
                            <img className={styles.everest}src="/images/everest.png" />

                            { mouseTarget===1 ? 
                                <img className={ classNames(styles.checkpoint, styles.one, styles.active) }src="/images/flag-checkered.png" />  : 
                                <img className={ classNames(styles.checkpoint, styles.one) }src="/images/flag-outline.png" /> 
                            }
                            { mouseTarget===2 ? 
                                <img className={ classNames(styles.checkpoint, styles.two, styles.active) }src="/images/flag-checkered.png" />  : 
                                <img className={ classNames(styles.checkpoint, styles.two) }src="/images/flag-outline.png" /> 
                            }
                            { mouseTarget===3 ? 
                                <img className={ classNames(styles.checkpoint, styles.three, styles.active) }src="/images/flag-checkered.png" />  : 
                                <img className={ classNames(styles.checkpoint, styles.three) }src="/images/flag-outline.png" /> 
                            }
                            <img className={ classNames(styles.checkpoint, styles[`point${ points }`], styles.user) } src="/images/hiking.png" />
                        </div>


                        <table className={ styles.table } onMouseOut={ () => setMouseTarget(0) }>
                            <thead>
                                <tr>
                                    <th>Чекпоинт</th>
                                    <th>Тема</th>
                                    <th>Высота</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr onMouseOver={ () => setMouseTarget(1) }>
                                <td>1</td>
                                <td>To be - повествовательная форма</td>
                                <td>5</td>
                            </tr>
                            <tr className={ styles.nonActiveText } onMouseOver={ () => setMouseTarget(2) }>
                                <td>2</td>
                                <td>To be - отрицательная форма</td>
                                <td>10</td>
                            </tr>
                            <tr className={ styles.nonActiveText } onMouseOver={ () => setMouseTarget(3) }>
                                <td>3</td>
                                <td>To be - вопросительная форма</td>
                                <td>15</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
  