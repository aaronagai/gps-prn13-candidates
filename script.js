// ============================================================
//  GPS SARAWAK – ELECTION CANDIDATES DASHBOARD
//  Data: 12th Sarawak State Election (December 18, 2021)
// ============================================================

const candidates = [
  // ── KUCHING ──────────────────────────────────────────────
  { id: 1,  dun_no: "N01", name: "Billy Sujang",                                  dun: "Opar",          party: "SUPP", zone: "Kuching",   parliamentary: "P192 Mas Gading",      race: "Bidayuh"   },
  { id: 2,  dun_no: "N02", name: "Datuk Henry Harry Jinep",                       dun: "Tasik Biru",    party: "PDP",  zone: "Kuching",   parliamentary: "P192 Mas Gading",      race: "Bidayuh"   },
  { id: 3,  dun_no: "N03", name: "Azizul Annuar Adenan",                          dun: "Tanjung Datu",  party: "PBB",  zone: "Kuching",   parliamentary: "P193 Santubong",       race: "Malay"     },
  { id: 4,  dun_no: "N04", name: "Datuk Dr Abdul Rahman Junaidi",                 dun: "Pantai Damai",  party: "PBB",  zone: "Kuching",   parliamentary: "P193 Santubong",       race: "Malay"     },
  { id: 5,  dun_no: "N05", name: "Datuk Dr Hazland Abang Hipni",                  dun: "Demak Laut",    party: "PBB",  zone: "Kuching",   parliamentary: "P193 Santubong",       race: "Malay"     },
  { id: 6,  dun_no: "N06", name: "Dato Fazzrudin Abdul Rahman",                   dun: "Tupong",        party: "PBB",  zone: "Kuching",   parliamentary: "P194 Petra Jaya",      race: "Malay"     },
  { id: 7,  dun_no: "N07", name: "Datuk Sharifah Hasidah Sayeed",                 dun: "Samariang",     party: "PBB",  zone: "Kuching",   parliamentary: "P194 Petra Jaya",      race: "Malay"     },
  { id: 8,  dun_no: "N08", name: "Datuk Ibrahim Baki",                            dun: "Satok",         party: "PBB",  zone: "Kuching",   parliamentary: "P194 Petra Jaya",      race: "Malay"     },
  { id: 9,  dun_no: "N09", name: "Datuk Wee Hong Seng",                           dun: "Padungan",      party: "SUPP", zone: "Kuching",   parliamentary: "P195 Bandar Kuching",  race: "Chinese"   },
  { id: 10, dun_no: "N10", name: "Milton Foo",                                    dun: "Pending",       party: "SUPP", zone: "Kuching",   parliamentary: "P195 Bandar Kuching",  race: "Chinese"   },
  { id: 11, dun_no: "N11", name: "Sih Hua Tong",                                  dun: "Batu Lintang",  party: "SUPP", zone: "Kuching",   parliamentary: "P195 Bandar Kuching",  race: "Chinese"   },
  { id: 12, dun_no: "N12", name: "Yap Yau Sin",                                   dun: "Kota Sentosa",  party: "SUPP", zone: "Kuching",   parliamentary: "P196 Stampin",         race: "Chinese"   },
  { id: 13, dun_no: "N13", name: "Dato Lo Khere Chiang",                          dun: "Batu Kitang",   party: "SUPP", zone: "Kuching",   parliamentary: "P196 Stampin",         race: "Chinese"   },
  { id: 14, dun_no: "N14", name: "Datuk Amar Dr Sim Kui Hian",                    dun: "Batu Kawa",     party: "SUPP", zone: "Kuching",   parliamentary: "P196 Stampin",         race: "Chinese"   },

  // ── SAMARAHAN ─────────────────────────────────────────────
  { id: 15, dun_no: "N15", name: "Dato Sri Abd Karim Rahman Hamzah",              dun: "Asajaya",       party: "PBB",  zone: "Samarahan", parliamentary: "P197 Kota Samarahan",  race: "Malay"     },
  { id: 16, dun_no: "N16", name: "Dato Idris Buang",                              dun: "Muara Tuang",   party: "PBB",  zone: "Samarahan", parliamentary: "P197 Kota Samarahan",  race: "Malay"     },
  { id: 17, dun_no: "N17", name: "Datuk Hamzah Brahim",                           dun: "Stakan",        party: "PBB",  zone: "Samarahan", parliamentary: "P197 Kota Samarahan",  race: "Malay"     },
  { id: 18, dun_no: "N18", name: "Dato Miro Simuh",                               dun: "Serembu",       party: "PBB",  zone: "Samarahan", parliamentary: "P198 Puncak Borneo",   race: "Bidayuh"   },
  { id: 19, dun_no: "N19", name: "Datuk Jerip Susil",                             dun: "Mambong",       party: "PBB",  zone: "Samarahan", parliamentary: "P198 Puncak Borneo",   race: "Bidayuh"   },
  { id: 20, dun_no: "N20", name: "Dato Sri Roland Sagah Wee Inn",                 dun: "Tarat",         party: "PBB",  zone: "Samarahan", parliamentary: "P198 Puncak Borneo",   race: "Bidayuh"   },
  { id: 21, dun_no: "N21", name: "Dr Simon Sinang Bada",                          dun: "Tebedu",        party: "PBB",  zone: "Samarahan", parliamentary: "P199 Serian",          race: "Bidayuh"   },
  { id: 22, dun_no: "N22", name: "Datuk Martin Ben",                              dun: "Kedup",         party: "PBB",  zone: "Samarahan", parliamentary: "P199 Serian",          race: "Bidayuh"   },
  { id: 23, dun_no: "N23", name: "John Ilus",                                     dun: "Bukit Semuja",  party: "PBB",  zone: "Samarahan", parliamentary: "P199 Serian",          race: "Bidayuh"   },
  { id: 24, dun_no: "N24", name: "Datuk Aidel Lariwoo",                           dun: "Sadong Jaya",   party: "PBB",  zone: "Samarahan", parliamentary: "P200 Batang Sadong",   race: "N/A"       },
  { id: 25, dun_no: "N25", name: "Awla Dris",                                     dun: "Simunjan",      party: "PBB",  zone: "Samarahan", parliamentary: "P200 Batang Sadong",   race: "N/A"       },
  { id: 26, dun_no: "N26", name: "Datuk Patinggi Tan Sri Abang Johari Openg",     dun: "Gedong",        party: "PBB",  zone: "Samarahan", parliamentary: "P200 Batang Sadong",   race: "Malay"     },
  { id: 27, dun_no: "N27", name: "Dato Sri Julaihi Narawi",                       dun: "Sebuyau",       party: "PBB",  zone: "Samarahan", parliamentary: "P201 Batang Lupar",    race: "N/A"       },
  { id: 28, dun_no: "N28", name: "Dayang Noorazah Awang Sohor",                   dun: "Lingga",        party: "PBB",  zone: "Samarahan", parliamentary: "P201 Batang Lupar",    race: "N/A"       },
  { id: 29, dun_no: "N29", name: "Razaili Gapor",                                 dun: "Beting Maro",   party: "PBB",  zone: "Samarahan", parliamentary: "P201 Batang Lupar",    race: "N/A"       },

  // ── SRI AMAN ──────────────────────────────────────────────
  { id: 30, dun_no: "N30", name: "Datuk Snowdan Lawan",                           dun: "Balai Ringin",  party: "PRS",  zone: "Sri Aman",  parliamentary: "P202 Sri Aman",        race: "Iban"      },
  { id: 31, dun_no: "N31", name: "Datuk Mong Dagang",                             dun: "Bukit Begunan", party: "PRS",  zone: "Sri Aman",  parliamentary: "P202 Sri Aman",        race: "Iban"      },
  { id: 32, dun_no: "N32", name: "Datuk Francis Harden Hollis",                   dun: "Simanggang",    party: "SUPP", zone: "Sri Aman",  parliamentary: "P202 Sri Aman",        race: "Iban"      },
  { id: 33, dun_no: "N33", name: "Desmond Sateng Sanjan",                         dun: "Engkilili",     party: "SUPP", zone: "Sri Aman",  parliamentary: "P203 Lubok Antu",      race: "N/A"       },
  { id: 34, dun_no: "N34", name: "Datuk Dr Malcolm Mussen Lamoh",                 dun: "Batang Ai",     party: "PRS",  zone: "Sri Aman",  parliamentary: "P203 Lubok Antu",      race: "Iban"      },

  // ── BETONG ────────────────────────────────────────────────
  { id: 35, dun_no: "N35", name: "Datuk Ricky Mohammad Razi Sitam",               dun: "Saribas",       party: "PBB",  zone: "Betong",    parliamentary: "P204 Betong",          race: "N/A"       },
  { id: 36, dun_no: "N36", name: "Datuk Gerald Rentap Jabu",                      dun: "Layar",         party: "PBB",  zone: "Betong",    parliamentary: "P204 Betong",          race: "Iban"      },
  { id: 37, dun_no: "N37", name: "Datuk Amar Douglas Uggah Ambas",                dun: "Bukit Saban",   party: "PBB",  zone: "Betong",    parliamentary: "P204 Betong",          race: "Iban"      },
  { id: 38, dun_no: "N38", name: "Mohamad Duri",                                  dun: "Kalaka",        party: "PBB",  zone: "Betong",    parliamentary: "P205 Saratok",         race: "N/A"       },
  { id: 39, dun_no: "N39", name: "Friday Belik",                                  dun: "Krian",         party: "PDP",  zone: "Betong",    parliamentary: "P205 Saratok",         race: "Iban"      },
  { id: 40, dun_no: "N40", name: "Dato Mohd Chee Kadir",                          dun: "Kabong",        party: "PBB",  zone: "Betong",    parliamentary: "P205 Saratok",         race: "N/A"       },

  // ── SARIKEI ───────────────────────────────────────────────
  { id: 41, dun_no: "N41", name: "Datuk Len Talif Salleh",                        dun: "Kuala Rajang",  party: "PBB",  zone: "Sarikei",   parliamentary: "P206 Tanjong Manis",   race: "Melanau"   },
  { id: 42, dun_no: "N42", name: "Datuk Abdullah Saidol",                         dun: "Semop",         party: "PBB",  zone: "Sarikei",   parliamentary: "P206 Tanjong Manis",   race: "N/A"       },
  { id: 43, dun_no: "N43", name: "Dr Safiee Ahmad",                               dun: "Daro",          party: "PBB",  zone: "Sarikei",   parliamentary: "P207 Igan",            race: "N/A"       },
  { id: 44, dun_no: "N44", name: "Dato Dr Juanda Jaya",                           dun: "Jemoreng",      party: "PBB",  zone: "Sarikei",   parliamentary: "P207 Igan",            race: "N/A"       },
  { id: 45, dun_no: "N45", name: "Dato Sri Huang Tiong Sii",                      dun: "Repok",         party: "SUPP", zone: "Sarikei",   parliamentary: "P208 Sarikei",         race: "Chinese"   },
  { id: 46, dun_no: "N46", name: "Datuk Ding Kong Hiing",                         dun: "Meradong",      party: "SUPP", zone: "Sarikei",   parliamentary: "P208 Sarikei",         race: "Chinese"   },
  { id: 47, dun_no: "N47", name: "Tan Sri William Mawan Ekom",                    dun: "Pakan",         party: "PBB",  zone: "Sarikei",   parliamentary: "P209 Julau",           race: "N/A"       },
  { id: 48, dun_no: "N48", name: "Dato Rolland Duat Jubin",                       dun: "Meluan",        party: "PDP",  zone: "Sarikei",   parliamentary: "P209 Julau",           race: "N/A"       },
  { id: 49, dun_no: "N49", name: "Anyi Jana",                                     dun: "Ngemah",        party: "PRS",  zone: "Sarikei",   parliamentary: "P210 Kanowit",         race: "N/A"       },

  // ── SIBU ──────────────────────────────────────────────────
  { id: 50, dun_no: "N50", name: "Allan Siden Gramong",                           dun: "Machan",        party: "PBB",  zone: "Sibu",      parliamentary: "P210 Kanowit",         race: "N/A"       },
  { id: 51, dun_no: "N51", name: "Chieng Jin Ek",                                 dun: "Bukit Assek",   party: "SUPP", zone: "Sibu",      parliamentary: "P211 Lanang",          race: "Chinese"   },
  { id: 52, dun_no: "N52", name: "Dato Sri Tiong King Sing",                      dun: "Dudong",        party: "PDP",  zone: "Sibu",      parliamentary: "P211 Lanang",          race: "Chinese"   },
  { id: 53, dun_no: "N53", name: "Robert Lau Hui Yew",                            dun: "Bawang Assan",  party: "SUPP", zone: "Sibu",      parliamentary: "P212 Sibu",            race: "Chinese"   },
  { id: 54, dun_no: "N54", name: "Datuk Michael Tiang Ming Tee",                  dun: "Pelawan",       party: "SUPP", zone: "Sibu",      parliamentary: "P212 Sibu",            race: "Chinese"   },
  { id: 55, dun_no: "N55", name: "Datuk Dr Annuar Rapaee",                        dun: "Nangka",        party: "PBB",  zone: "Sibu",      parliamentary: "P212 Sibu",            race: "Malay"     },
  { id: 56, dun_no: "N56", name: "Dato Sri Fatimah Abdullah",                     dun: "Dalat",         party: "PBB",  zone: "Sibu",      parliamentary: "P213 Mukah",           race: "Melanau"   },
  { id: 57, dun_no: "N57", name: "Royston Valentine",                             dun: "Tellian",       party: "PBB",  zone: "Sibu",      parliamentary: "P213 Mukah",           race: "Melanau"   },
  { id: 58, dun_no: "N58", name: "Abdul Yakub Arbi",                              dun: "Balingian",     party: "PBB",  zone: "Sibu",      parliamentary: "P213 Mukah",           race: "Melanau"   },

  // ── KAPIT ─────────────────────────────────────────────────
  { id: 59, dun_no: "N59", name: "Christopher Gira Sambang",                      dun: "Tamin",         party: "PRS",  zone: "Kapit",     parliamentary: "P214 Selangau",        race: "Iban"      },
  { id: 60, dun_no: "N60", name: "Dato Sri John Sikie Tayai",                     dun: "Kakus",         party: "PRS",  zone: "Kapit",     parliamentary: "P214 Selangau",        race: "Iban"      },
  { id: 61, dun_no: "N61", name: "Wilson Nyabong Ijang",                          dun: "Pelagus",       party: "PRS",  zone: "Kapit",     parliamentary: "P215 Kapit",           race: "Iban"      },
  { id: 62, dun_no: "N62", name: "Lidam Assan",                                   dun: "Katibas",       party: "PBB",  zone: "Kapit",     parliamentary: "P215 Kapit",           race: "N/A"       },
  { id: 63, dun_no: "N63", name: "Jefferson Jamit Unyat",                         dun: "Bukit Goram",   party: "PBB",  zone: "Kapit",     parliamentary: "P215 Kapit",           race: "N/A"       },
  { id: 64, dun_no: "N64", name: "Nicholas Kudi Jantai Masing",                   dun: "Baleh",         party: "PRS",  zone: "Kapit",     parliamentary: "P216 Hulu Rajang",     race: "Iban"      },
  { id: 65, dun_no: "N65", name: "Datuk Liwan Lagang",                            dun: "Belaga",        party: "PRS",  zone: "Kapit",     parliamentary: "P216 Hulu Rajang",     race: "Iban"      },
  { id: 66, dun_no: "N66", name: "Kennedy Chukpai Ugon",                          dun: "Murum",         party: "PRS",  zone: "Kapit",     parliamentary: "P216 Hulu Rajang",     race: "Orang Ulu" },

  // ── BINTULU ───────────────────────────────────────────────
  { id: 67, dun_no: "N67", name: "Iskandar Turkee",                               dun: "Jepak",         party: "PBB",  zone: "Bintulu",   parliamentary: "P217 Bintulu",         race: "N/A"       },
  { id: 68, dun_no: "N68", name: "Johnny Pang Leong Ming",                        dun: "Tanjong Batu",  party: "SUPP", zone: "Bintulu",   parliamentary: "P217 Bintulu",         race: "Chinese"   },
  { id: 69, dun_no: "N69", name: "Dato Sri Dr Stephen Rundi Utom",                dun: "Kemena",        party: "PBB",  zone: "Bintulu",   parliamentary: "P217 Bintulu",         race: "Iban"      },
  { id: 70, dun_no: "N70", name: "Datuk Majang Renggi",                           dun: "Samalaju",      party: "PRS",  zone: "Bintulu",   parliamentary: "P217 Bintulu",         race: "Iban"      },

  // ── MIRI ──────────────────────────────────────────────────
  { id: 71, dun_no: "N71", name: "Datuk Rosey Yunus",                             dun: "Bekenu",        party: "PBB",  zone: "Miri",      parliamentary: "P218 Sibuti",          race: "N/A"       },
  { id: 72, dun_no: "N72", name: "Datuk Dr Ripin Lamat",                          dun: "Lambir",        party: "PBB",  zone: "Miri",      parliamentary: "P218 Sibuti",          race: "N/A"       },
  { id: 73, dun_no: "N73", name: "Datuk Sebastian Ting Chiew Yew",                dun: "Piasau",        party: "SUPP", zone: "Miri",      parliamentary: "P219 Miri",            race: "Chinese"   },
  { id: 74, dun_no: "N74", name: "Adam Yii Siew Sang",                            dun: "Pujut",         party: "SUPP", zone: "Miri",      parliamentary: "P219 Miri",            race: "Chinese"   },
  { id: 75, dun_no: "N75", name: "Dato Sri Lee Kim Shin",                         dun: "Senadin",       party: "SUPP", zone: "Miri",      parliamentary: "P219 Miri",            race: "Chinese"   },
  { id: 76, dun_no: "N76", name: "Datuk Dr Penguang Manggil",                     dun: "Marudi",        party: "PDP",  zone: "Miri",      parliamentary: "P220 Baram",           race: "N/A"       },
  { id: 77, dun_no: "N77", name: "Dato Dennis Ngau",                              dun: "Telang Usan",   party: "PBB",  zone: "Miri",      parliamentary: "P220 Baram",           race: "Orang Ulu" },
  { id: 78, dun_no: "N78", name: "Datuk Gerawat Gala",                            dun: "Mulu",          party: "PBB",  zone: "Miri",      parliamentary: "P220 Baram",           race: "Orang Ulu" },
  { id: 79, dun_no: "N79", name: "Datuk Dr Abdul Rahman Ismail",                  dun: "Bukit Kota",    party: "PBB",  zone: "Miri",      parliamentary: "P221 Limbang",         race: "N/A"       },
  { id: 80, dun_no: "N80", name: "Dato Paulus Palu Gumbang",                      dun: "Batu Danau",    party: "PBB",  zone: "Miri",      parliamentary: "P221 Limbang",         race: "N/A"       },
  { id: 81, dun_no: "N81", name: "Sam Jaya",                                      dun: "Ba'Kelalan",    party: "PDP",  zone: "Miri",      parliamentary: "P222 Lawas",           race: "Orang Ulu" },
  { id: 82, dun_no: "N82", name: "Datuk Amar Awang Tengah Ali Hassan",            dun: "Bukit Sari",    party: "PBB",  zone: "Miri",      parliamentary: "P222 Lawas",           race: "N/A"       },
];

