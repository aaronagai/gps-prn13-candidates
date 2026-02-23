// ============================================================
//  GPS SARAWAK – ELECTION CANDIDATES DASHBOARD
//  Data: 12th Sarawak State Election (December 18, 2021)
//  GPS won 76 of 82 seats. All 82 contested here.
// ============================================================

const candidates = [
  // ── KUCHING ZONE ──────────────────────────────────────────
  { id: 1,  dun_no: "N01", name: "Billy Sujang",                    dun: "Opar",         party: "SUPP", zone: "Kuching"   },
  { id: 2,  dun_no: "N02", name: "Datuk Henry Harry Jinep",         dun: "Tasik Biru",   party: "PDP",  zone: "Kuching"   },
  { id: 3,  dun_no: "N03", name: "Azizul Annuar Adenan",            dun: "Tanjung Datu", party: "PBB",  zone: "Kuching"   },
  { id: 4,  dun_no: "N04", name: "Datuk Dr Abdul Rahman Junaidi",   dun: "Pantai Damai", party: "PBB",  zone: "Kuching"   },
  { id: 5,  dun_no: "N05", name: "Dr Hazland Abang Hipni",          dun: "Demak Laut",   party: "PBB",  zone: "Kuching"   },
  { id: 6,  dun_no: "N06", name: "Fazzrudin Abdul Rahman",          dun: "Tupong",       party: "PBB",  zone: "Kuching"   },
  { id: 7,  dun_no: "N07", name: "Datuk Sharifah Hasidah Sayeed",   dun: "Samariang",   party: "PBB",  zone: "Kuching"   },
  { id: 8,  dun_no: "N08", name: "Datuk Ibrahim Baki",              dun: "Satok",        party: "PBB",  zone: "Kuching"   },
  { id: 9,  dun_no: "N09", name: "Datuk Wee Hong Seng",             dun: "Padungan",     party: "SUPP", zone: "Kuching"   },
  { id: 10, dun_no: "N10", name: "Milton Foo",                      dun: "Pending",      party: "SUPP", zone: "Kuching"   },
  { id: 11, dun_no: "N11", name: "Sih Hua Tong",                    dun: "Batu Lintang", party: "SUPP", zone: "Kuching"   },
  { id: 12, dun_no: "N12", name: "Yap Yau Sin",                     dun: "Kota Sentosa", party: "SUPP", zone: "Kuching"   },
  { id: 13, dun_no: "N13", name: "Lo Khere Chiang",                 dun: "Batu Kitang",  party: "SUPP", zone: "Kuching"   },
  { id: 14, dun_no: "N14", name: "Datuk Sri Dr Sim Kui Hian",       dun: "Batu Kawa",    party: "SUPP", zone: "Kuching"   },

  // ── SAMARAHAN ZONE ────────────────────────────────────────
  { id: 15, dun_no: "N15", name: "Datuk Sri Abd Karim Rahman Hamzah", dun: "Asajaya",   party: "PBB",  zone: "Samarahan" },
  { id: 16, dun_no: "N16", name: "Datuk Idris Buang",               dun: "Muara Tuang", party: "PBB",  zone: "Samarahan" },
  { id: 17, dun_no: "N17", name: "Datuk Hamzah Brahim",             dun: "Stakan",      party: "PBB",  zone: "Samarahan" },
  { id: 18, dun_no: "N18", name: "Miro Simuh",                      dun: "Serembu",     party: "PBB",  zone: "Samarahan" },
  { id: 19, dun_no: "N19", name: "Datuk Jerip Susil",               dun: "Mambong",     party: "PBB",  zone: "Samarahan" },
  { id: 20, dun_no: "N20", name: "Datuk Roland Sagah Wee Inn",      dun: "Tarat",       party: "PBB",  zone: "Samarahan" },
  { id: 21, dun_no: "N21", name: "Simon Sinang @ Singan Anak Bada", dun: "Tebedu",      party: "PBB",  zone: "Samarahan" },
  { id: 22, dun_no: "N22", name: "Martin Ben",                      dun: "Kedup",       party: "PBB",  zone: "Samarahan" },
  { id: 23, dun_no: "N23", name: "John Ilus",                       dun: "Bukit Semuja", party: "PBB", zone: "Samarahan" },
  { id: 24, dun_no: "N24", name: "Aidel Lariwoo",                   dun: "Sadong Jaya", party: "PBB",  zone: "Samarahan" },
  { id: 25, dun_no: "N25", name: "Awla Dris",                       dun: "Simunjan",    party: "PBB",  zone: "Samarahan" },
  { id: 26, dun_no: "N26", name: "Datuk Patinggi Abang Johari Openg", dun: "Gedong",   party: "PBB",  zone: "Samarahan" },
  { id: 27, dun_no: "N27", name: "Datuk Julaihi Narawi",            dun: "Sebuyau",     party: "PBB",  zone: "Samarahan" },
  { id: 28, dun_no: "N28", name: "Dayang Noorazah Awang Sohor",     dun: "Lingga",      party: "PBB",  zone: "Samarahan" },
  { id: 29, dun_no: "N29", name: "Razaili Gapor",                   dun: "Beting Maro", party: "PBB",  zone: "Samarahan" },

  // ── SRI AMAN ZONE ─────────────────────────────────────────
  { id: 30, dun_no: "N30", name: "Datuk Snowdan Lawan",             dun: "Balai Ringin", party: "PRS", zone: "Sri Aman"  },
  { id: 31, dun_no: "N31", name: "Datuk Mong Dagang",               dun: "Bukit Begunan", party: "PRS",zone: "Sri Aman"  },
  { id: 32, dun_no: "N32", name: "Datuk Francis Harden Hollis",     dun: "Simanggang",  party: "SUPP", zone: "Sri Aman"  },
  { id: 33, dun_no: "N33", name: "Desmond Sateng Sanjan",           dun: "Engkilili",   party: "SUPP", zone: "Sri Aman"  },
  { id: 34, dun_no: "N34", name: "Datuk Malcolm Mussen Lamoh",      dun: "Batang Ai",   party: "PRS",  zone: "Sri Aman"  },

  // ── BETONG ZONE ───────────────────────────────────────────
  { id: 35, dun_no: "N35", name: "Ricky @ Mohammad Razi Sitam",     dun: "Saribas",     party: "PBB",  zone: "Betong"    },
  { id: 36, dun_no: "N36", name: "Datuk Gerald Rentap Jabu",        dun: "Layar",       party: "PBB",  zone: "Betong"    },
  { id: 37, dun_no: "N37", name: "Datuk Amar Douglas Uggah Ambas",  dun: "Bukit Saban", party: "PBB",  zone: "Betong"    },
  { id: 38, dun_no: "N38", name: "Mohamad Duri",                    dun: "Kalaka",      party: "PBB",  zone: "Betong"    },
  { id: 39, dun_no: "N39", name: "Friday Belk",                     dun: "Krian",       party: "PDP",  zone: "Betong"    },
  { id: 40, dun_no: "N40", name: "Mohd Chee Kadir",                 dun: "Kabong",      party: "PBB",  zone: "Betong"    },

  // ── SARIKEI ZONE ──────────────────────────────────────────
  { id: 41, dun_no: "N41", name: "Datu Len Talif",                  dun: "Kuala Rajang", party: "PBB", zone: "Sarikei"  },
  { id: 42, dun_no: "N42", name: "Datuk Abdullah Saidol",           dun: "Semop",        party: "PBB", zone: "Sarikei"  },
  { id: 43, dun_no: "N43", name: "Safiee Ahmad",                    dun: "Daro",         party: "PBB", zone: "Sarikei"  },
  { id: 44, dun_no: "N44", name: "Datuk Juanda Jaya",               dun: "Jemoreng",     party: "PBB", zone: "Sarikei"  },
  { id: 45, dun_no: "N45", name: "Datuk Sri Huang Tiong Sii",       dun: "Repok",        party: "SUPP",zone: "Sarikei"  },
  { id: 46, dun_no: "N46", name: "Datuk Ding Kong Hiing",           dun: "Meradong",     party: "SUPP",zone: "Sarikei"  },
  { id: 47, dun_no: "N47", name: "Tan Sri William Mawan Ekom",      dun: "Pakan",        party: "PBB", zone: "Sarikei"  },
  { id: 48, dun_no: "N48", name: "Rolland Duat Jubin",              dun: "Meluan",       party: "PDP", zone: "Sarikei"  },
  { id: 49, dun_no: "N49", name: "Anyi Jana",                       dun: "Ngemah",       party: "PRS", zone: "Sarikei"  },

  // ── SIBU ZONE ─────────────────────────────────────────────
  { id: 50, dun_no: "N50", name: "Allan Siden Gramong",             dun: "Machan",       party: "PBB", zone: "Sibu"     },
  { id: 51, dun_no: "N51", name: "Chieng Jin Ek",                   dun: "Bukit Assek",  party: "SUPP",zone: "Sibu"     },
  { id: 52, dun_no: "N52", name: "Datuk Sri Tiong King Sing",       dun: "Dudong",       party: "PDP", zone: "Sibu"     },
  { id: 53, dun_no: "N53", name: "Robert Lau Hui Yew",              dun: "Bawang Assan", party: "SUPP",zone: "Sibu"     },
  { id: 54, dun_no: "N54", name: "Michael Tiang Ming Tee",          dun: "Pelawan",      party: "SUPP",zone: "Sibu"     },
  { id: 55, dun_no: "N55", name: "Dr Annuar Rapaee",                dun: "Nangka",       party: "PBB", zone: "Sibu"     },
  { id: 56, dun_no: "N56", name: "Datuk Sri Fatimah Abdullah",      dun: "Dalat",        party: "PBB", zone: "Sibu"     },
  { id: 57, dun_no: "N57", name: "Royston Valentine",               dun: "Tellian",      party: "PBB", zone: "Sibu"     },
  { id: 58, dun_no: "N58", name: "Abdul Yakub Arbi",                dun: "Balingian",    party: "PBB", zone: "Sibu"     },

  // ── KAPIT ZONE ────────────────────────────────────────────
  { id: 59, dun_no: "N59", name: "Christopher Gira Sambang",        dun: "Tamin",        party: "PRS", zone: "Kapit"    },
  { id: 60, dun_no: "N60", name: "Datuk John Sikie Tayai",          dun: "Kakus",        party: "PRS", zone: "Kapit"    },
  { id: 61, dun_no: "N61", name: "Wilson Nyabong Ijang",            dun: "Pelagus",      party: "PRS", zone: "Kapit"    },
  { id: 62, dun_no: "N62", name: "Lidam Assan",                     dun: "Katibas",      party: "PBB", zone: "Kapit"    },
  { id: 63, dun_no: "N63", name: "Jefferson Jamit Unyat",           dun: "Bukit Goram",  party: "PBB", zone: "Kapit"    },
  { id: 64, dun_no: "N64", name: "Nicholas Kudi Jantai Masing",     dun: "Baleh",        party: "PRS", zone: "Kapit"    },
  { id: 65, dun_no: "N65", name: "Datuk Liwan Lagang",              dun: "Belaga",       party: "PRS", zone: "Kapit"    },
  { id: 66, dun_no: "N66", name: "Kennedy Chukpai Ugon",            dun: "Murum",        party: "PRS", zone: "Kapit"    },

  // ── BINTULU ZONE ──────────────────────────────────────────
  { id: 67, dun_no: "N67", name: "Datuk Talib Zulpilip",            dun: "Jepak",        party: "PBB", zone: "Bintulu"  },
  { id: 68, dun_no: "N68", name: "Pang Leong Ming",                 dun: "Tanjong Batu", party: "SUPP",zone: "Bintulu"  },
  { id: 69, dun_no: "N69", name: "Datuk Sri Stephen Rundi Utom",    dun: "Kemena",       party: "PBB", zone: "Bintulu"  },
  { id: 70, dun_no: "N70", name: "Datuk Majang Renggi",             dun: "Samalaju",     party: "PRS", zone: "Bintulu"  },

  // ── MIRI ZONE ─────────────────────────────────────────────
  { id: 71, dun_no: "N71", name: "Datuk Rosey Yunus",               dun: "Bekenu",       party: "PBB", zone: "Miri"     },
  { id: 72, dun_no: "N72", name: "Ripin Lamat",                     dun: "Lambir",       party: "PBB", zone: "Miri"     },
  { id: 73, dun_no: "N73", name: "Datuk Sebastian Ting Chiew Yew",  dun: "Piasau",       party: "SUPP",zone: "Miri"     },
  { id: 74, dun_no: "N74", name: "Adam Yii Siew Sang",              dun: "Pujut",        party: "SUPP",zone: "Miri"     },
  { id: 75, dun_no: "N75", name: "Datuk Sri Lee Kim Shin",          dun: "Senadin",      party: "SUPP",zone: "Miri"     },
  { id: 76, dun_no: "N76", name: "Datuk Penguang Manggil",          dun: "Marudi",       party: "PDP", zone: "Miri"     },
  { id: 77, dun_no: "N77", name: "Dennis Ngau",                     dun: "Telang Usan",  party: "PBB", zone: "Miri"     },
  { id: 78, dun_no: "N78", name: "Datuk Gerawat Gala",              dun: "Mulu",         party: "PBB", zone: "Miri"     },
  { id: 79, dun_no: "N79", name: "Datuk Abdul Rahman Ismail",       dun: "Bukit Kota",   party: "PBB", zone: "Miri"     },
  { id: 80, dun_no: "N80", name: "Paulus Palu Gumbang",             dun: "Batu Danau",   party: "PBB", zone: "Miri"     },
  { id: 81, dun_no: "N81", name: "Sam Jaya",                        dun: "Ba'Kelalan",   party: "PDP", zone: "Miri"     },
  { id: 82, dun_no: "N82", name: "Datuk Amar Awang Tengah Ali Hassan", dun: "Bukit Sari",party: "PBB", zone: "Miri"     },
];

