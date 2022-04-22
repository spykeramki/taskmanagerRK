import {LOGIN_USER_PROFILE_API} from '../utils/ApiUrls'

export const userProfileFetch = async () => fetch(LOGIN_USER_PROFILE_API).then(response => response.json());
    