import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AxiosError } from "axios";
import { SecondaryButton, Button } from "../../components/Button/Button";
import { SignInCredentials } from "../../types/credentials";
import { signIn } from "../../services/authService";
import "./SignIn.scss";
import { AuthContext } from "../../context/AuthContext";
import { useAlreadyLoggedIn } from "../../hooks/useAlreadyLoggedIn";


export default function SignIn() {
    const [userCredentials, setUserCredentials] = useState<SignInCredentials>({ email: '', password: '' });
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();
    useAlreadyLoggedIn();

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        const credentials: SignInCredentials = { ...userCredentials };

        if (!userCredentials.email) {
            return toast.error('O campo o e-mail é obrigatório');
        }

        if (!userCredentials.password) {
            return toast.error('O campo o senha é obrigatório');
        }

        signIn(credentials)
            .then(response => {
                authContext?.storeCredentials(response.data);
                navigate('/');
            }).catch((error: AxiosError) => {
                toast.error(error.response?.status === 401 ? 'Usuário ou senha incorretos' : 'Ocorreu um erro inesperado');
            });
    }

    function handleFormChange(event: React.FormEvent<HTMLInputElement>) {
        const { name, value } = event.currentTarget;

        const newUserCredentials: SignInCredentials = {
            ...userCredentials,
            [name]: value,
        };

        setUserCredentials(newUserCredentials);
    }

    return <div className="form-container">
        <form onSubmit={handleSubmit}>
            <div className="inputs-container">
                <h1>Acessar conta</h1>

                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" onChange={handleFormChange} />

                <label htmlFor="password">Senha</label>
                <input type="password" name="password" onChange={handleFormChange} />
                <p className="forget-password">
                    Esqueceu a senha?
                </p>
            </div>

            <div className="buttons-container">
                <Button>Entrar</Button>
                <SecondaryButton>Registrar</SecondaryButton>
            </div>
        </form>
    </div >;
}