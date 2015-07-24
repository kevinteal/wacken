// JavaScript Document

function set_up_band_db(){
	//alert("DB");
	
	
		//main stage = 0
		//second stage = 1
		//thrid stage = 2
		//fourth = 3
		//fifth = 4
		
		db.transaction(function (tx) {		
		
		//tx.executeSql('DROP TABLE bands');
		tx.executeSql('CREATE TABLE IF NOT EXISTS bands (id UNIQUE, band_name TEXT, stage TEXT, day INTEGER, start_time INTEGER, finish_time INTEGER, band_fav INTEGER, stage_rank INTEGER, day_name)');
		
		//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (1, "Nick Van De Wall", "Main Stage", 20150724, 1200, 1430, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (2, "Oliver Heldens", "Main Stage", 20150724, 1430, 1530, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (3, "Ummet Ozcan", "Main Stage", 20150724, 1530, 1630, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (4, "Dyro", "Main Stage", 20150724, 1630, 1730, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (5, "Romeo Blanco", "Main Stage", 20150724, 1730, 1830, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (6, "W&w", "Main Stage", 20150724, 1830, 1930, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (7, "Nicky Romero", "Main Stage", 20150724, 1930, 2030, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (8, "Alesso", "Main Stage", 20150724, 2030, 2130, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (9, "David Guetta", "Main Stage", 20150724, 2130, 2245, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (10, "Avicii", "Main Stage", 20150724, 2245, 0000, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (11, "Steve Aoki", "Main Stage", 20150724, 0000, 100, 0, 0, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (12, "Martin Solveig", "Main Stage", 20150725, 1200, 1430, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (13, "R3hab", "Main Stage", 20150725, 1430, 1530, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (14, "Otto Knows", "Main Stage", 20150725, 1530, 1630, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (15, "Deorro", "Main Stage", 20150725, 1630, 1730, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (16, "Blasterjaxx", "Main Stage", 20150725, 1730, 1830, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (17, "Dillon Francis", "Main Stage", 20150725, 1830, 1930, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (18, "Yves V", "Main Stage", 20150725, 1930, 2030, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (19, "Martin Garrix", "Main Stage", 20150725, 2030, 2130, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (20, "Armin Van Buuren", "Main Stage", 20150725, 2130, 2245, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (21, "Dimitri Vegas & Like Mike", "Main Stage", 20150725, 2245, 2345, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (22, "Axwell Ingrosso", "Main Stage", 20150725, 2345, 100, 0, 0, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (23, "Markus Schulz", "Main Stage", 20150726, 1200, 1450, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (24, "Arty", "Main Stage", 20150726, 1450, 1540, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (25, "Dannic", "Main Stage", 20150726, 1540, 1640, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (26, "Dvbbs", "Main Stage", 20150726, 1640, 1740, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (27, "Chuckie", "Main Stage", 20150726, 1740, 1825, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (28, "Nervo", "Main Stage", 20150726, 1825, 1910, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (29, "Steve Angello", "Main Stage", 20150726, 1910, 2030, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (30, "Afrojack", "Main Stage", 20150726, 2030, 2130, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (31, "Hardwell", "Main Stage", 20150726, 2130, 2230, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (32, "Tiesto", "Main Stage", 20150726, 2230, 2330, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (33, "3 Are Legend", "Main Stage", 20150726, 2330, 0000, 0, 0, "Sunday")');



//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (34, "Javi Row", "Carl Cox & Friends", 20150724, 1230, 1400, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (35, "Jon Rundell", "Carl Cox & Friends", 20150724, 1400, 1530, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (36, "John Digweed", "Carl Cox & Friends", 20150724, 1530, 1700, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (37, "Monika Kruse", "Carl Cox & Friends", 20150724, 1700, 1830, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (38, "Nicole Moudaber", "Carl Cox & Friends", 20150724, 1830, 2000, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (39, "Dubfire", "Carl Cox & Friends", 20150724, 2000, 2130, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (40, "Solomun", "Carl Cox & Friends", 20150724, 2130, 2300, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (41, "Carl Cox", "Carl Cox & Friends", 20150724, 2300, 0100, 0, 1, "Friday")');
//Saturday
//Sunday

//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (42, "Marnik", "Dim Mak", 20150724, 1300, 1345, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (43, "Qulinez", "Dim Mak", 20150724, 1345, 1415, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (44, "Uberjakd", "Dim Mak", 20150724, 1415, 1445, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (45, "Autoerotique", "Dim Mak", 20150724, 1445, 1530, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (46, "Ookay", "Dim Mak", 20150724, 1530, 1615, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (47, "Crookers", "Dim Mak", 20150724, 1615, 1715, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (48, "Borgore", "Dim Mak", 20150724, 1715, 1815, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (49, "Steve Aoki", "Dim Mak", 20150724, 1815, 1945, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (50, "Deorro", "Dim Mak", 20150724, 1945, 2045, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (51, "Keys N Krates", "Dim Mak", 20150724, 2045, 2130, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (52, "Chris Lorenzo", "Dim Mak", 20150724, 2130, 2215, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (53, "The Bloody Beetroots", "Dim Mak", 20150724, 2215, 2315, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (54, "Dirtyphonics", "Dim Mak", 20150724, 2315, 0015, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (55, "Coone", "Dim Mak", 20150724, 0015, 0100, 0, 2, "Friday")');
//Saturday
//Sunday




//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (70, "Cheap Charly Men", "Jamie Jones Paradise", 20150724, 1200, 1300, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (71, "Smos", "Jamie Jones Paradise", 20150724, 1300, 1400, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (72, "Robert James", "Jamie Jones Paradise", 20150724, 1400, 1530, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (73, "Waff", "Jamie Jones Paradise", 20150724, 1530, 1700, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (74, "Patrick Topping", "Jamie Jones Paradise", 20150724, 1700, 1830, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (75, "Richy Ahmed", "Jamie Jones Paradise", 20150724, 1830, 2000, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (76, "Cajmere", "Jamie Jones Paradise", 20150724, 2000, 2130, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (77, "The Martinez Brothers", "Jamie Jones Paradise", 20150724, 2130, 2300, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (78, "Jamie Jones", "Jamie Jones Paradise", 20150724, 2300, 0100, 0, 4, "Friday")');
//Saturday
//Sunday


//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (79, "Sven Van Hees B2b Flapjackers", "Derrick Carter presents Family & Friends", 20150724, 1230, 1500, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (80, "Riva Starr", "Derrick Carter presents Family & Friends", 20150724, 1500, 1700, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (81, "Riva Starr B2b Dj Pierre", "Derrick Carter presents Family & Friends", 20150724, 1700, 1900, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (82, "Derrick Carter", "Derrick Carter presents Family & Friends", 20150724, 1900, 2000, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (83, "Derrick Carter B2b Eats Everything", "Derrick Carter presents Family & Friends", 20150724, 2000, 2200, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (84, "Mark Farina B2b Seth Troxler", "Derrick Carter presents Family & Friends", 20150724, 2200, 0100, 0, 5, "Friday")');

//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (85, "Fred Baker", "TranceAddict", 20150724, 1230, 1400, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (86, "Menno De Jong", "TranceAddict", 20150724, 1400, 1500, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (87, "Airscape", "TranceAddict", 20150724, 1500, 1600, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (88, "Tenishia", "TranceAddict", 20150724, 1600, 1700, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (89, "Stadium4", "TranceAddict", 20150724, 1700, 1800, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (90, "Pure Nrg", "TranceAddict", 20150724, 1800, 1900, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (91, "Sean Tyas", "TranceAddict", 20150724, 1900, 2000, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (92, "John Ocallaghan", "TranceAddict", 20150724, 2000, 2100, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (93, "Orjan Nilsen", "TranceAddict", 20150724, 2100, 2200, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (94, "Andrew Rayel", "TranceAddict", 20150724, 2200, 2300, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (95, "Aly & Fila", "TranceAddict", 20150724, 2300, 0000, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (96, "Markus Schulz", "TranceAddict", 20150724, 0000, 0100, 0, 6, "Friday")');


//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (97, "Rafi Khan Ft Sheherazade", "Cafeina", 20150724, 1200, 1245, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (98, "Audioboulevard", "Cafeina", 20150724, 1245, 1330, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (99, "Phill Da Cunha Ft Alec", "Cafeina", 20150724, 1330, 1415, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (100, "Cemode Ft Seelen", "Cafeina", 20150724, 1415, 1515, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (101, "Dj Licious Ft Delafino", "Cafeina", 20150724, 1515, 1615, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (102, "2dirty", "Cafeina", 20150724, 1615, 1700, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (103, "An21", "Cafeina", 20150724, 1700, 1815, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (104, "Cazzette", "Cafeina", 20150724, 1815, 1930, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (105, "Dave Lambert Ft Mr Grammy", "Cafeina", 20150724, 1930, 2030, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (106, "Disco Dasco", "Cafeina", 20150724, 2030, 2130, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (107, "Roma", "Cafeina", 20150724, 2130, 2230, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (108, "Dj Philip Ft Joeri", "Cafeina", 20150724, 2230, 2330, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (109, "Andrea Oliva", "Cafeina", 20150724, 2330, 0100, 0, 7, "Friday")');

//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (110, "Michael Beltran", "BlueFlame", 20150724, 1200, 1245, 0, 8, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (111, "T.a.t.s", "BlueFlame", 20150724, 1245, 1330, 0, 8, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (112, "Lost Stories", "BlueFlame", 20150724, 1330, 1430, 0, 8, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (113, "Mvttn", "BlueFlame", 20150724, 1430, 1515, 0, 8, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (114, "Nexuz", "BlueFlame", 20150724, 1515, 1615, 0, 8, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (115, "Dimaro & Violinvasion", "BlueFlame", 20150724, 1615, 1715, 0, 8, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (116, "Double Pleasure", "BlueFlame", 20150724, 1715, 1815, 0, 8, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (117, "Redondo", "BlueFlame", 20150724, 1815, 1915, 0, 8, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (118, "Franky Rizardo", "BlueFlame", 20150724, 1915, 2015, 0, 8, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (119, "Makasi", "BlueFlame", 20150724, 2015, 2115, 0, 8, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (120, "Amine Edge & Dance", "BlueFlame", 20150724, 2115, 2215, 0, 8, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (121, "Neon", "BlueFlame", 20150724, 2215, 2315, 0, 8, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (122, "Megamen", "BlueFlame", 20150724, 2315, 0000, 0, 8, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (123, "The Oddword", "BlueFlame", 20150724, 0000, 0100, 0, 8, "Friday")');


//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (124, "Ward", "I love the 90s", 20150724, 1200, 1630, 0, 9, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (125, "2 Fabiola", "I love the 90s", 20150724, 1630, 1700, 0, 9, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (126, "Superfunk", "I love the 90s", 20150724, 1700, 1800, 0, 9, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (127, "Syndicate Of L.a.w.", "I love the 90s", 20150724, 1800, 1900, 0, 9, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (128, "Wout", "I love the 90s", 20150724, 1900, 2000, 0, 9, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (129, "Johan Gielen", "I love the 90s", 20150724, 2000, 2100, 0, 9, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (130, "Future Breeze", "I love the 90s", 20150724, 2100, 2200, 0, 9, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (131, "Ward", "I love the 90s", 20150724, 2200, 2300, 0, 9, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (132, "Atmoz", "I love the 90s", 20150724, 2300, 0000, 0, 9, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (133, "Human Resource", "I love the 90s", 20150724, 0000, 0100, 0, 9, "Friday")');


//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (134, "Atmo", "Qult", 20150724, 1200, 1300, 0, 10, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (135, "S1ngular", "Qult", 20150724, 1300, 1400, 0, 10, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (136, "Mightyfools", "Qult", 20150724, 1400, 1500, 0, 10, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (137, "Dirtcaps", "Qult", 20150724, 1500, 1600, 0, 10, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (138, "A S Y S", "Qult", 20150724, 1600, 1700, 0, 10, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (139, "Acti", "Qult", 20150724, 1700, 1800, 0, 10, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (140, "Alex Kidd", "Qult", 20150724, 1800, 1900, 0, 10, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (141, "Gecko", "Qult", 20150724, 1900, 2000, 0, 10, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (142, "Dr. Phunk", "Qult", 20150724, 2000, 2100, 0, 10, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (143, "Audiofreq", "Qult", 20150724, 2100, 2200, 0, 10, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (144, "Lny Tnz", "Qult", 20150724, 2200, 2300, 0, 10, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (145, "Phrantic", "Qult", 20150724, 2300, 0000, 0, 10, "Friday")');


//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (146, "Dj Luk & Mr Shake & Vox D & Dj Barto", "Winterclubbing", 20150724, 1300, 1500, 0, 11, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (147, "Jean De Gand", "Winterclubbing", 20150724, 1500, 1600, 0, 11, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (148, "Double U Vs Skinnie", "Winterclubbing", 20150724, 1600, 1700, 0, 11, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (149, "Dj Luk & Mr Shake & Vox D & Dj Barto", "Winterclubbing", 20150724, 1700, 1830, 0, 11, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (150, "Dimitri Wouters", "Winterclubbing", 20150724, 1830, 2000, 0, 11, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (151, "Deve & Matizz", "Winterclubbing", 20150724, 2000, 2130, 0, 11, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (152, "Funk D", "Winterclubbing", 20150724, 2130, 2215, 0, 11, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (153, "Dj Luk & Vox D & Dj Barto", "Winterclubbing", 20150724, 2215, 0100, 0, 11, "Friday")');


//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (154, "Souza Malouza", "Mazda Journey Island", 20150724, 1230, 1400, 0, 12, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (155, "Alvar & Millas", "Mazda Journey Island", 20150724, 1400, 1500, 0, 12, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (156, "Siege", "Mazda Journey Island", 20150724, 1500, 1600, 0, 12, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (157, "Abel Ramos", "Mazda Journey Island", 20150724, 1600, 1700, 0, 12, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (158, "Shaan", "Mazda Journey Island", 20150724, 1700, 1800, 0, 12, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (159, "Quentin Mosimann", "Mazda Journey Island", 20150724, 1800, 1900, 0, 12, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (160, "Mike Hawkins", "Mazda Journey Island", 20150724, 1900, 2000, 0, 12, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (161, "Stadiumx", "Mazda Journey Island", 20150724, 2000, 2100, 0, 12, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (162, "Albert Neve", "Mazda Journey Island", 20150724, 2100, 2200, 0, 12, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (163, "Blasterz", "Mazda Journey Island", 20150724, 2200, 2300, 0, 12, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (164, "Wessel S", "Mazda Journey Island", 20150724, 2300, 0000, 0, 12, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (165, "Davidov", "Mazda Journey Island", 20150725, 1230, 1400, 0, 12, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (166, "Dominico", "Mazda Journey Island", 20150725, 1400, 1500, 0, 12, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (167, "Reygel & Peri", "Mazda Journey Island", 20150725, 1500, 1600, 0, 12, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (168, "Henrik B", "Mazda Journey Island", 20150725, 1600, 1700, 0, 12, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (169, "Stereo Killah", "Mazda Journey Island", 20150725, 1700, 1800, 0, 12, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (170, "Danny Wade", "Mazda Journey Island", 20150725, 1800, 1900, 0, 12, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (171, "Pierce Fulton", "Mazda Journey Island", 20150725, 1900, 2000, 0, 12, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (172, "Made In June", "Mazda Journey Island", 20150725, 2000, 2100, 0, 12, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (173, "Sebjak", "Mazda Journey Island", 20150725, 2100, 2200, 0, 12, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (174, "Lush & Simon", "Mazda Journey Island", 20150725, 2200, 2300, 0, 12, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (175, "Thats Who", "Mazda Journey Island", 20150725, 2300, 0000, 0, 12, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (176, "Dave202", "Mazda Journey Island", 20150726, 1230, 1400, 0, 12, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (177, "Mathy", "Mazda Journey Island", 20150726, 1400, 1500, 0, 12, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (178, "Back To Basicz Soundsystem", "Mazda Journey Island", 20150726, 1500, 1600, 0, 12, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (179, "Kenneth G", "Mazda Journey Island", 20150726, 1600, 1700, 0, 12, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (180, "Didrick", "Mazda Journey Island", 20150726, 1700, 1800, 0, 12, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (181, "Albin Myers", "Mazda Journey Island", 20150726, 1800, 1900, 0, 12, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (182, "Jay Cosmic", "Mazda Journey Island", 20150726, 1900, 2000, 0, 12, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (183, "Tom Swoon", "Mazda Journey Island", 20150726, 2000, 2100, 0, 12, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (184, "Julia Carpenter", "Mazda Journey Island", 20150726, 2100, 2200, 0, 12, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (185, "Steve Romani & The Addiction", "Mazda Journey Island", 20150726, 2200, 2300, 0, 12, "Sunday")');


//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (186, "Wooden Sound", "Desperados", 20150724, 1300, 1400, 0, 13, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (187, "Fuc Le Duc", "Desperados", 20150724, 1400, 1500, 0, 13, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (188, "Bafana & Hush Hefner", "Desperados", 20150724, 1500, 1630, 0, 13, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (189, "Broiler", "Desperados", 20150724, 1630, 1800, 0, 13, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (190, "Feder", "Desperados", 20150724, 1800, 1930, 0, 13, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (191, "Leesa", "Desperados", 20150724, 1930, 2100, 0, 13, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (192, "Niels Feijen", "Desperados", 20150724, 2100, 2200, 0, 13, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (193, "Wayback", "Desperados", 20150725, 1300, 1400, 0, 13, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (194, "Sheridan", "Desperados", 20150725, 1400, 1500, 0, 13, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (195, "Mashpop", "Desperados", 20150725, 1500, 1600, 0, 13, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (196, "Beauhause", "Desperados", 20150725, 1600, 1700, 0, 13, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (197, "Michael Midnight", "Desperados", 20150725, 1700, 1800, 0, 13, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (198, "Felix Da Housecat", "Desperados", 20150725, 1800, 1930, 0, 13, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (199, "Raving George", "Desperados", 20150725, 1930, 2100, 0, 13, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (200, "Ugur Yurt", "Desperados", 20150725, 2100, 2200, 0, 13, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (201, "Mvmnt", "Desperados", 20150726, 1300, 1400, 0, 13, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (202, "Christian82", "Desperados", 20150726, 1400, 1500, 0, 13, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (203, "Robbert Humble", "Desperados", 20150726, 1500, 1600, 0, 13, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (204, "Gewelt", "Desperados", 20150726, 1600, 1700, 0, 13, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (205, "Goldfox", "Desperados", 20150726, 1700, 1800, 0, 13, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (206, "De Sluwe Vos", "Desperados", 20150726, 1800, 1930, 0, 13, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (207, "Dominik Eulberg", "Desperados", 20150726, 1930, 2100, 0, 13, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (208, "Moonlight Matters", "Desperados", 20150726, 2100, 2200, 0, 13, "Sunday")');

//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (209, "Radio Ultra Modern", "Radio Modern", 20150724, 1300, 0000, 0, 14, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (210, "Radio Ultra Modern", "Radio Modern", 20150725, 1300, 0000, 0, 14, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (211, "Radio Ultra Modern", "Radio Modern", 20150726, 1300, 0000, 0, 14, "Sunday")');

//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (212, "Xavier Shimtshack", "LEAF", 20150724, 1230, 1500, 0, 15, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (213, "Trashlagoon", "LEAF", 20150724, 1500, 1630, 0, 15, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (214, "Jose Maria Ramon", "LEAF", 20150724, 1630, 1730, 0, 15, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (215, "Parra For Cuva", "LEAF", 20150724, 1730, 1900, 0, 15, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (216, "Ade Kanon", "LEAF", 20150724, 1900, 2030, 0, 15, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (217, "Iris Menza", "LEAF", 20150724, 2030, 2200, 0, 15, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (218, "David Moreno", "LEAF", 20150724, 2200, 2330, 0, 15, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (219, "X Ian", "LEAF", 20150725, 1230, 1500, 0, 15, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (220, "Jose Maria Ramon", "LEAF", 20150725, 1500, 1630, 0, 15, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (221, "Trashlagoon", "LEAF", 20150725, 1630, 1730, 0, 15, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (222, "Parra For Cuva", "LEAF", 20150725, 1730, 1900, 0, 15, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (223, "Nathan Fix", "LEAF", 20150725, 1900, 2030, 0, 15, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (224, "Merdan Taplak", "LEAF", 20150725, 2030, 2200, 0, 15, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (225, "Prinz", "LEAF", 20150725, 2200, 2330, 0, 15, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (226, "Const", "LEAF", 20150726, 1300, 1500, 0, 15, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (227, "Ozan", "LEAF", 20150726, 1500, 1630, 0, 15, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (228, "Trashlagoon", "LEAF", 20150726, 1630, 1730, 0, 15, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (229, "Parra For Cuva", "LEAF", 20150726, 1730, 1830, 0, 15, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (230, "Luis Del Villar", "LEAF", 20150726, 1830, 2000, 0, 15, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (231, "Barry Fore", "LEAF", 20150726, 2000, 2130, 0, 15, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (232, "Yamo", "LEAF", 20150726, 2130, 2300, 0, 15, "Sunday")');

//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (233, "D.o.d", "Super You & Me", 20150725, 1230, 1400, 0, 16, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (234, "Chocolate Puma", "Super You & Me", 20150725, 1400, 1500, 0, 16, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (235, "Tom Staar Vs Kryder", "Super You & Me", 20150725, 1500, 1600, 0, 16, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (236, "Don Diablo", "Super You & Me", 20150725, 1600, 1700, 0, 16, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (237, "Vinai", "Super You & Me", 20150725, 1700, 1800, 0, 16, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (238, "The Chainsmokers", "Super You & Me", 20150725, 1800, 1900, 0, 16, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (239, "Sander Van Doorn", "Super You & Me", 20150725, 1900, 2000, 0, 16, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (240, "Laidback Luke", "Super You & Me", 20150725, 2000, 2100, 0, 16, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (241, "Martin Solveig", "Super You & Me", 20150725, 2100, 2200, 0, 16, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (242, "Superheroes", "Super You & Me", 20150725, 2200, 2300, 0, 16, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (243, "Krewella", "Super You & Me", 20150725, 2300, 0000, 0, 16, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (244, "Moti", "Super You & Me", 20150725, 0000, 0100, 0, 16, "Saturday")');


//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (245, "Jetfire", "Revealed", 20150725, 1230, 1315, 0, 17, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (246, "Tom & Jame", "Revealed", 20150725, 1315, 1400, 0, 17, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (247, "Manse", "Revealed", 20150725, 1400, 1500, 0, 17, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (248, "Joey Dale", "Revealed", 20150725, 1500, 1600, 0, 17, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (249, "Julian Calor", "Revealed", 20150725, 1600, 1700, 0, 17, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (250, "Kill The Buzz", "Revealed", 20150725, 1700, 1800, 0, 17, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (251, "Sick Individuals", "Revealed", 20150725, 1800, 1900, 0, 17, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (252, "Dannic", "Revealed", 20150725, 1900, 2000, 0, 17, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (253, "Hardwell", "Revealed", 20150725, 2000, 2100, 0, 17, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (254, "Dyro", "Revealed", 20150725, 2100, 2200, 0, 17, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (255, "Headhunterz", "Revealed", 20150725, 2200, 2300, 0, 17, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (256, "Jordy Dazz", "Revealed", 20150725, 2300, 0000, 0, 17, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (257, "Thomas Newson", "Revealed", 20150725, 0000, 0100, 0, 17, "Saturday")');

//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (258, "Fred Hush", "Cocoon Vinyl only", 20150725, 1200, 1400, 0, 18, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (259, "Seth Troxler", "Cocoon Vinyl only", 20150725, 1400, 1530, 0, 18, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (260, "Dana Ruh", "Cocoon Vinyl only", 20150725, 1530, 1700, 0, 18, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (261, "Markus Fix", "Cocoon Vinyl only", 20150725, 1700, 1830, 0, 18, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (262, "Josh Wink", "Cocoon Vinyl only", 20150725, 1830, 2000, 0, 18, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (263, "Maceo Plex", "Cocoon Vinyl only", 20150725, 2000, 2200, 0, 18, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (264, "Sven Vath", "Cocoon Vinyl only", 20150725, 2200, 0100, 0, 18, "Saturday")');

//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (265, "Lucky Charmes", "Ferry Corsten FULL ON", 20150725, 1230, 1345, 0, 19, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (266, "Jochen Miller", "Ferry Corsten FULL ON", 20150725, 1345, 1500, 0, 19, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (267, "Marco V & Thomas Newson", "Ferry Corsten FULL ON", 20150725, 1500, 1615, 0, 19, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (268, "Jacob Van Hage", "Ferry Corsten FULL ON", 20150725, 1615, 1730, 0, 19, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (269, "Cosmic Gate", "Ferry Corsten FULL ON", 20150725, 1730, 1845, 0, 19, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (270, "Marlo", "Ferry Corsten FULL ON", 20150725, 1845, 2000, 0, 19, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (271, "Mark Sherry", "Ferry Corsten FULL ON", 20150725, 2000, 2115, 0, 19, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (272, "Audien", "Ferry Corsten FULL ON", 20150725, 2115, 2230, 0, 19, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (273, "Ferry Corsten", "Ferry Corsten FULL ON", 20150725, 2230, 2345, 0, 19, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (274, "Bryan Kearney", "Ferry Corsten FULL ON", 20150725, 2345, 0100, 0, 19, "Saturday")');


//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (275, "Spacid", "Kozzmozz", 20150725, 1300, 1500, 0, 20, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (276, "Rodhad", "Kozzmozz", 20150725, 1500, 1630, 0, 20, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (277, "Marcel Fengler", "Kozzmozz", 20150725, 1630, 1800, 0, 20, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (278, "Kr!z", "Kozzmozz", 20150725, 1800, 1900, 0, 20, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (279, "Luke Slater", "Kozzmozz", 20150725, 1900, 2030, 0, 20, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (280, "Speedy J", "Kozzmozz", 20150725, 2030, 2200, 0, 20, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (281, "Gary Beck", "Kozzmozz", 20150725, 2200, 2330, 0, 20, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (282, "Johannes Heil Live", "Kozzmozz", 20150725, 2330, 0100, 0, 20, "Saturday")');


//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (283, "No Sht Like Deep", "Ketaloco", 20150725, 1200, 1400, 0, 21, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (284, "Karotte", "Ketaloco", 20150725, 1400, 1530, 0, 21, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (285, "Caspar", "Ketaloco", 20150725, 1530, 1700, 0, 21, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (286, "Edu Imbernon", "Ketaloco", 20150725, 1700, 1830, 0, 21, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (287, "Don Cabron", "Ketaloco", 20150725, 1830, 2000, 0, 21, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (288, "Andhim", "Ketaloco", 20150725, 2000, 2130, 0, 21, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (289, "Nico Morano", "Ketaloco", 20150725, 2130, 2300, 0, 21, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (290, "Marc Romboy Vs Stephan Bodzin", "Ketaloco", 20150725, 2300, 0100, 0, 21, "Saturday")');

//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (291, "Jensen", "We Play House Recordings", 20150725, 1200, 1400, 0, 22, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (292, "Prosumer", "We Play House Recordings", 20150725, 1400, 1600, 0, 22, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (293, "Deetron", "We Play House Recordings", 20150725, 1600, 1800, 0, 22, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (294, "Aril Brikha", "We Play House Recordings", 20150725, 1800, 1900, 0, 22, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (295, "Oliver Dollar", "We Play House Recordings", 20150725, 1900, 2030, 0, 22, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (296, "Fcl Ft. Lady Linn", "We Play House Recordings", 20150725, 2030, 2330, 0, 22, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (297, "Mousse T", "We Play House Recordings", 20150725, 2330, 0100, 0, 22, "Saturday")');


//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (298, "Carbon", "Star Warz", 20150725, 1300, 1400, 0, 23, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (299, "The Offenders", "Star Warz", 20150725, 1400, 1500, 0, 23, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (300, "M&t", "Star Warz", 20150725, 1500, 1600, 0, 23, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (301, "Station Earth B2b James Marvel", "Star Warz", 20150725, 1600, 1700, 0, 23, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (302, "New Deal", "Star Warz", 20150725, 1700, 1800, 0, 23, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (303, "Murdock", "Star Warz", 20150725, 1800, 1900, 0, 23, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (304, "Nymfo", "Star Warz", 20150725, 1900, 2000, 0, 23, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (305, "Koven", "Star Warz", 20150725, 2000, 2100, 0, 23, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (306, "The Prototypes", "Star Warz", 20150725, 2100, 2200, 0, 23, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (307, "Brookes Brothers", "Star Warz", 20150725, 2200, 2300, 0, 23, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (308, "Dj Marky", "Star Warz", 20150725, 2300, 0000, 0, 23, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (309, "Matrix & Futurebound Ft. Mc Rhymestar", "Star Warz", 20150725, 0000, 0100, 0, 23, "Saturday")');

//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (310, "Kutski", "Q dance", 20150725, 1200, 1300, 0, 24, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (311, "Pat B", "Q dance", 20150725, 1300, 1400, 0, 24, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (312, "Psyko Punkz", "Q dance", 20150725, 1400, 1500, 0, 24, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (313, "Frontliner", "Q dance", 20150725, 1500, 1600, 0, 24, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (314, "Atmozfears", "Q dance", 20150725, 1600, 1630, 0, 24, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (315, "Wildstylez", "Q dance", 20150725, 1630, 1730, 0, 24, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (316, "Coone", "Q dance", 20150725, 1730, 1900, 0, 24, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (317, "Noisecontrollers", "Q dance", 20150725, 1900, 2000, 0, 24, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (318, "Brennan Heart", "Q dance", 20150725, 2000, 2100, 0, 24, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (319, "B Front Ft. Hard Driver", "Q dance", 20150725, 2100, 2200, 0, 24, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (320, "Ran D", "Q dance", 20150725, 2200, 2300, 0, 24, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (321, "Evil Activities", "Q dance", 20150725, 2300, 0000, 0, 24, "Saturday")');


//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (322, "Manu Riga & Matt Holiday", "Bonzai", 20150725, 1230, 1330, 0, 25, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (323, "Relaunch", "Bonzai", 20150725, 1330, 1430, 0, 25, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (324, "Gai Barone", "Bonzai", 20150725, 1430, 1530, 0, 25, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (325, "Nico Parisi", "Bonzai", 20150725, 1530, 1630, 0, 25, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (326, "Dj Phi Phi", "Bonzai", 20150725, 1630, 1730, 0, 25, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (327, "Jan Vervloet", "Bonzai", 20150725, 1730, 1830, 0, 25, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (328, "Bountyhunter", "Bonzai", 20150725, 1830, 1930, 0, 25, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (329, "Furax", "Bonzai", 20150725, 1930, 2030, 0, 25, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (330, "Dj Ghost Ft. Mc Pyro", "Bonzai", 20150725, 2030, 2130, 0, 25, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (331, "Yves Deruyter", "Bonzai", 20150725, 2130, 2230, 0, 25, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (332, "Franky Kloeck", "Bonzai", 20150725, 2230, 2330, 0, 25, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (333, "Bonzai All Stars", "Bonzai", 20150725, 2330, 0100, 0, 25, "Saturday")');

//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (334, "Basement Sounds", "Woody Weekend", 20150725, 1200, 1330, 0, 26, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (335, "Coin Ft. Swa", "Woody Weekend", 20150725, 1330, 1400, 0, 26, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (336, "Thim", "Woody Weekend", 20150725, 1400, 1530, 0, 26, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (337, "Mathy", "Woody Weekend", 20150725, 1530, 1700, 0, 26, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (338, "Luca Barassii & Seelen", "Woody Weekend", 20150725, 1700, 1830, 0, 26, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (339, "Greg Lamore Vs Jay Lee Hudson", "Woody Weekend", 20150725, 1830, 2130, 0, 26, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (340, "Thierry Von Der Warth", "Woody Weekend", 20150725, 2130, 2230, 0, 26, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (341, "Laurent Wery", "Woody Weekend", 20150725, 2230, 0000, 0, 26, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (342, "Many Moore", "Woody Weekend", 20150725, 0000, 0100, 0, 26, "Saturday")');


//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (343, "Pierre", "Dave Clarke presents", 20150726, 1600, 1730, 0, 27, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (344, "Green Velvet", "Dave Clarke presents", 20150726, 1730, 1900, 0, 27, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (345, "Chris Liebing", "Dave Clarke presents", 20150726, 1900, 2100, 0, 27, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (346, "Paul Kalkbrenner", "Dave Clarke presents", 20150726, 2100, 2230, 0, 27, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (347, "Dave Clarke", "Dave Clarke presents", 20150726, 2230, 0000, 0, 27, "Sunday")');

//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (348, "Delafino", "Opera", 20150726, 1230, 1430, 0, 28, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (349, "The Symphony Of Unity", "Opera", 20150726, 1430, 1530, 0, 28, "Sunday")');

//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (350, "Boostedkids", "Smash The House", 20150726, 1200, 1300, 0, 29, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (351, "Mambo Brothers", "Smash The House", 20150726, 1300, 1400, 0, 29, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (352, "Fox Stevenson", "Smash The House", 20150726, 1400, 1500, 0, 29, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (353, "Lost Frequencies", "Smash The House", 20150726, 1500, 1600, 0, 29, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (354, "Danny Howard", "Smash The House", 20150726, 1600, 1700, 0, 29, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (355, "Regi B2b Dave Till", "Smash The House", 20150726, 1700, 1800, 0, 29, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (356, "Carnage", "Smash The House", 20150726, 1800, 1900, 0, 29, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (357, "Bassjackers", "Smash The House", 20150726, 1900, 2000, 0, 29, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (358, "Ummet Ozcan", "Smash The House", 20150726, 2000, 2100, 0, 29, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (359, "Benny Benassi", "Smash The House", 20150726, 2100, 2200, 0, 29, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (360, "Dimitri Vegas & Like Mike", "Smash The House", 20150726, 2200, 2300, 0, 29, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (361, "Wolfpack", "Smash The House", 20150726, 2300, 0000, 0, 29, "Sunday")');

//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (362, "Tom Leclercq", "Versuz", 20150726, 1200, 1330, 0, 30, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (363, "Peter Luts", "Versuz", 20150726, 1330, 1500, 0, 30, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (364, "Sem Thomasson", "Versuz", 20150726, 1500, 1600, 0, 30, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (365, "Manuel De La Mare", "Versuz", 20150726, 1600, 1700, 0, 30, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (366, "Kenn Colt", "Versuz", 20150726, 1700, 1800, 0, 30, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (367, "Dave Lambert", "Versuz", 20150726, 1800, 1900, 0, 30, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (368, "Funkerman", "Versuz", 20150726, 1900, 2000, 0, 30, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (369, "Sunnery James & Ryan Marciano", "Versuz", 20150726, 2000, 2100, 0, 30, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (370, "Bingo Players", "Versuz", 20150726, 2100, 2200, 0, 30, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (371, "Fedde Le Grand", "Versuz", 20150726, 2200, 2300, 0, 30, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (372, "Bob Sinclar", "Versuz", 20150726, 2300, 0000, 0, 30, "Sunday")');

//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (373, "Bollen & Fichtner", "Richie Hawtin pr. MINUS", 20150726, 1200, 1400, 0, 31, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (374, "Fabio Florido", "Richie Hawtin pr. MINUS", 20150726, 1400, 1530, 0, 31, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (375, "Justin James", "Richie Hawtin pr. MINUS", 20150726, 1530, 1700, 0, 31, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (376, "Julian Jeweil", "Richie Hawtin pr. MINUS", 20150726, 1700, 1815, 0, 31, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (377, "Marc Houle", "Richie Hawtin pr. MINUS", 20150726, 1815, 1930, 0, 31, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (378, "Matador", "Richie Hawtin pr. MINUS", 20150726, 1930, 2045, 0, 31, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (379, "Gaiser", "Richie Hawtin pr. MINUS", 20150726, 2045, 2200, 0, 31, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (380, "Richie Hawtin", "Richie Hawtin pr. MINUS", 20150726, 2200, 0000, 0, 31, "Sunday")');

//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (381, "Dante Klein", "Bakermat & Friends", 20150726, 1230, 1330, 0, 32, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (382, "The Avener", "Bakermat & Friends", 20150726, 1330, 1500, 0, 32, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (383, "Klingande", "Bakermat & Friends", 20150726, 1500, 1630, 0, 32, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (384, "Thomas Jack", "Bakermat & Friends", 20150726, 1630, 1800, 0, 32, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (385, "Alle Farben", "Bakermat & Friends", 20150726, 1800, 1930, 0, 32, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (386, "Robin Schulz", "Bakermat & Friends", 20150726, 1930, 2100, 0, 32, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (387, "Bakermat", "Bakermat & Friends", 20150726, 2100, 2230, 0, 32, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (388, "Oliver Heldens", "Bakermat & Friends", 20150726, 2230, 0000, 0, 32, "Sunday")');

//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (389, "Kong", "Forma.T invites MK", 20150726, 1230, 1330, 0, 33, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (390, "Dc Salas", "Forma.T invites MK", 20150726, 1330, 1430, 0, 33, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (391, "Arches", "Forma.T invites MK", 20150726, 1430, 1530, 0, 33, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (392, "Surfing Leons", "Forma.T invites MK", 20150726, 1530, 1630, 0, 33, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (393, "Huxley", "Forma.T invites MK", 20150726, 1630, 1800, 0, 33, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (394, "Pete Tong", "Forma.T invites MK", 20150726, 1800, 1930, 0, 33, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (395, "Mk", "Forma.T invites MK", 20150726, 1930, 2100, 0, 33, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (396, "Route 94", "Forma.T invites MK", 20150726, 2100, 2230, 0, 33, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (397, "Bob Moses", "Forma.T invites MK", 20150726, 2230, 0000, 0, 33, "Sunday")');

//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (398, "Davoodi", "Barong Family", 20150726, 1230, 1315, 0, 34, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (399, "Mike Cervello", "Barong Family", 20150726, 1315, 1400, 0, 34, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (400, "San Holo", "Barong Family", 20150726, 1400, 1445, 0, 34, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (401, "Vicetone", "Barong Family", 20150726, 1445, 1530, 0, 34, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (402, "Jebroer Ft. Stepherd & Skinto", "Barong Family", 20150726, 1530, 1600, 0, 34, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (403, "Cesqeaux", "Barong Family", 20150726, 1600, 1700, 0, 34, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (404, "Moksi", "Barong Family", 20150726, 1700, 1800, 0, 34, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (405, "Dillon Francis", "Barong Family", 20150726, 1800, 1900, 0, 34, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (406, "Wiwek", "Barong Family", 20150726, 1900, 2000, 0, 34, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (407, "Yellow Claw", "Barong Family", 20150726, 2000, 2100, 0, 34, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (408, "Gta", "Barong Family", 20150726, 2100, 2200, 0, 34, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (409, "Headhunterz", "Barong Family", 20150726, 2200, 2300, 0, 34, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (410, "Rotterdam Terror Corps", "Barong Family", 20150726, 2300, 0000, 0, 34, "Sunday")');

//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (411, "Dj Domi Re", "B2B", 20150726, 1200, 1400, 0, 35, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (412, "Jackie White", "B2B", 20150726, 1400, 1530, 0, 35, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (413, "Day.din", "B2B", 20150726, 1530, 1630, 0, 35, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (414, "Bizarre Tribe", "B2B", 20150726, 1630, 1800, 0, 35, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (415, "Electro Sun", "B2B", 20150726, 1800, 1930, 0, 35, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (416, "Firaga", "B2B", 20150726, 1930, 2100, 0, 35, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (417, "Astral Projection", "B2B", 20150726, 2100, 2230, 0, 35, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (418, "Astrix", "B2B", 20150726, 2230, 0000, 0, 35, "Sunday")');

//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (419, "Rafi Khan", "Coincidence", 20150726, 1200, 1330, 0, 36, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (420, "Nukov & Yelmet", "Coincidence", 20150726, 1330, 1500, 0, 36, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (421, "Tom Dazing", "Coincidence", 20150726, 1500, 1600, 0, 36, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (422, "A. Brehme", "Coincidence", 20150726, 1600, 1730, 0, 36, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (423, "Steve Cop", "Coincidence", 20150726, 1730, 1900, 0, 36, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (424, "Svemirski", "Coincidence", 20150726, 1900, 2000, 0, 36, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (425, "Mirella Kroes", "Coincidence", 20150726, 2000, 2130, 0, 36, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (426, "Go!diva", "Coincidence", 20150726, 2130, 2300, 0, 36, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (427, "Manone", "Coincidence", 20150726, 2300, 0000, 0, 36, "Sunday")');

//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (428, "Sven Van Hees", "Age Of Love", 20150726, 1200, 1300, 0, 37, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (429, "The Mackenzie", "Age Of Love", 20150726, 1300, 1400, 0, 37, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (430, "Systematic Parts", "Age Of Love", 20150726, 1400, 1500, 0, 37, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (431, "Marko De La Rocca", "Age Of Love", 20150726, 1500, 1600, 0, 37, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (432, "Youri Parker", "Age Of Love", 20150726, 1600, 1700, 0, 37, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (433, "Quincy", "Age Of Love", 20150726, 1700, 1800, 0, 37, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (434, "Jam El Mar Aka Jam & Spoon", "Age Of Love", 20150726, 1800, 1900, 0, 37, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (435, "Zolex", "Age Of Love", 20150726, 1900, 2000, 0, 37, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (436, "Joe T Vannelli", "Age Of Love", 20150726, 2000, 2100, 0, 37, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (437, "Franky Jones", "Age Of Love", 20150726, 2100, 2200, 0, 37, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (438, "M.i.k.e. Push", "Age Of Love", 20150726, 2200, 2300, 0, 37, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (439, "Zzino", "Age Of Love", 20150726, 2300, 0000, 0, 37, "Sunday")');

//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (440, "Francois", "PussyLounge", 20150726, 1200, 1330, 0, 38, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (441, "Ronald V", "PussyLounge", 20150726, 1330, 1430, 0, 38, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (442, "Lowriderz", "PussyLounge", 20150726, 1430, 1530, 0, 38, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (443, "Mark With A K", "PussyLounge", 20150726, 1530, 1630, 0, 38, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (444, "Dr Rude", "PussyLounge", 20150726, 1630, 1730, 0, 38, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (445, "Ruthless", "PussyLounge", 20150726, 1730, 1830, 0, 38, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (446, "Luna", "PussyLounge", 20150726, 1830, 1930, 0, 38, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (447, "Darkraver", "PussyLounge", 20150726, 1930, 2030, 0, 38, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (448, "Paul Elstak", "PussyLounge", 20150726, 2030, 2130, 0, 38, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (449, "The Viper", "PussyLounge", 20150726, 2130, 2230, 0, 38, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (450, "Vince", "PussyLounge", 20150726, 2230, 0000, 0, 38, "Sunday")');

//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (451, "Mystique", "V Sessions", 20150724, 1230, 1330, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (452, "Brian Cross", "V Sessions", 20150724, 1330, 1430, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (453, "Promise Land", "V Sessions", 20150724, 1430, 1530, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (454, "Dzeko & Torres", "V Sessions", 20150724, 1530, 1630, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (455, "Dimitri Vangelis & Wyman", "V Sessions", 20150724, 1630, 1730, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (456, "Ftampa", "V Sessions", 20150724, 1730, 1830, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (457, "Firebeatz", "V Sessions", 20150724, 1830, 1930, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (458, "Sidney Samson", "V Sessions", 20150724, 1930, 2000, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (459, "Yves V Vs Sidney Samson", "V Sessions", 20150724, 2000, 2030, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (460, "Yves V", "V Sessions", 20150724, 2030, 2100, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (461, "R3hab", "V Sessions", 20150724, 2100, 2200, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (462, "Borgeous", "V Sessions", 20150724, 2200, 2300, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (463, "Quintino", "V Sessions", 20150724, 2300, 0000, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (464, "Chuckie", "V Sessions", 20150724, 0000, 0100, 0, 3, "Friday")');
		
		set_up_main_page();
	});
}













