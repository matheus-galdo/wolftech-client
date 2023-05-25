import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingCart, MdAccountCircle, MdKeyboardArrowDown } from 'react-icons/md';
import { AuthContext } from '../context/AuthContext';
import './headerButtons.scss';

const dropdownTimeMiliseconds = 300;

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

        {authContext?.user && <>
            <div className="btn-nav material-icons user-btn">
                <MdKeyboardArrowDown className="dropdown-icon" />
                {authContext?.user?.name}
                <MdAccountCircle className="btn-icon" />

                {/*TODO: componentizar dropdown menu */}
                <div className="user-dropdown-menu dropdown-menu">
                    <ul>
                        <li>Minha Conta</li>
                        <li>Sair</li>
                    </ul>
                </div>
            </div>
        </>}

        <button className="btn-nav material-icons cart-btn">
            <MdShoppingCart className="btn-icon" />
            <span className="carrinho-counter">
                10
            </span>
        </button>
    </div>;
}