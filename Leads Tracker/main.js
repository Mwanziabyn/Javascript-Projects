let myleads = []
const inputEl = document.getElementById("input-el") 
const btnEl = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myleads")) 

console.log(leadsFromLocalStorage)

if(leadsFromLocalStorage) {
    myleads = leadsFromLocalStorage
    render(myleads)
}


tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myleads.push(tabs[0].url)
        localStorage.setItem("myleads", JSON.stringify(myleads))
        render(myleads)
    })    
})

function render(lead) {
    let listItems = ""
    for (i = 0; i < lead.length; i++) {
     listItems +=
    `<li>
        <a target = '_blank' href ='${lead[i]}'>
             ${lead[i]}
        </a>
    </li>`
    }
    
    ulEl.innerHTML = listItems
}


deleteBtn.addEventListener("dblclick", function() {
    console.log("Double Click")
    localStorage.clear()
    myleads = []
    render(myleads)
})

btnEl.addEventListener("click", function() {
    myleads.push(inputEl.value)
    inputEl.value=''
    localStorage.setItem("myleads",JSON.stringify(myleads))
    render(myleads)

    console.log( localStorage.getItem("myleads"))
})


