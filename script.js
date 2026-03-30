'use strict';

const BRANDS = [
  { id: 'all',        name: 'Todos',       emoji: '🏎' },
  { id: 'ferrari',    name: 'Ferrari',     emoji: '🐴' },
  { id: 'lamborghini',name: 'Lamborghini', emoji: '🐂' },
  { id: 'porsche',    name: 'Porsche',     emoji: '🐎' },
  { id: 'mclaren',    name: 'McLaren',     emoji: '🔶' },
  { id: 'bugatti',    name: 'Bugatti',     emoji: '🐘' },
  { id: 'astonmartin',name: 'Aston Martin',emoji: '🦋' },
  { id: 'maserati',   name: 'Maserati',    emoji: '🔱' },
  { id: 'koenigsegg', name: 'Koenigsegg',  emoji: '👑' },
];

const CARS = [
  /* ── FERRARI ── */
  {
    id: 1, brand: 'ferrari', featured: true,
    name: 'Ferrari SF90 Stradale',
    year: 2024, origin: 'Itália',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80&auto=format',
    description: 'O SF90 Stradale é o primeiro híbrido plug-in de produção da Ferrari. Com um V8 biturbo de 4.0L combinado a três motores elétricos, entrega uma potência combinada brutal. O sistema híbrido não é apenas sobre eficiência — é sobre performance instantânea, com torque elétrico disponível a qualquer rotação. Capaz de circular silenciosamente em modo elétrico por até 25 km.',
    specs: { potencia: '1000 cv', velocidade: '340 km/h', aceleracao: '2.5 s', motor: 'V8 4.0L Híbrido' },
    tags: ['Híbrido', 'Superesportivo', 'Mid-engine', 'AWD'],
  },
  {
    id: 2, brand: 'ferrari',
    name: 'Ferrari 296 GTB',
    year: 2023, origin: 'Itália',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80&auto=format',
    description: 'O 296 GTB marca o retorno do motor V6 à Ferrari depois de décadas, em uma configuração biturbo de 120° inédita. Combinado a um motor elétrico, produz 830 cv e redefine o conceito de berlineta esportiva. O design arrojado, a leveza estrutural e a gestão dinâmica avançada fazem dele um marco tecnológico da marca.',
    specs: { potencia: '830 cv', velocidade: '330 km/h', aceleracao: '2.9 s', motor: 'V6 3.0L Híbrido' },
    tags: ['Híbrido', 'V6', 'Berlineta', 'F1-derived'],
  },
  {
    id: 3, brand: 'ferrari',
    name: 'Ferrari Daytona SP3',
    year: 2023, origin: 'Itália',
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80&auto=format',
    description: 'Parte da série Icona, o Daytona SP3 é uma homenagem às vitórias da Ferrari em Le Mans entre 1967 e 1969. Motor V12 naturalmente aspirado de 840 cv, transmissão de dupla embreagem e carroceria em fibra de carbono com targa roof deslizante. Apenas 599 unidades foram produzidas, já esgotadas antes do lançamento.',
    specs: { potencia: '840 cv', velocidade: '340 km/h', aceleracao: '2.85 s', motor: 'V12 6.5L' },
    tags: ['Icona', 'V12', 'Edição Limitada', 'NA'],
  },

  /* ── LAMBORGHINI ── */
  {
    id: 4, brand: 'lamborghini', featured: true,
    name: 'Lamborghini Revuelto',
    year: 2024, origin: 'Itália',
    image: 'https://images.unsplash.com/photo-1490398927894-99f08e15a3a1?w=800&q=80&auto=format',
    description: 'O Revuelto sucede o lendário Aventador como o carro-chefe da Lamborghini. É o primeiro V12 híbrido da marca, combinando o icônico motor aspirado de 6.5L a três motores elétricos. Com 1015 cv e tração integral, o Revuelto não apenas respeita o legado — ele o reinventa para a era moderna, sem abrir mão do som inconfundível do V12.',
    specs: { potencia: '1015 cv', velocidade: '350 km/h', aceleracao: '2.5 s', motor: 'V12 6.5L Híbrido' },
    tags: ['Híbrido', 'V12', 'PHEV', 'AWD'],
  },
  {
    id: 5, brand: 'lamborghini',
    name: 'Lamborghini Huracán STO',
    year: 2023, origin: 'Itália',
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80&auto=format',
    description: 'O STO (Super Trofeo Omologata) é o Huracán de pista mais próximo de um carro de corrida que pode ser emplacado. Com 70% das peças aerodináticas inspiradas nos carros de corrida GT3 e Supertrofeo, ele entrega downforce excepcional. O V10 aspirado de 640 cv grita até 8.000 rpm com uma sonoridade impossível de ignorar.',
    specs: { potencia: '640 cv', velocidade: '310 km/h', aceleracao: '3.0 s', motor: 'V10 5.2L' },
    tags: ['Track-focused', 'V10', 'RWD', 'Aerodinâmica ativa'],
  },

  /* ── PORSCHE ── */
  {
    id: 6, brand: 'porsche', featured: true,
    name: 'Porsche 911 GT3 RS',
    year: 2024, origin: 'Alemanha',
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80&auto=format',
    description: 'O 911 GT3 RS é o Porsche de produção mais extremo, desenvolvido diretamente pelo departamento de motorsport. O motor flat-six de 4.0L naturalmente aspirado gira até 9.000 rpm, produzindo 525 cv. O sistema de aerodinâmica ativa com DRS (Drag Reduction System) permite ajustar downforce em movimento — a primeira vez na história do 911.',
    specs: { potencia: '525 cv', velocidade: '296 km/h', aceleracao: '3.2 s', motor: 'Flat-6 4.0L' },
    tags: ['Track-focused', 'Flat-6', 'Aerodinâmica ativa', 'NA'],
  },
  {
    id: 7, brand: 'porsche',
    name: 'Porsche 918 Spyder',
    year: 2015, origin: 'Alemanha',
    image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80&auto=format',
    description: 'O 918 Spyder foi o hipercarro revolucionário que provou que a eletrificação pode amplificar, não suavizar, a experiência esportiva. Com V8 de 608 cv e dois motores elétricos totalizando 887 cv, ele quebrou o recorde de Nürburgring para carros de produção em 2013. Uma obra-prima de engenharia que influenciou toda uma geração de hipercars.',
    specs: { potencia: '887 cv', velocidade: '340 km/h', aceleracao: '2.6 s', motor: 'V8 4.6L Híbrido' },
    tags: ['PHEV', 'Mítico', 'AWD', 'Weissach Pkg'],
  },

  /* ── McLAREN ── */
  {
    id: 8, brand: 'mclaren', featured: true,
    name: 'McLaren P1',
    year: 2015, origin: 'Reino Unido',
    image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?w=800&q=80&auto=format',
    description: 'O P1 é a materialização do sonho de criar o carro de produção mais rápido em pista de todos os tempos. O V8 twin-turbo combinado a um motor elétrico entrega 916 cv e uma experiência de dirigir que desafia a física. Tecnologia de F1 como DRS, aerodinâmica ativa e pneus Pirelli P Zero corsa especialmente desenvolvidos.',
    specs: { potencia: '916 cv', velocidade: '350 km/h', aceleracao: '2.8 s', motor: 'V8 3.8L Híbrido' },
    tags: ['Mítico', 'PHEV', 'DRS', 'F1-derived'],
  },
  {
    id: 9, brand: 'mclaren',
    name: 'McLaren 750S',
    year: 2024, origin: 'Reino Unido',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80&auto=format',
    description: 'O 750S é o mais recente carro de estrada da McLaren e representa a evolução do aclamado 720S. 740 cv de um V8 twin-turbo de 4.0L, 28 kg mais leve que seu predecessor, e com 60% de novos componentes. O resultado é 0-100 em 2,8 segundos e uma resposta de direção ainda mais cirúrgica. É a essência do que a McLaren representa.',
    specs: { potencia: '740 cv', velocidade: '331 km/h', aceleracao: '2.8 s', motor: 'V8 4.0L' },
    tags: ['Superesportivo', 'V8', 'RWD', 'Carbon chassis'],
  },

  /* ── BUGATTI ── */
  {
    id: 10, brand: 'bugatti', featured: true,
    name: 'Bugatti Chiron Super Sport',
    year: 2024, origin: 'França',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80&auto=format',
    description: 'O Chiron Super Sport representa o ápice absoluto da engenharia automotiva atual. O motor W16 de 8.0L com quatro turbos produz 1.600 cv e 1.600 Nm de torque. Cada componente é uma obra de arte: o interior é costurado à mão com couro da mais alta qualidade, e a carroceria de fibra de carbono esconde uma estrutura de alumínio e aço. Um objeto de arte que anda.',
    specs: { potencia: '1600 cv', velocidade: '440 km/h', aceleracao: '2.4 s', motor: 'W16 8.0L' },
    tags: ['Hipercarro', 'W16', 'AWD', 'Obra de arte'],
  },
  {
    id: 11, brand: 'bugatti',
    name: 'Bugatti Bolide',
    year: 2024, origin: 'França',
    image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80&auto=format',
    description: 'O Bolide é a visão da Bugatti do que seria seu carro de pista definitivo, se fizessem um. Com o mesmo W16 de 1850 cv, mas em um chassi que pesa apenas 1.240 kg, a relação peso-potência é simplesmente absurda. A aerodinâmica extrema gera downforce suficiente para teóricamente manter o carro de cabeça para baixo em alta velocidade.',
    specs: { potencia: '1850 cv', velocidade: '500 km/h', aceleracao: '2.17 s', motor: 'W16 8.0L' },
    tags: ['Track only', 'W16', 'Downforce extremo', 'Raro'],
  },

  /* ── ASTON MARTIN ── */
  {
    id: 12, brand: 'astonmartin', featured: true,
    name: 'Aston Martin Valkyrie',
    year: 2023, origin: 'Reino Unido',
    image: 'https://images.unsplash.com/photo-1569171540038-04f78c6f7eb2?w=800&q=80&auto=format',
    description: 'Desenvolvido em parceria com a Red Bull Racing e Adrian Newey, o Valkyrie aplica filosofia genuína de F1 em um carro de estrada. O V12 Cosworth de 6.5L naturalmente aspirado gira até 11.100 rpm, emitindo um som de outro mundo. Com sistema híbrido, a potência combinada chega a 1.160 cv — em um carro que pesa menos de 1.000 kg.',
    specs: { potencia: '1160 cv', velocidade: '402 km/h', aceleracao: '2.5 s', motor: 'V12 6.5L Híbrido' },
    tags: ['F1-derived', 'Adrian Newey', 'Híbrido', 'V12'],
  },
  {
    id: 13, brand: 'astonmartin',
    name: 'Aston Martin DB12',
    year: 2024, origin: 'Reino Unido',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80&auto=format',
    description: 'O DB12 é o "Super Tourer" da Aston Martin — uma Grand Tourer redefinida para a era moderna. O motor V8 biturbo AMG de 4.0L agora produz 680 cv, e a transmissão automática de 8 velocidades oferece respostas instantâneas. Luxo britânico e elegância intemporal combinados com desempenho de supercarro. Bond aprovaria.',
    specs: { potencia: '680 cv', velocidade: '325 km/h', aceleracao: '3.5 s', motor: 'V8 4.0L' },
    tags: ['Grand Tourer', 'British', 'Luxo', 'V8'],
  },

  /* ── MASERATI ── */
  {
    id: 14, brand: 'maserati', featured: true,
    name: 'Maserati MC20',
    year: 2024, origin: 'Itália',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format',
    description: 'O MC20 marca o retorno grandioso da Maserati ao mercado de superesportivos. O motor Nettuno V6 de 3.0L biturbo de 630 cv usa tecnologia derivada da F1, incluindo prechamber combustion — uma primeira em carros de estrada. Com chassi de fibra de carbono e portas borboleta, o MC20 estabelece um novo capítulo para o Tridente.',
    specs: { potencia: '630 cv', velocidade: '325 km/h', aceleracao: '2.9 s', motor: 'V6 3.0L Nettuno' },
    tags: ['F1-tech', 'Fibra de carbono', 'Butterfly doors', 'Mid-engine'],
  },
  {
    id: 15, brand: 'maserati',
    name: 'Maserati GranTurismo Folgore',
    year: 2024, origin: 'Itália',
    image: 'https://images.unsplash.com/photo-1527922645878-1e8e25c60f43?w=800&q=80&auto=format',
    description: 'O GranTurismo Folgore é o primeiro carro elétrico de produção da Maserati e uma declaração audaciosa sobre o futuro da marca. Três motores elétricos entregam 761 cv e aceleram o GT Elétrico de 0-100 em 2,7 segundos. Mantém o DNA de Grand Tourer com uma cabine luxuosamente italiana e range de mais de 400 km.',
    specs: { potencia: '761 cv', velocidade: '325 km/h', aceleracao: '2.7 s', motor: 'Elétrico 3 motores' },
    tags: ['Elétrico', 'Grand Tourer', 'Italiano', 'Luxo'],
  },

  /* ── KOENIGSEGG ── */
  {
    id: 16, brand: 'koenigsegg', featured: true,
    name: 'Koenigsegg Jesko Absolut',
    year: 2024, origin: 'Suécia',
    image: 'https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?w=800&q=80&auto=format',
    description: 'O Jesko Absolut foi projetado com um único objetivo: ser o carro de produção mais rápido da história. Aerodinâmica de baixíssima resistência, motor V8 biturbo de 5.0L com 1.600 cv em E85 e a revolucionária transmissão Light Speed Transmission com 9 embreagens. Velocidade teórica de 330+ mph. Pouquíssimos foram produzidos.',
    specs: { potencia: '1600 cv', velocidade: '531 km/h', aceleracao: '2.5 s', motor: 'V8 5.0L BiTurbo' },
    tags: ['Recorde mundial', 'V8', 'LST', 'Suécia'],
  },
  {
    id: 17, brand: 'koenigsegg',
    name: 'Koenigsegg Gemera',
    year: 2024, origin: 'Suécia',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80&auto=format',
    description: 'O Gemera é o "Mega-GT" da Koenigsegg — um carro com 4 lugares, 4 portas butterfly e 2.300 cv. Usa um motor de 2.0L de 3 cilindros chamado "Tiny Friendly Giant" combinado a três motores elétricos. É simultaneamente o carro de quatro lugares mais rápido do mundo e uma demonstração de que o futuro da mobilidade pode ser extraordinariamente empolgante.',
    specs: { potencia: '2300 cv', velocidade: '400 km/h', aceleracao: '1.9 s', motor: 'TFG 2.0L Híbrido' },
    tags: ['4 lugares', 'Híbrido', 'Record', 'Mega-GT'],
  },
];

