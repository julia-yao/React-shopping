import {Table} from 'react-bootstrap';

export default function OrderInfo({info}) {
  
  return (
    <div className="OrderInfo">
            <div className="" to={info.id} key={info.id}>
              <h5>寄件資訊</h5>
              <Table>
                  <tbody>
                    <tr className="">
                      <th className="fw-bold border-0">姓名</th>
                      <td className="text-primary border-0">{info.name}</td>
                    </tr>
                    <tr className="">
                      <th className="fw-bold border-0">電話</th>
                      <td className="text-primary border-0">{info.tel}</td>
                    </tr>
                    <tr className="">
                      <th className="fw-bold border-0">地址</th>
                      <td className="text-primary border-0">{info.address}</td>
                    </tr>
                    <tr className="">
                      <th className="fw-bold border-0">付款方式</th>
                      <td className="text-primary border-0">{info.pay}</td>
                    </tr>
                    <tr className="">
                      <th className="fw-bold border-0">留言</th>
                      <td className="text-primary border-0">{info.note}</td>
                    </tr>
                  </tbody>
              </Table>
            </div>
    </div>
  )
}
