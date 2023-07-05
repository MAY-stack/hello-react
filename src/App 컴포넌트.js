import logo from './logo.svg';
import './App.css'; //import를 통해서 export를 허용한 함수(모듈) 뿐만 아니라 정적 파일을 불러 올 수 있음
import { Component } from 'react';
import SubApp from './SubApp';
//자바스크립트 함수 하나 또는 클래스 => Component (컴포넌트)라고 함

//함수 형을 쓰는 것 권장(클래스 형 잘 안씀?)

const App = () => { //index에서 호출 하는 것이 App이기 때문에 App을 사용함. 다른 이름이면 다름 이름 쓰면 됨
  const name = "뤼액";
  return (  /* 실제 화면에 랜더링 해 줄 HTML 코드가 들어가는 곳*/

    //  내부에는 하나의 Element만 들어갈 수 있음
    //   => 최상위 div tag 하나로 자식 태그들로 여러개의 태그 구성
    //   => OR <Fragement></Fragment> 사용 할 수 있음 이름은 안쓰고 빈태그로 <></>표시 함

    /*div 사용 예시*/
    <div className="react">
      <h1>이번 프로젝트는 {name} 프로젝트입니다.</h1>
      <br></br>
      <SubApp></SubApp>
      
    </div>
    //<SubApp/> 으로 하위의 자식 클래스를 노출 시킬 수 있음


    /*Strict Mode에서는 단일 태그 사용 못함*/
    //<br></br> 또는 <br /> 형태로 사용
    
    
    /*프래그먼트 사용 방법*/
    // <>
    //   이번 프로젝트는 {name} 프로젝트입니다.
    // </>
  );
}

/*자식 클래스 - 별도의 파일 SubApp.js로 분리해서도 작성 후 import 해서도 사용 가능*/
// class SubApp extends Component {
//   render() {
//     const name = "reAct";
//     return (
//       <div className="react">
//         <h1>이번 프로젝트는 {name} 임다.</h1>
//       </div>
//     );
//     }
// }


//여러개의 컴포넌트 중 하나는 반드시 export default를 해줘야 함.
export default App;
//함수형으로 쓸때는 여기 쓰지 않고 최상단에
//export default function App(){}의 형식으로 쓸 수도 있음



/*const 형식의 예시
const A = () => {}
const B = () => {}
export {A, B} 

import 시 ~~as lib로 받아서
lib.A
lib.B
등으로 사용할 수 있다
*/ 