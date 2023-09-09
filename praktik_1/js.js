let pasword = 222;
let number = 0;
let bullen = false;
while(bullen){
if (number == pasword) {
    bullen = true;
    console.log(number);
    console.log(true)
}
else {
    
    number++;
    console.log(number);
    console.log(false);
    
}
setTimeout(0.5);
}
