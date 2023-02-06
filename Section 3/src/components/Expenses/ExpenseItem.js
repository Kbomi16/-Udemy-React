import './ExpenseItem.css'; 
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React from "react";

const ExpenseItem = (props) => {
  // 0부터 시작이기 때문에 3월을 나타내려면 2를 써야함.
  // const expenseDate = new Date(2023, 2, 28);; 
  // const expenseTitle = '자동차 사고';
  // const expenseAmount = 294.67;

 

  return (
  <Card className='expense-item'>
    
    {/* Date는 날짜(상수)여서 뒤에 toISOString을 붙임.(문자열로 출력) */}
    {/* <div>{props.date.toISOString()}</div> */}
    
    <ExpenseDate date={props.date} />
    <div className='expense-item__description'>
      <h2>{props.title}</h2>
      <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
    );
}

export default ExpenseItem;