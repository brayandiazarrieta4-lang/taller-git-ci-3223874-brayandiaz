export function agregarItem(texto) {
  const lista = document.getElementById("lista");
  if (!lista) return;

  // 👉 Validación nueva (este cambio hace que Git detecte modificación real)
  if (!texto || texto.trim() === "") {
    console.warn("No se puede agregar un texto vacío");
    return;
  }

  const li = document.createElement("li");
  li.textContent = texto.trim();
  lista.appendChild(li);
}

// función para agregar elemento a la lista