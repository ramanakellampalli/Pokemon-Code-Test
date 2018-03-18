import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'pokemon-card',
    templateUrl: '../html/pokemoncard.html'
})

export class PokemonCardComponent implements OnInit {

    @Input() pokemon: any;
    @Output() pokemondetail: EventEmitter<any> = new EventEmitter<any>();
    height: any;
    weight: any;
    pokemonDetailObj: any;
    isLoading: boolean = true;
    constructor(private _http: Http) { }

    ngOnInit() {
        try {
            this._http.get(this.pokemon.url).subscribe((res) => {
                var response = res.json();
                this.isLoading = false;
                this.pokemonDetailObj = response;
                this.height = response.height;
                this.weight = response.weight;
                // console.log(response);
            })
        } catch (ex) {
            console.log(ex);
            this.isLoading = false;
        }
    }

    onpokemonSelected() {
        alert('You have selected  ' + this.pokemon.name + ' Pokemon');
    }

    onpokemonDetailsClick() {
        this.pokemondetail.emit(this.pokemonDetailObj);
    }
}