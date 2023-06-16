export const getUserSession = () => {
    return JSON.parse(localStorage.getItem('user_session') || '{}');
};
export const getAccessToken = () => {
    const userSession = JSON.parse(localStorage.getItem('user_session') || '{}');
    return userSession ? userSession.access_token : null;
};
export const setUserSession = (userSession: any) => {
    localStorage.setItem('user_session', JSON.stringify(userSession) || '{}');
};

export const getPermission = () => {
    const userSession = JSON.parse(localStorage.getItem('user_session') || '{}');
    return userSession ? userSession.permissions : null;
};
