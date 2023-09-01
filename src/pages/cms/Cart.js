import { Table, Image, Container, Row } from 'react-bootstrap';

const Cart = ({ data, handleDelete, decrement, increment}) => {
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
                        {data.map(data => (
                        <tr className="align-middle text-center" to={data.id.toString()} key={data.id}>
                            <td><Image variant="top" src={data.url} style={{ width:'12rem' }}/></td>
                            <td>{data.name}</td>
                            <td>
                                <button onClick={()=>decrement()}>-</button>
                                 {data.quantity} 
                                <button onClick={()=>increment()}>+</button>
                            </td>
                            <td>{data.price} 元</td>
                            <td>{data.price} 元</td>
                            <td>
                                <button onClick={()=>handleDelete(data.id)} className="btn mx-auto">
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