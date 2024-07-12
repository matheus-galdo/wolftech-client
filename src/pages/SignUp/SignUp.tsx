import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AxiosError } from "axios";
import { Button } from "../../components/Button/Button";
import { SignUpInput } from "../../types/credentials";
import { signUp } from "../../services/authService";
import "./SignUp.scss";
import { AuthContext } from "../../context/AuthContext";
import { useAlreadyLoggedIn } from "../../hooks/useAlreadyLoggedIn";


export default function SignUp() {
    const [userCredentials, setUserCredentials] = useState<SignUpInput>({ name: '', email: '', password: '' });
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();
    useAlreadyLoggedIn();

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        const signUpInput: SignUpInput = { ...userCredentials };

        if (!userCredentials.email) {
            return toast.error('O campo o e-mail é obrigatório');
        }

        if (!userCredentials.password) {
            return toast.error('O campo o senha é obrigatório');
        }

        signUp(signUpInput)
            .then(response => {                
                authContext?.storeCredentials(response.data);
                navigate('/');
            }).catch((error: AxiosError) => {
                toast.error(error.response?.status === 401 ? 'Usuário ou senha incorretos' : 'Ocorreu um erro inesperado');
            });
    }

    function handleFormChange(event: React.FormEvent<HTMLInputElement>) {
        const { name, value } = event.currentTarget;

        const newUserCredentials: SignUpInput = {
            ...userCredentials,
            [name]: value,
        };

        setUserCredentials(newUserCredentials);
    }

    return <div className="form-container">
        <form onSubmit={handleSubmit}>
            <div className="inputs-container">
                <h1>Criar nova conta</h1>

                <label htmlFor="name">Nome</label>
                <input type="text" name="name" autoComplete="name" id="name" onChange={handleFormChange} />

                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" autoComplete="email" id="email" onChange={handleFormChange} />

                <label htmlFor="password">Senha</label>
                <input type="password" name="password" id="password" onChange={handleFormChange} />
            </div>

            <div className="buttons-container">
                <Button>Criar</Button>
            </div>
        </form>
    </div >;
}