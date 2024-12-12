document.addEventListener("DOMContentLoaded", function () {
  const years = [2022, 2023, 2014, 2021, 2020, 2017, 2018, 2016, 2019, 2015];
  const divisions = {
    32: "D32",
    12: "D12",
    13: "D13",
    53: "D53",
    43: "D43",
    22: "D22",
    33: "D33",
    55: "D55",
    23: "D23",
    52: "D52",
    11: "D11",
    42: "D42",
    41: "D41",
    14: "D14",
    31: "D31",
    51: "D51",
  };
  const neighbourhoods = {
    34: "Bathurst Manor",
    30: "Brookhaven-Amesbury",
    32: "Englemount-Lawrence",
    73: "Moss Park",
    102: "Forest Hill North",
    134: "Highland Creek",
    150: "Fenside-Parkwoods",
    121: "Oakridge",
    140: "Guildwood",
    8: "Humber Heights-Westmount",
    164: "Wellington Place",
    148: "East L'Amoreaux",
    101: "Forest Hill South",
    22: "Humbermede",
    31: "Yorkdale-Glen Park",
    167: "Church-Wellesley",
    50: "Newtonbrook East",
    69: "Blake-Jones",
    120: "Clairlea-Birchmount",
    68: "North Riverdale",
    109: "Caledonia-Fairbank",
    43: "Victoria Village",
    142: "Woburn North",
    173: "North Toronto",
    157: "Bendale South",
    78: "Kensington-Chinatown",
    12: "Markland Wood",
    112: "Beechborough-Greenbrook",
    123: "Cliffcrest",
    114: "Lambton Baby Point",
    79: "University",
    155: "Downsview",
    59: "Danforth East York",
    3: "Thistletown-Beaumond Heights",
    41: "Bridle Path-Sunnybrook-York Mills",
    133: "Centennial Scarborough",
    24: "Black Creek",
    85: "South Parkdale",
    116: "Steeles",
    23: "Pelmo Park-Humberlea",
    28: "Rustic",
    9: "Edenbridge-Humber Valley",
    60: "Woodbine-Lumsden",
    35: "Westminster-Branson",
    56: "Leaside-Bennington",
    84: "Little Portugal",
    111: "Rockcliffe-Smythe",
    151: "Yonge-Doris",
    147: "L'Amoreaux West",
    156: "Bendale-Glen Andrew",
    39: "Bedford Park-Nortown",
    146: "Malvern East",
    62: "East End-Danforth",
    11: "Eringate-Centennial-West Deane",
    1: "West Humber-Clairville",
    63: "The Beaches",
    27: "York University Heights",
    57: "Broadview North",
    166: "St Lawrence-East Bayfront-The Islands",
    4: "Rexdale-Kipling",
    143: "West Rouge",
    33: "Clanton Park",
    67: "Playter Estates-Danforth",
    53: "Henry Farm",
    122: "Birchcliffe-Cliffside",
    169: "Bay-Cloverhill",
    90: "Junction Area",
    163: "Fort York-Liberty Village",
    170: "Yonge-Bay Corridor",
    58: "Old East York",
    139: "Scarborough Village",
    94: "Wychwood",
    126: "Dorset Park",
    49: "Bayview Woods-Steeles",
    125: "Ionview",
    113: "Weston",
    29: "Maple Leaf",
    5: "Elms-Old Rexdale",
    46: "Pleasant View",
    10: "Princess-Rosethorn",
    149: "Parkwoods-O'Connor Hills",
    96: "Casa Loma",
    44: "Flemingdon Park",
    144: "Morningside Heights",
    118: "Tam O'Shanter-Sullivan",
    20: "Alderwood",
    124: "Kennedy Park",
    61: "Taylor-Massey",
    128: "Agincourt South-Malvern West",
    70: "South Riverdale",
    89: "Runnymede-Bloor West Village",
    19: "Long Branch",
    98: "Rosedale-Moore Park",
    25: "Glenfield-Jane Heights",
    161: "Humber Bay Shores",
    168: "Downtown Yonge East",
    15: "Kingsway South",
    103: "Lawrence Park South",
    42: "Banbury-Don Mills",
    74: "North St.James Town",
    40: "St.Andrew-Windfields",
    105: "Lawrence Park North",
    160: "Mimico-Queensway",
    64: "Woodbine Corridor",
    13: "Etobicoke West Mall",
    91: "Weston-Pelham Park",
    55: "Thorncliffe Park",
    18: "New Toronto",
    65: "Greenwood-Coxwell",
    37: "Willowdale West",
    66: "Danforth",
    47: "Don Valley Village",
    108: "Briar Hill-Belgravia",
    95: "Annex",
    72: "Regent Park",
    171: "Junction-Wallace Emerson",
    153: "Avondale",
    138: "Eglinton East",
    106: "Humewood-Cedarvale",
    52: "Bayview Village",
    83: "Dufferin Grove",
    92: "Corso Italia-Davenport",
    6: "Kingsview Village-The Westway",
    159: "Etobicoke City Centre",
    97: "Yonge-St.Clair",
    54: "O'Connor-Parkview",
    145: "Malvern West",
    110: "Keelesdale-Eglinton West",
    158: "Islington",
    162: "West Queen West",
    174: "South Eglinton-Davisville",
    88: "High Park North",
    87: "High Park-Swansea",
    152: "East Willowdale",
    172: "Dovercourt Village",
    165: "Harbourfront-CityPlace",
    99: "Mount Pleasant East",
    100: "Yonge-Eglinton",
    115: "Mount Dennis",
    71: "Cabbagetown-South St.James Town",
    129: "Agincourt North",
    7: "Willowridge-Martingrove-Richview",
    36: "Newtonbrook West",
    130: "Milliken",
    135: "Morningside",
    86: "Roncesvalles",
    81: "Trinity-Bellwoods",
    107: "Oakwood Village",
    38: "Lansing-Westgate",
    16: "Stonegate-Queensway",
    119: "Wexford/Maryvale",
    154: "Oakdale-Beverley Heights",
    21: "Humber Summit",
    2: "Mount Olive-Silverstone-Jamestown",
    141: "Golfdale-Cedarbrae-Woburn",
    48: "Hillcrest Village",
    136: "West Hill",
    80: "Palmerston-Little Italy",
  };
  const categories = [
    "Crimes Against Property",
    "Crimes Against the Person",
    "Other Federal Statute Violations",
    "Other Criminal Code Violations",
    "Controlled Drugs and Substances Act",
    "Criminal Code Traffic",
  ];
  const subtypes = [
    "Auto Theft",
    "Break & Enter-House",
    "Sexual Violation",
    "Break & Enter-Apartment",
    "Theft Under $5000",
    "Break & Enter-Other",
    "Theft Over $5000",
    "Break & Enter-Commercial",
    "Robbery-Other",
    "Other",
    "Attempt Murder",
    "Fraud",
    "Other Criminal Violations - Offensive Weapons",
    "Robbery-Financial",
    "Assault",
  ];
  const divisionSelect = document.getElementById("division");
  const neighbourhoodSelect = document.getElementById("neighbourhood");
  const categorySelect = document.getElementById("category");
  const subtypeSelect = document.getElementById("subtype");
  const yearSelect = document.getElementById("year");
  divisionSelect.addEventListener("change", function () {
    this.value = parseInt(this.value);
  });

  neighbourhoodSelect.addEventListener("change", function () {
    this.value = parseInt(this.value);
  });

  yearSelect.addEventListener("change", function () {
    this.value = parseInt(this.value);
  });
  Object.keys(divisions).forEach((key) => {
    const option = document.createElement("option");
    option.value = parseInt(key);
    option.text = divisions[key];
    divisionSelect.appendChild(option);
  });

  Object.keys(neighbourhoods).forEach((key) => {
    const option = document.createElement("option");
    option.value = parseInt(key);
    option.text = neighbourhoods[key] + " (" + key + ")";
    neighbourhoodSelect.appendChild(option);
  });
  years.forEach((year) => {
    const option = document.createElement("option");
    option.value = parseInt(year);
    option.text = year;
    yearSelect.appendChild(option);
  });
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.text = category;
    categorySelect.appendChild(option);
  });

  subtypes.forEach((subtype) => {
    const option = document.createElement("option");
    option.value = subtype;
    option.text = subtype;
    subtypeSelect.appendChild(option);
  });
});

function submitForm() {
  const form = document.getElementById("predictiveForm");
  const formData = new FormData(form);
  const data = {};

  formData.forEach((value, key) => {
    if (key === "neighbourhood" || key === "division" || key === "year") {
      data[key] = parseInt(value);
    } else {
      data[key] = value;
    }
  });

  dataFinal = [];
  dataFinal.push(data);
  dataFinal.push({});

  fetch(
    "https://d6ce8339-462e-49f0-b3f1-b96b8a1ebc4f-00-1jpwl994t18b4.picard.replit.dev:4200/predict",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataFinal),
    }
  )
    .then((response) => response.json())
    .then((result) => {
      console.log("Success:", result?.prediction.split(",")[0]);
      res = result.prediction.split(",")[0].substring(1);
      if (res == "np.int64(0)") {
        res = "Low Case Clear Rate";
      } else {
        res = "High Case Clear Rate";
      }
      document.getElementById("result").innerText = res;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
