import { Component, ElementRef, EventEmitter, Output, OnInit, ViewChild } from '@angular/core';
import { MeatBaseService } from 'src/app/services/meat-base.service';
import { VegetablesAndFruitsService } from 'src/app/services/vegetables-and-fruits.service';
import { IMeatType } from '../interfaces/IMeatType';
import { ITableHeader } from '../interfaces/ITableHeader';
import { WarningDialogComponent } from 'src/app/global/warning-dialog/warning-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';


@Component({
  selector: 'app-meat-selection',
  templateUrl: './meat-selection.component.html',
  styleUrls: ['./meat-selection.component.css']
})
export class MeatSelectionComponent implements OnInit {
  @ViewChild('weightInfo') weightValue!: ElementRef;
  @ViewChild('weightInfo') weightValueVeg!: ElementRef;

  @Output() afterMeatStep = new EventEmitter<{changeVisiblity: boolean, selectedFood: IMeatType}>();

  public allMeats: IMeatType[] = [];
  public allTips: IMeatType[] = [];
  public selectedMeats: IMeatType[] = [];
  public selectedTip: IMeatType[] = [];

  public commonElements: IMeatType = {
    Id: 0,
    Name: 'Łącznie',
    Weight: 0,
    Kcal: 0,
    Protein: 0,
    Fats: 0
  }

  public tableColumnsHeader: ITableHeader[] = [
    { Name: 'Nazwa', Width: 30 },
    { Name: 'Waga', Width: 15 },
    { Name: 'Kcal', Width: 15 },
    { Name: 'Białka', Width: 15 },
    { Name: 'Tłuszcze', Width: 15 },
    { Name: '', Width: 10},
    ]

  public isVisible: boolean = true;
  public selectedMeatId: number = 0;
  public selectedTipId: number = 0;

  constructor(
    private meatService: MeatBaseService,
    private tipsService: VegetablesAndFruitsService,
    private modal: MatDialog,
    ) { }

  ngOnInit(): void {
    this.allMeats = this.meatService.getAllMeats();
    this.allTips = this.tipsService.getAllTips();
    
  }

  onMeatSelected(id: number, selector: string) {
    
    if (selector === 'meat') {
      this.selectedMeatId = id;
      
    }

    if (selector ==='vege') {
      this.selectedTipId = id;
    }
    
  }

  public addMeatToList(weight: any) {
    
    if (!this.weightValue.nativeElement.value) {
      const modalConfig = new MatDialogConfig();

      modalConfig.disableClose = true;
      modalConfig.data =  {
        headerText: 'Nie można dodać',
        contentText: 'Waga musi być większa niż 0',
        confirmBtnText: 'Ok',
      }

      this.modal.open(WarningDialogComponent,  modalConfig);
    } else {
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

      this.weightValue.nativeElement.value = null;
      this.weightValueVeg.nativeElement.value = null;
    }
  }

  public addTipToList(weight: any) {
    this.allTips.forEach(el => {
      if (el.Id === +this.selectedTipId) {
        
        const recalculatedEl = this.macroCalculator(el, weight);
        
        this.selectedMeats.push(recalculatedEl);
        this.commonElements.Weight = +this.toDecimal(this.commonElements.Weight + el.Weight, 3);
        this.commonElements.Kcal = +this.toDecimal(this.commonElements.Kcal + el.Kcal, 3);
        this.commonElements.Protein = +this.toDecimal(this.commonElements.Protein + el.Protein, 3);
        this.commonElements.Fats = +this.toDecimal(this.commonElements.Fats + el.Fats, 3);
      }
    })

    this.weightValue.nativeElement.value = null;
    this.weightValueVeg.nativeElement.value = null;
    
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

  public onDeleteItem(item: IMeatType) {
    if (this.selectedMeats.length > 0) {
      this.selectedMeats.forEach((el, i) => {
        if (el.Id === item.Id) {
          this.selectedMeats.splice(i, 1);

          this.commonElements.Weight = +this.toDecimal(this.commonElements.Weight - el.Weight, 3);
          this.commonElements.Kcal = +this.toDecimal(this.commonElements.Kcal - el.Kcal, 3);
          this.commonElements.Protein = +this.toDecimal(this.commonElements.Protein - el.Protein, 3);
          this.commonElements.Fats = +this.toDecimal(this.commonElements.Fats - el.Fats, 3);
        }
      })
    }
  }

  public onNextStepHandler(withWeight?: boolean) {
    
    if (withWeight) {

    } else {
      this.isVisible = false;
      this.afterMeatStep.emit({
        changeVisiblity: true,
        selectedFood: this.commonElements,
      })
    }
  }
}
