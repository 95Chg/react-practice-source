import { Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateViewedShoes } from '../Store/viewedShoesSlice';

function CardShoes(props) {
    const shoesDataList = props.shoesData;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        shoesDataList.map((shoes, idx) => {
            const { id, title, content, price } = shoes;
            const commaPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return (
                <Col md={4} data-shoes_id={id} key={idx} className="cursor" onClick={() => {
                    dispatch(updateViewedShoes(id))
                    navigate(`/detail/${id}`);
                }}>
                    <img src={`https://codingapple1.github.io/shop/shoes${idx + 1}.jpg`} alt={`shoes${idx + 1}`} width="100%" draggable="false" className='shoes-image' />
                    <h4>{title}</h4>
                    <p>{content}</p>
                    <p>{commaPrice}원</p>
                </Col >
            )
        })
    )
}

export default CardShoes;