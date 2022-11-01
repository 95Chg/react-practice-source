import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import CardShoes from '../Components/cardShoes';
import { useDispatch, useSelector } from 'react-redux';
import { updateShoesList } from '../Store/shoesSlice';
import ViewedPage from '../Components/viewedPage';
import { addCardCount } from '../Store/cardCountSlice';

function Card() {
    const shoesData = useSelector((state) => state.shoesSlice);
    let cardCount = useSelector((state) => state.cardCountSlice);
    const dispatch = useDispatch();
    const [moreBtnCnt, setMoreBtnCnt] = useState(1);
    const [loadingStatus, setLoadingStatus] = useState(false);

    const getAndUpdateData = (number) => {
        axios.get(`https://codingapple1.github.io/shop/data${number}.json`)
            .then((res) => {
                const addShoesData = res.data;
                const forUpdateShoesData = shoesData;
                const updatedData = forUpdateShoesData.concat(addShoesData);
                dispatch(updateShoesList(updatedData));
            })
            .catch(() => {
                setLoadingStatus(false);
                console.log('서버에서 데이터를 가져오는 것에 실패했습니다.')
            })
    };

    useEffect(() => {
        setLoadingStatus(false);
    }, [moreBtnCnt])

    return (
        <>
            <div className='main-bg'>
                <ViewedPage></ViewedPage>
            </div>
            <Container>
                <Row>
                    <CardShoes shoesData={shoesData}></CardShoes>
                    {
                        loadingStatus === true
                            ? <p>Loading...</p>
                            : null
                    }
                    {
                        cardCount <= 3
                            ?
                            <button className="btn btn-more" onClick={() => {
                                const tempCard = ++cardCount;
                                dispatch(addCardCount())
                                setLoadingStatus(true);
                                setTimeout(() => {
                                    getAndUpdateData(tempCard);
                                }, 500);
                                setTimeout(() => {
                                    setMoreBtnCnt(tempCard);
                                }, 450);
                            }
                            }>More
                            </button>
                            : <p>더 이상의 상품은 없습니다.</p>
                    }
                </Row>
            </Container>
        </>
    )
}

export default Card;