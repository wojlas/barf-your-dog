import { Data } from "@angular/router";

export interface IDogWeight {
    Id: number;
    WeightId: number;
    Name: string;
    FullName?: string;
    Sex: string;
    Weight: number;
    DailyMeal: number;
    Target: number;
    NumberOfMeals: number;
}