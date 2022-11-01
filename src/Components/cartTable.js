import { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
// import { Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, increaseQuantity, decreaseQuantity } from '../Store/cartSlice';
// import { updateQuantity } from '../Store/cartSlice';
function CartTable() {
    const cartList = useSelector((state) => state.cartSlice);
    const dispatch = useDispatch();
    const [photoNum, setPhotoNum] = useState(0);
    const [photoShow, setPhotoShow] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    // const [alertShow, setAlertShow] = useState(false);
    // const [inputValue, setInputValue] = useState([]);

    useEffect(() => {
        let tempPrice = 0;
        cartList.forEach((product) => {
            const elSum = (product.price * product.count)
            tempPrice += elSum;
        })
        setTotalPrice(tempPrice);
    }, [cartList])

    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>가격</th>
                        <th>수량</th>
                        <th>수량변경</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartList.map((product, idx) => {
                            const { id, name, price, count } = product;
                            const wonPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원';
                            return (
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td className='cursor' onClick={() => {
                                        setPhotoNum(id);
                                        setPhotoShow(true);
                                    }}>{name}</td>
                                    <td>{wonPrice}</td>
                                    <td>
                                        {count}
                                        {/* <input type="number" defaultValue={inputValue[idx]} className="cart-input"
                                            onChange={(e) => {
                                                const updateCount = parseInt(e.target.value);
                                                if (updateCount > 0 && !isNaN(updateCount)) {
                                                    const payload = [id, updateCount];
                                                    dispatch(updateQuantity(payload))
                                                    setAlertShow(false);
                                                } else {
                                                    setAlertShow(true);
                                                }
                                            }}>
                                        </input> */}
                                    </td>
                                    <td>
                                        <button className='btn' onClick={() => {
                                            const targetNumber = parseInt(id);
                                            dispatch(increaseQuantity(targetNumber));
                                        }}>+
                                        </button>
                                        <button className='btn' onClick={(e) => {
                                            const targetNumber = parseInt(id);
                                            dispatch(decreaseQuantity(targetNumber));
                                        }}>-
                                        </button>
                                    </td>
                                    <td><button className='btn' onClick={(e) => {
                                        setPhotoShow(false);
                                        const targetNumber = parseInt(id);
                                        dispatch(deleteProduct(targetNumber));
                                    }}>삭제
                                    </button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <Container>
                {/* {
                    alertShow
                        ? <Alert key='warning' variant='warning'>
                            숫자를 입력하거나 1이상 숫자를 입력하세요.
                        </Alert>
                        : null
                } */}
            </Container>
            {
                cartList.length
                    ? <p className='total-price'>총 금액 : {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
                    : null
            }
            <Container>
                {
                    photoShow === true
                        ? <img src={`https://codingapple1.github.io/shop/shoes${photoNum + 1}.jpg`} alt={`shoes${photoNum + 1}`} width="80%" draggable="false" />
                        : (cartList.length
                            ? <p>상품명을 누르면 이미지를 볼 수 있습니다.</p>
                            : <p>장바구니에 상품이 없습니다.</p>
                        )
                }
            </Container>
        </>

    )
}


export default CartTable;