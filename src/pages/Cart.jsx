import { Table } from "react-bootstrap"
import { useSelector } from "react-redux"

function Cart(){

    let a = useSelector((state)=>{ return state })
    console.log(a.cart)

    return(
        <div>
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
                    <tr>
                        <td>1</td>
                        <td>{a.cart[0].name}</td>
                        <td>{a.cart[0].count}</td>
                        <td>안녕</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>{a.cart[1].name}</td>
                        <td>{a.cart[1].count}</td>
                        <td>안녕</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Cart