// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    const hqLocation = 42; // Headquarters location
    return Math.abs(blocks - hqLocation);
  }
  
  function distanceFromHqInFeet(blocks) {
    const feetPerBlock = 264; // Assuming one block is 264 feet
    const distanceInBlocks = distanceFromHqInBlocks(blocks);
    return distanceInBlocks * feetPerBlock;
  }

  function distanceTravelledInFeet(startBlock, endBlock) {
    const feetPerBlock = 264; // Assuming one block is 264 feet
    const distanceInBlocks = Math.abs(endBlock - startBlock);
    return distanceInBlocks * feetPerBlock;
  }
  function calculatesFarePrice(start, destination) {
    const distance = Math.abs(destination - start);
    
    if (distance === 1) {
      return 0; // Free sample fare for short distance
    } else if (distance <= 2) {
      return 2; // $2 for a distance up to 2 blocks
    } else if (distance <= 8) {
      return (distance - 2) * 0.25 + 2; // $0.25 per block after 2 blocks
    } else {
      return 'cannot travel that far'; // Beyond 8 blocks, cannot travel
    }
  }
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = Math.abs(destination - start) * 264; // Assuming one block is 264 feet
    let fare = 0;
  
    if (distanceInFeet <= 400) {
      fare = 0; // Free sample fare for short distance
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      fare = (distanceInFeet - 400) * 0.02; // 2 cents per foot after first 400 feet
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      fare = 25; // Flat rate of $25 for a distance over 2000 feet
    } else {
      return 'cannot travel that far'; // Beyond 2500 feet, cannot travel
    }
  
    return Number(fare.toFixed(2)); // Return fare as a number rounded to 2 decimal places
  }
  