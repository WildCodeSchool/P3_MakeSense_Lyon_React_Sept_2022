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

INSERT INTO user (firstname, lastname, email, city, phone, avatar, hashedPassword, is_admin, date_creation) VALUES ('Iris', 'Tracer', 'iris.tracer@gmail.com', 'Teahupo', '0636958474', 'monplusbelavatariris.jpg', '$argon2id$v=19$m=65536,t=5,p=1$w74Il7Z5LSbJeNQQPo031w$19FI3i4qKtfenAJXJNqWcc8wgHFkMyZ97ar6m8wmIeI', '1', '2022-10-13 12:12:23'),('Madeline', 'Phara', 'madeline@gmail.com', 'Lyon', '0789563215', 'monplusbelavatarmadeline.jpg', '$argon2id$v=19$m=65536,t=5,p=1$w74Il7Z5LSbJeNQQPo031w$19FI3i4qKtfenAJXJNqWcc8wgHFkMyZ97ar6m8wmIeI', '1', '2022-10-13 12:12:23'),
('John', 'Doe', 'john@gmail.com', 'Katmandu', '0698521463', 'monplusbelavatarjohn.jpg', '$argon2id$v=19$m=65536,t=5,p=1$w74Il7Z5LSbJeNQQPo031w$19FI3i4qKtfenAJXJNqWcc8wgHFkMyZ97ar6m8wmIeI', '1', '2022-10-13 12:12:23'),
('Davy', 'Mccree', 'davy@gmail.com', 'Oslo', '0784135974', 'monplusbelavatardavy.jpg', '$argon2id$v=19$m=65536,t=5,p=1$w74Il7Z5LSbJeNQQPo031w$19FI3i4qKtfenAJXJNqWcc8wgHFkMyZ97ar6m8wmIeI', '1', '2022-10-13 12:12:23'),
('Marion', 'Lagoth', 'marion.lagoth@gmail.com', 'Enfer', '0795623214', 'monplusbelavatariris.jpg', '$argon2id$v=19$m=65536,t=5,p=1$w74Il7Z5LSbJeNQQPo031w$19FI3i4qKtfenAJXJNqWcc8wgHFkMyZ97ar6m8wmIeI', '1', '2022-10-13 12:12:23'),
('Cloe', 'Symetra', 'cloe.symetra@gmail.com', 'Lyon', '0603265147', 'monplusbelavatarmadeline.jpg', '$argon2id$v=19$m=65536,t=5,p=1$w74Il7Z5LSbJeNQQPo031w$19FI3i4qKtfenAJXJNqWcc8wgHFkMyZ97ar6m8wmIeI', '1', '2022-10-13 12:12:23'),
('Rachid', 'Doomfist', 'doomfist@test.com', 'Katmandu', '0632147894', 'monplusbelavatarjohn.jpg', '$argon2id$v=19$m=65536,t=5,p=1$cHKCeWcTAbFAoQip2FBoSQ$YEwzjtbjy/r88czZmo+Ess3AGPYvhonN2HTureWf3NY', '1', '2022-10-13 12:12:23'),
('Morgan', 'Junkrate', 'morgan.junkrat@gmail.com', 'Oslo', '0691320590', 'monplusbelavatardavy.jpg', '$argon2id$v=19$m=65536,t=5,p=1$w74Il7Z5LSbJeNQQPo031w$19FI3i4qKtfenAJXJNqWcc8wgHFkMyZ97ar6m8wmIeI', '1', '2022-10-13 12:12:23');

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
('Fixation des prix', "<h3><strong style='color: rgb(0, 102, 204);'>Allez dans n’importe quel magasin de détail et vous trouverez des clients qui marchandent les prix.</strong></h3><p><br></p><p><strong>Maintenant, si le propriétaire était lui-même impliqué dans de telles décisions opérationnelles, l’entreprise irait vite à la ruine. </strong></p><p><br></p><p>Au lieu de cela, le propriétaire ou le gestionnaire donne les niveaux de prix et les niveaux de marge qui doivent être maintenus et donc la décision est prise par l’employé.</p>", "<h3><strong style='color: rgb(0, 102, 204);'>Allez dans n’importe quel magasin de détail et vous trouverez des clients qui marchandent les prix.</strong></h3><p><br></p><p><strong>Maintenant, si le propriétaire était lui-même impliqué dans de telles décisions opérationnelles, l’entreprise irait vite à la ruine. </strong></p><p><br></p><h3>Au lieu de cela, le propriétaire ou le gestionnaire donne les niveaux de prix et les niveaux de marge qui doivent être maintenus et donc la décision est prise par l’employé.</h3>", "<h3><strong style='color: rgb(0, 102, 204);'>Allez dans n’importe quel magasin de détail et vous trouverez des clients qui marchandent les prix.</strong></h3><p><br></p><p><strong>Maintenant, si le propriétaire était lui-même impliqué dans de telles décisions opérationnelles, l’entreprise irait vite à la ruine. </strong></p><p><br></p><h3>Au lieu de cela, le propriétaire ou le gestionnaire donne les niveaux de prix et les niveaux de marge qui doivent être maintenus et donc la décision est prise par l’employé.</h3>", "<h3><strong style='color: rgb(0, 102, 204);'>Allez dans n’importe quel magasin de détail et vous trouverez des clients qui marchandent les prix.</strong></h3><p><br></p><p><strong>Maintenant, si le propriétaire était lui-même impliqué dans de telles décisions opérationnelles, l’entreprise irait vite à la ruine. </strong></p><p><br></p><h3>Au lieu de cela, le propriétaire ou le gestionnaire donne les niveaux de prix et les niveaux de marge qui doivent être maintenus et donc la décision est prise par l’employé.</h3>", '2020-05-10 14:36:46', '2020-08-10 05:52:23', '2020-11-02 15:42:23', 'Terminee','4'), 
('Déterminer le montant des remises ', "<p><strong>Dans les ventes de canal ou dans le marketing de réseau, la vente quotidienne ainsi que l’achat quotidien est si élevé en quantité,&nbsp;que les remises jouent un rôle majeur sur quelle marque le concessionnaire va pousser sur le marché. </strong></p><p><br></p><p>Par conséquent, les managers doivent disposer de toutes les informations sur les niveaux de remise actuels sur le marché et sur les remises à accorder aux distributeurs, qui sont finalement accordées par les dirigeants.</p><p><br></p><p><u> En bref, les opérations au niveau du canal doivent être gérées correctement.</u></p>", "<p><strong>Dans les ventes de canal ou dans le marketing de réseau, la vente quotidienne ainsi que l’achat quotidien est si élevé en quantité,&nbsp;que les remises jouent un rôle majeur sur quelle marque le concessionnaire va pousser sur le marché. </strong></p><p><br></p><p>Par conséquent, les managers doivent disposer de toutes les informations sur les niveaux de remise actuels sur le marché et sur les remises à accorder aux distributeurs, qui sont finalement accordées par les dirigeants.</p><p><br></p><p><u> En bref, les opérations au niveau du canal doivent être gérées correctement.</u></p>", "<p><strong>Dans les ventes de canal ou dans le marketing de réseau, la vente quotidienne ainsi que l’achat quotidien est si élevé en quantité,&nbsp;que les remises jouent un rôle majeur sur quelle marque le concessionnaire va pousser sur le marché. </strong></p><p><br></p><p>Par conséquent, les managers doivent disposer de toutes les informations sur les niveaux de remise actuels sur le marché et sur les remises à accorder aux distributeurs, qui sont finalement accordées par les dirigeants.</p><p><br></p><p><u> En bref, les opérations au niveau du canal doivent être gérées correctement.</u></p>", "<p><strong>Dans les ventes de canal ou dans le marketing de réseau, la vente quotidienne ainsi que l’achat quotidien est si élevé en quantité,&nbsp;que les remises jouent un rôle majeur sur quelle marque le concessionnaire va pousser sur le marché. </strong></p><p><br></p><p>Par conséquent, les managers doivent disposer de toutes les informations sur les niveaux de remise actuels sur le marché et sur les remises à accorder aux distributeurs, qui sont finalement accordées par les dirigeants.</p><p><br></p><p><u> En bref, les opérations au niveau du canal doivent être gérées correctement.</u></p>", '2021-09-25 12:05:43', '2021-11-20 19:19:58', '2021-12-05 20:25:23', 'En cours','3'),
('Collecter des informations', "<p><strong style='background-color: rgb(204, 224, 245);'>Maintenant, c’est une tâche qui est énorme et peut avoir un grand impact dans le fonctionnement global d’une organisation. </strong></p><h3><br></h3><h3><strong>Si vous le regardez du bas vers le haut, il y a beaucoup d’informations opérationnelles également collectées, qui doivent être résumées au niveau du gestionnaire et finalement soumises au niveau du directeur.</strong></h3><p><br></p><p><span style='color: rgb(0, 138, 0);'>Les 4 ci-dessus sont les principales décisions opérationnelles qui doivent être prises tous les jours et donc sont le plus souvent externalisées ou gérées via une chaîne de commandement entre les deux.&nbsp;</span></p>", "<p><strong style='background-color: rgb(204, 224, 245);'>Maintenant, c’est une tâche qui est énorme et peut avoir un grand impact dans le fonctionnement global d’une organisation. </strong></p><h3><br></h3><h3><strong>Si vous le regardez du bas vers le haut, il y a beaucoup d’informations opérationnelles également collectées, qui doivent être résumées au niveau du gestionnaire et finalement soumises au niveau du directeur.</strong></h3><p><br></p><p><span style='color: rgb(0, 138, 0);'>Les 4 ci-dessus sont les principales décisions opérationnelles qui doivent être prises tous les jours et donc sont le plus souvent externalisées ou gérées via une chaîne de commandement entre les deux.&nbsp;</span></p>", "<p><strong style='background-color: rgb(204, 224, 245);'>Maintenant, c’est une tâche qui est énorme et peut avoir un grand impact dans le fonctionnement global d’une organisation. </strong></p><h3><br></h3><h3><strong>Si vous le regardez du bas vers le haut, il y a beaucoup d’informations opérationnelles également collectées, qui doivent être résumées au niveau du gestionnaire et finalement soumises au niveau du directeur.</strong></h3><p><br></p><p><span style='color: rgb(0, 138, 0);'>Les 4 ci-dessus sont les principales décisions opérationnelles qui doivent être prises tous les jours et donc sont le plus souvent externalisées ou gérées via une chaîne de commandement entre les deux.&nbsp;</span></p>", "<p><strong style='background-color: rgb(204, 224, 245);'>Maintenant, c’est une tâche qui est énorme et peut avoir un grand impact dans le fonctionnement global d’une organisation. </strong></p><h3><br></h3><h3><strong>Si vous le regardez du bas vers le haut, il y a beaucoup d’informations opérationnelles également collectées, qui doivent être résumées au niveau du gestionnaire et finalement soumises au niveau du directeur.</strong></h3><p><br></p><p><span style='color: rgb(0, 138, 0);'>Les 4 ci-dessus sont les principales décisions opérationnelles qui doivent être prises tous les jours et donc sont le plus souvent externalisées ou gérées via une chaîne de commandement entre les deux.&nbsp;</span></p>", '2022-06-13 06:59:03', '2022-09-15 08:24:29', '2022-09-10 09:51:13', 'En conflit','2'),
('Mettre en place un management', "<p>Le management opérationnel permet d’assurer la mise en œuvre du management stratégique. Ensemble, ils permettent d’améliorer les performances de l’entreprise. La part opérationnelle obtient généralement des&nbsp;<strong>résultats rapides</strong>. </p><p><br></p><p><strong style='color: rgb(0, 102, 204);'>Les actions menées sont réversibles. Ce qui n’est pas le cas pour la partie stratégique. Ces deux niveaux de management sont donc complémentaires.</strong></p>", "<p>Le management opérationnel permet d’assurer la mise en œuvre du management stratégique. Ensemble, ils permettent d’améliorer les performances de l’entreprise. La part opérationnelle obtient généralement des&nbsp;<strong>résultats rapides</strong>. </p><p><br></p><p><strong style='color: rgb(0, 102, 204);'>Les actions menées sont réversibles. Ce qui n’est pas le cas pour la partie stratégique. Ces deux niveaux de management sont donc complémentaires.</strong></p>", "<p>Le management opérationnel permet d’assurer la mise en œuvre du management stratégique. Ensemble, ils permettent d’améliorer les performances de l’entreprise. La part opérationnelle obtient généralement des&nbsp;<strong>résultats rapides</strong>. </p><p><br></p><p><strong style='color: rgb(0, 102, 204);'>Les actions menées sont réversibles. Ce qui n’est pas le cas pour la partie stratégique. Ces deux niveaux de management sont donc complémentaires.</strong></p>", "<p><strong>Il s’agit de mobiliser et de répartir les ressources qui sont nécessaires à la réalisation de l’objectif et de réussir à coordonner les différentes actions à mener entre les membres de l’équipe. Le but final étant d’améliorer les performances de l’entreprise.&nbsp;</strong></p><p><br></p><p><u style='color: rgb(0, 102, 204);'>Pour mieux suivre ces améliorations, les entreprises utilisent alors des indicateurs de performance. Ces derniers permettent de connaître l’état de progression, ou de régression, et quel facteur doit être amélioré.&nbsp;</u></p><p><br></p><p>Pour pouvoir réaliser ces objectifs, il est nécessaire d’avoir de bonnes ressources opérationnelles. C’est-à-dire du matériel adéquat, des collaborateurs formés et compétents, des installations fonctionnelles, des locaux où sont réalisées les activités ou la production des produits.&nbsp;</p>", '2022-08-28 12:12:23', '2022-10-29 19:12:23', '2022-11-08 10:42:23', 'En conflit','4'),
('Changer la structure de l’entreprise', "<p><strong style='color: rgb(0, 102, 204);'>La structure de l’entreprise traduit ses principes d’organisation et d’exercice du pouvoir de décision. </strong></p><p><br></p><p><strong>Schématiquement, le pouvoir de décision peut être détenu par un petit nombre de dirigeants au sommet de la hiérarchie,</strong> il s’agit alors d’une structure centralisée, ou, au contraire, être réparti au sein des divisions opérationnelles, il s’agit, dans ce cas, d’une structure décentralisée</p>", "<ul><li><strong>Une structure centralisée&nbsp;</strong>favorise la cohérence des décisions car elles sont prises par un petit nombre de décideurs, mais l’efficacité des solutions est réduite du fait du manque de concertation avec la base écartée du processus.</li></ul><p><br></p><ul><li><strong>Une structure décentralisée</strong>&nbsp;permet une meilleure pertinence des décisions, prises par des décideurs proches des problèmes à résoudre et mises en œuvre par des salariés plus impliqués, mais ces décisions risquent de s’écarter rapidement de l’objectif commun, ce qui nécessite la mise en place de procédures de contrôle efficaces.</li></ul>", "<ul><li><strong>Une structure centralisée&nbsp;</strong>favorise la cohérence des décisions car elles sont prises par un petit nombre de décideurs, mais l’efficacité des solutions est réduite du fait du manque de concertation avec la base écartée du processus.</li></ul><p><br></p><ul><li><strong>Une structure décentralisée</strong>&nbsp;permet une meilleure pertinence des décisions, prises par des décideurs proches des problèmes à résoudre et mises en œuvre par des salariés plus impliqués, mais ces décisions risquent de s’écarter rapidement de l’objectif commun, ce qui nécessite la mise en place de procédures de contrôle efficaces.</li></ul>", "<ul><li><strong>Une structure centralisée&nbsp;</strong>favorise la cohérence des décisions car elles sont prises par un petit nombre de décideurs, mais l’efficacité des solutions est réduite du fait du manque de concertation avec la base écartée du processus.</li></ul><p><br></p><ul><li><strong>Une structure décentralisée</strong>&nbsp;permet une meilleure pertinence des décisions, prises par des décideurs proches des problèmes à résoudre et mises en œuvre par des salariés plus impliqués, mais ces décisions risquent de s’écarter rapidement de l’objectif commun, ce qui nécessite la mise en place de procédures de contrôle efficaces.</li></ul>", '2022-06-29 10:42:23', '2022-08-30 12:12:23', '2022-09-21 16:12:53', 'Non aboutie','1'),
('Exposer les risques potentiels', "<h4><strong style='color: rgb(0, 102, 204);'>a) Le risque de liquidité</strong></h4><p>Le placement doit être facilement convertible en monnaie, c’est-à-dire être liquide. S’il a un besoin de trésorerie, l’investisseur doit pouvoir récupérer rapidement sa mise pour ne pas risquer d’être insolvable.</p><p><br></p><h4><strong style='color: rgb(0, 102, 204);'>b) Le risque de contrepartie</strong></h4><p>Le risque de contrepartie est le risque de défaut de paiement du débiteur. Le risque de défaillance de l’emprunteur est limité par la présence d’agences de notation (agences de rating) qui indiquent le niveau de risque de certains titres achetés par les investisseurs.</p><p><br></p><h4><strong style='color: rgb(0, 102, 204);'>c) Le risque de revenu</strong></h4><p>La baisse du revenu résulte des variations des cours boursiers. Deux types de risques existent sur les marchés financiers :</p><ol><li>Le risque du titre correspond à l’imprévisibilité du sens et de l’ampleur des variations du prix d’une valeur. Il peut fluctuer, à la hausse ou à la baisse, en fonction de l’offre et de la demande spécifiques au titre.</li><li>Le risque du marché résulte de la tendance de l’ensemble des valeurs. Celle-ci se mesure par un indice (exemple : le CAC 40 du marché de Paris).</li></ol>", "<p>La possession d’un portefeuille contenant plusieurs valeurs diversifiées limite le risque du titre. <strong style='color: rgb(0, 102, 204);'>En moyenne, les fluctuations se compensent et le risque lié aux évolutions erratiques d’un titre est annulé. Le seul risque qui subsiste pour l’investisseur est le risque de la tendance générale du marché.</strong></p>", "<p>La possession d’un portefeuille contenant plusieurs valeurs diversifiées limite le risque du titre. <strong style='color: rgb(0, 102, 204);'>En moyenne, les fluctuations se compensent et le risque lié aux évolutions erratiques d’un titre est annulé. Le seul risque qui subsiste pour l’investisseur est le risque de la tendance générale du marché.</strong></p>", "<p><strong>La possession d’un portefeuille contenant plusieurs valeurs diversifiées limite le risque du titre. En moyenne, les fluctuations se compensent et le risque lié aux évolutions erratiques d’un titre est annulé.</strong> Le seul risque qui subsiste pour l’investisseur est le risque de la tendance générale du marché.</p>", '2022-10-08 11:32:23', '2022-10-16 12:12:23', '2022-11-25 20:12:23', 'En cours','2'),
('Produire un spot radio', "<h3><strong style='color: rgb(0, 138, 0);'>Le spot met en œuvre un concept, une idée, qui valorise l’argumentaire en le mettant en situation de manière pertinente et inventive : une rencontre inattendue, un monologue burlesque…</strong></h3><p><br></p><h3><strong>1. L’écriture du script</strong></h3><p><br></p><p><strong style='color: rgb(0, 102, 204);'>Le script peut être une saynète ou un message, avec une voix in ou une voix off, avec une simple ou une double énonciation.</strong> Le dialogue permet à l’auditeur de partager une tranche de vie, un moment réaliste entre plusieurs personnes. Le monologue crée une intimité entre l’auditeur et la voix, une plus grande proximité.</p><p><br></p><h3><strong>2. Les sons</strong></h3><p>Il existe deux types de sons :</p><ul><li>Les sons intradiégétiques, dont la source est intégrée a la narration, qui sont motivés par la narration</li></ul><p><strong>Exemple&nbsp;</strong>:&nbsp;<em>bruit de vaisselle cassée pour une querelle domestique.</em></p><ul><li>Les sons extradiégétiques, dont la source est extérieure a la narration.</li></ul><p><strong>Exemple</strong>&nbsp;:&nbsp;<em>fond sonore, voix off.</em></p><p><br></p><h3><strong>3. La durée</strong></h3><p><br></p><p>La proposition est chronométrée précisément avec pauses et rythme et les temps sont indiqués en regard du texte. On compte généralement deux a trois mots par seconde : une centaine de mots au maximum est attendue.</p>", "<p><strong style='color: rgb(240, 102, 102);'>La production d’un spot radio doit prendre en compte diverses contraintes :</strong></p><p><br></p><ul><li>Contrainte de temps (un spot de durée moyenne n’excède pas 30 secondes) ; le rythme de la communication radiophonique, très rapide, multiplie les sollicitations auprès d’un public volatil ;</li><li>contrainte de clarté : le message doit être concis, aller à l’essentiel, car l’écoute des auditeurs est flottante ;</li><li>contrainte de reconnaissance : il faut créer une identité sonore audible au milieu de la cacophonie radiophonique ;</li><li>contrainte phatique il faut susciter l’écoute, l’intérêt. Certaines pratiques sont à éviter.</li><li><br></li></ul><p><strong>Exemple&nbsp;</strong>:<em>&nbsp;bruits à éviter les bruits d’accident car l’écoute de la radio est fréquente en voiture.</em></p>", "<p><strong style='color: rgb(240, 102, 102);'>La production d’un spot radio doit prendre en compte diverses contraintes :</strong></p><p><br></p><ul><li>Contrainte de temps (un spot de durée moyenne n’excède pas 30 secondes) ; le rythme de la communication radiophonique, très rapide, multiplie les sollicitations auprès d’un public volatil ;</li><li>contrainte de clarté : le message doit être concis, aller à l’essentiel, car l’écoute des auditeurs est flottante ;</li><li>contrainte de reconnaissance : il faut créer une identité sonore audible au milieu de la cacophonie radiophonique ;</li><li>contrainte phatique il faut susciter l’écoute, l’intérêt. Certaines pratiques sont à éviter.</li><li><br></li></ul><p><strong>Exemple&nbsp;</strong>:<em>&nbsp;bruits à éviter les bruits d’accident car l’écoute de la radio est fréquente en voiture.</em></p>", "<p><strong style='color: rgb(0, 71, 178);'>L’écriture est de style oral : phrases courtes (pas plus de 20 mots), facilement mémorisables et simples. Les tournures passives sont à éviter.</strong></p><p>Certains passages, comme le slogan ou la promesse, peuvent jouer sur la musicalité des mots</p><p><br></p><p><strong>Exemple :&nbsp;</strong>allitération : «&nbsp;Du bon, du beau, Dubonnet.&nbsp;» Assonance : «&nbsp;Un petit pois chez soi&nbsp;».</p><p>Ils jouent également sur les rythmes.</p><p><br></p><p><strong>Exemple</strong>&nbsp;:&nbsp;<em>rythme binaire : «&nbsp;Perrier, c’est fou !&nbsp;» Chiasme : «&nbsp;La rose est la reine des fleurs et la fleur des reines.&nbsp;» Anaphore : «&nbsp;C’est beau, c’est bon, c’est bio.&nbsp;»</em></p><p>Parfois, ils sont mis en musique, chantés, scandés.</p>", '2023-01-01 13:42:23', '2023-02-03 12:12:23', '2023-02-08 23:48:23', 'Terminee','1'),
("Mettre en place des outils de fidélisation", "Il est moins couteux de fidéliser les clients existants que de prospecter pour en acquérir de nouveaux. De plus, un client connu permet à l’agence d’améliorer sa propre notoriété et son image vis-a-vis des clients potentiels.","Il est moins couteux de fidéliser les clients existants que de prospecter pour en acquérir de nouveaux. De plus, un client connu permet à l’agence d’améliorer sa propre notoriété et son image vis-a-vis des clients potentiels.
Chaque client représente donc une source de progression du chiffre d’affaires présent et futur. La difficulté pour une agence est donc de conserver les bons clients.
Exemple : l’agence en conseil de communication, Globale Couleur Citron, a développé un pôle « sciences du vivant » pour capter et fidéliser ses clients, ce qui lui permet de capter et de conserver les clients E. Leclerc et Mercedes depuis 2017.","Il est moins couteux de fidéliser les clients existants que de prospecter pour en acquérir de nouveaux. De plus, un client connu permet à l’agence d’améliorer sa propre notoriété et son image vis-a-vis des clients potentiels.
Chaque client représente donc une source de progression du chiffre d’affaires présent et futur. La difficulté pour une agence est donc de conserver les bons clients.
Exemple : l’agence en conseil de communication, Globale Couleur Citron, a développé un pôle « sciences du vivant » pour capter et fidéliser ses clients, ce qui lui permet de capter et de conserver les clients E. Leclerc et Mercedes depuis 2017.","Il est moins couteux de fidéliser les clients existants que de prospecter pour en acquérir de nouveaux. De plus, un client connu permet à l’agence d’améliorer sa propre notoriété et son image vis-a-vis des clients potentiels.
Chaque client représente donc une source de progression du chiffre d’affaires présent et futur. La difficulté pour une agence est donc de conserver les bons clients.
Exemple : l’agence en conseil de communication, Globale Couleur Citron, a développé un pôle « sciences du vivant » pour capter et fidéliser ses clients, ce qui lui permet de capter et de conserver les clients E. Leclerc et Mercedes depuis 2017.",'2022-04-07 12:12:23', '2022-05-06 12:58:03', '2022-05-30 21:12:23', 'En cours','3'),
("L’animation du réseau des prestataires", "La mise en œuvre d’un projet de communication suppose la mobilisation de compétences, ressources matérielles et techniques diverses. Pour répondre à ces besoins, annonceurs et agences conseils en communication ont souvent recours à des ressources extérieures, des entreprises spécialisées. L’ensemble de ces prestataires constitue un réseau qui s’entretient et s’enrichit au fil des projets.","Un prestataire fournit à l’annonceur ou à l’agence un service, une expertise qu’ils ne sont pas en mesure d’apporter eux-mêmes pour des raisons de manque de compétences, de temps ou de moyens matériels. La réflexion sur la nécessité de faire appel a des compétences externes et la sélection des prestataires sont des étapes clés dans la mise en œuvre d’un projet de communication. La responsabilité en incombe au chef de projet ou à l’un de ses assistants, qui sera alors en position d’acheteur. Très nombreux, les prestataires interviennent dans différents secteurs d’activité.","Un prestataire fournit à l’annonceur ou à l’agence un service, une expertise qu’ils ne sont pas en mesure d’apporter eux-mêmes pour des raisons de manque de compétences, de temps ou de moyens matériels. La réflexion sur la nécessité de faire appel a des compétences externes et la sélection des prestataires sont des étapes clés dans la mise en œuvre d’un projet de communication. La responsabilité en incombe au chef de projet ou à l’un de ses assistants, qui sera alors en position d’acheteur. Très nombreux, les prestataires interviennent dans différents secteurs d’activité.","La recherche et l’identification des prestataires consistent à mettre en place une veille informationnelle (sourcing) ayant pour objectif de repérer les prestataires qui collaboreront au projet de communication. Diverses sources sont consultées : les annuaires professionnels, les sites Internet, la presse spécialisée, les salons professionnels, les recommandations d’autres professionnels du secteur, l’étude des offres spontanées de prestataires.",'2022-10-13 12:12:23', '2022-08-13 23:14:53', '2022-11-01 15:42:23', 'Terminee','4');


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

INSERT INTO message_help (username, email, objet, content) VALUES ('Morgan Junkrate', 'morgan.j@gmail.com', 'Je souhaite changer mon email', 'Bonjour est-il possible de changer mon adresse email ?'), ('Rachid Hami', 'rachid.hm@gmail.com', 'Comment supprimer mon compte', 'Bonjour, pouvez-vous supprimer mon compte'),('Marion Pierce', 'marpierce69@gmail.com', 'Supprimer ma décision', 'J ai besoin d aide pour supprimer ma décision'), ('Chloé Symetra', 'chloé.S@gmail.com', 'Problème connexion', 'Bonjour depuis ce matin je ne peux pas me connecter'),('Davy Mccree', 'davy42@gmail.com', 'Problème mot de passe', 'Bonjour, je ne retrouve plus mon mot de passe. Comment faire ?'), ('Jane Tracer', 'i.tracer@gmail.com', 'Passage en mode admin', 'Comme convenu est-il possible de me passer en mode admin?'),('John Doe', 'john@gmail.com', 'Passer Iris en mode admin' , 'Bonjour est-il possible de mettre Iris en admin');

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

INSERT INTO comment (content, vote, date_creation, decision_id) VALUES ('Je suis un commentaire', 'Pour', '2023-01-03 18:12:23', '1'),('Je suis un deuxieme commentaire', 'Pour', '2022-06-13 17:12:20', '2'),('Je suis un troisieme commentaire', 'Pour', '2023-02-13 15:03:23','3' ), ('Je suis un quatrieme commentaire', 'Pour', '2022-08-13 14:55:33','4');

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