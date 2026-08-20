/* =========================================================
   CONTENIDO EDITABLE
   =========================================================
   Esta es la zona principal que tendrás que tocar en el futuro.

   - Para cambiar una foto: modifica "image".
   - Para cambiar un texto: modifica "title", "dedication", "giftTitle" o "giftText".
   - Para el viaje del motivo 7: cambia TRAVEL_DESTINATION.
   - Para fotos de Amanda y Alma: cambia GALLERY_REASON_9.

   IMPORTANTE: conserva las comillas y las comas.
   ========================================================= */

// ===== CAMBIA AQUÍ EL DESTINO DEL VIAJE DEL MOTIVO 7 =====
const TRAVEL_DESTINATION = "Destino sorpresa";
// Ejemplo cuando lo sepas:
// const TRAVEL_DESTINATION = "Lisboa";

// ===== FOTOS DEL MOTIVO 9: Amanda + Alma =====
const GALLERY_REASON_9 = [
  "alma1.jpg",
  "alma2.jpg",
  "alma3.jpg",
  "alma4.jpg"
];

const reasons = [
  {
    number: 1,
    title: "Porque tienes un corazón enorme",
    dedication: [
      "Me enamoró de ti la forma en la que quieres a los demás. Tu empatía, tu capacidad para preocuparte de verdad por las personas que quieres y cómo lo das todo por ellas."
    ],
    giftTitle: "Cita sin que tengas que pensar en nada",
    giftText: "Una cita sorpresa completamente organizada por mí: lugar, hora, reserva… tú sólo déjate llevar.",
    image: null
  },
  {
    number: 2,
    title: "Porque tu risa me hace más feliz",
    dedication: [
      "Después de tantos años, me sigue encantando tu risa contagiosa y verte reír, tus tonterías y la forma en la que haces el tonto. Mi vida es más divertida contigo."
    ],
    giftTitle: "Noche de juegos",
    giftText: "Hacer el TikTok de tortillazos en la cara con agua en la boca, TikTok de botellazo con antifaz… ¡vamos a reírnos!",
    image: null,
    gallery: [
      "motivo2_gafas.jpg",
      "motivo2_sevilla.jpg"
    ]
  },
  {
    number: 3,
    title: "Porque contigo puedo ser completamente yo",
    dedication: [
      "Contigo aprendí a abrirme, a hablar de mis sentimientos y a enseñar partes de mí que nunca había sido capaz de mostrar al resto."
    ],
    giftTitle: "Charla tranquila",
    giftText: "Preparar una cena en casa con ambiente tranquilo y sin móviles para hablar sobre nosotros.",
    image: null
  },
  {
    number: 4,
    title: "Porque me has enseñado a vivir más en el presente",
    dedication: [
      "Yo siempre he pensado en el futuro: qué tengo que hacer después o qué pasará mañana o la semana que viene. Tú me has enseñado que también hay que parar y disfrutar del presente y de lo que tenemos hoy."
    ],
    giftTitle: "Solo este momento",
    giftText: "Velas en casa, música tranquila, sin móviles y cinco minutos frente a frente, cogidos de la mano y respirando juntos profundamente. Sin hablar, sin mañana y sin ‘qué hacemos después’.",
    image: null
  },
  {
    number: 5,
    title: "Porque hemos crecido juntos",
    dedication: [
      "No somos las mismas personas que empezaron esta relación hace trece años. Hemos cambiado, aprendido, cometido errores y superado momentos difíciles. Y lo más importante, lo hemos hecho juntos, y una parte enorme de la persona que soy hoy existe gracias a ti."
    ],
    giftTitle: "Volver al principio",
    giftText: "Hacer una lasaña una noche como la noche en la que nos dimos nuestro primer beso.",
    image: "motivo5.jpg"
  },
  {
    number: 6,
    title: "Porque convertiste nuestra casa en un hogar",
    dedication: [
      "Me encanta la ilusión con la que cuidas nuestra casa, cómo siempre estás pensando qué podemos cambiar, decorar, arreglar o mejorar. Porque sé que para ti es lo más importante de tu vida y la has convertido en mi hogar y el mejor lugar para que crezca nuestra familia."
    ],
    giftTitle: "Un regalo para nuestro hogar",
    giftText: "Una vez terminemos la obra, comprar un elemento decorativo nuevo que nos encante a los dos.",
    image: null
  },
  {
    number: 7,
    title: "Porque mi lugar favorito para viajar siempre será contigo",
    dedication: [
      "Me encanta conocer lugares nuevos contigo porque cuando viajamos siento que nos compenetramos al 100% y todo es fácil. Hemos vivido algunos de nuestros mejores recuerdos viajando juntos y ahora hay algo todavía más bonito: poder empezar a enseñarle el mundo a Alma contigo.",
      "Por eso este regalo es para ti, pero también es para mí. Porque no se me ocurre un regalo mejor para mi cumpleaños que pasar ese fin de semana fuera de casa contigo y con Alma."
    ],
    giftTitle: "Nuestro próximo viaje",
    giftText: "Viaje programado para el fin de semana de mi cumpleaños.",
    image: null,
    special: "travel"
  },
  {
    number: 8,
    title: "Porque tu manera de cuidar siempre me enseñó la madre que algún día serías",
    dedication: [
      "Mucho antes de que llegara Alma ya había algo que me hacía imaginar la madre que serías: la forma en la que cuidabas a Sweet, Miko y Seven, cómo te preocupas por ellos y cómo los quieres como parte de nuestra familia. Viéndote con ellos ya sabía que serías la mejor mami del mundo."
    ],
    giftTitle: "Los cinco juntos",
    giftText: "Una excursión o escapada de día a algún lugar nuevo al que podamos ir con Alma, Miko y Seven.",
    image: null,
    gallery: [
      "motivo8_atardecer.jpg",
      "motivo8_perros.jpg"
    ]
  },
  {
    number: 9,
    title: "Porque verte convertirte en mamá ha hecho que vuelva a enamorarme de ti",
    dedication: [
      "Después de trece años pensaba que ya conocía todas las versiones de ti de las que podía enamorarme. Entonces llegó Alma y apareció una nueva. Admiro muchísimo cómo la quieres, la cuidas, cómo te preocupas por hacerlo bien y aprender cada día para ser la mejor madre posible."
    ],
    giftTitle: "Sesión de fotos de mami y Alma",
    giftText: "Irnos un día a un sitio bonito y hacer una sesión de fotos.",
    image: null,
    special: "gallery"
  },
  {
    number: 10,
    title: "Porque eres mucho más fuerte de lo que tú misma crees",
    dedication: [
      "Este año me has demostrado lo valiente y fuerte que eres. En uno de los años más difíciles de nuestra vida has seguido luchando, insistiendo, confiando, intentando cuidarte y trabajando cada día para mejorar."
    ],
    giftTitle: "Ahora te toca cuidarte a ti",
    giftText: "Un masaje, tratamiento, spa o algo que sea exclusivamente para ella.",
    image: null
  },
  {
    number: 11,
    title: "Porque nuestra familia siempre está en tu corazón",
    dedication: [
      "Me encanta la ilusión que pones en nuestra familia: pensar en planes, celebrar momentos especiales, cuidar los pequeños detalles y conseguir que muchos días normales terminen siendo muy especiales."
    ],
    giftTitle: "Nuestra nueva tradición",
    giftText: "Inventar una tradición familiar que hagamos todos los años.",
    image: null
  },
  {
    number: 12,
    title: "Porque siempre encuentras la manera",
    dedication: [
      "Me encanta que nunca aceptes un ‘no se puede’. Si algo se rompe, buscas cómo arreglarlo. Si quieres hacer algo, investigas cómo hacerlo. Pruebas, aprendes, inventas y vuelves a intentarlo. Me encanta lo manitas que eres, pero todavía más lo que dice eso de ti."
    ],
    giftTitle: "Esta vez aprendemos juntos",
    giftText: "Hacer una actividad que ninguno de los dos sepamos hacer: cerámica, taller de cocinar sushi, pintar, hacer velas, etc.",
    image: null
  },
  {
    number: 13,
    title: "Porque te volvería a elegir",
    // En este motivo la dedicatoria se muestra progresivamente.
    dedication: [],
    finalBlocks: [
      "Después de trece años no podemos decir que nuestra historia haya sido perfecta y mucho menos fácil. Hemos vivido momentos increíbles, pero también otros que probablemente ninguno habría elegido vivir.",
      "Hemos cambiado, nos hemos equivocado, hemos discutido, hemos aprendido, pero lo más importante es que todas las situaciones difíciles las hemos superado juntos.",
      "Por eso, si hoy pudiera volver trece años atrás sabiendo todo lo que iba a ocurrir, volvería a hacerlo.",
      "Porque después de todo, sigo sabiendo que contigo es con quien más feliz soy.",
      "Y si tuviera que volver a elegir, volvería a elegirte a ti."
    ],
    giftTitle: "Nuestro año 14",
    giftText: "12 planes para priorizarnos.",
    image: "portada.jpg",
    special: "final"
  }
];

