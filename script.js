/* -------------------------------------------------------------------------- */
/*             DR. DRIVING — VEHICLE COMPARISON & DECISION PLATFORM           */
/*             Core Application Logic & Interactive Features                  */
/* -------------------------------------------------------------------------- */

// Global vehicle dataset (loaded from vehicles-data.js or window.VEHICLES)
var VEHICLES = (typeof window !== "undefined" && window.VEHICLES) ? window.VEHICLES : (typeof VEHICLES !== "undefined" ? VEHICLES : []);

function getVehicleFallbackImage(type) {
  return type === "bike"
    ? "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80"
    : "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80";
}

/* ---------------- STATE MANAGEMENT ---------------- */
function getCompareList() {
  try {
    const stored = localStorage.getItem("dr_driving_compare_list");
    if (stored !== null) {
      const raw = JSON.parse(stored);
      if (Array.isArray(raw)) {
        return raw.filter(id => VEHICLES.some(v => v.id === id));
      }
    }
    return [];
  } catch (e) {
    return [];
  }
}

function saveCompareList(list) {
  localStorage.setItem("dr_driving_compare_list", JSON.stringify(list));
  updateCompareDockUI();
}

function toggleCompareVehicle(id) {
  let list = getCompareList();
  if (list.includes(id)) {
    list = list.filter(item => item !== id);
    showToast("Removed from comparison dock");
  } else {
    if (list.length >= 3) {
      showToast("Maximum 3 vehicles allowed for side-by-side comparison!");
      return;
    }
    list.push(id);
    showToast("Added to comparison dock");
  }
  saveCompareList(list);
  if (document.getElementById("vehicleGrid")) {
    renderCatalog();
  }
}

function clearCompareList() {
  saveCompareList([]);
  if (document.getElementById("vehicleGrid")) {
    renderCatalog();
  }
  showToast("Comparison dock cleared");
}

function updateCompareDockUI() {
  const list = getCompareList();
  const badges = document.querySelectorAll("[data-compare-count]");
  badges.forEach(b => b.textContent = list.length);

  const dock = document.getElementById("floatingDock");
  if (!dock) return;

  const container = document.getElementById("dockItemsRow");
  if (list.length === 0) {
    dock.classList.remove("open");
    if (container) container.innerHTML = "";
  } else {
    dock.classList.add("open");
    if (container) {
      container.innerHTML = list.map(id => {
        const v = VEHICLES.find(item => item.id === id);
        if (!v) return "";
        return `
          <div class="dock-item-pill">
            <span>${v.name}</span>
            <button onclick="toggleCompareVehicle('${v.id}')" title="Remove">✕</button>
          </div>`;
      }).join("");
    }
  }
}

/* ---------------- TOAST NOTIFICATION ---------------- */
function showToast(msg) {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span style="color:var(--primary)">⚡</span> <span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 2200);
}

/* ---------------- CARD RENDERING HELPER ---------------- */
function renderVehicleCardHTML(v) {
  const isCompared = getCompareList().includes(v.id);
  const fallbackImg = getVehicleFallbackImage(v.type);
  const powerUnit = v.powerDisplay.includes("PS") ? "PS" : "HP";
  const thirdMetricLabel = v.type === "bike" ? "TOP SPEED" : "0-100";
  const thirdMetricVal = v.type === "bike" ? v.topSpeed.split(" ")[0] : v.acceleration.split(" ")[0];

  return `
    <div class="vehicle-card" onclick="openVehicleModal('${v.id}')">
      <div class="vehicle-media">
        <img src="${v.image}" alt="${v.name}" loading="lazy" onerror="this.onerror=null;this.src='${fallbackImg}';">
        <span class="vehicle-category-chip">${v.year} · ${v.category} · ${v.fuel}</span>
      </div>
      <div class="vehicle-body">
        <div style="font-size:0.75rem;font-weight:700;color:var(--primary);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:2px;">
          ${v.manufacturer}
        </div>
        <h3 class="vehicle-title">${v.name}</h3>
        <div class="vehicle-price">${v.priceDisplay}</div>
        
        <div class="vehicle-specs-row">
          <div>
            <span class="spec-pill-label">POWER</span>
            <span class="spec-pill-val">${v.powerVal} ${powerUnit}</span>
          </div>
          <div>
            <span class="spec-pill-label">TORQUE</span>
            <span class="spec-pill-val">${v.torqueVal} Nm</span>
          </div>
          <div>
            <span class="spec-pill-label">${thirdMetricLabel}</span>
            <span class="spec-pill-val">${thirdMetricVal}</span>
          </div>
        </div>

        <div class="vehicle-actions">
          <button class="btn small ${isCompared ? 'primary' : ''}" style="flex:1" onclick="event.stopPropagation(); toggleCompareVehicle('${v.id}')">
            ${isCompared ? '✓ In Compare Dock' : '+ Add to Compare'}
          </button>
        </div>
      </div>
    </div>`;
}

