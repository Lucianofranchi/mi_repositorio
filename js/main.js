const raquetas = [
    {
        marca : "Wilson",
        linea : "Edicion 2000",
        modelo: "615",
        encordado:"16x16",
        precio: 2000
    },
    {
        marca : "Dunlop",
        linea : "Edicion junior",
        modelo: "121",
        encordado:"13x13",
        precio: 1200
    },
    {
        marca : "Babolat",
        linea : "Edicion limitada",
        modelo: "10",
        encordado:"16x19",
        precio: 7000
    },

];

const ul = document.createElement("ul");

for (const raquetas of raqueta){
    const li = document.createElement("li")
    li.innerHTML = "<strong>" + raqueta.alias + "<strong>";
    ul.append(li);
}
document.getElementById("contenedor").append(ul);

const form = document.getElementById("ingreso-jugador");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formulario= e.target;

    const jugador = { 
        alias: formulario[0].value,
        nombre: formulario[1].value,
        edad: parseInt(formulario[2].value)
    }
    const tabla = document.getElementById("tabla");
    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${jugador.alias}</td>
        <td>${jugador.nombre}</td>
        <td>${jugador.edad}</td>
    `;

    tabla.append(tr);
});