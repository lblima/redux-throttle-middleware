export function fetchMessage() {
    return {
        type: 'API_FETCH_MESSAGE',
        payload: 'message text',
        meta: {
            throttle: 2000
        }
    }
}