function renderShowdownCardHTML(v1Id, v2Id, title, verdict) {
  const v1 = VEHICLES.find(v => v.id === v1Id);
  const v2 = VEHICLES.find(v => v.id === v2Id);
  if (!v1 || !v2) return "";

  const fallback1 = getVehicleFallbackImage(v1.type);
  const fallback2 = getVehicleFallbackImage(v2.type);

  return `
    <div class="showdown-card">
      <span class="showdown-tag">Featured Duel</span>
      <h3 style="font-size:1.25rem;margin-bottom:14px;">${title}</h3>
      <div class="vs-preview-row">
        <div class="vs-item">
          <div class="vs-img">
            <img src="${v1.image}" alt="${v1.name}" onerror="this.onerror=null;this.src='${fallback1}';">
          </div>
          <div class="vs-item-name">${v1.name}</div>
          <div class="vs-item-price">${v1.priceDisplay}</div>
        </div>
        <div class="vs-divider">VS</div>
        <div class="vs-item">
          <div class="vs-img">
            <img src="${v2.image}" alt="${v2.name}" onerror="this.onerror=null;this.src='${fallback2}';">
          </div>
          <div class="vs-item-name">${v2.name}</div>
          <div class="vs-item-price">${v2.priceDisplay}</div>
        </div>
      </div>
      <div class="showdown-verdict">
        <strong>Verdict:</strong> ${verdict}
      </div>
      <a href="compare.html?v1=${v1.id}&v2=${v2.id}" class="btn primary small full">Launch Full Duel Matrix →</a>
    </div>`;
}

