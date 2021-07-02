const inputButton = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
let myLeads = new Array()
const ulEl = document.getElementById("ul-el")

let deleteButton = document.getElementById("delete-btn")

// Get the loeads from the localStorage
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

inputButton.addEventListener("click", function () {

    myLeads.push(inputEl.value)
    // Clear out the input field
    inputEl.value = ""

    // save the myLeads array to localStorage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    renderLeads()
})

function renderLeads() {
    let listItems = new String()

    // creating list with input links to websites
    for (let i in myLeads) {

        listItems += `<li>
                            <a targer="_blank" href="${myLeads[i]}"> 
                                ${myLeads[i]} 
                            </a>
                        </li>`
    }
    ulEl.innerHTML = listItems
}

deleteButton.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = new Array()
    renderLeads()
})