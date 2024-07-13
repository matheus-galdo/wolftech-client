import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdShoppingCart, MdAccountCircle, MdKeyboardArrowDown } from 'react-icons/md';
import { AuthContext } from '../context/AuthContext';
import './headerButtons.scss';
import { logOut } from '../services/authService';
import { CartContext } from '../context/CartContext';

export default function HeaderButtons() {
    const authContext = useContext(AuthContext);
    const cartContext = useContext(CartContext);
    const navigate = useNavigate();

    function logout() {
        logOut().then();
        authContext?.logout();
        navigate("/");
    }

    return <div className="btn-nav-container">
        {!authContext?.user && <>
            <Link to={authContext?.userIsLoggedIn ? '' : "/sign-up"}>
                <button className="btn-nav material-icons">
                    <p>Crie sua conta</p>
                </button>
            </Link>

            <Link to={authContext?.userIsLoggedIn ? '' : "/sign-in"}>
                <button className="btn-nav material-icons">
                    <p>Entrar</p>
                </button>
            </Link>
        </>}

        {authContext?.user && <div className="btn-nav material-icons user-btn">
            <MdKeyboardArrowDown className="dropdown-icon" />
            {authContext?.user?.name}
            <MdAccountCircle className="btn-icon" />

            {/*TODO: componentizar dropdown menu */}
            <div className="user-dropdown-menu dropdown-menu">
                <ul>
                    <li>Minha Conta</li>
                    <li onClick={logout}>Sair</li>
                </ul>
            </div>
        </div>}

        {/* TODO: componentizar o botão do carrinho */}
        <Link to={authContext?.userIsLoggedIn ? '/carrinho' : "/sign-in"}>
            <button className="btn-nav material-icons cart-btn">
                <MdShoppingCart className="btn-icon" />
                <span className="carrinho-counter">
                    {cartContext?.numberOfItens}
                </span>
            </button>
        </Link>
    </div>;
}