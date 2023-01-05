DROP TABLE IF EXISTS user;

CREATE TABLE user (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname varchar(100) NOT NULL,
  lastname varchar(100) NOT NULL,
  email varchar(200) NOT NULL,
  city varchar(100),
  phone varchar(20),
  avatar varchar(255),
  hashedPassword varchar(100) NOT NULL,
  is_admin tinyint NOT NULL DEFAULT 0,
  date_creation DATETIME NOT NULL DEFAULT NOW() 
);

INSERT INTO user (firstname, lastname, email, city, phone, avatar, hashedPassword, is_admin, date_creation) VALUES ('Iris', 'Tracer', 'iris.tracer@gmail.com', 'Teahupo', '0606080907', 'monplusbelavatar', '12345', '1', '2022-10-13 12:12:23'),('Madeline', 'Phara', 'madeline.phara@gmail.com', 'Lyon', '0606080907', 'monplusbelavatar', '12345', '1', '2022-10-13 12:12:23'),('John', 'Doe', 'test@test.com', 'Katmandu', '0606080907', 'monplusbelavatar', '$argon2id$v=19$m=65536,t=5,p=1$cHKCeWcTAbFAoQip2FBoSQ$YEwzjtbjy/r88czZmo+Ess3AGPYvhonN2HTureWf3NY', '1', '2022-10-13 12:12:23'),('Davy', 'Mccree', 'davy.mccree@gmail.com', 'Oslo', '0606080907', 'monplusbelavatar', '12345', '1', '2022-10-13 12:12:23');

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
('Déménager à bali', '<h2 class="ql-align-center"><span style="color: rgb(230, 0, 0);">Lorem ipsum</span></h2><p><span style="color: rgb(0, 138, 0);">dolor sit amet, consectetur </span>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<span style="color: rgb(153, 51, 255);"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p>', '<h2><span style="color: rgb(0, 102, 204);">Lorem ipsum</span></h2><p><span style="background-color: rgb(255, 153, 0); color: rgb(153, 51, 255);">dolor sit amet, consectetur </span>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<span style="color: rgb(153, 51, 255);"> </span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru<span style="color: rgb(230, 0, 0);">nt mollit anim id est laborum.</span></p>', '<h2 class="ql-align-center"><strong style="color: rgb(230, 0, 0); background-color: rgb(255, 255, 204);">Lorem ipsum</strong></h2><p><span style="color: rgb(0, 71, 178);">dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p>', '<h1 class="ql-align-center"><strong style="color: rgb(153, 51, 255);"><em><u>Lorem ipsum</u></em></strong></h1><p><span style="color: rgb(136, 136, 136);">dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span><span style="color: rgb(178, 107, 0);"> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p>', '2022-10-13 12:12:23', '2022-10-13 12:12:23', '2022-10-13 12:12:23', 'Terminee','1'),
('Surfer toute la vie','<h2 class="ql-align-center"><span style="color: rgb(230, 0, 0);">Lorem ipsum</span></h2><p><span style="color: rgb(0, 138, 0);">dolor sit amet, consectetur </span>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<span style="color: rgb(153, 51, 255);"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p>', '<h2><span style="color: rgb(0, 102, 204);">Lorem ipsum</span></h2><p><span style="background-color: rgb(255, 153, 0); color: rgb(153, 51, 255);">dolor sit amet, consectetur </span>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<span style="color: rgb(153, 51, 255);"> </span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru<span style="color: rgb(230, 0, 0);">nt mollit anim id est laborum.</span></p>', '<h2 class="ql-align-center"><strong style="color: rgb(230, 0, 0); background-color: rgb(255, 255, 204);">Lorem ipsum</strong></h2><p><span style="color: rgb(0, 71, 178);">dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p>', '<h1 class="ql-align-center"><strong style="color: rgb(153, 51, 255);"><em><u>Lorem ipsum</u></em></strong></h1><p><span style="color: rgb(136, 136, 136);">dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span><span style="color: rgb(178, 107, 0);"> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p>', '2022-10-13 12:12:23', '2022-10-13 12:12:23', '2022-10-13 12:12:23', 'En cours','2'),
('Acheter un 4X4 pour poluer la planete','<h2 class="ql-align-center"><span style="color: rgb(230, 0, 0);">Lorem ipsum</span></h2><p><span style="color: rgb(0, 138, 0);">dolor sit amet, consectetur </span>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<span style="color: rgb(153, 51, 255);"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p>', '<h2><span style="color: rgb(0, 102, 204);">Lorem ipsum</span></h2><p><span style="background-color: rgb(255, 153, 0); color: rgb(153, 51, 255);">dolor sit amet, consectetur </span>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<span style="color: rgb(153, 51, 255);"> </span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru<span style="color: rgb(230, 0, 0);">nt mollit anim id est laborum.</span></p>', '<h2 class="ql-align-center"><strong style="color: rgb(230, 0, 0); background-color: rgb(255, 255, 204);">Lorem ipsum</strong></h2><p><span style="color: rgb(0, 71, 178);">dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p>', '<h1 class="ql-align-center"><strong style="color: rgb(153, 51, 255);"><em><u>Lorem ipsum</u></em></strong></h1><p><span style="color: rgb(136, 136, 136);">dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span><span style="color: rgb(178, 107, 0);"> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p>', '2022-10-13 12:12:23', '2022-10-13 12:12:23', '2022-10-13 12:12:23', 'En conflit','3'),
('Aller a tahiti','<h2 class="ql-align-center"><span style="color: rgb(230, 0, 0);">Lorem ipsum</span></h2><p><span style="color: rgb(0, 138, 0);">dolor sit amet, consectetur </span>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<span style="color: rgb(153, 51, 255);"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p>', '<h2><span style="color: rgb(0, 102, 204);">Lorem ipsum</span></h2><p><span style="background-color: rgb(255, 153, 0); color: rgb(153, 51, 255);">dolor sit amet, consectetur </span>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<span style="color: rgb(153, 51, 255);"> </span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseru<span style="color: rgb(230, 0, 0);">nt mollit anim id est laborum.</span></p>', '<h2 class="ql-align-center"><strong style="color: rgb(230, 0, 0); background-color: rgb(255, 255, 204);">Lorem ipsum</strong></h2><p><span style="color: rgb(0, 71, 178);">dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p>', '<h1 class="ql-align-center"><strong style="color: rgb(153, 51, 255);"><em><u>Lorem ipsum</u></em></strong></h1><p><span style="color: rgb(136, 136, 136);">dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span><span style="color: rgb(178, 107, 0);"> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p>', '2022-10-13 12:12:23', '2022-10-13 12:12:23', '2022-10-13 12:12:23','Non aboutie','4');

DROP TABLE IF EXISTS person_expert;

CREATE TABLE person_expert (
  user_id int,
  name varchar(100),
  decision_id int,
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (decision_id) REFERENCES decision(id)
);

DROP TABLE IF EXISTS person_concern;

CREATE TABLE person_concern (
  user_id int,
  name varchar(100),
  decision_id int,
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (decision_id) REFERENCES decision(id)
);

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
