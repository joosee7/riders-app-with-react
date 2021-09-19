export const updateRiders = async () => {

    const body = JSON.parse(localStorage.getItem('riders'));

    const url = 'https://api.jsonbin.io/v3/b/6135c3be470d332594032ef7';
    const request = await fetch( url, {
        method: 'PUT' ,
        headers: { 
            'Content-type': 'application/json',
            'X-Master-Key': '$2b$10$1iLRVqXVnu6JB9cLVTnR5uhuWZVaMB0a3xsE96k2p5VUR1Kbm46Ju'
        },
        body: JSON.stringify( body )
    })
        // .then( (response) => console.log(response));

        return request;

};
