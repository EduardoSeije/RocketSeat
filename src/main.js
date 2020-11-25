function minhaPromise() {
    return Promise((resolve, reject) => setTimeout(() => { resolve('OK'); }, 200)
    );
}

minhaPromise().then(Response => {
    console.log(response);
})
.catch(err => {

});


async function executaPromise() {
    const response = await minhaPromise();
console.log(response);
}
executaPromise();