/* ---------------- SIDE-BY-SIDE MATRIX RENDERER (`compare.html`) ---------------- */
function renderCompareMatrix() {
  const table = document.getElementById("compareTable");
  if (!table) return;

  const urlParams = new URLSearchParams(window.location.search);
  let v1Id = urlParams.get("v1");
  let v2Id = urlParams.get("v2");
  let v3Id = urlParams.get("v3");

  let activeIds = [v1Id, v2Id, v3Id].filter(Boolean);
  if (activeIds.length === 0) {
    activeIds = getCompareList();
  }
  if (activeIds.length === 0) {
    activeIds = ["porsche-911-gt3-rs", "ferrari-296-gtb"];
  }

  const selectedVehicles = activeIds.map(id => VEHICLES.find(v => v.id === id)).filter(Boolean);

  if (selectedVehicles.length === 0) {
    table.innerHTML = `<tbody><tr><td style="text-align:center;padding:40px;color:var(--text-muted);">Please select at least one valid vehicle from the dropdowns above.</td></tr></tbody>`;
    return;
  }

  // Set initial selects if present in DOM
  ["selectV1", "selectV2", "selectV3"].forEach((selectId, index) => {
    const el = document.getElementById(selectId);
    if (el) {
      el.value = selectedVehicles[index]?.id || "";
    }
  });

  // Calculate highest/lowest metrics for winning highlighting
  const maxPower = Math.max(...selectedVehicles.map(v => v.powerVal || 0));
  const maxTorque = Math.max(...selectedVehicles.map(v => v.torqueVal || 0));
  const maxMileage = Math.max(...selectedVehicles.map(v => v.mileageVal || 0));
  const minPrice = Math.min(...selectedVehicles.map(v => v.priceVal || Infinity));

  // Determine fastest 0-100 time
  const accelTimes = selectedVehicles.map(v => {
    const match = (v.acceleration || "").match(/[\d.]+/);
    return match ? parseFloat(match[0]) : null;
  });
  const validAccels = accelTimes.filter(t => t !== null);
  const minAccel = validAccels.length > 0 ? Math.min(...validAccels) : null;

  let html = `
    <thead>
      <tr class="sticky-header-row">
        <th style="width:20%">Specification</th>
        ${selectedVehicles.map(v => {
          const fallback = getVehicleFallbackImage(v.type);
          return `
          <th style="width:${80 / selectedVehicles.length}%">
            <div class="v-header-card">
              <img src="${v.image}" class="v-header-img" alt="${v.name}" onerror="this.onerror=null;this.src='${fallback}';">
              <div style="font-size:0.75rem;color:var(--primary);font-weight:700;text-transform:uppercase;">${v.manufacturer} · ${v.year}</div>
              <div class="v-header-title">${v.name}</div>
              <div class="v-header-price">${v.priceDisplay}</div>
              <span class="verdict-chip">${v.verdictTag}</span>
            </div>
          </th>`;
        }).join("")}
      </tr>
    </thead>
    <tbody>
      <!-- SECTION 1: OVERVIEW & PRICING -->
      <tr><td colspan="${selectedVehicles.length + 1}" class="table-sec-header">Overview & Pricing (INR)</td></tr>
      <tr>
        <td>Ex-Showroom Price</td>
        ${selectedVehicles.map(v => `
          <td class="${v.priceVal === minPrice && selectedVehicles.length > 1 ? 'is-winner' : ''}">${v.exShowroomPrice || v.priceDisplay}</td>
        `).join("")}
      </tr>
      <tr>
        <td>Estimated On-Road Price</td>
        ${selectedVehicles.map(v => `<td>${v.onRoadPrice || 'N/A'}</td>`).join("")}
      </tr>
      <tr>
        <td>Manufacturer & Model Year</td>
        ${selectedVehicles.map(v => `<td>${v.manufacturer} (${v.year})</td>`).join("")}
      </tr>
      <tr>
        <td>Vehicle Category</td>
        ${selectedVehicles.map(v => `<td>${v.category} (${v.type === 'car' ? 'Car' : 'Motorcycle'})</td>`).join("")}
      </tr>
      <tr>
        <td>Fuel / Powertrain</td>
        ${selectedVehicles.map(v => `<td>${v.fuel}</td>`).join("")}
      </tr>

      <!-- SECTION 2: PERFORMANCE & POWERTRAIN -->
      <tr><td colspan="${selectedVehicles.length + 1}" class="table-sec-header">Engine & Performance</td></tr>
      <tr>
        <td>Engine / Displacement</td>
        ${selectedVehicles.map(v => `<td>${v.engine}</td>`).join("")}
      </tr>
      <tr>
        <td>Max Power Output</td>
        ${selectedVehicles.map(v => `
          <td class="${v.powerVal === maxPower && selectedVehicles.length > 1 ? 'is-winner' : ''}">${v.powerDisplay}</td>
        `).join("")}
      </tr>
      <tr>
        <td>Max Torque</td>
        ${selectedVehicles.map(v => `
          <td class="${v.torqueVal === maxTorque && selectedVehicles.length > 1 ? 'is-winner' : ''}">${v.torqueDisplay}</td>
        `).join("")}
      </tr>
      <tr>
        <td>0–100 km/h Acceleration</td>
        ${selectedVehicles.map((v, i) => {
          const isFastest = minAccel !== null && accelTimes[i] === minAccel && selectedVehicles.length > 1;
          return `<td class="${isFastest ? 'is-winner' : ''}">${v.acceleration || 'N/A'}</td>`;
        }).join("")}
      </tr>
      <tr>
        <td>Top Speed</td>
        ${selectedVehicles.map(v => `<td>${v.topSpeed || 'N/A'}</td>`).join("")}
      </tr>
      <tr>
        <td>Transmission</td>
        ${selectedVehicles.map(v => `<td>${v.transmission}</td>`).join("")}
      </tr>
      <tr>
        <td>Fuel Economy / Range</td>
        ${selectedVehicles.map(v => `
          <td class="${v.mileageVal === maxMileage && selectedVehicles.length > 1 ? 'is-winner' : ''}">${v.mileageDisplay}</td>
        `).join("")}
      </tr>

      <!-- SECTION 3: CAPACITIES, CHASSIS & SAFETY -->
      <tr><td colspan="${selectedVehicles.length + 1}" class="table-sec-header">Chassis, Capacities & Safety</td></tr>
      <tr>
        <td>Drive Type</td>
        ${selectedVehicles.map(v => `<td>${v.driveType || 'N/A'}</td>`).join("")}
      </tr>
      <tr>
        <td>Seating Capacity</td>
        ${selectedVehicles.map(v => `<td>${v.seating || 'N/A'}</td>`).join("")}
      </tr>
      <tr>
        <td>Luggage / Kerb Weight</td>
        ${selectedVehicles.map(v => `
          <td>${v.type === 'car' ? ('Boot: ' + (v.bootSpace || 'N/A')) : ('Weight: ' + (v.kerbWeight || 'N/A') + ' · Seat: ' + (v.seatHeight || 'N/A'))}</td>
        `).join("")}
      </tr>
      <tr>
        <td>Safety Systems & Tech</td>
        ${selectedVehicles.map(v => `<td>${v.safetyRating || 'N/A'}</td>`).join("")}
      </tr>

      <!-- SECTION 4: PROS & CONS BREAKDOWN -->
      <tr><td colspan="${selectedVehicles.length + 1}" class="table-sec-header">Pros & Cons Breakdown</td></tr>
      <tr>
        <td>Key Advantages (Pros)</td>
        ${selectedVehicles.map(v => `
          <td>
            <ul class="pros-list">
              ${(v.pros || []).map(p => `<li>${p}</li>`).join("")}
            </ul>
          </td>
        `).join("")}
      </tr>
      <tr>
        <td>Trade-offs (Cons)</td>
        ${selectedVehicles.map(v => `
          <td>
            <ul class="cons-list">
              ${(v.cons || []).map(c => `<li>${c}</li>`).join("")}
            </ul>
          </td>
        `).join("")}
      </tr>
    </tbody>`;

  table.innerHTML = html;
}

