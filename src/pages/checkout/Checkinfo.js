import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Checkinfo(setIsPending) {

    const [ name, setName ] = useState("");
    function nameChange(e){
        setName(e.target.value)
    }

    const [ tel, setTel ] = useState("");
    function telChange(e){
        setTel(e.target.value)
    }
    
    const [ address, setAddress ] = useState("");
    function addressChange(e){
        setAddress(e.target.value)
    }

    const [ note, setNote ] = useState("");
    function noteChange(e){
        setNote(e.target.value)
    }
    const [ pay, setPay ] = useState("");
    function payChange(e){
        setPay(e.target.value)
    }

    

    const handleSubmit = (e)=>{
        e.preventDefault();
        const checkout = { name,tel,address,pay,note };

        setIsPending('true');

        fetch('http://localhost:8000/checkout', {
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(checkout)
        }).then(() =>{
            console.log("send checkout")
            setIsPending(false)
        })
    }   
    


  return (
    <div className="Checkinfo mx-auto">
        <h5>訂單資訊</h5>
       <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                <Form.Label>姓名</Form.Label>
                <Form.Control type="name" placeholder="請輸入姓名" name="姓名" value={name} onChange={nameChange}/>
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput2">
                <Form.Label>電話</Form.Label>
                <Form.Control type="tel" placeholder="請輸入電話" name="電話" value={tel} onChange={telChange}/>
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput3">
                <Form.Label>地址</Form.Label>
                <Form.Control type="address" placeholder="請輸入地址" name="地址" value={address} onChange={addressChange}/>
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput3">
                <Form.Label>付款方式</Form.Label>
                <Form.Control type="pay" placeholder="請輸入現金或信用卡" name="pay" value={pay} onChange={payChange}/>
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                <Form.Label>留言</Form.Label>
                <Form.Control as="textarea" rows={1} cols={1} name="message" value={note} onChange={noteChange}/>
            </Form.Group>
        </Form>
    </div>

    
  )
}
