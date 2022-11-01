import { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Alert, InputGroup, Form, Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../Store/cartSlice';

function DetailShoes(props) {
    const dispatch = useDispatch();
    const targetId = parseInt(props.idParams);
    const shoesData = props.shoesList;
    const targetShoesData = shoesData.find((el) => el.id === targetId);
    const { id, title, content, price } = targetShoesData;
    const wonPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원';

    const [alertShow, setAlertShow] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const [alertCart, setAlertCart] = useState(false);
    const [tap, setTap] = useState(0);
    const [detailContentsFade, setDetailContentsFade] = useState('');

    useEffect(() => { setAlertShow(isNaN(inputValue)) }, [inputValue]);

    useEffect(() => {
        setTimeout(() => {
            setAlertCart(false);
        }, 2000)
    }, [alertCart]);
    useEffect(() => {
        setTimeout(() => {
            setDetailContentsFade('fade-end');
        }, 10)
        return () => {
            setDetailContentsFade('');
        }
    }, [tap])

    return (
        <>
            <Container>
                <Row>
                    <Col md={6}>
                        <img src={`https://codingapple1.github.io/shop/shoes${id + 1}.jpg`} alt={`shoes${id + 1}`} width="100%" />
                    </Col>
                    <Col md={6}>
                        <h4 className="pt-5" data-card_id={id}>{title}</h4>
                        <p>{content}</p>
                        <p>{wonPrice}</p>
                        <InputGroup className="mb-3">
                            <Form.Control placeholder="구매 수량 입력" className='detail-input'
                                onChange={(e) => {
                                    const quantity = e.target.value;
                                    setInputValue(quantity);
                                }}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter' && !isNaN(inputValue) && inputValue !== '' && inputValue > 0) {
                                        const payload = { id: parseInt(id), price: price, name: title, count: parseInt(inputValue) };
                                        setAlertCart(true);
                                        dispatch(updateProduct(payload))
                                    }
                                }} />
                        </InputGroup>
                        {
                            alertCart
                                ?
                                <Alert key='primary' variant='primary'>
                                    카트에 상품이 담겼습니다.
                                </Alert>
                                : null
                        }
                        {
                            alertShow
                                ? <Alert key='warning' variant='warning'>
                                    숫자만 입력하세요.
                                </Alert>
                                : null
                        }
                        <Button variant="warning" className='mb-3' data-card_id={id} onClick={(e) => {
                            if (!isNaN(inputValue) && inputValue !== '' && inputValue > 0) {
                                const payload = { id: parseInt(id), price: price, name: title, count: parseInt(inputValue) };
                                setAlertCart(true);
                                dispatch(updateProduct(payload))
                            }
                        }}>카트에 담기</Button>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Nav variant="tabs" defaultActiveKey="link-0">
                    <Nav.Item>
                        <Nav.Link eventKey="link-0" className='black' onClick={() => {
                            setTap(0);
                        }}>상세정보</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" className='black' onClick={() => {
                            setTap(1);
                        }}>리뷰</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" className='black' onClick={() => {
                            setTap(2);
                        }}>QnA</Nav.Link>
                    </Nav.Item>
                </Nav>
                <div className={`fade-start ${detailContentsFade}`}>
                    {[
                        <h4 className='shoes-detail-content'>쓸 내용이 없음 ㅎㅎ</h4>,
                        <h4 className='shoes-detail-content'>쓸 내용이 없음 ㅋㅋ</h4>,
                        <h4 className='shoes-detail-content'>쓸 내용이 없음 ㅈㅅ</h4>
                    ][tap]}
                </div>
            </Container>
        </>
    )
}
export default DetailShoes;