function handleMatrixSelectChange() {
  const v1 = document.getElementById("selectV1")?.value;
  const v2 = document.getElementById("selectV2")?.value;
  const v3 = document.getElementById("selectV3")?.value;

  const params = new URLSearchParams();
  if (v1) params.set("v1", v1);
  if (v2) params.set("v2", v2);
  if (v3) params.set("v3", v3);

  window.history.replaceState({}, "", `${window.location.pathname}?${params.toString()}`);
  renderCompareMatrix();
}

/* ---------------- POPULATE COMPARISON SELECT DROPDOWNS ---------------- */
function populateSelectDropdowns() {
  const selectIds = ["selectV1", "selectV2", "selectV3", "quickV1", "quickV2"];
  selectIds.forEach(selectId => {
    const el = document.getElementById(selectId);
    if (!el) return;

    let optionsHTML = `<option value="">-- Choose Vehicle --</option>`;
    
    // Group options by Cars and Motorcycles for intuitive navigation
    const carsList = VEHICLES.filter(v => v.type === "car");
    const bikesList = VEHICLES.filter(v => v.type === "bike");

    if (carsList.length > 0) {
      optionsHTML += `<optgroup label="🚗 Luxury Cars (${carsList.length})">`;
      optionsHTML += carsList.map(v => `<option value="${v.id}">${v.name} (${v.priceDisplay})</option>`).join("");
      optionsHTML += `</optgroup>`;
    }
    if (bikesList.length > 0) {
      optionsHTML += `<optgroup label="🏍️ Premium Motorcycles (${bikesList.length})">`;
      optionsHTML += bikesList.map(v => `<option value="${v.id}">${v.name} (${v.priceDisplay})</option>`).join("");
      optionsHTML += `</optgroup>`;
    }

    el.innerHTML = optionsHTML;
  });
}

function launchQuickVs() {
  const v1 = document.getElementById("quickV1")?.value;
  const v2 = document.getElementById("quickV2")?.value;
  if (!v1 || !v2) {
    showToast("Please select 2 vehicles to compare!");
    return;
  }
  window.location.href = `compare.html?v1=${v1}&v2=${v2}`;
}

