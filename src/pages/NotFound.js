import { Link } from "react-router-dom";
import { Container, Row, } from 'react-bootstrap';


export default function NotFound() {
  return (
    <Container className="NotFound">
        <Row className="my-5">
    
            <h2>Sorry</h2>
            <p>您造訪的頁面不存在。</p>

            <p>回首頁<Link to="/">Sara's Lunch</Link>...</p>
        
        </Row>
    </Container>
  )
}
