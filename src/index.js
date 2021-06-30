const inputButton = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
// let myLeads = new Array()
let myLeads = ["abc", "adasdsaf", "asgfdgs"]

inputButton.addEventListener("click", function(){
    myLeads.push(inputEl.value)

    // Clear out the input field
    inputEl.value = ""

    renderLeads()
})

const ulEl = document.getElementById("ul-el")

function renderLeads(){
    let listItems = new String()

    // creating list with input domains
    for(let i in myLeads){
        listItems += "<li>" + myLeads[i] + "</li>"
    }
    ulEl.innerHTML = listItems
}

