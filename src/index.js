const inputButton = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const binTabButton = document.getElementById("tab-btn")
const deleteButton = document.getElementById("delete-btn")
let myLeads = []

// Get the loeads from the localStorage
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

console.log("xxxxxxxxxxxxxxxxxxxxxxxx")

inputButton.addEventListener("click", function () {

    myLeads.push(inputEl.value)
    // Clear out the input field
    inputEl.value = ""

    // save the myLeads array to localStorage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    render(myLeads)
})

deleteButton.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

// bin active tab to myLeads
binTabButton.addEventListener("click", function () {

            // specification of which tab
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

function render(leads) {
    let listItems = ""

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