const state = {
  activeBrand: 'all',
  query: '',
  currentCar: null,
  cameraStream: null,
  cameraFacing: 'environment',
  photoTaken: false,
};

const $ = id => document.getElementById(id);

let splash, app, brandsScroll, carsGrid, carsLabel, emptyState,
    searchInput, searchClear, searchAnim, carModal, modalClose,
    modalBackdrop, toastEl, heroBg, video, canvas, capturedPhoto,
    btnCapture, btnFlip, btnRetake, cameraStatus;

function initDOMRefs() {
  splash        = $('splash');
  app           = $('app');
  brandsScroll  = $('brandsScroll');
  carsGrid      = $('carsGrid');
  carsLabel     = $('carsLabel');
  emptyState    = $('emptyState');
  searchInput   = $('searchInput');
  searchClear   = $('searchClear');
  searchAnim    = $('searchAnim');
  carModal      = $('carModal');
  modalClose    = $('modalClose');
  modalBackdrop = $('modalBackdrop');
  toastEl       = $('toast');
  heroBg        = $('heroBg');
  video         = $('cameraVideo');
  canvas        = $('cameraCanvas');
  capturedPhoto = $('capturedPhoto');
  btnCapture    = $('btnCapture');
  btnFlip       = $('btnFlip');
  btnRetake     = $('btnRetake');
  cameraStatus  = $('cameraStatus');
}

