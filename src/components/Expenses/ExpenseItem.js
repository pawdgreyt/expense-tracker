import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import { useState } from 'react';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    
    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{ title }</h2>
                <div className='expense-item__price'>Php { props.amount }</div>
            </div>
            {/* <button onClick={clickHandler}>Change Title</button> */}
        </Card>
    );
}

export default ExpenseItem;