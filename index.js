const express = require('express');
const app = express();
const port = 6000; 

const nigerianStates = [
  {
    id: 1,
    name: "Abia",
    capital: "Umuahia",
    governor: "Alex Otti",
    population: 4841943,
    motto: "God's Own State",
    region: "South East"
  },
  {
    id: 2,
    name: "Adamawa",
    capital: "Yola",
    governor: "Ahmadu Umaru Fintiri",
    population: 5236948,
    motto: "Land of Beauty",
    region: "North East"
  },
  {
    id: 3,
    name: "Akwa Ibom",
    capital: "Uyo",
    governor: "Umo Eno",
    population: 5780581,
    motto: "Land of Promise",
    region: "South South"
  },
  {
    id: 4,
    name: "Anambra",
    capital: "Awka",
    governor: "Charles Soludo",
    population: 7299910,
    motto: "Light of the Nation",
    region: "South East"
  },
  {
    id: 5,
    name: "Bauchi",
    capital: "Bauchi",
    governor: "Bala Mohammed",
    population: 7540663,
    motto: "Pearl of Tourism",
    region: "North East"
  },
  {
    id: 6,
    name: "Bayelsa",
    capital: "Yenagoa",
    governor: "Douye Diri",
    population: 2394725,
    motto: "Glory of All Lands",
    region: "South South"
  },
  {
    id: 7,
    name: "Benue",
    capital: "Makurdi",
    governor: "Hyacinth Alia",
    population: 6687706,
    motto: "Food Basket of the Nation",
    region: "North Central"
  },
  {
    id: 8,
    name: "Borno",
    capital: "Maiduguri",
    governor: "Babagana Zulum",
    population: 6651590,
    motto: "Home of Peace",
    region: "North East"
  },
  {
    id: 9,
    name: "Cross River",
    capital: "Calabar",
    governor: "Bassey Otu",
    population: 4175020,
    motto: "The People's Paradise",
    region: "South South"
  },
  {
    id: 10,
    name: "Delta",
    capital: "Asaba",
    governor: "Sheriff Oborevwori",
    population: 6107543,
    motto: "The Big Heart",
    region: "South South"
  },
  {
    id: 11,
    name: "Ebonyi",
    capital: "Abakaliki",
    governor: "Francis Nwifuru",
    population: 4007155,
    motto: "Salt of the Nation",
    region: "South East"
  },
  {
    id: 12,
    name: "Edo",
    capital: "Benin City",
    governor: "Monday Okpebholo",
    population: 5527810,
    motto: "Heartbeat of the Nation",
    region: "South South"
  },
  {
    id: 13,
    name: "Ekiti",
    capital: "Ado-Ekiti",
    governor: "Biodun Oyebanji",
    population: 3398177,
    motto: "Land of Honour and Integrity",
    region: "South West"
  },
  {
    id: 14,
    name: "Enugu",
    capital: "Enugu",
    governor: "Peter Mbah",
    population: 5396098,
    motto: "Coal City State",
    region: "South East"
  },
  {
    id: 15,
    name: "Gombe",
    capital: "Gombe",
    governor: "Muhammad Inuwa Yahaya",
    population: 4623462,
    motto: "Jewel in the Savannah",
    region: "North East"
  },
  {
    id: 16,
    name: "Imo",
    capital: "Owerri",
    governor: "Hope Uzodinma",
    population: 6067722,
    motto: "Eastern Heartland",
    region: "South East"
  },
  {
    id: 17,
    name: "Jigawa",
    capital: "Dutse",
    governor: "Umar Namadi",
    population: 6979080,
    motto: "The New World",
    region: "North West"
  },
  {
    id: 18,
    name: "Kaduna",
    capital: "Kaduna",
    governor: "Uba Sani",
    population: 8324285,
    motto: "Centre of Learning",
    region: "North West"
  },
  {
    id: 19,
    name: "Kano",
    capital: "Kano",
    governor: "Abba Kabir Yusuf",
    population: 16253549,
    motto: "Centre of Commerce",
    region: "North West"
  },
  {
    id: 20,
    name: "Katsina",
    capital: "Katsina",
    governor: "Dikko Umaru Radda",
    population: 9300382,
    motto: "Home of Hospitality",
    region: "North West"
  },
  {
    id: 21,
    name: "Kebbi",
    capital: "Birnin Kebbi",
    governor: "Nasir Idris",
    population: 6001610,
    motto: "Land of Equity",
    region: "North West"
  },
  {
    id: 22,
    name: "Kogi",
    capital: "Lokoja",
    governor: "Ahmed Usman Ododo",
    population: 5053734,
    motto: "The Confluence State",
    region: "North Central"
  },
  {
    id: 23,
    name: "Kwara",
    capital: "Ilorin",
    governor: "AbdulRahman AbdulRazaq",
    population: 4259613,
    motto: "State of Harmony",
    region: "North Central"
  },
  {
    id: 24,
    name: "Lagos",
    capital: "Ikeja",
    governor: "Babajide Sanwo-Olu",
    population: 15772884,
    motto: "Centre of Excellence",
    region: "South West"
  },
  {
    id: 25,
    name: "Nasarawa",
    capital: "Lafia",
    governor: "Abdullahi Sule",
    population: 3632239,
    motto: "Home of Solid Minerals",
    region: "North Central"
  },
  {
    id: 26,
    name: "Niger",
    capital: "Minna",
    governor: "Mohammed Umar Bago",
    population: 6720617,
    motto: "The Power State",
    region: "North Central"
  },
  {
    id: 27,
    name: "Ogun",
    capital: "Abeokuta",
    governor: "Dapo Abiodun",
    population: 6445275,
    motto: "Gateway State",
    region: "South West"
  },
  {
    id: 28,
    name: "Ondo",
    capital: "Akure",
    governor: "Lucky Aiyedatiwa",
    population: 5469707,
    motto: "Sunshine State",
    region: "South West"
  },
  {
    id: 29,
    name: "Osun",
    capital: "Osogbo",
    governor: "Ademola Adeleke",
    population: 4237396,
    motto: "Land of Virtue",
    region: "South West"
  },
  {
    id: 30,
    name: "Oyo",
    capital: "Ibadan",
    governor: "Seyi Makinde",
    population: 7512855,
    motto: "Pace Setter State",
    region: "South West"
  },
  {
    id: 31,
    name: "Plateau",
    capital: "Jos",
    governor: "Caleb Mutfwang",
    population: 5400974,
    motto: "Home of Peace and Tourism",
    region: "North Central"
  },
  {
    id: 32,
    name: "Rivers",
    capital: "Port Harcourt",
    governor: "Siminalayi Fubara",
    population: 7234973,
    motto: "Treasure Base of the Nation",
    region: "South South"
  },
  {
    id: 33,
    name: "Sokoto",
    capital: "Sokoto",
    governor: "Ahmad Aliyu",
    population: 6163187,
    motto: "Seat of the Caliphate",
    region: "North West"
  },
  {
    id: 34,
    name: "Taraba",
    capital: "Jalingo",
    governor: "Agbu Kefas",
    population: 4331885,
    motto: "Nature's Gift to the Nation",
    region: "North East"
  },
  {
    id: 35,
    name: "Yobe",
    capital: "Damaturu",
    governor: "Mai Mala Buni",
    population: 4350401,
    motto: "Pride of the Sahel",
    region: "North East"
  },
  {
    id: 36,
    name: "Zamfara",
    capital: "Gusau",
    governor: "Dauda Lawal",
    population: 5517793,
    motto: "Farming is Our Pride",
    region: "North West"
  },
  {
    id: 37,
    name: "FCT",
    capital: "Abuja",
    governor: "Nyesom Wike (Minister)",
    population: 4802443,
    motto: "Centre of Unity",
    region: "North Central"
  }
];



app.get('/states', (req, res) => {
  res.send(nigerianStates)
})
app.listen(port, () => {
  console.log(`Server running on ${port}`)
})