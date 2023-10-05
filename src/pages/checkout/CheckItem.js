import { Table, Image } from 'react-bootstrap';

export default function CheckItem({data}) {

    let subTotal = 0
    for(let i=0;i<data.length;i++){
        subTotal = subTotal+data[i].quantity*data[i].price;
    }
    let discount= subTotal*(0.1);
    const total = subTotal-discount; 

  return (
    <div className='CheckItem'>
        <h5>訂單清單</h5>
        <Table className='table-shadow'>
            <thead>
                <tr className="text-center text-nowrap">
                    <th className="d-none d-md-block">商品</th>
                    <th>商品名稱</th>
                    <th>數量</th>
                    <th>金額</th>
                    <th>總額</th>
                </tr>
            </thead>
            <tbody>
                {data.map(meal=>(
                    <tr className="align-middle text-center" to={meal.id.toString()} key={meal.id}>
                        <td className="d-none d-md-block">
                            <Image variant="top" src={meal.url} style={{ width:'6rem',height:'6rem',objectFit:"cover" }}/>
                        </td>
                        <td>{meal.name}</td>
                        <td>{meal.quantity}</td>
                        <td>{meal.price} 元</td>
                        <td>{meal.quantity*meal.price} 元</td>
                    </tr>
                ))}
            </tbody>
        </Table>
        <div className="text-primary">
            <ul className="mb-0">
                <li className="m-1 d-flex justify-content-end align-items-center" >訂單金額<span className="ms-2">{subTotal}</span></li>
                <li className="m-1 d-flex justify-content-end align-items-center">折扣<span className="ms-2"> －{discount}</span></li> 
                <li className="m-1 d-flex justify-content-end align-items-center">訂單總額<strong className="fs-5 ms-2">{total}</strong></li>
            </ul>
        </div>
    </div>
  )
}
