// Shree Engineers - Plain JavaScript Logic

// --- 1. Engineering Services Data & Dynamic Tab Switcher ---
const engineeringData = {
  "autocad-2d-3d": {
    badge: "Core Engineering",
    title: "AutoCAD 2D & 3D Design",
    brochure: "docs/shree-engineers-autocad-brochure.pdf",
    brochureName: "AutoCAD 2D & 3D Brochure",
    desc: "We provide comprehensive 2D drafting and 3D modeling solutions following ISO, DIN, and ASME drafting standards. From conceptual sketches to fabrication-ready shop drawings, our models ensure seamless manufacturing integration and zero clash tolerance.",
    subcategories: null,
    highlights: [
      "Fabrication & Manufacturing Drawings",
      "Assembly & Disassembly Modeling",
      "GA (General Arrangement) Drawings",
      "BOM (Bill of Materials) Generation",
      "Reverse Engineering from Physical Prototypes"
    ],
    standards: ["ASME Y14.5", "ISO 128", "DIN ISO 2768"],
    deliverables: ["DWG / DXF Files", "STEP / IGES 3D Models", "High-Res PDF Plot Sheets"]
  },
  "mechanical-equipment": {
    badge: "Industrial Equipment",
    title: "Mechanical Equipment Design",
    brochure: "docs/02-pressure-vessel-design.pdf",
    brochureName: "Pressure Vessel & Equipment Brochure",
    desc: "Specialized engineering design calculations, FEA verification, and detailing for static process plant equipment, catering to oil & gas, chemical, petrochemical, and power generation industries.",
    subcategories: [
      {
        name: "Pressure Vessels",
        code: "ASME Sec VIII Div 1 & 2",
        detail: "Internal/external pressure calculations, nozzle reinforcement, saddle & skirt support design, hydro-test analysis.",
        brochure: "docs/02-pressure-vessel-design.pdf"
      },
      {
        name: "Heat Exchangers [Shell & Tube]",
        code: "TEMA & ASME Sec VIII",
        detail: "Thermal rating, tube-sheet thickness, baffle spacing, floating head / fixed tube-sheet mechanical engineering.",
        brochure: "docs/03-heat-exchanger-design.pdf"
      },
      {
        name: "Storage Tanks",
        code: "API 650 & API 620",
        detail: "Atmospheric & low-pressure storage tank design, shell thickness computation, cone/floating roof, wind girder & seismic load verification.",
        brochure: "docs/04-api-650-storage-tank-design.pdf"
      }
    ],
    highlights: [
      "Code Compliance: ASME Sec VIII Div 1 & 2, TEMA, API 650",
      "Finite Element Analysis (FEA) Stress Verification",
      "Nozzle Reinforcement & Load Calculations (WRC 107/297)",
      "Fabrication Tolerances & Hydrostatic Test Procedures"
    ],
    standards: ["ASME Sec VIII", "TEMA Class R, C, B", "API 650", "EN 13445"],
    deliverables: ["Mechanical Data Sheets", "Fabrication GA & Detail Drawings", "Complete Calculation Dossiers"]
  },
  "machine-compound-design": {
    badge: "Custom Machinery",
    title: "Mechanical Machine & Component Design",
    brochure: "docs/07-mechanical-machine-design.pdf",
    brochureName: "Machine & Component Design Brochure",
    desc: "We turn complex mechanical requirements into operational reality. From custom automation machinery, conveyor systems, and hydraulic/pneumatic test rigs to compound mechanical assemblies, we handle kinematics, stress distribution, and component life calculations.",
    subcategories: null,
    highlights: [
      "Custom Automation & Material Handling Equipment",
      "Compound Gearbox, Transmission & Cam Design",
      "Hydraulic & Pneumatic Circuit Integration",
      "Structural Stress Analysis & Dynamic Balancing",
      "Design for Manufacturing & Assembly (DFMA)"
    ],
    standards: ["AGMA (Gears)", "ISO DIN Machinery Directives", "ASTM Materials"],
    deliverables: ["Kinematic Simulations", "Exploded View & Parts Catalogs", "Full Tolerance Stack-up Reports"]
  },
  "civil-structural-design": {
    badge: "Structural Integrity",
    title: "Civil & Structural Design",
    brochure: "docs/06-civil-structural-engineering.pdf",
    brochureName: "Civil & Structural Design Brochure",
    desc: "Specialized in structural design for industrial plant buildings, equipment support structures, pipe racks, platform stairways, and foundations. Engineered to withstand heavy dead loads, dynamic operating machinery, wind, and seismic conditions.",
    subcategories: null,
    highlights: [
      "Industrial Pipe Racks & Technological Structures",
      "Equipment Foundation & Equipment Skids (Dynamic / Static)",
      "Steel Sheds, Warehouses & Mezzanine Floors",
      "Connection Detailing (Bolted & Welded)",
      "Wind (IS 875 / ASCE 7) & Seismic (IS 1893) Analysis"
    ],
    standards: ["AISC 360", "IS 800:2007", "IS 456 (Concrete)", "Eurocode 3"],
    deliverables: ["STAAD.Pro / ETABS Models", "Fabrication & Erection Shop Drawings", "Bar Bending Schedules (BBS)"]
  },
  "piping-e3d-works": {
    badge: "3D Plant Piping",
    title: "Piping Design Works & AVEVA E3D",
    brochure: "docs/05-aveva-e3d-plant-design.pdf",
    brochureName: "AVEVA E3D Plant Piping Brochure",
    desc: "Delivering end-to-end piping engineering using industry gold-standard tools like AVEVA E3D / PDMS and AutoCAD Plant 3D. We engineer clash-free plant layouts, plot plans, piping isometrics with full BOM, and thermal stress calculations.",
    subcategories: null,
    highlights: [
      "AVEVA E3D / PDMS Intelligent 3D Plant Modeling",
      "Piping Stress Analysis using CAESAR II (Thermal, Sustained, Occasional)",
      "Piping & Instrumentation Diagrams (P&ID) Implementation",
      "Isometric Drawing Generation with complete MTO/BOM",
      "Pipe Support Design & Optimization (Spring, Rigid, Guides)"
    ],
    standards: ["ASME B31.3 (Process Piping)", "ASME B31.1 (Power)", "MSS-SP Supports"],
    deliverables: ["E3D 3D Database Models", "Piping Isometrics & Spool Sheets", "Stress Analysis Reports & Support Schedules"]
  }
};

