export interface Register {
    user: {
        email: string;
        password: string;
        confirm_password: string;
        first_name: string;
        last_name: string;
        country: number;
        date_of_birth: string;
    }
}
