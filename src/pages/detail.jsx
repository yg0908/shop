import { use } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Detail(props) {

    let {id} = useParams();
    let 찾은상품 = props.shoes.find((item) => {
        return item.id == id;
    });
    let [count, setCount] = useState(0)
    let [alert2, setAlert] = useState(true)
    let [num, setNum] = useState('')

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
    

    return (
        <div className="container">
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
        </div>
    )
}

export default Detail;