document.addEventListener('DOMContentLoaded', () => {
  initDOMRefs();
  attachEventListeners();
  // Splash desaparece após load ou em 2.5s (o que vier primeiro)
  window.addEventListener('load', () => setTimeout(launchApp, 1000));
  setTimeout(launchApp, 2500);
});

function launchApp() {
  if (launchApp._done) return;
  launchApp._done = true;

  splash.classList.add('fade-out');
  setTimeout(() => {
    if (splash.parentNode) splash.remove();
    app.classList.remove('hidden');
    renderBrands();
    renderCars();
    initScrollBehavior();
  }, 600);
}

window.addEventListener('load', () => setTimeout(launchApp, 1400));
setTimeout(launchApp, 2500);

function renderBrands() {
  brandsScroll.innerHTML = BRANDS.map(b => `
    <button class="brand-chip${state.activeBrand === b.id ? ' active' : ''}"
            data-brand="${b.id}"
            role="listitem"
            aria-pressed="${state.activeBrand === b.id}"
            aria-label="Filtrar por ${b.name}">
      <span class="brand-chip-logo" aria-hidden="true">${b.emoji}</span>
      <span class="brand-chip-name">${b.name}</span>
    </button>
  `).join('');

  brandsScroll.querySelectorAll('.brand-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      state.activeBrand = btn.dataset.brand;
      state.query = '';
      searchInput.value = '';
      searchClear.classList.remove('visible');
      renderBrands();
      renderCars(true);
    });
  });
}

