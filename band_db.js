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
		
		//Wednesday
//Thursday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (1, "Skyline", "Black Stage", 20150730, 1500, 1545, 0, 0, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (2, "In Extremo", "Black Stage", 20150730, 1745, 1905, 0, 0, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (3, "Savatage", "Black Stage", 20150730, 2145, 0000, 0, 0, "Thursday")');
//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (4, "Epica", "Black Stage", 20150731, 1100, 1145, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (5, "Sepultura", "Black Stage", 20150731, 1305, 1405, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (6, "At The Gates", "Black Stage", 20150731, 1530, 1630, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (7, "Opeth", "Black Stage", 20150731, 1800, 1915, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (8, "Black Label Society", "Black Stage", 20150731, 2100, 2215, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (9, "Running Wild", "Black Stage", 20150731, 0000, 0130, 0, 0, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (10, "Khold", "Black Stage", 20150801, 1200, 1300, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (11, "Amorphis", "Black Stage", 20150801, 1430, 1545, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (12, "Rock Meets Classic", "Black Stage", 20150801, 1730, 1845, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (13, "Sabaton", "Black Stage", 20150801, 2030, 2200, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (14, "Cradle Of Filth", "Black Stage", 20150801, 0015, 0130, 0, 0, "Saturday")');


//Wednesday
//Thursday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (15, "U.D.O. With Bundeswehr Musikkorps", "True Metal Stage", 20150730, 1600, 1730, 0, 1, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (16, "Rob Zombie", "True Metal Stage", 20150730, 1920, 2050, 0, 1, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (17, "Trans", "True Metal Stage", 20150730, 2145, 0000, 0, 1, "Thursday")');
//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (18, "Ensiferum", "True Metal Stage", 20150731, 1155, 1255, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (19, "Kvelertak", "True Metal Stage", 20150731, 1415, 1515, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (20, "Queensryche", "True Metal Stage", 20150731, 1645, 1745, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (21, "Dream Theater", "True Metal Stage", 20150731, 1930, 2045, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (22, "In Flames", "True Metal Stage", 20150731, 2230, 2345, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (23, "The Bosshoss", "True Metal Stage", 20150731, 0145, 0300, 0, 1, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (24, "Powerwolf", "True Metal Stage", 20150801, 1315, 1415, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (25, "Danko Jones", "True Metal Stage", 20150801, 1600, 1715, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (26, "Bloodbath", "True Metal Stage", 20150801, 1900, 2015, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (27, "Judas Priest", "True Metal Stage", 20150801, 2215, 0000, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (28, "Promoters Farewell & Thanks", "True Metal Stage", 20150801, 0135, 0140, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (29, "Subway To Sally", "True Metal Stage", 20150801, 0145, 0245, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (30, "Outro", "True Metal Stage", 20150801, 0245, 0255, 0, 1, "Saturday")');

//Wednesday
//Thursday
//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (31, "Angra", "Party Stage", 20150731, 1100, 1145, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (32, "Falconer", "Party Stage", 20150731, 1305, 1405, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (33, "Stratovarius", "Party Stage", 20150731, 1530, 1630, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (34, "Annihilator", "Party Stage", 20150731, 1800, 1915, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (35, "Oomph!", "Party Stage", 20150731, 2100, 2215, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (36, "Within Temptation", "Party Stage", 20150731, 0000, 0130, 0, 2, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (37, "Kataklysm", "Party Stage", 20150801, 1200, 1300, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (38, "Skindred", "Party Stage", 20150801, 1430, 1545, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (39, "Biohazard", "Party Stage", 20150801, 1730, 1845, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (40, "Cannibal Corpse", "Party Stage", 20150801, 2030, 2200, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (41, "Santiano", "Party Stage", 20150801, 0015, 0130, 0, 2, "Saturday")');

