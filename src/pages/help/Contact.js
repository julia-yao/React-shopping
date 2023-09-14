import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function Contact() {

    
    const [ name, setName ] = useState("");
    function nameChange(e){
        setName(e.target.value)
    }

    const [ tel, setTel ] = useState("");
    function telChange(e){
        setTel(e.target.value)
    }
    
    const [ mail, setMail ] = useState("");
    function mailChange(e){
        setMail(e.target.value)
    }

    const [ note, setNote ] = useState("");
    function noteChange(e){
        setNote(e.target.value)
    }

    const [ isPending,setIsPending ] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const guest = { name,tel,mail,note };

        setIsPending('true');

        fetch('http://localhost:8000/guest', {
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(guest)
        }).then(() =>{
            console.log("guest contact added")
            setIsPending(false)
            
        });
        setTimeout(() => {
            navigate('/');
          }, "2000");
    }   
    


  return (
    <div className="Contact my-5 mx-auto bg-light p-3 col-md-7">
       <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>姓名</Form.Label>
                <Form.Control type="name" placeholder="請輸入姓名" name="姓名" value={name} onChange={nameChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>電話</Form.Label>
                <Form.Control type="tel" placeholder="請輸入電話" name="電話" value={tel} onChange={telChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                <Form.Label>電子信箱</Form.Label>
                <Form.Control type="email" placeholder="請輸入電子信箱" name="電子信箱" value={mail} onChange={mailChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>留言</Form.Label>
                <Form.Control as="textarea" rows={5} cols={5} name="message" value={note} onChange={noteChange}/>
            </Form.Group>
            {!isPending && <Button type="submit">送出</Button>}
            {isPending && <Button disabled type="submit">正在送出資料...</Button>}
        </Form>
    </div>

    
  )
}

