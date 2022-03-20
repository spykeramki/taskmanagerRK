import {TRELLO_ACCESS_TOKEN, API_KEY} from './KeysAndTokens'

export const LOGIN_USER_PROFILE_API = `https://trello.com/1/member/me?key=${API_KEY}&token=${TRELLO_ACCESS_TOKEN}&organizations=all`