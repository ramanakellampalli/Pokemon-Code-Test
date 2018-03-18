import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'pokemon-list',
    templateUrl: '../html/pokemonlist.html'
})

export class PokemonListComponent implements OnInit {
    pokemonList: any = []
    @Output() pokemondetail: EventEmitter<any> = new EventEmitter<any>();
    isLoading = true;
    constructor(private _http: Http) { }

    ngOnInit() {
        try {
            this._http.get("https://pokeapi.co/api/v2/pokemon").subscribe((res) => {
                var response = res.json();
                this.pokemonList = response.results;
                this.isLoading = false;
                //console.log(response.results);
            });
        } catch (ex) {
            console.log(ex);
            this.isLoading =  false;
        }
    }

    pokemondetails(pokemon) {
        this.pokemondetail.emit(pokemon);
    }
}
