// @unocss-include
const seccionVenta = document.querySelector("#seccionVenta");
let ventaHtml = "";
for (const inmueble of propiedadesVenta.slice(0, 3)) {
  const smokeText = inmueble.smoke
    ? `<p class="has-text-success">Permitido fumar</p>`
    : `<p class="has-text-danger">No se permite fumar</p>`;
  const petText = inmueble.pets
    ? `<p class="has-text-success">Mascotas permitidas</p>`
    : `<p class="has-text-danger">No se permiten mascotas</p>`;
  ventaHtml += `
  <article class="card uno-w-96">

    <figure class="card-image">
      <img class="uno-w-full" src="${inmueble.src}">
    </figure>
    <div class="card-content">
      <h2 class="title">${inmueble.nombre}</h2>
      <p>${inmueble.descripcion}</p>
      <p class="uno-text-3xl has-text-white">UF ${inmueble.costo}</p>
      <p class="has-text-primary-light">${inmueble.ubicacion}</p>
      <p>${inmueble.habitaciones} ${inmueble.habitaciones === 1 ? "habitación" : "habitaciones"}</p>
      ${smokeText}
      ${petText}
    </div>
  </article>
  `;
}

seccionVenta.innerHTML = ventaHtml;

const seccionAlquiler = document.querySelector("#seccionAlquiler");
let alquilerHtml = "";
for (const inmueble of propiedadesAlquiler.slice(0, 3)) {
  const smokeText = inmueble.smoke
    ? `<p class="has-text-success">Permitido fumar</p>`
    : `<p class="has-text-danger">No se permite fumar</p>`;
  const petText = inmueble.pets
    ? `<p class="has-text-success">Mascotas permitidas</p>`
    : `<p class="has-text-danger">No se permiten mascotas</p>`;
  alquilerHtml += `
  <article class="card uno-w-96">

    <figure class="card-image">
      <img class="uno-w-full" src="${inmueble.src}">
    </figure>
    <div class="card-content">
      <h2 class="title">${inmueble.nombre}</h2>
      <p>${inmueble.descripcion}</p>
      <p class="uno-text-3xl has-text-white">UF ${inmueble.costo}</p>
      <p class="has-text-primary-light">${inmueble.ubicacion}</p>
      <p>${inmueble.habitaciones} ${inmueble.habitaciones === 1 ? "habitación" : "habitaciones"}</p>
      ${smokeText}
      ${petText}
    </div>
  </article>
  `;
}

seccionAlquiler.innerHTML = alquilerHtml;
