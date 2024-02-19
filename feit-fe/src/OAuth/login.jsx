import {useLocation} from 'react-router-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {GetGoogleURL} from './getGoogleURL';
export default function Login() {
    const location = useLocation();
    let from = ((location.state && location.state.from && location.state.from.pathname) || '/') + '';
    return (
        <div className="">
            <h1>Hello</h1>
            <a href={GetGoogleURL(from)}>Login Google</a>
        </div>
    );
}
