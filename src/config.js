let api_url = '';
let app_url = '';
let app_name = 'EduSoho 项目管理器';

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
    APP_NAME: app_name,
};
