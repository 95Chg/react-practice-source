import { Card, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ViewedPage() {
    const navigate = useNavigate();
    const productList = useSelector((state) => state.shoesSlice);
    const viewedShoesList = useSelector((state) => state.viewedShoesSlice);
    const viewedShoes = [];

    if (viewedShoesList.length > 0) {
        viewedShoesList.forEach((num) => {
            const target = productList.find((product) => {
                return product.id === num;
            })
            viewedShoes.push(target);
        })
        return (
            <Card className="viewed-position">
                <Card.Header>View</Card.Header>
                <ListGroup variant="flush">
                    {
                        viewedShoes.map((data, idx) => {
                            const { id } = data;
                            return (
                                <ListGroup.Item className="cursor" key={idx}
                                    onClick={() => {
                                        navigate(`/detail/${id}`);
                                    }}><img src={`https://codingapple1.github.io/shop/shoes${id + 1}.jpg`} alt={`shoes${id + 1}`} width="100%" draggable="false" />
                                </ListGroup.Item>
                            )
                        })
                    }
                </ListGroup>
            </Card>
        )
    } else {
        return null
    }
}
export default ViewedPage;