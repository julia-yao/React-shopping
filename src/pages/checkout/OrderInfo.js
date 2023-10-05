
export default function OrderInfo({info}) {

  return (
    <div className="OrderInfo">
        {info.map(x=>(
            <div className="align-middle" to={x.id.toString()} key={x.id}>
                <h5>寄件資訊</h5>
                <p className="text-primary">姓名<span className="mx-2">{x.name}</span></p>
                <p className="text-primary">電話<span className="mx-2">{x.tel}</span></p>
                <p className="text-primary">地址<span className="mx-2">{x.address}</span></p>
                <p className="text-primary">付款方式<span className="mx-2">{x.pay}</span></p>
                <p className="text-primary">留言<span className="mx-2">{x.note}</span></p>
            </div>
        ))}
    </div>
  )
}
