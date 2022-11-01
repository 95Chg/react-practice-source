import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DetailShoes from '../Components/detailShoes';
import NotExistPage from './notExistPage';

function Detail() {
    const { id: idParams } = useParams();
    const shoesList = useSelector((state) => state.shoesSlice);
    const [detailFadeStatus, setDetailFadeStatus] = useState('');

    useEffect(() => {
        setDetailFadeStatus('fade-end')
        return () => setDetailFadeStatus('')
    }, [])

    return (!isNaN(parseInt(idParams)) && parseInt(idParams) < shoesList.length
        ?
        <div className={`fade-start ${detailFadeStatus}`}>
            <DetailShoes idParams={idParams} shoesList={shoesList}></DetailShoes>
        </div>
        :
        <NotExistPage></NotExistPage >
    )
}

export default Detail