/* =========================================================
   FUNCIONAMIENTO
   A partir de aquí no necesitas cambiar nada para personalizarla.
   ========================================================= */

const introScreen = document.getElementById("introScreen");
const reasonScreen = document.getElementById("reasonScreen");
const endingScreen = document.getElementById("endingScreen");

const startButton = document.getElementById("startButton");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const homeButton = document.getElementById("homeButton");
const restartButton = document.getElementById("restartButton");

const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const reasonCard = document.getElementById("reasonCard");
const reasonNumber = document.getElementById("reasonNumber");
const reasonTitle = document.getElementById("reasonTitle");
const reasonDedication = document.getElementById("reasonDedication");

const reasonMedia = document.getElementById("reasonMedia");
const reasonImage = document.getElementById("reasonImage");
const imageHint = document.getElementById("imageHint");

const revealButton = document.getElementById("revealButton");
const giftReveal = document.getElementById("giftReveal");
const giftTitle = document.getElementById("giftTitle");
const giftText = document.getElementById("giftText");

const travelReveal = document.getElementById("travelReveal");
const destinationButton = document.getElementById("destinationButton");
const destinationPanel = document.getElementById("destinationPanel");
const destinationText = document.getElementById("destinationText");

const photoGallery = document.getElementById("photoGallery");