function getFilteredCars() {
  return CARS.filter(c => {
    const matchBrand = state.activeBrand === 'all' || c.brand === state.activeBrand;
    const q = state.query.toLowerCase();
    const matchQuery = !q ||
      c.name.toLowerCase().includes(q) ||
      c.brand.toLowerCase().includes(q) ||
      (c.specs.motor || '').toLowerCase().includes(q);
    return matchBrand && matchQuery;
  });
}

function renderCars(animated = false) {
  const cars = getFilteredCars();
  const brand = BRANDS.find(b => b.id === state.activeBrand);
  carsLabel.textContent = brand ? `${brand.name === 'Todos' ? 'Todos os Modelos' : brand.name} — ${cars.length} modelo${cars.length !== 1 ? 's' : ''}` : '';

  if (cars.length === 0) {
    carsGrid.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }
  emptyState.classList.add('hidden');

  carsGrid.innerHTML = cars.map((c, i) => `
    <article class="car-card${c.featured && state.activeBrand !== 'all' ? ' featured' : ''}"
             role="listitem"
             tabindex="0"
             aria-label="${c.brand} ${c.name}"
             data-id="${c.id}"
             style="animation-delay:${i * 60}ms">
      <img class="car-card-img"
           src="${c.image}"
           alt="${c.brand} ${c.name}"
           loading="lazy"
           width="400" height="225" />
      <div class="car-card-badge">${c.year}</div>
      <div class="car-card-body">
        <div class="car-card-brand">${c.brand}</div>
        <div class="car-card-name">${c.name}</div>
        <div class="car-card-spec">
          <span class="spec-pill"><strong>${c.specs.potencia}</strong></span>
          <span class="spec-pill"><strong>${c.specs.aceleracao}</strong> 0-100</span>
        </div>
      </div>
    </article>
  `).join('');

  carsGrid.querySelectorAll('.car-card').forEach(card => {
    card.addEventListener('click', () => openModal(+card.dataset.id));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openModal(+card.dataset.id); });
  });
}

