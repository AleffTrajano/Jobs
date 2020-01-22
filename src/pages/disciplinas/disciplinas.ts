import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DisciplinaService } from '../../services/domain/disciplina.service';

/**
 * Generated class for the DisciplinasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-disciplinas',
  templateUrl: 'disciplinas.html',
})
export class DisciplinasPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public DisciplinaService:DisciplinaService){
  }

  ionViewDidLoad() {
    this.DisciplinaService.findAll()
    .subscribe(response => {
      console.log(response);
    },
    erro =>{
      console.log(erro);
    })
   
    
    
  }

}