const partyColours = {
  PBB:  { bg: '#fef2f2', text: '#dc2626', border: '#fecaca', dot: '#ef4444' },
  SUPP: { bg: '#fefce8', text: '#a16207', border: '#fde68a', dot: '#ca8a04' },
  PRS:  { bg: '#f0fdf4', text: '#15803d', border: '#bbf7d0', dot: '#16a34a' },
  PDP:  { bg: '#eff6ff', text: '#1e40af', border: '#bfdbfe', dot: '#3b82f6' },
};

// DOM references
const grid             = document.getElementById('candidate-grid');
const emptyState       = document.getElementById('empty-state');
const searchInput      = document.getElementById('search-input');
const zoneFilter       = document.getElementById('zone-filter');
const partyFilter      = document.getElementById('party-filter');
const parliamentFilter = document.getElementById('parliament-filter');
const raceFilter       = document.getElementById('race-filter');
const resultCount      = document.getElementById('result-count');
const clearBtn         = document.getElementById('clear-filters');

// --- Populate dynamic filter options ---
function populateFilters() {
  const parliaments = [...new Set(candidates.map(c => c.parliamentary))].sort();
  parliaments.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p; opt.textContent = p;
    parliamentFilter.appendChild(opt);
  });

  const races = [...new Set(candidates.map(c => c.race).filter(r => r !== 'N/A'))].sort();
  races.forEach(r => {
    const opt = document.createElement('option');
    opt.value = r; opt.textContent = r;
    raceFilter.appendChild(opt);
  });
}
populateFilters();

