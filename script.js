// ============================================================
//  GPS SARAWAK – ELECTION CANDIDATES DASHBOARD
//  Data: 12th Sarawak State Election (December 18, 2021)
// ============================================================

const candidates = [
  // ── KUCHING ──────────────────────────────────────────────
  { id: 1,  dun_no: "N01", name: "Billy Sujang",                       dun: "Opar",          party: "SUPP", zone: "Kuching"   },
  { id: 2,  dun_no: "N02", name: "Datuk Henry Harry Jinep",            dun: "Tasik Biru",    party: "PDP",  zone: "Kuching"   },
  { id: 3,  dun_no: "N03", name: "Azizul Annuar Adenan",               dun: "Tanjung Datu",  party: "PBB",  zone: "Kuching"   },
  { id: 4,  dun_no: "N04", name: "Datuk Dr Abdul Rahman Junaidi",      dun: "Pantai Damai",  party: "PBB",  zone: "Kuching"   },
  { id: 5,  dun_no: "N05", name: "Dr Hazland Abang Hipni",             dun: "Demak Laut",    party: "PBB",  zone: "Kuching"   },
  { id: 6,  dun_no: "N06", name: "Fazzrudin Abdul Rahman",             dun: "Tupong",        party: "PBB",  zone: "Kuching"   },
  { id: 7,  dun_no: "N07", name: "Datuk Sharifah Hasidah Sayeed",      dun: "Samariang",     party: "PBB",  zone: "Kuching"   },
  { id: 8,  dun_no: "N08", name: "Datuk Ibrahim Baki",                 dun: "Satok",         party: "PBB",  zone: "Kuching"   },
  { id: 9,  dun_no: "N09", name: "Datuk Wee Hong Seng",                dun: "Padungan",      party: "SUPP", zone: "Kuching"   },
  { id: 10, dun_no: "N10", name: "Milton Foo",                         dun: "Pending",       party: "SUPP", zone: "Kuching"   },
  { id: 11, dun_no: "N11", name: "Sih Hua Tong",                       dun: "Batu Lintang",  party: "SUPP", zone: "Kuching"   },
  { id: 12, dun_no: "N12", name: "Yap Yau Sin",                        dun: "Kota Sentosa",  party: "SUPP", zone: "Kuching"   },
  { id: 13, dun_no: "N13", name: "Lo Khere Chiang",                    dun: "Batu Kitang",   party: "SUPP", zone: "Kuching"   },
  { id: 14, dun_no: "N14", name: "Datuk Sri Dr Sim Kui Hian",          dun: "Batu Kawa",     party: "SUPP", zone: "Kuching"   },

  // ── SAMARAHAN ─────────────────────────────────────────────
  { id: 15, dun_no: "N15", name: "Datuk Sri Abd Karim Rahman Hamzah",  dun: "Asajaya",       party: "PBB",  zone: "Samarahan" },
  { id: 16, dun_no: "N16", name: "Datuk Idris Buang",                  dun: "Muara Tuang",   party: "PBB",  zone: "Samarahan" },
  { id: 17, dun_no: "N17", name: "Datuk Hamzah Brahim",                dun: "Stakan",        party: "PBB",  zone: "Samarahan" },
  { id: 18, dun_no: "N18", name: "Miro Simuh",                         dun: "Serembu",       party: "PBB",  zone: "Samarahan" },
  { id: 19, dun_no: "N19", name: "Datuk Jerip Susil",                  dun: "Mambong",       party: "PBB",  zone: "Samarahan" },
  { id: 20, dun_no: "N20", name: "Datuk Roland Sagah Wee Inn",         dun: "Tarat",         party: "PBB",  zone: "Samarahan" },
  { id: 21, dun_no: "N21", name: "Simon Sinang Anak Bada",             dun: "Tebedu",        party: "PBB",  zone: "Samarahan" },
  { id: 22, dun_no: "N22", name: "Martin Ben",                         dun: "Kedup",         party: "PBB",  zone: "Samarahan" },
  { id: 23, dun_no: "N23", name: "John Ilus",                          dun: "Bukit Semuja",  party: "PBB",  zone: "Samarahan" },
  { id: 24, dun_no: "N24", name: "Aidel Lariwoo",                      dun: "Sadong Jaya",   party: "PBB",  zone: "Samarahan" },
  { id: 25, dun_no: "N25", name: "Awla Dris",                          dun: "Simunjan",      party: "PBB",  zone: "Samarahan" },
  { id: 26, dun_no: "N26", name: "Datuk Patinggi Abang Johari Openg",  dun: "Gedong",        party: "PBB",  zone: "Samarahan" },
  { id: 27, dun_no: "N27", name: "Datuk Julaihi Narawi",               dun: "Sebuyau",       party: "PBB",  zone: "Samarahan" },
  { id: 28, dun_no: "N28", name: "Dayang Noorazah Awang Sohor",        dun: "Lingga",        party: "PBB",  zone: "Samarahan" },
  { id: 29, dun_no: "N29", name: "Razaili Gapor",                      dun: "Beting Maro",   party: "PBB",  zone: "Samarahan" },

  // ── SRI AMAN ──────────────────────────────────────────────
  { id: 30, dun_no: "N30", name: "Datuk Snowdan Lawan",                dun: "Balai Ringin",  party: "PRS",  zone: "Sri Aman"  },
  { id: 31, dun_no: "N31", name: "Datuk Mong Dagang",                  dun: "Bukit Begunan", party: "PRS",  zone: "Sri Aman"  },
  { id: 32, dun_no: "N32", name: "Datuk Francis Harden Hollis",        dun: "Simanggang",    party: "SUPP", zone: "Sri Aman"  },
  { id: 33, dun_no: "N33", name: "Desmond Sateng Sanjan",              dun: "Engkilili",     party: "SUPP", zone: "Sri Aman"  },
  { id: 34, dun_no: "N34", name: "Datuk Malcolm Mussen Lamoh",         dun: "Batang Ai",     party: "PRS",  zone: "Sri Aman"  },

  // ── BETONG ────────────────────────────────────────────────
  { id: 35, dun_no: "N35", name: "Ricky Mohammad Razi Sitam",          dun: "Saribas",       party: "PBB",  zone: "Betong"    },
  { id: 36, dun_no: "N36", name: "Datuk Gerald Rentap Jabu",           dun: "Layar",         party: "PBB",  zone: "Betong"    },
  { id: 37, dun_no: "N37", name: "Datuk Amar Douglas Uggah Ambas",     dun: "Bukit Saban",   party: "PBB",  zone: "Betong"    },
  { id: 38, dun_no: "N38", name: "Mohamad Duri",                       dun: "Kalaka",        party: "PBB",  zone: "Betong"    },
  { id: 39, dun_no: "N39", name: "Friday Belk",                        dun: "Krian",         party: "PDP",  zone: "Betong"    },
  { id: 40, dun_no: "N40", name: "Mohd Chee Kadir",                    dun: "Kabong",        party: "PBB",  zone: "Betong"    },

  // ── SARIKEI ───────────────────────────────────────────────
  { id: 41, dun_no: "N41", name: "Datu Len Talif",                     dun: "Kuala Rajang",  party: "PBB",  zone: "Sarikei"  },
  { id: 42, dun_no: "N42", name: "Datuk Abdullah Saidol",              dun: "Semop",         party: "PBB",  zone: "Sarikei"  },
  { id: 43, dun_no: "N43", name: "Safiee Ahmad",                       dun: "Daro",          party: "PBB",  zone: "Sarikei"  },
  { id: 44, dun_no: "N44", name: "Datuk Juanda Jaya",                  dun: "Jemoreng",      party: "PBB",  zone: "Sarikei"  },
  { id: 45, dun_no: "N45", name: "Datuk Sri Huang Tiong Sii",          dun: "Repok",         party: "SUPP", zone: "Sarikei"  },
  { id: 46, dun_no: "N46", name: "Datuk Ding Kong Hiing",              dun: "Meradong",      party: "SUPP", zone: "Sarikei"  },
  { id: 47, dun_no: "N47", name: "Tan Sri William Mawan Ekom",         dun: "Pakan",         party: "PBB",  zone: "Sarikei"  },
  { id: 48, dun_no: "N48", name: "Rolland Duat Jubin",                 dun: "Meluan",        party: "PDP",  zone: "Sarikei"  },
  { id: 49, dun_no: "N49", name: "Anyi Jana",                          dun: "Ngemah",        party: "PRS",  zone: "Sarikei"  },

  // ── SIBU ──────────────────────────────────────────────────
  { id: 50, dun_no: "N50", name: "Allan Siden Gramong",                dun: "Machan",        party: "PBB",  zone: "Sibu"     },
  { id: 51, dun_no: "N51", name: "Chieng Jin Ek",                      dun: "Bukit Assek",   party: "SUPP", zone: "Sibu"     },
  { id: 52, dun_no: "N52", name: "Datuk Sri Tiong King Sing",          dun: "Dudong",        party: "PDP",  zone: "Sibu"     },
  { id: 53, dun_no: "N53", name: "Robert Lau Hui Yew",                 dun: "Bawang Assan",  party: "SUPP", zone: "Sibu"     },
  { id: 54, dun_no: "N54", name: "Michael Tiang Ming Tee",             dun: "Pelawan",       party: "SUPP", zone: "Sibu"     },
  { id: 55, dun_no: "N55", name: "Dr Annuar Rapaee",                   dun: "Nangka",        party: "PBB",  zone: "Sibu"     },
  { id: 56, dun_no: "N56", name: "Datuk Sri Fatimah Abdullah",         dun: "Dalat",         party: "PBB",  zone: "Sibu"     },
  { id: 57, dun_no: "N57", name: "Royston Valentine",                  dun: "Tellian",       party: "PBB",  zone: "Sibu"     },
  { id: 58, dun_no: "N58", name: "Abdul Yakub Arbi",                   dun: "Balingian",     party: "PBB",  zone: "Sibu"     },

  // ── KAPIT ─────────────────────────────────────────────────
  { id: 59, dun_no: "N59", name: "Christopher Gira Sambang",           dun: "Tamin",         party: "PRS",  zone: "Kapit"    },
  { id: 60, dun_no: "N60", name: "Datuk John Sikie Tayai",             dun: "Kakus",         party: "PRS",  zone: "Kapit"    },
  { id: 61, dun_no: "N61", name: "Wilson Nyabong Ijang",               dun: "Pelagus",       party: "PRS",  zone: "Kapit"    },
  { id: 62, dun_no: "N62", name: "Lidam Assan",                        dun: "Katibas",       party: "PBB",  zone: "Kapit"    },
  { id: 63, dun_no: "N63", name: "Jefferson Jamit Unyat",              dun: "Bukit Goram",   party: "PBB",  zone: "Kapit"    },
  { id: 64, dun_no: "N64", name: "Nicholas Kudi Jantai Masing",        dun: "Baleh",         party: "PRS",  zone: "Kapit"    },
  { id: 65, dun_no: "N65", name: "Datuk Liwan Lagang",                 dun: "Belaga",        party: "PRS",  zone: "Kapit"    },
  { id: 66, dun_no: "N66", name: "Kennedy Chukpai Ugon",               dun: "Murum",         party: "PRS",  zone: "Kapit"    },

  // ── BINTULU ───────────────────────────────────────────────
  { id: 67, dun_no: "N67", name: "Datuk Talib Zulpilip",               dun: "Jepak",         party: "PBB",  zone: "Bintulu"  },
  { id: 68, dun_no: "N68", name: "Pang Leong Ming",                    dun: "Tanjong Batu",  party: "SUPP", zone: "Bintulu"  },
  { id: 69, dun_no: "N69", name: "Datuk Sri Stephen Rundi Utom",       dun: "Kemena",        party: "PBB",  zone: "Bintulu"  },
  { id: 70, dun_no: "N70", name: "Datuk Majang Renggi",                dun: "Samalaju",      party: "PRS",  zone: "Bintulu"  },

  // ── MIRI ──────────────────────────────────────────────────
  { id: 71, dun_no: "N71", name: "Datuk Rosey Yunus",                  dun: "Bekenu",        party: "PBB",  zone: "Miri"     },
  { id: 72, dun_no: "N72", name: "Ripin Lamat",                        dun: "Lambir",        party: "PBB",  zone: "Miri"     },
  { id: 73, dun_no: "N73", name: "Datuk Sebastian Ting Chiew Yew",     dun: "Piasau",        party: "SUPP", zone: "Miri"     },
  { id: 74, dun_no: "N74", name: "Adam Yii Siew Sang",                 dun: "Pujut",         party: "SUPP", zone: "Miri"     },
  { id: 75, dun_no: "N75", name: "Datuk Sri Lee Kim Shin",             dun: "Senadin",       party: "SUPP", zone: "Miri"     },
  { id: 76, dun_no: "N76", name: "Datuk Penguang Manggil",             dun: "Marudi",        party: "PDP",  zone: "Miri"     },
  { id: 77, dun_no: "N77", name: "Dennis Ngau",                        dun: "Telang Usan",   party: "PBB",  zone: "Miri"     },
  { id: 78, dun_no: "N78", name: "Datuk Gerawat Gala",                 dun: "Mulu",          party: "PBB",  zone: "Miri"     },
  { id: 79, dun_no: "N79", name: "Datuk Abdul Rahman Ismail",          dun: "Bukit Kota",    party: "PBB",  zone: "Miri"     },
  { id: 80, dun_no: "N80", name: "Paulus Palu Gumbang",                dun: "Batu Danau",    party: "PBB",  zone: "Miri"     },
  { id: 81, dun_no: "N81", name: "Sam Jaya",                           dun: "Ba'Kelalan",    party: "PDP",  zone: "Miri"     },
  { id: 82, dun_no: "N82", name: "Datuk Amar Awang Tengah Ali Hassan", dun: "Bukit Sari",    party: "PBB",  zone: "Miri"     },
];

