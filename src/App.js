import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let blogName = 'This is Blog';

  // react에는 변수 말고도 state에도 저장할 수 있음
  // 변수의 값이 바뀔 때 자동으로 재렌더링(html이) 하게 하고 싶으면 status를 사용
  // a = 보관한 자료
  // b = set
  let [a, b] = useState('남자 코트 추천');  // Destructuring 문법, let [a, b] = [1, 2];
  let [titles, setTitles] = useState(['서울', '대전', '강남'].sort());
  let [dates, setDates] = useState(['06. 25', '06. 26', '06. 27']);
  let [likes, setLikes] = useState([0])

  // 랜더링 안에 재랜더링 시키는 코드가 있으면 무한 반복 시작
  // let titles_sort = titles.sort()
  // setTitles(titles_sort)
  
  function rename() {
    let copy1 = titles;  // 포인터를 복사
    let copy2 = Array.from(titles);  // 값을 복사, [...titles]도 가능
    copy2[0] = '부산';
    setTitles(copy2);
  }

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
        {/* onClick에는 함수 이름만 넣어야 함 */}
        <h4>{titles[0]} <span onClick={() => {setLikes([likes[0]+1])}}>{likes[0]}</span></h4>
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
      <Modal></Modal>
      <Modal/>
      <button onClick={() => { rename() } }>rename</button>

      {/* 변수를 넣을 땐 중괄호, 데이터 바인딩 */}
      {/* <h4>{post}</h4> */}
    </div>
  );
}

// component
function Modal() {
  return (
    <div className='modal'>
      <h4>Title</h4>
      <p>date</p>
      <p>content</p>
    </div>
  )
}

export default App;
