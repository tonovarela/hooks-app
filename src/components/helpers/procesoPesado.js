export const procesoPesado = (iteraciones) => {
    for (let i = 0; i < iteraciones; i++) {
        console.log(`Trabajando....`);
    }    
    return `Iteraciones realizadas ${iteraciones}`;
}