//Wednesday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (42, "Sycorax", "W:E:T Stage", 20150729, 1100, 1120, 0, 3, "Wednesday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (43, "Legacy Id", "W:E:T Stage", 20150729, 1150, 1210, 0, 3, "Wednesday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (44, "Blaakyum", "W:E:T Stage", 20150729, 1240, 1300, 0, 3, "Wednesday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (45, "Summoned Tide", "W:E:T Stage", 20150729, 1330, 1350, 0, 3, "Wednesday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (46, "Vesperia", "W:E:T Stage", 20150729, 1455, 1515, 0, 3, "Wednesday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (47, "Renaissense", "W:E:T Stage", 20150729, 1545, 1605, 0, 3, "Wednesday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (48, "Deadiron", "W:E:T Stage", 20150729, 1640, 1710, 0, 3, "Wednesday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (49, "John Diva", "W:E:T Stage", 20150729, 1800, 1900, 0, 3, "Wednesday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (50, "Mambo Kurt", "W:E:T Stage", 20150729, 2005, 2050, 0, 3, "Wednesday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (51, "Uli Jon Roth", "W:E:T Stage", 20150729, 2210, 2325, 0, 3, "Wednesday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (52, "Live Karaoke Rockstarz", "W:E:T Stage", 20150729, 0100, 0300, 0, 3, "Wednesday")');
//Thursday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (53, "Ethereal Sin", "W:E:T Stage", 20150730, 1100, 1120, 0, 3, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (54, "Impureza", "W:E:T Stage", 20150730, 1150, 1210, 0, 3, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (55, "Dark Fusion", "W:E:T Stage", 20150730, 1240, 1300, 0, 3, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (56, "Don Gatto", "W:E:T Stage", 20150730, 1330, 1350, 0, 3, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (57, "Dream Spirit", "W:E:T Stage", 20150730, 1420, 1440, 0, 3, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (58, "Dash The Effort", "W:E:T Stage", 20150730, 1545, 1605, 0, 3, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (59, "Walkways", "W:E:T Stage", 20150730, 1635, 1655, 0, 3, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (60, "Stortregn", "W:E:T Stage", 20150730, 1725, 1745, 0, 3, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (61, "Metaprism", "W:E:T Stage", 20150730, 1815, 1835, 0, 3, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (62, "Noctiferia", "W:E:T Stage", 20150730, 1905, 1935, 0, 3, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (63, "Combichrist", "W:E:T Stage", 20150730, 2050, 2135, 0, 3, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (64, "The Answer", "W:E:T Stage", 20150730, 2230, 2315, 0, 3, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (65, "Architects Of Chaoz", "W:E:T Stage", 20150730, 0010, 0055, 0, 3, "Thursday")');
//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (66, "Zodiac", "W:E:T Stage", 20150731, 1100, 1145, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (67, "The Quireboys", "W:E:T Stage", 20150731, 1235, 1320, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (68, "The Poodles", "W:E:T Stage", 20150731, 1410, 1455, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (69, "Stoneman", "W:E:T Stage", 20150731, 1600, 1645, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (70, "Anaal Nathrakh", "W:E:T Stage", 20150731, 1750, 1835, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (71, "Death Angel", "W:E:T Stage", 20150731, 1940, 2025, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (72, "Samael", "W:E:T Stage", 20150731, 2130, 2215, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (73, "Nuclear Assault", "W:E:T Stage", 20150731, 2320, 0005, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (74, "My Dying Bride", "W:E:T Stage", 20150731, 0105, 0205, 0, 3, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (75, "Victims Of Madness", "W:E:T Stage", 20150801, 1130, 1150, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (76, "The Black Spiders", "W:E:T Stage", 20150801, 1240, 1325, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (77, "Godsized", "W:E:T Stage", 20150801, 1430, 1515, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (78, "Beyond The Black", "W:E:T Stage", 20150801, 1610, 1655, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (79, "Cryptopsy", "W:E:T Stage", 20150801, 1800, 1845, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (80, "Morgoth", "W:E:T Stage", 20150801, 1950, 2035, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (81, "Exumer", "W:E:T Stage", 20150801, 2140, 2225, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (82, "Obituary", "W:E:T Stage", 20150801, 2330, 0015, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (83, "Shining", "W:E:T Stage", 20150801, 0120, 0205, 0, 3, "Saturday")');

