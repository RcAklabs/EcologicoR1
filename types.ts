export enum Page {
  HOME = 'HOME',
  COMPANY = 'COMPANY',
  TESTIMONIALS = 'TESTIMONIALS',
  CONTACT = 'CONTACT',
  // Product Sub-pages
  PROD_FLORES = 'PROD_FLORES',
  PROD_RAICES = 'PROD_RAICES',
  PROD_HOJAS = 'PROD_HOJAS',
}

export interface ChartDataPoint {
  name: string;
  testigo: number;
  ecologico: number;
  unit: string;
}

export interface ProductContent {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  chartData: ChartDataPoint[];
  chartLabel: string;
  image: string;
}