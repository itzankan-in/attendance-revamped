let ham = document.querySelector("#ham")
let sidebar = document.querySelector(".sidebar")
let icoArr = Array.from(document.getElementsByClassName("ico"))
let ppp = Array.from(document.getElementsByClassName("ppp"))
let i =0;
let icons = []
let globalLinkerJson = {}
let loaderSX = document.querySelector(".loader")


  icoArr.forEach((e,i) => {
    e.addEventListener("click",() => {
      e.classList.toggle("selected");
        if(i!=0) {
          icoArr.forEach(k=> {
            if(k!=e) {
              k.classList.remove("selected")
              let sampleArr = Array.from(document.getElementsByClassName("selected"))
              // console.log(sampleArr)
              if(sampleArr.length == 0 || sampleArr[0] == icoArr[1]) {
                  icoArr[1].classList.add("selected")


              }
            }
          })
        }
  })
})
icoArr[1].classList.add("selected")



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
            e.classList.remove("selected")
          
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
  }
})
let cPackage = document.querySelector(".cPakage") 
let charCode1 = `   <div class="carD">
         <p class="pone">
            <div class="hThree">What is an attendance database/tracker??</div>
            <!-- <div class="carD"> -->
         Attendance Dashboard is a tool developed by the KENDRIYA VIDYALAYA SANGATHAN to allow teachers and parents access the attendance data of their respective wards or students very easily.
        </p>
        <div class="hThree">How to use Attendance Database ?</div>
        <div class="pone">Click on the buttons in the sidebar eg. <i class="material-icons">home</i> for home, <i class="material-icons">list</i> for student chart , <i class="material-icons">account_circle</i> for attendance data which will load the desired data for you!</div>
        <div class="hThree">What is the need of a attendance tracking software?</div>
        <div class="pone">An attendance tracking software for a school with a large student count, helps to streamline and automate attendance management processes. It ensures accurate record-keeping, reduces administrative workload, improves transparency between school and parents, enhances security by tracking student whereabouts, and facilitates data-driven decision-making for school management.</div>
        
    </div>`
function home() {
  cPackage.innerHTML = charCode1
}
home();

let homeBtn = document.getElementById("home")
  let list = document.getElementById("slist")
  list.addEventListener("click",() => {cPackage.innerHTML=""})
  homeBtn.addEventListener("click", home)
const linkerApi = "https://script.googleusercontent.com/macros/echo?user_content_key=dc1UIeuQq5Rh2MJIyqKYKeh7lt8FeCBk5NWf7Gw2tLpifS18VNiNmdHzIfMC6V48YLnBkWlBa2Gvj-VeYxQhV6ZZLmbW9eSHm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDlniuB6BzbDp61c13OlwDOApdtF1d4JVv5l5l-Ayvjqyqe2O4UPftU9yHWhXybooUFkTc3tk2K2ZzIOrT5uVeb-Jw6OUZ2ofNz9Jw9Md8uu&lib=MBFcEblXAe2kpuCHxlSDrXtoC2E5UiZmu"
// const linkerApi = "https://raw.githubusercontent.com/itzankan-in/attendance-revamped/master/assets/attendance-temp.json"




//list 




let chartCode2 = `  <div class="sListHolder">
            <div class="dropdown">
                <button class="dropbtn">Choose Class</button>
                <div class="dropdown-content">
                </div>
              <div class="tempura"></div>
            </div>
            
          
           
`
//dropdown work

//dropdown function

