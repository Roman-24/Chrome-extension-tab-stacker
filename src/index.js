
const inputButton = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const binTabButton = document.getElementById("tab-btn")
const deleteButton = document.getElementById("delete-btn")

let myLeads = []

const regex = new RegExp('^(http|https)://')
const regex2 = new RegExp('^(www.)')

// Get the loeads from the localStorage
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}


inputButton.addEventListener("click", function () {

    // if manual input link does not have https part 
    // add https part
    let myInput = inputEl.value
    if (myInput.search(regex) == -1){
        myInput = "https://" + myInput
    }

    myLeads.push(myInput)

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
    for (let i in leads) {

        // cleaning url for <a> content
        let myUrl = leads[i].replace(regex, "")
        myUrl = myUrl.replace(regex2, "")

        // creating string for ulEl.innerHTML
        listItems += `<li>
                            <a href="${leads[i]}" target="_blank"> 
                                ${myUrl}
                            </a>
                        </li>`
    }
    ulEl.innerHTML = listItems
}
