import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [userInput, setUserInput] = useState ({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate : ''
  // });


  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // setUserInput({
    //   // 스프레드 연산자
    //   ...userInput, 
    //   enteredTitle: event.target.value,
    // })

    // 동시에 수많은 상태 업데이트를 한다면 오래됐거나 잘못된 상태 스냅샷에 의존할 수 있음.
    // 아래 방법은 항상 최신상태의 스냅샷을 유지함.(항상 계획된 상태 업데이트)
    //  setUserInput((prevState) => {
    //     return {...prevState, enteredTitle: event.target.value};
    //   });
    // 
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput({
    //   // 스프레드 연산자
    //   ...userInput, 
    //   enteredAmount: event.target.value,
    // })
  
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //   // 스프레드 연산자
    //   ...userInput, 
    //   enteredDate: event.target.value,
    // })
  };

const submitHandler = (event) => {
  // 기본 요청 방지
  event.preventDefault();

  const expenseData = {
    title: enteredTitle,
    amount: +enteredAmount,
    //내장된 날짜 생성자로 새로운 날짜를 구성함. 
    // 해당 날짜 문자열을 분석해서 날짜 객체로 변환 후 enteredDate로 전달함.
    date: new Date(enteredDate) 
  };

  props.onSaveExpenseData(expenseData);

  // 입력창 reset
  setEnteredTitle('');
  setEnteredAmount('');
  setEnteredDate('');
}

  return(
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={enteredAmount}  onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler}/>
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit" >Add Expense</button>
      </div>

    </form>
  );
}

export default ExpenseForm;