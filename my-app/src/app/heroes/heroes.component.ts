import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    //!name => when name is non-blank
    if (!name) { return; }
    //({ name } as Hero) => creates a Hero-like object from the name
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {this.heroes.push(hero);
      });
  }

  //If you neglect to subscribe(), the service will not send the delete request to the server.
  //As a rule, an Observable does nothing until something subscribes.
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
