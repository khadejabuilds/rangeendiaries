// Helper function to build pattern SVG string
function kashi(id, petal, dot) {
  const d = 'M0 -4L4 0L0 4L-4 0Z';
  return (
    '<pattern id="' + id + '" width="40" height="40" patternUnits="userSpaceOnUse">' +
      '<g style="fill:' + petal + '">' +
        '<ellipse cx="20" cy="10" rx="4.5" ry="8"/>' +
        '<ellipse cx="20" cy="30" rx="4.5" ry="8"/>' +
        '<ellipse cx="10" cy="20" rx="8" ry="4.5"/>' +
        '<ellipse cx="30" cy="20" rx="8" ry="4.5"/>' +
      '</g>' +
      '<g style="fill:' + dot + '">' +
        '<circle cx="20" cy="20" r="3.2"/>' +
        '<path d="' + d + '"/>' +
        '<path d="' + d + '" transform="translate(40 0)"/>' +
        '<path d="' + d + '" transform="translate(0 40)"/>' +
        '<path d="' + d + '" transform="translate(40 40)"/>' +
      '</g>' +
    '</pattern>'
  );
}

// Infinite Kashi Tile Slider Generator
function initKashiSlider() {
  const track = document.getElementById('kashiSliderTrack');
  if (!track) return;

  let tileHtml = `<svg class="marquee-item" viewBox="0 0 120 40" preserveAspectRatio="none" role="img" aria-label="Kashi tile separator">
    <defs>${kashi('kSlide', 'var(--jamun)', 'var(--anaar)')}</defs>
    <rect width="120" height="40" fill="var(--aasman)"/>
    <rect width="120" height="40" style="fill:url(#kSlide)"/>
  </svg>`;

  let repeated = tileHtml.repeat(15);
  track.innerHTML = repeated + repeated; // Doubled for smooth infinite loop
}

// Infinite Marigold Garland Slider Generator (With your preferred design!)
function initMarigoldSlider() {
  const track = document.getElementById('marigoldSliderTrack');
  if (!track) return;

  let marigoldSvg = `<svg class="marquee-item-marigold" viewBox="0 0 120 50" preserveAspectRatio="none" role="img" aria-label="Marigold garland separator">
    <path d="M0 20 Q30 40 60 20 T120 20" fill="none" stroke="var(--zari)" stroke-width="3" />`;

  for (let x = 20; x <= 100; x += 30) {
    let yOffset = 20 + Math.sin(x / 50) * 4;
    marigoldSvg += `<g transform="translate(${x}, ${yOffset})">`;
    for (let i = 0; i < 8; i++) {
      marigoldSvg += `<ellipse cx="0" cy="0" rx="6" ry="16" fill="var(--haldi)" transform="rotate(${i * 45})" />`;
    }
    for (let i = 0; i < 8; i++) {
      marigoldSvg += `<ellipse cx="0" cy="0" rx="4" ry="11" fill="var(--zari)" transform="rotate(${i * 45 + 22.5})" />`;
    }
    marigoldSvg += '<circle cx="0" cy="0" r="7" fill="var(--anaar)" />';
    marigoldSvg += '<circle cx="0" cy="0" r="3" fill="var(--haldi)" />';
    marigoldSvg += `</g>`;
  }
  marigoldSvg += `</svg>`;

  let repeated = marigoldSvg.repeat(15);
  track.innerHTML = repeated + repeated; // Doubled for smooth infinite loop
}

document.addEventListener('DOMContentLoaded', function () {
  // Render m1 (Kashi Tile)
  const m1 = document.getElementById('m1');
  if (m1) {
    m1.innerHTML =
      '<defs>' + kashi('pk1', 'var(--jamun)', 'var(--anaar)') + '</defs>' +
      '<rect width="120" height="120" fill="var(--aasman)"/>' +
      '<rect width="120" height="120" style="fill:url(#pk1)"/>';
  }

  // Render m2 (Radial Flower Motif)
  const m2 = document.getElementById('m2');
  if (m2) {
    let s = '<rect width="120" height="120" fill="var(--anaar)"/>';
    for (let i = 0; i < 12; i++) {
      s += '<ellipse cx="60" cy="27" rx="11" ry="23" fill="var(--haldi)" stroke="var(--zari)" stroke-width="1.5" transform="rotate(' + (i * 30) + ' 60 60)"/>';
    }
    for (let i = 0; i < 12; i++) {
      s += '<ellipse cx="60" cy="41" rx="7" ry="14" fill="var(--zari)" opacity=".9" transform="rotate(' + (15 + i * 30) + ' 60 60)"/>';
    }
    s += '<circle cx="60" cy="60" r="11" fill="var(--jamun)"/><circle cx="60" cy="60" r="4" fill="var(--haldi)"/>';
    m2.innerHTML = s;
  }

  // Render m3 (Banner Ribbon Motif)
  const m3 = document.getElementById('m3');
  if (m3) {
    m3.innerHTML =
      '<rect width="120" height="120" fill="var(--pista)"/>' +
      '<polygon points="38,0 82,0 82,84 60,68 38,84" fill="var(--anaar)"/>' +
      '<path d="M20 98 Q60 124 100 98" fill="none" stroke="var(--jamun)" stroke-width="6" stroke-linecap="round"/>';
  }

  // Render m4 (Dear Diary Tape Motif)
  const m4 = document.getElementById('m4');
  if (m4) {
    m4.innerHTML =
      '<defs>' +
        '<pattern id="tape" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">' +
          '<rect width="6" height="12" fill="var(--aasman)"/>' +
          '<rect x="6" width="6" height="12" fill="var(--surface)"/>' +
        '</pattern>' +
      '</defs>' +
      '<rect width="120" height="120" fill="var(--haldi)"/>' +
      '<rect x="12" y="14" width="96" height="92" fill="none" stroke="var(--jamun)" stroke-width="2.5" stroke-dasharray="6 5"/>' +
      '<rect x="34" y="4" width="52" height="16" fill="url(#tape)" transform="rotate(-6 60 12)"/>' +
      '<text x="60" y="66" text-anchor="middle" font-family="var(--hand)" font-weight="700" font-size="26" fill="var(--jamun)">dear diary</text>' +
      '<text x="60" y="88" text-anchor="middle" font-family="var(--hand)" font-weight="600" font-size="17" fill="var(--anaar)">today was loud</text>';
  }

  // Initialize Infinite Sliders
  initKashiSlider();
  initMarigoldSlider();
});

