import'./ExpenseDate.css';
import React from "react";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString('en-US', {month:'long'});
  const day = props.date.toLocaleString('en-US', {day : '2-digit'}); //day는 2자리 출력
  const year = props.date.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
}

export default ExpenseDate;