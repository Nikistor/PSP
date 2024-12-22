class Ajax {
    debugger;
    post(url, callback) {
        // console.log('url:', url);
        fetch(url, {method: 'POST'})
            .then(response => response.json())
            .then(data => {
                callback(data);
                // console.log(data);
            });
    }
}

export const ajax = new Ajax();