import { getaccessToken } from "../utils/authUtil";


// async function requester(method, url, data) {

//     const options = {};
//     const accessToken = getaccessToken()

//     if (accessToken){
//         options.headers = {
//             ...options.headers,
//             'X-Authorization': accessToken,
//         }
//     }
    

//     if (method !== 'GET') {
//         options.method = method;
//     }

//     if (data) {
//         options.headers = {
//             ...options.headers,
//             'Content-Type': 'application/json'
//         };

//         options.body = JSON.stringify(data)
//     }
   

//         const response = await fetch(url, options);
//         if (response.status === 204){
//             return;
//         }
//         const result = await response.json();

//         if (!response.ok){
//             console.log(response);
//             throw result;
//         }
       

//         return result;

//     }


const buildOptions = (data) => {
    const options = {};
    let token = '';

    if (data) {
        options.body = JSON.stringify(data);
        options.headers = {
            'content-type': 'application/json',
        }
    }

    token =  getaccessToken();


    if (token) {
        options.headers = {
            ...options.headers,
            'X-Authorization': token
        }
    }

    console.log(options);

    return options;
}
export const requester = async (method, url, data) => {
    let response = null;

    try {
        response = await fetch(url, {
            method,
            ...buildOptions(data),
        });
        // console.log(response.status);

        if (response.status === 204) {
            return {};
        }

        if (response.status === 403 || response.status === 401) {
            let text = await response.text()
            text = JSON.parse(text);
            // console.log(text.message);
            // throw new Error('No such user or password!');
            throw new Error(text.message);
        } else if (response.status === 409) {
            // alert('User already exist!');
            throw new Error('User already exist!');
        } else if (response.status == 200) {
            const result = await response.json();
            return result;

        } else if (response.status == 404) {
            throw new Error('Not found');

        } else {
            // alert('Something went wrong')
            // localService.removeItem('userData')
            throw new Error('Something went wrong')
        };


    } catch (error) {
        // alert(error.message)
        // console.log(error);
        if (error.message === 'Invalid access token') {
            // localStorage.removeItem('userData');
            redirect('/');
        }
        // console.log(error.message);
        throw new Error(error.message);
    }

}



export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const del = requester.bind(null, 'DELETE');

export default {
    get,
    post,
    put,
    del,
}