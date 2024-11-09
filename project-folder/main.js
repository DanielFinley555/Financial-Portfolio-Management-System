//Task 4: Create the Main Application

//Import the calculatePortfolioValue and getPortfolioAllocation functions
import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';

//get total portfolio value from html file
const portfolioValue = document.getElementById("totalPortfolioValue")

//create varaiable for total portfolio value
const totalValue = calculatePortfolioValue()
//using textContent display the total value
portfolioValue.textContent = `The value of the entire product portfolio is $${totalValue}`

//was not able to figure out how to do the allocations or transactions
