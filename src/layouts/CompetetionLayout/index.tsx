import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { OrderTest } from '@/components/Grammar/OrderTest';
import { ITest } from '@/interfaces/ITest';
import competetionData from '@/data/competetion.json';
import classNames from 'classnames';

import styles from './competetion.module.scss';

export function CompetetionLayout() {
    
    const { competetion } =  competetionData[0];
    const [ isAnswer, setAnswer ] = useState<boolean>(false);
   
    return (
        <>
            <div className="content">
                <h3 className={ styles.title }>Выполните задания</h3>
                <p>Достигнуть высоты можно только правильно ответив на все задания. Скорость выполнения влияет на твой рейтинг.</p>
                { competetionData && <p className="content is-normal">
                    { competetion.map((item: ITest, index: number) => (
                        <div key={ `practice-${index}` } className={ styles.simpleBlock }>
                            <article className="message is-info is-small">
                                <OrderTest { ...item } isAnswer={ isAnswer } />
                            </article> 
                        </div>
                    ))
                    }
                </p> }  
                <button className="button is-info" onClick={ () => setAnswer(true)}>Проверить</button>
                
            </div>  
            
        </>
    );
}
  