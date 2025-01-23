import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  isRecrutement = false;

  // Gère le changement dans le champ "Raison de contact"
  onReasonChange(event: Event) {
    const target = event.target as HTMLSelectElement; // Cast du type
    const reason = target.value; // Accès sécurisé à la valeur
    this.isRecrutement = reason === 'recrutement';
  }
  
  

  // Gère la soumission du formulaire
  onSubmit(formData: any) {
    console.log('Formulaire soumis :', formData);
    // Ajoutez ici votre logique pour traiter les données (exemple : appel à un service)
  }
}