// ── Party colours (Tailwind-compatible inline styles) ──────
const partyColours = {
  PBB:  { bg: '#eff6ff', text: '#1d4ed8', border: '#bfdbfe', dot: '#2563eb' },
  SUPP: { bg: '#fefce8', text: '#a16207', border: '#fde68a', dot: '#ca8a04' },
  PRS:  { bg: '#f0fdf4', text: '#15803d', border: '#bbf7d0', dot: '#16a34a' },
  PDP:  { bg: '#eff6ff', text: '#1e40af', border: '#bfdbfe', dot: '#3b82f6' },
};

// ── DOM refs — matching your index.html IDs ─────────────────
const grid        = document.getElementById('candidate-grid');
const emptyState  = document.getElementById('empty-state');
const searchInput = document.getElementById('search-input');
const zoneFilter  = document.getElementById('zone-filter');
const partyFilter = document.getElementById('party-filter');
const resultCount = document.getElementById('result-count');
const clearBtn    = document.getElementById('clear-filters');

// ── Init ───────────────────────────────────────────────────
render();

// ── Listeners ──────────────────────────────────────────────
searchInput.addEventListener('input', render);
zoneFilter.addEventListener('change', render);
partyFilter.addEventListener('change', render);
clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  zoneFilter.value  = 'All';
  partyFilter.value = 'All';
  render();
});

