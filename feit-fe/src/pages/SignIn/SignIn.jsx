import {useLocation} from 'react-router-dom';
import {getGoogleURL} from '../../untils';

export const SignIn = () => {
    const location = useLocation();
    let from = ((location.state && location.state.from && location.state.from.pathname) || '/') + '';
    return (
        <div className=" bg-red-800">
            <h1 className=" text-zinc-800">Hello</h1>
            <a href={getGoogleURL(from)}>Login Google</a>
        </div>
    );
};
