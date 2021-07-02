const inputButton = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
let myLeads = new Array()

// Get the loeads from the localStorage
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocalStorage != null) {
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

const ulEl = document.getElementById("ul-el")

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

localStorage.setItem("myLeads", "")

