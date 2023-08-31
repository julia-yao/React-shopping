import { Table, Image,Container, Row } from 'react-bootstrap';

const Cart = ({ cartdeatil,cart,handleDelete }) => {
    return ( 
        <>
        <Container>
            <h2>購物車</h2>
            <Row>
                <Table>
                    <thead>
                        <tr className="text-center d-none d-md-table-row">
                            <th>商品</th>
                            <th>商品名稱</th>
                            <th>數量</th>
                            <th>金額</th>
                            <th>總額</th>
                            <th>刪除</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(cart => (
                        <tr className="align-middle text-center" to={cart.id.toString()} key={cart.id}>
                            <td><Image variant="top" src={cart.url} style={{ width:'12rem' }}/></td>
                            <td>{cart.name}</td>
                            <td>0</td>
                            <td>{cart.price} 元</td>
                            <td>{cart.price} 元</td>
                            <td>
                                <button onClick={()=>handleDelete(cart.id)} className="btn mx-auto">
                                <i className="bi bi-trash3-fill fs-4"></i> 
                                </button>
                            </td>
                        </tr>
                        ))} 
                    </tbody>
                </Table>
            </Row>    
        </Container>
        </>
     );
}
 
export default Cart;