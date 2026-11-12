/**
 * ============================================================================
 * AEGISKEY PRO — PROTOTIPO INTERACTIVO 3D (PRODUCTO, MARCA, ENVASE, ETIQUETA)
 * ============================================================================
 */

/* ============================================================================
   1. DATOS DEL LABORATORIO CROMÁTICO APLICADO AL PRODUCTO (SECCIÓN 2)
   ============================================================================ */
const COLOR_PSYCHOLOGY_DATA = {
  obsidian: {
    id: "obsidian",
    name: "Negro Obsidiana (Obsidian Matte)",
    hex: "#0B0F19",
    proportion: "60% del Diseño Total",
    whereApplied: "Chasis Unibody de Aleación de Zinc + Funda Exterior Rígida Soft-Touch + Cuna Antiestática ESD",
    badgeText: "60% DOMINANTE · BLINDAJE Y EXCLUSIVIDAD",
    accentBorder: "#475569",
    psychology:
      "Transmite impenetrabilidad criptográfica, autoridad ejecutiva y solidez estructural. A diferencia de un plástico brillante común, el acabado negro obsidiana mate elimina reflejos y proyecta un dispositivo táctico indestructible.",
    marketingJustification:
      "Se aplica como color base (60%) en todo el cuerpo metálico de la llave y en el exterior de la caja Slider Box para posicionar a AegisKey Pro como hardware de seguridad de gama alta y hacer que el anillo LED esmeralda destaque al instante."
  },
  emerald: {
    id: "emerald",
    name: "Verde Esmeralda Cibernético (Cyber Emerald)",
    hex: "#10B981",
    proportion: "20% del Diseño Total",
    whereApplied: "Anillo LED Biométrico 360° + Banda Deslizante del Cajón + Sello de Autenticidad",
    badgeText: "20% ACENTO PRIMARIO · BIOMETRÍA ACTIVA",
    accentBorder: "#10B981",
    psychology:
      "Universalmente codificado en el cerebro del usuario como 'Identidad Verificada', 'Acceso Autorizado' y 'Estado Seguro'. Su matiz esmeralda aporta una firma tecnológica moderna e inconfundible.",
    marketingJustification:
      "Guía visualmente la acción del usuario: en la llave rodea el sensor de huella indicando dónde tocar; en el envase colorea la banda lateral derecha indicando exactamente por dónde deslizar para abrir la caja."
  },
  cobalt: {
    id: "cobalt",
    name: "Azul Cobalto Confianza (Trust Cobalt)",
    hex: "#3B82F6",
    proportion: "10% del Diseño Total",
    whereApplied: "Indicador Inalámbrico NFC + Arquitectura de Circuito EAL6+ + Certificaciones B2B",
    badgeText: "10% ACENTO SECUNDARIO · CONFIANZA CORPORATIVA",
    accentBorder: "#3B82F6",
    psychology:
      "El azul cobalto es el estándar psicológico de la banca, la ingeniería de sistemas y la nube corporativa: reduce la percepción de riesgo y comunica precisión técnica y cumplimiento normativo.",
    marketingJustification:
      "Se utiliza para identificar la zona de antena sin contacto NFC ISO 14443 sobre el chasis y para resaltar los sellos de seguridad empresarial (EAL6+ / FIDO2) en la caja y el etiquetado."
  },
  titanium: {
    id: "titanium",
    name: "Blanco Titanio (Pure Titanium)",
    hex: "#F8FAFC",
    proportion: "10% del Diseño Total",
    whereApplied: "Grabado Láser Indeleble en Chasis + Tipografía Técnica y Normativa de la Etiqueta",
    badgeText: "10% CONTRASTE · CLARIDAD Y TRANSPARENCIA",
    accentBorder: "#F8FAFC",
    psychology:
      "Comunica pureza matemática, transparencia legal y orden informativo. Sobre el fondo Negro Obsidiana genera un contraste superior a 17:1 (nivel AAA), garantizando lectura sin esfuerzo.",
    marketingJustification:
      "Aplicado mediante grabado láser micrométrico sobre el metal para que la marca y el número de serie jamás se borren con el uso diario, y en la etiqueta posterior para permitir la lectura de especificaciones en menos de 10 segundos."
  }
};

/* ============================================================================
   2. DATOS DE LOS 4 HOTSPOTS DEL ENVASE 3D (SECCIÓN 3)
   ============================================================================ */