/* ---------------- DYNAMIC CATALOG PAGE (`vehicles.html`) ---------------- */
function initCatalogFilters() {
  // Populate Brand Filter
  const brandSelect = document.getElementById("catalogBrandFilter");
  if (brandSelect && brandSelect.options.length <= 1) {
    const brands = [...new Set(VEHICLES.map(v => v.manufacturer))].sort();
    brands.forEach(b => {
      const opt = document.createElement("option");
      opt.value = b;
      opt.textContent = b;
      brandSelect.appendChild(opt);
    });
  }

  // Populate Category Filter
  const catSelect = document.getElementById("catalogCategoryFilter");
  if (catSelect && catSelect.options.length <= 1) {
    const categories = [...new Set(VEHICLES.map(v => v.category))].sort();
    categories.forEach(c => {
      const opt = document.createElement("option");
      opt.value = c;
      opt.textContent = c;
      catSelect.appendChild(opt);
    });
  }
}

function resetCatalogFilters() {
  const search = document.getElementById("catalogSearch");
  if (search) search.value = "";

  const allTypeRadio = document.querySelector('input[name="f-type"][value="all"]');
  if (allTypeRadio) allTypeRadio.checked = true;

  const brandSelect = document.getElementById("catalogBrandFilter");
  if (brandSelect) brandSelect.value = "all";

  const catSelect = document.getElementById("catalogCategoryFilter");
  if (catSelect) catSelect.value = "all";

  const sortSelect = document.getElementById("catalogSortFilter");
  if (sortSelect) sortSelect.value = "default";

  document.querySelectorAll(".f-fuel").forEach(cb => cb.checked = false);

  renderCatalog();
  showToast("Filters reset to default");
}

function renderCatalog() {
  const grid = document.getElementById("vehicleGrid");
  if (!grid) return;

  initCatalogFilters();

  const typeFilter = document.querySelector('input[name="f-type"]:checked')?.value || "all";
  const searchQuery = (document.getElementById("catalogSearch")?.value || "").toLowerCase().trim();
  const selectedFuel = [...document.querySelectorAll(".f-fuel:checked")].map(cb => cb.value.toLowerCase());
  const brandFilter = document.getElementById("catalogBrandFilter")?.value || "all";
  const categoryFilter = document.getElementById("catalogCategoryFilter")?.value || "all";
  const sortFilter = document.getElementById("catalogSortFilter")?.value || "default";

  let filtered = VEHICLES.filter(v => {
    // 1. Vehicle Type Filter (all, car, bike)
    const typeOk = typeFilter === "all" || v.type === typeFilter;

    // 2. Search Query (name, manufacturer, brand, model, variant, category, fuel)
    const searchOk = !searchQuery || 
      v.name.toLowerCase().includes(searchQuery) || 
      v.manufacturer.toLowerCase().includes(searchQuery) ||
      (v.model && v.model.toLowerCase().includes(searchQuery)) ||
      (v.variant && v.variant.toLowerCase().includes(searchQuery)) ||
      v.category.toLowerCase().includes(searchQuery) ||
      v.fuel.toLowerCase().includes(searchQuery);

    // 3. Fuel Filter
    const fuelOk = selectedFuel.length === 0 || selectedFuel.some(f => v.fuel.toLowerCase().includes(f));

    // 4. Manufacturer Filter
    const brandOk = brandFilter === "all" || v.manufacturer === brandFilter;

    // 5. Category Filter
    const catOk = categoryFilter === "all" || v.category === categoryFilter;

    return typeOk && searchOk && fuelOk && brandOk && catOk;
  });

  // Sort Filter
  if (sortFilter === "price-asc") {
    filtered.sort((a, b) => a.priceVal - b.priceVal);
  } else if (sortFilter === "price-desc") {
    filtered.sort((a, b) => b.priceVal - a.priceVal);
  } else if (sortFilter === "power-desc") {
    filtered.sort((a, b) => b.powerVal - a.powerVal);
  } else if (sortFilter === "name-asc") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  const countEl = document.getElementById("catalogCount");
  if (countEl) countEl.textContent = filtered.length;

  grid.innerHTML = filtered.map(renderVehicleCardHTML).join("") ||
    `<div style="grid-column:1/-1;text-align:center;padding:50px 20px;background:rgba(255,255,255,0.02);border-radius:var(--radius-md);border:1px dashed var(--border-color);">
      <p style="font-size:1.1rem;color:var(--text-muted);margin-bottom:12px;">No vehicles match your active search and filter criteria.</p>
      <button class="btn small primary" onclick="resetCatalogFilters()">Reset All Filters</button>
    </div>`;
}