// ── State ──────────────────────────────────────────────────
let activeZone  = "";
let activeParty = "";
let activeGroup = "none";
let searchQuery = "";

// ── DOM refs ───────────────────────────────────────────────
const container    = document.getElementById("candidatesContainer");
const noResults    = document.getElementById("noResults");
const searchInput  = document.getElementById("searchInput");
const resultCount  = document.getElementById("resultCount");
const totalCount   = document.getElementById("totalCount");

// ── Init ───────────────────────────────────────────────────
totalCount.textContent = candidates.length;
render();

// ── Listeners ──────────────────────────────────────────────
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value.toLowerCase().trim();
  render();
});

document.getElementById("zoneChips").addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  activeZone = chip.dataset.zone;
  updateChips("zoneChips", "[data-zone]", chip);
  render();
});

document.getElementById("partyChips").addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  activeParty = chip.dataset.party;
  updateChips("partyChips", "[data-party]", chip);
  render();
});

document.getElementById("groupChips").addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  activeGroup = chip.dataset.group;
  updateChips("groupChips", "[data-group]", chip);
  render();
});

function updateChips(groupId, selector, active) {
  document.getElementById(groupId).querySelectorAll(selector).forEach(c => c.classList.remove("active"));
  active.classList.add("active");
}

// ── Filter ─────────────────────────────────────────────────
function getFiltered() {
  return candidates.filter(c => {
    const matchZone  = !activeZone  || c.zone === activeZone;
    const matchParty = !activeParty || c.party === activeParty;
    const matchSearch = !searchQuery ||
      c.name.toLowerCase().includes(searchQuery) ||
      c.dun.toLowerCase().includes(searchQuery)  ||
      c.dun_no.toLowerCase().includes(searchQuery);
    return matchZone && matchParty && matchSearch;
  });
}

