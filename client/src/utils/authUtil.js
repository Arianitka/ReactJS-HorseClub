export const getaccessToken = () => {
    const authJSON = localStorage.getItem('auth');

    if(!authJSON){
        return '';
    }

    const authDAta = JSON.parse(authJSON);

    return authDAta?.access_token;
}