export interface ISuplie {
   Id: number;
   Name: string;
   Weight: number;
   isChecked: boolean | string;
   EPA?: number;
   EPAmg?: number;
   dailyDemand?: number;
   dogDemand?: number;
   doseToGram?: number;
   iE?: number;
   Jod?: number;
   JodDemand?: number; 
}