const PACKAGING_HOTSPOTS_DATA = {
  1: {
    number: "01",
    title: "Tipo de Envase: Primario ESD + Secundario Slider Box",
    subtitle: "Caja exterior a la izquierda y cuna extraída a la derecha",
    category: "ARQUITECTURA DE EMPAQUE",
    camera: { rx: -14, ry: -8, openPct: 100 },
    summary:
      "Diseño estructural de doble capa: una funda rígida exterior de deslizamiento horizontal (Secundario, a la izquierda) y una cuna anatómica interior (Primario, a la derecha) que aloja la llave AegisKey Pro, el adaptador USB-C a USB-A y la tarjeta QR.",
    bullets: [
      {
        label: "Envase Primario (Cuna Interna Extraída a la Derecha)",
        text: "Bandeja termoformada de pulpa de caña de alta densidad con recubrimiento antiestático ESD que inmoviliza los 3 componentes."
      },
      {
        label: "Envase Secundario (Caja Rígida Slider a la Izquierda)",
        text: "Funda telescópica indeformable que funciona como estuche permanente de resguardo ejecutivo, evitando plásticos desechables."
      }
    ],
    metricLabel: "Resistencia Estructural",
    metricValue: "45 kgf · Compresión ISO 2248"
  },
  2: {
    number: "02",
    title: "Materiales: Cartón FSC 1200 g/m², Soft-Touch y Espuma ESD",
    subtitle: "Protección contra descargas electrostáticas y sostenibilidad",
    category: "CIENCIA DE MATERIALES",
    camera: { rx: -22, ry: -12, openPct: 100 },
    summary:
      "Materiales seleccionados para blindar el microchip Secure Element EAL6+ contra electricidad estática y humedad durante el transporte internacional.",
    bullets: [
      {
        label: "Blindaje Electrostático (Espuma Conductiva ESD)",
        text: "Disipa cargas electrostáticas (10⁴ a 10⁹ Ω) evitando que la fricción logística dañe el sensor biométrico o el chip criptográfico."
      },
      {
        label: "Cartón Reciclado FSC + Laminado Soft-Touch + Tintas de Soya",
        text: "Acabado mate aterciopelado antihuellas impreso con tintas vegetales libres de metales pesados (RoHS Compliant)."
      }
    ],
    metricLabel: "Certificación ESD / Eco",
    metricValue: "IEC 61340-5-1 · 100% FSC Reciclable"
  },
  3: {
    number: "03",
    title: "Seguridad Física: Sello Holográfico Tamper-Evident (VOID)",
    subtitle: "Al deslizar o abrir la caja, el sello se desprende y revela VOID",
    category: "CADENA DE SUMINISTRO",
    camera: { rx: -10, ry: -72, openPct: 25 },
    summary:
      "Ubicado en la unión entre la funda negra y la banda verde esmeralda. En cuanto se intenta abrir o deslizar el cajón, el sello se despega físicamente y revela el patrón irreversible 'VOID / ABIERTO'.",
    bullets: [
      {
        label: "Desprendimiento Automático al Abrir",
        text: "Al abrir el envase más del 5%, el sello de seguridad se fractura dejando evidencia visual permanente de apertura."
      },
      {
        label: "Holograma Difractivo Serializado",
        text: "Vinculado al número de serie S/N: AKP-884920-NI impreso en la etiqueta lateral y posterior."
      }
    ],
    metricLabel: "Nivel de Seguridad Logística",
    metricValue: "Tamper-Evident Grado Bancario"
  },
  4: {
    number: "04",
    title: "Atracción al Consumidor y Etiquetado + QR en 3D",
    subtitle: "Reverso con Etiqueta Normativa, EAN-13 y Código QR Vectorial",
    category: "NEUROMARKETING Y ETIQUETADO",
    camera: { rx: -6, ry: 180, openPct: 0 },
    summary:
      "El contraste entre el negro mate profundo, el brillo en relieve del logotipo (Spot UV) y el etiquetado completo en el reverso (con Código QR vectorial nítido y código de barras EAN-13) genera confianza inmediata.",
    bullets: [
      {
        label: "Experiencia de Joyería Tecnológica",
        text: "Eleva el valor percibido del producto y elimina la disonancia cognitiva al proyectar calidad de grado militar/ejecutivo."
      },
      {
        label: "Código QR y EAN-13 Integrados en el Modelo 3D",
        text: "Tanto el reverso de la caja 3D como la tarjeta interna incluyen el código QR vectorial funcional para la guía de inicio rápido."
      }
    ],
    metricLabel: "Tiempo de Validación en Caja",
    metricValue: "< 10 segundos (Lectura Rápida)"
  }
};

/* ============================================================================
   3. DATOS DEL INSPECTOR DE ETIQUETADO (SECCIÓN 4)
   ============================================================================ */
