export const getRiders = async () => {

    // const url = 'https://api.jsonstorage.net/v1/json/66b107e2-0711-4a7f-9718-759376d705e7?apiKey=0f66dccf-70be-42cf-8ee3-f09ef1d8d355';
    const url = 'https://api.jsonbin.io/v3/b/6135c3be470d332594032ef7/latest';
    const resp = await fetch( url, { headers: { 'X-Master-Key': '$2b$10$1iLRVqXVnu6JB9cLVTnR5uhuWZVaMB0a3xsE96k2p5VUR1Kbm46Ju'}} );
    const riders  = await resp.json();

    // const riders = {
    //     "record": [
    //         {
    //             "Hora": "8:00",
    //             "Riders": "8",
    //             "Estado": "Disponible"
    //         },
    //         {
    //             "Hora": "8:30",
    //             "Riders": "8",
    //             "Estado": "Disponible"
    //         },
    //         {
    //             "Hora": "9:00",
    //             "Riders": "8",
    //             "Estado": "Disponible"
    //         },
    //         {
    //             "Hora": "9:30",
    //             "Riders": "8",
    //             "Estado": "Disponible"
    //         },
    //         {
    //             "Hora": "10:00",
    //             "Riders": "8",
    //             "Estado": "Disponible"
    //         },
    //         {
    //             "Hora": "10:30",
    //             "Riders": "8",
    //             "Estado": "Disponible"
    //         },
    //         {
    //             "Hora": "11:00",
    //             "Riders": "8",
    //             "Estado": "Disponible"
    //         },
    //         {
    //             "Hora": "11:30",
    //             "Riders": "8",
    //             "Estado": "Disponible"
    //         },
    //         {
    //             "Hora": "12:00",
    //             "Riders": "8",
    //             "Estado": "Disponible"
    //         },
    //         {
    //             "Hora": "12:30",
    //             "Riders": "8",
    //             "Estado": "Disponible"
    //         },
    //         {
    //             "Hora": "13:00",
    //             "Riders": "8",
    //             "Estado": "Disponible"
    //         },
    //         {
    //             "Hora": "13:30",
    //             "Riders": "8",
    //             "Estado": "Disponible"
    //         },
    //         {
    //             "Hora": "14:00",
    //             "Riders": "8",
    //             "Estado": "Disponible"
    //         },
    //         {
    //             "Hora": "14:30",
    //             "Riders": "8",
    //             "Estado": "Disponible"
    //         },
    //         {
    //             "Hora": "15:00",
    //             "Riders": "8",
    //             "Estado": "Disponible"
    //         },
    //         {
    //             "Hora": "15:30",
    //             "Riders": "8",
    //             "Estado": "Disponible"
    //         },
    //         {
    //             "Hora": "16:00",
    //             "Riders": "8",
    //             "Estado": "Disponible"
    //         },
    //         {
    //             "Hora": "16:30",
    //             "Riders": "8",
    //             "Estado": "Disponible"
    //         },
    //         {
    //             "Hora": "17:00",
    //             "Riders": "8",
    //             "Estado": "Disponible"
    //         },
    //         {
    //             "Hora": "17:30",
    //             "Riders": "8",
    //             "Estado": "Disponible"
    //         },
    //         {
    //             "Hora": "18:00",
    //             "Riders": "8",
    //             "Estado": "Disponible"
    //         },
    //         {
    //             "Hora": "18:30",
    //             "Riders": "8",
    //             "Estado": "Disponible"
    //         },
    //         {
    //             "Hora": "19:00",
    //             "Riders": "8",
    //             "Estado": "Disponible"
    //         },
    //         {
    //             "Hora": "19:30",
    //             "Riders": "8",
    //             "Estado": "Disponible"
    //         },
    //         {
    //             "Hora": "20:00",
    //             "Riders": "8",
    //             "Estado": "Disponible"
    //         }
    //     ],
    //     "metadata": {
    //         "id": "6135c3be470d332594032ef7",
    //         "private": true
    //     }
    // };

    return riders;
}
