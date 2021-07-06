
// Etape 1 : je définis le format des données reçu de l'API
export interface Measure {
  id: number;
  measureDate: Date;
  type: string;
  unit: string;
  value: number;
}
