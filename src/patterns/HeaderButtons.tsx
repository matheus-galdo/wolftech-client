import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingCart, MdAccountCircle, } from 'react-icons/md';
import { AuthContext } from '../context/AuthContext';
import './headerButtons.scss';

export default function HeaderButtons() {
    const authContext = useContext(AuthContext);


    return <div className="btn-nav-container">
        {!authContext?.user && <>
            <button className="btn-nav material-icons">
                <p>Crie sua conta</p>
            </button>

            <Link to={authContext?.userIsLoggedIn ? '' : "/sign-in"}>
                <button className="btn-nav material-icons">
                    <p>Entrar</p>
                </button>
            </Link>

        </>}

        {authContext?.user && <button className="btn-nav material-icons">
            {authContext?.user?.name}
            <MdAccountCircle />
        </button>}

        <button className="btn-nav material-icons cart-btn">
            <MdShoppingCart />
            <span className="carrinho-counter">
                10
            </span>
        </button>
    </div>;
}