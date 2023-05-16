import React from "react";
import { SecondaryButton } from "../../components/Button/Button";
import { Button } from "../../components/Button/Button";
import "./SignIn.scss";
import { signIn } from "../../services/authService";
import { redirect } from "react-router-dom";

export default function SignIn() {
    function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
        const credentials = {"email":"matheus@gaa", "password": "umasenhaaa"}

        const validacoes = true;
        if (validacoes) {

            signIn(credentials).then(response => {
                console.log(response.data)
                localStorage.setItem('credentials', response.data)
                redirect('/');
            })
        }
    }

    return <div className="form-container">
        <form onSubmit={handleSubmit}>
            <h1>Acessar conta</h1>
            <div className="inputs-container">

                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" />

                <label htmlFor="password">Senha</label>
                <input type="password" name="password" />
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