document.querySelector(".startGame span").onclick = function (){
    let name = prompt('Enter Your Name');
    if (name == null || name == "") {
        document.querySelector(".name span").innerHTML= "UnKnown";
    }else{
        document.querySelector(".name span").innerHTML= name;
    }

    document.querySelector(".startGame").remove();
}


let blocksContainer = document.querySelector(".game-container");

let blocks = Array.from(blocksContainer.children);

let orderRange = [...Array(blocks.length).keys()]

console.log(orderRange);
shuffle(orderRange);
console.log(orderRange);



blocks.forEach((block,index)=>{
    block.style.order = orderRange[index]

    block.addEventListener("click",function(){
        flipBlock(block);
    })
}) 

function flipBlock(selectedBlock)
{
    selectedBlock.classList.add('isfliped')

    let allFlipedBlocks = blocks.filter(flipedBlock => flipedBlock.classList.contains("isfliped"));

    if (allFlipedBlocks.length===2) {
        noClicking();
        checkMatch(allFlipedBlocks[0],allFlipedBlocks[1])
    }
}

function noClicking(){
    blocksContainer.classList.add('noClicking')

    setTimeout(()=>{
    blocksContainer.classList.remove('noClicking')

    },1000)
}


function checkMatch(firstBlock,secondBlock)
{
    let tries = document.querySelector(".tries span");
 
    if (firstBlock.dataset.tecnology === secondBlock.dataset.tecnology) {
        firstBlock.classList.remove("isfliped");
        secondBlock.classList.remove("isfliped");

        firstBlock.classList.add("matched");
        secondBlock.classList.add("matched");
    }else if (firstBlock.dataset.tecnology !== secondBlock.dataset.tecnology) 
        
    {
        tries.innerHTML = parseInt(tries.innerHTML)+1;

        setTimeout(()=>{
            firstBlock.classList.remove("isfliped");
            secondBlock.classList.remove("isfliped");
        
            },1000)
        
    }

}


function shuffle(array){
    let current = array.length
        ,temp
        ,random;

    while(current>0)
    {
        random = Math.floor(Math.random()*current)
        current--;

        temp = array[current];
        array[current] = array[random]
        array[random]= temp;
    }

}