// Spring Text Animation Effect for the Title
document.addEventListener('DOMContentLoaded', function () {
  const titleEl = document.getElementById('animatedTitle');
  if (titleEl) {
    const text = titleEl.textContent;
    const words = text.split(' ');
    
    // Clear and rebuild with staggered spans
    titleEl.innerHTML = words.map((word, wordIndex) => {
      // Add random festive colors on load if desired
      const randomColors = ['var(--jamun)', 'var(--anaar)', 'var(--haldi)', 'var(--zari)'];
      const color = randomColors[wordIndex % randomColors.length];
      
      return `<span class="animated-word" style="animation-delay: ${wordIndex * 0.15}s; color: ${color};">${word} </span>`;
    }).join('');
  }
});

// Function to render a marigold garland segment (SVG)
function createMarigoldSegmentSvg() {
  let svg = `<svg class="garland-svg" viewBox="0 0 220 60" preserveAspectRatio="none">
    <!-- Hanging Garland Thread Curve -->
    <path d="M0 20 Q110 45 220 20" fill="none" stroke="var(--zari)" stroke-width="3" />`;

  // Draw 5 detailed marigold flowers along the curve
  for (let x = 20; x <= 200; x += 45) {
    let yOffset = 20 + Math.sin((x / 220) * Math.PI) * 18;
    svg += `<g transform="translate(${x}, ${yOffset})">`;
    // Outer Haldi Petals
    for (let i = 0; i < 8; i++) {
      svg += `<ellipse cx="0" cy="0" rx="6" ry="16" fill="var(--haldi)" transform="rotate(${i * 45})" />`;
    }
    // Inner Zari Petals
    for (let i = 0; i < 8; i++) {
      svg += `<ellipse cx="0" cy="0" rx="4" ry="11" fill="var(--zari)" transform="rotate(${i * 45 + 22.5})" />`;
    }
    // Core
    svg += `<circle cx="0" cy="0" r="7" fill="var(--anaar)" />`;
    svg += `<circle cx="0" cy="0" r="3" fill="var(--haldi)" />`;
    svg += `</g>`;
  }

  svg += `</svg>`;
  return svg;
}

// Render Top Garland Slider with Hanging Nav Blocks
function initTopNavGarland() {
  const track = document.getElementById('topNavGarlandTrack');
  if (!track) return;

  const navItems = [
    { label: 'Shop', href: '#shop', style: 'card-gold' },
    { label: 'Gallery', href: '#gallery', style: '' },
    { label: 'Journal', href: '#journal', style: 'card-alt' },
    { label: 'Order Now', href: 'https://wa.me/', style: '' },
  ];

  let garlandSegment = createMarigoldSegmentSvg();
  let trackHtml = '';

  // Generate a sequence of garland units containing hanging nav items
  for (let i = 0; i < 8; i++) {
    const item = navItems[i % navItems.length];
    trackHtml += `
      <div class="garland-unit">
        ${garlandSegment}
        <a href="${item.href}" class="hanging-block">
          <div class="hanging-string"></div>
          <div class="hanging-card ${item.style}">${item.label}</div>
        </a>
      </div>
    `;
  }

  // Double the sequence for seamless infinite scrolling loop
  track.innerHTML = trackHtml + trackHtml;
}

// Render Bottom Marigold Garland Slider
function initBottomGarland() {
  const track = document.getElementById('bottomGarlandTrack');
  if (!track) return;

  let garlandSegment = createMarigoldSegmentSvg();
  let trackHtml = '';

  for (let i = 0; i < 8; i++) {
    trackHtml += `<div class="garland-unit">${garlandSegment}</div>`;
  }

  track.innerHTML = trackHtml + trackHtml;
}

// Spring Text Animation for "Rangeen Diaries"
function initTitleAnimation() {
  const titleEl = document.getElementById('animatedTitle');
  if (!titleEl) return;

  const text = titleEl.textContent;
  const words = text.split(' ');

  const colors = ['var(--jamun)', 'var(--anaar)'];
  titleEl.innerHTML = words.map((word, i) => {
    return `<span class="animated-word" style="animation-delay: ${i * 0.18}s; color: ${colors[i % colors.length]};">${word} </span>`;
  }).join('');
}

document.addEventListener('DOMContentLoaded', function () {
  initTitleAnimation();
  initTopNavGarland();
  initBottomGarland();
});