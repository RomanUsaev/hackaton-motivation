import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './user.module.scss';

export function UserLayout() {

    const [mouseTarget, setMouseTarget] = useState<number>(0);
    
      return (
        <>
            <div className="columns is-centered">
                <div className="column is-6">
                    <div className="content is-normal">
                        <h1 className={ styles.title }>Достижения</h1>
                        <table className={ styles.table }>
                            <tbody>
                                <tr>
                                    <td>Достигнутая высота</td>
                                    <td>1745</td>
                                </tr>
                                <tr>
                                    <td>Пройдено чекпоинтов</td>
                                    <td>34</td>
                                </tr>
                                <tr>
                                    <td>Изучено тем</td>
                                    <td>12</td>
                                </tr>
                                <tr>
                                    <td>Участие в соревнованиях</td>
                                    <td>315</td>
                                </tr>
                                <tr>
                                    <td>Побед в соревнованиях</td>
                                    <td>21</td>
                                </tr>
                                <tr>
                                    <th>Рейтинг</th>
                                    <th>2635</th>
                                </tr>
                                            
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
  