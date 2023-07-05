import SubApp from './SubApp';
import './App.css';
import ProtoTypes from 'prop-types';
import { useState } from 'react';
//자바스크립트 함수 하나 또는 클래스 => Component (컴포넌트)라고 함

//prop을 이용한 값 전달 방법
// 속성값으로 전달 <MyComponent name="Marisol" favoriteNumber={8} />
// 컴포넌트 태그 사이에 써서 children value로 전달 <MyComponent>"Kim"</MyComponent>

const App = () => { //index에서 호출 하는 것이 App이기 때문에 App을 사용함. 다른 이름이면 다름 이름 쓰면 됨
  const name = "뤼액";
  return (  /* 실제 화면에 랜더링 해 줄 HTML 코드가 들어가는 곳*/
    <div className="react">
      <h1>이번 프로젝트는 {name} 프로젝트입니다.</h1>
      <br></br>
      <hr></hr>
      <h1> export / import example </h1>
      <SubApp />

      <hr></hr>
      
      <div>
      <h1> Props Example </h1>
      <MyComponent name="Marisol" favoriteNumber={8}>"Kim"</MyComponent>
      </div>

      <hr></hr>
      <h1> State Example </h1>
      <MyState />

      <hr style={{ color: 'darkgray' }}></hr>
      <Say />

      <hr style={{ color: 'darkgray' }}></hr>
      <EventPractice/>

      <hr />
      <h1> IterationSample 배열형의 state? </h1>
      <IterationSample/>

 
    </div>
    //porp에서 넘겨주는 값은 문자 또는 객체임 
    // -> 문자를 제외한 값들은 { }로 묶어서 중괄호 형태로 보내야 함//
  );
}

/********************** Props 예제 **********************/

//넘기는 값 인자로 받는 방법
//props로 받는 방식 , 객체로 받는 방식

/* 일반적으로 받는 방식 */
// const MyComponent = (props) => {
  
//   return (
//     <div>

//       <h1> Props Example </h1>
//       Hello, My name is {props.name}. <br />
//       Children value is {props.children}. <br /> ??
//       My favorite number is {props.favoriteNumber}.
//     </div>
//   );
// }

/* 객체로 받는 방식 */
const MyComponent = ({name, children, favoriteNumber}) => {
  
  return (
    <div>
      Hello, My name is {name}. <br />
      Children value is {children}. <br /> ??
      My favorite number is {favoriteNumber}.
    </div>
  );
}

//전달 받은 props의 디폴트값 셋팅 - key에 해당하는 속성이 없으면 기본으로 입력되는 값//
MyComponent.defaultProps = {
  name: "아무개"
}

MyComponent.prototype = {
  name: ProtoTypes.string,
  favoriteNumber: ProtoTypes.string.isRequired
}

/********************** STATE 예제 **********************/
//변수는 랜더링 되지 않음
//State는 바로 랜러딩 됨 값이 바뀜
//state가 랜더링 되면서 변수는 다시 초기화 됨
//State 지정를 지정하고 그 state를 변경하면 랜더링 됨

const MyState = () => {
  
  //비구조 할당 문법
  const [number, setNumber] = useState(1);
  let numberVar = 1;

  const increaseCountVar = () => {
    numberVar = numberVar + 1;
    console.log("변수 클릭 수 = " + numberVar);
  }

  return (
    <div>
      <h2> State Example 1 </h2>
      <p>변수 : {numberVar}</p>
      <p> State : {number}</p>  
      <button onClick={increaseCountVar}> 변수 </button>
      <button onClick={() => {
        setNumber(number + 1);
        console.log.apply("State =" + number);
      }}>State</button>
    </div>
    //onClick => 리액트의 이벤트 핸들러
  );
}


const Say = () => {

  const [message, setMessage] = useState(''); 
  const [color, setColor] = useState('black'); //초기값 => black

  const onClickEnter = () => {
    setMessage('Hello. you clicked enterance button!');
  }

  const onClickExit = () => {
    setMessage('Bye!');
  }

  return (
    <div>
      <h2>state example 2</h2>

      <button onClick={onClickEnter}> Enterance </button>
      <button onClick={onClickExit}> Exit </button>

      <h1 style={{color}}>{message}</h1>  {/*메세지의 스테이트 값이 출력 되도록 함*/}
      
      <button style={{color:'pink'}} onClick={()=>{setColor('pink')}}>pink</button>
      <button style={{color:'lightgreen'}} onClick={()=>{setColor('lightgreen')}}>lightgreen</button>
      <button style={{color:'skyblue'}} onClick={()=>{setColor('skyblue')}}>skyblue</button>

      {/* style={{color:'pink'}} 는 자바스크립트 객체 */}

    </div>
  )
}


const EventPractice = () => {

  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  }

  const onChangeMessage = (e) => {
    setMessage(e.target.value);
  }

  const onClick = () => {
    alert(username + " : " + message);
    setUsername("");
    setMessage("");
  }

  return (
    <div>
      <h2>Event Handling Practice</h2>
      <input type="text" name="username" value={username} placeholder="User's Name"
        onChange={onChangeUsername} />
      <input type="text" name="message" value={message} placeholder="put a message"
        onChange={onChangeMessage} />
      <button onClick={onClick} >confirm</button>
    </div>
  );

}

//State 
const IterationSample = () => {

  const [names, setNames] = useState([

    { id: 1, text: 'snowman' },
    { id: 2, text: 'ice' },
    { id: 3, text: 'snow' },
    { id: 4, text: 'wind' }

  ]);

  //배열 state의 초기화는 const [text, setText] = useState([]);
  const [inputTxet, setInputText] = useState('');

  const [nextId, setNextId] = useState(5);

  const onRmove = (id) => {
    const nextNames = names.filter((name) => name.id !== id)
    //삭제할 id 와 같지 않은 것들만 필터링
    setNames(nextNames);
  }

  /* Map 함수
   *  map 함수의 역할 : 자동으로 for문을 돌려서 key와 value를 반환
   *  사용 이용 : React에서는 반복을 통해서 엘레먼트를 출력할 경우 
   *              엘리먼트 속성에 반드시 키 값이 있어야 한다.
   */
  const nameList = names.map((name) => ( 
    <li key={name.id} onDoubleClick={()=> onRmove(name.id)}>{name.text}</li>
  ));

  const onChange = (e) => {
    setInputText(e.target.value);
  }

  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputTxet
    });

    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");

  }

  
  return (
    <div>
      <h2> 엘리먼트 반복 처리 예제 </h2>
      <input type="text" value={inputTxet} onChange={onChange} />
      <button onClick={onClick}>추가</button> {/*버튼을 누르면 state에 계속 인풋한 텍스트를 쌓이도록 구현*/}
      <ul>
        {nameList}
      </ul>
    </div>
  );

}

//여러개의 컴포넌트 중 하나는 반드시 export default를 해줘야 함.
export default App;