function loader(ddcontent,ddbtn,element) {
 loaderSX.style.display = "flex"
 fetch(linkerApi).then(e=>e.json()).then(e => {
 loaderSX.style.display = "none"

  globalLinkerJson = e;
  let applePie = e['data']
  applePie.forEach(e => {
    let a = document.createElement("a")
    a.innerHTML = e["Class"]
    a.setAttribute("class", "chiggo")
    ddcontent.appendChild(a)
  })
  if(element.id === "slist") {
      let aArr = Array.from(document.getElementsByClassName("chiggo"))
          aArr.forEach(e => {
            e.addEventListener("click", () => {
              listRender(e.innerHTML,ddbtn)
              })
  }
)
 } else if(element.id === "adata") {
  let aArr = Array.from(document.getElementsByClassName("chiggo"))
  aArr.forEach(e => {
    e.addEventListener("click", () => {
      adataRender(e.innerHTML,ddbtn)
      })
}
)
 }
  else if(element.id === "pdata") {
  let aArr = Array.from(document.getElementsByClassName("chiggo"))
  aArr.forEach(e => {
    e.addEventListener("click", () => {
      pdataRender(e.innerHTML,ddbtn)
    })
      

      
}
)
 }
 })
}
function pdataRender(__class__,f) {
  let sListHolder = document.querySelector(".tempura1")

  let status;
 
  let localApi = ""
  globalLinkerJson['data'].forEach(e => {
   if(e['Class'] == __class__) {
     if(e["Api-Link"] == undefined) {
       alert("The data for this class have not been added yet")
       localApi = null;
       status = false
     } else {
     localApi = e["Api-Link"]
       status = true
       loaderSX.style.display = "flex"
     }
   }
 })
 fetch(localApi).then(e => e.json()).then(e => {
  sListHolder.innerHTML = ""

  loaderSX.style.display = 'none';
  console.log(e['data'].length)
  e["data"].forEach((f,index) => {
    // console.log(f)
   if(index<(e['data'].length - 3)) {
    let stuDentCard = document.createElement("div")
    stuDentCard.classList.add("profile-card")
    stuDentCard.addEventListener("click", () => { popupRender(e['data'][index],localApi,__class__)} )
    let ij = document.createElement("i")
    ij.setAttribute("class","material-icons tem")
    ij.setAttribute("title",f.Name)
    ij.innerHTML = "person"
    let stdCon = document.createElement("div")
    stdCon.setAttribute("class","stdCon")
    stdCon.setAttribute("title",f.Name)
    stdCon.innerHTML = `${f["Roll-No"]}. ${f.Name}`
    stuDentCard.appendChild(ij)
    stuDentCard.appendChild(stdCon)
    sListHolder.appendChild(stuDentCard)
    
   }
  })
 })
 if(status) {
  
f.innerHTML = __class__;
  } else { sListHolder.innerHTML = "Oops Cant find the  data you requested!" }
  let index = 0;
 

}
function popupRender(studentIndex,api,_class_) {
  console.log(studentIndex, api , _class_)

}
function adataRender(__class__,f) {
  let sListHolder = document.querySelector(".tempura")

  let status;
 
  let localApi = ""
  globalLinkerJson['data'].forEach(e => {
   if(e['Class'] == __class__) {
     if(e["Api-Link"] == undefined) {
       alert("The data for this class have not been added yet")
       localApi = null;
       status = false
     } else {
     localApi = e["Api-Link"]
       status = true
       loaderSX.style.display = "flex"
     }
   }
 })
 if(status) {
  

  sListHolder.innerHTML = ` <div class="hone"> Showing attendance data for ${__class__}</div>
            <div class="mainTable mainTable-special" style="">
                <div class="tr tr-0 tr-special">
                </div> 
  </div>
`
let index = 0;
let mainTable = document.querySelector(".mainTable")
let tr0 = document.querySelector(".tr-0")
if(localApi != null) {
   fetch(localApi).then(e=>e.json()).then(e=>{
     loaderSX.style.display = "none"
     let pseudoIndex = 0;
     if(index === 0) {
      for(let i in e['data'][0]) {
          let th = document.createElement("div")
          if(pseudoIndex<3) {
          th.setAttribute("class","th th-special th-special-1")
          pseudoIndex++
          } else {
          th.setAttribute("class","th th-special")

          }
          th.innerHTML = i
          tr0.appendChild(th)
          index++
      } 
    }
      
      for(let i = 0; i<e['data'].length; i++ ) {
        let tr = document.createElement("div")
        tr.setAttribute("class","tr")
        let pseudoIndex2 = 0; 
         
        for(let j in e['data'][i]) {
          let td = document.createElement("div")
          if(pseudoIndex2<3) {
            td.setAttribute("class", `td td${i%2} td-special td-special-1`)
            pseudoIndex2++
            td.innerHTML = e['data'][i][j]
          } else {
            td.setAttribute("class", `td td${i%2} td-special`)
              td.innerHTML = e['data'][i][j] == 0 ? "A" : e['data'][i][j] === "A"? "A": 'P'; 
           
            
          
          }
          
          tr.appendChild(td)
        }
        mainTable.appendChild(tr)
      }
    
    
  })
}  
 
f.innerHTML = __class__;

  } else { sListHolder.innerHTML = "Oops Cant find the  data you requested!" }
  


}

