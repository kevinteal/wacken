// JavaScript Document

function set_up_band_db(){
	//alert("DB");
	
	
		//Main Stage = 0
		//second stage = 1
		//thrid stage = 2
		//fourth = 3
		//fifth = 4
		
		db.transaction(function (tx) {		
		
		//tx.executeSql('DROP TABLE IF EXISTS bands');
		//tx.executeSql('DROP TABLE IF EXISTS bands_2016_v1');
		
		tx.executeSql('CREATE TABLE IF NOT EXISTS bands_2016_v1 (id UNIQUE, band_name TEXT, stage TEXT, day INTEGER, start_time INTEGER, finish_time INTEGER, band_fav INTEGER, stage_rank INTEGER, day_name, video_link TEXT)');
		
		
		//Wednesday
//Thursday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (1, "Skyline", "Black", 20160804, 1445, 1530, 0, 0, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (2, "Saxon", "Black", 20160804, 1600, 1715, 0, 0, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (3, "Foreigner", "Black", 20160804, 1745, 1900, 0, 0, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (4, "Whitesnake", "Black", 20160804, 1945, 2100, 0, 0, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (5, "Lemmy Born To Lose, Live To Win", "Black", 20160804, 2345, 0000, 0, 0, "Thursday")');
//Friday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (6, "Pyogenesis", "Black", 20160805, 1100, 1145, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (7, "Legion Of The Damned", "Black", 20160805, 1305, 1405, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (8, "Entombed A.d.", "Black", 20160805, 1530, 1630, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (9, "Eluveitie", "Black", 20160805, 1800, 1915, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (10, "Tarja", "Black", 20160805, 2100, 2215, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (11, "Ministry", "Black", 20160805, 0015, 0130, 0, 0, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (12, "Dragonforce", "Black", 20160806, 1200, 1315, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (13, "Borknagar", "Black", 20160806, 1455, 1610, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (14, "Therion", "Black", 20160806, 1755, 1910, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (15, "Triptykon", "Black", 20160806, 2055, 2210, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (16, "Arch Enemy", "Black", 20160806, 0040, 0155, 0, 0, "Saturday")');
		
		
		//Wednesday
//Thursday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (17, "Iron Maiden", "True Metal", 20160804, 2130, 2330, 0, 1, "Thursday")');
//Friday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (18, "The Haunted", "True Metal", 20160805, 1155, 1255, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (19, "Loudness", "True Metal", 20160805, 1415, 1515, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (20, "Axel Rudi Pell", "True Metal", 20160805, 1645, 1745, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (21, "Bullet For My Valentine", "True Metal", 20160805, 1930, 2045, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (22, "Blind Guardian", "True Metal", 20160805, 2230, 0000, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (23, "Testament", "True Metal", 20160805, 0145, 0300, 0, 1, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (24, "Symphony X", "True Metal", 20160806, 1330, 1445, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (25, "Metal Church", "True Metal", 20160806, 1625, 1740, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (26, "Steel Panther", "True Metal", 20160806, 1925, 2040, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (27, "Twisted Sister", "True Metal", 20160806, 2225, 0025, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (28, "Promoters Farewell & Thanks", "True Metal", 20160806, 0200, 0205, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (29, "Dio Disciples Ft. A Very Special Guest", "True Metal", 20160806, 0210, 0255, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (30, "Outro", "True Metal", 20160806, 0255, 0300, 0, 1, "Saturday")');


//Wednesday
//Thursday
//Friday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (31, "Orden Ogan", "Party", 20160805, 1100, 1145, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (32, "Beyond The Black", "Party", 20160805, 1305, 1405, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (33, "Equilibrium", "Party", 20160805, 1530, 1630, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (34, "Torfrock", "Party", 20160805, 1800, 1915, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (35, "Hansen & Friends", "Party", 20160805, 2100, 2215, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (36, "Unisonic", "Party", 20160805, 0015, 0130, 0, 2, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (37, "Eskimo Callboy", "Party", 20160806, 1200, 1315, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (38, "Devil Driver", "Party", 20160806, 1455, 1610, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (39, "Callejon", "Party", 20160806, 1755, 1910, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (40, "Clutch", "Party", 20160806, 2055, 2210, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (41, "Parkway Drive", "Party", 20160806, 0040, 0155, 0, 2, "Saturday")');


//Wednesday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (42, "Hteththemeth", "WET", 20160803, 1100, 1120, 0, 3, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (43, "Preternatural", "WET", 20160803, 1150, 1210, 0, 3, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (44, "Horror Dance Squad", "WET", 20160803, 1240, 1300, 0, 3, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (45, "Sinphobia", "WET", 20160803, 1330, 1350, 0, 3, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (46, "Pyraweed", "WET", 20160803, 1420, 1440, 0, 3, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (47, "Syndemic", "WET", 20160803, 1510, 1530, 0, 3, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (48, "Lieveil", "WET", 20160803, 1600, 1620, 0, 3, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (49, "Mindtaker", "WET", 20160803, 1650, 1710, 0, 3, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (50, "Auðn", "WET", 20160803, 1740, 1800, 0, 3, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (51, "Legacy Of Brutality", "WET", 20160803, 1830, 1850, 0, 3, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (52, "Henry Rollins Spoken Word", "WET", 20160803, 1930, 2015, 0, 3, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (53, "Panzerballett", "WET", 20160803, 2110, 2210, 0, 3, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (54, "Phil Campbells All Starr Band", "WET", 20160803, 2305, 2355, 0, 3, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (55, "Berlin Allstarz Live Karaoke", "WET", 20160803, 0100, 0300, 0, 3, "Wednesday")');
//Thursday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (56, "Crows Crown", "WET", 20160804, 1125, 1145, 0, 3, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (57, "Pain Is", "WET", 20160804, 1215, 1235, 0, 3, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (58, "Zhora", "WET", 20160804, 1305, 1325, 0, 3, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (59, "Zombies Ate My Girlfriend", "WET", 20160804, 1355, 1415, 0, 3, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (60, "The Other", "WET", 20160804, 1455, 1525, 0, 3, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (61, "Henry Rollins Spoken Word", "WET", 20160804, 1605, 1650, 0, 3, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (62, "Serum 114", "WET", 20160804, 1745, 1815, 0, 3, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (63, "Tsjuder", "WET", 20160804, 1910, 1955, 0, 3, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (64, "Marduk", "WET", 20160804, 2050, 2135, 0, 3, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (65, "Therapy?", "WET", 20160804, 2230, 2315, 0, 3, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (66, "Blue Oyster Cult", "WET", 20160804, 0010, 0100, 0, 3, "Thursday")');
//Friday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (67, "Fateful Finality", "WET", 20160805, 1100, 1130, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (68, "Henry Rollins Spoken Word", "WET", 20160805, 1210, 1255, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (69, "The Vintage Caravan", "WET", 20160805, 1350, 1435, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (70, "Negative Approach", "WET", 20160805, 1530, 1615, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (71, "Girlschool", "WET", 20160805, 1710, 1755, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (72, "Deez Nuts", "WET", 20160805, 1850, 1935, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (73, "Insidious Disease", "WET", 20160805, 2030, 2115, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (74, "1349", "WET", 20160805, 2210, 2255, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (75, "Red Fang", "WET", 20160805, 2350, 0035, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (76, "While She Sleeps", "WET", 20160805, 0130, 0215, 0, 3, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (77, "Jesus Chrusler Supercar", "WET", 20160806, 1200, 1230, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (78, "Monuments", "WET", 20160806, 1310, 1340, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (79, "Year Of The Goat", "WET", 20160806, 1435, 1520, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (80, "Snowy Shaw", "WET", 20160806, 1615, 1700, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (81, "Drone", "WET", 20160806, 1755, 1840, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (82, "Einherjer", "WET", 20160806, 1935, 2020, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (83, "Dagoba", "WET", 20160806, 2115, 2200, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (84, "Aura Noir", "WET", 20160806, 2255, 2340, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (85, "Barb Wire Dolls", "WET", 20160806, 0035, 0120, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (86, "Cripper", "WET", 20160806, 0215, 0300, 0, 3, "Saturday")');

//Wednesday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (87, "Calm Hatchery", "Headbangers", 20160803, 1125, 1145, 0, 4, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (88, "Profaner", "Headbangers", 20160803, 1215, 1235, 0, 4, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (89, "Sunless Dawn", "Headbangers", 20160803, 1305, 1325, 0, 4, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (90, "Svartmalm", "Headbangers", 20160803, 1355, 1415, 0, 4, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (91, "Elemental", "Headbangers", 20160803, 1445, 1505, 0, 4, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (92, "Lynchpin", "Headbangers", 20160803, 1535, 1555, 0, 4, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (93, "Miles To Perdition", "Headbangers", 20160803, 1625, 1645, 0, 4, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (94, "Tulkas", "Headbangers", 20160803, 1715, 1735, 0, 4, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (95, "Vimoksha", "Headbangers", 20160803, 1805, 1825, 0, 4, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (96, "Dystopia", "Headbangers", 20160803, 1855, 1915, 0, 4, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (97, "Bliksem", "Headbangers", 20160803, 2020, 2105, 0, 4, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (98, "Hamatom", "Headbangers", 20160803, 2215, 2300, 0, 4, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (99, "Mambo Kurt", "Headbangers", 20160803, 0000, 0055, 0, 4, "Wednesday")');
//Thursday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (100, "Carrion", "Headbangers", 20160804, 1100, 1120, 0, 4, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (101, "Ritual Day", "Headbangers", 20160804, 1150, 1210, 0, 4, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (102, "Tidal Dreams", "Headbangers", 20160804, 1240, 1300, 0, 4, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (103, "Lepergod", "Headbangers", 20160804, 1330, 1350, 0, 4, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (104, "The Raven Age", "Headbangers", 20160804, 1420, 1450, 0, 4, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (105, "Nasty", "Headbangers", 20160804, 1530, 1600, 0, 4, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (106, "The Dead Daisies", "Headbangers", 20160804, 1655, 1740, 0, 4, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (107, "Vader", "Headbangers", 20160804, 1820, 1905, 0, 4, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (108, "Immolation", "Headbangers", 20160804, 2000, 2045, 0, 4, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (109, "The Black Dahlia Murder", "Headbangers", 20160804, 2140, 2225, 0, 4, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (110, "Michael Monroe", "Headbangers", 20160804, 2320, 0005, 0, 4, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (111, "Berlin Allstarz Live Karaoke", "Headbangers", 20160804, 0105, 0300, 0, 4, "Thursday")');
//Friday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (112, "Sebastien", "Headbangers", 20160805, 1135, 1205, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (113, "Der Weg Einer Freiheit", "Headbangers", 20160805, 1300, 1345, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (114, "Bury Tomorrow", "Headbangers", 20160805, 1440, 1525, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (115, "Die Krupps", "Headbangers", 20160805, 1620, 1705, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (116, "Ektomorf", "Headbangers", 20160805, 1800, 1845, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (117, "Orphaned Land", "Headbangers", 20160805, 1940, 2025, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (118, "Alcest", "Headbangers", 20160805, 2120, 2205, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (119, "Ihsahn", "Headbangers", 20160805, 2300, 2345, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (120, "Caliban", "Headbangers", 20160805, 0040, 0125, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (121, "Kampfar", "Headbangers", 20160805, 0220, 0300, 0, 4, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (122, "Victims Of Madness", "Headbangers", 20160806, 1130, 1155, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (123, "Watch Out Stampede", "Headbangers", 20160806, 1235, 1305, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (124, "Myrkur", "Headbangers", 20160806, 1345, 1430, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (125, "9mm", "Headbangers", 20160806, 1525, 1610, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (126, "Dritte Wahl", "Headbangers", 20160806, 1705, 1750, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (127, "Gloryhammer", "Headbangers", 20160806, 1845, 1930, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (128, "Steak Number Eight", "Headbangers", 20160806, 2025, 2110, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (129, "Buffalo Summer", "Headbangers", 20160806, 2205, 2250, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (130, "Budderside", "Headbangers", 20160806, 2345, 0030, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (131, "Serious Black", "Headbangers", 20160806, 0125, 0210, 0, 4, "Saturday")');

//Wednesday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (132, "Reliquiae", "Wackinger", 20160803, 1100, 1145, 0, 5, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (133, "Knasterbart", "Wackinger", 20160803, 1230, 1315, 0, 5, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (134, "Pampatut", "Wackinger", 20160803, 1400, 1445, 0, 5, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (135, "Versengold", "Wackinger", 20160803, 1530, 1630, 0, 5, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (136, "Mr. Hurley Und Die Pulveraffen", "Wackinger", 20160803, 1715, 1800, 0, 5, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (137, "Vogelfrey", "Wackinger", 20160803, 1845, 1930, 0, 5, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (138, "Red Hot Chili Pipers", "Wackinger", 20160803, 2015, 2130, 0, 5, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (139, "Eric Fish And Friends", "Wackinger", 20160803, 2215, 2330, 0, 5, "Wednesday")');
//Thursday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (140, "Mr. Hurley Und Die Pulveraffen", "Wackinger", 20160804, 1100, 1145, 0, 5, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (141, "Wirrwahr", "Wackinger", 20160804, 1230, 1315, 0, 5, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (142, "Reliquiae", "Wackinger", 20160804, 1400, 1445, 0, 5, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (143, "Pampatut", "Wackinger", 20160804, 1530, 1615, 0, 5, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (144, "Vogelfrey", "Wackinger", 20160804, 1700, 1745, 0, 5, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (145, "Red Hot Chili Pipers", "Wackinger", 20160804, 1830, 1945, 0, 5, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (146, "Versengold", "Wackinger", 20160804, 2030, 2130, 0, 5, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (147, "Feuerschwanz", "Wackinger", 20160804, 2215, 2315, 0, 5, "Thursday")');
//Friday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (148, "Reliquiae", "Wackinger", 20160805, 1200, 1245, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (149, "Pampatut", "Wackinger", 20160805, 1330, 1415, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (150, "Freiwächter", "Wackinger", 20160805, 1500, 1545, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (151, "Versengold", "Wackinger", 20160805, 1630, 1715, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (152, "Krayenzeit", "Wackinger", 20160805, 1800, 1845, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (153, "Bodhaktan", "Wackinger", 20160805, 1930, 2030, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (154, "Mr. Hurley Und Die Pulveraffen", "Wackinger", 20160805, 2115, 2200, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (155, "Red Hot Chili Pipers", "Wackinger", 20160805, 2245, 0000, 0, 5, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (156, "Mr. Hurley Und Die Pulveraffen", "Wackinger", 20160806, 1200, 1245, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (157, "Reliquiae", "Wackinger", 20160806, 1330, 1415, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (158, "Forgotten North", "Wackinger", 20160806, 1500, 1545, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (159, "Bodhaktan", "Wackinger", 20160806, 1630, 1715, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (160, "Red Hot Chili Pipers", "Wackinger", 20160806, 1800, 1915, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (161, "Pampatut", "Wackinger", 20160806, 2000, 2045, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (162, "Elvenking", "Wackinger", 20160806, 2130, 2215, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (163, "King Dude", "Wackinger", 20160806, 2300, 0000, 0, 5, "Saturday")');

//Wednesday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (164, "Blaas Of Glory", "Beer Garden", 20160803, 1300, 1400, 0, 6, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (165, "Tuxedoo", "Beer Garden", 20160803, 1430, 1530, 0, 6, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (166, "Mambo Kurt", "Beer Garden", 20160803, 1600, 1630, 0, 6, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (167, "The Oreillys And The Paddyhats", "Beer Garden", 20160803, 1700, 1800, 0, 6, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (168, "Bembers", "Beer Garden", 20160803, 1830, 1900, 0, 6, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (169, "Soccer Cup Winner Award", "Beer Garden", 20160803, 1915, 1930, 0, 6, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (170, "Woa Firefighters", "Beer Garden", 20160803, 2000, 2100, 0, 6, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (171, "Blechblosn", "Beer Garden", 20160803, 2200, 2300, 0, 6, "Wednesday")');
//Thursday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (172, "The Oreillys And The Paddyhats", "Beer Garden", 20160804, 1300, 1400, 0, 6, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (173, "Knasterbart", "Beer Garden", 20160804, 1430, 1530, 0, 6, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (174, "Tuxedoo", "Beer Garden", 20160804, 1600, 1700, 0, 6, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (175, "Bembers", "Beer Garden", 20160804, 1730, 1800, 0, 6, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (176, "Woa Firefighters", "Beer Garden", 20160804, 1830, 1930, 0, 6, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (177, "Bon Scott", "Beer Garden", 20160804, 2000, 2100, 0, 6, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (178, "Blechblosn", "Beer Garden", 20160804, 2200, 2300, 0, 6, "Thursday")');
//Friday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (179, "Tuxedoo", "Beer Garden", 20160805, 1300, 1345, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (180, "The Oreillys And The Paddyhats", "Beer Garden", 20160805, 1415, 1500, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (181, "Bembers", "Beer Garden", 20160805, 1530, 1600, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (182, "Asrock", "Beer Garden", 20160805, 1630, 1730, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (183, "Knasterbart", "Beer Garden", 20160805, 1800, 1900, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (184, "Blechblosn", "Beer Garden", 20160805, 2000, 2100, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (185, "John Coffey", "Beer Garden", 20160805, 2200, 2300, 0, 6, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (186, "Mambo Kurt", "Beer Garden", 20160806, 1300, 1345, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (187, "Woa Firefighters", "Beer Garden", 20160806, 1400, 1500, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (188, "Tuxedoo", "Beer Garden", 20160806, 1530, 1615, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (189, "Bembers", "Beer Garden", 20160806, 1645, 1715, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (190, "The Goddamn Gallows", "Beer Garden", 20160806, 1745, 1845, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (191, "Eat The Turnbuckle", "Beer Garden", 20160806, 1915, 2015, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (192, "Honky", "Beer Garden", 20160806, 2045, 2145, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (193, "Blechblosn", "Beer Garden", 20160806, 2215, 2300, 0, 6, "Saturday")');

//Wednesday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (194, "Sub Dub Micromachine", "Wasteland", 20160803, 1500, 1530, 0, 7, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (195, "Sector", "Wasteland", 20160803, 1930, 2000, 0, 7, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (196, "Monstagon", "Wasteland", 20160803, 2130, 2215, 0, 7, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (197, "Devils Fire Show", "Wasteland", 20160803, 0030, 0100, 0, 7, "Wednesday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (198, "Light & Freak Show", "Wasteland", 20160803, 0130, 0200, 0, 7, "Wednesday")');
//Thursday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (199, "Sector", "Wasteland", 20160804, 1500, 1530, 0, 7, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (200, "Sub Dub Micromachine", "Wasteland", 20160804, 1945, 2015, 0, 7, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (201, "Monstagon", "Wasteland", 20160804, 2130, 2215, 0, 7, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (202, "Sir Henry Hot", "Wasteland", 20160804, 0000, 0030, 0, 7, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (203, "Devils Fire Show", "Wasteland", 20160804, 0100, 0130, 0, 7, "Thursday")');
//Friday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (204, "Monstagon", "Wasteland", 20160805, 1600, 1630, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (205, "Overthrust", "Wasteland", 20160805, 1715, 1745, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (206, "Sub Dub Micromachine", "Wasteland", 20160805, 2030, 2100, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (207, "Sector", "Wasteland", 20160805, 2200, 2245, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (208, "Devils Fire Show", "Wasteland", 20160805, 0045, 0115, 0, 7, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (209, "Sir Henry Hot", "Wasteland", 20160805, 0130, 0215, 0, 7, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (210, "Monstagon", "Wasteland", 20160806, 1600, 1630, 0, 7, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (211, "Sector", "Wasteland", 20160806, 2045, 2115, 0, 7, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (212, "Sub Dub Micromachine", "Wasteland", 20160806, 2215, 2300, 0, 7, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (213, "Devils Fire Show", "Wasteland", 20160806, 0045, 0115, 0, 7, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (214, "Sir Henry Hot + Band", "Wasteland", 20160806, 0145, 0215, 0, 7, "Saturday")');
		
});
db.transaction(function (tx) {	



		set_up_main_page();
	});
}













