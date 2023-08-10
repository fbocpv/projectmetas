function logar(){
    var login = document.getElementById("login").value;
    var pass = document.getElementById("pass").value;

    if (login === 'Fabiano' && pass === '927') {
        alert ('Bem vindo Fabiano');
        location.href = "index.html"
    }else if (login === 'Rodolfo' && pass === '928') {
        alert ('Bem vindo Rodolfo');
        location.href = "index.html"
    }else {
        alert("RE ou Usuario INVÁLIDO")
    }
}



