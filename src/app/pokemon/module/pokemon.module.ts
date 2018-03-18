import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PokemonDetailsComponent } from '../component/pokemondetails.component';
import { PokemonCardComponent } from './../component/pokemoncard.component';
import { PokemonListComponent } from './../component/pokemonlist.component';


@NgModule({
    imports: [CommonModule],
    exports: [PokemonCardComponent,PokemonListComponent,PokemonDetailsComponent],
    declarations: [PokemonCardComponent,PokemonListComponent,PokemonDetailsComponent],
    providers: [],
})
export class PokemonModule { }
