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
  let [likes, setLikes] = useState([0, 0, 0]);

  // modal
  let [modal, setModal] = useState(false);
  let [number, setNumber] = useState(null);

  // new
  let [write, setWrite] = useState('');

  // 랜더링 안에 재랜더링 시키는 코드가 있으면 무한 반복 시작
  // let titles_sort = titles.sort()
  // setTitles(titles_sort)
  
  function rename() {
    let copy1 = titles;  // 포인터를 복사
    let copy2 = Array.from(titles);  // 값을 복사, [...titles]도 가능
    copy2[0] = '부산';
    setTitles(copy2);
  }

  function detail(value, index, arr) {
    // 완전 하드 코딩.. ㅠ
    if (!!modal && value === document.getElementsByClassName('modal')[0].getElementsByTagName('h4')[0].innerHTML) {
      setModal(false);
    }
    else {
      setModal(true);
      setNumber(index);
    }
  }

  function newWrite() {
    if (write !== '') {
      setTitles(titles.concat([write]));
      setDates(dates.concat(['06. 25']));
      setLikes(likes.concat([0]));
    }
  }

  function deleteWrite(count) {
    let titlesCopy = Array.from(titles)
    let datesCopy = Array.from(dates)
    let likesCopy = Array.from(likes)

    titlesCopy.splice(count, 1); datesCopy.splice(count, 1); likesCopy.splice(count, 1); 
    setTitles(titlesCopy); setDates(datesCopy); setLikes(likesCopy)
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

      {
        titles.map( (val, count) => {
          return (
            // 반복문으로 삽입하는 html에는 key속성을 추가해야 리액트가 구분할 수 있음
            <div className='list' key={count}>
              <h4 onClick={ () => { detail(val, count) } }>{titles[count]}
                <span onClick={() => { setLikes(likes.map( (val_in, count_in) => { return count_in === count? val_in+1 : val_in })) }}> {likes[count]}</span>
              </h4>
              <p>{dates[count]}</p>
              <button onClick={() => { deleteWrite(count) }}>Delete</button>
            </div>
          )
        })
      }

      {/* write */}
      <input onChange={(event) => { setWrite(event.target.value) }} />
      <button onClick={() => { newWrite() }}>write
      </button>

      {/* props하려는 속성값은 무한히 지정할 수 있음. */}
      {/* state 말고 변수나 문자 모두 가능 */}
      {/* 부모 -> 자식만 가능 */}
      {
        modal? <Modal titles={titles} number={number} rename={rename}></Modal> : null
      }

      {/* 변수를 넣을 땐 중괄호, 데이터 바인딩 */}
      {/* <h4>{post}</h4> */}
    </div>
  );
}

// component
function Modal(props) {
  return (
    <div className='modal'>
      <h4>{ props.titles[props.number] }</h4>
      <p>date</p>
      <p>content</p>
      <button onClick={() => {props.rename()}}>rename</button>
    </div>
  )
}

export default App;
