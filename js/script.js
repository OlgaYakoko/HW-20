const potatosForOneLiterBorsch = 4;
const priceKilogramPotato = 13;
const weightOnePotato = 0.075;
const potatoForOneLiterBorsch = potatosForOneLiterBorsch * 0.075;


const pricePotatosForCookingBorsch = function(borschLiters) {

    const potatoForBorsch = borschLiters * potatoForOneLiterBorsch;
    const countPotatos = potatoForBorsch * priceKilogramPotato;
    const wholePrice = Math.ceil(countPotatos);

    return wholePrice;

}

console.log(`you spend ${pricePotatosForCookingBorsch(48)} UAH on buying potatoes for cooking borsch`);