const inputButton = document.getElementById("input-btn")

// let myLeads = new Array()
let myLeads = ["abc", "adasdsaf", "asgfdgs"]
const inputEl = document.getElementById("input-el")

inputButton.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for(let i in myLeads){
    console.log(myLeads[i])
}