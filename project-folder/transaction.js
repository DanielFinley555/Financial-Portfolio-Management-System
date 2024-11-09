//Task 3: Create the Transaction Module

//Import the assets array and getAssetbyID function
import { assets, getAssetById } from './asset.js';

//export transaction class
export class Transaction {
    constructor(assetId, type, quantity) {
        this.assetId = assetId;
        this.type = type;
        this.quantity = quantity;
    }
}

//was not able to figure out