const LABEL_ZONES_DATA = {
  all: {
    title: "Vista Integral de la Etiqueta Física (Posterior y Lateral)",
    badge: "INSPECCIÓN COMPLETA · 4 ZONAS",
    description:
      "La etiqueta física de AegisKey Pro (presente también en el reverso y lomo de la caja 3D) organiza la información en 4 bloques jerárquicos: identidad comercial, especificaciones criptográficas, guía rápida en 3 pasos y certificaciones legales con trazabilidad.",
    marketingImpact:
      "Elimina la incertidumbre técnica del comprador: en menos de 10 segundos confirma compatibilidad con FIDO2, USB-C/NFC y su sistema operativo.",
    checklist: [
      "Encabezado con logotipo, modelo AKP-2026-BIO, origen y eslogan oficial.",
      "Especificaciones en JetBrains Mono: FIDO2, USB-C + NFC, EAL6+, 5V DC ⎓ 50mA.",
      "Instrucciones ilustradas en 3 pasos claros (Sello → Conexión → Huella).",
      "Certificaciones CE, FCC, RoHS, RAEE, Reciclable, Humedad + EAN-13 + S/N + Lote + QR."
    ]
  },
  identidad: {
    title: "Zona 1: Encabezado de Marca e Identificación",
    badge: "ZONA 1 · IDENTIDAD",
    description:
      "Corona la etiqueta con el escudo vectorial AegisKey Pro, el código de modelo AKP-2026-BIO, el país de origen y el eslogan «Tu identidad física. Tu seguridad absoluta.»",
    marketingImpact:
      "Refuerza el posicionamiento de autoridad y facilita la identificación exacta del modelo en inventarios corporativos.",
    checklist: [
      "Logotipo oficial AegisKey Pro y denominación Hardware Security Key.",
      "Modelo industrial: MOD: AKP-2026-BIO.",
      "Origen: Ensamblado en Taiwán · Estándar ISO/IEC 27001.",
      "Eslogan persuasivo en tipografía destacada."
    ]
  },
  especificaciones: {
    title: "Zona 2: Características Principales e Información Técnica",
    badge: "ZONA 2 · ESPECIFICACIONES",
    description:
      "Presenta los protocolos soportados, doble interfaz física/inalámbrica, nivel de seguridad del chip, sistemas operativos compatibles y tensión nominal.",
    marketingImpact:
      "Responde de inmediato las preguntas técnicas del comprador (Ingeniero IT / DevSecOps) sin obligarlo a buscar hojas de datos externas.",
    checklist: [
      "Protocolos: FIDO2, WebAuthn, U2F, OTP, OpenPGP 3.4.",
      "Conectividad: USB-C 3.2 (Oro 24K) + NFC (ISO 14443).",
      "Criptografía: Elemento Seguro EAL6+, ECC P-256 / Ed25519.",
      "Compatibilidad: Windows 11, macOS, Linux, Android, iOS, GitHub, Google, AWS, Entra ID.",
      "Entrada eléctrica nominal: 5V DC ⎓ 50mA."
    ]
  },
  instrucciones: {
    title: "Zona 3: Instrucciones de Uso Paso a Paso",
    badge: "ZONA 3 · INSTRUCCIONES",
    description:
      "Secuencia operativa en 3 pasos directos que guía al usuario desde la verificación del sello de seguridad hasta el toque biométrico.",
    marketingImpact:
      "Demuestra que la criptografía avanzada es fácil de usar (Plug & Play), reduciendo el temor a la complejidad técnica.",
    checklist: [
      "Paso 1: Verifique que el sello holográfico de seguridad esté intacto antes de abrir.",
      "Paso 2: Inserte la AegisKey Pro en el puerto USB-C o acérquela al lector NFC.",
      "Paso 3: Registre su huella en su SO y toque el sensor cuando el LED parpadee en verde."
    ]
  },
  normativas: {
    title: "Zona 4: Simbología Normativa, Ambiental y Trazabilidad",
    badge: "ZONA 4 · NORMATIVAS Y CÓDIGOS",
    description:
      "Integra los 6 símbolos regulatorios internacionales, el código de barras vectorial EAN-13, el número de serie único, el lote y el código QR interactivo.",
    marketingImpact:
      "Aporta validez legal ante aduanas y auditorías empresariales, garantizando trazabilidad total contra falsificaciones.",
    checklist: [
      "Certificaciones: CE, FCC, RoHS Compliant.",
      "Símbolos ambientales: RAEE (No desechar en basura doméstica), Reciclable y Proteger de la humedad.",
      "Código de barras EAN-13 (7401000202614), S/N: AKP-884920-NI y LOT: 11-2026.",
      "Código QR funcional para guía de inicio rápido."
    ]
  }
};

/* ============================================================================
   UTILIDAD PARA BOTONES ACTIVOS EN VERDE ESMERALDA
   ============================================================================ */
function setButtonActiveGreen(buttonsNodeList, activeBtn) {
  buttonsNodeList.forEach((btn) => {
    const isActive = btn === activeBtn;
    if (isActive) {
      btn.classList.remove("border-slate-700", "border-slate-800", "bg-slate-900", "text-slate-300", "text-slate-200", "text-blue-300", "border-blue-500/40", "border-emerald-500/40");
      btn.classList.add("border-emerald-400", "bg-emerald-500", "text-slate-950", "font-bold", "shadow-[0_0_12px_rgba(16,185,129,0.4)]");
    } else {
      btn.classList.remove("border-emerald-400", "border-emerald-500", "bg-emerald-500", "bg-emerald-500/15", "text-slate-950", "text-emerald-300", "font-bold", "shadow-[0_0_12px_rgba(16,185,129,0.4)]");
      btn.classList.add("border-slate-700", "bg-slate-900", "text-slate-300");
    }
  });
}

/* ============================================================================
   INICIALIZACIÓN GENERAL
   ============================================================================ */
document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  initNavigationAndScrollSpy();
  initHardware3DAndBiometrics();
  initBrandColorPsychology();
  initUnboxing3DSimulator();
  initLabelInspector();
  renderAllEAN13Barcodes();
});

/* ============================================================================
   1. NAVEGACIÓN Y SCROLL SPY
   ============================================================================ */
