const box = document.getElementById("box")
const button = document.getElementById("button")
const images = []
images.push("https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?cs=srgb&dl=pexels-pixabay-414102.jpg&fm=jpg")
images.push("https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80")
images.push("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg")
images.push("https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg")

for (let i = 0; i < images.length; i++){
    const img = document.createElement('img')
    img.src = images[i]
    box.appendChild(img)
}

function toggle(){
    if (button.innerText === "Hide"){
        button.innerText = "Show"
        box.style.display = "none"
    }  else {
        button.innerText = "Hide"
        box.style.display = "flex"
    }
}