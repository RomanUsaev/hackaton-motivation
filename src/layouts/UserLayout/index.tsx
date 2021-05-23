import React from 'react';
import styles from './user.module.scss';

export function UserLayout() {
    
      return (
        <>
            <div className="columns is-centered">
                <div className="column is-6">
                    <div className="content is-normal">
                        <h1 className={ styles.title }>Достижения</h1>
                        <table className={ styles.table }>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>За все время</th>
                                    <th>За 24 часа</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img className={ styles.icon } src="/images/summit.png" /> Достигнутая высота</td>
                                    <td>1745</td>
                                    <td className={ styles.plus }>+17</td>
                                </tr>
                                <tr>
                                    <td><img className={ styles.icon } src="/images/flag-checkered.png" /> Пройдено чекпоинтов</td>
                                    <td>34</td>
                                    <td className={ styles.plus }>+3</td>
                                </tr>
                                <tr>
                                    <td><img className={ styles.icon } src="/images/school-outline.png" /> Изучено тем</td>
                                    <td>12</td>
                                    <td className={ styles.plus }>+1</td>
                                </tr>
                                <tr>
                                    <td><img className={ styles.icon } src="/images/hiking.png" /> Участие в соревнованиях</td>
                                    <td>315</td>
                                    <td className={ styles.plus }>+6</td>
                                </tr>
                                <tr>
                                    <td><img className={ styles.icon } src="/images/seal.png" /> Побед в соревнованиях</td>
                                    <td>46</td>
                                    <td className={ styles.plus }>+2</td>
                                </tr>
                                <tr>
                                    <td><img className={ styles.icon } src="/images/seal.png" /> Процент побед</td>
                                    <td>14%</td>
                                    <td className={ styles.minus }>-7%</td>
                                </tr>
                                <tr>
                                    <td><img className={ styles.icon } src="/images/map-check-outline.png" /> Наставничество</td>
                                    <td>12</td>
                                    <td className={ styles.plus }>+1</td>
                                </tr>
                                <tr>
                                    <th><img className={ styles.icon } src="/images/podium-silver.png" /> Рейтинг</th>
                                    <th>2635</th>
                                    <td className={ styles.plus }>+25</td>
                                </tr>
                                            
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
  