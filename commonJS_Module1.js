// Note:  Please do not change the prewritten code

// import the required module here
const { sum, mean } = require('./math.js');

const Solution = () => {
    const nums = [1, 2, 3, 4, 5];
     // Calculate the sum and mean using the imported functions
     const totalSum = sum(nums);
     const averageMean = mean(nums);
 
     // Display the results of the calculations on the console
     console.log('The sum is '+totalSum);
     console.log('The mean is '+averageMean);

};
Solution();
module.exports = Solution;
