var api_url = '';
var app_url = '';

switch( process.env.NODE_ENV ){
    case 'development':
        api_url = 'http://ddd.site/api';
        app_url = 'http://ddd.site';
        break;
    case 'production':
        api_url = '/api';
        app_url = '';
        break;
}

export const GLOBAL_CONFIG = {
    API_URL: api_url,
    APP_URL: app_url,
};