let searchTimeout;
function initSearch() {
  searchInput.addEventListener('input', () => {
    const val = searchInput.value.trim();
    state.query = val;
    searchClear.classList.toggle('visible', val.length > 0);
    searchAnim.classList.add('active');
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      searchAnim.classList.remove('active');
      renderCars(true);
    }, 350);
  });
  searchClear.addEventListener('click', clearSearch);
  searchClear.addEventListener('keydown', e => { if (e.key === 'Enter') clearSearch(); });
}

function clearSearch() {
  searchInput.value = '';
  state.query = '';
  searchClear.classList.remove('visible');
  searchAnim.classList.remove('active');
  renderCars();
}

function openModal(id) {
  const car = CARS.find(c => c.id === id);
  if (!car) return;
  state.currentCar = car;

  $('modalImg').src = car.image;
  $('modalImg').alt = `${car.brand} ${car.name}`;
  $('modalBrand').textContent = car.brand;
  $('modalYear').textContent = car.year;
  $('modalOrigin').textContent = car.origin;
  $('modalCarName').textContent = car.name;
  $('modalDescription').textContent = car.description;

  $('modalSpecs').innerHTML = Object.entries({
    'Potência': [car.specs.potencia, ''],
    'Top Speed': [car.specs.velocidade, ''],
    '0–100 km/h': [car.specs.aceleracao, ''],
    'Motor': [car.specs.motor, ''],
  }).map(([label, [val]]) => `
    <div class="spec-card">
      <div class="spec-card-label">${label}</div>
      <div class="spec-card-value">${val}</div>
    </div>
  `).join('');

  $('modalTags').innerHTML = car.tags.map(t => `<span class="tag">${t}</span>`).join('');

  carModal.classList.add('open');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeModal() {
  carModal.classList.remove('open');
  document.body.style.overflow = '';
  state.currentCar = null;
}

function initModal() {
  modalClose.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && state.currentCar) closeModal(); });

  let touchStartY = 0;
  $('modalSheet').addEventListener('touchstart', e => { touchStartY = e.touches[0].clientY; }, { passive: true });
  $('modalSheet').addEventListener('touchend', e => {
    const delta = e.changedTouches[0].clientY - touchStartY;
    if (delta > 80) closeModal();
  }, { passive: true });
}

