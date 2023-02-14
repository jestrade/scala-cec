const onLoad = () => {
    localStorage.removeItem("username");
}

const login = () => {
    const USERNAME = "admin";
    const PASSWORD = "4dm1n";

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const mensaje = document.getElementById("mensaje");
    mensaje.classList.remove("error");
    mensaje.classList.remove("sucess");

    if (username === "" || password === "") {
        mensaje.classList.add("error");
        mensaje.innerHTML = "Debe diligenciar un usuario y una clave";
        document.getElementById("password").value = "";
    } else if (username === USERNAME && password === PASSWORD) {
        mensaje.classList.add("sucess");
        mensaje.innerHTML = "Bienvenido";
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";

        // petición HTTP al server
        // si la respuesta del server es exitosa, crear el localStorage 
        // y redirigir al usuario a la página de bienvenida

        localStorage.setItem("username", username);
    } else {
        mensaje.classList.add("error");
        mensaje.innerHTML = "Los datos no son válidos";
        document.getElementById("password").value = "";
    }
}