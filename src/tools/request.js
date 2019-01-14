function get({ url, headers, params }) {
    if (params) {
        let paramsArray = [];
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]));
        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&');
        } else {
            url += '&' + paramsArray.join('&');
        }
    }
    return new Promise(function (resolve, reject) {
        fetch(url, {
            method: 'GET',
            credentials: 'include',
            headers,
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    reject({status: response.status})
                }
            })
            .then((response) => {
                resolve(response);
            })
            .catch((err)=> {
                reject({status: -1});
            })
    })
}

function post({ url, headers, params }) {
    return new Promise(function (resolve, reject) {
        fetch(url, {
            method: 'POST',
            credentials: 'include',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                ...headers
            }),
            body: JSON.stringify(params),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    reject({status:response.status})
                }
            })
            .then((response) => {
                resolve(response);
            })
            .catch((err)=> {
                reject({status: -1});
            })
    })
}

const FetchApi = {
    get,
    post
};
export default FetchApi;
