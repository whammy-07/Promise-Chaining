// Promise Chaining in JavaScript
function fetchData() {
    return new Promise((resolve, reject) => {
        // ... (asynchronous operation)
    });
}

fetchData()
    .then(result => {
        // ... (handle the first result)
        return processResult(result);
    })
    .then(finalResult => {
        // ... (handle the final result)
    })
    .catch(error => {
        // ... (handle errors)
    });
