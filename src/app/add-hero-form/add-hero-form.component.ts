import { Component } from '@angular/core';
import { SuperHero } from '../models/superhero';

@Component({
  selector: 'app-add-hero-form',
  templateUrl: './add-hero-form.component.html',
  styleUrls: ['./add-hero-form.component.css']
})
export class AddHeroFormComponent {
  superPowers = [
    'Super Strength',
    'Super Flexibility',
    'Super Speed',
    'Super Intelligence',
    'Teleportation',
    'Wealth',
    'Invisibility',
    'Super Stamina',
    'Laser Eyes',
    'Flight',
    'Super Vision',
    'Super Healing'
  ]

  superHero = new SuperHero(10, 'Iron Man', 'Tony Stark', this.superPowers[3])
  submitted = false

  addSuperHero() {
    this.superHero = new SuperHero(11, '', '', '')
  }

  submit() {
    this.submitted = true;
  }
}
