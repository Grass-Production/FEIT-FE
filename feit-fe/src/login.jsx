import {GoogleLogin} from '@react-oauth/google';
import {GoogleOAuthProvider} from '@react-oauth/google';

export function HandleLogin() {
    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };
    return (
        <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
    );
}

export default function Login() {
    const clientID = '168558856798-qgpvpod0ecqljprtjpmj6rdpl7meehaa.apps.googleusercontent.com';

    return (
        <GoogleOAuthProvider clientId={clientID}>
            <HandleLogin />
        </GoogleOAuthProvider>
    );
}
