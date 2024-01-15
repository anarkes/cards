import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  constructor() {}

  getAll() {
    return [
      {"name": "bulbasaur", "id": 1, "forms_switchable": false},
      {"name": "ivysaur", "id": 2,"forms_switchable": false},
      {        "name": "venusaur", "id": 3, "forms_switchable": true},
      {        "name": "charmander", "id": 4, "forms_switchable": false},
      {        "name": "charmeleon", "id": 5, "forms_switchable": false},
      {        "name": "charizard", "id": 6, "forms_switchable": true}];
  }
}