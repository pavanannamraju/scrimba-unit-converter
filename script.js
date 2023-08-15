const lenCon = document.getElementById("len-con");
const volCon = document.getElementById("vol-con");
const massCon = document.getElementById("mass-con");

const convertBtn = document.getElementById("convert-btn");
const inputVal = document.getElementById("value-to-convert");

convertBtn.addEventListener("click", function () {
    let val = inputVal.value;
    lenCon.textContent = convertLen(val);
    volCon.textContent = convertVol(val);
    massCon.textContent = convertMass(val);
});

function convertLen(num) {
    let mtToFt = (num * 3.281).toFixed(3);
    let ftToMt = (num / 3.281).toFixed(3);
    return `${num} meters = ${mtToFt} feet | ${num} feet = ${ftToMt} meters`;
}
function convertVol(num) {
    let ltToGl = (num * 0.264).toFixed(3);
    let glToLt = (num / 0.264).toFixed(3);
    return `${num} liters = ${ltToGl} gallons | ${num} gallons = ${glToLt} liters`;
}
function convertMass(num) {
    let kgToPd = (num * 2.204).toFixed(3);
    let pdToKg = (num / 2.204).toFixed(3);
    return `${num} kgs = ${kgToPd} pounds | ${num} pounds = ${pdToKg} kgs`;
}