// --- Helper: Get Initials ---
function getInitials(name) {
  const clean = name.replace(/Datuk Patinggi Tan Sri|Datuk Patinggi|Datuk Amar|Datuk Sri|Datuk Seri|Datuk|Dato Sri|Dato'|Dato|Tan Sri|Tun|Dr |Ir |Datu /gi, '').trim();
  const parts = clean.split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return parts[0].slice(0, 2).toUpperCase();
}

// --- Card Builder ---
function buildCard(c) {
  const col = partyColours[c.party] || partyColours.PBB;
  const initials = getInitials(c.name);

  const card = document.createElement('div');
  card.className = 'bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200' + (c.dun_no === 'N26' ? ' card-vip' : '');
  card.style.animation = 'fadeUp 0.3s ease both';

  card.innerHTML = `
    <div class="h-40 flex items-center justify-center relative overflow-hidden" style="background-color: ${col.bg};">
      <img src="photos/${c.dun_no}.jpg"
           class="absolute inset-0 w-full h-full object-cover object-top"
           onerror="this.style.display='none';" />
      <div class="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-semibold" style="background-color: ${col.dot}; color: white;">
        ${initials}
      </div>
      <span class="absolute top-3 left-3 text-xs font-mono" style="color: ${col.text}; opacity: 0.7;">${c.dun_no}</span>
      <span class="absolute top-3 right-3 text-xs font-semibold px-2 py-0.5 rounded-full border" style="background-color: ${col.bg}; color: ${col.text}; border-color: ${col.border};">
        ${c.party}
      </span>
    </div>
    <div class="p-4">
      <p class="font-semibold text-gray-900 text-sm leading-snug">${c.name}</p>
      <p class="text-xs font-medium mt-1" style="color: ${col.dot};">${c.dun}</p>
    </div>
  `;
  return card;
}

// --- Render Logic ---
function render() {
  const q = searchInput.value.toLowerCase().trim();
  const zone = zoneFilter.value;
  const party = partyFilter.value;

  const parliament = parliamentFilter.value;
  const race       = raceFilter.value;

  const filtered = candidates.filter(c => {
    const matchZone       = zone       === 'All' || c.zone         === zone;
    const matchParty      = party      === 'All' || c.party        === party;
    const matchParliament = parliament === 'All' || c.parliamentary === parliament;
    const matchRace       = race       === 'All' || c.race         === race;
    const matchSearch = !q ||
      c.name.toLowerCase().includes(q) ||
      c.dun.toLowerCase().includes(q)  ||
      c.dun_no.toLowerCase().includes(q) ||
      c.parliamentary.toLowerCase().includes(q) ||
      c.race.toLowerCase().includes(q);
    return matchZone && matchParty && matchParliament && matchRace && matchSearch;
  });

  grid.innerHTML = '';
  resultCount.textContent = `${filtered.length} candidate${filtered.length !== 1 ? 's' : ''}`;

  if (filtered.length === 0) {
    emptyState.classList.remove('hidden');
    emptyState.classList.add('flex');
  } else {
    emptyState.classList.add('hidden');
    emptyState.classList.remove('flex');
    filtered.forEach((c, i) => {
      const card = buildCard(c);
      card.style.animationDelay = `${Math.min(i * 0.03, 0.5)}s`;
      grid.appendChild(card);
    });
  }
}

// Event Listeners
searchInput.addEventListener('input', render);
zoneFilter.addEventListener('change', render);
partyFilter.addEventListener('change', render);
parliamentFilter.addEventListener('change', render);
raceFilter.addEventListener('change', render);
clearBtn.addEventListener('click', () => {
  searchInput.value        = '';
  zoneFilter.value         = 'All';
  partyFilter.value        = 'All';
  parliamentFilter.value   = 'All';
  raceFilter.value         = 'All';
  render();
});

// Initial run
render();
