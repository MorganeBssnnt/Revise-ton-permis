const QUESTIONS_BANK = [
  // --- SÉCURITÉ ROUTIÈRE ---
  {
    question: "Pourquoi doit-on régler la hauteur des feux ?",
    options: ["Pour économiser de l'énergie", "Pour ne pas éblouir les autres usagers", "Pour améliorer sa propre visibilité"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Pourquoi est-il préférable d'utiliser un liquide lave-glace spécial en hiver ?",
    options: ["Pour mieux nettoyer le pare-brise", "Pour éviter le gel du liquide", "Pour protéger la pompe lave-glace"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Quel est l'intérêt de la position « nuit » du rétroviseur intérieur ?",
    options: ["Améliorer la vision nocturne du conducteur", "Réduire la consommation électrique", "Ne pas être ébloui par les feux du véhicule suiveur"],
    correct: 2, category: "Sécurité routière"
  },
  {
    question: "Citez un endroit où l'on peut trouver les pressions préconisées pour les pneumatiques.",
    options: ["Dans le carnet de révision du garagiste", "Sur une plaque sur une portière ou dans la notice d'utilisation", "Sur l'étiquette du fabricant du pneu"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Comment détecter l'usure des essuie-glaces en circulation ?",
    options: ["En vérifiant leur ancienneté au carnet d'entretien", "En cas de pluie, lorsqu'ils laissent des traces sur le pare-brise", "En touchant la gomme avec le doigt avant de partir"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Quelles sont les précautions à prendre en cas d'installation d'un porte-vélo ?",
    options: ["Fixer le porte-vélo uniquement sur le coffre", "La plaque d'immatriculation et les feux doivent rester visibles", "Rouler à vitesse réduite uniquement sur autoroute"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "En cas de panne ou d'accident, quel autre accessoire de sécurité est obligatoire (en plus du gilet) ?",
    options: ["Un extincteur homologué", "Le triangle de pré-signalisation", "Une lampe de poche réglementaire"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Quelle est la conséquence d'un niveau insuffisant du liquide de frein ?",
    options: ["Une surchauffe du moteur", "Une perte d'efficacité du freinage", "Une détérioration des pneus"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Quels sont les deux autres documents obligatoires à présenter lors d'un contrôle, en plus du certificat d'immatriculation ?",
    options: ["Le contrôle technique et le carnet d'entretien", "L'attestation d'assurance et le permis de conduire", "Le certificat de conformité et l'attestation d'assurance"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Quel est le risque de circuler avec des balais d'essuie-glace défectueux ?",
    options: ["Un risque de rayer le pare-brise", "Une mauvaise visibilité en cas d'intempéries", "Une surconsommation d'électricité"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Quelles sont les précautions à prendre lors du remplissage du réservoir ?",
    options: ["Couper la radio et ouvrir les fenêtres", "Arrêter le moteur, ne pas fumer, ne pas téléphoner", "Maintenir le moteur au ralenti pour éviter le blocage"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Quel est le danger si l'on complète le niveau du liquide de refroidissement lorsque le moteur est chaud ?",
    options: ["Un risque de détérioration du bocal", "Un risque de brûlure", "Un risque de casse moteur immédiate"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Quelle peut être la conséquence d'une panne de dégivrage de la lunette arrière ?",
    options: ["Un risque de surchauffe de la batterie", "Une insuffisance ou une absence de visibilité vers l'arrière", "Un déclenchement intempestif du régulateur de vitesse"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Quelle est la signification d'un clignotement plus rapide ?",
    options: ["Le clignotant est en mode urgence", "Le non-fonctionnement de l'une des ampoules", "La batterie est presque déchargée"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Quelles sont les conditions à respecter pour contrôler le niveau d'huile ?",
    options: ["Moteur chaud et véhicule en montée", "Moteur froid et sur un terrain plat", "Moteur en marche pendant au moins 2 minutes"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Dans quels cas utilise-t-on les feux de brouillard arrière ?",
    options: ["Par temps de forte pluie et la nuit", "Par temps de brouillard et neige", "Par temps nuageux et en tunnel"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "À partir de quel taux d'alcoolémie, en période de permis probatoire, est-on en infraction ?",
    options: ["0,5 g/l, comme pour tous les conducteurs", "0,8 g/l, soit environ 2 verres", "0,2 g/l, soit 0 verre car dès le 1er verre ce seuil peut être dépassé"],
    correct: 2, category: "Sécurité routière"
  },
  {
    question: "Dans quels cas doit-on utiliser les feux de détresse ?",
    options: ["Lors d'un croisement en virage serré", "En cas de panne, d'accident ou de ralentissement important", "Lorsqu'on s'arrête brièvement en double file"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Pourquoi est-il important de bien régler son volant ? (citez un exemple)",
    options: ["Pour réduire la fatigue musculaire uniquement", "Pour le confort de conduite et l'accessibilité aux commandes", "Pour améliorer la réception des signaux du GPS"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Citez un cas d'utilisation de l'appel lumineux.",
    options: ["Pour indiquer qu'on va tourner à droite", "Pour avertir de son approche ou en cas de danger", "Pour signaler qu'on souhaite s'arrêter"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Citez deux éléments complémentaires permettant un désembuage efficace.",
    options: ["Les essuie-glaces et le régulateur de vitesse", "La commande de vitesse de ventilation et la climatisation", "Le chauffage des sièges et la recirculation d'air"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Quel est le principal risque d'un manque d'huile moteur ?",
    options: ["Une consommation excessive de carburant", "Un risque de détérioration ou de casse du moteur", "Une perte d'efficacité du freinage"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Qu'est-ce qui peut provoquer la décharge de la batterie, moteur éteint ?",
    options: ["Un pneumatique sous-gonflé", "Les feux ou accessoires électriques en fonctionnement", "Un niveau d'huile insuffisant"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Quel est le risque de circuler avec un frein de parking mal desserré ?",
    options: ["Un risque de blocage de la direction", "Une dégradation du système de freinage", "Une perte de puissance du moteur"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Quelles sont les conséquences d'un mauvais réglage des feux de croisement ?",
    options: ["Un risque de surchauffe des phares", "Une mauvaise vision vers l'avant et un risque d'éblouissement des autres usagers", "Une détérioration prématurée des ampoules"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Quelle est la conséquence d'une température trop élevée du liquide de refroidissement ?",
    options: ["Une baisse de pression des pneus", "Une surchauffe ou une casse moteur", "Un dysfonctionnement de la direction assistée"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Quelle est l'utilité des dispositifs réfléchissants ?",
    options: ["Indiquer le gabarit du véhicule dans les tunnels", "Rendre visible le véhicule la nuit", "Améliorer l'aérodynamisme du véhicule"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Quelle précaution prendre pour que les enfants à l'arrière ne puissent pas ouvrir leur portière ?",
    options: ["Verrouiller les portières avec la télécommande centrale", "Actionner la sécurité enfant sur les deux portières arrière", "Installer les enfants côté conducteur uniquement"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "À quelle distance les feux de position doivent-ils être visibles par temps clair ?",
    options: ["À 50 mètres", "À 100 mètres", "À 150 mètres"],
    correct: 2, category: "Sécurité routière"
  },
  {
    question: "Qu'est-ce que l'aquaplanage et quelle peut être sa conséquence ?",
    options: ["Un patinage des roues motrices pouvant endommager la boîte de vitesse", "La présence d'un film d'eau entre le pneu et la chaussée pouvant entraîner une perte de contrôle", "Un blocage du frein de parking dû à l'humidité"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Comment désactiver rapidement le régulateur de vitesse sans actionner sa commande ?",
    options: ["En réduisant la vitesse à moins de 50 km/h", "En appuyant sur la pédale de frein ou d'embrayage", "En coupant le contact puis en le rallumant"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Dans quel cas peut-on utiliser l'avertisseur sonore en agglomération ?",
    options: ["Pour saluer un autre conducteur", "En cas de danger immédiat", "Pour signaler qu'on double un cycliste"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Dans quelle situation doit-on désactiver l'airbag du passager avant ?",
    options: ["Lorsqu'un passager adulte de petite taille est installé", "Lors du transport d'un enfant à l'avant dans un siège auto dos à la route", "Lorsqu'on roule sur une route avec des nids-de-poule"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "À quelle fréquence est-il préconisé de vérifier la pression des pneumatiques ?",
    options: ["Tous les 6 mois et avant un long trajet", "Chaque mois et avant chaque long trajet", "Uniquement avant les révisions annuelles"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "En règle générale, à partir de quel âge un enfant peut-il être installé sur le siège passager avant ?",
    options: ["À partir de 12 ans", "À partir de 10 ans", "À partir de 8 ans"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Peut-on utiliser les feux de brouillard arrière par forte pluie ?",
    options: ["Oui, c'est recommandé dans ce cas", "Non, ils sont réservés au brouillard et à la neige", "Oui, mais uniquement sur autoroute"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Quelles sont les deux utilités des feux de recul ?",
    options: ["Indiquer le stationnement et protéger les piétons", "Éclairer la zone de recul la nuit et avertir les autres usagers de la manœuvre", "Signaler un dépassement et protéger contre les chocs"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Quelle est l'utilité de l'appui-tête du siège conducteur ?",
    options: ["Améliorer le confort pour les longs trajets", "Retenir le mouvement de la tête en cas de choc et limiter les blessures", "Faciliter le réglage de la position de conduite"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Quelle est la conséquence en cas de panne des feux de stop ?",
    options: ["Une amende automatique au prochain contrôle technique", "Un manque d'information pour les usagers suiveurs et un risque de collision", "Une perte d'efficacité du freinage d'urgence"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Quelle est la différence entre un voyant orange et un voyant rouge ?",
    options: ["Le rouge indique un problème moteur, l'orange un problème électrique", "Le rouge signale une anomalie ou un danger, l'orange un élément important à surveiller", "Le rouge s'allume au démarrage, l'orange en roulant"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Quel est le risque d'une mauvaise fermeture du capot en roulant ?",
    options: ["Une augmentation de la consommation de carburant", "Un risque d'ouverture du capot pouvant entraîner un accident", "Une détérioration des essuie-glaces avant"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Quel est le principal risque d'une absence de liquide lave-glace ?",
    options: ["Un risque de surchauffe de la pompe", "Une mauvaise visibilité", "Un gel du circuit de refroidissement"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Quel est le risque de maintenir les feux de route lors d'un croisement ?",
    options: ["Endommager la batterie du véhicule", "Un risque d'éblouissement des autres usagers", "Réduire la portée des feux de croisement"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Quelle est l'utilité des feux diurnes ?",
    options: ["Remplacer les feux de croisement la nuit", "Rendre le véhicule plus visible le jour", "Faciliter la conduite par temps de brouillard"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "En cas d'accident, dans quel délai le constat amiable doit-il être transmis à l'assureur ?",
    options: ["2 jours ouvrables", "5 jours", "10 jours calendaires"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Utilise-t-on le triangle de pré-signalisation sur autoroute ?",
    options: ["Oui, à 100 m du véhicule en panne", "Non", "Oui, uniquement si on n'a pas de gilet"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Quelles sont les conséquences en cas de panne d'un feu de croisement ?",
    options: ["Une détérioration du circuit électrique", "Une mauvaise visibilité et le risque d'être confondu avec un deux-roues", "Un déclenchement automatique des feux de détresse"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Quelle est l'utilité d'un limiteur de vitesse ?",
    options: ["Maintenir une vitesse minimale en côte", "Ne pas dépasser la vitesse programmée par le conducteur", "Adapter automatiquement la vitesse aux panneaux"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Quelles sont les conséquences en cas de panne d'un feu de position arrière ?",
    options: ["Une perte d'efficacité des feux de stop", "Être mal vu et un risque de collision", "Un dysfonctionnement des clignotants"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Lorsqu'on transporte un poids important dans le coffre, quelles précautions prendre ?",
    options: ["Réduire la vitesse maximale et éviter l'autoroute", "Augmenter la pression des pneumatiques et régler la hauteur des feux avants", "Activer le mode ECO et couper la climatisation"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Peut-on fixer tous les sièges enfant sur des attaches de type Isofix ?",
    options: ["Oui, tous les sièges enfant récents sont compatibles", "Non, uniquement ceux compatibles avec ce type d'attache", "Oui, depuis 2015 tous les sièges sont compatibles"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Quels sont les risques de circuler avec des objets sur la plage arrière ?",
    options: ["Un risque de rayure de la lunette arrière", "Une mauvaise visibilité et un risque de projection lors d'un freinage brusque", "Un déclenchement des airbags arrière"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Pour un capot s'ouvrant depuis l'avant, quelle est l'utilité du dispositif de sécurité ?",
    options: ["Empêcher le capot de vibrer à grande vitesse", "Empêcher l'ouverture du capot en circulation en cas de mauvais verrouillage", "Protéger le moteur des chocs frontaux"],
    correct: 1, category: "Sécurité routière"
  },
  {
    question: "Quel peut être le risque de maintenir le recyclage de l'air de manière prolongée ?",
    options: ["Une surconsommation de carburant", "Un risque de mauvaise visibilité par l'apparition de buée sur les vitres", "Un endommagement du filtre à air"],
    correct: 1, category: "Sécurité routière"
  },
  // --- PREMIERS SECOURS ---
  {
    question: "Comment et pourquoi protéger une zone de danger en cas d'accident de la route ?",
    options: [
      "En appelant d'abord la police, puis en restant dans son véhicule",
      "En délimitant clairement et largement la zone de façon visible pour protéger les victimes et éviter un sur-accident",
      "En plaçant le triangle uniquement devant l'accident"
    ],
    correct: 1, category: "Premiers secours"
  },
  {
    question: "Quels comportements adopter en cas de diffusion du signal d'alerte du SAIP ?",
    options: [
      "Quitter immédiatement les lieux et appeler les proches",
      "Se mettre en sécurité, s'informer via les médias officiels et respecter les consignes des autorités",
      "Ouvrir les fenêtres pour écouter les sirènes et attendre les instructions"
    ],
    correct: 1, category: "Premiers secours"
  },
  {
    question: "Comment est composé le signal d'alerte du SAIP diffusé par les sirènes ?",
    options: [
      "Un signal continu de 3 minutes, suivi d'une pause",
      "Deux codes : le Signal National d'Alerte (variation sur 3 cycles) et le signal de fin d'alerte (signal continu)",
      "Trois signaux courts répétés toutes les 30 secondes"
    ],
    correct: 1, category: "Premiers secours"
  },
  {
    question: "Sur autoroute, comment indiquer avec précision les lieux d'un accident depuis un téléphone portable ?",
    options: [
      "En donnant le nom de la prochaine sortie et la ville la plus proche",
      "En indiquant le numéro de l'autoroute, le sens de circulation et le point kilométrique",
      "En envoyant sa localisation GPS par SMS aux secours"
    ],
    correct: 1, category: "Premiers secours"
  },
  {
    question: "Comment vérifier la respiration d'une victime ?",
    options: [
      "En prenant son pouls au niveau du poignet pendant 10 secondes",
      "En regardant si le ventre et la poitrine se soulèvent et en sentant de l'air à l'expiration",
      "En approchant un miroir de sa bouche pour voir la buée"
    ],
    correct: 1, category: "Premiers secours"
  },
  {
    question: "Qu'est-ce qu'une perte de connaissance ?",
    options: [
      "C'est lorsque la victime ne respire plus mais présente encore des réflexes",
      "C'est lorsque la victime ne répond pas et ne réagit pas mais respire",
      "C'est lorsque la victime est agitée et ne reconnaît plus les personnes autour d'elle"
    ],
    correct: 1, category: "Premiers secours"
  },
  {
    question: "Si un dégagement d'urgence est nécessaire, où doit être déplacée la victime ?",
    options: [
      "Dans le véhicule des secouristes arrivés sur place",
      "Dans un endroit suffisamment éloigné du danger et de ses conséquences",
      "À l'arrière du véhicule accidenté si celui-ci est stable"
    ],
    correct: 1, category: "Premiers secours"
  },
  {
    question: "Pourquoi l'alerte auprès des services de secours doit-elle être rapide et précise ?",
    options: [
      "Pour éviter d'engager sa responsabilité légale en cas d'accident",
      "Pour permettre aux services de secours d'apporter les moyens adaptés dans le délai le plus court",
      "Pour que les autres conducteurs soient informés de l'accident"
    ],
    correct: 1, category: "Premiers secours"
  },
  {
    question: "Quels sont les numéros d'urgence à composer ?",
    options: [
      "Le 17 (police), le 15 (SAMU) et le 116 (urgences sociales)",
      "Le 18 (pompiers), le 15 (SAMU) et le 112 (urgences UE)",
      "Le 18 (pompiers), le 17 (police) et le 15 (SAMU) uniquement"
    ],
    correct: 1, category: "Premiers secours"
  },
  {
    question: "Quels comportements adopter en présence d'une victime inconsciente mais qui respire ?",
    options: [
      "La laisser sur le dos et lui parler pour maintenir son éveil",
      "La placer en PLS, alerter les secours et surveiller sa respiration jusqu'à leur arrivée",
      "Lui donner de l'eau et attendre qu'elle reprenne conscience"
    ],
    correct: 1, category: "Premiers secours"
  },
  {
    question: "Comment arrêter une hémorragie ?",
    options: [
      "En appliquant de la glace sur la plaie et en surélévant le membre",
      "En appuyant fortement sur l'endroit qui saigne avec les doigts ou la paume, avec un tissu propre",
      "En posant un garrot aussi près que possible de la plaie"
    ],
    correct: 1, category: "Premiers secours"
  },
  {
    question: "Quel équipement doit être porté avant de quitter le véhicule en cas de panne ou d'accident ?",
    options: [
      "Le casque de protection présent dans la trousse de secours",
      "Le gilet de haute visibilité avant de sortir du véhicule",
      "Les gants de protection pour manipuler le triangle"
    ],
    correct: 1, category: "Premiers secours"
  },
  {
    question: "Quelles sont les conditions pour réaliser le dégagement d'urgence d'une victime ?",
    options: [
      "Être au moins deux personnes et avoir une formation secouriste",
      "La victime doit être visible, facile à atteindre, rien ne doit gêner son dégagement et on doit être sûr de pouvoir le réaliser",
      "Attendre l'accord des secours par téléphone avant d'agir"
    ],
    correct: 1, category: "Premiers secours"
  },
  {
    question: "Quelles sont les trois informations à transmettre aux services de secours ?",
    options: [
      "Le nombre de blessés, leur âge estimé et la nature de l'accident",
      "Le numéro de téléphone de l'appelant, la nature et la localisation précise du problème",
      "L'heure de l'accident, les plaques d'immatriculation et la météo"
    ],
    correct: 1, category: "Premiers secours"
  },
  {
    question: "Hors autoroute, où doit être placé le triangle de pré-signalisation ?",
    options: [
      "Directement derrière le véhicule en panne",
      "À environ 30 m de la panne ou de l'accident, ou avant un virage ou un sommet de côte",
      "À au moins 100 m en agglomération et 200 m hors agglomération"
    ],
    correct: 1, category: "Premiers secours"
  },
  {
    question: "Quel comportement adopter en présence d'une victime en arrêt cardiaque ?",
    options: [
      "Attendre les secours sans intervenir pour ne pas aggraver l'état",
      "Alerter les secours, pratiquer une réanimation cardio-pulmonaire et utiliser un DAE si possible",
      "Mettre la victime en PLS et surveiller sa respiration"
    ],
    correct: 1, category: "Premiers secours"
  },
  {
    question: "Dans quel cas peut-on positionner une victime en Position Latérale de Sécurité (PLS) ?",
    options: [
      "Si la victime ne répond pas, ne réagit pas et ne respire pas",
      "Si la victime ne répond pas, ne réagit pas mais respire",
      "Si la victime est consciente mais ne peut pas se lever"
    ],
    correct: 1, category: "Premiers secours"
  },
  {
    question: "Dans quelle situation peut-on déplacer une victime ?",
    options: [
      "Dès qu'on évalue que son état nécessite une intervention médicale",
      "En présence d'un danger réel, immédiat et non contrôlable (reste exceptionnel)",
      "Lorsque la victime le demande elle-même"
    ],
    correct: 1, category: "Premiers secours"
  },
  {
    question: "Quel est l'objectif du Signal d'Alerte et d'Information des Populations (SAIP) ?",
    options: [
      "Coordonner les interventions des pompiers et du SAMU",
      "Avertir la population d'un danger imminent ou qu'un événement grave est en train de se produire",
      "Informer les conducteurs d'une perturbation majeure du trafic"
    ],
    correct: 1, category: "Premiers secours"
  },
  {
    question: "Comment est diffusée l'alerte émise par le SAIP ?",
    options: [
      "Uniquement via l'application officielle sur smartphone",
      "Grâce aux sirènes, aux médias (Radio France, France Télévision) et à l'application SAIP",
      "Via les panneaux à messages variables sur les routes et autoroutes"
    ],
    correct: 1, category: "Premiers secours"
  },
  {
    question: "À partir de quel âge peut-on suivre une formation aux premiers secours ?",
    options: [
      "À partir de 16 ans", "À partir de 10 ans", "À partir de 14 ans"
    ],
    correct: 1, category: "Premiers secours"
  },
  {
    question: "Pourquoi faut-il pratiquer immédiatement une réanimation cardio-pulmonaire en cas d'arrêt cardiaque ?",
    options: [
      "Car les organes internes sont endommagés après 30 minutes sans intervention",
      "Car les lésions du cerveau surviennent dès les premières minutes",
      "Car la victime risque de tomber dans un coma irréversible après 10 minutes"
    ],
    correct: 1, category: "Premiers secours"
  },
  {
    question: "Quels sont les risques pour une personne inconsciente allongée sur le dos ?",
    options: [
      "Un risque d'hypothermie et de fracture vertébrale",
      "L'arrêt respiratoire et l'arrêt cardiaque",
      "Un risque de choc anaphylactique"
    ],
    correct: 1, category: "Premiers secours"
  },
  {
    question: "Lors d'un appel aux secours, pourquoi attendre que votre correspondant vous autorise à raccrocher ?",
    options: [
      "Pour confirmer l'envoi des secours et donner votre identité complète",
      "Car il peut nous conseiller ou guider dans les gestes à faire jusqu'à l'arrivée des secours",
      "Pour répondre aux questions légales obligatoires"
    ],
    correct: 1, category: "Premiers secours"
  },
  {
    question: "À quel moment pouvez-vous mettre fin à un appel avec les secours ?",
    options: [
      "Dès que les secours ont confirmé leur arrivée dans les 10 minutes",
      "Uniquement lorsque votre correspondant vous invite à le faire",
      "Après avoir communiqué toutes les informations demandées"
    ],
    correct: 1, category: "Premiers secours"
  },
  {
    question: "Citez les trois manières d'évaluer l'état de conscience d'une victime.",
    options: [
      "Mesurer son pouls, vérifier sa respiration et observer la couleur de sa peau",
      "Lui poser des questions simples, lui secouer doucement les épaules, lui prendre la main en demandant d'exécuter un geste",
      "Lui parler fort, lui pincer le bras et regarder ses pupilles"
    ],
    correct: 1, category: "Premiers secours"
  },
  {
    question: "Quels sont les risques pour une personne victime d'une hémorragie ?",
    options: [
      "Un risque d'infection et de nécrose du membre blessé",
      "Une détresse circulatoire ou un arrêt cardiaque",
      "Un risque de perte de conscience temporaire uniquement"
    ],
    correct: 1, category: "Premiers secours"
  },
  {
    question: "Quels sont les signes d'un arrêt cardiaque ?",
    options: [
      "La victime est pâle, transpire et se plaint de douleurs dans la poitrine",
      "La victime ne répond pas, ne réagit pas et ne respire pas ou présente une respiration anormale",
      "La victime est inconsciente mais sa respiration est normale"
    ],
    correct: 1, category: "Premiers secours"
  },
  {
    question: "Qu'est-ce qu'un défibrillateur automatisé externe (DAE) ?",
    options: [
      "Un appareil qui mesure automatiquement la pression artérielle d'une victime",
      "Un appareil qui peut permettre de rétablir une activité cardiaque normale à une victime en arrêt cardiaque",
      "Un appareil de ventilation automatique pour les victimes qui ne respirent plus"
    ],
    correct: 1, category: "Premiers secours"
  },
  {
    question: "Pourquoi ne faut-il pas laisser une personne inconsciente allongée sur le dos ?",
    options: [
      "Car les fractures vertébrales s'aggravent en position dorsale",
      "Car elle risque un étouffement par des liquides dans la gorge ou la chute de la langue en arrière",
      "Car la circulation sanguine est compromise dans cette position"
    ],
    correct: 1, category: "Premiers secours"
  },
  {
    question: "L'utilisation d'un DAE sur une victime qui n'est pas en arrêt cardiaque présente-t-elle un risque ?",
    options: [
      "Oui, cela peut provoquer un arrêt cardiaque chez une personne saine",
      "Non, car le défibrillateur se déclenche uniquement quand la victime est en arrêt cardiaque",
      "Oui, si la victime a un stimulateur cardiaque"
    ],
    correct: 1, category: "Premiers secours"
  },
  {
    question: "Par quels moyens doit être réalisée l'alerte des secours ?",
    options: [
      "Uniquement via les bornes SOS présentes sur les autoroutes",
      "À l'aide d'un téléphone portable, à défaut d'un téléphone fixe ou d'une borne d'appel d'urgence",
      "En arrêtant un autre conducteur pour lui demander d'appeler à votre place"
    ],
    correct: 1, category: "Premiers secours"
  },
  {
    question: "Qu'est-ce qu'une hémorragie ?",
    options: [
      "Un saignement qui s'arrête spontanément après quelques secondes",
      "Une perte de sang prolongée qui ne s'arrête pas et imbibe un mouchoir en quelques secondes",
      "Un saignement interne sans plaie visible"
    ],
    correct: 1, category: "Premiers secours"
  },
  {
    question: "Quel est le risque principal d'un arrêt cardiaque sans intervention des secours ?",
    options: [
      "Des séquelles neurologiques irréversibles après 30 minutes",
      "La mort de la victime qui survient en quelques minutes",
      "Un coma profond dont on peut se remettre si les secours arrivent dans l'heure"
    ],
    correct: 1, category: "Premiers secours"
  },
  {
    question: "Qu'est-ce qu'un arrêt cardiaque ?",
    options: [
      "Un ralentissement brutal du rythme cardiaque en dessous de 40 battements/minute",
      "Le cœur ne fonctionne plus ou fonctionne d'une façon anarchique",
      "Une obstruction partielle des artères coronaires"
    ],
    correct: 1, category: "Premiers secours"
  }
];

// ---- Quiz Logic ----

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let userAnswers = [];
let quizStarted = false;
let answered = false;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startQuiz() {
  const shuffled = shuffle([...QUESTIONS_BANK]);
  currentQuestions = shuffled.slice(0, 10);
  currentIndex = 0;
  score = 0;
  userAnswers = [];
  quizStarted = true;

  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById('quiz-screen').classList.remove('hidden');
  renderQuestion();
}

function renderQuestion() {
  answered = false;
  const q = currentQuestions[currentIndex];
  const total = currentQuestions.length;

  document.getElementById('progress-text').textContent = `Question ${currentIndex + 1} / ${total}`;
  document.getElementById('progress-bar-fill').style.width = `${((currentIndex) / total) * 100}%`;
  document.getElementById('question-category').textContent = q.category;
  document.getElementById('question-text').textContent = q.question;

  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';

  const shuffledOptions = q.options.map((text, idx) => ({ text, originalIdx: idx }));

  shuffledOptions.forEach(({ text, originalIdx }) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = text;
    btn.dataset.idx = originalIdx;
    btn.addEventListener('click', () => selectOption(btn, originalIdx));
    optionsContainer.appendChild(btn);
  });

  const validateBtn = document.getElementById('validate-btn');
  validateBtn.textContent = 'Valider';
  validateBtn.disabled = true;
  validateBtn.className = 'validate-btn';
  validateBtn.onclick = validateAnswer;

  document.getElementById('feedback-container').innerHTML = '';
}

function selectOption(btn, idx) {
  if (answered) return;
  document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  document.getElementById('validate-btn').disabled = false;
}

function validateAnswer() {
  if (answered) return;
  answered = true;

  const q = currentQuestions[currentIndex];
  const selected = document.querySelector('.option-btn.selected');
  const selectedIdx = parseInt(selected.dataset.idx);
  const isCorrect = selectedIdx === q.correct;

  if (isCorrect) score++;
  userAnswers.push({ question: q.question, chosen: q.options[selectedIdx], correct: q.options[q.correct], isCorrect });

  document.querySelectorAll('.option-btn').forEach(btn => {
    const idx = parseInt(btn.dataset.idx);
    btn.disabled = true;
    if (idx === q.correct) {
      btn.classList.add('correct');
      btn.innerHTML = `<span class="icon">✓</span> ${btn.textContent}`;
    } else if (idx === selectedIdx && !isCorrect) {
      btn.classList.add('wrong');
      btn.innerHTML = `<span class="icon">✗</span> ${btn.textContent}`;
    }
  });

  const feedbackEl = document.getElementById('feedback-container');
  if (isCorrect) {
    feedbackEl.innerHTML = `<div class="feedback correct-feedback"><span class="icon">✓</span> Bonne réponse !</div>`;
  } else {
    feedbackEl.innerHTML = `<div class="feedback wrong-feedback"><span class="icon">✗</span> Mauvaise réponse. La bonne réponse était : <strong>${q.options[q.correct]}</strong></div>`;
  }

  const validateBtn = document.getElementById('validate-btn');
  validateBtn.textContent = currentIndex < currentQuestions.length - 1 ? 'Question suivante →' : 'Voir les résultats';
  validateBtn.disabled = false;
  validateBtn.className = 'validate-btn next-btn';
  validateBtn.onclick = nextQuestion;
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < currentQuestions.length) {
    document.getElementById('progress-bar-fill').style.width = `${(currentIndex / currentQuestions.length) * 100}%`;
    renderQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  quizStarted = false;
  document.getElementById('quiz-screen').classList.add('hidden');
  document.getElementById('result-screen').classList.remove('hidden');

  document.getElementById('progress-bar-fill').style.width = '100%';

  const scoreEl = document.getElementById('score-display');
  const pct = (score / 10) * 100;
  scoreEl.textContent = `${score} / 10`;
  scoreEl.className = 'score-display ' + (pct >= 70 ? 'score-good' : pct >= 50 ? 'score-medium' : 'score-bad');

  const msg = document.getElementById('score-message');
  if (pct === 100) msg.textContent = 'Parfait ! 🏆';
  else if (pct >= 70) msg.textContent = 'Bien joué ! Continuez à réviser.';
  else if (pct >= 50) msg.textContent = 'Pas mal, mais encore quelques révisions s\'imposent !';
  else msg.textContent = 'Il faut réviser davantage. Courage !';

  const recapEl = document.getElementById('recap-list');
  recapEl.innerHTML = '';
  userAnswers.forEach((ans, i) => {
    const item = document.createElement('div');
    item.className = 'recap-item ' + (ans.isCorrect ? 'recap-correct' : 'recap-wrong');
    item.innerHTML = `
      <div class="recap-header">
        <span class="recap-num">${i + 1}</span>
        <span class="recap-icon">${ans.isCorrect ? '✓' : '✗'}</span>
      </div>
      <div class="recap-question">${ans.question}</div>
      <div class="recap-answers">
        <div class="recap-chosen ${ans.isCorrect ? 'chosen-correct' : 'chosen-wrong'}">
          <strong>Votre réponse :</strong> ${ans.chosen}
        </div>
        ${!ans.isCorrect ? `<div class="recap-expected"><strong>Bonne réponse :</strong> ${ans.correct}</div>` : ''}
      </div>
    `;
    recapEl.appendChild(item);
  });
}

function restartQuiz() {
  document.getElementById('result-screen').classList.add('hidden');
  document.getElementById('start-screen').classList.remove('hidden');
  quizStarted = false;
}

// ---- Leave-page warning ----

let toastTimeout;

function showLeaveWarning() {
  if (!quizStarted) return;
  const overlay = document.getElementById('leave-overlay');
  const toast = document.getElementById('leave-toast');
  overlay.classList.add('visible');
  toast.classList.add('visible');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    overlay.classList.remove('visible');
    toast.classList.remove('visible');
  }, 3000);
}

function hideLeaveWarning() {
  document.getElementById('leave-overlay').classList.remove('visible');
  document.getElementById('leave-toast').classList.remove('visible');
  clearTimeout(toastTimeout);
}

document.addEventListener('mouseleave', (e) => {
  if (e.clientY <= 0 || e.clientX <= 0 || e.clientX >= window.innerWidth || e.clientY >= window.innerHeight) {
    showLeaveWarning();
  }
});

document.addEventListener('mouseenter', hideLeaveWarning);

window.addEventListener('beforeunload', (e) => {
  if (quizStarted) {
    e.preventDefault();
    e.returnValue = '';
  }
});
