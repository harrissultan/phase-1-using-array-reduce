const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// const totalBatteries = batteryBatches.reduce(function(a,b){return a+b},0)
const totalBatteries = batteryBatches.reduce((a,b) => a+b,0)