//Wednesday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (84, "Scratch The Floor", "Headbangers Stage", 20150729, 1125, 1145, 0, 4, "Wednesday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (85, "Nuclear Chaos", "Headbangers Stage", 20150729, 1215, 1235, 0, 4, "Wednesday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (86, "The Loudest Silence", "Headbangers Stage", 20150729, 1305, 1325, 0, 4, "Wednesday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (87, "Wrestling", "Headbangers Stage", 20150729, 1400, 1445, 0, 4, "Wednesday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (88, "Itcom", "Headbangers Stage", 20150729, 1520, 1540, 0, 4, "Wednesday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (89, "Materia", "Headbangers Stage", 20150729, 1610, 1630, 0, 4, "Wednesday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (90, "Nik Kai", "Headbangers Stage", 20150729, 1720, 1750, 0, 4, "Wednesday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (91, "Grailknights", "Headbangers Stage", 20150729, 1910, 1955, 0, 4, "Wednesday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (92, "New Model Army", "Headbangers Stage", 20150729, 2100, 2200, 0, 4, "Wednesday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (93, "Europe", "Headbangers Stage", 20150729, 2335, 0050, 0, 4, "Wednesday")');
//Thursday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (94, "Silius", "Headbangers Stage", 20150730, 1125, 1145, 0, 4, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (95, "Savage Machine", "Headbangers Stage", 20150730, 1215, 1235, 0, 4, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (96, "For I Am King", "Headbangers Stage", 20150730, 1305, 1325, 0, 4, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (97, "Shiraz Lane", "Headbangers Stage", 20150730, 1355, 1415, 0, 4, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (98, "Wrestling", "Headbangers Stage", 20150730, 1450, 1535, 0, 4, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (99, "Troldskugge", "Headbangers Stage", 20150730, 1610, 1630, 0, 4, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (100, "Libertad O Muerte", "Headbangers Stage", 20150730, 1700, 1720, 0, 4, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (101, "Deathless Legacy", "Headbangers Stage", 20150730, 1750, 1810, 0, 4, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (102, "Arana", "Headbangers Stage", 20150730, 1840, 1900, 0, 4, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (103, "Dark Tranquillity", "Headbangers Stage", 20150730, 1940, 2045, 0, 4, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (104, "The Quireboys", "Headbangers Stage", 20150730, 2140, 2225, 0, 4, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (105, "Mantar", "Headbangers Stage", 20150730, 2320, 0005, 0, 4, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (106, "Live Karaoke Rockstarz", "Headbangers Stage", 20150730, 0100, 0300, 0, 4, "Thursday")');
//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (107, "Ancient Bards", "Headbangers Stage", 20150731, 1155, 1225, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (108, "Crossplane", "Headbangers Stage", 20150731, 1330, 1400, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (109, "Truckfighters", "Headbangers Stage", 20150731, 1505, 1550, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (110, "Kaerbholz", "Headbangers Stage", 20150731, 1655, 1740, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (111, "Thyrfing", "Headbangers Stage", 20150731, 1845, 1930, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (112, "Armored Saint", "Headbangers Stage", 20150731, 2035, 2120, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (113, "Wrestling", "Headbangers Stage", 20150731, 2225, 2310, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (114, "Ill Nino", "Headbangers Stage", 20150731, 0010, 0055, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (115, "Burgerkill", "Headbangers Stage", 20150731, 0215, 0300, 0, 4, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (116, "Breakdown Of Sanity", "Headbangers Stage", 20150801, 1200, 1230, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (117, "Avatar", "Headbangers Stage", 20150801, 1335, 1420, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (118, "Kommando", "Headbangers Stage", 20150801, 1525, 1600, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (119, "Walking Dead On Broadway", "Headbangers Stage", 20150801, 1705, 1740, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (120, "No Words (nik Kai)", "Headbangers Stage", 20150801, 1855, 1940, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (121, "Wrestling", "Headbangers Stage", 20150801, 2045, 2130, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (122, "Suicide Silence", "Headbangers Stage", 20150801, 2235, 2320, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (123, "Blood Red Throne", "Headbangers Stage", 20150801, 0025, 0110, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (124, "Waltari", "Headbangers Stage", 20150801, 0215, 0300, 0, 4, "Saturday")');


