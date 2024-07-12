export type Authorization = {
    token: string;
    type: "bearer";
};

export type User = {
    id: string;
    name: string;
    email: string;
    email_verified_at: string;
    created_at: string;
    updated_at: string;
};

export type SignInCredentials = {
    email: string;
    password: string;
};

export type SignUpInput = {
    name: string;
    email: string;
    password: string;
};