import { useState } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import './App.css'
import bg from './img/bg.png';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './pages/detail.jsx';
import axios from 'axios';

function App() {

  let [shoes, setShoes] = useState(data)
  let navigate = useNavigate();

  return (
    <div className='App'>

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#ShoeShop">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* <Link className='btn-link' to="/">홈</Link>
      <Link className='btn-link' to="/detail">상세페이지</Link> */}

      <Routes>
        <Route path="/" element={
          <>
            <div className='main-bg' style={{ backgroundImage : 'url('+ bg +')' }}></div>

            <div className="container">
              <div className="row">

                {
                  shoes.map(function(a, i){
                    return(
                      <Card shoes={shoes} i={i} key={i} />      
                    )
                  })
                }

                {/* <Card shoes={shoes} i={0} />
                <Card shoes={shoes} i={1} />
                <Card shoes={shoes} i={2} /> */}
                {/* <div className="col-md-4">
                  <img src='https://codingapple1.github.io/shop/shoes2.jpg' width="80%"/>
                  <h4>{shoes[1].title}</h4>
                  <p>{shoes[1].price}</p>
                </div>
                <div className="col-md-4">
                  <img src='https://codingapple1.github.io/shop/shoes3.jpg' width="80%"/>
                  <h4>{shoes[2].title}</h4>
                  <p>{shoes[2].price}</p>
                </div> */}
              </div>
            </div>
            <button onClick={()=>{
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((결과)=>{ 
              console.log(결과.data)
              let copy = [...shoes, ...결과.data];
              setShoes(copy);
              })
              .catch(()=>{
                console.log('실패함ㅅㄱ')
              })

              axios.post('/url', {name : 'kim'});

              Promise.all([ axios.get('/url1'), axios.get('/url2') ])
              .then(()=>{

              })

            }}>더보기</button>
          </>
        } />
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>} />


        {/* <Route path="*" element={<div>없는페이지요</div>} /> */}

        <Route path="/about" element={<About />}>
          <Route path="/about/member" element={<div>멤버임</div>} />
          <Route path="/about/location" element={<div>회사위치</div>} />
        </Route>

        <Route path="/event" element={<Event />}>
          <Route path="/event/one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="/event/two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        
      </Routes>
      
    </div>
  )

}
function About(){
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Card(props){
    return (
      <div className="col-md-4">
        <img src={'https://codingapple1.github.io/shop/shoes' +(props.i + 1)+ '.jpg'} width="80%"/>
        <h4>{props.shoes[props.i].title}</h4>
        <p>{props.shoes[props.i].price}</p>
      </div>
    )
  }



export default App
