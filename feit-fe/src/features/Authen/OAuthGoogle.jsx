import {GoogleLogin} from '@react-oauth/google';
import {googleLogout} from '@react-oauth/google';

export const OAuthGoogle = () => {
    const onSuccess = () => {
        console.log('log out success');
    };

    return (
        <div>
            <GoogleLogin
                onSuccess={(credentialResponse) => {
                    console.log(credentialResponse);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
            <button onClick={() => googleLogout()}>Logout</button>
        </div>
    );
};