function selectEngineeringTab(serviceKey) {
  const data = engineeringData[serviceKey];
  if (!data) return;

  // Update tab buttons
  document.querySelectorAll('.service-tab-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-tab') === serviceKey) {
      btn.classList.add('active');
    }
  });

  // Update badge and title
  document.getElementById('eng-badge').textContent = data.badge;
  document.getElementById('eng-title').textContent = data.title;
  document.getElementById('eng-desc').textContent = data.desc;

  // Render Subcategories if available
  const subContainer = document.getElementById('eng-subcategories-container');
  if (data.subcategories) {
    let subHtml = `
      <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-sky-800 flex items-center gap-1.5 mb-2.5">
        <i data-lucide="boxes" class="w-3.5 h-3.5 text-sky-600"></i>
        Specialized Equipment Verticals
      </h4>
      <div class="grid sm:grid-cols-3 gap-3">
    `;
    data.subcategories.forEach(sub => {
      subHtml += `
        <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-400 hover:bg-sky-50/50 transition-all flex flex-col justify-between">
          <div>
            <div class="text-sm font-bold text-slate-900 mb-1">${sub.name}</div>
            <div class="text-[10px] font-mono font-bold text-amber-700 mb-1.5">${sub.code}</div>
            <div class="text-xs text-slate-600 leading-snug">${sub.detail}</div>
          </div>
          ${sub.brochure ? `
            <div class="pt-2 mt-2 border-t border-slate-200/80">
              <a href="${sub.brochure}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-[11px] font-bold text-sky-700 hover:text-sky-900 bg-white hover:bg-sky-100 px-2.5 py-1 rounded-lg border border-sky-200 shadow-xs transition-colors">
                <i data-lucide="file-text" class="w-3 h-3 text-sky-600"></i>
                <span>View Brochure</span>
              </a>
            </div>
          ` : ''}
        </div>
      `;
    });
    subHtml += `</div>`;
    subContainer.innerHTML = subHtml;
    subContainer.classList.remove('hidden');
  } else {
    subContainer.innerHTML = '';
    subContainer.classList.add('hidden');
  }

  // Render Highlights
  const hlContainer = document.getElementById('eng-highlights-container');
  let hlHtml = '';
  data.highlights.forEach(hl => {
    hlHtml += `
      <div class="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
        <span class="text-sky-600 font-bold mt-0.5">▸</span>
        <span>${hl}</span>
      </div>
    `;
  });
  hlContainer.innerHTML = hlHtml;

  // Render Standards
  const stdContainer = document.getElementById('eng-standards-container');
  let stdHtml = '';
  data.standards.forEach(std => {
    stdHtml += `<span class="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-white border border-slate-200 text-sky-800 shadow-xs">${std}</span>`;
  });
  stdContainer.innerHTML = stdHtml;

  // Render Deliverables
  const delContainer = document.getElementById('eng-deliverables-container');
  let delHtml = '';
  data.deliverables.forEach(del => {
    delHtml += `
      <li class="flex items-center gap-2">
        <span class="w-1.5 h-1.5 rounded-full bg-sky-600"></span>
        <span>${del}</span>
      </li>
    `;
  });
  delContainer.innerHTML = delHtml;

  // Render Service Brochure Button if available
  const brochureContainer = document.getElementById('eng-brochure-container');
  if (brochureContainer) {
    if (data.brochure) {
      brochureContainer.innerHTML = `
        <a href="${data.brochure}" target="_blank" rel="noopener noreferrer" class="w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-sky-800 bg-white hover:bg-sky-50 border border-sky-300 hover:border-sky-500 shadow-xs flex items-center justify-center gap-2 transition-all mb-2.5" title="View Technical Brochure (PDF)">
          <i data-lucide="file-text" class="w-4 h-4 text-sky-600"></i>
          <span>View Brochure / More Details (PDF)</span>
        </a>
      `;
    } else {
      brochureContainer.innerHTML = '';
    }
  }

  // Update CTA button
  const ctaBtn = document.getElementById('eng-inquire-btn');
  ctaBtn.onclick = () => openQuoteModal(data.title);
  ctaBtn.querySelector('.eng-btn-text').textContent = `Inquire for ${data.title}`;

  if (window.lucide) {
    lucide.createIcons();
  }
}

