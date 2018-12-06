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
    BIKER_GET_ALL_API_URL = prefix + api + '/bikers',
    BIKER_POST_API_URL = prefix + api + '/biker/new',
    BIKER_DEFAULT_API_URL = prefix + api + '/biker/{id}',
    CUSTOMER_GET_ALL_API_URL = prefix + api + '/customers',
    NATURAL_CUSTOMER_POST_API_URL = prefix + api + '/natural-customer/new',
    NATURAL_CUSTOMER_GET_ALL_API_URL = prefix + api + '/natural-customers',
    NATURAL_CUSTOMER_DEFAULT_API_URL = prefix + api + '/natural-customer/{id}',
    LEGAL_CUSTOMER_POST_API_URL = prefix + api + '/legal-customer/new',
    LEGAL_CUSTOMER_GET_ALL_API_URL = prefix + api + '/legal-customers',
    LEGAL_CUSTOMER_DEFAULT_API_URL = prefix + api + '/legal-customer/{id}',
    CASH_FLOW_CUSTOMERS_API_URL = CUSTOMER_GET_ALL_API_URL + '/cash-flow',
    CASH_FLOW_BIKERS_API_URL = BIKER_GET_ALL_API_URL + '/cash-flow',
    DELIVERY_POST_API_URL = prefix + api + '/delivery/new',
    DELIVERY_DEFAULT_API_URL = prefix + api + '/delivery/{id}',
    DELIVERY_GET_ALL_API_URL = prefix + api + '/deliveries';
