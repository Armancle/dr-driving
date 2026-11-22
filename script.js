/* ---------------- VEHICLE DATABASE (CARS & BIKES) ---------------- */
const VEHICLES = [
  {
    id: "innova-hycross",
    name: "Toyota Innova Hycross",
    brand: "Toyota",
    type: "car",
    category: "MPV",
    priceVal: 19.77,
    priceDisplay: "₹19.77 - 30.98 Lakh",
    fuel: "Strong Hybrid / Petrol",
    engine: "1987 cc TNGA 5th Gen Hybrid",
    powerVal: 186,
    powerDisplay: "186 PS @ 6000 rpm",
    torqueVal: 206,
    torqueDisplay: "206 Nm @ 4400 rpm",
    mileageVal: 23.24,
    mileageDisplay: "23.24 kmpl (ARAI Hybrid)",
    transmission: "e-CVT Automatic",
    seating: "7 - 8 Seater",
    safetyRating: "5 Star (ASEAN NCAP)",
    bootSpace: "300 L (Expandable to 991 L)",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
    verdictTag: "Best for Family & Mileage",
    pros: [
      "Unmatched fuel efficiency (23+ kmpl hybrid)",
      "Ultra-smooth e-CVT & silent electric drive mode",
      "Monocoque chassis delivers car-like ride & handling",
      "Ottoman lounge captain seats with footrests"
    ],
    cons: [
      "No Diesel engine option",
      "Long waiting period (up to 6 months)",
      "High top-variant pricing (> ₹30 Lakh)"
    ],
    features: [
      "Panoramic Sunroof with Mood Lighting",
      "Toyota Safety Sense 3.0 (Level 2 ADAS)",
      "Powered Ottoman 2nd Row Captain Seats",
      "10.1-inch Touchscreen + JBL 9-Speaker Audio",
      "360-Degree Camera with Dynamic Guidelines",
      "Ventilated Front Seats"
    ]
  },
  {
    id: "innova-crysta",
    name: "Toyota Innova Crysta",
    brand: "Toyota",
    type: "car",
    category: "MPV",
    priceVal: 19.99,
    priceDisplay: "₹19.99 - 26.55 Lakh",
    fuel: "Diesel",
    engine: "2393 cc 2.4L GD Turbo Diesel",
    powerVal: 150,
    powerDisplay: "150 PS @ 3400 rpm",
    torqueVal: 343,
    torqueDisplay: "343 Nm @ 1400-2800 rpm",
    mileageVal: 15.10,
    mileageDisplay: "15.1 kmpl (ARAI Diesel)",
    transmission: "5-Speed Manual",
    seating: "7 - 8 Seater",
    safetyRating: "5 Star (ASEAN NCAP)",
    bootSpace: "300 L (Expandable to 900 L)",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    verdictTag: "Raw Torque & Durability",
    pros: [
      "Bulletproof 2.4L GD Turbo Diesel engine durability",
      "High low-end torque (343 Nm) for heavy load pulling",
      "Rugged ladder-frame chassis built for rough Indian roads",
      "Higher resale value & legendary reliability"
    ],
    cons: [
      "No Automatic Transmission option available anymore",
      "Lacks modern ADAS or Panoramic Sunroof features",
      "Stiffer low-speed ride quality compared to Hycross"
    ],
    features: [
      "8-way Power Adjustable Driver Seat",
      "8-inch Touchscreen Infotainment",
      "7 SRS Airbags (Top Variant)",
      "Rear Automatic Climate Control",
      "Eco & Power Drive Modes",
      "Vehicle Stability Control (VSC) & Hill Start Assist"
    ]
  },
  {
    id: "mahindra-thar",
    name: "Mahindra Thar 4x4",
    brand: "Mahindra",
    type: "car",
    category: "SUV",
    priceVal: 11.35,
    priceDisplay: "₹11.35 - 17.60 Lakh",
    fuel: "Diesel / Petrol",
    engine: "2.0L mStallion Turbo Petrol / 2.2L mHawk Diesel",
    powerVal: 152,
    powerDisplay: "152 PS (Petrol) / 132 PS (Diesel)",
    torqueVal: 320,
    torqueDisplay: "320 Nm @ 1500-2800 rpm",
    mileageVal: 13.0,
    mileageDisplay: "13.0 kmpl (Combined)",
    transmission: "6-Speed Manual / 6-Speed Automatic",
    seating: "4 Seater",
    safetyRating: "4 Star (Global NCAP)",
    bootSpace: "150 L",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
    verdictTag: "Ultimate Offroad Icon",
    pros: [
      "Unmatched offroad capability & commanding stance",
      "Potent mStallion petrol & mHawk diesel engines",
      "Convertible or Hard-top roof options",
      "Immense road presence & high ground clearance (226 mm)"
    ],
    cons: [
      "Bumpy ride quality on city pavements",
      "Strict 4-seater with tight rear legroom",
      "Small trunk/boot space for long family road trips"
    ],
    features: [
      "Mechanical Locking Differential & Low-Range Transfer Case",
      "7-inch Drizzle-resistant Touchscreen Screen",
      "Removable Doors & Washable Interior Floor with Drains",
      "Roll Cage & ESP with Roll-over Mitigation",
      "Tire Pressure Monitoring System (TPMS)"
    ]
  },
  {
    id: "suzuki-jimny",
    name: "Maruti Suzuki Jimny 5-Door",
    brand: "Maruti Suzuki",
    type: "car",
    category: "SUV",
    priceVal: 12.74,
    priceDisplay: "₹12.74 - 14.95 Lakh",
    fuel: "Petrol",
    engine: "1.5L K15B Petrol with AllGrip Pro",
    powerVal: 1048,
    powerDisplay: "104.8 PS @ 6000 rpm",
    torqueVal: 134.2,
    torqueDisplay: "134.2 Nm @ 4000 rpm",
    mileageVal: 16.94,
    mileageDisplay: "16.94 kmpl (ARAI)",
    transmission: "5-Speed Manual / 4-Speed Automatic",
    seating: "4 - 5 Seater",
    safetyRating: "3 Star (Euro NCAP)",
    bootSpace: "208 L",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
    verdictTag: "Compact & Comfortable Offroader",
    pros: [
      "Lightweight agile body structure (easier offroading)",
      "5-door practicality with accessible rear seats",
      "Much smoother daily city suspension than Thar",
      "AllGrip Pro 4WD low ratio transfer gear standard"
    ],
    cons: [
      "Modest power output (104 PS) on high-speed highways",
      "Dated 4-speed automatic torque converter gearbox",
      "Narrow cabin width for 5 large adults"
    ],
    features: [
      "AllGrip Pro 4WD with 4L Low Transfer Gear",
      "9-inch SmartPlay Pro+ Touchscreen with Wireless CarPlay",
      "6 Airbags Standard Across All Variants",
      "Headlamp Washers & LED Projector Lamps",
      "Hill Descent Control & Hill Hold Assist"
    ]
  },
  {
    id: "hyundai-creta",
    name: "Hyundai Creta Facelift",
    brand: "Hyundai",
    type: "car",
    category: "SUV",
    priceVal: 11.00,
    priceDisplay: "₹11.00 - 20.15 Lakh",
    fuel: "Petrol / Turbo Petrol / Diesel",
    engine: "1.5L MPi Petrol / 1.5L Turbo GDi / 1.5L U2 CRDi Diesel",
    powerVal: 160,
    powerDisplay: "160 PS (1.5L Turbo) / 115 PS",
    torqueVal: 253,
    torqueDisplay: "253 Nm (Turbo) / 250 Nm (Diesel)",
    mileageVal: 18.4,
    mileageDisplay: "18.4 - 21.8 kmpl",
    transmission: "6-Speed MT / IVT / 7-Speed DCT / 6-Speed AT",
    seating: "5 Seater",
    safetyRating: "Expected 5 Star",
    bootSpace: "433 L",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
    verdictTag: "Feature-Packed Segment Leader",
    pros: [
      "Feature-loaded cabin with dual 10.25-inch panoramic screens",
      "Punchy 160 PS 1.5L Turbo GDi performance",
      "Supple suspension tuned perfectly for Indian city roads",
      "Extensive nationwide Hyundai service network"
    ],
    cons: [
      "Distinctive futuristic front design is polarizing for some",
      "Turbo variant available only with DCT automatic"
    ],
    features: [
      "Level 2 ADAS with 19 Autonomous Features",
      "Dual 10.25-inch Digital Screen Dashboard Setup",
      "Panoramic Sunroof & 8-Speaker Bose Premium Sound System",
      "Ventilated Front Seats & 8-Way Power Driver Seat",
      "360-Degree Surround View Monitor + Blind Spot Monitor"
    ]
  },

  /* ---------------- BIKES ---------------- */
  {
    id: "royal-enfield-hunter-350",
    name: "Royal Enfield Hunter 350",
    brand: "Royal Enfield",
    type: "bike",
    category: "Cruiser",
    priceVal: 1.50,
    priceDisplay: "₹1.50 - 1.75 Lakh",
    fuel: "Petrol",
    engine: "349 cc J-Series Single Cylinder Air-Oil Cooled",
    powerVal: 20.2,
    powerDisplay: "20.2 bhp @ 6100 rpm",
    torqueVal: 27,
    torqueDisplay: "27 Nm @ 4000 rpm",
    mileageVal: 36.2,
    mileageDisplay: "36.2 kmpl (Real World)",
    transmission: "5-Speed Manual",
    seating: "2 Seater",
    safetyRating: "Dual Channel ABS",
    bootSpace: "N/A",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
    verdictTag: "Agile & Stylish Urban Roadster",
    pros: [
      "Accessible seat height (790 mm) & light 181 kg weight for RE",
      "Torquey 350cc J-series engine with smooth low-end thud",
      "Very competitive pricing under ₹1.75 Lakh",
      "Retro neo-classic styling with sharp agility"
    ],
    cons: [
      "Slightly firm rear suspension setup over potholes",
      "Lacks 6th gear for high-speed highway cruising above 110 km/h",
      "Halogen headlamp on lower trims"
    ],
    features: [
      "Digi-Analog Instrument Cluster with Tripper Navigation Option",
      "17-inch Alloy Wheels with Tubeless Tires",
      "Dual Channel ABS & 300mm Front Disc Brake",
      "USB Charging Port",
      "Low Seat Height & Comfortable Ergonomics"
    ]
  },
  {
    id: "tvs-ronin-225",
    name: "TVS Ronin 225",
    brand: "TVS",
    type: "bike",
    category: "Cruiser",
    priceVal: 1.49,
    priceDisplay: "₹1.49 - 1.73 Lakh",
    fuel: "Petrol",
    engine: "225.9 cc Single Cylinder 4-Valve Oil Cooled",
    powerVal: 20.4,
    powerDisplay: "20.4 PS @ 7750 rpm",
    torqueVal: 19.93,
    torqueDisplay: "19.93 Nm @ 3750 rpm",
    mileageVal: 42.0,
    mileageDisplay: "42.0 kmpl (Overall)",
    transmission: "5-Speed Manual with Assist & Slipper Clutch",
    seating: "2 Seater",
    safetyRating: "Dual Channel ABS (Urban/Rain modes)",
    bootSpace: "N/A",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
    verdictTag: "Tech-Loaded Scrambler Roadster",
    pros: [
      "Plush ride quality with upside-down (USD) front forks",
      "Packed with tech (Bluetooth SmartXonnect, Voice Assist, ABS modes)",
      "Assist & Slipper Clutch makes light clutch lever effort",
      "Higher fuel economy (~42 kmpl)"
    ],
    cons: [
      "Polarizing rear design language",
      "Top-end power tapers off quickly on highways"
    ],
    features: [
      "Showa 41mm Upside Down (USD) Front Forks",
      "TVS SmartXonnect Bluetooth Connectivity with Turn-by-Turn Nav",
      "Glide Through Technology (GTT) for easy low-speed bumper traffic",
      "Dual-Channel ABS with Rain & Urban Selectable Modes",
      "Full All-LED Lighting Setup"
    ]
  },
  {
    id: "ktm-duke-390",
    name: "KTM Duke 390 (Gen 3)",
    brand: "KTM",
    type: "bike",
    category: "Naked Sport",
    priceVal: 3.11,
    priceDisplay: "₹3.11 Lakh",
    fuel: "Petrol",
    engine: "398.7 cc LC4c Single Cylinder Liquid Cooled",
    powerVal: 46,
    powerDisplay: "46 PS @ 8500 rpm",
    torqueVal: 39,
    torqueDisplay: "39 Nm @ 6500 rpm",
    mileageVal: 28.5,
    mileageDisplay: "28.5 kmpl",
    transmission: "6-Speed Manual with Bi-Directional Quickshifter",
    seating: "2 Seater",
    safetyRating: "Cornering ABS + Supermoto ABS",
    bootSpace: "N/A",
    image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?auto=format&fit=crop&w=800&q=80",
    verdictTag: "Pure Track & Street Weapon",
    pros: [
      "Class-leading 46 PS explosive acceleration",
      "Standard Bi-Directional Quickshifter & Launch Control",
      "WP APEX Adjustable Suspension (Rebound & Compression)",
      "5-inch TFT console with Turn-by-Turn Nav & Music control"
    ],
    cons: [
      "Aggressive riding posture can be tiring on long tours",
      "Engine runs hot in heavy bumper-to-bumper city traffic"
    ],
    features: [
      "5-inch TFT Display with Smartphone Pairing & Lap Timer",
      "WP APEX Adjustable Front USD Forks & Rear Monoshock",
      "Ride-by-Wire with Street, Rain & Track Modes",
      "Bi-Directional Quickshifter+ Standard",
      "Cornering ABS & Supermoto ABS Mode"
    ]
  },
  {
    id: "triumph-speed-400",
    name: "Triumph Speed 400",
    brand: "Triumph",
    type: "bike",
    category: "Naked Sport",
    priceVal: 2.33,
    priceDisplay: "₹2.33 Lakh",
    fuel: "Petrol",
    engine: "398.15 cc TR-Series Liquid Cooled DOHC",
    powerVal: 40,
    powerDisplay: "40 PS @ 8000 rpm",
    torqueVal: 37.5,
    torqueDisplay: "37.5 Nm @ 6500 rpm",
    mileageVal: 29.8,
    mileageDisplay: "29.8 kmpl",
    transmission: "6-Speed Manual with Torque-Assist Clutch",
    seating: "2 Seater",
    safetyRating: "Dual Channel ABS + Switchable Traction Control",
    bootSpace: "N/A",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
    verdictTag: "Refined Premium Roadster",
    pros: [
      "Unmatched fit, finish, and premium British engineering",
      "Smooth 40 PS power delivery with strong mid-range pull",
      "Incredible aggressive price point (₹2.33 Lakh)",
      "Extremely comfortable upright ergonomics"
    ],
    cons: [
      "Lacks full TFT screen (semi-digital display)",
      "No quickshifter included standard"
    ],
    features: [
      "43mm Big Piston USD Front Forks",
      "Switchable Traction Control",
      "Torque-Assist Slipper Clutch",
      "All-LED Headlamp with DRL & Compact Tail Light",
      "Immobilizer Anti-Theft System"
    ]
  }
];

