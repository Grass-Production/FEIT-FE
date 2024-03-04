import {useLocation} from 'react-router-dom';
import {getGoogleURL} from '../../untils';
import {GoogleOAuthProvider} from '@react-oauth/google';
import {OAuthGoogle} from '../../features';
import {Form} from '../../components';
export default function SignIn() {
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
            <Form valueName={'hi'} valuePass={'hehe'} />
            <GoogleOAuthProvider clientId="842475217211-kg2r2d0ia87v8doaeclih5i9ku8q5o1k.apps.googleusercontent.com">
                <OAuthGoogle />
            </GoogleOAuthProvider>
        </div>
    );
}
