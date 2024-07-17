// Asych callback 
//   //create a function 
//   function fetchData(url, callback) 
//   //add a condition
//    const error = Math.random() > 0.5
// // should be asynchronous use setTimeout check if above error value is true then call the callback with message argument as error,url else send the argument as success,url
// // the callback function will have message and url as argument, 
//   if error is null then print error occured {message} {url}
//      else print the response is successfull the url is {url} and message is {message}
let url = 'sample.com';
function fetchData(url, callback) {
    const error = Math.random() > 0.5;
    setTimeout(() => {
        if (error) {
            data1('error', 'sample.com');

        } else {
            data1('success', 'sample.com');
        }

    }, 2000)

}
function data1(message, url) {
    if (message === 'error') {
        console.log(`error occured  ${message} and ${url}`);
    }
    else {
        console.log(`response is successfull the url is ${url} and message is ${message}`)
    }

}
fetchData(url, data1);
