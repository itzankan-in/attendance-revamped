let ham = document.querySelector("#ham")
let sidebar = document.querySelector(".sidebar")
let icoArr = Array.from(document.getElementsByClassName("ico"))
let ppp = Array.from(document.getElementsByClassName("ppp"))
let i =0;
let icons = []



  icoArr.forEach((e,i) => {
    e.addEventListener("click",() => {
      e.classList.toggle("whiteAf");
        if(i!=0) {
          icoArr.forEach(k=> {
            if(k!=e) {
              k.classList.remove("whiteAf")
              let sampleArr = Array.from(document.getElementsByClassName("whiteAf"))
              // console.log(sampleArr)
              if(sampleArr.length == 0 || sampleArr[0] == icoArr[1]) {
                  icoArr[1].classList.add("whiteAf")
              }
            }
          })
        }
  })
})
icoArr[1].classList.add("whiteAf")



let expand = () => {

    if(i==0){
      sidebar.style.width = "30rem"
      ++i
      icoArr.forEach(e => {
        if(e.classList.contains("hamburger")) {
          e.style.alignSelf = "flex-start"
         
        } else {
            e.style.width = "90%"
            // e.setAttribute("class","sp ico tm")
          e.classList.remove("nonTm")

          e.classList.add("tm")
          
        }
        let sampleBuffer = 0;
       
        setTimeout(() => {
          ppp.forEach((e,i) => {
            e.style.display = "block";
           })
        }, 80);
      })
    } else if(i==1) {
      sidebar.style.width = sidebar.style.minWidth = "7rem"      
      i--
      icoArr.forEach(e => {
        if(e.classList.contains("hamburger")) {} else {
          setTimeout(() => {
            e.classList.add("nonTm")

          e.classList.remove("tm")
          
          }, 100);
          ppp.forEach((e,i) => {
            e.style.display = "none";
           })
        }
    })

}}

document.querySelector(".github").onclick = () => {
  window.open("https://github.com/itzankan-in")
}
ham.addEventListener("click",expand)




let title = document.querySelector(".title")
title.addEventListener("click", () => {
  console.log(title.textContent)
  if(title.textContent === "PM Shri Kendriya Vidyalaya Berhampore") {
    title.textContent = "पीएम श्री केन्द्रीय विद्यालय बरहामपुर"
    // console.log("hi")
  } else {
    title.textContent = "PM Shri Kendriya Vidyalaya Berhampore"
    // console.log("u suck")
  }
}) 
