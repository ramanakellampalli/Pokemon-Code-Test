import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'pokemon-details',
    templateUrl: '../html/pokemondetails.html',
    styles: [``]
})

export class PokemonDetailsComponent implements OnInit {

    @Input() pokemon: any = null;

    constructor() {
    }

    ngOnInit() {
        console.log('hellooooooo');
        console.log(this.pokemon);
     }
}
