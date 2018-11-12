const getPrefix = (): string => {
    let prfx: string = '';
    if (typeof window != 'undefined') {
        prfx = window.location.pathname.substring(0, location.pathname.indexOf('/apps/'));
    }
    return prfx;
};

// const prefix = getPrefix();
const prefix = 'http://localhost:8080';
const api = '/api/v1';

export const
    BIKER_SUMMARY_API_URL = prefix + api + '/bikers/summary',
    BIKER_POST_API_URL = prefix + api + '/biker/new';
