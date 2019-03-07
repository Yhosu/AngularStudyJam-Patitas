CREATE DATABASE ng_desaparecidos_db;

USE ng_desaparecidos_db;


CREATE TABLE desaparecido(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    description VARCHAR(255),
    color VARCHAR(255),
    tipo VARCHAR(100),
    ult_ubicacion VARCHAR (255),
    image VARCHAR(200),
    tel_ref INT(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

RENAME TABLE desaparecido to desaparecidos;

DESCRIBE desaparecidos;