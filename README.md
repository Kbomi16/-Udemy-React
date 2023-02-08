# -Udemy-React

✔️ setState <br>
- setState()는 컴포넌트의 state 객체에 대한 업데이트를 실행한다. 
- state가 변경되면, 컴포넌트는 리렌더링된다.

❓state와 props의 차이점<br>
- props (“properties”의 줄임말) 와 state 는 일반 JavaScript 객체. 
- 두 객체 모두 렌더링 결과물에 영향을 주는 정보를 갖고 있는데
- props는 (함수 매개변수처럼) 컴포넌트에 전달됨.
- state는 (함수 내에 선언된 변수처럼) 컴포넌트 안에서 관리됨.

✔️ 스프레드 연산자(Spread Operator)<br>
- JavaScript spread 연산자(...)를 사용하면 기존 배열이나 객체의 전체 또는 일부를 다른 배열이나 객체로 빠르게 복사할 수 있다.
```js
const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5];  // [1, 2, 3, 4, 5];
```
```js
const oldObject = {
	name: 'Max'
};
const newObject = {
	...oldObject,
	age: 28
};
// newObject는 아래와 같이 적용된다.
{
	name: 'Max',
	age: 28
}
```