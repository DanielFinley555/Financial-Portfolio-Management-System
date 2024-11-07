//Task 1: Create the Asset Module

//Export an array of assets

export const assets = [
  { id: 1, name: 'Basketball', type: 'sports', price: 8, quantity: 50 },
  { id: 2, name: 'Football', type: 'sports', price: 20, quantity: 40 },
  { id: 3, name: 'Telivision', type: 'electronics', price: 350, quantity: 15 },
  { id: 4, name: 'laptop', type: 'electronics', price: 850, quantity: 20 },
  { id: 5, name: 'chair', type: 'furniture', price: 100, quantity: 10 },
];

//Export the function

export function getAssetById(id) {
  return assets.find(asset => asset.id === id);
}