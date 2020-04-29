import {Component, OnInit, Input} from '@angular/core';
import {Hero} from "../hero";
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(private route: ActivatedRoute,
              private heroService: HeroService,
              private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getHero()
  }

  //route parameters are always strings
  //the '+' sign converts a string to a number
  getHero():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  // The location is an Angular service for interacting with the browser.
  // You'll use it later to navigate back to the view that navigated here.
  goBack(): void{
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
