import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function NotExistPage() {
    const navigate = useNavigate();
    return (
        <Container>
            <h1 className='not-exist-detail'>해당 페이지가 존재하지 않습니다.</h1>
            <button className='btn' onClick={() => {
                navigate(-1);
            }}>뒤로가기</button>
        </Container>
    )
}

export default NotExistPage;