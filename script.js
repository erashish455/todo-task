var parent = document.getElementById('list');

function addList(value) {
    let a = document.getElementById('input').value
    if (a == '' && value == 'a') {
        alert("You must write something!");
    } else {
        if (value == 'b') {
            document.getElementById('list').innerHTML = ''
            b = ''
            document.getElementById('input').value = ''
        } else {
            let child = document.createElement('li')
            var button = document.createElement('button')
            child.innerHTML = a
            button.innerHTML = 'X'
            button.setAttribute('class', 'btn btn-outline-danger')
            child.append(button)
                //button.setAttribute('onClick', "this.parentElement.style.display = 'none';")
            button.setAttribute('onClick', "this.parentNode.parentNode.removeChild(this.parentNode);")
            parent.append(child)
            document.getElementById('input').value = null
        }

    }
}