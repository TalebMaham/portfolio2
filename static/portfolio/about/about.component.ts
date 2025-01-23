import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private router: Router) {}

  photoUrl = '/assets/logo.jpg'; // Photo de profil

  sections = [
    { title: 'Formations', isOpen: false },
    { title: 'Expériences Professionnelles', isOpen: false },
    { title: 'Compétences', isOpen: false },
    { title: 'Intérêts', isOpen: false },
  ];

  formations = [
    { titre: 'ANALYST DEVOPS', institution: 'Institut National des Technologies Avancées', annee: '2022 - 2023' },
    { titre: 'Licence en Informatique', institution: 'Sorbonne Université', annee: '2020' },
    { titre: 'Licence en Mathématiques', institution: 'Université de Nouakchott', annee: '2017' }
  ];

  experiences = [
    { poste: 'Développeur Back-end ', entreprise: 'E-thik', periode: '2022 - 2023' },
    { poste: 'Développeur Full Stack', entreprise: 'Cash Flow Positif', periode: '2024 - 2025' },
  ];

  interets = ['Lecture', 'Pêche', 'Voyages', 'Développement Web'];

  competences = [
    { name: 'JavaScript', icon: 'assets/images/competences/javascript.png' },
    { name:  'Flask', icon: 'assets/images/competences/flask.png'},
    { name: 'Django', icon: 'assets/images/competences/django.png'},
    { name: 'Angular', icon: 'assets/images/competences/angular.png' },
    { name: 'React', icon: 'assets/images/competences/react.png' },
    { name: 'TypeScript', icon: 'assets/images/competences/typescript.png' },
    { name: 'Node.js', icon: 'assets/images/competences/nodejs.png' },
    { name: 'Symfony', icon: 'assets/images/competences/symfony.png' },
    { name: 'MySQL', icon: 'assets/images/competences/mysql.png' },
    { name: 'Python', icon: 'assets/images/competences/python.png' },
    { name: 'Git', icon: 'assets/images/competences/git.png' }
  ];

  // Navigation vers les différentes pages
  navigateToProjects() {
    this.router.navigate(['portfolio/project']);
  }

  navigateToContact() {
    this.router.navigate(['portfolio/contact']);
  }

  toggleAccordion(title: string): void {
    this.sections.forEach((section) => {
      if (section.title === title) {
        section.isOpen = !section.isOpen;
      } else {
        section.isOpen = false; // Ferme les autres sections
      }
    });
  }

  printGlobalCV(): void {
    const globalCVContent = `
      <div class="cv-container">
        <div class="cv-header">
          <img src="${this.photoUrl}" alt="Photo de profil">
          <h1>CV Global</h1>
        </div>
        <div class="cv-section">
          <h2>Formations</h2>
          <ul>
            ${this.formations
              .map(f => `<li><strong>${f.titre}</strong> - ${f.institution} (${f.annee})</li>`)
              .join('')}
          </ul>
        </div>
        <div class="cv-section">
          <h2>Expériences Professionnelles</h2>
          <ul>
            ${this.experiences
              .map(e => `<li><strong>${e.poste}</strong> - ${e.entreprise} (${e.periode})</li>`)
              .join('')}
          </ul>
        </div>
        <div class="cv-section">
          <h2>Compétences</h2>
          <ul>
            ${this.competences
              .map(c => `<li style="font-size: 16px; font-weight: bold; color: #000; text-align: left;">${c.name}</li>`)
              .join('')}
          </ul>
        </div>
      </div>
    `;
    this.printDocument(globalCVContent);
  }

  private printDocument(content: string): void {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>CV</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                padding: 20px;
                background-color: #fff;
              }
              .cv-container {
                max-width: 800px;
                margin: auto;
                border: 1px solid #ddd;
                border-radius: 8px;
                padding: 20px;
              }
              .cv-header {
                display: flex;
                align-items: center;
                margin-bottom: 20px;
              }
              .cv-header img {
                width: 120px;
                height: 120px;
                border-radius: 50%;
                margin-right: 20px;
                object-fit: cover;
              }
              .cv-section h2 {
                font-size: 20px;
                color: #444;
                border-bottom: 2px solid #ddd;
                padding-bottom: 5px;
                margin-bottom: 10px;
              }
              .cv-section ul {
                list-style-type: none;
                padding: 0;
              }
              .cv-section ul li {
                font-size: 16px;
                font-weight: bold;
                color: #000;
                text-align: left;
                margin-bottom: 5px;
              }
            </style>
          </head>
          <body>${content}</body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  }
}
