const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const elLista = document.querySelectorAll(".lista li");
  elLista.forEach((el) => {
    el.remove();
  });

  const listaEL = document.querySelector(".lista");

  for (let item of cosasQueAprendimos) {
    const listElement = document.createElement("li");
    listElement.innerHTML = item.tema;
    const claseAAsignar = item.class || "cosaAprendida";
    listElement.classList.add(claseAAsignar);

    listaEL.appendChild(listElement);
  }
}

main();
