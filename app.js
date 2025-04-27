const btn = document.getElementById("btn")
const list = document.getElementById("list")
const input = document.getElementById("input1")
console.log(btn);
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
        li.textContent = input.value
        list.appendChild(li);
        input.value = ""
    }
    // }
})
