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
('Fixation des prix', "<h3><strong style='color: rgb(0, 102, 204);'>Allez dans n’importe quel magasin de détail et vous trouverez des clients qui marchandent les prix.</strong></h3><p><br></p><p><strong>Maintenant, si le propriétaire était lui-même impliqué dans de telles décisions opérationnelles, l’entreprise irait vite à la ruine. </strong></p><p><br></p><p>Au lieu de cela, le propriétaire ou le gestionnaire donne les niveaux de prix et les niveaux de marge qui doivent être maintenus et donc la décision est prise par l’employé.</p>", "<h3><strong style='color: rgb(0, 102, 204);'>Allez dans n’importe quel magasin de détail et vous trouverez des clients qui marchandent les prix.</strong></h3><p><br></p><p><strong>Maintenant, si le propriétaire était lui-même impliqué dans de telles décisions opérationnelles, l’entreprise irait vite à la ruine. </strong></p><p><br></p><h3>Au lieu de cela, le propriétaire ou le gestionnaire donne les niveaux de prix et les niveaux de marge qui doivent être maintenus et donc la décision est prise par l’employé.</h3>", "<h3><strong style='color: rgb(0, 102, 204);'>Allez dans n’importe quel magasin de détail et vous trouverez des clients qui marchandent les prix.</strong></h3><p><br></p><p><strong>Maintenant, si le propriétaire était lui-même impliqué dans de telles décisions opérationnelles, l’entreprise irait vite à la ruine. </strong></p><p><br></p><h3>Au lieu de cela, le propriétaire ou le gestionnaire donne les niveaux de prix et les niveaux de marge qui doivent être maintenus et donc la décision est prise par l’employé.</h3>", "<h3><strong style='color: rgb(0, 102, 204);'>Allez dans n’importe quel magasin de détail et vous trouverez des clients qui marchandent les prix.</strong></h3><p><br></p><p><strong>Maintenant, si le propriétaire était lui-même impliqué dans de telles décisions opérationnelles, l’entreprise irait vite à la ruine. </strong></p><p><br></p><h3>Au lieu de cela, le propriétaire ou le gestionnaire donne les niveaux de prix et les niveaux de marge qui doivent être maintenus et donc la décision est prise par l’employé.</h3>", '2022-10-13 12:12:23', '2022-10-13 12:12:23', '2022-10-13 12:12:23', 'Terminee','3'),('Détermine le montant des remises ', "<p><strong>Dans les ventes de canal ou dans le marketing de réseau, la vente quotidienne ainsi que l’achat quotidien est si élevé en quantité,&nbsp;que les remises jouent un rôle majeur sur quelle marque le concessionnaire va pousser sur le marché. </strong></p><p><br></p><p>Par conséquent, les managers doivent disposer de toutes les informations sur les niveaux de remise actuels sur le marché et sur les remises à accorder aux distributeurs, qui sont finalement accordées par les dirigeants.</p><p><br></p><p><u> En bref, les opérations au niveau du canal doivent être gérées correctement.</u></p>", "<p><strong>Dans les ventes de canal ou dans le marketing de réseau, la vente quotidienne ainsi que l’achat quotidien est si élevé en quantité,&nbsp;que les remises jouent un rôle majeur sur quelle marque le concessionnaire va pousser sur le marché. </strong></p><p><br></p><p>Par conséquent, les managers doivent disposer de toutes les informations sur les niveaux de remise actuels sur le marché et sur les remises à accorder aux distributeurs, qui sont finalement accordées par les dirigeants.</p><p><br></p><p><u> En bref, les opérations au niveau du canal doivent être gérées correctement.</u></p>", "<p><strong>Dans les ventes de canal ou dans le marketing de réseau, la vente quotidienne ainsi que l’achat quotidien est si élevé en quantité,&nbsp;que les remises jouent un rôle majeur sur quelle marque le concessionnaire va pousser sur le marché. </strong></p><p><br></p><p>Par conséquent, les managers doivent disposer de toutes les informations sur les niveaux de remise actuels sur le marché et sur les remises à accorder aux distributeurs, qui sont finalement accordées par les dirigeants.</p><p><br></p><p><u> En bref, les opérations au niveau du canal doivent être gérées correctement.</u></p>", "<p><strong>Dans les ventes de canal ou dans le marketing de réseau, la vente quotidienne ainsi que l’achat quotidien est si élevé en quantité,&nbsp;que les remises jouent un rôle majeur sur quelle marque le concessionnaire va pousser sur le marché. </strong></p><p><br></p><p>Par conséquent, les managers doivent disposer de toutes les informations sur les niveaux de remise actuels sur le marché et sur les remises à accorder aux distributeurs, qui sont finalement accordées par les dirigeants.</p><p><br></p><p><u> En bref, les opérations au niveau du canal doivent être gérées correctement.</u></p>", '2022-10-13 12:12:23', '2022-10-13 12:12:23', '2022-10-13 12:12:23', 'En cours','3'),('Collecter des informations', "<p><strong style='background-color: rgb(204, 224, 245);'>Maintenant, c’est une tâche qui est énorme et peut avoir un grand impact dans le fonctionnement global d’une organisation. </strong></p><h3><br></h3><h3><strong>Si vous le regardez du bas vers le haut, il y a beaucoup d’informations opérationnelles également collectées, qui doivent être résumées au niveau du gestionnaire et finalement soumises au niveau du directeur.</strong></h3><p><br></p><p><span style='color: rgb(0, 138, 0);'>Les 4 ci-dessus sont les principales décisions opérationnelles qui doivent être prises tous les jours et donc sont le plus souvent externalisées ou gérées via une chaîne de commandement entre les deux.&nbsp;</span></p>", "<p><strong style='background-color: rgb(204, 224, 245);'>Maintenant, c’est une tâche qui est énorme et peut avoir un grand impact dans le fonctionnement global d’une organisation. </strong></p><h3><br></h3><h3><strong>Si vous le regardez du bas vers le haut, il y a beaucoup d’informations opérationnelles également collectées, qui doivent être résumées au niveau du gestionnaire et finalement soumises au niveau du directeur.</strong></h3><p><br></p><p><span style='color: rgb(0, 138, 0);'>Les 4 ci-dessus sont les principales décisions opérationnelles qui doivent être prises tous les jours et donc sont le plus souvent externalisées ou gérées via une chaîne de commandement entre les deux.&nbsp;</span></p>", "<p><strong style='background-color: rgb(204, 224, 245);'>Maintenant, c’est une tâche qui est énorme et peut avoir un grand impact dans le fonctionnement global d’une organisation. </strong></p><h3><br></h3><h3><strong>Si vous le regardez du bas vers le haut, il y a beaucoup d’informations opérationnelles également collectées, qui doivent être résumées au niveau du gestionnaire et finalement soumises au niveau du directeur.</strong></h3><p><br></p><p><span style='color: rgb(0, 138, 0);'>Les 4 ci-dessus sont les principales décisions opérationnelles qui doivent être prises tous les jours et donc sont le plus souvent externalisées ou gérées via une chaîne de commandement entre les deux.&nbsp;</span></p>", "<p><strong style='background-color: rgb(204, 224, 245);'>Maintenant, c’est une tâche qui est énorme et peut avoir un grand impact dans le fonctionnement global d’une organisation. </strong></p><h3><br></h3><h3><strong>Si vous le regardez du bas vers le haut, il y a beaucoup d’informations opérationnelles également collectées, qui doivent être résumées au niveau du gestionnaire et finalement soumises au niveau du directeur.</strong></h3><p><br></p><p><span style='color: rgb(0, 138, 0);'>Les 4 ci-dessus sont les principales décisions opérationnelles qui doivent être prises tous les jours et donc sont le plus souvent externalisées ou gérées via une chaîne de commandement entre les deux.&nbsp;</span></p>", '2022-10-13 12:12:23', '2022-10-13 12:12:23', '2022-10-13 12:12:23', 'En conflit','3'),('Fixation des prix', "", "", "", "", '2022-10-13 12:12:23', '2022-10-13 12:12:23', '2022-10-13 12:12:23', 'Non aboutie','4'),('Fixation des prix', "", "", "", "", '2022-10-13 12:12:23', '2022-10-13 12:12:23', '2022-10-13 12:12:23', 'Terminee','1'),('Fixation des prix', "", "", "", "", '2022-10-13 12:12:23', '2022-10-13 12:12:23', '2022-10-13 12:12:23', 'En cours','2'),('Fixation des prix', "", "", "", "", '2022-10-13 12:12:23', '2022-10-13 12:12:23', '2022-10-13 12:12:23', 'Terminee','1'),('Fixation des prix', "", "", "", "", '2022-10-13 12:12:23', '2022-10-13 12:12:23', '2022-10-13 12:12:23', 'Non aboutie','3'),('Fixation des prix', "", "", "", "", '2022-10-13 12:12:23', '2022-10-13 12:12:23', '2022-10-13 12:12:23', 'Terminee','1');


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
