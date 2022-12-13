// fetch("https://jsonplaceholder.typicode.com/users/1")
//const emailRef = document.querySelector(".email");

// 1. Then
//fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
//    return response.json()
//}).then(data => {
//    console.log(data)
//    emailRef.innerHTML = data.email
//});

// 2. Async/Await
//async function main() {
//    const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//    const data = await response.json()
//    console.log(data)
//    emailRef.innerHTML = data.email
//}

//main();

//_____________________________________________________________

//const statusRef = document.querySelector(".status");

//function getSubscriptionStatus () {
//    return new Promise((resolve, reject) => {
//        setTimeout(() => { // Sets a Timeout the resolve line of code to not run for 2 seconds
//            resolve("VIP")
//        }, 2000);
//    })
//}

// 1. Then
//getSubscriptionStatus().then(response => console.log(response))

// 2. Async/Await
//async function main() {
//    const status = await getSubscriptionStatus();
//    statusRef.innerHTML = status;
//}

//main();

// Code to get subscription status and determine 
// the response depending on subscription status

const videoRef = document.querySelector(".video");

function getSubscriptionStatus () {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve ("VIP")
        }, 2000);
    })
}

function getVideo(subscriptionStatus) {
    return new Promise ((resolve, reject) => {
        if (subscriptionStatus === "VIP") {
            console.log(resolve("Show Video"));
        }
        else if (subscriptionStatus === "FREE") {
            console.log(resolve("Show Trailer"));
        }
        else {
            console.log(reject("No Video"));
        }
    })
}


async function main () {
    const status = await getSubscriptionStatus();
    try {
    console.log(await getVideo(status));
    }
    catch (e) {
        console.log(e)
        videoRef.innerHTML = e;
    }
}

main();