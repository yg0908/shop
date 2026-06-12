import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { changeName, increase } from "../store/userSlice.js"
import { addCount } from "../store.js"

function Cart(){

    let state = useSelector((state)=> state )
    let dispatch = useDispatch()

    return(
        <div>

            {state.user.name} {state.user.age}의 장바구니
            <button onClick={()=>{
                dispatch(increase(100))
            }}>버튼</button>

            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((a, i)=>
                            <tr key={a.id}>
                                <td>{a.id}</td>
                                <td>{a.name}</td>
                                <td>{a.count}</td>
                                <td><button onClick={()=>{
                                    dispatch(addCount(a.id))
                                }}>+</button></td>
                            </tr>
                        )
                    }
                    
                </tbody>
            </Table>
        </div>
    )
}

export default Cart