function initNavigationAndScrollSpy() {
  const mobileMenuBtn = document.getElementById("btn-mobile-menu");
  const mobileMenuPanel = document.getElementById("mobile-menu-panel");
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (mobileMenuBtn && mobileMenuPanel) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenuPanel.classList.toggle("hidden");
    });
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => mobileMenuPanel.classList.add("hidden"));
    });
  }

  const sections = ["producto", "marca", "envase", "etiquetado"];
  window.addEventListener(
    "scroll",
    () => {
      let currentSection = "producto";
      const scrollPosition = window.scrollY + 140;

      sections.forEach((secId) => {
        const el = document.getElementById(secId);
        if (el && scrollPosition >= el.offsetTop) {
          currentSection = secId;
        }
      });

      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${currentSection}`);
      });
    },
    { passive: true }
  );
}

/* ============================================================================
   2. VISOR 3D DE LA LLAVE Y SIMULADOR BIOMÉTRICO (SECCIÓN 1: PRODUCTO)
   ============================================================================ */
function initHardware3DAndBiometrics() {
  const keyStage = document.getElementById("key-3d-stage");
  const keyPivot = document.getElementById("key-3d-pivot");
  const keyAngleBtns = document.querySelectorAll(".key-cam-btn");

  let keyRx = 14;
  let keyRy = -16;
  let isDraggingKey = false;
  let startX = 0;
  let startY = 0;

  const updateKeyTransform = (smooth = false) => {
    if (!keyPivot) return;
    keyPivot.classList.toggle("smooth-camera", smooth);
    keyPivot.style.transform = `rotateX(${keyRx}deg) rotateY(${keyRy}deg)`;
  };

  if (keyStage && keyPivot) {
    keyStage.addEventListener("pointerdown", (e) => {
      if (e.target.closest("button")) return;
      isDraggingKey = true;
      startX = e.clientX;
      startY = e.clientY;
      keyStage.setPointerCapture(e.pointerId);
    });

    keyStage.addEventListener("pointermove", (e) => {
      if (!isDraggingKey) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      startX = e.clientX;
      startY = e.clientY;
      keyRy += dx * 0.55;
      keyRx = Math.max(-65, Math.min(65, keyRx - dy * 0.45));
      updateKeyTransform(false);
    });

    const stopKeyDrag = () => {
      isDraggingKey = false;
    };
    keyStage.addEventListener("pointerup", stopKeyDrag);
    keyStage.addEventListener("pointercancel", stopKeyDrag);
  }

  // Botones de Ángulo 3D de la Llave (Se marcan en verde esmeralda al hacer clic)
  keyAngleBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      keyRx = Number(btn.dataset.rx || 0);
      keyRy = Number(btn.dataset.ry || 0);
      updateKeyTransform(true);
      setButtonActiveGreen(keyAngleBtns, btn);
    });
  });

  // Simulación de Autenticación Biométrica y Rayos-X
  const btnSimulateBio = document.getElementById("btn-simulate-bio");
  const btnToggleXray = document.getElementById("btn-toggle-xray");
  const sensorGroup = document.getElementById("svg-fingerprint-sensor-group");
  const hardwareContainer = document.getElementById("hardware-interactive-container");
  const statusBadge = document.getElementById("bio-status-badge");
  const statusText = document.getElementById("bio-status-text");
  const cryptoOutput = document.getElementById("bio-crypto-telemetry");
  const btnLabel = document.getElementById("btn-simulate-bio-label");

  let isScanning = false;
  let scanTimer1 = null;
  let scanTimer2 = null;

  const triggerBiometricAuth = () => {
    if (isScanning || !hardwareContainer) return;
    isScanning = true;
    clearTimeout(scanTimer1);
    clearTimeout(scanTimer2);

    keyRx = 14;
    keyRy = -16;
    updateKeyTransform(true);
    if (keyAngleBtns.length) setButtonActiveGreen(keyAngleBtns, keyAngleBtns[0]);

    hardwareContainer.classList.remove("auth-success");
    hardwareContainer.classList.add("scanning-active");

    if (btnLabel) btnLabel.textContent = "Escaneando Huella 360°...";
    if (statusBadge) {
      statusBadge.className =
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 animate-pulse";
    }
    if (statusText) statusText.textContent = "LEYENDO SENSOR CAPACITIVO 360°...";
    if (cryptoOutput) {
      cryptoOutput.innerHTML = `<span class="text-emerald-400">[MATCH-ON-CHIP]</span> Verificando minucias dactilares en Secure Element EAL6+...`;
    }

    scanTimer1 = setTimeout(() => {
      hardwareContainer.classList.remove("scanning-active");
      hardwareContainer.classList.add("auth-success");

      const randomHex = Array.from({ length: 12 }, () =>
        Math.floor(Math.random() * 16).toString(16)
      )
        .join("")
        .toUpperCase();

      if (btnLabel) btnLabel.textContent = "¡Identidad Física Verificada!";
      if (statusBadge) {
        statusBadge.className =
          "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/30 text-emerald-200 border border-emerald-400";
      }
      if (statusText) statusText.textContent = "ACCESO CONCEDIDO · LED ESMERALDA ACTIVO";
      if (cryptoOutput) {
        cryptoOutput.innerHTML = `<span class="text-emerald-400 font-semibold">✓ FIRMA ECDSA P-256:</span> <span class="text-white">0x9A4F...${randomHex}</span> · <span class="text-blue-400">Token FIDO2 OK</span>`;
      }

      scanTimer2 = setTimeout(() => {
        isScanning = false;
        if (btnLabel) btnLabel.textContent = "Simular Autenticación Biométrica";
      }, 2600);
    }, 1600);
  };

  if (btnSimulateBio) btnSimulateBio.addEventListener("click", triggerBiometricAuth);
  if (sensorGroup) sensorGroup.addEventListener("click", triggerBiometricAuth);

  if (btnToggleXray && hardwareContainer) {
    btnToggleXray.addEventListener("click", () => {
      const isXray = hardwareContainer.classList.toggle("xray-mode");
      const spanText = btnToggleXray.querySelector("span");
      btnToggleXray.classList.toggle("border-emerald-400", isXray);
      btnToggleXray.classList.toggle("bg-emerald-500/20", isXray);
      btnToggleXray.classList.toggle("text-emerald-300", isXray);
      if (spanText) {
        spanText.textContent = isXray ? "Ocultar Rayos-X" : "Vista Rayos-X (Chip EAL6+ / NFC)";
      }
    });
  }
}

/* ============================================================================
   3. LABORATORIO CROMÁTICO INTUITIVO CON MAPA DE APLICACIÓN VISUAL (SECCIÓN 2)
   ============================================================================ */
function initBrandColorPsychology() {
  const swatchButtons = document.querySelectorAll(".color-swatch-card");
  const colorParts = document.querySelectorAll("[data-color-part]");

  const detailPreview = document.getElementById("color-detail-preview");
  const detailName = document.getElementById("color-detail-name");
  const detailHex = document.getElementById("color-detail-hex");
  const detailProportion = document.getElementById("color-detail-proportion");
  const detailWhere = document.getElementById("color-detail-where");
  const detailBadge = document.getElementById("color-detail-badge");
  const detailPsychology = document.getElementById("color-detail-psychology");
  const detailMarketing = document.getElementById("color-detail-marketing");
  const btnShowAllParts = document.getElementById("btn-color-show-all");

  const highlightProductColor = (colorKey) => {
    const data = COLOR_PSYCHOLOGY_DATA[colorKey];
    if (!data) return;

    swatchButtons.forEach((btn) => {
      const active = btn.dataset.color === colorKey;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    colorParts.forEach((part) => {
      if (part.dataset.colorPart === colorKey) {
        part.classList.remove("color-zone-dimmed");
        part.classList.add("color-zone-active");
      } else {
        part.classList.remove("color-zone-active");
        part.classList.add("color-zone-dimmed");
      }
    });

    if (detailPreview) {
      detailPreview.style.backgroundColor = data.hex;
      detailPreview.style.borderColor = data.accentBorder;
    }
    if (detailName) detailName.textContent = data.name;
    if (detailHex) detailHex.textContent = data.hex;
    if (detailProportion) detailProportion.textContent = data.proportion;
    if (detailWhere) detailWhere.textContent = data.whereApplied;
    if (detailBadge) detailBadge.textContent = data.badgeText;
    if (detailPsychology) detailPsychology.textContent = data.psychology;
    if (detailMarketing) detailMarketing.textContent = data.marketingJustification;
  };

  swatchButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      highlightProductColor(btn.dataset.color);
    });
  });

  if (btnShowAllParts) {
    btnShowAllParts.addEventListener("click", () => {
      colorParts.forEach((part) => {
        part.classList.remove("color-zone-dimmed", "color-zone-active");
      });
      showToast("Mostrando todos los colores integrados en el producto y envase.");
    });
  }
}

/* ============================================================================
   4. SIMULADOR DE UNBOXING 3D INTERACTIVO Y HOTSPOTS (SECCIÓN 3: ENVASE)
   ============================================================================ */
function initUnboxing3DSimulator() {
  const viewport3D = document.getElementById("unboxing-3d-viewport");
  const boxScene = document.getElementById("box-3d-scene");
  const outerSleeve = document.getElementById("box-outer-sleeve-3d");
  const innerDrawer = document.getElementById("box-inner-drawer-3d");
  const drawerSlider = document.getElementById("unboxing-sleeve-slider");
  const sliderPctLabel = document.getElementById("unboxing-slider-pct");
  const stateTabButtons = document.querySelectorAll(".unboxing-tab-btn");
  const camPresetButtons = document.querySelectorAll(".box-cam-btn");
  const hotspotsPanel = document.getElementById("unboxing-hotspot-panel");
  const stateInfoPanel = document.getElementById("unboxing-general-info-panel");
  const hotspotPins = document.querySelectorAll(".pkg-hotspot-3d");

  const btnTestTamper = document.getElementById("btn-test-tamper-seal");
  const tamperSeals = document.querySelectorAll(".interactive-tamper-seal");
  const tamperStatusText = document.getElementById("tamper-seal-status-label");
  const extractedBadge = document.getElementById("unboxing-extracted-status-badge");

  let boxRx = -16;
  let boxRy = -28;
  let isDraggingBox = false;
  let prevX = 0;
  let prevY = 0;
  let manualTamperForced = false;

  const setBoxRotation = (rx, ry, smooth = true) => {
    boxRx = rx;
    boxRy = ry;
    if (!boxScene) return;
    boxScene.classList.toggle("smooth-camera", smooth);
    boxScene.style.transform = `rotateX(${boxRx}deg) rotateY(${boxRy}deg)`;
  };

  // Actualiza visualmente el estado del sello Tamper-Evident (intacto vs desprendido/VOID)
  const updateTamperSealVisuals = (isBroken, openPct = 0) => {
    tamperSeals.forEach((seal) => {
      seal.classList.toggle("tampered", isBroken);
      seal.classList.toggle("peeled-open", openPct > 4);
      if (isBroken) {
        seal.innerHTML = `<span class="font-mono font-extrabold text-white text-[6.5px] leading-tight block">⚠️ VOID / ABIERTO</span>`;
      } else {
        seal.innerHTML = `<span class="font-mono font-bold text-slate-950 text-[6.5px] leading-tight block">🛡️ SELLO INTACTO</span>`;
      }
    });

    if (tamperStatusText) {
      if (openPct > 4) {
        tamperStatusText.innerHTML = `<span class="text-amber-400 font-semibold">🔓 Sello Desprendido al Abrir (${openPct}%):</span> Al deslizar la cuna fuera de la caja, el sello de seguridad se despega automáticamente revelando el patrón irreversible <strong>"VOID / ABIERTO"</strong>.`;
      } else if (isBroken) {
        tamperStatusText.innerHTML = `<span class="text-red-400 font-semibold">⚠️ Evidencia de Manipulación Activada:</span> El sello en el borde derecho reveló de forma irreversible <strong>"VOID / ABIERTO"</strong>.`;
      } else {
        tamperStatusText.innerHTML = `<span class="text-emerald-400 font-semibold">🛡️ Sello Holográfico Intacto (Caja Cerrada 0%):</span> Garantiza la integridad de la cadena de suministro antes de abrir.`;
      }
    }

    if (btnTestTamper) {
      const span = btnTestTamper.querySelector("span");
      if (span) {
        span.textContent = isBroken
          ? "Restaurar Sello de Fábrica (Cerrar Caja)"
          : "Simular Violación del Sello (VOID)";
      }
    }
  };

  // Abre o cierra la caja 3D y resalta el espacio independiente del contenido extraído a la derecha
  const standaloneTray = document.getElementById("standalone-extracted-tray");

  const setDrawerOpenPercentage = (pct) => {
    const clamped = Math.max(0, Math.min(100, Number(pct)));
    if (drawerSlider) drawerSlider.value = String(clamped);
    if (sliderPctLabel) sliderPctLabel.textContent = `${clamped}% Abierto`;

    const ratio = clamped / 100;

    if (outerSleeve) {
      // Mantiene la caja 3D centrada en su visor izquierdo con un desplazamiento limpio
      const leftShift = -(ratio * 34);
      outerSleeve.style.transform = `translateX(${leftShift.toFixed(1)}px)`;
    }

    if (innerDrawer) {
      // Desliza la bandeja 3D fuera de la caja hacia la derecha
      const rightShift = ratio * 95;
      const zForward = ratio * 6;
      innerDrawer.style.transform = `translateX(${rightShift.toFixed(1)}px) translateZ(${zForward.toFixed(1)}px)`;
    }

    if (extractedBadge) {
      if (clamped > 4) {
        extractedBadge.textContent = `✓ CAJA ABIERTA (${clamped}%) · CONTENIDO EXTRAÍDO`;
        extractedBadge.className =
          "px-2.5 py-1 rounded-full bg-emerald-500 text-slate-950 font-mono text-[10px] font-bold shadow-[0_0_12px_rgba(16,185,129,0.5)]";
      } else {
        extractedBadge.textContent = "3 ELEMENTOS INCLUIDOS";
        extractedBadge.className =
          "px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-mono text-[10px] font-bold";
      }
    }

    if (standaloneTray) {
      standaloneTray.classList.toggle("border-emerald-400", clamped > 4);
      standaloneTray.classList.toggle("shadow-[0_0_35px_rgba(16,185,129,0.28)]", clamped > 4);
    }

    // Cuando se simula abrir la caja, el sello se va quitando automáticamente
    const sealBrokenNow = clamped > 4 || manualTamperForced;
    updateTamperSealVisuals(sealBrokenNow, clamped);
  };

  // Rotación 3D Libre con Mouse / Touch sobre la Caja 3D
  if (viewport3D && boxScene) {
    viewport3D.addEventListener("pointerdown", (e) => {
      if (e.target.closest("button") || e.target.closest("input") || e.target.closest(".qr-3d-clickable")) return;
      isDraggingBox = true;
      prevX = e.clientX;
      prevY = e.clientY;
      viewport3D.setPointerCapture(e.pointerId);
    });

    viewport3D.addEventListener("pointermove", (e) => {
      if (!isDraggingBox) return;
      const dx = e.clientX - prevX;
      const dy = e.clientY - prevY;
      prevX = e.clientX;
      prevY = e.clientY;
      boxRy += dx * 0.55;
      boxRx = Math.max(-75, Math.min(75, boxRx - dy * 0.45));
      setBoxRotation(boxRx, boxRy, false);
    });

    const endDrag = () => {
      isDraggingBox = false;
    };
    viewport3D.addEventListener("pointerup", endDrag);
    viewport3D.addEventListener("pointercancel", endDrag);
  }

  // Control deslizante manual de apertura del cajón 3D
  if (drawerSlider) {
    drawerSlider.addEventListener("input", (e) => {
      const val = Number(e.target.value);
      // Si el usuario abre más del 40%, orientar suavemente para ver Caja (Izquierda) + Contenido (Derecha)
      if (val > 40 && Math.abs(boxRy) > 45) {
        setBoxRotation(-14, -8, true);
      }
      setDrawerOpenPercentage(val);
    });
  }

  // Botones de Cámara 3D Rápida (Se marcan en verde esmeralda al seleccionarlos)
  camPresetButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const rx = Number(btn.dataset.rx || -16);
      const ry = Number(btn.dataset.ry || -28);
      const open = btn.dataset.open;
      setBoxRotation(rx, ry, true);
      if (open !== undefined) {
        setDrawerOpenPercentage(Number(open));
      }
      setButtonActiveGreen(camPresetButtons, btn);
    });
  });

  // Cambio entre los 3 Modos Principales del Simulador 3D
  const switchUnboxingMode = (mode) => {
    stateTabButtons.forEach((btn) => {
      const active = btn.dataset.unboxingState === String(mode);
      btn.classList.toggle("bg-emerald-500", active);
      btn.classList.toggle("text-slate-950", active);
      btn.classList.toggle("border-emerald-400", active);
      btn.classList.toggle("bg-slate-900", !active);
      btn.classList.toggle("text-slate-300", !active);
      btn.classList.toggle("border-slate-800", !active);
    });

    if (mode === "1") {
      // Estado 1: Caja Cerrada 3D
      manualTamperForced = false;
      setDrawerOpenPercentage(0);
      setBoxRotation(-16, -28, true);
      if (camPresetButtons.length) setButtonActiveGreen(camPresetButtons, camPresetButtons[0]);
      hotspotPins.forEach((p) => p.classList.add("hidden"));
      if (stateInfoPanel) stateInfoPanel.classList.remove("hidden");
      if (hotspotsPanel) hotspotsPanel.classList.add("hidden");
    } else if (mode === "2") {
      // Estado 2: Abrir Unboxing 3D al 100% (Caja a la Izquierda + Contenido a la Derecha + Sello quitado)
      setDrawerOpenPercentage(100);
      setBoxRotation(-14, -6, true);
      hotspotPins.forEach((p) => p.classList.add("hidden"));
      if (stateInfoPanel) stateInfoPanel.classList.remove("hidden");
      if (hotspotsPanel) hotspotsPanel.classList.add("hidden");
    } else if (mode === "3") {
      // Estado 3: Capas, Materiales y 4 Hotspots en 3D
      setDrawerOpenPercentage(100);
      setBoxRotation(-16, -12, true);
      hotspotPins.forEach((p) => p.classList.remove("hidden"));
      if (stateInfoPanel) stateInfoPanel.classList.add("hidden");
      if (hotspotsPanel) hotspotsPanel.classList.remove("hidden");
    }
  };

  stateTabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      switchUnboxingMode(btn.dataset.unboxingState);
    });
  });

  // Botón Simular Violación / Restaurar Sello
  if (btnTestTamper) {
    btnTestTamper.addEventListener("click", () => {
      const currentOpen = Number(drawerSlider ? drawerSlider.value : 0);
      if (currentOpen > 4 || manualTamperForced) {
        // Restaurar sello intacto y cerrar caja al 0%
        manualTamperForced = false;
        setDrawerOpenPercentage(0);
        setBoxRotation(-12, -68, true);
        showToast("Caja cerrada al 0% y Sello Holográfico restaurado a estado de fábrica.");
      } else {
        // Simular violación abriendo ligeramente y despegando el sello
        manualTamperForced = true;
        setBoxRotation(-12, -68, true);
        setDrawerOpenPercentage(18);
        showToast("Sello desprendido al abrir: Patrón irreversible 'VOID / ABIERTO' expuesto.");
      }
    });
  }

  // Permitir clic en el QR del Modelo 3D para abrir el Modal del QR
  document.querySelectorAll(".qr-3d-clickable").forEach((qrEl) => {
    qrEl.addEventListener("click", (e) => {
      e.stopPropagation();
      const qrModal = document.getElementById("qr-quickstart-modal");
      if (qrModal) {
        qrModal.classList.remove("hidden");
        qrModal.classList.add("flex");
      }
    });
  });

  // Hotspots Interactivos (1 al 4)
  const allHotspotTriggers = document.querySelectorAll(".pkg-hotspot-3d, .hotspot-selector-btn");
  const hsNumber = document.getElementById("hotspot-detail-number");
  const hsCategory = document.getElementById("hotspot-detail-category");
  const hsTitle = document.getElementById("hotspot-detail-title");
  const hsSubtitle = document.getElementById("hotspot-detail-subtitle");
  const hsSummary = document.getElementById("hotspot-detail-summary");
  const hsBullets = document.getElementById("hotspot-detail-bullets");
  const hsMetricLabel = document.getElementById("hotspot-metric-label");
  const hsMetricValue = document.getElementById("hotspot-metric-value");

  const selectHotspot = (id) => {
    const data = PACKAGING_HOTSPOTS_DATA[id];
    if (!data) return;

    if (stateInfoPanel) stateInfoPanel.classList.add("hidden");
    if (hotspotsPanel) hotspotsPanel.classList.remove("hidden");
    hotspotPins.forEach((p) => p.classList.remove("hidden"));

    if (data.camera) {
      setBoxRotation(data.camera.rx, data.camera.ry, true);
      setDrawerOpenPercentage(data.camera.openPct);
    }

    document.querySelectorAll(".pkg-hotspot-3d").forEach((el) => {
      el.classList.toggle("active", el.dataset.hotspot === String(id));
    });

    document.querySelectorAll(".hotspot-selector-btn").forEach((el) => {
      const active = el.dataset.hotspot === String(id);
      if (active) {
        el.classList.remove("border-slate-800", "bg-slate-900", "text-slate-400");
        el.classList.add("border-emerald-500", "bg-emerald-500/15", "text-white");
      } else {
        el.classList.remove("border-emerald-500", "bg-emerald-500/15", "text-white");
        el.classList.add("border-slate-800", "bg-slate-900", "text-slate-400");
      }
    });

    if (hsNumber) hsNumber.textContent = `HOTSPOT #${data.number}`;
    if (hsCategory) hsCategory.textContent = data.category;
    if (hsTitle) hsTitle.textContent = data.title;
    if (hsSubtitle) hsSubtitle.textContent = data.subtitle;
    if (hsSummary) hsSummary.textContent = data.summary;
    if (hsMetricLabel) hsMetricLabel.textContent = data.metricLabel;
    if (hsMetricValue) hsMetricValue.textContent = data.metricValue;

    if (hsBullets) {
      hsBullets.innerHTML = data.bullets
        .map(
          (b) => `
          <li class="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
            <div class="text-xs font-mono font-semibold text-emerald-400 mb-0.5">${b.label}</div>
            <p class="text-xs text-slate-300 leading-relaxed">${b.text}</p>
          </li>
        `
        )
        .join("");
    }
  };

  allHotspotTriggers.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      selectHotspot(btn.dataset.hotspot);
    });
  });
}

