export const getRiders = async () => {

    // const url = 'https://api.jsonbin.io/v3/b/6135c3be470d332594032ef7/latest'; Gmail
    // const resp = await fetch( url, { headers: { 'X-Master-Key': '$2b$10$1iLRVqXVnu6JB9cLVTnR5uhuWZVaMB0a3xsE96k2p5VUR1Kbm46Ju'}} ); Gmail
    const url = 'https://api.jsonbin.io/v3/b/6137131b85791e1732a1200a/latest';
    const resp = await fetch( url, { headers: { 'X-Master-Key': '$2b$10$nnuSg9tFuinZo/CM8ap4vep/s6l5iQkZwE2JkRHpQaVMGEHdmEqC2'}} );
    const riders  = await resp.json();

    return riders;
}
