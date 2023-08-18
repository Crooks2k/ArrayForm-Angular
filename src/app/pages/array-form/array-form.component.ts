import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.css']
})
export class ArrayFormComponent {

  constructor(){}
  arrayForm: FormGroup = new FormGroup({
    cardList: new FormArray([this.getCardFields()])
  })
  getCardFields(): FormGroup{
    return new FormGroup({
      card: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      cardid: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)] ),
    })
  }

  cardListArray(){
    return this.arrayForm.get('cardList') as FormArray
  }

  AddCardToPay(){
    this.cardListArray().push(this.getCardFields())
  }

  removeCard(index: number){
    this.cardListArray().removeAt(index)
  }

  getFormData(){
    console.log(this.arrayForm.value)
    console.log(this.cardListArray())
  }
}
