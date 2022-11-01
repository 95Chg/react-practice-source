import { useEffect, useState } from 'react';
import CartTable from '../Components/cartTable';


function Cart() {
    const [cartFadeStatus, setCartFadeStatus] = useState('');
    useEffect(() => {
        setCartFadeStatus('fade-end')
        return () => setCartFadeStatus('')
    }, [])

    return (
        <div className={`fade-start ${cartFadeStatus}`}>
            <CartTable>
            </CartTable>
        </div>
    )
}

export default Cart