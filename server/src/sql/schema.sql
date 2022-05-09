PRAGMA foreign_keys;

CREATE TABLE songs (
	id int NOT NULL PRIMARY KEY,
	song_title text NOT NULL,
	notes varchar NOT NULL,
	album varchar NOT NULL,
	artist text NOT NULL
);

INSERT INTO songs (id, song_title, notes, album, artist) 
VALUES (1, 'Ode to Joy (Dubstep Remix)', 'E4 E4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 E4 D4 D4', 'Unknown', 'Unknown');

INSERT INTO songs (id, song_title, notes, album, artist) 
VALUES (2, 'Happy Birthday', 'C1 C1 D2 C1 F4 E3 C1 C1 D2 C1 G5 F4 C1 C1 C2 A6 F4 F4 E3 D2 C2 C2 B7 G5 A6 G5', 'Unknown', 'Mildred Hill');

INSERT INTO songs (id, song_title, notes, album, artist) 
VALUES (3, 'Mary Had A Little Lamb', 'E3 D2 C1 D2 E3 E3 D2 D2 D2 E3 G4 G4 E3 D2 C1 D2 E3 E3 E3 E3 D2 D2 E3 D2 C1', 'Unknown', 'Sarah Hale');


