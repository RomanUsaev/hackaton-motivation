import React, { Component, useState, useEffect } from 'react';
import classNames from 'classnames';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from  '@/interfaces/IRootState';

import { ITest } from '@/interfaces/ITest';

import styles from './test.module.scss';


const SortableItem = SortableElement(({value, word}) => {
    return (
        <div className={ classNames(styles.word, "tag", (word === value) ? "is-success" : "is-danger") }>
            {value}
        </div>
    );
});

const SortableList = SortableContainer(({items, array}) => {

    const [isPointSaved, setPointSaved] = useState(false);
    const [isAnswerTrue, setAnswerTrue] = useState(false);
    const points = useSelector((state: IRootState) => state.points);
    const dispatch = useDispatch();
      
    (items.join() == array.join() && !isAnswerTrue) ? setAnswerTrue(true) : null; 
   
    
    if (isAnswerTrue && !isPointSaved) { 
        dispatch({
            type: 'SET_POINTS',
            points: points + 1,
        });
        setPointSaved(true)
    }
    

    return (
        <div className={styles.container}>
            { items.map((value, index) => (
                <SortableItem key={`item-${value}`} index={index} value={value} word={array[index]}/>      
            )) }
            {  isAnswerTrue && <img className={ styles.icon } src="/images/pickaxe.png" /> }
        </div>
    );
});

const createState = (props) => {
    const { title, text } = props;
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


export class OrderPractice extends Component<ITest, State> {

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
        return (
            <>    
                { items.length && 
                    <div className={ classNames("message-body") }>
                        <SortableList items={items} array={array} onSortEnd={this.onSortEnd} axis="xy"/>    
                    </div>
                }
            </>
        ) 
    }
  }