// --- 2. Tech Stack Matrix Filtering ---
function filterTech(category) {
  document.querySelectorAll('.tech-filter-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-tech') === category) {
      btn.classList.add('active');
    }
  });

  const cards = document.querySelectorAll('.tech-card');
  cards.forEach(card => {
    if (category === 'all' || card.getAttribute('data-cat') === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// --- 3. Portfolio Projects Filtering ---
function filterPortfolio(category) {
  document.querySelectorAll('.portfolio-filter-btn').forEach(btn => {
    btn.classList.remove('active', 'active-software');
    if (btn.getAttribute('data-filter') === category) {
      if (category === 'software') {
        btn.classList.add('active-software');
      } else {
        btn.classList.add('active');
      }
    }
  });

  const cards = document.querySelectorAll('.portfolio-card');
  cards.forEach(card => {
    if (category === 'all' || card.getAttribute('data-type') === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// --- 4. Interactive Quotation Modal ---
function openQuoteModal(initialService = '') {
  const modal = document.getElementById('quote-modal');
  const serviceSelect = document.getElementById('modal-service-select');
  if (initialService && serviceSelect) {
    for (let i = 0; i < serviceSelect.options.length; i++) {
      if (serviceSelect.options[i].text.toLowerCase().includes(initialService.toLowerCase()) || 
          initialService.toLowerCase().includes(serviceSelect.options[i].text.toLowerCase())) {
        serviceSelect.selectedIndex = i;
        break;
      }
    }
  }
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeQuoteModal() {
  const modal = document.getElementById('quote-modal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
  // Reset form status
  document.getElementById('modal-form-view').classList.remove('hidden');
  document.getElementById('modal-success-view').classList.add('hidden');
}

function handleQuoteSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('modal-name').value;
  document.getElementById('success-client-name').textContent = name || 'Valued Client';
  document.getElementById('modal-form-view').classList.add('hidden');
  document.getElementById('modal-success-view').classList.remove('hidden');
}

function sendWhatsAppFromModal() {
  const name = document.getElementById('modal-name').value || 'Visitor';
  const service = document.getElementById('modal-service-select').value;
  const phone = document.getElementById('modal-phone').value || 'N/A';
  const timeline = document.getElementById('modal-timeline').value;
  const notes = document.getElementById('modal-notes').value || 'Interested in quotation';

  const text = `*New Inquiry - Shree Engineers*%0A*Name:* ${encodeURIComponent(name)}%0A*Service:* ${encodeURIComponent(service)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Timeline:* ${encodeURIComponent(timeline)}%0A*Details:* ${encodeURIComponent(notes)}`;
  window.open(`https://wa.me/918976600537?text=${text}`, '_blank');
}

// --- 5. Contact Form Handler ---
function handleContactSubmit(e) {
  e.preventDefault();
  document.getElementById('contact-form-container').classList.add('hidden');
  document.getElementById('contact-success-container').classList.remove('hidden');
}

function resetContactForm() {
  document.getElementById('contact-form').reset();
  document.getElementById('contact-form-container').classList.remove('hidden');
  document.getElementById('contact-success-container').classList.add('hidden');
}

// --- 6. FAQs Accordion Toggle ---
function toggleFaq(button) {
  const item = button.closest('.faq-item');
  const isActive = item.classList.contains('active');
  
  // Close all other FAQs
  document.querySelectorAll('.faq-item').forEach(i => {
    i.classList.remove('active');
  });

  // Toggle clicked one
  if (!isActive) {
    item.classList.add('active');
  }
}

// --- 7. Mobile Drawer Toggle ---
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const btn = document.getElementById('mobile-menu-btn');
  if (menu.classList.contains('hidden-menu')) {
    menu.classList.remove('hidden-menu');
  } else {
    menu.classList.add('hidden-menu');
  }
}

// --- 8. Scroll to Top ---
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- 9. Window Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // Sticky Navbar scroll effect
  const navbar = document.getElementById('main-navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('shadow-sm', 'bg-white/95');
      navbar.classList.remove('bg-white/80');
    } else {
      navbar.classList.remove('shadow-sm', 'bg-white/95');
      navbar.classList.add('bg-white/80');
    }
  });

  // Initialize first engineering tab
  selectEngineeringTab('autocad-2d-3d');
});
