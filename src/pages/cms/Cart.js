import { Table, Container, Row } from 'react-bootstrap';
import CartItem from './CartItem';

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
                        {data.map(x => (
                            <CartItem data={x} handleDelete={handleDelete} key={x.id}/>
                        ))}
                    </tbody>
                </Table>
            </Row>    
        </Container>
        </>
     );
}
 
export default Cart;