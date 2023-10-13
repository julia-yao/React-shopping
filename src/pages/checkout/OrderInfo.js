import {Table} from 'react-bootstrap';

export default function OrderInfo({info}) {

  return (
    <div className="OrderInfo">
        {info.map(x=>(
            <div className="" to={x.id.toString()} key={x.id}>
              <h5>寄件資訊</h5>
              <Table>
                  <tbody>
                    <tr className="">
                      <th className="fw-bold border-0">姓名</th>
                      <td className="text-primary border-0">{x.name}</td>
                    </tr>
                    <tr className="">
                      <th className="fw-bold border-0">電話</th>
                      <td className="text-primary border-0">{x.tel}</td>
                    </tr>
                    <tr className="">
                      <th className="fw-bold border-0">地址</th>
                      <td className="text-primary border-0">{x.address}</td>
                    </tr>
                    <tr className="">
                      <th className="fw-bold border-0">付款方式</th>
                      <td className="text-primary border-0">{x.pay}</td>
                    </tr>
                    <tr className="">
                      <th className="fw-bold border-0">留言</th>
                      <td className="text-primary border-0">{x.note}</td>
                    </tr>
                  </tbody>
              </Table>
            </div>
        ))}
    </div>
  )
}
