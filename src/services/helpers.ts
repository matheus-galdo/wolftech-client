import { SignInResponse } from "../types/Services/Auth";

export function makeAuthHeaders() {
    const credentials = getCredentials();
    return { headers: { Authorization: 'Bearer ' + credentials?.authorization.token, } };
}

export function getCredentials() {
    const credentialsString = localStorage.getItem('credentials');
    if (credentialsString) {
        const credentials: SignInResponse = JSON.parse(credentialsString);
        return credentials;
    }
}