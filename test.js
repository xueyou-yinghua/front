let time = 30;
let time1 = 60;
let time2 = 120;
let time3 = 180;
let time4 = 270;
let time5 = 360;
let time6 = 720;
let time7 = 600;

const times = [
  time,time1, time2, time3, time4, time5, time6, time7
]
let cd1 = 2.39;
let hard1 = 34.36070;
let cd2 = 2.4;
let hard2 = 34.53971;
let cd3 = 2.32;
let hard3 = 33.35411;
let cd4 = 2.31;
let hard4 = 33.00608;
times.forEach((time) => {
    let index = time/cd1;
    let index1 = time/cd2;
    let index2 = time/cd3;
    let index3 = time/cd4;
    console.log(`${time}时间内:1方案的输出:${hard1*index}   
    2方案的输出:${hard2*index1}    
    3方案的输出:${hard3*index2}     
    4方案的输出:${hard4*index3}`)
})