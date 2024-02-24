import {EnvGoogle} from '../data';
export const getGoogleURL = (from) => {
    const env = {...EnvGoogle};
    const options = {
        redirect_url: env.redirect_url,
        client_id: env.client_id,
        access_type: 'offline',
        response_type: 'code',
        prompt: 'consent',
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email',
        ].join(' '),
        state: from,
    };
    const qs = new URLSearchParams(options);

    return `${env.rootUrl}?${qs.toString()}`;
};
