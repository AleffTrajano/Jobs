import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DisciplinaService } from '../../services/domain/disciplina.service';



@IonicPage()
@Component({
  selector: 'page-disciplinas',
  templateUrl: 'disciplinas.html',
})
export class DisciplinasPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public disciplinaService:DisciplinaService){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisciplinaService');
    this.disciplinaService.findAll()
      .subscribe(response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
   
    
    
  }

}
