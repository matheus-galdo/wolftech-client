import { Authorization, User } from "../credentials";

export type SignInResponse = {
    user: User;
    authorization: Authorization
};