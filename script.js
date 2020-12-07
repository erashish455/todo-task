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
            var parent = document.getElementById('list');
            let child = document.createElement('li')
            var button = document.createElement('button')
            var button2 = document.createElement('button')

            button.setAttribute('class', 'btn btn-outline-danger')
            button2.setAttribute('class', 'btn btn-outline-danger')

            child.innerHTML = a
            button.innerHTML = 'X'
            button2.innerHTML = 'edit'
            child.append(button, button2)
            parent.append(child)
            button.setAttribute('onClick', "this.parentNode.parentNode.removeChild(this.parentNode);")
            button2.setAttribute('onClick', "edit('this')")
            document.getElementById('input').value = null
        }

    }
}

function edit(e) {
    console.log('andar aaya')
    var temp = this.parent
    console.log(temp)
        // var temp2 = prompt(temp)
        // this.innerHTML = temp2

}

function swap() {
    document.
}
document.getElementById('.notDone li').addEventListener('onclick', swap())