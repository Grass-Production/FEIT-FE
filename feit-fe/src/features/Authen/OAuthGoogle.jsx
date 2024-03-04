import { GoogleLogin } from '@react-oauth/google';
import { googleLogout } from '@react-oauth/google';
import { useState } from 'react';

function TestLogin({ value }) {

    const callApi = async () => {
        const res = await fetch(`http://localhost:8080/api/sessions/oauth/google?code=${value}`, {
            method: "GET",
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
            },
        });

        console.log(res)
        console.log(value)
    }
    return <button onClick={callApi}>Test Login</button>
}

export const OAuthGoogle = () => {

    const [credential, setCredential] = useState('')

    const onSuccess = () => {
        console.log('log out success');
    };

    return (
        <div>
            <TestLogin value={credential} />
            <GoogleLogin
                onSuccess={(credentialResponse) => {
                    setCredential(credentialResponse.credential)
                    console.log(credentialResponse);
                    console.log(credentialResponse.credential);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
            <button onClick={() => googleLogout()}>Logout</button>
        </div>
    );
};
