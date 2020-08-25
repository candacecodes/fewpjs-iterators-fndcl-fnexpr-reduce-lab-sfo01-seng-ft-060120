const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


const totalBatteries = batteryBatches.reduce((x, element) => x + element, 0) 

// const totalBatteries = batteryBatches.reduce(
//     function(total, num) {
//         return num + total
// }) 