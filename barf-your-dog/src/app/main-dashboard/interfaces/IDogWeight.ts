import { Data } from "@angular/router";

export interface IDogWeight {
    Id: number;
    WeightId: number;
    Name: string;
    FullName?: string;
    Sex: string;
    Weight: number;
    Date: Data;
}