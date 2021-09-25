export const updateRiders = async () => {

    const body = JSON.stringify(localStorage.getItem('riders'));

    // const url = 'https://api.jsonbin.io/v3/b/6135c3be470d332594032ef7';
    const url = 'https://api.jsonbin.io/v3/b/6137131b85791e1732a1200a';
    const request = await fetch( url, {
        method: 'PUT' ,
        headers: { 
            'Content-type': 'application/json',
            'X-Master-Key': '$2b$10$nnuSg9tFuinZo/CM8ap4vep/s6l5iQkZwE2JkRHpQaVMGEHdmEqC2'
        },
        body: body
    })
        .then( (response) => console.log(response));

        return request;

};