/* ---------------- HOME PAGE RENDERERS ---------------- */
function renderFeaturedShowdowns() {
  const container = document.getElementById("featuredShowdowns");
  if (!container) return;

  container.innerHTML = [
    renderShowdownCardHTML(
      "porsche-911-gt3-rs",
      "ferrari-296-gtb",
      "Track Benchmark vs Hybrid Maestro",
      "Porsche dominates active DRS aerodynamics & telepathic chassis feel; Ferrari leads on brutal 830 PS straight-line hybrid acceleration."
    ),
    renderShowdownCardHTML(
      "bmw-m5-competition",
      "mercedes-amg-gt-63",
      "Executive V8 Super-Sedan War",
      "BMW M5 delivers benchmark chassis agility and 530L boot space; Mercedes-AMG GT 63 unleashes 639 PS handcrafted V8 muscle and drift-ready 4MATIC+."
    ),
    renderShowdownCardHTML(
      "ducati-panigale-v4-sp2",
      "bmw-m-1000-rr",
      "Pinnacle 1000cc Superbike Crown",
      "Ducati offers dry-clutch Italian V4 soul and carbon rims; BMW M 1000 RR unleashes 314 km/h top speed with 22.6 kg downforce M winglets."
    )
  ].join("");
}

/* ---------------- VEHICLE DETAIL MODAL ---------------- */
function openVehicleModal(id) {
  const v = VEHICLES.find(item => item.id === id);
  if (!v) return;

  const overlay = document.getElementById("modalOverlay");
  const card = document.getElementById("modalCard");
  if (!overlay || !card) return;

  const fallbackImg = getVehicleFallbackImage(v.type);

  card.innerHTML = `
    <button class="modal-close" onclick="closeVehicleModal()" title="Close">✕</button>
    
    <div style="aspect-ratio:16/9;border-radius:var(--radius-md);overflow:hidden;margin-bottom:20px;border:1px solid var(--border-color);">
      <img src="${v.image}" alt="${v.name}" style="width:100%;height:100%;object-fit:cover;" onerror="this.onerror=null;this.src='${fallbackImg}';">
    </div>

    <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px;margin-bottom:8px;">
      <div>
        <span class="eyebrow">${v.year} · ${v.manufacturer} · ${v.category}</span>
        <h2 style="font-size:1.85rem;margin-bottom:4px;">${v.name}</h2>
        <div style="font-size:0.88rem;color:var(--text-muted);font-weight:600;">Variant: ${v.variant || 'Standard'}</div>
      </div>
      <div style="text-align:right;">
        <div style="font-family:'JetBrains Mono',monospace;color:var(--primary);font-size:1.4rem;font-weight:800;">${v.priceDisplay}</div>
        <div style="font-size:0.8rem;color:var(--text-dim);font-family:'JetBrains Mono',monospace;">Est. On-Road: ${v.onRoadPrice || 'N/A'}</div>
      </div>
    </div>
    
    <p style="color:var(--text-main);font-size:0.95rem;line-height:1.6;margin-bottom:20px;background:rgba(255,255,255,0.02);padding:14px;border-radius:var(--radius-md);border-left:3px solid var(--primary);">
      ${v.description}
    </p>

    <!-- TECHNICAL SPECIFICATIONS GRID -->
    <h4 style="font-size:0.82rem;text-transform:uppercase;color:var(--primary);margin-bottom:12px;letter-spacing:0.08em;font-family:'JetBrains Mono',monospace;">
      Verified Technical Specifications
    </h4>
    <div class="modal-spec-grid">
      <div class="modal-spec-item">
        <span class="modal-spec-label">Engine / Displacement</span>
        <span class="modal-spec-value">${v.engine}</span>
      </div>
      <div class="modal-spec-item">
        <span class="modal-spec-label">Max Power Output</span>
        <span class="modal-spec-value">${v.powerDisplay}</span>
      </div>
      <div class="modal-spec-item">
        <span class="modal-spec-label">Max Torque</span>
        <span class="modal-spec-value">${v.torqueDisplay}</span>
      </div>
      <div class="modal-spec-item">
        <span class="modal-spec-label">Transmission</span>
        <span class="modal-spec-value">${v.transmission}</span>
      </div>
      <div class="modal-spec-item">
        <span class="modal-spec-label">0–100 km/h Acceleration</span>
        <span class="modal-spec-value">${v.acceleration || 'N/A'}</span>
      </div>
      <div class="modal-spec-item">
        <span class="modal-spec-label">Top Speed</span>
        <span class="modal-spec-value">${v.topSpeed || 'N/A'}</span>
      </div>
      <div class="modal-spec-item">
        <span class="modal-spec-label">Fuel Economy / Range</span>
        <span class="modal-spec-value">${v.mileageDisplay}</span>
      </div>
      <div class="modal-spec-item">
        <span class="modal-spec-label">${v.type === 'car' ? 'Drive Type' : 'Final Drive'}</span>
        <span class="modal-spec-value">${v.driveType || 'N/A'}</span>
      </div>
      <div class="modal-spec-item">
        <span class="modal-spec-label">Seating Capacity</span>
        <span class="modal-spec-value">${v.seating || 'N/A'}</span>
      </div>
      <div class="modal-spec-item">
        <span class="modal-spec-label">${v.type === 'car' ? 'Trunk / Boot Space' : 'Kerb Weight & Seat Height'}</span>
        <span class="modal-spec-value">${v.type === 'car' ? (v.bootSpace || 'N/A') : ((v.kerbWeight || 'N/A') + ' · ' + (v.seatHeight || 'N/A'))}</span>
      </div>
      <div class="modal-spec-item" style="grid-column:1/-1;">
        <span class="modal-spec-label">Safety Rating & Chassis Engineering</span>
        <span class="modal-spec-value">${v.safetyRating || 'Comprehensive Safety Systems'}</span>
      </div>
    </div>

    <!-- COLOUR PALETTE -->
    ${v.colors && v.colors.length > 0 ? `
      <h4 style="font-size:0.82rem;text-transform:uppercase;color:var(--primary);margin-bottom:10px;letter-spacing:0.08em;font-family:'JetBrains Mono',monospace;">
        Available Paint Finishes
      </h4>
      <div class="modal-colors-row">
        ${v.colors.map(col => `<span class="color-chip">🎨 ${col}</span>`).join("")}
      </div>
    ` : ''}

    <!-- KEY FEATURES -->
    <div style="background:rgba(255,255,255,0.03);padding:18px;border-radius:var(--radius-md);margin-bottom:20px;border:1px solid var(--border-color);">
      <h4 style="font-size:0.82rem;text-transform:uppercase;color:var(--primary);margin-bottom:10px;letter-spacing:0.08em;font-family:'JetBrains Mono',monospace;">
        Key Standard Highlights & Features
      </h4>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;font-size:0.85rem;color:var(--text-muted);">
        ${(v.features || []).map(f => `<div>• ${f}</div>`).join("")}
      </div>
    </div>

    <!-- PROS & CONS -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px;">
      <div style="background:var(--winner-bg);border:1px solid var(--winner-border);padding:16px;border-radius:var(--radius-md);">
        <h5 style="color:var(--winner-green);margin-bottom:8px;font-size:0.85rem;text-transform:uppercase;">Advantages (Pros)</h5>
        <ul class="pros-list">
          ${(v.pros || []).map(p => `<li>${p}</li>`).join("")}
        </ul>
      </div>
      <div style="background:var(--loser-bg);border:1px solid rgba(239,68,68,0.25);padding:16px;border-radius:var(--radius-md);">
        <h5 style="color:var(--loser-red);margin-bottom:8px;font-size:0.85rem;text-transform:uppercase;">Trade-offs (Cons)</h5>
        <ul class="cons-list">
          ${(v.cons || []).map(c => `<li>${c}</li>`).join("")}
        </ul>
      </div>
    </div>

    <div style="display:flex;gap:12px;margin-bottom:14px;">
      <a href="compare.html?v1=${v.id}" class="btn primary full">⚡ Launch Duel with this Vehicle →</a>
      <button class="btn full" onclick="toggleCompareVehicle('${v.id}'); closeVehicleModal();">Add to Compare Dock</button>
    </div>`;

  overlay.classList.add("open");
  card.classList.add("open");
}

