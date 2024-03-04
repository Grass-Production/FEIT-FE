import { useLocation } from 'react-router-dom';
import { getGoogleURL } from '../../untils';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { OAuthGoogle } from '../../features';
import { Form } from '../../components';
export default function SignIn() {
    const crential = ''
    const callApi = async () => {
        const res = await fetch(`http://localhost:8080/api/sessions/oauth/google`, {
            method: "GET",
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
            },
        });
        // const b = await res.json()
        console.log(res)
    }
    // const location = useLocation();
    // let from = ((location.state && location.state.from && location.state.from.pathname) || '/') + '';
    // return (
    //     <div className=" bg-red-800">
    //         <h1 className=" text-zinc-800">Hello</h1>
    //         <a href={getGoogleURL(from)}>Login Google</a>
    //     </div>
    // );
    return (
        <div>
            {/* <TestLogin /> */}
            <button onClick={callApi}>Login</button>
            {/* <Form valueName={'hi'} valuePass={'hehe'} /> */}
            <GoogleOAuthProvider clientId="168558856798-cohnb8nqdnl38nriop2v752sap4mgpb8.apps.googleusercontent.com">
                <OAuthGoogle />
            </GoogleOAuthProvider>
        </div>
    );
}
