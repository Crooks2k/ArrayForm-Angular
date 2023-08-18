import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArrayFormComponent } from './array-form.component';
import { ReactiveFormsModule, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

describe('ArrayFormComponent', () => {
  let component: ArrayFormComponent;
  let fixture: ComponentFixture<ArrayFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrayFormComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents()
    fixture = TestBed.createComponent(ArrayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('AddCardToPay', () =>{

       spyOn(component, 'getCardFields').and.callFake(() => {
        return new FormGroup({
          card: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
          cardid: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]),
        })
      })

      const initialCardCount = component.cardListArray().length

      component.AddCardToPay()

      const finalCardCount = component.cardListArray().length

      expect(finalCardCount).toBe(initialCardCount + 1)
  })
});

