import { Component } from 'react';

class SubApp extends Component {
  render() {
    const name = "reAct";
    return (
      <div className="react">
        <h1>이번 프로젝트는 {name} 임다.</h1>
      </div>
    );
    }
}

//여러개의 컴포넌트 중 하나는 반드시 export default를 해줘야 함.
export default SubApp;