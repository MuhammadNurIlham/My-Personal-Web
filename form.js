function submitData() {
    let name = document.getElementById('input-name').value
    let email = document.getElementById('input-email').value
    let phone = document.getElementById('input-phone').value
    let subject = document.getElementById('input-subject').value
    let message = document.getElementById('input-message').value
    let checkbox = document.getElementById('checkbox').checked

    if (name == '' || email == '' || phone == '' || subject == '' || message == '' || checkbox == false) {
        return alert("Semua Form harus diisi yaa brayy...")
    }

let emailReceiver = 'muhnilham99@gmail.com'
let a = document.createElement('a')
a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo my name ${name}, ${message}`
a.click()
}