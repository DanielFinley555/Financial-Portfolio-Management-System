//Task 2: Create the Portfolio Module

//Import the assets array
import { assets } from './asset.js';

//export calculatePortfolioValue function 
export function calculatePortfolioValue() {
    return assets.reduce((total, asset) => total + asset.price * asset.quantity, 0);
}

//export getPortfolioAllocation function
export function getPortfolioAllocation() {

    //create variable for the value of the entire portfolio
    const pValue = calculatePortfolioValue()

    return assets.reduce((allocation, asset) => allocation + (asset.price * asset.quantity) / pValue, 0);
}
