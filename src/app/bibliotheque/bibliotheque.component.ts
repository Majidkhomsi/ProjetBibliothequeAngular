import { Component } from '@angular/core';
import { Livre } from './../livre';

@Component({
  selector: 'app-bibliotheque',
  templateUrl: './bibliotheque.component.html',
  styleUrls: ['./bibliotheque.component.css']
})
export class BibliothequeComponent {
  livres: Livre[] = [
    new Livre('Livre 1', 'Auteur 1', 2000),
    new Livre('Livre 2', 'Auteur 2', 2005),
    new Livre('Livre 3', 'Auteur 3', 2010),
    new Livre('Livre 4', 'Auteur 4', 2015),
    new Livre('Livre 5', 'Auteur 5', 2020)
  ];

  nouveauLivre: Livre = new Livre('', '', 0);

  ajouterLivre(event: Event) {
    event.preventDefault(); // Prevent the default form submission

    // Add the new livre to the array of livres
    this.livres.push(this.nouveauLivre);

    // Reset the form fields
    this.nouveauLivre = new Livre('', '', 0);
  }
}
