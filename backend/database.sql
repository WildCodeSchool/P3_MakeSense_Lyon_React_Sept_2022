DROP TABLE IF EXISTS user;

CREATE TABLE user (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname varchar(100) NOT NULL,
  lastname varchar(100) NOT NULL,
  email varchar(200) NOT NULL,
  city varchar(100),
  phone varchar(20),
  avatar varchar(255) DEFAULT 'randomuser.jpg',
  hashedPassword varchar(100) NOT NULL,
  is_admin tinyint NOT NULL DEFAULT 0,
  passwordToken varchar(100), 
  date_creation DATETIME NOT NULL DEFAULT NOW() 
);

INSERT INTO user (firstname, lastname, email, city, phone, avatar, hashedPassword, is_admin, date_creation) VALUES ('Iris', 'Tracer', 'iris.tracer@gmail.com', 'Teahupo', '0606080907', 'monplusbelavatariris.jpg', '12345', '1', '2022-10-13 12:12:23'),('Madeline', 'Phara', 'madeline.phara@gmail.com', 'Lyon', '0606080907', 'monplusbelavatarmadeline.jpg', '12345', '1', '2022-10-13 12:12:23'),('John', 'Doe', 'test@test.com', 'Katmandu', '0606080907', 'monplusbelavatarjohn.jpg', '$argon2id$v=19$m=65536,t=5,p=1$w74Il7Z5LSbJeNQQPo031w$19FI3i4qKtfenAJXJNqWcc8wgHFkMyZ97ar6m8wmIeI', '1', '2022-10-13 12:12:23'),('Davy', 'Mccree', 'davy.mccree@gmail.com', 'Oslo', '0606080907', 'monplusbelavatardavy.jpg', '12345', '1', '2022-10-13 12:12:23'),('Marion', 'Lagoth', 'marion.lagoth@gmail.com', 'Enfer', '0606080907', 'monplusbelavatariris.jpg', '12345', '1', '2022-10-13 12:12:23'),('Cloe', 'Symetra', 'cloe.symetra@gmail.com', 'Lyon', '0606080907', 'monplusbelavatarmadeline.jpg', '12345', '1', '2022-10-13 12:12:23'),('Rachid', 'Doomfist', 'doomfist@test.com', 'Katmandu', '0606080907', 'monplusbelavatarjohn.jpg', '$argon2id$v=19$m=65536,t=5,p=1$cHKCeWcTAbFAoQip2FBoSQ$YEwzjtbjy/r88czZmo+Ess3AGPYvhonN2HTureWf3NY', '1', '2022-10-13 12:12:23'),('Morgan', 'Junkrate', 'morgan.junkrat@gmail.com', 'Oslo', '0606080907', 'monplusbelavatardavy.jpg', '12345', '1', '2022-10-13 12:12:23');

DROP TABLE IF EXISTS decision;

CREATE TABLE decision (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  content text NOT NULL, 
  impact text,
  risk text,
  benefits text,
  date_decision_creation DATETIME NOT NULL DEFAULT NOW(),
  date_decision_conflict DATETIME,
  date_decision_close DATETIME,
  status_decision varchar(45) NOT NULL DEFAULT 'En cours',
  user_id int,
  FOREIGN KEY (user_id) REFERENCES user(id)
);

INSERT INTO decision (title, content, impact, risk, benefits, date_decision_creation, date_decision_conflict, date_decision_close, status_decision, user_id) VALUES 
('Fixation des prix', '', '', '', '', '2022-10-13 12:12:23', '2022-10-13 12:12:23', '2022-10-13 12:12:23', 'En cours','2'),
('Déterminer le montant des remises', '', '', '', '', '2022-10-13 12:12:23', '2022-12-13 12:12:23', '2022-10-13 12:12:23', 'En cours','4'),
('Collecter des informations', '', '', '', '', '2023-01-13 12:12:23', '2022-10-13 12:12:23', '2022-10-13 12:12:23', 'En conflit','3'),
('Mettre en place un management', '', '', '', '', '2022-10-13 12:12:23', '2023-04-13 12:12:23', '2022-10-13 12:12:23','Non aboutie','1'),
('Changer la structure de l’entreprise', '', '', '', '', '2022-10-13 12:12:23', '2022-10-13 12:12:23', '2022-10-13 12:12:23', 'Terminee','4'),
('Exposer les risques potentiels', '', '', '', '', '2022-10-13 12:12:23', '2022-12-13 12:12:23', '2022-10-13 12:12:23', 'En cours','2'),
('Produire un spot radio', '', '', '', '', '2023-01-13 12:12:23', '2022-10-13 12:12:23', '2022-10-13 12:12:23', 'Terminee','3'),
('L’animation du réseau des prestataires', '', '', '', '', '2022-10-13 12:12:23', '2023-04-13 12:12:23', '2022-10-13 12:12:23','Non aboutie','1');

