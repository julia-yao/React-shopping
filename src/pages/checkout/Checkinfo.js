import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function CheckInfo({ setIsPending }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        tel: "",
        address: "",
        note: "",
        pay: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const checkout = { ...formData };
        
        // Debugging: Check the values of checkout
        console.log("Form Data on Submit:", checkout);

        setIsPending(true);

        try {
            console.log("Checkout sent successfully");
            navigate("/order",{state:{orderInfo:checkout}});
        } catch (error) {
            console.error("Error sending checkout:", error);
        } finally {
            setIsPending(false);
        }
    };

    let obj1 = {a:1,b:2};
    let obj2 = {...obj1,b:3};
    console.log(obj2);

    return (
        <div className="Checkinfo mx-auto">
            <h5>訂單資訊</h5>
            <Form onSubmit={handleSubmit} id="form1">
                <Form.Group className="mb-2" controlId="formName">
                    <Form.Label>姓名</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="請輸入姓名" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                    />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formTel">
                    <Form.Label>電話</Form.Label>
                    <Form.Control 
                        type="tel" 
                        placeholder="請輸入電話" 
                        name="tel" 
                        value={formData.tel} 
                        onChange={handleChange} 
                    />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formAddress">
                    <Form.Label>地址</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="請輸入地址" 
                        name="address" 
                        value={formData.address} 
                        onChange={handleChange} 
                    />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formPay">
                    <Form.Label>付款方式</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="請輸入現金或信用卡" 
                        name="pay" 
                        value={formData.pay} 
                        onChange={handleChange} 
                    />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formNote">
                    <Form.Label>留言</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={1} 
                        name="note" 
                        value={formData.note} 
                        onChange={handleChange} 
                    />
                </Form.Group>
            </Form>
        </div>
    );
}
