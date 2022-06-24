import logo from './logo.svg';
import './App.css';

function App() {

  let post = '강남 우동 맛집';

  return (
    // jsx에서 class 속성을 사용하고 싶을 땐 className라고 해야한다. (js와 예약어가 겹침)
    <div className="App">
      <div className="black-nav">
        {/* 직접 style을 넣고 싶을 땐 중괄호 안에 오브젝트 형식으로 넣어야 한다. */}
        {/* html의 font-size -> fontSize */}
        <h4 style={ {color: 'red', fontSize: '16px'} }>This is Blog</h4>
      </div>
      {/* 변수를 넣을 땐 중괄호, 데이터 바인딩 */}
      <h4>{post}</h4>
    </div>
  );
}

export default App;
