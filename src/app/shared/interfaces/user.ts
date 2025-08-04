export interface User {
    token: string;
    user: {
        id: number;
        email: string;
        created_at: string;
        updated_at: string;
        first_name: string;
        last_name: string;
        date_of_birth: string;
        country: number;
        jti: string;
    }
}
