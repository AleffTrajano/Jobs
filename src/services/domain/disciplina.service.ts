import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/config.api";
import { DiscipliaDTO } from "../../models/disciplinas.dto";
import { Observable } from "rxjs/Rx";

@Injectable()
export class DisciplinaService{

    constructor(public http:HttpClient){

        
    }
    //funcao tipada retornando uma lista de disciplina dto
    findAll(): Observable<DiscipliaDTO[]> { 
        return this.http.get<DiscipliaDTO[]>(`${API_CONFIG.baseUrl}/disciplinas`);
    }

}