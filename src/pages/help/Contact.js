import { Form,Button } from 'react-bootstrap';

export default function Contact() {
  return (
    <div className="Contact my-5 mx-auto bg-light p-3 col-md-7">
       <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>姓名</Form.Label>
                <Form.Control type="name" placeholder="請輸入姓名" name="姓名"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>電話</Form.Label>
                <Form.Control type="tel" placeholder="請輸入電話" name="電話"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="請輸入電子信箱" name="電子信箱"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>留言</Form.Label>
                <Form.Control as="textarea" rows={5} cols={5}/>
            </Form.Group>
            <Button type="submit">送出</Button>
        </Form>
    </div>
  )
}
