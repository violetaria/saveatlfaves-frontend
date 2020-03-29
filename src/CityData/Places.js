const AtlPlaces = [
  {
    name: "The Righteous Room",
    address: "2142 Johnson Ferry Rd NE, Atlanta",
    key: "ChIJtWlLTBwJ9YgRzQVwIQfLv0M",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/111112019717059641487\">Heyward Adams</a>']"
  },
  {
    name: "Bold Monk Brewing Co.",
    address: "1737 Ellsworth Industrial Blvd NW suite d-1, Atlanta",
    key: "ChIJT9KvknAF9YgReD6o6LCcvrk",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/103088049248843583183\">Candice Boothe</a>']"
  },
  {
    name: "The Masquerade",
    address: "50 Lower Alabama Street, Atlanta",
    key: "ChIJ1R3_hhoE9YgR76S4q-sAxgI",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/114437781805505253972\">The Masquerade</a>']"
  },
  {
    name: "Gaja Korean Bar",
    address: "491 Flat Shoals Ave SE A, Atlanta",
    key: "ChIJDesFeFsB9YgRwTS98Pt3F-g",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/117104677751800290197\">Peto Fallas</a>']"
  },
  {
    name: "Papi's Cuban & Caribbean Grill",
    address: "EMORY POINT, 1540 Avenue Pl, Atlanta",
    key: "ChIJ75bAsVgG9YgRzbAeF_E7wy4",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/114752037141507840937\">Papi&#39;s Cuban &amp; Caribbean Grill</a>']"
  },
  {
    name: "The Righteous Room",
    address: "1051 Ponce De Leon Ave NE, Atlanta",
    key: "ChIJD-CxtaAG9YgRYjn24ubN2_Y",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/105759892416987689308\">The Righteous Room</a>']"
  },
  {
    name: "Bell Street Burritos",
    address: "112 Krog St NE #1A, Atlanta",
    key: "ChIJQab4HfgD9YgRSiCedOs3fi0",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/118421123702432324444\">Bell Street Burritos</a>']"
  },
  {
    name: "Brick Store Pub",
    address: "125 E Court Square, Decatur",
    key: "ChIJf_XS6z0H9YgRQsA29ddjvK4",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/111977918168031671570\">R Davis</a>']"
  },
  {
    name: "97 Estoria",
    address: "727 Wylie St SE, Atlanta",
    key: "ChIJlULd9fkD9YgRZVtIzn1BPqU",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/117313901484940972515\">Clip It Up With The Sweets</a>']"
  },
  {
    name: "BoccaLupo",
    address: "753 Edgewood Ave NE, Atlanta",
    key: "ChIJv3AGUvgD9YgRoeQkBXeuLHM",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/110933600718128727219\">Maureen Carroll</a>']"
  },
  {
    name: "Urban Grind",
    address: "962 Marietta St NW, Atlanta",
    key: "ChIJmzKErJME9YgRducKeLi6du8",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/100658622734296336915\">Urban Grind</a>']"
  },
  {
    name: "Wrecking Bar Brewpub",
    address: "292 Moreland Ave NE, Atlanta",
    key: "ChIJiQyZ4qsG9YgRP_wcRJGZxaw",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/115027286096822577705\">Zed Star</a>']"
  },
  {
    name: "Food Terminal",
    address: "1000 Marietta St NW UNIT 202, Atlanta",
    key: "ChIJX7w9HaEF9YgRPR83q-zJWis",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/113930873037724142825\">Torrey Smith</a>']"
  },
  {
    name: "Atlanta Breakfast Club",
    address: "249 Ivan Allen Jr Blvd NW, Atlanta",
    key: "ChIJY4335H0E9YgRpVDEfTRik70",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/117102443810372887265\">Atlanta Breakfast Club</a>']"
  },
  {
    name: "Thumbs Up Diner - Austell",
    address: "2615 East-West Connector Suite 100, Austell",
    key: "ChIJu2qy1Bs99YgRSiL8gEitcEw",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/101580952061318256414\">Shiran Moran</a>']"
  },
  {
    name: "Thumbs Up Diner",
    address: "1140 Alpharetta Street # 1A # 1A, Roswell",
    key: "ChIJpYFHclZz9YgRjxBnEp5EzHI",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/108520126807195709053\">\ub0a8\ucc44\uc2dd</a>']"
  },
  {
    name: "Thumbs Up Diner",
    address: "1617 White Way, Atlanta",
    key: "ChIJSax0vVMd9YgRCRtbsuRj3to",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/113779776647002286628\">Michael Smith</a>']"
  },
  {
    name: "Busy Bee Cafe",
    address: "810 M.L.K. Jr Dr SW, Atlanta",
    key: "ChIJZTrnLWED9YgRZy1jp7u_1vk",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/105650077269349099131\">Busy Bee Cafe</a>']"
  },
  {
    name: "Battle and Brew",
    address: "5920 Roswell Rd a120, Sandy Springs",
    key: "ChIJGVNl5N4T9YgRxHcdUR_h1gg",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/112911330134366893837\">Battle and Brew</a>']"
  },
  {
    name: "Thumbs Up Diner",
    address: "573 Edgewood Ave SE, Atlanta",
    key: "ChIJdaKB8fYD9YgRucANv8cv7b4",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/104111246635874032234\">ZAGAT</a>']"
  },
  {
    name: "Java Jive",
    address: "790 Ponce De Leon Ave NE, Atlanta",
    key: "ChIJw5ZZfRkE9YgRTlKf2BEjpt0",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/111946486978318483931\">Juan Tovar</a>']"
  },
  {
    name: "Bocado",
    address: "887 Howell Mill Rd NW, Atlanta",
    key: "ChIJp1zzA5ME9YgRAnTbCVEQNJo",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/100165444562403253362\">Mark McElroy</a>']"
  },
  {
    name: "Chops Lobster Bar",
    address: "70 West Paces Ferry Rd NW, Atlanta",
    key: "ChIJ01dhwo4F9YgRyv35vhu5k10",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/109390406391415981505\">Chops Lobster Bar</a>']"
  },
  {
    name: "The Optimist",
    address: "914 Howell Mill Rd, Atlanta",
    key: "ChIJr9PpEZME9YgRYg1YifCbOw8",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/117726245392782967799\">The Optimist</a>']"
  },
  {
    name: "Tin Roof Cantina",
    address: "2591 Briarcliff Rd NE, Atlanta",
    key: "ChIJXax3UTkG9YgRMkna_Wfh4G4",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/100257311669056509579\">Anzae Hardman</a>']"
  },
  {
    name: "Public School 404",
    address: "930 Howell Mill Rd, Atlanta",
    key: "ChIJ____aJME9YgR_gyktYS9sa0",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/105849776590165710548\">REbranding 360</a>']"
  },
  {
    name: "Twain's Brewpub & Billiards",
    address: "211 E Trinity Pl, Decatur",
    key: "ChIJ4bxe6T4H9YgRMtjAKa47DBw",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/100489743034681859736\">Travis Marker</a>']"
  },
  {
    name: "South City Kitchen Avalon",
    address: "9000 Avalon Way, Alpharetta",
    key: "ChIJ0bgV0IZ19YgR4Y-xEfJ-SUg",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/117786010096497549592\">South City Kitchen Avalon</a>']"
  },
  {
    name: "Henry's Louisiana Grill",
    address: "4835 N Main St, Acworth",
    key: "ChIJKdyidcZA9YgRtKIkEdL2PrM",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/115766151085044387584\">Michael Tharp</a>']"
  },
  {
    name: "BRIX On Main",
    address: "4843 N Main St, Acworth",
    key: "ChIJ1fgQ4MVA9YgRbbAWxn8b_S4",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/113552490500492923681\">BRIX On Main</a>']"
  },
  {
    name: "South City Kitchen",
    address: "1675 Cumberland Pkwy SE, Smyrna",
    key: "ChIJW5BSBnca9YgRdlUsuOHPLS4",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/101916169806903256445\">South City Kitchen</a>']"
  },
  {
    name: "F & B",
    address: "3630 Peachtree Rd NE Ste 160, Atlanta",
    key: "ChIJPdtczlMP9YgRlBLD-voTjYw",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/104987442817820464896\">F &amp; B</a>']"
  },
  {
    name: "Little Tart Bakeshop",
    address: "68 Georgia Ave SE, Atlanta",
    key: "ChIJNex-VpED9YgR9S18lwlISfc",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/103782759623342288104\">Ian Michael Rogers</a>']"
  },
  {
    name: "Emerald City Bagels",
    address: "1257A Glenwood Ave SE, Atlanta",
    key: "ChIJLXi9HYKn9YgRVI9vvtfWeDk",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/115545744259316629085\">Robie DuChateau</a>']"
  },
  {
    name: "The Little Tart Bakeshop",
    address: "99 Krog St NE, Atlanta",
    key: "ChIJT5vXOvgD9YgRyZOiuQaXtCI",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/109861234390716242514\">Carlos Armando Rodriguez Tovar</a>']"
  },
  {
    name: "MJQ (The Drunken Unicorn)",
    address: "736 Ponce De Leon Pl NE, Atlanta",
    key: "ChIJu3bFIBoE9YgRVE3Om6d9PCw",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/110999796639086781634\">Sysop Chris</a>']"
  },
  {
    name: "Food Terminal",
    address: "5000 Buford Hwy NE, Chamblee",
    key: "ChIJ3Z_V18oJ9YgRbo2xqmkKIAw",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/111259680104747944055\">Food Terminal</a>']"
  },
  {
    name: "Grant Central Pizza East",
    address: "1279 Glenwood Ave SE, Atlanta",
    key: "ChIJA2yXYlsB9YgRLx4rmMFjl-4",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/113930873037724142825\">Torrey Smith</a>']"
  },
  {
    name: "Elliott Street Deli & Pub",
    address: "51 Elliott St SW, Atlanta",
    key: "ChIJuUigzXgD9YgRHGvo5XXVaBM",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/112692150746110850923\">Sean Ellis</a>']"
  },
  {
    name: "El Ponce",
    address: "939 Ponce De Leon Ave NE, Atlanta",
    key: "ChIJmXF-0x0E9YgR0zt8xCu9rXs",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/106327008227711377606\">Anthony Maben Jr.</a>']"
  },
  {
    name: "Sister Louisa's Church of the Living Room & Ping Pong Emporium",
    address: "466 Edgewood Ave SE, Atlanta",
    key: "ChIJAzG4UPQD9YgReoq-MwO4jb4",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/111946724614368570598\">Sister Louisa&#39;s Church of the Living Room &amp; Ping Pong Emporium</a>']"
  },
  {
    name: "Kenny Leon's True Colors Theatre Company - Admin Office",
    address: "887 West Marietta St NW STE J102, Atlanta",
    key: "ChIJv54BSJUE9YgRXYdTIw5r7Ak",
    image_attribution: null
  },
  {
    name: "Joystick Gamebar",
    address: "427 Edgewood Ave SE, Atlanta",
    key: "ChIJHwq_6PQD9YgRaS_OmcG1JSY",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/114422700404552250864\">Mary C Pindar</a>']"
  },
  {
    name: "The Midway Pub",
    address: "552 Flat Shoals Ave SE, Atlanta",
    key: "ChIJn8y6qFwB9YgR595KQhQFNDc",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/104372336283933877175\">Andrew Schneider</a>']"
  },
  {
    name: "The Bakery",
    address: "825 Warner St SW, Atlanta",
    key: "ChIJ5R2KyhkD9YgRH7f5b5n8G1o",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/106347221179424080228\">Luke Rucker</a>']"
  },
  {
    name: "Out Front Theatre Company",
    address: "999 Brady Ave NW, Atlanta",
    key: "ChIJX2l9S-sE9YgReMK13IG42Z0",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/100587164284692436508\">Jennifer Butz</a>']"
  },
  {
    name: "Atlanta Brewing Company",
    address: "2323 Defoor Hills Rd NW, Atlanta",
    key: "ChIJlzkMXDIF9YgRLRJaA2-T5aQ",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/113040785979078086482\">Atlanta Brewing Company</a>']"
  },
  {
    name: "Pijiu Belly",
    address: "678 10th St NW, Atlanta",
    key: "ChIJBedpKZME9YgR3VqRCKLPLTI",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/108513545042510219877\">Alex Moffitt</a>']"
  },
  {
    name: "Ecco Buckhead",
    address: "3586 Peachtree Rd NE, Atlanta",
    key: "ChIJAeaqZVEP9YgR1p187fXkPGo",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/110018014909823311143\">Jon W. Lee</a>']"
  },
  {
    name: "Java Cats Cafe",
    address: "415 Memorial Dr SE ste c ste c, Atlanta",
    key: "ChIJQ0hUXu0D9YgRIzqdeXnn4QE",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/109783719836330781046\">Java Cats Cafe</a>']"
  },
  {
    name: "Carroll Street Cafe",
    address: "208 Carroll St SE, Atlanta",
    key: "ChIJNQI7pvED9YgRElt2Lg7xRa4",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/101287712061072215032\">Andrew Hultstrand</a>']"
  },
  {
    name: "The Basement",
    address: "1245 Glenwood Ave SE, Atlanta",
    key: "ChIJieVKh1sB9YgRv-f3GEMm-J0",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/115453028258539039225\">Elle Pee</a>']"
  },
  {
    name: "Joe's East Atlanta Coffee Shop",
    address: "510 Flat Shoals Ave SE, Atlanta",
    key: "ChIJX1pYZFsB9YgRbNKJr9Juw58",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/115927423287828350194\">Jason Sargis</a>']"
  },
  {
    name: "Aziza",
    address: "1170 Howel Mill rd Suite P10b, Atlanta",
    key: "ChIJuagesKEF9YgR_oS1L5PWjbM",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/107865472099776286902\">Aziza</a>']"
  },
  {
    name: "Cypress Street Pint & Plate",
    address: "817 W Peachtree St NW, Atlanta",
    key: "ChIJweczQWYE9YgRvtwgBTj9cUU",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/115429723269808014462\">Cypress Street Pint &amp; Plate</a>']"
  },
  {
    name: "Alma Cocina Buckhead",
    address: "Terminus 100, 3280 Peachtree Rd NE, Atlanta",
    key: "ChIJIxYi-KYF9YgRGqHsohBT9pw",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/106389925909752099783\">Alexander Stanley</a>']"
  },
  {
    name: "Cameli's Pizza",
    address: "337 Moreland Ave NE, Atlanta",
    key: "ChIJ5-wSta4G9YgRn3P4nexUgzA",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/111626101798823803259\">Earnest Jackson</a>']"
  },
  {
    name: "The Imperial",
    address: "726 W College Ave, Decatur",
    key: "ChIJTQI8-SUH9YgRIjiLOqEBaRQ",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/109108658525016750589\">The Imperial</a>']"
  },
  {
    name: "The Glenwood",
    address: "1263 Glenwood Ave SE, Atlanta",
    key: "ChIJHabwflsB9YgRpJOedKCTd3I",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/111547068803349631963\">Kevin Hartsock</a>']"
  },
  {
    name: "Hattie B's Hot Chicken - Atlanta, GA",
    address: "299 Moreland Ave NE, Atlanta",
    key: "ChIJh8p89PQH9YgR_n-M514AVA8",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/117190869737657180728\">saray gill</a>']"
  },
  {
    name: "Alma Cocina Downtown",
    address: "191 Peachtree St NE, Atlanta",
    key: "ChIJSd4kc3gE9YgRq6HkvZcW-cw",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/111081873940202647414\">Alma Cocina</a>']"
  },
  {
    name: "Kimball House",
    address: "303 E Howard Ave, Decatur",
    key: "ChIJHatDOT8H9YgRE9zxI4xpacI",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/104059481897670924097\">Kimball House</a>']"
  },
  {
    name: "King of Pops Beach Bar",
    address: "Ponce City Market, 675 Ponce De Leon Ave NE #145, Atlanta",
    key: "ChIJIxmgj4AF9YgR7g5afAt-8V4",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/103870297920858767528\">King of Pops Beach Bar</a>']"
  },
  {
    name: "Banshee",
    address: "1271 Glenwood Ave SE, Atlanta",
    key: "ChIJeTP7sxsB9YgRxlN9qnOSUgE",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/107281069790519684993\">Lanie Weathers</a>']"
  },
  {
    name: "Bottle Rocket Fine Food and Beverage",
    address: "180 Walker St SW, Atlanta",
    key: "ChIJJQEcinkD9YgRw46X2vrQ7rA",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/117034873783845675454\">Bottle Rocket Fine Food and Beverage</a>']"
  },
  {
    name: "Manuel's Tavern",
    address: "602 North Highland Avenue Northeast, Atlanta",
    key: "ChIJnbi7oqcG9YgRCp6paNceye4",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/114422700404552250864\">Mary C Pindar</a>']"
  },
  {
    name: "Daddy D'z BBQ Joynt",
    address: "264 Memorial Dr SE #2139, Atlanta",
    key: "ChIJ45fvdZID9YgRmZ2C0G6y_bg",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/109431089571599521489\">Eli Young</a>']"
  },
  {
    name: "The Original El Taco",
    address: "1186 North Highland Avenue Northeast, Atlanta",
    key: "ChIJ-Yl0DScE9YgRnCACsvCTuLo",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/115123136013983937509\">The Original El Taco</a>']"
  },
  {
    name: "Brewhouse Cafe",
    address: "401 Moreland Ave NE, Atlanta",
    key: "ChIJJ72T1agG9YgR7f1FJRUZsEc",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/115714099258419675785\">Ernesto Rodriguez</a>']"
  },
  {
    name: "Hodgepodge Coffeehouse",
    address: "720 Moreland Ave SE, Atlanta",
    key: "ChIJM7PF_10B9YgRJMJGTriwPRQ",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/112172701465642250096\">amin seyyedi</a>']"
  },
  {
    name: "Empire State South",
    address: "999 Peachtree St NE #140, Atlanta",
    key: "ChIJk1JQhkIE9YgRszI7YFGNgtQ",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/104111246635874032234\">ZAGAT</a>']"
  },
  {
    name: "Little Trouble",
    address: "1170 Howell Mill Rd NW Suite P-10C, Atlanta",
    key: "ChIJdUSsCuwE9YgRCnnLP2CMuNA",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/115923417741498777234\">Guillaume Sabbe</a>']"
  },
  {
    name: "Urban Grind Coffeehouse & Roasters",
    address: "911 NW 14th Ave, Portland, OR 97209, USA",
    key: "ChIJFxI3u_4JlVQRbyaYnsoFgwY",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/102287367159172285440\">Whitney White</a>']"
  },
  {
    name: "La Tavola",
    address: "992 Virginia Ave NE, Atlanta",
    key: "ChIJiSBpjyAE9YgRhD5_PW5jodY",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/114798838727191768782\">La Tavola</a>']"
  },
  {
    name: "The Little Tart Bakeshop",
    address: "437 Memorial Dr SE, Atlanta",
    key: "ChIJST77ee0D9YgRW_bpabTN9V8",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/116626627150606699234\">Frank B\u00f6ttger</a>']"
  },
  {
    name: "Nino's Italian Restaurant",
    address: "1931 Cheshire Bridge Rd NE, Atlanta",
    key: "ChIJNRziKtEF9YgRl8-3Otc21DQ",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/115447825260497039122\">Nino&#39;s Italian Restaurant</a>']"
  },
  {
    name: "Monday Night Brewing",
    address: "670 Trabert Ave NW, Atlanta",
    key: "ChIJGaB3peUE9YgRnAlaZJyZO9g",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/108374775105419747538\">Monday Night Brewing</a>']"
  },
  {
    name: "Holy Taco",
    address: "1314 Glenwood Ave SE, Atlanta",
    key: "ChIJXW0GW1sB9YgRAg8Pv7ekF-g",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/118291458166910221682\">Julian Miguel</a>']"
  },
  {
    name: "Euclid Avenue Yacht Club",
    address: "1136 Euclid Ave NE, Atlanta",
    key: "ChIJjf_UI6kG9YgR7p8jPDcU7uY",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/117322765835560347561\">Drew Renton</a>']"
  },
  {
    name: "Edgewood Corner Tavern",
    address: "464 Edgewood Ave SE, Atlanta",
    key: "ChIJlcKQV_QD9YgRe_wjuQxP4KY",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/113083175874488646632\">Edgewood Corner Tavern</a>']"
  },
  {
    name: "Star Provisions Market & Cafe",
    address: "1460 Ellsworth Industrial Blvd NW, Atlanta",
    key: "ChIJpdvjl9oE9YgR-Vwiu7-AgI0",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/107450093754317548143\">Star Provisions Market &amp; Cafe</a>']"
  },
  {
    name: "Smith's Olde Bar",
    address: "1578 Piedmont Ave NE, Atlanta",
    key: "ChIJAXyO6TME9YgRsyC69QK5W38",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/104651466151914484684\">Smith&#39;s Olde Bar</a>']"
  },
  {
    name: "The Highlander",
    address: "931 Monroe Dr NE ste c-101, Atlanta",
    key: "ChIJM_BtKBYE9YgR1konNMKS4lc",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/114236844683396303299\">Ford Prefect</a>']"
  },
  {
    name: "The Elder Tree Public House",
    address: "469 Flat Shoals Ave SE, Atlanta",
    key: "ChIJOUsvn1sB9YgR8SX5jx8shxs",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/114387266384952009937\">The Elder Tree Public House</a>']"
  },
  {
    name: "Atwoods Pizza Cafe",
    address: "817 W Peachtree St NW, Atlanta",
    key: "ChIJlVIoR2YE9YgR8vJPLFCZPQg",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/112305291456270551461\">Atwoods Pizza Cafe</a>']"
  },
  {
    name: "Redbird",
    address: "1198 Howell Mill Rd, Atlanta",
    key: "ChIJ42ibKDUF9YgRWwfCCdzR0HY",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/100962018389555591098\">Allison Giddens</a>']"
  },
  {
    name: "Elmyr",
    address: "1091 Euclid Ave NE, Atlanta",
    key: "ChIJWW1dcakG9YgRoZwfGanhMkY",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/109827179621067937960\">Elizabeth Crosby</a>']"
  },
  {
    name: "Likewise",
    address: "675 Ponce De Leon Ave NE NW208, Atlanta",
    key: "ChIJxbIYFL8F9YgRss2SJ3a6ccE",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/106581636832386070014\">Likewise</a>']"
  },
  {
    name: "Barcelona Wine Bar",
    address: "1085 Howell Mill Rd, Atlanta",
    key: "ChIJ3XLnh-wE9YgRYP5jOqO4u9w",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/116384218563540884255\">Barcelona Wine Bar</a>']"
  },
  {
    name: "South City Kitchen Buckhead",
    address: "3350 Peachtree Rd #175, Atlanta",
    key: "ChIJ6xl-kVgP9YgR063dIyw9krE",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/115194319650143969817\">Cary Charles</a>']"
  },
  {
    name: "103 West",
    address: "103 West Paces Ferry Rd NW, Atlanta",
    key: "ChIJt6YoMY8F9YgRWkidpQqTkTk",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/107927247451862894022\">103 West</a>']"
  },
  {
    name: "Ecco Midtown",
    address: "40 7th St NE, Atlanta",
    key: "ChIJlyVS2WcE9YgR2EM86Kf9aRY",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/104758677764406300354\">Ecco Midtown</a>']"
  },
  {
    name: "Thumbs Up Diner",
    address: "826 Marietta St NW, Atlanta",
    key: "ChIJg31DHo4E9YgRGxKuRr_FcrA",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/106705459093973648003\">Dan</a>']"
  },
  {
    name: "Lure",
    address: "1106 Crescent Ave NE, Atlanta",
    key: "ChIJWba4QUME9YgR4OgI_SW1htk",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/118298360395548271888\">Lure</a>']"
  },
  {
    name: "South City Kitchen",
    address: "1144 Crescent Ave NE, Atlanta",
    key: "ChIJvQqtX0ME9YgR-X6ukvNSt6I",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/105452803041468344781\">South City Kitchen Midtown</a>']"
  },
  {
    name: "Kaleidoscope Bistro & Pub",
    address: "1410 Dresden Dr #100, Atlanta",
    key: "ChIJGcmZb5YI9YgR12viPfFfgto",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/110871860412057007618\">Kaleidoscope Bistro &amp; Pub</a>']"
  },
  {
    name: "Dancing Goats Coffee Bar",
    address: "33 Peachtree Pl NE, Atlanta",
    key: "ChIJsZEJ9mcE9YgRDTcnhgVcVaI",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/100744712464792480931\">Joshua Kaminski</a>']"
  },
  {
    name: "Jalisco Restaurant",
    address: "2907, 2337 Peachtree Rd, Atlanta",
    key: "ChIJfaQ6YaMF9YgRXWHnVdHufG4",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/104111246635874032234\">ZAGAT</a>']"
  },
  {
    name: "Buckhead Diner",
    address: "3073 Piedmont Rd NE, Atlanta",
    key: "ChIJ_yOhbPEF9YgRwO-rJLLgAXE",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/105123865965057730483\">Ash Said It Media</a>']"
  },
  {
    name: "The EARL",
    address: "488 Flat Shoals Ave SE, Atlanta",
    key: "ChIJb1DZdlsB9YgRceexPKAJVS8",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/113829935808178404304\">tami johnson</a>']"
  },
  {
    name: "Octopus Bar",
    address: "560 Gresham Ave SE, Atlanta",
    key: "ChIJk1y8hFwB9YgRVjHVY5FnPz8",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/107714104983627793097\">C W Jeffrey</a>']"
  },
  {
    name: "Lazy Betty",
    address: "1530 DeKalb Ave NE ste f, Atlanta",
    key: "ChIJ00zCHiAH9YgR3l-kmURAKrM",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/101645455052750619346\">Carolina Barros Pastor</a>']"
  },
  {
    name: "Nakato Japanese Restaurant",
    address: "1776 Cheshire Bridge Rd NE, Atlanta",
    key: "ChIJl8XE4dEF9YgRjKG4beSSnwg",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/104781962185912548420\">Nakato Japanese Restaurant</a>']"
  },
  {
    name: "Golden Eagle",
    address: "904 Memorial Dr SE, Atlanta",
    key: "ChIJx6kex_wD9YgRf86xF1-ppWc",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/113719611074201126643\">Golden Eagle</a>']"
  },
  {
    name: "Muchacho",
    address: "904 Memorial Dr SE, Atlanta",
    key: "ChIJx6kex_wD9YgRIouzCOksbmU",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/113441439828887453133\">Jay Gwaltney</a>']"
  },
  {
    name: "Raging Burrito",
    address: "141 Sycamore St, Decatur",
    key: "ChIJ7d-HZT4H9YgRPzfm-aueQmo",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/114522588329115383347\">William Suane</a>']"
  },
  {
    name: "Noni's",
    address: "357 Edgewood Ave SE, Atlanta",
    key: "ChIJi4KXOosD9YgRR_sUOVQmFec",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/111669663818812659995\">Noni&#39;s</a>']"
  },
  {
    name: "Momonoki",
    address: "95 8th St NW #100 A, Atlanta",
    key: "ChIJt3qYlhAF9YgRP0MHBbUh6Nw",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/110180568289867299131\">Momonoki</a>']"
  },
  {
    name: "JCT. Kitchen & Bar",
    address: "1198 Howell Mill Rd #18, Atlanta",
    key: "ChIJqV638esE9YgRFI3BWXG1vUo",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/105303505373661530610\">indoorfish</a>']"
  },
  {
    name: "The Pig and The Pearl",
    address: "1380 Atlantic Dr, Atlanta",
    key: "ChIJFWHNJfgE9YgRsR-BshP0Qe4",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/100971948194351894128\">The Pig and The Pearl</a>']"
  },
  {
    name: "Bon Ton Atlanta",
    address: "674 Myrtle St NE, Atlanta",
    key: "ChIJIa9sJ2wE9YgRG9lUqCTz5_Y",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/117944773871056894096\">Jared Palatchi</a>']"
  },
  {
    name: "The Independent",
    address: "931 Monroe Dr NE suite c-205, Atlanta",
    key: "ChIJM_BtKBYE9YgRsrAYPorALbk",
    image_attribution:
      "['<a href=\"https://maps.google.com/maps/contrib/108301137126680338167\">The Independent</a>']"
  }
];
export default AtlPlaces;