const finalSequence = document.getElementById("finalSequence");
const continueFinalButton = document.getElementById("continueFinalButton");


let currentIndex = 0;
let finalBlockIndex = 0;

function showScreen(screen) {
  [introScreen, reasonScreen, endingScreen].forEach(el => el.classList.remove("is-active"));
  screen.classList.add("is-active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderReason(index) {
  const reason = reasons[index];
  currentIndex = index;
  finalBlockIndex = 0;

  progressText.textContent = `${reason.number} / 13`;
  progressBar.style.width = `${(reason.number / 13) * 100}%`;

  prevButton.disabled = index === 0;
  reasonNumber.textContent = `Razón ${String(reason.number).padStart(2, "0")}`;
  reasonTitle.textContent = reason.title;

  reasonDedication.innerHTML = "";
  reason.dedication.forEach(paragraph => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    reasonDedication.appendChild(p);
  });

  giftTitle.textContent = reason.giftTitle;
  giftText.textContent = reason.giftText;

  giftReveal.hidden = true;
  revealButton.hidden = false;
  revealButton.innerHTML = `Descubrir el regalo <span aria-hidden="true">♡</span>`;

  travelReveal.hidden = true;
  destinationPanel.hidden = true;
  destinationButton.hidden = false;
  destinationText.textContent = TRAVEL_DESTINATION;

  photoGallery.hidden = true;
  photoGallery.innerHTML = "";

  finalSequence.hidden = true;
  finalSequence.querySelectorAll(".final-block").forEach(el => el.remove());
  continueFinalButton.hidden = false;
  nextButton.hidden = false;
  reasonCard.classList.toggle("is-final", reason.special === "final");

  // Imagen principal opcional
  if (reason.image) {
    reasonMedia.hidden = false;
    reasonImage.classList.remove("image-missing");
    reasonImage.src = reason.image;
    reasonImage.alt = `Recuerdo para la razón ${reason.number}`;
    imageHint.textContent = reason.image;
  } else {
    reasonMedia.hidden = true;
    reasonImage.removeAttribute("src");
  }

  // Galerías: motivos 2 y 8 (2 fotos) y motivo 9 (4 fotos)
  if (reason.gallery) {
    buildGallery(reason.gallery);
    photoGallery.classList.toggle("two-items", reason.gallery.length === 2);
    photoGallery.hidden = false;
  } else if (reason.special === "gallery") {
    buildGallery(GALLERY_REASON_9);
    photoGallery.classList.remove("two-items");
    photoGallery.hidden = false;
  }

  // Motivo 13: no mostramos toda la dedicatoria al entrar
  if (reason.special === "final") {
    reasonDedication.innerHTML = `
      <p>Hay una última razón que quiero contarte despacio.</p>
    `;
    revealButton.innerHTML = `Leer la última razón <span aria-hidden="true">♡</span>`;
    nextButton.hidden = true;
  }

  showScreen(reasonScreen);
}