// ── Filter ─────────────────────────────────────────────────
function getFiltered() {
  const q     = searchInput.value.toLowerCase().trim();
  const zone  = zoneFilter.value;
  const party = partyFilter.value;

  return candidates.filter(c => {
    const matchZone   = zone  === 'All' || c.zone  === zone;
    const matchParty  = party === 'All' || c.party === party;
    const matchSearch = !q ||
      c.name.toLowerCase().includes(q) ||
      c.dun.toLowerCase().includes(q)  ||
      c.dun_no.toLowerCase().includes(q);
    return matchZone && matchParty && matchSearch;
  });
}

// ── Render ─────────────────────────────────────────────────
function render() {
  const filtered = getFiltered();
  grid.innerHTML  = '';

  resultCount.textContent = `${filtered.length} candidate${filtered.length !== 1 ? 's' : ''}`;

  if (filtered.length === 0) {
    emptyState.classList.remove('hidden');
    emptyState.classList.add('flex');
    return;
  }

  emptyState.classList.add('hidden');
  emptyState.classList.remove('flex');

  filtered.forEach((c, i) => {
    const card = buildCard(c);
    card.style.animationDelay = `${Math.min(i * 0.03, 0.5)}s`;
    grid.appendChild(card);
  });
}

// ── Card builder ───────────────────────────────────────────
function buildCard(c) {
  const col = partyColours[c.party] || partyColours.PBB;
  const initials = getInitials(c.name);

  const card = document.createElement('div');
  card.className = 'bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200';
  card.style.animation = 'fadeUp 0.3s ease both';

  card.innerHTML = `
    <div class="h-32 flex items-center justify-center relative" style="background-color: ${col.bg};">
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
      <div class="mt-3 pt-3 border-t border-gray-100 flex items-center gap-1.5">
        <svg class="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
        <span class="text-xs text-gray-400">${c.zone}</span>
      </div>
    </div>
  `;

  return card;
}

// ── Helpers ────────────────────────────────────────────────
function getInitials(name) {
  const clean = name.replace(/Datuk Sri|Datuk Seri|Datuk|Dato Sri|Dato'|Dato|Tan Sri|Tun|Dr |Ir |Datu /gi, '').trim();
  const parts  = clean.split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return parts[0].slice(0, 2).toUpperCase();
}
