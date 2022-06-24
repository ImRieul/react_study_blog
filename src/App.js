import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let blogName = 'This is Blog';

  // react에는 변수 말고도 state에도 저장할 수 있음
  // 변수의 값이 바뀔 때 자동으로 재렌더링(html이) 하게 하고 싶으면 status를 사용
  // a = 보관한 자료
  // b = set
  let [a, b] = useState('남자 코트 추천');  // Destructuring 문법, let [a, b] = [1, 2];
  let [titles, setTitles] = useState(['서울', '대전', '강남']);
  let [dates,setDate] = useState(['06. 25', '06. 26', '06. 27']);

  // return 안에는 1개의 태그만 넣을 수 있음.
  return (
    // jsx에서 class 속성을 사용하고 싶을 땐 className라고 해야한다. (js와 예약어가 겹침)
    <div className="App">
      <div className="black-nav">
        {/* 직접 style을 넣고 싶을 땐 중괄호 안에 오브젝트 형식으로 넣어야 한다. */}
        {/* html의 font-size -> fontSize */}
        {/* <h4 style={ {color: 'red', fontSize: '16px'} }>This is Blog</h4> */}
        <h4>{blogName}</h4>
      </div>
      <div className='list'>
        <h4>{titles[0]}</h4>
        <p>{dates[0]}</p>
      </div>
      <div className='list'>
        <h4>{titles[1]}</h4>
        <p>{dates[1]}</p>
      </div>
      <div className='list'>
        <h4>{titles[2]}</h4>
        <p>{dates[2]}</p>
      </div>

      {/* 변수를 넣을 땐 중괄호, 데이터 바인딩 */}
      {/* <h4>{post}</h4> */}
    </div>
  );
}

export default App;
