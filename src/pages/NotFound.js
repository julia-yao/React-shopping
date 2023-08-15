import { Link } from "react-router-dom";
import { Container, Row, } from 'react-bootstrap';


export default function NotFound() {
  return (
    <Container className="my-5">
        <Row className="">
    
            <h2>您造訪的頁面不存在！</h2>
            <p>您好，目前的頁面並不存在，可以點擊下方回到首頁。</p>

            <p>前往首頁<Link to="/">Sara's Lunch</Link>。</p>
        
        </Row>
    </Container>
  )
}
