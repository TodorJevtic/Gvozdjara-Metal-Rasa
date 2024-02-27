const BASE_URL = 'http://localhost:5000'

export const PROIZVOD_URL = BASE_URL +'/api/proizvod';
export const USERS_URL = BASE_URL +'/api/users';
export const ALATI_URL = BASE_URL +'/api/proizvod/alati';
export const RASVETA_URL = BASE_URL +'/api/proizvod/rasveta';
export const SANITARIJA_URL = BASE_URL +'/api/proizvod/sanitarija';
export const PROIZVOD_BY_ID_URL = PROIZVOD_URL +'/';

export const USER_LOGIN_URL = BASE_URL + '/api/users/loginUser';
export const USER_REGISTER_URL = BASE_URL + '/api/users/registration';
export const USER_UPDATE = BASE_URL + '/api/users/update/';

export const ORDERS_URL = BASE_URL + '/api/orders';
export const ORDER_CREATE_URL = ORDERS_URL + '/create';
