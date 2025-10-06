export const APP_CONST = Object.freeze({
    ENV: {
        DEFAULT_SERVER_PORT: 2121,
        HASH_SALT_VALUE: 8
    },
    MODULES: {
        USER: 'user',
        AUTH: 'auth'
    },
    PATH: {
        USER: {
            CREATE: 'create',
            
        },
        AUTH: {
            LOGIN: 'login',
            LOGOUT: 'logout',
        }
    },
    BASE_RESPONSE: {
        code: 200,
        statusCode: 200,
        message: "success",
        status: true,
        data: {}
    }
})