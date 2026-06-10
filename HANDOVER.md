## 부트스트랩 라이브러리 이용하기

1. 구글에 react bootstrap 검색후 start 누르기

2. 터미널에 npm install react-bootstrap bootstrap 입력

3. css 파일도 입력 (1. import 방식 2. index.html에 head 태그안에 link태그로 집어넣기)

4. 부트스트랩에 UI 가져다쓸땐 상단에 import 해주기

5. 예) import {Button, Navbar, Container, Nav} from 'react-bootstrap'

-----------------------------------------------------------------------

## 리액트에서 이미지 가져올때

1. 
import 작명 from './img/bg.png'; 임포트방식
<div className='main-bg' style={{ backgroundImage : 'url('+ 작명 +')' }}></div>
'url('+ 작명 +')' 문자 중간에 자바스크립트 변수를 넣을땐 '+ ?? +' 넣기

## public 폴더의 용도 

여러가지 소스코드는 src 폴더에 보관하면 되는데 

이미지같은 static 파일의 경우 public 폴더에 보관해도 됩니다.

리액트로 개발을 끝내면 build 작업이라는걸 하는데 

지금까지 짰던 코드를 한 파일로 압축해주는 작업입니다. 

src 폴더에 있던 코드와 파일은 다 압축이 되는데 public 폴더에 있는 것들은 그대로 보존해줍니다. 

그래서 형태를 보존하고 싶은 파일은 public 폴더에 넣으면 되는데 js 파일은 그럴 일은 거의 없고 

이미지, txt, json 등 수정이 필요없는 static 파일들의 경우엔 public 폴더에 보관해도 상관없습니다.

예) <img src={process.env.PUBLIC_URL + '/logo192.png'} /> 이런식으로

## 다른파일에서 변수 불러오려면

1. 가져다쓸 파일
export default 변수명; - 얘는 import 할곳에서 작명 맘대로해도됨
여러변수를 불러오려면 export {a, b}
이렇게 여러변수는 중괄호로 덮는데 그안에 있는 변수명 그대로 써야함

2. 불러올 파일
불러올곳엔 import 해줘야함
import 작명 from '경로' 예) './data.js'; - 불러올함수 1개
import {a, b} from './data.js'; - 불러올함수 여러개(변수명 그대로)

## arr object 자료형

arr는 let a = [10, 'kim'] a[0]인댁싱 하면 10 이나옴 (대괄호)

object는 let a = { age : 10, name : 'kim'} a.name kim출력 (중괄호)

## 다른페이지만들때

1. npm install react-router-dom@6  터미널에 입력(라우터설치)

2. main.js 나 index.js 가서 
<BrowserRouter>
<App />
</BrowserRouter>
App 감싸면됨
import { BrowserRouter } from "react-router-dom"; import 필수

Route 는 나눌페이지 -> Routes 로 감싸야함

<Routes>
    <Route path="/" element={<div>메인페이지임</div>} />
    <Route path="/detail" element={<div>상세페이지임</div>} />
</Routes>

Link 는 a태그와 같은 링크버튼역할을 함

<Link to="/">홈</Link>
<Link to="/detail">상세페이지</Link>

## 폴더구조

1. 페이지들은 따로 pages 라는 폴더를 만들면됨 컴포넌트들은 컴포넌트 폴더에

## useNavigate

1. 페이지 이동도와주는 함수 useNavigate()
예) 변수에 담아서 사용 let navigate = useNavigate()

<Nav.Link href="#cart">Cart</Nav.Link> =>
<Nav.Link onClick={()=>{ navigate('/detail') }}>Cart</Nav.Link>

이런식으로 onClick={} 으로 페이지이동

navigate(1) 한페이지이동
navigate(-1) 뒤로한페이지이동(뒤로가기)

## 404 페이지

<Routes> 안에 path 에 * 로 만듬

<Route path="*" element={<div>없는페이지요</div>} />

## Nested Routes

여러 유사한 페이지 필요할 때

<Route path="/about" element={<About />} />
<Route path="/about/member" element={<About />} />
<Route path="/about/location" element={<About />} />


<Route path="/about" element={<About />}>
    <Route path="member" element={<About />} />
    <Route path="location" element={<About />} />
</Route>

Route 태그안에 Route 태그를 넣을 수 있음
위 아래 같은 코드임

## Outlet

<Route path="/about" element={<About />} />
    <Route path="/about/member" element={<div>멤버임</div>} />
    <Route path="/about/location" element={<div>회사위치</div>} />
