class Ajax {
    debugger;
    post(url, callback) {
        let xhr = new XMLHttpRequest()
        //xhr.open('POST', getUrl(url))
        xhr.open('POST', url)
        xhr.send()

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                const data = JSON.parse(xhr.response)
                callback(data)
            }
        }
    }
}

/*class Ajax {
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
}*/

export const ajax = new Ajax();