/* ============================================================================
   5. INSPECTOR INTERACTIVO DE ETIQUETADO Y MODO LUPA (SECCIÓN 4)
   ============================================================================ */
function initLabelInspector() {
  const filterBtns = document.querySelectorAll(".label-filter-btn");
  const labelSheet = document.getElementById("physical-label-container");
  const labelZones = document.querySelectorAll(".label-zone");
  const btnLoupeMode = document.getElementById("btn-toggle-loupe");

  const inspectorTitle = document.getElementById("label-inspector-title");
  const inspectorBadge = document.getElementById("label-inspector-badge");
  const inspectorDesc = document.getElementById("label-inspector-desc");
  const inspectorMarketing = document.getElementById("label-inspector-marketing");
  const inspectorChecklist = document.getElementById("label-inspector-checklist");

  const applyLabelFilter = (zoneKey) => {
    const info = LABEL_ZONES_DATA[zoneKey] || LABEL_ZONES_DATA.all;

    filterBtns.forEach((btn) => {
      const active = btn.dataset.labelFilter === zoneKey;
      btn.classList.toggle("bg-emerald-500", active);
      btn.classList.toggle("text-slate-950", active);
      btn.classList.toggle("font-semibold", active);
      btn.classList.toggle("border-emerald-400", active);
      btn.classList.toggle("bg-slate-900", !active);
      btn.classList.toggle("text-slate-300", !active);
      btn.classList.toggle("border-slate-800", !active);
    });

    if (labelSheet) {
      if (zoneKey === "all") {
        labelSheet.classList.remove("label-filtered");
        labelZones.forEach((z) => z.classList.remove("zone-highlighted"));
      } else {
        labelSheet.classList.add("label-filtered");
        labelZones.forEach((z) => {
          z.classList.toggle("zone-highlighted", z.dataset.zone === zoneKey);
        });
      }
    }

    if (inspectorTitle) inspectorTitle.textContent = info.title;
    if (inspectorBadge) inspectorBadge.textContent = info.badge;
    if (inspectorDesc) inspectorDesc.textContent = info.description;
    if (inspectorMarketing) inspectorMarketing.textContent = info.marketingImpact;

    if (inspectorChecklist) {
      inspectorChecklist.innerHTML = info.checklist
        .map(
          (item) => `
          <li class="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
            <span class="mt-0.5 w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 flex items-center justify-center shrink-0 font-mono text-[10px]">✓</span>
            <span>${item}</span>
          </li>
        `
        )
        .join("");
    }
  };

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => applyLabelFilter(btn.dataset.labelFilter));
  });

  labelZones.forEach((zone) => {
    zone.addEventListener("click", () => applyLabelFilter(zone.dataset.zone));
  });

  if (btnLoupeMode && labelSheet) {
    btnLoupeMode.addEventListener("click", () => {
      const isLoupe = labelSheet.classList.toggle("loupe-active");
      const span = btnLoupeMode.querySelector("span");
      btnLoupeMode.classList.toggle("bg-emerald-500", isLoupe);
      btnLoupeMode.classList.toggle("text-slate-950", isLoupe);
      btnLoupeMode.classList.toggle("border-emerald-400", isLoupe);
      if (span) {
        span.textContent = isLoupe ? "Desactivar Modo Lupa" : "Modo Lupa / Resaltar Zonas";
      }
    });
  }

  // Modal del Código QR
  const qrTrigger = document.getElementById("label-qr-trigger");
  const qrModal = document.getElementById("qr-quickstart-modal");
  const btnCloseQr = document.getElementById("btn-close-qr-modal");

  if (qrTrigger && qrModal) {
    qrTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      qrModal.classList.remove("hidden");
      qrModal.classList.add("flex");
    });
  }
  if (btnCloseQr && qrModal) {
    btnCloseQr.addEventListener("click", () => {
      qrModal.classList.add("hidden");
      qrModal.classList.remove("flex");
    });
    qrModal.addEventListener("click", (e) => {
      if (e.target === qrModal) {
        qrModal.classList.add("hidden");
        qrModal.classList.remove("flex");
      }
    });
  }
}

