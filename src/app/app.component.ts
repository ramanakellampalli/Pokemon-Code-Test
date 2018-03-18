import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isdetails: boolean = false;
  selectedpokemon:any;

  onPokemonDetail(pokemon) {
    this.selectedpokemon = pokemon;
    this.isdetails = true;

  }

  onHome() {
    this.isdetails = false;
  }
}
