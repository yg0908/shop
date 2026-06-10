import { use, useContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";

import { Context1 } from "../App";


function Detail(props) {

    let {id} = useParams();
    let 찾은상품 = props.shoes.find((item) => {
        return item.id == id;
    });
    let [count, setCount] = useState(0)
    let [alert2, setAlert] = useState(true)
    let [num, setNum] = useState('')
    let [탭, 탭변경] = useState(0)
    let [fade2, setFade2] = useState('')

    useEffect(()=>{
        setTimeout(()=>{ setAlert(false) }, 2000);
        return()=>{
        }
    }, []);

    useEffect(()=>{
        if(num !== ''){
            if(isNaN(num)){
                alert('그러지마세요')
            }
        }
    }, [num]);

    // useEffect(()=>{
    //     setTimeout(()=>{setFade2('end')}, 100)
        
    //     return ()=>{
    //         setFade2('')
    //     }
    // })
    

    return (
        <div className={"container"}>
            <input className="form-control" type="text" value={num} onChange={(e)=>{setNum(e.target.value)}} />
            
            {
                alert2==true ? 
                <div className="alert alert-warning">
                    2초이내 구매 시 할인
                </div>
                : null
            }
            {count}
            <button onClick={()=>{ setCount(count+1) }}>버튼</button>
            <div className="row">
                <div className="col-md-6">
                    <img src={'https://codingapple1.github.io/shop/shoes' +(찾은상품.id + 1)+ '.jpg'} width='100%' />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{찾은상품.title}</h4>
                    <p>{찾은상품.content}</p>
                    <p>{찾은상품.price}</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>

            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={ ()=>{ 탭변경(0)} } eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={ ()=>{ 탭변경(1)} } eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={ ()=>{ 탭변경(2)} } eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent 탭={탭}/>
        </div>
    )
}

function TabContent({탭}){
    // if(props.탭 == 0){
    //     return <div>내용0</div>
    // }
    // if(props.탭 == 1){
    //     return <div>내용1</div>
    // }
    // if(props.탭 == 2){
    //     return <div>내용2</div>
    // }

    let [fade, setFade] = useState('')
    useEffect(()=>{
        setTimeout(()=>{setFade('end')}, 100)
        
        return ()=>{
            setFade('')
        }
    }, [탭])

    return (<div className={'start ' + fade}>
        { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭] }
    </div>)
}

export default Detail;