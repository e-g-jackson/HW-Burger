USE burgers_db;

INSERT INTO burger(burgerName, devoured)
VALUE('California Cheeseburger', false),
('Black and Bleu Burger', true),
('Jucy Lucy', false),
('Biggest Mac', false);

SELECT * FROM burger;