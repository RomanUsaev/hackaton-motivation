import React, { useState } from 'react';
import { IGrammar } from '@/interfaces/IGrammar';
import { LessonLayout } from '@/layouts/LessonLayout';
import { CompetetionLayout } from '@/layouts/CompetetionLayout';
import { AddLayout } from '@/layouts/AddLayout';

import styles from './training.module.scss';

export function TrainingLayout(props: IGrammar) {
    const { title } = props;
    const [ turn, setTurn ] = useState<string>('lesson');

      return (
        <>
            <div className="columns is-centered">
                <div className="column is-6">
                    <div className="content is-normal">
                        <h1 className={ styles.title }>{ title.text }</h1>
                        <div>
                            <div className="tabs is-centered">
                                <ul>
                                    <li className={ turn==='lesson' ? "is-active" : null }>
                                        <a onClick={() => setTurn('lesson') }>
                                            <img className={ styles.icon } src="/images/map-search-outline.png" /> Подготовка
                                        </a>
                                    </li>
                                    <li className={ turn==='competetion' ? "is-active" : null }>
                                        <a onClick={() => setTurn('competetion') }>
                                            <img className={ styles.icon } src="/images/hiking.png" /> Соревнование
                                        </a>
                                    </li>
                                    <li className={ turn==='add' ? "is-active" : null }>
                                        <a onClick={() => setTurn('add') }>
                                            <img className={ styles.icon } src="/images/map-check-outline.png" /> Наставничество
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            { turn==='lesson' && <LessonLayout {...props} /> }
                            { turn==='competetion' && <CompetetionLayout {...props} /> }
                            { turn==='add' && <AddLayout {...props} /> }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
  