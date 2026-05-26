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