DROP TABLE IF EXISTS person_expert;

CREATE TABLE person_expert (
  user_id int,
  decision_id int,
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (decision_id) REFERENCES decision(id)
);

DROP TABLE IF EXISTS person_concern;

CREATE TABLE person_concern (
  user_id int,
  decision_id int,
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (decision_id) REFERENCES decision(id)
);

DROP TABLE IF EXISTS message_help;

CREATE TABLE message_help (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  username varchar(100) NOT NULL,
  email varchar(100) NOT NULL,
  objet text NOT NULL,
  content text NOT NULL
);

INSERT INTO message_help (username, email, objet, content) VALUES ('Morgan Junkrate', 'morgan@gmail.com', 'Je suis un titre', 'J ai besoin d aide pour ...'), ('Rachid', 'rachid@gmail.com', 'Je suis un titre', 'J ai besoin d aide pour ...'),('Neo', 'neo@gmail.com', 'Bonjour Neo TOC TOC TOC...', 'J ai besoin d aide pour ...'), ('Rachid', 'rachid@gmail.com', 'Je suis un titre', 'J ai besoin d aide pour ...'),('Morgan Junkrate', 'morgan@gmail.com', 'Je suis un titre', 'J ai besoin d aide pour ...'), ('Rachid', 'rachid@gmail.com', 'Je suis un titre', 'J ai besoin d aide pour ...'),('Neo', 'neo@gmail.com', 'Bonjour Neo TOC TOC TOC...' , 'J ai besoin d aide pour ...'), ('Rachid', 'rachid@gmail.com', 'Je suis un objet', 'J ai besoin d aide pour ...');

DROP TABLE IF EXISTS comment;

CREATE TABLE comment (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  content text NOT NULL,
  vote varchar(45) NOT NULL,
  date_creation DATETIME NOT NULL DEFAULT NOW(),
  user_id int,
  decision_id int,
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (decision_id) REFERENCES decision(id)
);

INSERT INTO comment (content, vote, date_creation, decision_id) VALUES ('Je suis un commentaire', 'Pour', '2022-09-13 12:12:23', '1'),('Je suis un deuxieme commentaire', 'Pour', '2022-11-13 12:12:23', '2'),('Je suis un troisieme commentaire', 'Pour', '2023-02-13 12:12:23','3' ), ('Je suis un quatrieme commentaire', 'Pour', '2022-10-13 12:12:23','4');

DROP TABLE IF EXISTS notification;

CREATE TABLE notification (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id int,
  decision_id int, 
  comment_id int,
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (decision_id) REFERENCES decision(id),
  FOREIGN KEY (comment_id) REFERENCES comment(id)
);

DROP TRIGGER IF EXISTS onCommentUpdate;

CREATE TRIGGER onCommentUpdate
AFTER UPDATE ON comment
FOR EACH ROW
BEGIN
  IF NEW.vote = 'contre' THEN
    UPDATE decision
    SET status_decision = 'En conflit'
    WHERE id = NEW.decision_id;
  END IF;
  IF NEW.vote = 'Pour' OR NEW.vote = 'Neutre'  AND (SELECT COUNT(*) FROM comment WHERE decision_id = NEW.decision_id AND vote = 'Contre') = 0 THEN
    UPDATE decision
    SET status_decision = 'En cours'
    WHERE id = NEW.decision_id;
  END IF;
END ;

DROP TRIGGER IF EXISTS OnCommentInsert;
CREATE TRIGGER OnCommentInsert
AFTER INSERT ON comment
FOR EACH ROW
BEGIN
  IF NEW.vote = 'Contre' THEN
    UPDATE decision
    SET status_decision = 'En conflit'
    WHERE id = NEW.decision_id;
  END IF;
END ;