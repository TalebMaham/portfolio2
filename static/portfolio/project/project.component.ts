import { Component } from '@angular/core';
import { Modal } from 'bootstrap';


@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  projects: Project[] = [
    {
        id: 1,
        title: 'Gestion de stock',
        description: "Une application conçue pour gérer efficacement le stock de matières premières (farine, eau, etc.) et de produits finis (différents types de pâtes). Elle offre une interface utilisateur intuitive pour suivre en temps réel les entrées, les sorties et les niveaux de stock. L'application intègre également des fonctionnalités pour la planification de production, la traçabilité des produits et la gestion des commandes.",
        image: 'assets/images/projets/elmedine.png',
        context: "Ce projet a été réalisé pour aider une usine de production de pâtes à automatiser la gestion de son stock, réduire le gaspillage et améliorer la traçabilité des produits finis. L'objectif principal est d'assurer un flux continu entre la production et la distribution, tout en optimisant les ressources.",
        technologies: ['HTML', 'CSS', 'JavaScript', 'Angular', "Flask" , "Django REST"],
        etat: 'En cours',
        codeLink: 'https://github.com/TalebMaham/medine',
        productionLink: 'https://chri2.com/medine'
    },
    {
        id: 2,
        title: 'Monnayeur',
        description: "Le projet de monnayeur pour E-thik vise à moderniser et optimiser le système de paiement des machines de distribution automatisées. Ce monnayeur intelligent, conçu pour gérer les transactions en espèces de manière fiable et sécurisée, est adapté à une large gamme de produits et de prix. Son architecture modulaire permet une intégration facile aux machines existantes et garantit la compatibilité avec les pièces, les billets, et potentiellement les paiements numériques comme les cartes NFC. Doté de capteurs de haute précision, il vérifie la validité des paiements, évitant les fraudes, et rejette automatiquement les anomalies pour assurer l’intégrité des transactions.",
        image: 'assets/images/projets/cashier.png',
        context: "E-thik, une société spécialisée dans la distribution automatique de produits, cherchait à améliorer l’expérience utilisateur et à réduire les coûts d’entretien de ses machines de distribution. Le défi principal résidait dans la création d’un système robuste, précis et facile à maintenir, capable de répondre aux attentes des clients tout en évitant les fraudes potentielles. Ce projet s’inscrit dans une démarche d’innovation visant à renforcer la fiabilité des transactions tout en préparant l’intégration de technologies de paiement avancées.",
        technologies: ['React', 'Falsk', 'Django REST',],
        etat: 'Terminé',
   
    },
    {
        id: 3,
        title: 'Casier D2C',
        description: 'Une application innovante de gestion de tâches qui permet aux utilisateurs de planifier, suivre et prioriser leurs activités quotidiennes. Elle inclut des fonctionnalités avancées telles que la gestion des échéances, les notifications, et la création de rapports d’efficacité.',
        image: 'assets/images/projets/casier_d2c.png',
        context: 'Ce projet a été conçu pour optimiser la gestion des tâches et améliorer la productivité des utilisateurs dans leur vie professionnelle et personnelle.',
        technologies: ['React', 'Python', 'Django', 'PostgreSQL'],
        etat: 'Prototype',
    },
];



  selectedProject: Project | null = null;

  openModal(project: any): void {
    this.selectedProject = project;
    const modalElement = document.getElementById('projectModal');
    if (modalElement) {
      const modal = new Modal(modalElement); // Utilisez la classe Modal ici
      modal.show();
    }
  }
  
  viewCode(link: string): void {
    window.open(link, '_blank');
  }

  goToProduction(link: string): void {
    window.open(link, '_blank');
  }
}

export interface Project {
  id : number, 
  title: string;
  description: string;
  image: string;
  context: string;
  technologies: string[];
  etat: string;
  codeLink?: string;
  productionLink?: string;
  intro?: {
    text: string; // Introduction text
    image: string; // Image related to the introduction
  };
  details?: {
    text: string; // Details text
    image: string; // Image related to the details
  };
  conclusion?: {
    text: string; // Conclusion text
    image: string; // Image related to the conclusion
  };
}
