
//övning 1
// const ButtonContainer=document.querySelector(".buttons")
// const buttons=ButtonContainer.querySelectorAll("button")

// // buttons[0].addEventListener("click",function(){
// //     document.body.style="background-color:"+this.innerText
// // })
// for(let button of buttons){
//     button.addEventListener("click",function(){
//         document.body.style="background-color:"+button.innerText
//     })
// }



const ColorInput=document.querySelector(".color-input")
const colors=["red","green","blue","yellow","hotpink","peachpuff","peru"]
const errorClasses=document.querySelector(".error").classList

function setColor(color){
    document.body.style =`background-color: ${color}` 
    errorClasses.remove("visible")
}

function hideError(){
    errorClasses.add("visible")
}

function validColor(color){
    return colors.includes(color)
}

function clearList(){
    const ul=document.querySelector(".color-list")
    ul.querySelectorAll("li").forEach(li =>li.remove())
}

function hideList(){
    const ul=document.querySelector(".color-list")
    ul.classList.remove("visible")
}

function showList(){
    const ul=document.querySelector(".color-list")
    ul.classList.add("visible")
}


ColorInput.addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        if(validColor(ColorInput.value)){
            setColor(ColorInput.value)   
        }else{
            hideError()
        }
        
    }else{
        const matchingColors = colors.filter(color=>color.includes(ColorInput.value))
        // []
        // for(let color of colors){
        //     if(color.startsWith(ColorInput.value)){
        //         matchingColors.push(color)
        //     }
        // }
        clearList()
        const ul=document.querySelector(".color-list")
        
        if(ColorInput.value.length>0 && matchingColors.length>0){
            showList()
            for(let color of matchingColors){
            const li=document.createElement("li")
            li.innerText=color
            ul.append(li)

            li.addEventListener("click",function(event){
                setColor(event.target.innerText)
            })
            }
        }else{
            hideList()
        }
        
    }

})