function listRender(e,f) {
 
  let sListHolder = document.querySelector(".tempura")
  if(tableRender(e)) {
  

  sListHolder.innerHTML = ` <div class="hone"> Showing students data for ${e}</div>
            <div class="mainTable">
                <div class="tr tr-0">
                    <div class="th roll">Roll Number</div>
                    <div class="th admn">Admission number</div>
                    <div class="th name">Name</div>
                </div> 
  </div>
`
  
f.innerHTML = e;
  } else { sListHolder.innerHTML = "Oops Cant find the  data you requested!" }
} 

function tableRender(__class__) {
  let status;
 
 let localApi = ""
 globalLinkerJson['data'].forEach(e => {
  if(e['Class'] == __class__) {
    if(e["Api-Link"] == undefined) {
      alert("The data for this class have not been added yet") 
      localApi = null;
      status = false
    } else {
    localApi = e["Api-Link"]
      status = true
      loaderSX.style.display = "flex"
    }
  }
})
if(localApi != null) {
    fetch(localApi).then(e=>e.json()).then(e=>{
      loaderSX.style.display = "none"
      
      e['data'].forEach((f , i) => {
        if(f.Name.toLowerCase() === "absent"||f.Name.toLowerCase() === "present"||f.Name.toLowerCase() === "total"){}
        else { let tr = document.createElement("div")
        tr.setAttribute("class","tr")
        let index = 0;
        for(k in f) {
          if(index<3) {
          let td = document.createElement("div")
          td.setAttribute(`class`,`td td${(i%2)==1? 0 : 1}`);
          td.innerHTML = f[k];
          tr.appendChild(td)
          index++
          }
        }
        document.querySelector(".mainTable").appendChild(tr)
    }})
    
  })

}
return status

}





let sList = document.querySelector("#slist")
sList.addEventListener("click", () => {
  if(sList.classList.contains("selected")) {
    listLoader(sList)
  } else {
    home()
    
  }
  
})
let adata = document.querySelector("#adata")
adata.addEventListener("click", () => {
  if(adata.classList.contains("selected")) {
    listLoader(adata)
  } else {
    home()
    
  }
  
})
let pdata = document.querySelector("#pdata")
pdata.addEventListener("click", () => {
  if(pdata.classList.contains("selected")) {
    listLoader(pdata,true)
  } else {
    home()
    
  }
  
})

function listLoader(x, e=null) {
  if(e) {
  cPackage.innerHTML = `<div class="sListHolder">
            <div class="dropdown">
                <button class="dropbtn">Choose Class</button>
                <div class="dropdown-content">
                </div>
              <div class="tempura1"></div>

            </div>`
} else {
  cPackage.innerHTML = chartCode2

}
    const dropbtn = document.querySelector(".dropbtn");
    const dropdownContent = document.querySelector(".dropdown-content");
    dropbtn.addEventListener("click", function() {
        dropdownContent.classList.toggle("show");
    });
   
    window.addEventListener("click", function(event) {
        if (!event.target.matches('.dropbtn')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });

  loader(dropdownContent,dropbtn,x)


 

  
}





