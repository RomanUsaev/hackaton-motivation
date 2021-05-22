import classNames from 'classnames';
import { OrderPractice } from '@/components/Grammar/OrderPractice';
import { IGrammar, IGrammarContent,  } from '@/interfaces/IGrammar';
import { ITest } from '@/interfaces/ITest';

import styles from './competetion.module.scss';

export function CompetetionLayout(props: IGrammar) {
    const { about, message, content, practice } = props;

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
        </>
    );
}
  