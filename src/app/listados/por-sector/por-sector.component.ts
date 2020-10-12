import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { error } from 'protractor';
import { Sector } from 'src/app/models/sector';
import { DataBaseService } from 'src/app/servicios/data-base.service';

@Component({
  selector: 'app-por-sector',
  templateUrl: './por-sector.component.html',
  styleUrls: ['./por-sector.component.scss']
})
export class PorSectorComponent implements OnInit {

  formxSector : FormGroup
  sector : Array<Sector> = new Array<Sector>();
  sectorQuery : Array<Sector> = new Array<Sector>();
  sectores: number;

  constructor(private fb:FormBuilder, private service : DataBaseService) { }

  ngOnInit(): void {

    this.service.leerSector().subscribe((item)=>{
      this.sector = item;
    })
    
    this.formxSector = this.fb.group({
      id_Sec: ['', Validators.required]
    })
  }

  agregar(){
    let idSector = this.sectores;

    this.service.leerSectorxId(idSector).subscribe((item)=>{
      this.sectorQuery = item;
      console.log(this.sectorQuery)
      this.generacionPdf();
    },error=>{
      console.log("exploto"+error);
    })
  }
  agregar1(){
    let idSector = this.sectores

    this.service.leerSectorxId(idSector).subscribe((item)=>{
      this.sectorQuery = item;
      console.log(this.sectorQuery)
      this.generacionPdf();
    },error=>{
      console.log("exploto"+error);
    })
  }

  sectoresID(event){
    this.sectores = event
    console.log(this.sectores)
  }

  generacionPdf(){


  }

}
