CREATE TABLE songs (
	id int NOT NULL PRIMARY KEY,
	song_title text NOT NULL,
	notes varchar NOT NULL,
	album text VARCHAR(20),
	artist text VARCHAR(20)
);

INSERT INTO songs (id, song_title, notes, album, artist) 
VALUES (1, 'Ode to Joy (Dubstep Remix)', 'E4 E4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 E4 D4 D4', 'Classic', 'Beethoven');

INSERT INTO songs (id, song_title, notes) 
VALUES (2, 'Simple and Clean', 'G3 D4 C4 F4 D4 D4 F4 D4 A4 F4 F4 A#4 C5 C5 A#4 C5 D5 D5 A#4 A#4');
