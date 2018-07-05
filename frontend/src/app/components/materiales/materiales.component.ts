import { Component, OnInit } from '@angular/core';

import { MaterialesService } from '../../services/materiales.service';
import { NgForm } from '@angular/forms';
import { Materiales } from '../../models/materiales';

declare var M: any;

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.css'],
  providers: [ MaterialesService]
})
export class MaterialesComponent implements OnInit {

  constructor(private materialesService : MaterialesService) { }

  ngOnInit() {
    this.GetMateriales();
  }

  AddMaterial(form?: NgForm) {
 //   console.log(form.value);
    if(form.value._id) {
       this.materialesService.PutMaterial(form.value)
        .subscribe( res => {
          console.log(res);
          this.resetForm(form);
          this.GetMateriales();
          M.toast({html: 'Update successfully'});
        });
    } else {
      this.materialesService.PostMateriales(form.value)
      .subscribe(res => {
        console.log(res);
        this.GetMateriales();
        this.resetForm(form);
        M.toast({html: 'Save successfully'});
      });
    }
    
  }

  GetMateriales() {
    this.materialesService.GetMateriales()
      .subscribe(res => {
        this.materialesService.materiales = res as Materiales[];
      });
  }

  EditarMaterial(material: Materiales) {
    this.materialesService.selectedMaterial = material;
  }

  DeleteMaterial(_id: string, form: NgForm) {
    if(confirm('Are you sure you want to delete it?')) {
      this.materialesService.DeleteMaterial(_id)
        .subscribe(res => {
          this.GetMateriales();
          this.resetForm(form);
          M.toast({html: 'Deleted Succesfully'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.materialesService.selectedMaterial = new Materiales();
   }
  }
}
