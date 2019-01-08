USE burgers_db;

INSERT INTO burger(burgerName, devoured)
VALUE('California Cheeseburger', false),
('Black and Bleu Burger', true),
('Juicy Lucy', false),
('Biggest Mac', false),
('Royale with Cheese', false);

SELECT * FROM burger;