import React, { useState } from "react";
import { SecondaryButton } from "../../components/Button/Button";
import { Button } from "../../components/Button/Button";
import "./SignIn.scss";
import { SignInCredentials, signIn } from "../../services/authService";
import { redirect } from "react-router-dom";


export default function SignIn() {
    const [userCredentials, setUserCredentials] = useState<SignInCredentials>({ email: '', password: '' });

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        const credentials: SignInCredentials = { ...userCredentials };

        if (userCredentials.email && userCredentials.password) {
            signIn(credentials).then(response => {
                console.log(response.data);
                localStorage.setItem('credentials', JSON.stringify(response.data));
                redirect('/');
            });
        }else{
            console.log('invalido');
            
        }
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
            <h1>Acessar conta</h1>
            <div className="inputs-container">

                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" onChange={handleFormChange}/>

                <label htmlFor="password">Senha</label>
                <input type="password" name="password" onChange={handleFormChange}/>
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