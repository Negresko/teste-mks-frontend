export const formatPrice = (price: string): string => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL', 
        maximumFractionDigits: 0,
        compactDisplay: 'short'

    })
        .format(Number(price)).replaceAll(/\s/g,"");
};
