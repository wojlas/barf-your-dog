import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MeatBaseService } from 'src/app/services/meat-base.service';
import { IMeatType } from '../interfaces/IMeatType';

@Component({
  selector: 'app-meat-selection',
  templateUrl: './meat-selection.component.html',
  styleUrls: ['./meat-selection.component.css']
})
export class MeatSelectionComponent implements OnInit {

  public allMeats: IMeatType[] = [];
  public selectedMeats: IMeatType[] = [];
  public commonElements: IMeatType = {
    Id: 0,
    Name: 'Łącznie',
    Weight: 0,
    Kcal: 0,
    Protein: 0,
    Fats: 0
  }

  public isVisible: boolean = true;
  public selectedMeatId: number = 0;

  constructor(private meatService: MeatBaseService) { }

  ngOnInit(): void {
    this.allMeats = this.meatService.getAllMeats();
  }

  onMeatSelected(id: number) {
    this.selectedMeatId = id;
  }

  public addMeatToList(weight: any) {
    this.allMeats.forEach(el => {
      if (el.Id === +this.selectedMeatId) {
        const recalculatedEl = this.macroCalculator(el, weight);
        
        this.selectedMeats.push(recalculatedEl);
        this.commonElements.Weight = +this.toDecimal(this.commonElements.Weight + el.Weight, 3);
        this.commonElements.Kcal = +this.toDecimal(this.commonElements.Kcal + el.Kcal, 3);
        this.commonElements.Protein = +this.toDecimal(this.commonElements.Protein + el.Protein, 3);
        this.commonElements.Fats = +this.toDecimal(this.commonElements.Fats + el.Fats, 3);
      }
    })
  }

  public macroCalculator(element: IMeatType, weight: number) {
    element.Weight = +weight;
    let kcal = (element.Kcal / 100) * weight;
    element.Kcal = +this.toDecimal(kcal, 3);
    let protein = (element.Protein / 100) * weight;
    element.Protein = +this.toDecimal(protein, 3);
    let fats = (element.Fats / 100) * weight;
    element.Fats = +this.toDecimal(fats, 3);
    
    return element;
  }

  public toDecimal(figure: number, decimals = 0){
    let d = Math.pow(10,decimals);
    return (figure * d/d).toFixed(decimals);
  };

  public onDeleteItem(id: number) {
    if (this.selectedMeats.length > 0) {
      this.selectedMeats.forEach((el, i) => {
        if (el.Id === id) {
          this.selectedMeats.splice(i, 1);

          this.commonElements.Weight = +this.toDecimal(this.commonElements.Weight - el.Weight, 3);
          this.commonElements.Kcal = +this.toDecimal(this.commonElements.Kcal - el.Kcal, 3);
          this.commonElements.Protein = +this.toDecimal(this.commonElements.Protein - el.Protein, 3);
          this.commonElements.Fats = +this.toDecimal(this.commonElements.Fats - el.Fats, 3);
        }
      })
    }

    
  }
  

}
