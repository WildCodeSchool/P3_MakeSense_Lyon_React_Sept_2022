DROP TABLE IF EXISTS user;

CREATE TABLE user (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname varchar(100) NOT NULL,
  lastname varchar(100) NOT NULL,
  email varchar(200) NOT NULL,
  city varchar(100) NOT NULL,
  phone varchar(20),
  avatar varchar(255),
  password varchar(100) NOT NULL,
  is_admin tinyint NOT NULL,
  date_creation DATETIME NOT NULL DEFAULT NOW() 
);

INSERT INTO user (firstname, lastname, email, city, phone, avatar, password, is_admin, date_creation) VALUES ('Iris', 'Tracer', 'iris.tracer@gmail.com', 'Teahupo', '0606080907', 'monplusbelavatar', '12345', '1', '2022-10-13 12:12:23'),('Madeline', 'Phara', 'madeline.phara@gmail.com', 'Lyon', '0606080907', 'monplusbelavatar', '12345', '1', '2022-10-13 12:12:23'),('John', 'Doe', 'john.doe@gmail.com', 'Katmandu', '0606080907', 'monplusbelavatar', '12345', '1', '2022-10-13 12:12:23'),('Davy', 'Mccree', 'davy.mccree@gmail.com', 'Oslo', '0606080907', 'monplusbelavatar', '12345', '1', '2022-10-13 12:12:23');

DROP TABLE IF EXISTS status_decision;

CREATE TABLE status_decision (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  suggested int,
  in_progress int,
  conflict int,
  finished int,
  unresolved int
);

INSERT INTO status_decision (conflict) VALUES (3);


DROP TABLE IF EXISTS decision;

CREATE TABLE decision (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  content text, 
  impact text,
  risk text,
  date_decision_creation DATETIME NOT NULL DEFAULT NOW(),
  date_decision_conflict datetime,
  date_decision_final_planned datetime,
  date_decision_close datetime,
  user_id int,
  status_decision_id int,
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (status_decision_id) REFERENCES status_decision(id)
);

INSERT INTO decision (title, content, impact, risk, date_decision_creation,date_decision_conflict, date_decision_final_planned, date_decision_close) VALUES ('Déménager à bali', 'Je veux demenager à bali pour surfer', 'impact', 'risk', '2022-10-13 12:12:23', '2022-10-13 12:12:23', '2022-10-13 12:12:23', '2022-10-13 12:12:23'),('Surfer toute la vie', 'Acheter 250 plaches de surf', 'impact', 'risk', '2022-10-13 12:12:23', '2022-10-13 12:12:23', '2022-10-13 12:12:23', '2022-10-13 12:12:23'),('Acheter un 4X4 pour poluer la planete', 'voici ma description', 'impact', 'risk', '2022-10-13 12:12:23', '2022-10-13 12:12:23', '2022-10-13 12:12:23', '2022-10-13 12:12:23'),('Aller a tahiti', 'Pour plus de 100000euros', 'impact', 'risk', '2022-10-13 12:12:23', '2022-10-13 12:12:23', '2022-10-13 12:12:23', '2022-10-13 12:12:23');


DROP TABLE IF EXISTS comment;

CREATE TABLE comment (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  content varchar(100) NOT NULL,
  vote varchar(45) NOT NULL,
  date_creation DATETIME NOT NULL DEFAULT NOW(),
  user_id int,
  decision_id int,
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (decision_id) REFERENCES decision(id)
);

INSERT INTO comment (content, vote, date_creation) VALUES ('Je suis un commentaire', 'Pour', '2022-10-13 12:12:23'),('Je suis un deuxieme commentaire', 'Pour', '2022-10-13 12:12:23'),('Je suis un troisieme commentaire', 'Pour', '2022-10-13 12:12:23'), ('Je suis un quatrieme commentaire', 'Pour', '2022-10-13 12:12:23');

DROP TABLE IF EXISTS expert_decision;

CREATE TABLE expert_decision (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id int,
  decision_id int,
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (decision_id) REFERENCES decision(id)
);


DROP TABLE IF EXISTS user_concern_decision;

CREATE TABLE user_concern_decision (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id int,
  decision_id int,
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (decision_id) REFERENCES decision(id)
) ;

