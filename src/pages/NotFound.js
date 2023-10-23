import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';


export default function NotFound() {
  return (
    <Container className="NotFound d-flex justify-content-center">
        <div className="py-5">
            <h2>Sorry</h2>
            <p>您造訪的頁面不存在。</p>
            <p>回首頁<Link to="/">Sara's Lunch</Link>...</p>
        </div>
    </Container>
  )
}
