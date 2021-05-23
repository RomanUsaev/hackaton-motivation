import React, { Component, useState } from 'react';
import classNames from 'classnames';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';

import { ITest } from '@/interfaces/ITest';


import styles from './test.module.scss';




const SortableItem = SortableElement(({value, word, isAnswer}) => {
    return (
        <div className={ classNames(styles.word, "tag", isAnswer ? ((word === value) ? "is-success" : "is-danger") : "is-warning" )}>
            {value}
        </div>
    );
});

const SortableList = SortableContainer(({items, array, isAnswer}) => {
    const [isAnswerTrue, setAnswerTrue] = useState(false);

    (items.join() == array.join() && !isAnswerTrue) ? setAnswerTrue(true) : null; 

    return (
        <div className={styles.container}>
            { items.map((value, index) => (
                <SortableItem key={`item-${value}`} index={index} value={value} word={array[index]} isAnswer={isAnswer}/>      
            )) }
        </div>
    );
});

const createState = (props) => {
    const { text } = props;
    const array = text.text.split(' ');
    const initialItems = text.text.split(' ');

    while (array[0] === initialItems[0]) {
        initialItems.sort(() => Math.random() - 0.5);
    }
    return initialItems;   
}


type State = {
    items: string[],
    array: string[],
}
type Answer = {
    isAnswer: boolean,
    setAlltrue: void,
}
type TypeOrderTest = ITest & Answer;
export class OrderTest extends Component<TypeOrderTest, State> {

    constructor(props) {
        super(props);
        this.state = { 
            items: createState(props),
            array: props.text.text.split(' '),
        }
    }
   
    
    onSortEnd = ({oldIndex, newIndex}) => {
      this.setState(({ items }) => ({
        items: arrayMove(items, oldIndex, newIndex),
      }));
    };

    
    render() {
        const { items, array } = this.state; 
        const { title, author, isAnswer, setAlltrue } = this.props; 
        console.log(isAnswer);
       


        return (
            <div className="content is-normal">
                { title.text && <article className={classNames(title.format)}>
                    <div className="message-header">
                        <p className={styles.enableLineBreak}>{ title.text } (Наставник: { author.text })</p>
                    </div>
                    { items.length && 
                        <div className={ classNames("message-body") }>
                            <SortableList items={items} array={array} onSortEnd={this.onSortEnd} axis="xy" isAnswer={isAnswer}/>    
                        </div>
                    }
                </article> }
            </div>
        ) 
    }
  }