//Wednesday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (125, "Vroudenspil", "Wackinger Stage", 20150729, 1100, 1145, 0, 5, "Wednesday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (126, "Comes Vagantes", "Wackinger Stage", 20150729, 1230, 1315, 0, 5, "Wednesday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (127, "Mr. Hurley Und Die Pulveraffen", "Wackinger Stage", 20150729, 1400, 1445, 0, 5, "Wednesday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (128, "Ye Banished Privateers", "Wackinger Stage", 20150729, 1530, 1615, 0, 5, "Wednesday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (129, "Pampatut", "Wackinger Stage", 20150729, 1700, 1745, 0, 5, "Wednesday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (130, "The Gentle Storm", "Wackinger Stage", 20150729, 1830, 1915, 0, 5, "Wednesday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (131, "Knasterbart", "Wackinger Stage", 20150729, 2000, 2045, 0, 5, "Wednesday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (132, "Feuerschwanz", "Wackinger Stage", 20150729, 2130, 2230, 0, 5, "Wednesday")');
//Thursday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (133, "Pampatut", "Wackinger Stage", 20150730, 1100, 1145, 0, 5, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (134, "Knasterbart", "Wackinger Stage", 20150730, 1230, 1315, 0, 5, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (135, "Ye Banished Privateers", "Wackinger Stage", 20150730, 1400, 1445, 0, 5, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (136, "Mr. Hurley Und Die Pulveraffen", "Wackinger Stage", 20150730, 1530, 1615, 0, 5, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (137, "Feuerschwanz", "Wackinger Stage", 20150730, 1700, 1745, 0, 5, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (138, "Baltic Sea Child", "Wackinger Stage", 20150730, 1830, 1915, 0, 5, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (139, "Tears For Beers", "Wackinger Stage", 20150730, 2000, 2045, 0, 5, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (140, "Eric Fish & Friends", "Wackinger Stage", 20150730, 2130, 2230, 0, 5, "Thursday")');
//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (141, "Vroudenspil", "Wackinger Stage", 20150731, 1200, 1245, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (142, "Comes Vagantes", "Wackinger Stage", 20150731, 1330, 1415, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (143, "Knasterbart", "Wackinger Stage", 20150731, 1500, 1545, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (144, "Pampatut", "Wackinger Stage", 20150731, 1630, 1715, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (145, "Ye Banished Privateers", "Wackinger Stage", 20150731, 1800, 1845, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (146, "Mr. Hurley Und Die Pulveraffen", "Wackinger Stage", 20150731, 1930, 2015, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (147, "Harpyie", "Wackinger Stage", 20150731, 2100, 2145, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (148, "Cultus Ferox", "Wackinger Stage", 20150731, 2230, 2330, 0, 5, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (149, "Cultus Ferox", "Wackinger Stage", 20150801, 1200, 1245, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (150, "Impius Mundi", "Wackinger Stage", 20150801, 1330, 1415, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (151, "Pampatut", "Wackinger Stage", 20150801, 1500, 1545, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (152, "Skiltron", "Wackinger Stage", 20150801, 1630, 1715, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (153, "Harpyie", "Wackinger Stage", 20150801, 1800, 1845, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (154, "Vroudenspil", "Wackinger Stage", 20150801, 1930, 2015, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (155, "Celtica", "Wackinger Stage", 20150801, 2100, 2145, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (156, "Lord Of The Lost", "Wackinger Stage", 20150801, 2230, 2330, 0, 5, "Saturday")');