// ── Render ─────────────────────────────────────────────────
function render() {
  const filtered = getFiltered();
  resultCount.textContent = filtered.length;
  container.innerHTML = "";

  if (filtered.length === 0) {
    noResults.classList.remove("hidden");
    return;
  }
  noResults.classList.add("hidden");

  if (activeGroup === "none") {
    const grid = createGrid(filtered);
    container.appendChild(grid);
  } else {
    // Group
    const key = activeGroup === "zone" ? "zone" : "party";
    const order = activeGroup === "zone"
      ? ["Kuching","Samarahan","Sri Aman","Betong","Sarikei","Sibu","Kapit","Bintulu","Miri"]
      : ["PBB","SUPP","PRS","PDP"];

    const groups = {};
    filtered.forEach(c => {
      const k = c[key];
      if (!groups[k]) groups[k] = [];
      groups[k].push(c);
    });

    order.forEach(g => {
      if (!groups[g] || groups[g].length === 0) return;
      const section = document.createElement("div");
      section.className = "group-section";

      const heading = document.createElement("div");
      heading.className = "group-heading";
      heading.innerHTML = `
        <h2>${activeGroup === "party" ? partyFullName(g) : g}</h2>
        <span class="group-count">${groups[g].length} candidate${groups[g].length > 1 ? "s" : ""}</span>
        <div class="group-divider"></div>
      `;
      section.appendChild(heading);
      section.appendChild(createGrid(groups[g]));
      container.appendChild(section);
    });
  }
}