function closeVehicleModal() {
  const overlay = document.getElementById("modalOverlay");
  const card = document.getElementById("modalCard");
  if (overlay && card) {
    overlay.classList.remove("open");
    card.classList.remove("open");
  }
}

/* ---------------- DECISION FINDER QUIZ ---------------- */
const quizAnswers = { type: null, priority: null };

function selectQuizOption(step, field, value, btn) {
  quizAnswers[field] = value;
  btn.parentElement.querySelectorAll(".quiz-opt-btn").forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");
}

function goToQuizStep(stepNum) {
  document.querySelectorAll(".quiz-step").forEach(s => s.classList.remove("active"));
  const target = document.getElementById("quizStep" + stepNum);
  if (target) target.classList.add("active");

  const progressFill = document.getElementById("quizProgressFill");
  if (progressFill) progressFill.style.width = (stepNum / 3 * 100) + "%";

  if (stepNum === 3) renderQuizResults();
}

function renderQuizResults() {
  const resultsContainer = document.getElementById("quizResultsContainer");
  if (!resultsContainer) return;

  const targetType = quizAnswers.type || "car";
  const targetPriority = quizAnswers.priority || "performance";

  let candidates = VEHICLES.filter(v => v.type === targetType);
  if (candidates.length === 0) candidates = VEHICLES;

  let topMatches = [];

  if (targetType === "car") {
    if (targetPriority === "performance") {
      topMatches = [
        VEHICLES.find(v => v.id === "porsche-911-gt3-rs"),
        VEHICLES.find(v => v.id === "ferrari-296-gtb")
      ];
    } else if (targetPriority === "comfort") {
      topMatches = [
        VEHICLES.find(v => v.id === "rolls-royce-phantom-series-ii"),
        VEHICLES.find(v => v.id === "range-rover-sv-lwb")
      ];
    } else if (targetPriority === "offroad") {
      topMatches = [
        VEHICLES.find(v => v.id === "mercedes-g-class-g63"),
        VEHICLES.find(v => v.id === "land-rover-defender-110-v8")
      ];
    } else {
      // mileage
      topMatches = [
        VEHICLES.find(v => v.id === "volvo-s90-recharge"),
        VEHICLES.find(v => v.id === "volvo-xc90-recharge")
      ];
    }
  } else {
    // motorcycle
    if (targetPriority === "performance") {
      topMatches = [
        VEHICLES.find(v => v.id === "ducati-panigale-v4-sp2"),
        VEHICLES.find(v => v.id === "bmw-m-1000-rr")
      ];
    } else if (targetPriority === "comfort") {
      topMatches = [
        VEHICLES.find(v => v.id === "honda-gold-wing-tour"),
        VEHICLES.find(v => v.id === "bmw-r-18-transcontinental")
      ];
    } else if (targetPriority === "offroad") {
      topMatches = [
        VEHICLES.find(v => v.id === "bmw-r-1300-gs"),
        VEHICLES.find(v => v.id === "triumph-tiger-1200-rally-pro")
      ];
    } else {
      // mileage
      topMatches = [
        VEHICLES.find(v => v.id === "royal-enfield-continental-gt-650"),
        VEHICLES.find(v => v.id === "royal-enfield-super-meteor-650")
      ];
    }
  }

  topMatches = topMatches.filter(Boolean);
  if (topMatches.length < 2) {
    topMatches = candidates.slice(0, 2);
  }

  resultsContainer.innerHTML = `
    <div style="text-align:center;margin-bottom:28px;">
      <span class="eyebrow">Match Result</span>
      <h2 style="font-size:2rem;margin-bottom:8px;">Here are your Top 2 Matches!</h2>
      <p style="color:var(--text-muted)">Matched precisely against your preference for <strong>${targetType === 'car' ? 'Luxury Cars' : 'Premium Motorcycles'}</strong> prioritizing <strong>${targetPriority}</strong>.</p>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:32px;">
      ${topMatches.map(v => renderVehicleCardHTML(v)).join("")}
    </div>

    <div style="text-align:center;">
      <a href="compare.html?v1=${topMatches[0].id}&v2=${topMatches[1].id}" class="btn primary" style="padding:14px 32px;font-size:1rem;">
        ⚡ Compare These 2 Matches Side-by-Side →
      </a>
    </div>`;
}

/* ---------------- INITIALIZATION ---------------- */
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    updateCompareDockUI();
    populateSelectDropdowns();
    renderFeaturedShowdowns();
    renderCatalog();
    renderCompareMatrix();
  });
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    getCompareList,
    renderVehicleCardHTML,
    renderShowdownCardHTML
  };
}
