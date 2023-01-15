const element = document. querySelector('title') 
console.log(element)
element.style.display = " text-align:center"


const element1 = document. getElementsByTagName ('li')
console.log(element1)
element1[0].style.color = 'red'
element1[1].style.color = 'blue'
element1[2].style.color = 'brown'
element1[3].style.color = 'yellow'
element1[4].style.color = 'green'


const element2 = document.querySelectorAll('li')
console.log(element2)


const mario3 = document.querySelector('.mario3')
console.log(mario3)
const image1 = document.querySelector("#image1");
console.log(image1)
image1.addEventListener('click',() =>{
mario3.play()
})


for(let i=0; i<10; i++){
const image = document.getElementById("image1") 
image.addEventListener( "click", (event) => 
{ image.style.marginRight = "140%"
console.log (event);
console.log(event.currentTarget);
image.style.marginLeft = "70%"

})
}

const mario4 = document.querySelector('.mario4')
console.log(mario4)
const image2 = document.querySelector("#image2");
console.log(image2)
image2.addEventListener('click',() =>{
mario4.play()
})

const mario5 = document.querySelector('.mario5')
console.log(mario5)
const image3 = document.querySelector("#image3");
console.log(image3)
image3.addEventListener('click',() =>{
mario5.play()
})

const mario6 = document.querySelector('.mario6')
console.log(mario6)
const image4 = document.querySelector("#image4");
console.log(image4)
image4.addEventListener('click',() =>{
mario6.play()
})

const mario7 = document.querySelector('.mario7')
console.log(mario7)
const image5 = document.querySelector("#image5");
console.log(image5)
image5.addEventListener('click',() =>{
mario7.play()
})

const mario8 = document.querySelector('.mario8')
console.log(mario8)
const image6 = document.querySelector("#image6");
console.log(image6)
image6.addEventListener('click',() =>{
mario8.play()
})


















