/* ============================================================================
   6. GENERADOR VECTORIAL EAN-13 (EN ETIQUETA PRINCIPAL Y CAJA 3D)
   ============================================================================ */
function renderAllEAN13Barcodes() {
  const targets = document.querySelectorAll(".ean13-barcode-svg");
  if (!targets.length) return;

  const L_CODES = [
    "0001101", "0011001", "0010011", "0111101", "0100011",
    "0110001", "0101111", "0111011", "0110111", "0001011"
  ];
  const G_CODES = [
    "0100111", "0110011", "0011011", "0100001", "0011101",
    "0111001", "0000101", "0010001", "0001001", "0010111"
  ];
  const R_CODES = [
    "1110010", "1100110", "1101100", "1000010", "1011100",
    "1001110", "1010000", "1000100", "1001000", "1110100"
  ];
  const PARITY_7 = ["L", "G", "L", "G", "L", "G"];

  const digits = "7401000202614".split("").map(Number);
  let binaryPattern = "101";
  digits.slice(1, 7).forEach((d, idx) => {
    binaryPattern += PARITY_7[idx] === "L" ? L_CODES[d] : G_CODES[d];
  });
  binaryPattern += "01010";
  digits.slice(7, 13).forEach((d) => {
    binaryPattern += R_CODES[d];
  });
  binaryPattern += "101";

  let barsSvg = `<rect x="0" y="0" width="220" height="72" rx="4" fill="#F8FAFC"/>`;
  const startX = 18;
  const moduleWidth = 1.95;

  for (let i = 0; i < binaryPattern.length; i++) {
    if (binaryPattern[i] === "1") {
      const isGuard = i < 3 || (i >= 45 && i < 50) || i >= 92;
      const barHeight = isGuard ? 54 : 46;
      const x = (startX + i * moduleWidth).toFixed(2);
      barsSvg += `<rect x="${x}" y="6" width="${moduleWidth + 0.15}" height="${barHeight}" fill="#0B0F19"/>`;
    }
  }

  barsSvg += `
    <text x="6" y="66" fill="#0B0F19" font-family="JetBrains Mono, monospace" font-weight="700" font-size="11">7</text>
    <text x="32" y="66" fill="#0B0F19" font-family="JetBrains Mono, monospace" font-weight="700" font-size="11" letter-spacing="2.2">401000</text>
    <text x="122" y="66" fill="#0B0F19" font-family="JetBrains Mono, monospace" font-weight="700" font-size="11" letter-spacing="2.2">202614</text>
  `;

  targets.forEach((svg) => {
    svg.innerHTML = barsSvg;
  });
}

let toastTimer = null;
function showToast(message) {
  const toastEl = document.getElementById("cyber-toast");
  const toastMsg = document.getElementById("cyber-toast-message");
  if (!toastEl || !toastMsg) return;

  toastMsg.textContent = message;
  toastEl.classList.remove("translate-y-24", "opacity-0", "pointer-events-none");
  toastEl.classList.add("translate-y-0", "opacity-100");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.classList.add("translate-y-24", "opacity-0", "pointer-events-none");
    toastEl.classList.remove("translate-y-0", "opacity-100");
  }, 3200);
}
