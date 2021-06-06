'use strict';


let leftImageElement=document.getElementById(`left-image`)
let middleImageElement=document.getElementById(`middle-image`)
let rightImageElement=document.getElementById(`right-image`)

let maxAttempt=10;
let attemptCounter=0;

let leftImageIndex;
let rightImageIndex;
let middleImageIndex;

function Product (name,filePath) {
    this.name=name;
    this.filePath=filePath;
    this.repeat=0;
    this.votes=0;
    Product.allProduct.push(this);

}

Product.allProduct=[];

new Product (`bag`,`img/bag.jpg`)
new Product (`banana`,`img/banana.jpg`)
new Product (`bathroom`,`img/bathroom.jpg`)
new Product (`boots`,`img/boots.jpg`)
new Product (`breakfast`,`img/breakfast.jpg`)
new Product (`bubblegum`,`img/bubblegum.jpg`)
new Product (`chair`,`img/chair.jpg`)
new Product (`cthulhu`,`img/cthulhu.jpg`)
new Product (`dog-duck`,`img/dog-duck.jpg`)
new Product (`dragon`,`img/dragon.jpg`)
new Product (`pen`,`img/pen.jpg`)
new Product (`pet-sweep`,`img/pet-sweep.jpg`)
new Product (`scissors`,`img/scissors.jpg`)
new Product (`shark`,`img/shark.jpg`)
new Product (`sweep`,`img/sweep (1).jpg`)
new Product (`tauntaun`,`img/tauntaun.jpg`)
new Product (`unicorn`,`img/unicorn.jpg`)
new Product (`usb`,`img/usb (1).jpg`)
new Product (`water-can`,`img/water-can.jpg`)
new Product (`wine-glass`,`img/wine-glass.jpg`)


function random(){
   return Math.floor(Math.random() * Product.allProduct.length);
}

function render (){

leftImageIndex=random();
middleImageIndex=random();
rightImageIndex=random();

while (leftImageIndex===rightImageIndex) {
    rightImageIndex=random();
    
}

 while (leftImageIndex===middleImageIndex){
    middleImageIndex=random();

}
while (middleImageIndex===rightImageIndex){
    rightImageIndex=random();
}

leftImageElement.src=Product.allProduct[leftImageIndex].filePath;
middleImageElement.src=Product.allProduct[middleImageIndex].filePath;
rightImageElement.src=Product.allProduct[rightImageIndex].filePath;

}

render();


let divElement=document.getElementById('vote-section')
divElement.addEventListener('click', voting )
// leftImageElement.addEventListener('click',voting);
// rightImageElement.addEventListener('click',voting);
// middleImageElement.addEventListener('click',voting);


function voting (event) {
    console.log(event.target.id);
attemptCounter++;

if (attemptCounter <= maxAttempt){
    if (event.target.id==="left-image"){
        Product.allProduct[leftImageIndex].votes++;
        Product.allProduct[leftImageIndex].repeat++;

    }
    else if (event.target.id==='middle-image'){
        Product.allProduct[middleImageIndex].votes++;
        Product.allProduct[middleImageIndex].repeat++;

    }

    else {
        Product.allProduct[rightImageIndex].votes++;
        Product.allProduct[rightImageIndex].repeat++;
    }

    render();
}
else{divElement.removeEventListener('click', voting )

}
    
}

let finalResult=document.getElementById('show-result')
for (let i = 0; i < Product.allProduct.length; i++) {
finalResult=document.textContent=`${Product.allProduct[i].name} has ${Product.allProduct[i].votes} votes and was seen ${Product.allProduct[i].repeat} times `}

