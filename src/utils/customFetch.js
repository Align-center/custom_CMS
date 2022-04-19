const customFetch = (url, method, body = null, retries = 1) => {

    return fetch(url, {
        method: method,
        headers: new Headers({
            'content-type': 'application/json',
            'authorization': localStorage.getItem('token')
        }),
        body: body
    }).then(async res => {

        if (res.status === 200) {

            return res.json();
        }

        if (retries > 0) {

            if (res.status === 401) {

               return await refreshToken();
            }

            return customFetch(url, method, body, retries - 1);
        }

    }).catch(err => {

        console.log(err);
    })
}

const refreshToken = async () => {

    return await fetch('https://custom-cms-ac.herokuapp.com/refreshToken', {
        method: 'GET', 
        headers: new Headers({
            'authorization': localStorage.getItem('refreshToken')
        })
    }).then(res => {

        if (res.status === 401) {

            localStorage.setItem('isConnected', false);
            return {error:'noooooooo'};
        }

        return res.json();
    }).then(data => {

        if (data.error) {

            return data;
        }

        localStorage.setItem('token', data.token);
        localStorage.setItem('refreshToken', data.refreshToken);
    });
}

export default customFetch;