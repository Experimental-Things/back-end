export const APP_CONST = Object.freeze({
    ENV: {
        DEFAULT_SERVER_PORT: 2121,
        HASH_SALT_VALUE: 8,
        JWT_SECRET: "capitalSMALL",
        ACCESS_TOKEN_EXPIRES_IN: "1h",
        REFRESH_TOKEN_EXPIRES_IN: "1d"
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