</Routes>

/about/member 로 들어가면 <About /> <div>멤버임</div> 이 둘다보임

그러기 위해선

function About(){
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>  이런식으로 Outlet 을 해줘야함
    </div>
  )
}

뜻은 About 안에 <Route path="/about/member" element={<div>멤버임</div>} /> 를 넣어준다는것

nested routes의 element 보여주는 곳은 <Outlet>

## 여러개의 상세페이지를 만들기

<Route path="/detail/:id" element={<Detail shoes={shoes}/>} />
path 값에 저런식으로 :작명 하면 어떤식으로든 저 url로 이동 - :URL파라미터

useParams(); 라는 훅은 유저가 URL파라미터에 입력한거 가져오는 함수

detail.jsx 에 let {id} = useParams(); 이값이 ->

App.jsx <Route path="/detail/:id" element={<Detail shoes={shoes}/>} /> :id값이 찍히는것

## styled-components

npm install styled-components 로 설치

예)
let YellowBtn = styled.button`
    background : yellow; => background : ${ props => props.bg };
    color : black;
    padding : 10px;
`
이런 식으로 css 파일 안열어도 만들 수 있음

만약 비슷한 형태의 ui 인데 색만 바꾸고싶다면?
background : ${ props => props.bg }; 이렇게

<YellowBtn bg="blue">버튼</YellowBtn> 넣으면 파란색바탕의 버튼 생성

color : ${ props => props.bg == 'blue' ? 'white' : 'black' }; 이런식으로 간단한 프로그래밍가능

## useEffect

mount - 장착(로드될때)
update - 업데이트될때(재렌더링) - useState 변경될때
unmount - 사라질떄 - 컴포넌트사라질때(페이지이동)

useEffect(()=>{}) mount, update시 코드 실행해주는 useEffect

쓰는이유 
- useEffect 안에있는 코드는 html 렌더링 후에 동작
- 어려운 연산
- 서버에서 데이터 가져오는작업
- 타이머 장착하는거

useEffect(()=>{
        setTimeout(()=>{ setAlert(false) }, 2000);
    }, [count]);

  이런식으로 useEffect 실행조건 넣을 수 있는 []
  count함수가 변경될때만 동작
  컴포넌트 mount시 1회만 실행하고싶다면 -> []
  [] 없으면 mount, update시 실행

  useEffect(()=>{
        setTimeout(()=>{ setAlert(false) }, 2000);
        return()=>{
          clean up function - 이건 useEffect 전에 먼저 동작
        }
    }, []);

    clean up function은 mount시 실행x unmount시 실행ㅇ

## ajax 서버통신

1. 방법 GET/POST

데이터 가져올때 GET
데이터 보낼때 POST

2. 어떤자료(URL) -> 서버만든 사람한테요청

3. AJAX로 GET/POST요청하려면 방법 3개 중 택1 하면 됩니다.

- XMLHttpRequest라는 옛날 문법 쓰기

- fetch() 라는 최신 문법 쓰기

- axios 같은 외부 라이브러리 쓰기 
npm install axios 외부라이브러리 설치
import axios from 'axios'; 해주기

예)
<button onClick={()=>{
  axios.get('https://codingapple1.github.io/shop/data2.json')
  .then((data)=>{ data })  -> 출력해서 보고싶다 .then() 함수
  console.log(data)
}}>버튼</button>

ajax 요청 실패했을때 특정코드를 실행하고프면
.catch(()=>{
  console.log('실패함')
})

## 여러군데에 ajax를 신청해야할 때

Promise.all([ axios.get('/url1'), axios.get('/url2') ])
.then(()=>{

})

## Redux 컴포넌트들이 props 없이 state 공유가능

npm install @reduxjs/toolkit react-redux 설치

src폴더에 store.js 생성

- 코드 셋팅

import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
    reducer: { }
})

state를 담는 통

index.js 나 main.js 에

<Provider></Provider> 이 태그로 감싸기

예)

import { Provider } from 'react-redux';
import store from './store.js'

<StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
</StrictMode>

- 사용법 

import { configureStore, createSlice } from '@reduxjs/toolkit'

createSlice({
    name : 'user',
    initialState : 'kim'
})

export default configureStore({
    reducer: { 
        user : user.reducer
    }
})

- Redex store 의 starte 꺼내는법

useSelector((state)=>{ return state })
