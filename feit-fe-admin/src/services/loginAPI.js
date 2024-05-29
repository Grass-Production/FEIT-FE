import axios from "axios"

export const Login = async (account, password) => {
    try {
        const response = await axios.post(
            'http://localhost:8080/api/login/admin',
            {
                email: account,
                password: password,
            },
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
            },
        );
        if (response.status === 200) {
            localStorage.setItem('access_token', response.data.access_token);
            return response
        } else {
            console.log('Login failed');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}