/* ---------------- STATE MANAGEMENT ---------------- */
function getCompareList() {
  try {
    return JSON.parse(localStorage.getItem("dr_driving_compare_list")) || ["innova-hycross", "innova-crysta"];
  } catch (e) {
    return ["innova-hycross", "innova-crysta"];
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
    showToast("Removed from comparison");
  } else {
    if (list.length >= 3) {
      showToast("Maximum 3 vehicles allowed for side-by-side comparison!");
      return;
    }
    list.push(id);
    showToast("Added to comparison dock");
  }
  saveCompareList(list);
}

function clearCompareList() {
  saveCompareList([]);
}

function updateCompareDockUI() {
  const list = getCompareList();
  const badges = document.querySelectorAll("[data-compare-count]");
  badges.forEach(b => b.textContent = list.length);

  const dock = document.getElementById("floatingDock");
  if (!dock) return;

  if (list.length === 0) {
    dock.classList.remove("open");
  } else {
    dock.classList.add("open");
    const container = document.getElementById("dockItemsRow");
    if (container) {
      container.innerHTML = list.map(id => {
        const v = VEHICLES.find(item => item.id === id);
        if (!v) return "";
        return `
          <div class="dock-item-pill">
            <span>${v.name}</span>
            <button onclick="toggleCompareVehicle('${v.id}')">✕</button>
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

/* ---------------- CARD RENDERING HELPERS ---------------- */
function renderVehicleCardHTML(v) {
  const isCompared = getCompareList().includes(v.id);
  return `
    <div class="vehicle-card" onclick="openVehicleModal('${v.id}')">
      <div class="vehicle-media">
        <img src="${v.image}" alt="${v.name}" loading="lazy">
        <span class="vehicle-category-chip">${v.category} · ${v.fuel}</span>
      </div>
      <div class="vehicle-body">
        <h3 class="vehicle-title">${v.name}</h3>
        <div class="vehicle-price">${v.priceDisplay}</div>
        
        <div class="vehicle-specs-row">
          <div>
            <span class="spec-pill-label">POWER</span>
            <span class="spec-pill-val">${v.powerVal} PS</span>
          </div>
          <div>
            <span class="spec-pill-label">TORQUE</span>
            <span class="spec-pill-val">${v.torqueVal} Nm</span>
          </div>
          <div>
            <span class="spec-pill-label">MILEAGE</span>
            <span class="spec-pill-val">${v.mileageVal} km/l</span>
          </div>
        </div>

        <div class="vehicle-actions">
          <button class="btn small ${isCompared ? 'primary' : ''}" style="flex:1" onclick="event.stopPropagation(); toggleCompareVehicle('${v.id}')">
            ${isCompared ? '✓ Added to Compare' : '+ Compare'}
          </button>
        </div>
      </div>
    </div>`;
}

function renderShowdownCardHTML(v1Id, v2Id, title, verdict) {
  const v1 = VEHICLES.find(v => v.id === v1Id);
  const v2 = VEHICLES.find(v => v.id === v2Id);
  if (!v1 || !v2) return "";

  return `
    <div class="showdown-card">
      <span class="showdown-tag">Featured Duel</span>
      <div class="vs-preview-row">
        <div class="vs-item">
          <div class="vs-img"><img src="${v1.image}" alt="${v1.name}"></div>
          <div class="vs-item-name">${v1.name}</div>
          <div class="vs-item-price">${v1.priceDisplay}</div>
        </div>
        <div class="vs-divider">VS</div>
        <div class="vs-item">
          <div class="vs-img"><img src="${v2.image}" alt="${v2.name}"></div>
          <div class="vs-item-name">${v2.name}</div>
          <div class="vs-item-price">${v2.priceDisplay}</div>
        </div>
      </div>
      <div class="showdown-verdict">
        <strong>Verdict:</strong> ${verdict}
      </div>
      <a href="compare.html?v1=${v1.id}&v2=${v2.id}" class="btn primary small full">Launch Full Duel →</a>
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
    activeIds = ["innova-hycross", "innova-crysta"];
  }

  const selectedVehicles = activeIds.map(id => VEHICLES.find(v => v.id === id)).filter(Boolean);

  // Set initial selects if present
  ["selectV1", "selectV2", "selectV3"].forEach((selectId, index) => {
    const el = document.getElementById(selectId);
    if (el) {
      el.value = selectedVehicles[index]?.id || "";
    }
  });

  const showDiffOnly = document.getElementById("diffOnlyToggle")?.checked || false;

  // Determine highest metrics for winning highlighting
  const maxPower = Math.max(...selectedVehicles.map(v => v.powerVal));
  const maxTorque = Math.max(...selectedVehicles.map(v => v.torqueVal));
  const maxMileage = Math.max(...selectedVehicles.map(v => v.mileageVal));
  const minPrice = Math.min(...selectedVehicles.map(v => v.priceVal));

  let html = `
    <thead>
      <tr class="sticky-header-row">
        <th style="width:20%">Specification</th>
        ${selectedVehicles.map(v => `
          <th style="width:${80 / selectedVehicles.length}%">
            <div class="v-header-card">
              <img src="${v.image}" class="v-header-img" alt="${v.name}">
              <div class="v-header-title">${v.name}</div>
              <div class="v-header-price">${v.priceDisplay}</div>
              <span class="verdict-chip">${v.verdictTag}</span>
            </div>
          </th>
        `).join("")}
      </tr>
    </thead>
    <tbody>
      <!-- SECTION 1: OVERVIEW -->
      <tr><td colspan="${selectedVehicles.length + 1}" class="table-sec-header">Overview & Pricing</td></tr>
      <tr>
        <td>Ex-Showroom Price</td>
        ${selectedVehicles.map(v => `
          <td class="${v.priceVal === minPrice ? 'is-winner' : ''}">${v.priceDisplay}</td>
        `).join("")}
      </tr>
      <tr>
        <td>Fuel Type</td>
        ${selectedVehicles.map(v => `<td>${v.fuel}</td>`).join("")}
      </tr>
      <tr>
        <td>Vehicle Category</td>
        ${selectedVehicles.map(v => `<td>${v.category}</td>`).join("")}
      </tr>

      <!-- SECTION 2: PERFORMANCE & ENGINE -->
      <tr><td colspan="${selectedVehicles.length + 1}" class="table-sec-header">Engine & Performance</td></tr>
      <tr>
        <td>Engine / Motor Specs</td>
        ${selectedVehicles.map(v => `<td>${v.engine}</td>`).join("")}
      </tr>
      <tr>
        <td>Max Power Output</td>
        ${selectedVehicles.map(v => `
          <td class="${v.powerVal === maxPower ? 'is-winner' : ''}">${v.powerDisplay}</td>
        `).join("")}
      </tr>
      <tr>
        <td>Max Torque</td>
        ${selectedVehicles.map(v => `
          <td class="${v.torqueVal === maxTorque ? 'is-winner' : ''}">${v.torqueDisplay}</td>
        `).join("")}
      </tr>
      <tr>
        <td>Fuel Economy / Range</td>
        ${selectedVehicles.map(v => `
          <td class="${v.mileageVal === maxMileage ? 'is-winner' : ''}">${v.mileageDisplay}</td>
        `).join("")}
      </tr>
      <tr>
        <td>Transmission</td>
        ${selectedVehicles.map(v => `<td>${v.transmission}</td>`).join("")}
      </tr>

      <!-- SECTION 3: CAPACITIES & SAFETY -->
      <tr><td colspan="${selectedVehicles.length + 1}" class="table-sec-header">Capacities & Safety</td></tr>
      <tr>
        <td>Seating Capacity</td>
        ${selectedVehicles.map(v => `<td>${v.seating}</td>`).join("")}
      </tr>
      <tr>
        <td>Safety Rating</td>
        ${selectedVehicles.map(v => `<td>${v.safetyRating}</td>`).join("")}
      </tr>
      <tr>
        <td>Trunk / Boot Space</td>
        ${selectedVehicles.map(v => `<td>${v.bootSpace}</td>`).join("")}
      </tr>

      <!-- SECTION 4: PROS & CONS -->
      <tr><td colspan="${selectedVehicles.length + 1}" class="table-sec-header">Pros & Cons Breakdown</td></tr>
      <tr>
        <td>Key Advantages (Pros)</td>
        ${selectedVehicles.map(v => `
          <td>
            <ul class="pros-list">
              ${v.pros.map(p => `<li>${p}</li>`).join("")}
            </ul>
          </td>
        `).join("")}
      </tr>
      <tr>
        <td>Trade-offs (Cons)</td>
        ${selectedVehicles.map(v => `
          <td>
            <ul class="cons-list">
              ${v.cons.map(c => `<li>${c}</li>`).join("")}
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
  ["selectV1", "selectV2", "selectV3", "quickV1", "quickV2"].forEach(selectId => {
    const el = document.getElementById(selectId);
    if (!el) return;

    let optionsHTML = `<option value="">-- Choose Vehicle --</option>`;
    optionsHTML += VEHICLES.map(v => `<option value="${v.id}">${v.name} (${v.priceDisplay})</option>`).join("");
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

/* ---------------- CATALOG PAGE (`vehicles.html`) ---------------- */
function renderCatalog() {
  const grid = document.getElementById("vehicleGrid");
  if (!grid) return;

  const typeFilter = document.querySelector('input[name="f-type"]:checked')?.value || "all";
  const searchQuery = (document.getElementById("catalogSearch")?.value || "").toLowerCase().trim();
  const selectedFuel = [...document.querySelectorAll(".f-fuel:checked")].map(cb => cb.value);

  let filtered = VEHICLES.filter(v => {
    const typeOk = typeFilter === "all" || v.type === typeFilter;
    const searchOk = !searchQuery || 
      v.name.toLowerCase().includes(searchQuery) || 
      v.brand.toLowerCase().includes(searchQuery) ||
      v.category.toLowerCase().includes(searchQuery);

    const fuelOk = selectedFuel.length === 0 || selectedFuel.some(f => v.fuel.toLowerCase().includes(f.toLowerCase()));

    return typeOk && searchOk && fuelOk;
  });

  const countEl = document.getElementById("catalogCount");
  if (countEl) countEl.textContent = filtered.length;

  grid.innerHTML = filtered.map(renderVehicleCardHTML).join("") ||
    `<p style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-muted);">No vehicles match your search and filter criteria.</p>`;
}

/* ---------------- HOME PAGE RENDERERS ---------------- */
function renderFeaturedShowdowns() {
  const container = document.getElementById("featuredShowdowns");
  if (!container) return;

  container.innerHTML = [
    renderShowdownCardHTML("innova-hycross", "innova-crysta", "MPV Crown Duel", "Hycross wins on fuel economy & luxury; Crysta leads on low-end torque & heavy load towing."),
    renderShowdownCardHTML("mahindra-thar", "suzuki-jimny", "Offroad SUV Clash", "Thar delivers raw power & stance; Jimny offers 5-door city practicality & agile trail handling."),
    renderShowdownCardHTML("ktm-duke-390", "triumph-speed-400", "390cc Roadster Duel", "Duke 390 is a raw 46 PS track weapon; Speed 400 offers refined British styling & aggressive pricing.")
  ].join("");
}

/* ---------------- VEHICLE DETAIL MODAL ---------------- */
function openVehicleModal(id) {
  const v = VEHICLES.find(item => item.id === id);
  if (!v) return;

  const overlay = document.getElementById("modalOverlay");
  const card = document.getElementById("modalCard");
  if (!overlay || !card) return;

  card.innerHTML = `
    <button class="modal-close" onclick="closeVehicleModal()">✕</button>
    <div style="aspect-ratio:16/9;border-radius:var(--radius-md);overflow:hidden;margin-bottom:20px;">
      <img src="${v.image}" alt="${v.name}" style="width:100%;height:100%;object-fit:cover;">
    </div>
    <span class="eyebrow">${v.category} · ${v.fuel}</span>
    <h2 style="font-size:1.8rem;margin-bottom:4px;">${v.name}</h2>
    <div style="font-family:'JetBrains Mono',monospace;color:var(--primary);font-size:1.2rem;font-weight:700;margin-bottom:16px;">${v.priceDisplay}</div>
    
    <p style="color:var(--text-muted);font-size:0.95rem;margin-bottom:20px;">Verdict: <strong>${v.verdictTag}</strong></p>

    <div style="background:rgba(255,255,255,0.03);padding:16px;border-radius:var(--radius-md);margin-bottom:20px;">
      <h4 style="font-size:0.9rem;text-transform:uppercase;color:var(--primary);margin-bottom:8px;">Key Standard Features</h4>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:0.85rem;color:var(--text-muted);">
        ${v.features.map(f => `<div>• ${f}</div>`).join("")}
      </div>
    </div>

    <div style="display:flex;gap:12px;">
      <a href="compare.html?v1=${v.id}" class="btn primary full">Compare Side-by-Side →</a>
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
const quizAnswers = { type: null, budget: null, priority: null };

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

  let matches = VEHICLES.filter(v => {
    const typeOk = !quizAnswers.type || quizAnswers.type === "all" || v.type === quizAnswers.type;
    return typeOk;
  });

  if (matches.length < 2) matches = VEHICLES.slice(0, 2);
  const topMatches = matches.slice(0, 2);

  resultsContainer.innerHTML = `
    <div style="text-align:center;margin-bottom:28px;">
      <span class="eyebrow">Match Result</span>
      <h2 style="font-size:2rem;margin-bottom:8px;">Here are your Top 2 Matches!</h2>
      <p style="color:var(--text-muted)">Based on your preferences, these 2 vehicles offer the best balance of value, features, and driving experience.</p>
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

/* ---------------- INIT ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  updateCompareDockUI();
  populateSelectDropdowns();
  renderFeaturedShowdowns();
  renderCatalog();
  renderCompareMatrix();
});
