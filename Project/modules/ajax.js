class Ajax {
    debugger;
    post(url, data, callback) {
        console.log('url:', url);
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                callback(data);
                // console.log(data);
            });
    }

    get(url, callback) {
        // console.log('url:', url);
        fetch(url, {method: 'GET'})
            .then(response => response.json())
            .then(data => {
                callback(data);
                // console.log(data);
            });
    }

    delete(url, callback) {
        // console.log('url:', url);
        fetch(url, {method: 'DELETE'})
            .then(response => response.json())
            .then(data => {
                callback(data);
                // console.log(data);
            });
    }
}

export const ajax = new Ajax();