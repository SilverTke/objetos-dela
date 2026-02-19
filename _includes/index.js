// @unocss-include
const seccionVenta = document.querySelector("#seccionVenta");
let html = "";
for (const inmueble of propiedadesVenta) {
  html += `
  <article class="card uno-w-96">
    <figure class="card-image">
      <img src="${inmueble.src}">
    </figure>
    <div class="card-content">
      <h2 class="title">${inmueble.nombre}</h2>
      <p>${inmueble.descripcion}</p>
    </div>
  </article>
  `;
}

seccionVenta.innerHTML = html;
