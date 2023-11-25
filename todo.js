var ul = document.getElementById("list-container")
var input = document.getElementById("ipbox")

var addbtn = document.getElementById("btn1")
addbtn.addEventListener("click",function()
{
var listitem = document.createElement("li")
listitem.innerHTML = input.value + "<button onclick='deleteItem(event)'style='margin-left: 5px; padding-left: 10px;'>Delete</button>"
ul.append(listitem)
})

function deleteItem(event)
{
event.target.parentElement.remove()
}