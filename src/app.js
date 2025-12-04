export function suma(a, b) {
  return a + b;
}

export function agregarItem(texto) {
  const lista = document.getElementById("lista");
  if (!lista) return;
  const li = document.createElement("li");
  li.textContent = texto;
  lista.appendChild(li);
}

console.log("App lista");

document.getElementById("btnAgregar")?.addEventListener("click", () => {
  agregarItem("Elemento nuevo");
});