//Wednesday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (157, "Da Rocka Und Da Waitler", "Beer Garden", 20150729, 1300, 1330, 0, 6, "Wednesday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (158, "Steve N Seagulls", "Beer Garden", 20150729, 1400, 1500, 0, 6, "Wednesday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (159, "Mambo Kurt", "Beer Garden", 20150729, 1530, 1600, 0, 6, "Wednesday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (160, "Cultus Ferox", "Beer Garden", 20150729, 1700, 1800, 0, 6, "Wednesday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (161, "Bembers", "Beer Garden", 20150729, 1830, 1900, 0, 6, "Wednesday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (162, "W:O:A Firefighters", "Beer Garden", 20150729, 2000, 2100, 0, 6, "Wednesday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (163, "Blechblosn", "Beer Garden", 20150729, 2200, 2300, 0, 6, "Wednesday")');
//Thursday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (164, "Da Rocka Und Da Waitler", "Beer Garden", 20150730, 1300, 1330, 0, 6, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (165, "Alkbottle", "Beer Garden", 20150730, 1400, 1500, 0, 6, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (166, "Bembers", "Beer Garden", 20150730, 1530, 1600, 0, 6, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (167, "Steve N Seagulls", "Beer Garden", 20150730, 1630, 1730, 0, 6, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (168, "W:O:A Firefighters", "Beer Garden", 20150730, 1815, 1915, 0, 6, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (169, "Ye Banished Privateers", "Beer Garden", 20150730, 2000, 2100, 0, 6, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (170, "Blechblosn", "Beer Garden", 20150730, 2200, 2300, 0, 6, "Thursday")');
//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (171, "Da Rocka Und Da Waitler", "Beer Garden", 20150731, 1300, 1330, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (172, "Asrock", "Beer Garden", 20150731, 1430, 1530, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (173, "Bembers", "Beer Garden", 20150731, 1630, 1700, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (174, "Steve N Seagulls", "Beer Garden", 20150731, 1800, 1900, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (175, "Blechblosn", "Beer Garden", 20150731, 2000, 2100, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (176, "Drescher", "Beer Garden", 20150731, 2200, 2300, 0, 6, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (177, "Da Rocka Und Da Waitler", "Beer Garden", 20150801, 1300, 1330, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (178, "W:O:A Firefighters", "Beer Garden", 20150801, 1400, 1445, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (179, "Vroudenspil", "Beer Garden", 20150801, 1515, 1600, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (180, "Bembers", "Beer Garden", 20150801, 1630, 1700, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (181, "Steve N Seagulls", "Beer Garden", 20150801, 1730, 1830, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (182, "Mambo Kurt", "Beer Garden", 20150801, 1900, 1945, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (183, "Comes Vagantes", "Beer Garden", 20150801, 2030, 2115, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (184, "Blechblosn", "Beer Garden", 20150801, 2200, 2300, 0, 6, "Saturday")');
		
		
		//Wednesday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (185, "Megabosch", "Wasteland Stage", 20150729, 1500, 1530, 0, 7, "Wednesday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (186, "Monstagon", "Wasteland Stage", 20150729, 1930, 2000, 0, 7, "Wednesday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (187, "Megabosch", "Wasteland Stage", 20150729, 2300, 0000, 0, 7, "Wednesday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (188, "Devils Fire Show", "Wasteland Stage", 20150729, 0030, 0100, 0, 7, "Wednesday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (189, "Light And Freak Show", "Wasteland Stage", 20150729, 0130, 0200, 0, 7, "Wednesday")');
//Thursday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (190, "Megabosch", "Wasteland Stage", 20150730, 1500, 1530, 0, 7, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (191, "Monstagon", "Wasteland Stage", 20150730, 1930, 2000, 0, 7, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (192, "Megabosch", "Wasteland Stage", 20150730, 2230, 2330, 0, 7, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (193, "Henry Hot", "Wasteland Stage", 20150730, 0000, 0030, 0, 7, "Thursday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (194, "Devils Fire Show", "Wasteland Stage", 20150730, 0100, 0130, 0, 7, "Thursday")');
//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (195, "Monstagon", "Wasteland Stage", 20150731, 1600, 1630, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (196, "Megabosch", "Wasteland Stage", 20150731, 2030, 2100, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (197, "Megabosch", "Wasteland Stage", 20150731, 2330, 0030, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (198, "Devils Fire Show", "Wasteland Stage", 20150731, 0045, 0115, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (199, "Henry Hot", "Wasteland Stage", 20150731, 0130, 0215, 0, 7, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (200, "Monstagon", "Wasteland Stage", 20150801, 1600, 1630, 0, 7, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (201, "Megabosch", "Wasteland Stage", 20150801, 2030, 2100, 0, 7, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (202, "Megabosch", "Wasteland Stage", 20150801, 2330, 0030, 0, 7, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (203, "Devils Fire Show", "Wasteland Stage", 20150801, 0045, 0115, 0, 7, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (204, "Henry Hot", "Wasteland Stage", 20150801, 0130, 0215, 0, 7, "Saturday")');
		
		set_up_main_page();
	});
}