function initNavigation() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view;
      document.querySelectorAll('.nav-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.view === view);
      });
      document.querySelectorAll('.view').forEach(v => {
        v.classList.toggle('active', v.id === `view-${view}`);
      });
      if (view === 'camera') initCamera();
      else stopCamera();
    });
  });
}

async function initCamera() {
  state.photoTaken = false;
  capturedPhoto.classList.add('hidden');
  video.classList.remove('hidden');
  btnCapture.classList.remove('hidden');
  btnRetake.classList.add('hidden');
  cameraStatus.textContent = 'Inicializando câmera...';

  try {
    if (state.cameraStream) {
      state.cameraStream.getTracks().forEach(t => t.stop());
    }
    const constraints = {
      video: {
        facingMode: state.cameraFacing,
        width: { ideal: 1920 },
        height: { ideal: 1080 },
      },
      audio: false,
    };
    state.cameraStream = await navigator.mediaDevices.getUserMedia(constraints);
    video.srcObject = state.cameraStream;
    await video.play();

    const track = state.cameraStream.getVideoTracks()[0];
    const settings = track.getSettings();
    cameraStatus.textContent = `📷 ${settings.width}×${settings.height} — ${state.cameraFacing === 'environment' ? 'Câmera traseira' : 'Câmera frontal'}`;
    showToast('📷 Câmera pronta!');
  } catch (err) {
    let msg = 'Câmera indisponível';
    if (err.name === 'NotAllowedError') msg = '⚠️ Permissão de câmera negada';
    else if (err.name === 'NotFoundError') msg = '⚠️ Nenhuma câmera encontrada';
    cameraStatus.textContent = msg;
    showToast(msg);
  }
}

function stopCamera() {
  if (state.cameraStream) {
    state.cameraStream.getTracks().forEach(t => t.stop());
    state.cameraStream = null;
  }
}

function initCameraButtons() {
  btnCapture.addEventListener('click', () => {
    if (!state.cameraStream) return;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    const dataUrl = canvas.toDataURL('image/jpeg', 0.92);
    capturedPhoto.src = dataUrl;
    capturedPhoto.classList.remove('hidden');
    video.classList.add('hidden');
    btnCapture.classList.add('hidden');
    btnRetake.classList.remove('hidden');
    state.photoTaken = true;
    cameraStatus.textContent = '✅ Foto capturada!';
    showToast('📸 Foto salva com sucesso!');
    if (navigator.vibrate) navigator.vibrate([40, 30, 80]);
  });

  btnRetake.addEventListener('click', () => {
    state.photoTaken = false;
    capturedPhoto.src = '';
    capturedPhoto.classList.add('hidden');
    video.classList.remove('hidden');
    btnCapture.classList.remove('hidden');
    btnRetake.classList.add('hidden');
    cameraStatus.textContent = '📷 Pronto para fotografar';
  });

  btnFlip.addEventListener('click', () => {
    state.cameraFacing = state.cameraFacing === 'environment' ? 'user' : 'environment';
    initCamera();
  });
}

function attachEventListeners() {
  initSearch();
  initModal();
  initNavigation();
  initCameraButtons();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(reg => {
      reg.addEventListener('updatefound', () => showToast('🔄 Atualização disponível — recarregue'));
    }).catch(() => {});
  }

  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    setTimeout(() => showToast('📲 Instale o app — toque em Adicionar à tela inicial'), 4000);
  });
  window.addEventListener('appinstalled', () => showToast('✅ App instalado com sucesso!'));
}

function initScrollBehavior() {
  let lastY = 0;
  const header = $('header');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    header.classList.toggle('hide', y > lastY && y > 80);
    lastY = y;
  }, { passive: true });
}

let toastTimer;
function showToast(msg, duration = 2500) {
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), duration);
}