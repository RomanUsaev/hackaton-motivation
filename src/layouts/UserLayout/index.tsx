import classNames from 'classnames';
import { OrderPractice } from '@/components/Grammar/OrderPractice';
import { IGrammar, IGrammarContent,  } from '@/interfaces/IGrammar';
import { ITest } from '@/interfaces/ITest';

import styles from './training.module.scss';

export function TrainingLayout(props: IGrammar) {
    const { title, about, message, content, practice } = props;

    const generatePostsBlock = (content) => {
        const { title, about, message, practice, key } = content; 
        return (
            <div className={ styles.simpleBlock } key={ key }>
                { title && title.text && <h4>{ title.text }</h4> }
                { about.text && <p className={ classNames(styles.enableLineBreak) }>{ about.text }</p> }
                { message.text && <article className={ classNames(styles.enableLineBreak, "message is-info is-small") }>
                    <div className="message-body">
                        <p className={styles.enableLineBreak}>{message.text}</p>
                    </div>
                </article> }
            </div>
        );
    }

    
    return (
        <>
            <div className="columns is-centered">
                <div className="column is-6">
                    <div className="content is-normal">
                        <h1> { title.text }</h1>
                        <div>
                            <div className="tabs is-centered">
                                <ul>
                                    <li className="is-active">
                                        <a><img className={ styles.icon } src="/images/map-search-outline.png" /> Подготовка</a>
                                    </li>
                                    <li><a><img className={ styles.icon } src="/images/hiking.png" /> Соревнование</a></li>
                                    <li><a><img className={ styles.icon } src="/images/map-check-outline.png" /> Наставничество</a></li>
                                </ul>
                            </div>
                        </div>
           
                        { generatePostsBlock({ about, message, practice, key: "headKey" }) }
                        { content.map((item: IGrammarContent, key: number) => generatePostsBlock({ ...item, key })) }
                        { practice && <div className="content is-normal">
                            { practice.map((item: ITest, index: number) => (
                                <div key={ `practice-${index}` }>
                                    <article className="message is-info is-small">
                                        <div className="message-header">
                                            <p className={styles.enableLineBreak}>{ item.title.text }</p>
                                        </div>
                                        <OrderPractice { ...item }/>
                                    </article> 
                                </div>
                            ))
                            }
                        </div> }  
                    </div>
                </div>
            </div>
        </>
    );
}
  