import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../project.component';

@Component({
  selector: 'app-project-details',
  standalone: false,
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  project: Project | null = null;

  projects: Project[] = [
    {
        id: 1,
        title: 'Gestion de Stock',
        description: "SIPASTOCK est une application web développée pour la société SIPA, une entreprise située en Mauritanie spécialisée dans la fabrication et la distribution de pâtes alimentaires. La société SIPA cherchait une solution complète pour gérer efficacement ses stocks de matières premières et de produits finis. L'objectif principal était de centraliser toutes les données relatives aux mouvements de stock, d'améliorer la traçabilité des flux de production et de distribution, et de fournir des analyses détaillées pour appuyer la prise de décision stratégique. \n Le projet a été initié après une collaboration avec les responsables de SIPA, qui ont exprimé leurs difficultés à suivre leurs stocks en temps réel. Les problèmes récurrents comprenaient une visibilité limitée des entrées et sorties, une mauvaise rotation des produits entraînant un gaspillage important, et une traçabilité insuffisante, particulièrement lors de la gestion des lots de production. En réponse à ces besoins, l'application SIPASTOCK a été conçue pour répondre à ces exigences spécifiques tout en restant flexible pour intégrer des améliorations futures.",
        image: 'assets/images/projets/elmedine.png',
        context: 'Projet réalisé pour renforcer ma présence en ligne et démontrer mes compétences en design et développement front-end. Il a également servi à explorer des frameworks modernes comme Angular et à perfectionner mes compétences en animation web.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Angular', 'Bootstrap'],
        etat: 'Terminé',
        codeLink: 'https://github.com/TalebMaham/medine',
        productionLink: 'https://chri2.com/medine',
     
        intro: {
          text: "SIPASTOCK est une application web développée pour la société SIPA, une entreprise située en Mauritanie spécialisée dans la fabrication et la distribution de pâtes alimentaires. La société SIPA cherchait une solution complète pour gérer efficacement ses stocks de matières premières et de produits finis. L'objectif principal était de centraliser toutes les données relatives aux mouvements de stock, d'améliorer la traçabilité des flux de production et de distribution, et de fournir des analyses détaillées pour appuyer la prise de décision stratégique. Le projet a été initié après une collaboration avec les responsables de SIPA, qui ont exprimé leurs difficultés à suivre leurs stocks en temps réel. Les problèmes récurrents comprenaient une visibilité limitée des entrées et sorties, une mauvaise rotation des produits entraînant un gaspillage important, et une traçabilité insuffisante, particulièrement lors de la gestion des lots de production. En réponse à ces besoins, l'application SIPASTOCK a été conçue pour répondre à ces exigences spécifiques tout en restant flexible pour intégrer des améliorations futures." ,
          image: "assets/images/projets/sipa_intro.png",
        },
        details: {
          text: "Le processus de gestion du stock suit un flux logique entièrement intégré dans l’application. Les utilisateurs peuvent saisir les quantités de matières premières qui entrent dans l’usine, les lots de production sont ensuite planifiés automatiquement en fonction des stocks disponibles et des commandes en attente. Une fois les produits finis stockés, le système enregistre leur localisation et leur disponibilité en temps réel. Les rapports générés par l’application permettent de visualiser rapidement les niveaux de stock, d’identifier les produits à risque de péremption et de prendre des décisions pour éviter toute interruption de production. SIPASTOCK facilite également la gestion des commandes clients. Lorsqu’un client passe une commande, le système vérifie automatiquement la disponibilité des produits dans le stock. Si nécessaire, une alerte est déclenchée pour signaler des insuffisances et recalculer les besoins en production. Ce flux de travail optimise non seulement les ressources de l’entreprise, mais il garantit également des livraisons rapides et précises aux clients, renforçant ainsi la satisfaction client et l’efficacité opérationnelle de SIPA.", 
          image: "assets/images/projets/sipa_conception.png" 
        },
        conclusion: {
          text: "L’ensemble du projet a été déployé en production et est actuellement utilisé par SIPA. L'application a permis de réduire considérablement les pertes dues au gaspillage, de fournir une meilleure visibilité des données aux responsables, et de simplifier le suivi des opérations quotidiennes. SIPASTOCK est désormais un pilier essentiel de l’organisation interne de SIPA, et des améliorations sont prévues pour intégrer la gestion logistique et des fonctionnalités de prévision basées sur l’intelligence artificielle.", 
          image: "assets/images/projets/sipa_use_case.png",  
      }
   
    },
    {
        id: 2,
        title: 'Monnayeur',
        description: 'Une boutique en ligne développée avec des fonctionnalités avancées pour gérer l’intégralité du processus de commerce électronique. La plateforme propose une interface intuitive permettant aux utilisateurs de parcourir les produits, de les ajouter à leur panier, et de finaliser leurs achats avec un système de paiement sécurisé. Les administrateurs disposent d’un tableau de bord pour gérer les produits, surveiller les ventes et analyser les performances via des statistiques en temps réel. Le site inclut également des fonctionnalités comme la gestion des utilisateurs, des avis clients, et des recommandations personnalisées basées sur l’historique des achats.',
        image: 'assets/images/projets/cashier.png',
        context: 'Ce projet vise à offrir une solution robuste et évolutive pour les petites et moyennes entreprises souhaitant développer leur activité en ligne. Il m’a permis de travailler sur des problématiques complexes comme l’intégration de passerelles de paiement et la gestion des relations entre clients, produits et commandes.',
        technologies: ['React', 'Falsk', 'Django REST',],
        etat: 'Vesion V0 Terminé',
        codeLink: '',
        productionLink: '',

        intro: {
          text: "Le projet de développement du monnayeur pour l’entreprise E-thik a été conçu dans le but de moderniser et d’optimiser le système de paiement des machines de distribution automatisées. E-thik, une société spécialisée dans la distribution automatique de produits, souhaitait intégrer un monnayeur intelligent capable de gérer les transactions en espèces de manière fiable et sécurisée, tout en s’adaptant à une large gamme de produits et de prix. Le défi principal résidait dans la création d’un système robuste, précis et facile à maintenir, qui répondrait aux exigences spécifiques des clients finaux tout en minimisant les coûts d’entretien pour l’entreprise. Le monnayeur est conçu pour s’intégrer directement aux machines de distribution existantes d’E-thik. Grâce à son architecture modulaire, il peut gérer les paiements en pièces de monnaie tout en assurant une compatibilité avec les billets et, dans une version future, avec des paiements numériques tels que les cartes NFC ou les applications mobiles. Ce système utilise des capteurs de haute précision pour vérifier la validité des pièces et billets, évitant ainsi les fraudes potentielles. En cas de détection d’une anomalie, le monnayeur rejette automatiquement les pièces suspectes, protégeant ainsi l’intégrité des transactions." ,
          image: "assets/images/projets/monnayeur_presentation.png",
        },
        details: {
          text: "Le fonctionnement du monnayeur repose sur une logique bien définie. Lorsqu’un utilisateur insère une pièce ou un billet, le système identifie la valeur de l’argent inséré à l’aide de capteurs calibrés, puis l’enregistre dans la base de données intégrée de la machine. Une fois que l'utilisateur atteint le montant requis pour le produit sélectionné, la machine libère automatiquement le produit et, si nécessaire, rend la monnaie grâce à un mécanisme de restitution précis. Ce flux est conçu pour offrir une expérience utilisateur fluide tout en garantissant une transparence totale dans les transactions. Le développement de ce projet a nécessité une intégration étroite entre les composants matériels et logiciels. Du côté logiciel, le système repose sur une plateforme embarquée optimisée qui utilise des microcontrôleurs pour gérer les communications entre les capteurs, le moteur de restitution et l'interface utilisateur de la machine. Les données des transactions sont enregistrées en temps réel, permettant aux opérateurs d’E-thik de suivre les performances de chaque monnayeur, d’identifier les éventuelles anomalies et de programmer la maintenance préventive à distance. Ce projet a permis à E-thik de répondre à des besoins spécifiques exprimés par leurs clients : une plus grande précision dans les transactions, une meilleure gestion de la monnaie et une réduction significative des temps d’arrêt des machines. En plus de répondre aux exigences opérationnelles actuelles, le monnayeur intègre également une infrastructure prête à accueillir des fonctionnalités évolutives, comme l’intégration de paiements numériques et des options de reporting en temps réel pour les gestionnaires d’E-thik.", 
          image: "assets/images/projets/monnayeur_conception.png" 
        },
        conclusion: {
          text: "Aujourd’hui, ce monnayeur intelligent est déployé sur plusieurs machines de distribution d’E-thik. Il a permis à l’entreprise d’améliorer l’expérience utilisateur et d’augmenter la satisfaction client grâce à des transactions rapides et fiables. E-thik prévoit d'étendre l’utilisation de ce système à toute sa flotte de machines et d’explorer des opportunités de monétisation supplémentaires grâce à des services analytiques basés sur les données collectées par les monnayeurs. Ce projet représente une avancée significative dans l’automatisation et la modernisation des systèmes de paiement pour E-thik, tout en renforçant leur position comme leader dans le domaine de la distribution automatique.", 
          image: "assets/images/projets/monnayeur_distrubiteur.png",  
      }
    },
    {
        id: 3,
        title: 'Casier D2C',
        description: "Le projet des casiers D2C a été développé pour répondre aux besoins de l'entreprise E-thik, qui souhaitait proposer une solution innovante pour le stockage et la livraison directe aux consommateurs, en complément de ses machines de distribution. Ces casiers ont été conçus pour permettre un accès pratique et organisé aux produits, tout en optimisant la gestion logistique. Leur fonctionnalité principale réside dans leur capacité à s'ouvrir et se fermer de manière automatisée, tout en offrant un système structuré pour gérer le planogramme des produits et le suivi des stocks. En raison d’un retard dans la livraison des casiers physiques, il a été nécessaire de développer un simulateur pour reproduire virtuellement leur fonctionnement. Ce simulateur a permis d'émuler l’ouverture et la fermeture des compartiments de manière réaliste, tout en testant les processus de gestion des produits stockés derrière les casiers. Le simulateur a également permis de concevoir et d’organiser le planogramme, une structure essentielle pour déterminer quels produits sont placés dans chaque compartiment et dans quel ordre, garantissant ainsi une gestion claire et efficace de l’espace.",
        image: 'assets/images/projets/casier_d2c.png',
        context: 'Conçu pour répondre au besoin croissant de solutions efficaces de gestion des tâches. Ce projet a été un excellent exercice pour travailler sur des intégrations complexes, comme les bases de données relationnelles et non relationnelles, et pour améliorer les performances dans des environnements collaboratifs.',
        technologies: ['React', 'Python', 'Django'],
        etat: 'Prototype',
        codeLink: '',
        intro: {
          text: "Le projet des casiers D2C a été développé pour répondre aux besoins de l'entreprise E-thik, qui souhaitait proposer une solution innovante pour le stockage et la livraison directe aux consommateurs, en complément de ses machines de distribution. Ces casiers ont été conçus pour permettre un accès pratique et organisé aux produits, tout en optimisant la gestion logistique. Leur fonctionnalité principale réside dans leur capacité à s'ouvrir et se fermer de manière automatisée, tout en offrant un système structuré pour gérer le planogramme des produits et le suivi des stocks. En raison d’un retard dans la livraison des casiers physiques, il a été nécessaire de développer un simulateur pour reproduire virtuellement leur fonctionnement. Ce simulateur a permis d'émuler l’ouverture et la fermeture des compartiments de manière réaliste, tout en testant les processus de gestion des produits stockés derrière les casiers. Le simulateur a également permis de concevoir et d’organiser le planogramme, une structure essentielle pour déterminer quels produits sont placés dans chaque compartiment et dans quel ordre, garantissant ainsi une gestion claire et efficace de l’espace." ,
          image: "assets/images/projets/casier_d2c_presentation.png",
        },
        details: {
          text: "Le simulateur a servi de solution transitoire pour valider les fonctionnalités critiques avant l’installation physique des casiers. Il a permis de simuler des scénarios d’utilisation réels, comme l’accès des clients aux produits ou la mise à jour du stock en fonction des entrées et sorties. Grâce à cette approche, il a été possible d'anticiper et de résoudre plusieurs problèmes potentiels liés à l'intégration des casiers dans le système global d’E-thik.", 
          image: "assets/images/projets/locker_d2c.png" 
        },
        conclusion: {
          text:"Les casiers D2C répondent à un besoin fondamental d’amélioration de la gestion logistique pour E-thik. En permettant un suivi précis des stocks et une organisation optimale des produits, ils renforcent l’expérience utilisateur tout en apportant une modernisation significative à l’offre de l’entreprise. En tant que système complémentaire aux machines de distribution, les casiers permettent à E-thik de garantir une fluidité dans la livraison des produits et une traçabilité optimale. Cette solution s’inscrit dans la volonté de l’entreprise de proposer des services modernes, fiables et adaptés aux attentes des clients. Le simulateur développé en amont s’est avéré être un outil crucial pour assurer une transition fluide vers l’utilisation des casiers physiques et pour valider les concepts avant leur déploiement.", 
          image: "assets/images/projets/casier_d2c_reel.png",  
      }
    },
];


  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (projectId) {
      this.project = this.projects.find(p => p.id === +projectId) || null;
    }
  }
}
