var cities = [
// I don't know why you're reading this boring file,
// but please note that "pop" isn't always a population number.
// The reasons are complicated, drop me a line if you really
// care a lot about it :-)
{
 city: 'Idaho Falls',
 state: 'Idaho',
 lat: 43.488673,
 lon: -112.03638,
 pop: 100000
},
{
 city: 'Amherst',
 state: 'Massachusetts',
 lat: 42.375623,
 lon: -72.51883,
 pop: 400000
},
{
 city: 'Lawrence',
 state: 'Kansas',
 lat: 38.96086,
 lon: -95.26454,
 pop: 100000
},
{
 city: 'Winchester',
 state: 'Massachusetts',
 lat: 42.45165,
 lon: -71.14659,
 pop: 100000
},
{
 city: 'Lexington',
 state: 'Massachusetts',
 lat: 42.44553,
 lon: -71.23065,
 pop: 100000
},
{
 city: 'Alliance',
 state: 'Nebraska',
 lat: 42.1001132,
 lon: -102.87543,
 pop: 100000
},
{
 city: 'Casper',
 state: 'Wyoming',
 lat: 42.83611,
 lon: -106.3452,
 pop: 100000
},
{
 city: 'Bangor',
 state: 'Maine',
 lat: 44.832518,
 lon: -68.790409,
 pop: 100000
},
{
 city: 'Grand Junction',
 state: 'Colorado',
 lat: 39.086035,
 lon: -108.56695,
 pop: 100000
},
{
 city: 'Rapid City',
 state: 'South Dakota',
 lat: 44.0700794,
 lon: -103.2178285,
 pop: 100000
},
{
 city: 'Bismarck',
 state: 'North Dakota',
 lat: 46.811371,
 lon: -100.768739,
 pop: 100000
},
{
 city: 'New York',
 state: 'New York',
 lat: 40.7143528,
 lon: -74.0059731,
 pop: 8175133
},
{
 city: 'Los Angeles',
 state: 'California',
 lat: 34.0522342,
 lon: -118.2436,
 pop: 3792621
},
{
 city: 'Chicago',
 state: 'Illinois',
 lat: 41.8781136,
 lon: -87.6297981,
 pop: 2695598
},
{
 city: 'Houston',
 state: 'Texas',
 lat: 29.7601927,
 lon: -95.369389,
 pop: 2099451
},
{
 city: 'Philadelphia',
 state: 'Pennsylvania',
 lat: 39.952335,
 lon: -75.163789,
 pop: 1526006
},
{
 city: 'Phoenix',
 state: 'Arizona',
 lat: 33.4483771,
 lon: -112.0740372,
 pop: 1445632
},
{
 city: 'San Antonio',
 state: 'Texas',
 lat: 29.4241219,
 lon: -98.4936281,
 pop: 1327407
},
{
 city: 'San Diego',
 state: 'California',
 lat: 32.7153292,
 lon: -117.157255,
 pop: 1307402
},
{
 city: 'Dallas',
 state: 'Texas',
 lat: 32.802955,
 lon: -96.769923,
 pop: 1197816
},
{
 city: 'San Jose',
 state: 'California',
 lat: 37.3393857,
 lon: -121.8949554,
 pop: 945942
},
{
 city: 'Jacksonville',
 state: 'Florida',
 lat: 30.3321838,
 lon: -81.655650,
 pop: 821784
},
{
 city: 'Indianapolis',
 state: 'Indiana',
 lat: 39.7685155,
 lon: -86.1580735,
 pop: 820445
},
{
 city: 'San Francisco',
 state: 'California',
 lat: 37.7749295,
 lon: -122.4194155,
 pop: 805235
},
{
 city: 'Austin',
 state: 'Texas',
 lat: 30.267153,
 lon: -97.7430607,
 pop: 790390
},
{
 city: 'Columbus',
 state: 'Ohio',
 lat: 39.9611755,
 lon: -82.9987942,
 pop: 1787033.1
},
{
 city: 'Fort Worth',
 state: 'Texas',
 lat: 32.725409,
 lon: -97.3208495,
 pop: 741206
},
{
 city: 'Charlotte',
 state: 'North Carolina',
 lat: 35.2270869,
 lon: -80.8431266,
 pop: 731424
},
{
 city: 'Detroit',
 state: 'Michigan',
 lat: 42.331427,
 lon: -83.0457538,
 pop: 713777
},
{
 city: 'El Paso',
 state: 'Texas',
 lat: 31.7587198,
 lon: -106.4869314,
 pop: 649121
},
{
 city: 'Memphis',
 state: 'Tennessee',
 lat: 35.1495343,
 lon: -90.0489801,
 pop: 646889
},
{
 city: 'Baltimore',
 state: 'Maryland',
 lat: 39.2903848,
 lon: -76.6121893,
 pop: 620961
},
{
 city: 'Boston',
 state: 'Massachusetts',
 lat: 42.3584308,
 lon: -71.0597732,
 pop: 617594
},
{
 city: 'Seattle',
 state: 'Washington',
 lat: 47.6062095,
 lon: -122.3320708,
 pop: 1608660.1
},
{
 city: 'Washington',
 state: 'District of Columbia',
 lat: 38.8951118,
 lon: -77.0363658,
 pop: 601723
},
{
 city: 'Nashville',
 state: 'Tennessee',
 lat: 36.1658899,
 lon: -86.7844432,
 pop: 601222
},
{
 city: 'Denver',
 state: 'Colorado',
 lat: 39.7391536,
 lon: -104.9847034,
 pop: 1200000
},
{
 city: 'Louisville',
 state: 'Kentucky',
 lat: 38.2526647,
 lon: -85.75845571,
 pop: 597337
},
{
 city: 'Milwaukee',
 state: 'Wisconsin',
 lat: 43.0389025,
 lon: -87.90647363,
 pop: 594833
},
{
 city: 'Portland',
 state: 'Oregon',
 lat: 45.5234515,
 lon: -122.6762071,
 pop: 583776
},
{
 city: 'Las Vegas',
 state: 'Nevada',
 lat: 36.114646,
 lon: -115.17281601,
 pop: 583756
},
{
 city: 'Oklahoma City',
 state: 'Oklahoma',
 lat: 35.4675602,
 lon: -97.51642759,
 pop: 579999
},
{
 city: 'Albuquerque',
 state: 'New Mexico',
 lat: 35.0844909,
 lon: -106.6511367,
 pop: 545852
},
{
 city: 'Tucson',
 state: 'Arizona',
 lat: 32.2217429,
 lon: -110.92647897,
 pop: 520116
},
{
 city: 'Fresno',
 state: 'California',
 lat: 36.7477272,
 lon: -119.7723661,
 pop: 494665
},
{
 city: 'Sacramento',
 state: 'California',
 lat: 38.5815719,
 lon: -121.49439961,
 pop: 466488
},
{
 city: 'Long Beach',
 state: 'California',
 lat: 33.8041667,
 lon: -118.15805561,
 pop: 462257
},
{
 city: 'Kansas City',
 state: 'Missouri',
 lat: 39.0997265,
 lon: -94.57856671,
 pop: 459787
},
{
 city: 'Mesa',
 state: 'Arizona',
 lat: 33.4151843,
 lon: -111.8314724,
 pop: 439041
},
{
 city: 'Virginia Beach',
 state: 'Virginia',
 lat: 36.8529263,
 lon: -75.97798499,
 pop: 437994
},
{
 city: 'Atlanta',
 state: 'Georgia',
 lat: 33.7489954,
 lon: -84.3879824,
 pop: 420003
},
{
 city: 'Colorado Springs',
 state: 'Colorado',
 lat: 38.8338816,
 lon: -104.8213634,
 pop: 416427
},
{
 city: 'Omaha',
 state: 'Nebraska',
 lat: 41.2523634,
 lon: -95.99798827,
 pop: 408958
},
{
 city: 'Raleigh',
 state: 'North Carolina',
 lat: 35.772096,
 lon: -78.63861452,
 pop: 403892
},
{
 city: 'Miami',
 state: 'Florida',
 lat: 25.7889689,
 lon: -80.22643928,
 pop: 399457
},
{
 city: 'Cleveland',
 state: 'Ohio',
 lat: 41.4994954,
 lon: -81.6954088,
 pop: 396815
},
{
 city: 'Tulsa',
 state: 'Oklahoma',
 lat: 36.1539816,
 lon: -95.992775,
 pop: 391906
},
{
 city: 'Oakland',
 state: 'California',
 lat: 37.8043637,
 lon: -122.2711137,
 pop: 390724
},
{
 city: 'Minneapolis',
 state: 'Minnesota',
 lat: 44.983334,
 lon: -93.26666998,
 pop: 382578
},
{
 city: 'Wichita',
 state: 'Kansas',
 lat: 37.6922222,
 lon: -97.33722219,
 pop: 382368
},
{
 city: 'Arlington',
 state: 'Texas',
 lat: 32.735687,
 lon: -97.10806557,
 pop: 365438
},
{
 city: 'Bakersfield',
 state: 'California',
 lat: 35.3732921,
 lon: -119.01871249,
 pop: 347483
},
{
 city: 'New Orleans',
 state: 'Louisiana',
 lat: 29.95106579,
 lon: -90.0715323,
 pop: 343829
},
{
 city: 'Honolulu',
 state: 'Hawaii',
 lat: 21.3069444,
 lon: -157.85833333,
 pop: 337256
},
{
 city: 'Anaheim',
 state: 'California',
 lat: 33.8352932,
 lon: -117.91450359,
 pop: 336265
},
{
 city: 'Tampa',
 state: 'Florida',
 lat: 27.950575,
 lon: -82.45717762,
 pop: 335709
},
{
 city: 'Aurora',
 state: 'Colorado',
 lat: 39.7294319,
 lon: -104.83191953,
 pop: 325078
},
{
 city: 'Santa Ana',
 state: 'California',
 lat: 33.7455731,
 lon: -117.86783377,
 pop: 324528
},
{
 city: 'Saint Louis',
 state: 'Missouri',
 lat: 38.6270025,
 lon: -90.1994042,
 pop: 319294
},
{
 city: 'Pittsburgh',
 state: 'Pennsylvania',
 lat: 40.44062479,
 lon: -79.99588642,
 pop: 305704
},
{
 city: 'Corpus Christi',
 state: 'Texas',
 lat: 27.8005828,
 lon: -97.39638102,
 pop: 305215
},
{
 city: 'Riverside',
 state: 'California',
 lat: 33.9533487,
 lon: -117.3961564,
 pop: 303871
},
{
 city: 'Cincinnati',
 state: 'Ohio',
 lat: 39.1031182,
 lon: -84.51201963,
 pop: 296943
},
{
 city: 'Lexington',
 state: 'Kentucky',
 lat: 38.0405837,
 lon: -84.50371643,
 pop: 295803
},
{
 city: 'Anchorage',
 state: 'Alaska',
 lat: 61.2180556,
 lon: -149.90027783,
 pop: 291826
},
{
 city: 'Stockton',
 state: 'California',
 lat: 37.9577016,
 lon: -121.29077961,
 pop: 291707
},
{
 city: 'Toledo',
 state: 'Ohio',
 lat: 41.6639383,
 lon: -83.55521198,
 pop: 287208
},
{
 city: 'Saint Paul',
 state: 'Minnesota',
 lat: 44.95416669,
 lon: -93.1138889,
 pop: 285068
},
{
 city: 'Newark',
 state: 'New Jersey',
 lat: 40.735657,
 lon: -74.1723667,
 pop: 277140
},
{
 city: 'Greensboro',
 state: 'North Carolina',
 lat: 36.0726354,
 lon: -79.79197541,
 pop: 269666
},
{
 city: 'Buffalo',
 state: 'New York',
 lat: 42.88644679,
 lon: -78.8783689,
 pop: 261310
},
{
 city: 'Plano',
 state: 'Texas',
 lat: 33.0198431,
 lon: -96.69888558,
 pop: 259841
},
{
 city: 'Lincoln',
 state: 'Nebraska',
 lat: 40.806862,
 lon: -96.68167903,
 pop: 258379
},
{
 city: 'Henderson',
 state: 'Nevada',
 lat: 36.0395247,
 lon: -114.9817213,
 pop: 257729
},
{
 city: 'Fort Wayne',
 state: 'Indiana',
 lat: 41.079273,
 lon: -85.13935129,
 pop: 253691
},
{
 city: 'Jersey City',
 state: 'New Jersey',
 lat: 40.72815749,
 lon: -74.07764172,
 pop: 247597
},
{
 city: 'Saint Petersburg',
 state: 'Florida',
 lat: 27.7730556,
 lon: -82.63,
 pop: 244769
},
{
 city: 'Chula Vista',
 state: 'California',
 lat: 32.6400541,
 lon: -117.08419552,
 pop: 243916
},
{
 city: 'Norfolk',
 state: 'Virginia',
 lat: 36.8507689,
 lon: -76.2858726,
 pop: 242803
},
{
 city: 'Orlando',
 state: 'Florida',
 lat: 28.5383355,
 lon: -81.37923649,
 pop: 238300
},
{
 city: 'Chandler',
 state: 'Arizona',
 lat: 33.3061605,
 lon: -111.84125019,
 pop: 236123
},
{
 city: 'Laredo',
 state: 'Texas',
 lat: 27.506407,
 lon: -99.50754212,
 pop: 236091
},
{
 city: 'Madison',
 state: 'Wisconsin',
 lat: 43.0730517,
 lon: -89.40123019,
 pop: 233209
},
{
 city: 'Winston-Salem',
 state: 'North Carolina',
 lat: 36.09985959,
 lon: -80.244216,
 pop: 229617
},
{
 city: 'Lubbock',
 state: 'Texas',
 lat: 33.5778631,
 lon: -101.8551665,
 pop: 229573
},
{
 city: 'Baton Rouge',
 state: 'Louisiana',
 lat: 30.4582829,
 lon: -91.1403196,
 pop: 229493
},
{
 city: 'Durham',
 state: 'North Carolina',
 lat: 35.9940329,
 lon: -78.898619,
 pop: 228330
},
{
 city: 'Garland',
 state: 'Texas',
 lat: 32.912624,
 lon: -96.63888327,
 pop: 226876
},
{
 city: 'Glendale',
 state: 'Arizona',
 lat: 33.5386523,
 lon: -112.18598658,
 pop: 226721
},
{
 city: 'Reno',
 state: 'Nevada',
 lat: 39.5296329,
 lon: -119.8138027,
 pop: 225221
},
{
 city: 'Hialeah',
 state: 'Florida',
 lat: 25.8575963,
 lon: -80.27810567,
 pop: 224669
},
{
 city: 'Chesapeake [e]',
 state: 'Virginia',
 lat: 36.7682088,
 lon: -76.28749273,
 pop: 222209
},
{
 city: 'Scottsdale',
 state: 'Arizona',
 lat: 33.4941704,
 lon: -111.9260519,
 pop: 217385
},
{
 city: 'North Las Vegas',
 state: 'Nevada',
 lat: 36.1988592,
 lon: -115.11750131,
 pop: 216961
},
{
 city: 'Irving',
 state: 'Texas',
 lat: 32.8140177,
 lon: -96.9488945,
 pop: 216290
},
{
 city: 'Fremont',
 state: 'California',
 lat: 37.5482697,
 lon: -121.98857191,
 pop: 214089
},
{
 city: 'Irvine',
 state: 'California',
 lat: 33.6839473,
 lon: -117.79469418,
 pop: 212375
},
{
 city: 'Birmingham',
 state: 'Alabama',
 lat: 33.5206608,
 lon: -86.80248998,
 pop: 212237
},
{
 city: 'Rochester',
 state: 'New York',
 lat: 43.16103,
 lon: -77.6109219,
 pop: 210565
},
{
 city: 'San Bernardino',
 state: 'California',
 lat: 34.1083449,
 lon: -117.28976523,
 pop: 209924
},
{
 city: 'Spokane',
 state: 'Washington',
 lat: 47.6587802,
 lon: -117.4260466,
 pop: 208916
},
{
 city: 'Gilbert',
 state: 'Arizona',
 lat: 33.3528264,
 lon: -111.78902703,
 pop: 208453
},
{
 city: 'Arlington',
 state: 'Virginia',
 lat: 38.8799697,
 lon: -77.1067698,
 pop: 207627
},
{
 city: 'Montgomery',
 state: 'Alabama',
 lat: 32.3668052,
 lon: -86.29996891,
 pop: 205764
},
{
 city: 'Boise',
 state: 'Idaho',
 lat: 43.612631,
 lon: -116.21107599,
 pop: 205671
},
{
 city: 'Richmond',
 state: 'Virginia',
 lat: 37.5407246,
 lon: -77.4360481,
 pop: 204214
},
{
 city: 'Des Moines',
 state: 'Iowa',
 lat: 41.6005448,
 lon: -93.60910637,
 pop: 203433
},
{
 city: 'Modesto',
 state: 'California',
 lat: 37.63909719,
 lon: -120.99687817,
 pop: 201165
},
{
 city: 'Fayetteville',
 state: 'North Carolina',
 lat: 35.0526641,
 lon: -78.87835849,
 pop: 200654
},
{
 city: 'Shreveport',
 state: 'Louisiana',
 lat: 32.5251516,
 lon: -93.75017888,
 pop: 199311
},
{
 city: 'Akron',
 state: 'Ohio',
 lat: 41.0814447,
 lon: -81.5190053,
 pop: 199110
},
{
 city: 'Tacoma',
 state: 'Washington',
 lat: 47.2528768,
 lon: -122.44429059,
 pop: 198397
},
{
 city: 'Aurora',
 state: 'Illinois',
 lat: 41.7605849,
 lon: -88.32007154,
 pop: 197899
},
{
 city: 'Oxnard',
 state: 'California',
 lat: 34.1975048,
 lon: -119.17705163,
 pop: 197899
},
{
 city: 'Fontana',
 state: 'California',
 lat: 34.0922335,
 lon: -117.435048,
 pop: 196069
},
{
 city: 'Yonkers',
 state: 'New York',
 lat: 40.9312099,
 lon: -73.89874689,
 pop: 195976
},
{
 city: 'Augusta',
 state: 'Georgia',
 lat: 33.474246,
 lon: -82.00967003,
 pop: 195844
},
{
 city: 'Mobile',
 state: 'Alabama',
 lat: 30.6943566,
 lon: -88.0430541,
 pop: 195111
},
{
 city: 'Little Rock',
 state: 'Arkansas',
 lat: 34.7464809,
 lon: -92.28959477,
 pop: 193524
},
{
 city: 'Moreno Valley',
 state: 'California',
 lat: 33.9424658,
 lon: -117.22967168,
 pop: 193365
},
{
 city: 'Glendale',
 state: 'California',
 lat: 34.1425078,
 lon: -118.25507503,
 pop: 191719
},
{
 city: 'Amarillo',
 state: 'Texas',
 lat: 35.2219971,
 lon: -101.83129688,
 pop: 190695
},
{
 city: 'Huntington Beach',
 state: 'California',
 lat: 33.660297,
 lon: -117.99922652,
 pop: 189992
},
{
 city: 'Columbus',
 state: 'Georgia',
 lat: 32.4609764,
 lon: -84.98770937,
 pop: 189885
},
{
 city: 'Grand Rapids',
 state: 'Michigan',
 lat: 42.9633599,
 lon: -85.66808633,
 pop: 188040
},
{
 city: 'Salt Lake City',
 state: 'Utah',
 lat: 40.7607793,
 lon: -111.89104739,
 pop: 186440
},
{
 city: 'Tallahassee',
 state: 'Florida',
 lat: 30.4382559,
 lon: -84.28073288,
 pop: 181376
},
{
 city: 'Worcester',
 state: 'Massachusetts',
 lat: 42.2625932,
 lon: -71.8022934,
 pop: 181045
},
{
 city: 'Newport News',
 state: 'Virginia',
 lat: 37.0870821,
 lon: -76.47301217,
 pop: 180719
},
{
 city: 'Huntsville',
 state: 'Alabama',
 lat: 34.7303688,
 lon: -86.58610367,
 pop: 180105
},
{
 city: 'Knoxville',
 state: 'Tennessee',
 lat: 35.9606384,
 lon: -83.92073921,
 pop: 178874
},
{
 city: 'Providence',
 state: 'Rhode Island',
 lat: 41.8239891,
 lon: -71.41283429,
 pop: 178042
},
{
 city: 'Santa Clarita',
 state: 'California',
 lat: 34.3916641,
 lon: -118.54258603,
 pop: 176320
},
{
 city: 'Grand Prairie',
 state: 'Texas',
 lat: 32.7459645,
 lon: -96.99778459,
 pop: 175396
},
{
 city: 'Brownsville',
 state: 'Texas',
 lat: 25.9017472,
 lon: -97.4974838,
 pop: 175023
},
{
 city: 'Jackson',
 state: 'Mississippi',
 lat: 32.2987573,
 lon: -90.18481028,
 pop: 173514
},
{
 city: 'Overland Park',
 state: 'Kansas',
 lat: 38.9822282,
 lon: -94.6707917,
 pop: 173372
},
{
 city: 'Garden Grove',
 state: 'California',
 lat: 33.7739053,
 lon: -117.94144773,
 pop: 170883
},
{
 city: 'Santa Rosa',
 state: 'California',
 lat: 38.4404674,
 lon: -122.71443137,
 pop: 167815
},
{
 city: 'Chattanooga',
 state: 'Tennessee',
 lat: 35.0456297,
 lon: -85.30968008,
 pop: 167674
},
{
 city: 'Oceanside',
 state: 'California',
 lat: 33.1958696,
 lon: -117.37948343,
 pop: 167086
},
{
 city: 'Fort Lauderdale',
 state: 'Florida',
 lat: 26.1223084,
 lon: -80.1433786,
 pop: 165521
},
{
 city: 'Rancho Cucamonga',
 state: 'California',
 lat: 34.10639889,
 lon: -117.5931084,
 pop: 165269
},
{
 city: 'Port Saint Lucie',
 state: 'Florida',
 lat: 27.2758333,
 lon: -80.35500002,
 pop: 164603
},
{
 city: 'Ontario',
 state: 'California',
 lat: 34.0633443,
 lon: -117.65088763,
 pop: 163924
},
{
 city: 'Vancouver',
 state: 'Washington',
 lat: 45.6387281,
 lon: -122.66148609,
 pop: 161791
},
{
 city: 'Tempe',
 state: 'Arizona',
 lat: 33.4255104,
 lon: -111.94000542,
 pop: 161719
},
{
 city: 'Springfield',
 state: 'Missouri',
 lat: 37.2089572,
 lon: -93.29229889,
 pop: 159498
},
{
 city: 'Lancaster',
 state: 'California',
 lat: 34.6867846,
 lon: -118.15416317,
 pop: 156633
},
{
 city: 'Eugene',
 state: 'Oregon',
 lat: 44.0520691,
 lon: -123.08675361,
 pop: 156185
},
{
 city: 'Pembroke Pines',
 state: 'Florida',
 lat: 26.0122378,
 lon: -80.31522331,
 pop: 154750
},
{
 city: 'Salem',
 state: 'Oregon',
 lat: 44.9428975,
 lon: -123.03509632,
 pop: 154637
},
{
 city: 'Cape Coral',
 state: 'Florida',
 lat: 26.5628537,
 lon: -81.9495331,
 pop: 154305
},
{
 city: 'Peoria',
 state: 'Arizona',
 lat: 33.5805955,
 lon: -112.23737791,
 pop: 154065
},
{
 city: 'Sioux Falls',
 state: 'South Dakota',
 lat: 43.5499749,
 lon: -96.70032702,
 pop: 153888
},
{
 city: 'Springfield',
 state: 'Massachusetts',
 lat: 42.1014831,
 lon: -72.589811,
 pop: 153060
},
{
 city: 'Elk Grove',
 state: 'California',
 lat: 38.4087993,
 lon: -121.37161777,
 pop: 153015
},
{
 city: 'Rockford',
 state: 'Illinois',
 lat: 42.2711311,
 lon: -89.0939952,
 pop: 152871
},
{
 city: 'Palmdale',
 state: 'California',
 lat: 34.5794343,
 lon: -118.11646127,
 pop: 152750
},
{
 city: 'Corona',
 state: 'California',
 lat: 33.8752935,
 lon: -117.56643838,
 pop: 152374
},
{
 city: 'Salinas',
 state: 'California',
 lat: 36.6777372,
 lon: -121.65550127,
 pop: 150441
},
{
 city: 'Pomona',
 state: 'California',
 lat: 34.0552267,
 lon: -117.75230479,
 pop: 149058
},
{
 city: 'Pasadena',
 state: 'Texas',
 lat: 29.6910625,
 lon: -95.2091006,
 pop: 149043
},
{
 city: 'Joliet',
 state: 'Illinois',
 lat: 41.525031,
 lon: -88.08172507,
 pop: 147433
},
{
 city: 'Paterson',
 state: 'New Jersey',
 lat: 40.9167654,
 lon: -74.17181099,
 pop: 146199
},
{
 city: 'Kansas City',
 state: 'Kansas',
 lat: 39.114053,
 lon: -94.6274636,
 pop: 145786
},
{
 city: 'Torrance',
 state: 'California',
 lat: 33.8358492,
 lon: -118.34062879,
 pop: 145438
},
{
 city: 'Syracuse',
 state: 'New York',
 lat: 43.0481221,
 lon: -76.14742438,
 pop: 145170
},
{
 city: 'Bridgeport',
 state: 'Connecticut',
 lat: 41.1865478,
 lon: -73.19517669,
 pop: 144229
},
{
 city: 'Hayward',
 state: 'California',
 lat: 37.6688205,
 lon: -122.0807964,
 pop: 144186
},
{
 city: 'Fort Collins',
 state: 'Colorado',
 lat: 40.5852602,
 lon: -105.08442302,
 pop: 143986
},
{
 city: 'Escondido',
 state: 'California',
 lat: 33.1192068,
 lon: -117.08642097,
 pop: 143911
},
{
 city: 'Lakewood',
 state: 'Colorado',
 lat: 39.7047095,
 lon: -105.08137342,
 pop: 142980
},
{
 city: 'Naperville',
 state: 'Illinois',
 lat: 41.7858629,
 lon: -88.14728931,
 pop: 141853
},
{
 city: 'Dayton',
 state: 'Ohio',
 lat: 39.7589478,
 lon: -84.19160691,
 pop: 141527
},
{
 city: 'Hollywood',
 state: 'Florida',
 lat: 26.0112014,
 lon: -80.14949008,
 pop: 140768
},
{
 city: 'Sunnyvale',
 state: 'California',
 lat: 37.36883,
 lon: -122.0363496,
 pop: 140081
},
{
 city: 'Alexandria',
 state: 'Virginia',
 lat: 38.8048355,
 lon: -77.04692137,
 pop: 139966
},
{
 city: 'Mesquite',
 state: 'Texas',
 lat: 32.76679551,
 lon: -96.5991593,
 pop: 139824
},
{
 city: 'Hampton',
 state: 'Virginia',
 lat: 37.0298687,
 lon: -76.34522179,
 pop: 137436
},
{
 city: 'Pasadena',
 state: 'California',
 lat: 34.1477849,
 lon: -118.14451551,
 pop: 137122
},
{
 city: 'Orange',
 state: 'California',
 lat: 33.7877944,
 lon: -117.85311189,
 pop: 136416
},
{
 city: 'Savannah',
 state: 'Georgia',
 lat: 32.0835407,
 lon: -81.09983418,
 pop: 136286
},
{
 city: 'Cary',
 state: 'North Carolina',
 lat: 35.79154,
 lon: -78.78111693,
 pop: 135234
},
{
 city: 'Fullerton',
 state: 'California',
 lat: 33.8702923,
 lon: -117.92533801,
 pop: 135161
},
{
 city: 'Warren',
 state: 'Michigan',
 lat: 42.49299999,
 lon: -83.02819698,
 pop: 134056
},
{
 city: 'Clarksville',
 state: 'Tennessee',
 lat: 36.5297706,
 lon: -87.35945279,
 pop: 132929
},
{
 city: 'McKinney',
 state: 'Texas',
 lat: 33.1972465,
 lon: -96.63978221,
 pop: 131117
},
{
 city: 'McAllen',
 state: 'Texas',
 lat: 26.2034071,
 lon: -98.23001236,
 pop: 129877
},
{
 city: 'New Haven',
 state: 'Connecticut',
 lat: 41.3081527,
 lon: -72.92815769,
 pop: 129779
},
{
 city: 'Sterling Heights',
 state: 'Michigan',
 lat: 42.5803122,
 lon: -83.03020328,
 pop: 129699
},
{
 city: 'West Valley City',
 state: 'Utah',
 lat: 40.6916132,
 lon: -112.00105009,
 pop: 129480
},
{
 city: 'Columbia',
 state: 'South Carolina',
 lat: 34.0007104,
 lon: -81.03481442,
 pop: 129272
},
{
 city: 'Killeen',
 state: 'Texas',
 lat: 31.1171194,
 lon: -97.72779589,
 pop: 127921
},
{
 city: 'Topeka',
 state: 'Kansas',
 lat: 39.0558235,
 lon: -95.68901847,
 pop: 127473
},
{
 city: 'Thousand Oaks',
 state: 'California',
 lat: 34.1705609,
 lon: -118.83759371,
 pop: 126683
},
{
 city: 'Cedar Rapids',
 state: 'Iowa',
 lat: 41.9778795,
 lon: -91.66562323,
 pop: 126326
},
{
 city: 'Olathe',
 state: 'Kansas',
 lat: 38.8813958,
 lon: -94.81912848,
 pop: 125872
},
{
 city: 'Elizabeth',
 state: 'New Jersey',
 lat: 40.6639916,
 lon: -74.2107006,
 pop: 124969
},
{
 city: 'Waco',
 state: 'Texas',
 lat: 31.549333,
 lon: -97.14666953,
 pop: 124805
},
{
 city: 'Hartford',
 state: 'Connecticut',
 lat: 41.76371109,
 lon: -72.68509318,
 pop: 124775
},
{
 city: 'Visalia',
 state: 'California',
 lat: 36.3302284,
 lon: -119.2920585,
 pop: 124442
},
{
 city: 'Gainesville',
 state: 'Florida',
 lat: 29.6516344,
 lon: -82.32482616,
 pop: 124354
},
{
 city: 'Simi Valley',
 state: 'California',
 lat: 34.2694474,
 lon: -118.78148198,
 pop: 124237
},
{
 city: 'Stamford',
 state: 'Connecticut',
 lat: 41.0534302,
 lon: -73.5387341,
 pop: 122643
},
{
 city: 'Bellevue',
 state: 'Washington',
 lat: 47.610377,
 lon: -122.2006786,
 pop: 122363
},
{
 city: 'Concord',
 state: 'California',
 lat: 37.9779776,
 lon: -122.0310733,
 pop: 122067
},
{
 city: 'Miramar',
 state: 'Florida',
 lat: 25.9756704,
 lon: -80.2867501,
 pop: 122041
},
{
 city: 'Coral Springs',
 state: 'Florida',
 lat: 26.271192,
 lon: -80.27060442,
 pop: 121096
},
{
 city: 'Lafayette',
 state: 'Louisiana',
 lat: 30.2240897,
 lon: -92.01984273,
 pop: 120623
},
{
 city: 'Charleston',
 state: 'South Carolina',
 lat: 32.7765656,
 lon: -79.93092158,
 pop: 120083
},
{
 city: 'Carrollton',
 state: 'Texas',
 lat: 32.9756415,
 lon: -96.88996359,
 pop: 119097
},
{
 city: 'Roseville',
 state: 'California',
 lat: 38.7521235,
 lon: -121.28800593,
 pop: 118788
},
{
 city: 'Thornton',
 state: 'Colorado',
 lat: 39.8680412,
 lon: -104.97192431,
 pop: 118772
},
{
 city: 'Beaumont',
 state: 'Texas',
 lat: 30.080174,
 lon: -94.12655618,
 pop: 118296
},
{
 city: 'Allentown',
 state: 'Pennsylvania',
 lat: 40.6084305,
 lon: -75.49018331,
 pop: 118032
},
{
 city: 'Surprise',
 state: 'Arizona',
 lat: 33.639099,
 lon: -112.39575762,
 pop: 117517
},
{
 city: 'Evansville',
 state: 'Indiana',
 lat: 37.9715592,
 lon: -87.57108978,
 pop: 117429
},
{
 city: 'Abilene',
 state: 'Texas',
 lat: 32.4487364,
 lon: -99.73314392,
 pop: 117063
},
{
 city: 'Frisco',
 state: 'Texas',
 lat: 33.1506744,
 lon: -96.82361159,
 pop: 116989
},
{
 city: 'Independence',
 state: 'Missouri',
 lat: 39.0911161,
 lon: -94.4155068,
 pop: 116830
},
{
 city: 'Santa Clara',
 state: 'California',
 lat: 37.3541079,
 lon: -121.95523558,
 pop: 116468
},
{
 city: 'Springfield',
 state: 'Illinois',
 lat: 39.78172131,
 lon: -89.65014812,
 pop: 116250
},
{
 city: 'Vallejo',
 state: 'California',
 lat: 38.1040864,
 lon: -122.2566367,
 pop: 115942
},
{
 city: 'Victorville',
 state: 'California',
 lat: 34.5361067,
 lon: -117.2911565,
 pop: 115903
},
{
 city: 'Athens',
 state: 'Georgia',
 lat: 33.955802,
 lon: -83.38236561,
 pop: 115452
},
{
 city: 'Peoria',
 state: 'Illinois',
 lat: 40.6936488,
 lon: -89.58898641,
 pop: 115007
},
{
 city: 'Lansing',
 state: 'Michigan',
 lat: 42.732535,
 lon: -84.55553471,
 pop: 114297
},
{
 city: 'Ann Arbor',
 state: 'Michigan',
 lat: 42.2808256,
 lon: -83.74303782,
 pop: 113934
},
{
 city: 'El Monte',
 state: 'California',
 lat: 34.0686206,
 lon: -118.02756667,
 pop: 113475
},
{
 city: 'Denton',
 state: 'Texas',
 lat: 33.2148412,
 lon: -97.13306829,
 pop: 113383
},
{
 city: 'Berkeley',
 state: 'California',
 lat: 37.8715926,
 lon: -122.27274698,
 pop: 112580
},
{
 city: 'Provo',
 state: 'Utah',
 lat: 40.2338438,
 lon: -111.65853372,
 pop: 112488
},
{
 city: 'Downey',
 state: 'California',
 lat: 33.94001431,
 lon: -118.1325688,
 pop: 111772
},
{
 city: 'Midland',
 state: 'Texas',
 lat: 31.9973456,
 lon: -102.07791459,
 pop: 111147
},
{
 city: 'Norman',
 state: 'Oklahoma',
 lat: 35.2225668,
 lon: -97.4394777,
 pop: 110925
},
{
 city: 'Waterbury',
 state: 'Connecticut',
 lat: 41.5581525,
 lon: -73.05149648,
 pop: 110366
},
{
 city: 'Costa Mesa',
 state: 'California',
 lat: 33.6411316,
 lon: -117.9186689,
 pop: 109960
},
{
 city: 'Inglewood',
 state: 'California',
 lat: 33.9616801,
 lon: -118.35313108,
 pop: 109673
},
{
 city: 'Manchester',
 state: 'New Hampshire',
 lat: 42.9956397,
 lon: -71.45478907,
 pop: 109565
},
{
 city: 'Murfreesboro',
 state: 'Tennessee',
 lat: 35.8456213,
 lon: -86.39026999,
 pop: 108755
},
{
 city: 'Columbia',
 state: 'Missouri',
 lat: 38.9517053,
 lon: -92.33407237,
 pop: 108500
},
{
 city: 'Elgin',
 state: 'Illinois',
 lat: 42.0372487,
 lon: -88.28118948,
 pop: 108188
},
{
 city: 'Clearwater',
 state: 'Florida',
 lat: 27.9658533,
 lon: -82.8001026,
 pop: 107685
},
{
 city: 'Miami Gardens',
 state: 'Florida',
 lat: 25.9420377,
 lon: -80.24560451,
 pop: 107167
},
{
 city: 'Rochester',
 state: 'Minnesota',
 lat: 44.0216306,
 lon: -92.46989919,
 pop: 106769
},
{
 city: 'Pueblo',
 state: 'Colorado',
 lat: 38.2544472,
 lon: -104.6091409,
 pop: 106595
},
{
 city: 'Lowell',
 state: 'Massachusetts',
 lat: 42.6334247,
 lon: -71.3161718,
 pop: 106519
},
{
 city: 'Wilmington',
 state: 'North Carolina',
 lat: 34.2257255,
 lon: -77.94471023,
 pop: 106476
},
{
 city: 'Arvada',
 state: 'Colorado',
 lat: 39.8027644,
 lon: -105.0874842,
 pop: 106433
},
{
 city: 'San Buenaventura (Ventura)',
 state: 'California',
 lat: 34.2746405,
 lon: -119.22900528,
 pop: 106433
},
{
 city: 'Westminster',
 state: 'Colorado',
 lat: 39.8366528,
 lon: -105.0372046,
 pop: 106114
},
{
 city: 'West Covina',
 state: 'California',
 lat: 34.0686208,
 lon: -117.9389526,
 pop: 106098
},
{
 city: 'Gresham',
 state: 'Oregon',
 lat: 45.5001357,
 lon: -122.43020132,
 pop: 105594
},
{
 city: 'Fargo',
 state: 'North Dakota',
 lat: 46.8771863,
 lon: -96.78980338,
 pop: 105549
},
{
 city: 'Norwalk',
 state: 'California',
 lat: 33.9022367,
 lon: -118.08173299,
 pop: 105549
},
{
 city: 'Carlsbad',
 state: 'California',
 lat: 33.1580933,
 lon: -117.35059394,
 pop: 105328
},
{
 city: 'Fairfield',
 state: 'California',
 lat: 38.24935809,
 lon: -122.0399663,
 pop: 105321
},
{
 city: 'Cambridge',
 state: 'Massachusetts',
 lat: 42.3736158,
 lon: -71.1097335,
 pop: 105162
},
{
 city: 'Wichita Falls',
 state: 'Texas',
 lat: 33.9137085,
 lon: -98.4933873,
 pop: 104553
},
{
 city: 'Billings',
 state: 'Montana',
 lat: 45.7832856,
 lon: -108.5006904,
 pop: 104170
},
{
 city: 'Green Bay',
 state: 'Wisconsin',
 lat: 44.51915899,
 lon: -88.01982597,
 pop: 104057
},
{
 city: 'West Jordan',
 state: 'Utah',
 lat: 40.6096698,
 lon: -111.93910311,
 pop: 103712
},
{
 city: 'Richmond',
 state: 'California',
 lat: 37.9357576,
 lon: -122.34774859,
 pop: 103701
},
{
 city: 'Murrieta',
 state: 'California',
 lat: 33.5539143,
 lon: -117.21392321,
 pop: 103466
},
{
 city: 'Burbank',
 state: 'California',
 lat: 34.1808392,
 lon: -118.30896612,
 pop: 103340
},
{
 city: 'Palm Bay',
 state: 'Florida',
 lat: 28.0344621,
 lon: -80.58866462,
 pop: 103190
},
{
 city: 'Everett',
 state: 'Washington',
 lat: 47.9789848,
 lon: -122.2020794,
 pop: 103019
},
{
 city: 'Flint',
 state: 'Michigan',
 lat: 43.0125274,
 lon: -83.68745619,
 pop: 102434
},
{
 city: 'Antioch',
 state: 'California',
 lat: 38.0049214,
 lon: -121.805789,
 pop: 102372
},
{
 city: 'Erie',
 state: 'Pennsylvania',
 lat: 42.12922409,
 lon: -80.085059,
 pop: 101786
},

];
