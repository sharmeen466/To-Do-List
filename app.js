const btn = document.getElementById("btn")
const list = document.getElementById("list")
const input = document.getElementById("input1")

btn.addEventListener("click", function () {
    if (input.value === "") {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...🥺',
            text: '✍️ Write Something!',
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 2000
        });
    }
    else {
        const li = document.createElement("li")
        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "X"
        deleteBtn.classList.add("delete")
        const edit = document.createElement("button")
        edit.textContent = "Edit"
        edit.classList.add("editBtn")
        const mark = document.createElement("input")
        mark.type = "checkbox"
        const div = document.createElement("div")
        
        li.textContent = input.value
        list.appendChild(li);
        div.appendChild(mark);
        div.appendChild(edit)
        div.appendChild(deleteBtn)
        li.appendChild(div)
        input.value = ""
        deleteBtn.addEventListener("click", function () {
            li.classList.toggle("remove")
        })
        mark.addEventListener("click", function () {
            li.classList.toggle("disable")
        })
        edit.addEventListener("click", function(){
            console.log(edit); 
        })
    }
})
