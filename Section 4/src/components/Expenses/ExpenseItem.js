import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // function clickHandler() {}

  // 컴포넌트 함수가 다시 호출되는 곳에서 변경된 값을 반영하기 위해 state로 값을 정의함.
  // setState()는 컴포넌트의 state 객체에 대한 업데이트를 실행.
  // useState();

  // const [현재 값, 나중에 title을 설정하기 위한 함수(업데이트 값)]
  const [title, setTitle] = useState(props.title);
  console.log('ExpenseItem evaluated by React');
  
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>

      {/* 모든 이벤트 핸들러 props는 함수가 필요함. */}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