function buildGallery(images) {
  images.forEach((src, index) => {
    const item = document.createElement("div");
    item.className = "gallery-item";

    const img = document.createElement("img");
    img.src = src;
    img.alt = `Amanda y Alma · foto ${index + 1}`;
    img.loading = "lazy";
    img.addEventListener("error", () => img.classList.add("image-missing"));

    const placeholder = document.createElement("div");
    placeholder.className = "gallery-placeholder";
    placeholder.textContent = `Añade ${src}`;

    item.append(img, placeholder);
    photoGallery.appendChild(item);
  });
}

function revealGift() {
  const reason = reasons[currentIndex];

  if (reason.special === "final") {
    revealButton.hidden = true;
    finalSequence.hidden = false;
    appendNextFinalBlock();
    return;
  }

  revealButton.hidden = true;
  giftReveal.hidden = false;

  if (reason.special === "travel") {
    travelReveal.hidden = false;
  }

  giftReveal.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function appendNextFinalBlock() {
  const reason = reasons[currentIndex];

  if (finalBlockIndex < reason.finalBlocks.length) {
    const block = document.createElement("p");
    block.className = "final-block";
    if (finalBlockIndex === reason.finalBlocks.length - 1) {
      block.classList.add("emphasis");
    }
    block.textContent = reason.finalBlocks[finalBlockIndex];

    finalSequence.insertBefore(block, continueFinalButton);
    finalBlockIndex += 1;

    if (finalBlockIndex === reason.finalBlocks.length) {
      continueFinalButton.innerHTML = `Descubrir nuestro año 14 <span aria-hidden="true">♡</span>`;
    } else {
      continueFinalButton.innerHTML = `Seguir leyendo <span aria-hidden="true">↓</span>`;
    }

    requestAnimationFrame(() => {
      block.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
    return;
  }

  // Tras leer todos los bloques, aparece el regalo final
  continueFinalButton.hidden = true;
  giftReveal.hidden = false;
  nextButton.hidden = false;
  nextButton.innerHTML = `Terminar <span aria-hidden="true">→</span>`;
  giftReveal.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

startButton.addEventListener("click", () => renderReason(0));

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    renderReason(currentIndex - 1);
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex < reasons.length - 1) {
    renderReason(currentIndex + 1);
  } else {
    showScreen(endingScreen);
  }
});

homeButton.addEventListener("click", () => showScreen(introScreen));

restartButton.addEventListener("click", () => {
  currentIndex = 0;
  nextButton.innerHTML = `Siguiente razón <span aria-hidden="true">→</span>`;
  showScreen(introScreen);
});

revealButton.addEventListener("click", revealGift);
continueFinalButton.addEventListener("click", appendNextFinalBlock);

destinationButton.addEventListener("click", () => {
  destinationButton.hidden = true;
  destinationPanel.hidden = false;
  destinationPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