function createGrid(list) {
  const grid = document.createElement("div");
  grid.className = "candidates-grid";
  list.forEach((c, i) => {
    const card = buildCard(c);
    card.style.animationDelay = `${Math.min(i * 0.03, 0.5)}s`;
    grid.appendChild(card);
  });
  return grid;
}

function buildCard(c) {
  const div = document.createElement("div");
  div.className = "candidate-card";
  div.innerHTML = `
    <div class="card-photo-wrap">
      <div class="card-photo-placeholder bg-${c.party}">
        <div class="placeholder-avatar initials-${c.party}">${getInitials(c.name)}</div>
      </div>
      <span class="dun-number">${c.dun_no}</span>
      <span class="card-party-badge badge-${c.party}">${c.party}</span>
    </div>
    <div class="card-body">
      <div class="candidate-name">${c.name}</div>
      <div class="candidate-dun">${c.dun}</div>
      <div class="candidate-meta">
        <div class="meta-zone">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          ${c.zone}
        </div>
        <div class="party-dot dot-${c.party}"></div>
      </div>
    </div>
  `;
  return div;
}

function getInitials(name) {
  const clean = name.replace(/Datuk Sri|Datuk Seri|Datuk|Dato Sri|Dato|Tan Sri|Tun|Dr |Ir |Datu /gi, "").trim();
  const parts = clean.split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return parts[0].slice(0, 2).toUpperCase();
}

function partyFullName(abbr) {
  const map = {
    PBB:  "PBB – Parti Pesaka Bumiputera Bersatu",
    SUPP: "SUPP – Sarawak United Peoples' Party",
    PRS:  "PRS – Parti Rakyat Sarawak",
    PDP:  "PDP – Progressive Democratic Party",
  };
  return map[abbr] || abbr;
}

window.resetFilters = function resetFilters() {
  activeZone = "";
  activeParty = "";
  activeGroup = "none";
  searchQuery = "";
  searchInput.value = "";

  document.querySelectorAll("#zoneChips .chip").forEach((c, i) => c.classList.toggle("active", i === 0));
  document.querySelectorAll("#partyChips .chip").forEach((c, i) => c.classList.toggle("active", i === 0));
  document.querySelectorAll("#groupChips .chip").forEach((c, i) => c.classList.toggle("active", i === 0));
  render();
}
