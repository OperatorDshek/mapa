const hospitalData = {
  orizaba: {
    nombre: "HGR Orizaba",
    imagen: "hospitales/orizaba.jpg",
    descripcion: "Hospital General Regional de Orizaba. Atiende especialidades médicas y quirúrgicas."
  },
  cordoba: {
    nombre: "HGZ 8 Córdoba",
    imagen: "hospitales/cordoba.jpg",
    descripcion: "Hospital General de Zona número 8 en Córdoba. Atención médica general."
  },
  minatitlan: {
    nombre: "HGZ 32 Minatitlán",
    imagen: "hospitales/minatitlan.jpg",
    descripcion: "Brinda servicios médicos de primer y segundo nivel en la región sur."
  },
  coatzacoalcos: {
    nombre: "HGZ 36 Coatzacoalcos",
    imagen: "hospitales/coatzacoalcos.jpg",
    descripcion: "Unidad médica con atención especializada para la zona costera."
  },
  cosamaloapan: {
    nombre: "HGZ 35 Cosamaloapan",
    imagen: "hospitales/cosamaloapan.jpg",
    descripcion: "Hospital regional con servicios de urgencias, consulta externa y hospitalización."
  },
  potrero: {
    nombre: "HGSZ 12 Potrero",
    imagen: "hospitales/potrero.jpg",
    descripcion: "Hospital general de subzona. Atención médica de primer nivel."
  },
  omealca: {
    nombre: "HGSZ 16 Omealca",
    imagen: "hospitales/omealca.jpg",
    descripcion: "Clínica de atención médica básica para comunidades rurales."
  },
  cosolapa: {
    nombre: "HGSZ 19 Cosolapa",
    imagen: "hospitales/cosolapa.jpg",
    descripcion: "Unidad médica de zona rural con servicios básicos de salud."
  },
  tierrablanca: {
    nombre: "HGSZ 33 Tierra Blanca",
    imagen: "hospitales/tierrablanca.jpg",
    descripcion: "Hospital con servicios de medicina general y promoción a la salud."
  }
};

const tooltip = document.getElementById("tooltip");
const tooltipImg = document.getElementById("tooltip-img");
const tooltipInfo = document.getElementById("tooltip-info");

document.querySelectorAll(".icono-hospital").forEach(icono => {
  icono.addEventListener("mouseenter", e => {
    const id = icono.dataset.hospital;
    const data = hospitalData[id];
    if (data) {
      tooltipImg.src = data.imagen;
      tooltipInfo.innerHTML = `<strong>${data.nombre}</strong><br>${data.descripcion}`;
      tooltip.classList.remove("hidden");
      const rect = icono.getBoundingClientRect();
      tooltip.style.top = `${rect.top + window.scrollY - 10}px`;
      tooltip.style.left = `${rect.left + window.scrollX + 30}px`;
    }
  });

  icono.addEventListener("mouseleave", () => {
    tooltip.classList.add("hidden");
  });
});
