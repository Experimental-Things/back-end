export const APP_MESSAGES = Object.freeze({
    GENERAL_MESSAGE: {
        SUCCESS: 'success',
        FAILED: 'failed',
        INTERNAL_SERVER_ERROR: 'internal server error, please try again later'
    },
    MODULE: {
        AUTH: {
            NO_USER_FOUND: 'user not found',
            USER_ID_INCORRECT: 'username/ mail id incorrect',
            PASSOWRD_INCORRECT: 'password incorrect',
        }
    },
    UTILS: {
        HASH_FN: {
            EMPTY_VALUE: 'data to be compared cannot be null or undefined'
        }
    }
})