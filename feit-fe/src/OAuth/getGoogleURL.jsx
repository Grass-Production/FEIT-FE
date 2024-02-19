export function GetGoogleURL(from) {
    const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
    const redirect_url = 'http://localhost:5173/api/sessions/oauth/google';
    const client_id = '842475217211-kg2r2d0ia87v8doaeclih5i9ku8q5o1k.apps.googleusercontent.com';
    const client_secret = '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';
    const endpoint_url = 'http://localhost:5173/';

    const options = {
        redirect_url: redirect_url,
        client_id: client_id,
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

    return `${rootUrl}?${qs.toString()}`;
}
