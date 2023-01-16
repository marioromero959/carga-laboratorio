import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable'


export interface Table {
  position: number;
  nombre: string;
  valor: any;
  header: boolean;
  referencia: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  @ViewChild(MatTable)
  table!: MatTable<any>;
  displayedColumns: string[] = ['nombre', 'valor', 'referencia'];

  hemograma: Table[] = [
    {
      position: 1,
      header: false,
      nombre: 'Globulos Rojos',
      valor: '',
      referencia: 'vr: 3.800.000 a 6.500.000',
    },
    {
      position: 2,
      header: false,
      nombre: 'Globulos Blancos',
      valor: '',
      referencia: 'vr: 4.000 a 10.500',
    },
    {
      position: 3,
      header: false,
      nombre: 'Hemoglobina',
      valor: '',
      referencia: 'vr: 12.0 a 17.0',
    },
    {
      position: 4,
      header: false,
      nombre: 'Hematocrito',
      valor: '',
      referencia: 'vr: 37.0 a 54.0',
    },
    {
      position: 5,
      header: false,
      nombre: 'Vol.Corp.Medio',
      valor: '',
      referencia: '80 - 97 fl',
    },
    {
      position: 6,
      header: false,
      nombre: 'Hemogl.Corp.Media',
      valor: '',
      referencia: '27 - 32 pg',
    },
    {
      position: 7,
      header: false,
      nombre: 'Conc.Hemogl.Corp.Media',
      valor: '',
      referencia: '31 - 36 gr/dl',
    },
    {
      position: 8,
      header: false,
      nombre: 'Indice de anisocitosis (RDW)',
      valor: '',
      referencia: 'hasta 14.5%',
    },
    {
      position: 9,
      header: false,
      nombre: 'Plaquetas',
      valor: '',
      referencia: 'vr: 150.000 a 450.000',
    },
    {
      position: 10,
      header: true,
      nombre: 'Formula Leucocitaria',
      valor: '',
      referencia: '',
    },
    {
      position: 11,
      header: false,
      nombre: 'Neutrófilos',
      valor: '',
      referencia: 'vr: 37.0 a 72.0 (1.665 a 7.560)',
    },
    {
      position: 12,
      header: false,
      nombre: 'Eosinófilos',
      valor: '',
      referencia: 'vr: 0.0 a 6.0 (0 a 630)',
    },
    {
      position: 13,
      header: false,
      nombre: 'Basófilos',
      valor: '',
      referencia: 'vr:0.0 a 1.0 (0 a 105)',
    },
    {
      position: 14,
      header: false,
      nombre: 'Linfocitos',
      valor: '',
      referencia: 'vr: 20 a 50 (900 a 5.250)',
    },
    {
      position: 15,
      header: false,
      nombre: 'Monocitos',
      valor: '',
      referencia: 'vr: 0.0 a 14.0 (0 a 1470)',
    },
    {
      position: 16,
      header: true,
      nombre: 'Morfología Eritrocitaria:',
      valor: '',
      referencia: '',
    },
    {
      position: 17,
      header: false,
      nombre: 'Volumen del eritrocito:',
      valor: '',
      referencia: '',
    },
    {
      position: 18,
      header: false,
      nombre: 'Hipocromia Eritrocitaria:',
      valor: '',
      referencia: '',
    },
    {
      position: 19,
      header: false,
      nombre: 'Hipercromia Eritrocitaria:',
      valor: '',
      referencia: '',
    },
    {
      position: 20,
      header: false,
      nombre: 'Anisocitosis Eritrocitos:',
      valor: '',
      referencia: '',
    },
    {
      position: 21,
      header: true,
      nombre: 'Alteraciones Leucocitarias:',
      valor: '',
      referencia: '',
    },
    {
      position: 22,
      header: false,
      nombre: 'Leucocitosis:',
      valor: '',
      referencia: '',
    },
    {
      position: 23,
      header: false,
      nombre: 'Leucopenia:',
      valor: '',
      referencia: '',
    },
    {
      position: 24,
      header: false,
      nombre: 'Desviacion a la Izquierda:',
      valor: '',
      referencia: '',
    },
    {
      position: 25,
      header: false,
      nombre: 'Desviacion a la Derecha:',
      valor: '',
      referencia: '',
    },
    {
      position: 26,
      header: false,
      nombre: 'Neutrofilos:',
      valor: '',
      referencia: '',
    },
    {
      position: 27,
      header: false,
      nombre: 'Eosinofilos:',
      valor: '',
      referencia: '',
    },
    {
      position: 28,
      header: false,
      nombre: 'Linfocitos:',
      valor: '',
      referencia: '',
    },
    {
      position: 29,
      header: false,
      nombre: 'Eritrosedimentacion 1 hr',
      valor: '',
      referencia: '',
    },
  ];
  hemoglobina: Table[] = [
    {
      position: 30,
      header: false,
      nombre:
        'Inmunoturbidimetria Teconologia: COBAS C111- ROCHE DIAGNOSTICS Material examinado: sangre entera',
      valor: '',
      referencia: 'vr: 4.8 a 6.0',
    },
    {
      position: 31,
      header: false,
      nombre:
        'GLUCEMIA Método: Enzimático de referencia con hexoquinasa Tecnologia: COBAS C311- ROCHE DIAGNOSTICS',
      valor: '',
      referencia:
        'vr: Adultos: 70 - 110 mg/dl Niños: 60 - 110 mg/dl Glucemia en ayuna alterada (sin FR) : 110 - 126 mg/dl (con FR): 100 - 126 mg/dl Diabetes Mellitus: 2 veces >126 mg/dl',
    },
    {
      position: 32,
      header: false,
      nombre:
        'UREMIA Método: Cinético con Ureasa y Glutamato Deshidrogenasa Tecnologia: COBAS C311- ROCHE DIAGNOSTICS',
      valor: '',
      referencia: 'vr: 10-50 mg/dl',
    },
    {
      position: 33,
      header: false,
      nombre: 'CREATININA Cinetico Tecnologia: COBAS C311- ROCHE DIAGNOSTICS',
      valor: '',
      referencia:
        'vr: De 1-3 años 0.24-0.41 mg/dl De 3-5 años 0.31-0.47 mg/dl De 5-7 años 0.32-0.59 mg/dl De 7-9 años 0.40-0.60 mg/dl De 9-11 años 0.39-0.73 mg/dl De 11-13 años 0.53-0.79 mg/dl De 13-15 años 0.57-0.87 mg/dl Adulto Hombre: 0.70-1.20 Adulto Mujer: 0.50-1.10',
    },
    {
      position: 34,
      header: false,
      nombre: 'CALCEMIA Método: Complejometria',
      valor: '',
      referencia:
        'Recién Nacido: 7.6-10.4 mg/dl Niños:8,8-10,8 mg/dl - Adultos:8,6-10,0 mg/dl',
    },
    {
      position: 35,
      header: false,
      nombre:
        'URICEMIA Enzimatico Colorimetrico Tecnologia: COBAS C311- ROCHE DIAGNOSTICS',
      valor: '',
      referencia: 'vr: Hombre: 3,40 a 7,00 mg/dl Mujer: 2,40 a 5,70 mg/dl',
    },
    {
      position: 36,
      header: false,
      nombre: 'Fosfatemia - Colorimetrico',
      valor: '',
      referencia: 'vr: Adultos: 2.50 a 5.60 mg% Niños: 4.00 a 7.00 mg%',
    },
    {
      position: 37,
      header: false,
      nombre: 'Magnesemia - Colorimetrico',
      valor: '',
      referencia: 'vr: 1.90 a 2.50 mg/dl',
    },
    {
      position: 38,
      header: false,
      nombre:
        'Amilasemia - Enzimatico Tecnologia: COBAS C311- ROCHE DIAGNOSTICS',
      valor: '',
      referencia: 'vr: hasta 28 a 100 U/l',
    },
  ]
  coagulograma: Table[] = [
    {
      position: 39,
      header: true,
      nombre: 'Tiempo de Protrombina',
      valor: '',
      referencia: '',
    },
    {
      position: 40,
      header: false,
      nombre:
        'Coagulométrico turbidimétrico Automatizado Instrumento: ST4 / ST-ART',
      valor: '',
      referencia: 'vr: 10.0 - 15.4 seg',
    },
    {
      position: 41,
      header: false,
      nombre: 'Actividad Protrombínica',
      valor: '',
      referencia: 'V.N. 70 a 110',
    },
    {
      position: 42,
      header: true,
      nombre: 'RIN',
      valor: '',
      referencia: '',
    },
    {
      position: 43,
      header: false,
      nombre:
        'Coagulométrico turbidimétrico Automatizado Instrumento: ST4 / ST-ART',
      valor: '',
      referencia: '1.50 Rango terapéutico: entre 2-3',
    },
    {
      position: 44,
      header: true,
      nombre: 'K.P.T.T.',
      valor: '',
      referencia: '',
    },
    {
      position: 45,
      header: false,
      nombre:
        'Coagulométrico turbidimétrico Automatizado Instrumento: ST4 / ST-ART',
      valor: '',
      referencia: 'vr: 25-45 seg',
    }
  ];
  ionograma: Table[] = [
    {
      position: 46,
      header: false,
      nombre: 'Potasio serico - ISE - Electrodo ion selectivo',
      valor: '',
      referencia: 'vr: 3.5 - 5.1 meq/L',
    },
    {
      position: 47,
      header: false,
      nombre: 'Sodio Serico - ISE - Electrodo ion selectivo',
      valor: '',
      referencia: 'vr: 136 - 145 meq/L',
    },
    {
      position: 48,
      header: false,
      nombre: 'Cloro Serico - ISE - Electrodo ion selectivo',
      valor: '',
      referencia: 'vr: 98.0 - 107.0 meq/L',
    }
  ];
  hepatograma: Table[] = [
    {
      position: 49,
      header: false,
      nombre: 'Bilirubinemia Total',
      valor: '',
      referencia: 'vr: adultos hasta 1.2 mg/dl',
    },
    {
      position: 50,
      header: false,
      nombre: 'Bilirrubina Directa',
      valor: '',
      referencia: 'vr : hasta 0.30 mg/dl ',
    },
    {
      position: 51,
      header: false,
      nombre: 'Bilirrubina Indirecta',
      valor: '',
      referencia: 'vr : hasta 0.90 mg/dl',
    },
    {
      position: 52,
      header: false,
      nombre: 'Transaminasas Glutamico Oxalacetica (AST)',
      valor: '',
      referencia: 'Hombres hasta 40 U/l Mujer hasta 32 u/l',
    },
    {
      position: 53,
      header: false,
      nombre: 'Transaminasas Glutamico Piruvica (ALT)',
      valor: '',
      referencia: 'Hombres hasta 41 U/l Mujer hasta  33 u/l',
    },
    {
      position: 54,
      header: false,
      nombre: 'Fosfatasa Alcalina ',
      valor: '',
      referencia:
        'Hombres 40 a 129 U/l - Mujeres 35 a 104 U/l - Niños hasta 5 veces el valor del adulto',
    },
    {
      position: 55,
      header: false,
      nombre: 'Proteinas Totales Albumina',
      valor: '',
      referencia: 'vr: 6.40 a 8.30 g/dL',
    },
    {
      position: 56,
      header: false,
      nombre: 'Albumina',
      valor: '',
      referencia:
        'neonatos: 2.80 a 4.40 g/dl menor 14 años 3.80 a 5.40 g/dl 14 a 18 años 3.20 a 4.50 g/dl adultos: 3.50 a 5.20 d/dl',
    },
    {
      position: 57,
      header: false,
      nombre: 'Relación ALB/GLOB',
      valor: '',
      referencia: 'vr: 1.20 a 2.20',
    }
  ]
  indiceAterogenico: Table[] = [
    {
      position: 58,
      header: false,
      nombre: 'Colesterol NO HDL',
      valor: '',
      referencia:
        'Deseable < 130 mg/dl Riesgo Bajo 131 a 189 mg/dl Riesgo alto: 190 a 219 mg/dl Riesgo Muy Alto: > 220 mg/dl',
    },
    {
      position: 59,
      header: false,
      nombre: 'Colesterol Total/C-HDL',
      valor: '',
      referencia: 'Vr: Menor 4.00',
    },
    {
      position: 60,
      header: false,
      nombre: 'Colesterol-LDL/Colesterol-HDL',
      valor: '',
      referencia: 'Vr: menor a 3.00',
    },
    {
      position: 61,
      header: false,
      nombre: 'Trigliceridos / Colesterol HDL',
      valor: '',
      referencia: 'Vr: Menor a 3.5',
    },
    {
      position: 62,
      header: false,
      nombre: 'Aspecto del Plasma',
      valor: '',
      referencia: '',
    },
    {
      position: 63,
      header: false,
      nombre:
        'Insulina Electroquimioluminiscencia Instrumento: Cobas E-411 - Roche Diagnostics Material: Suero',
      valor: '',
      referencia:
        'Valor de Referencia: Adultos 2.00 a 24.9 uUI/ml Prepúberes:Hasta 15 uUI/ml Pubertad media : Hasta 20 uUI/ml',
    },
    {
      position: 64,
      header: false,
      nombre:
        'TSHu - Tirotropina (ultrasensible)Electroquimioluminiscencia Instrumento : Cobas E -411',
      valor: '',
      referencia:
        'Valor de Referencia: 1 - 11 meses: 0.8 - 6.2 µUI/ml 1-5 años: 0.7 - 5.7 µUI/ml 6 - 10 años: 0.6 - 5.0 µUI/ml 11 - 14 años: 0.5 - 4.4 µUI/ml 15 - 18 años: 0.5 - 4.4 µUI/ml Adultos : 0.27 a 4.12 µUI/ml',
    },
    {
      position: 65,
      header: false,
      nombre:
        'T3 Total - Triiodotironina Total Electroquimioluminiscencia Instrumento : Cobas E -411',
      valor: '',
      referencia:
        'Valor de Referencia: 1 - 11 meses: 1.0 - 2.2 ng/ml 1-5 años: 0.9 - 2.2 ng/ml 6 - 10 años: 0.9 - 2.1 ng/ml 11 - 14 años: 0.7 - 1.9 ng/ml 15 - 18 años: 0.6 - 1.7 ng/ml Adultos : 0.84 a 2.0 ng/ml',
    },
    {
      position: 66,
      header: false,
      nombre:
        'T4L - Tiroxina Libre Electroquimioluminiscencia Instrumento: Cobas E 411 Roche Diagnostics Material: suero ',
      valor: '',
      referencia:
        'Valor de Referencia: 1 - 11 meses: 0.9 - 1.8 ng/dl 1-5 años: 0.9 - 1.6 ng/dl 6 - 10 años: 0.8 - 1.5 ng/dl 11 - 14 años: 0.7 - 1.5 ng/dl 15 - 18 años: 0.7 - 1.5 ng/dl Adultos : 0.93 a 1.71 ng/dl',
    },
    {
      position: 67,
      header: false,
      nombre:
        'Peptido C Electroquimioluminiscencia Instrumento Cobas E -411 Materia: suero ',
      valor: '',
      referencia: 'Valor de Referencia: 0.9 a 4.0 ng/ml',
    },
    {
      position: 68,
      header: false,
      nombre:
        'Vitamina D2 YD3 (25-Hidroxi Vitamina D2 YD3)  Electroquimioluminiscencia Isntrumento Cobas E-411',
      valor: '',
      referencia:
        'VR: Recomendado: mayor a 30 ng/ml Insuficiencia: entre 20 y 29 ng/ml Deficiencia: Menor a 20 ng/ml Se recomienda tener en cuenta que los niveles de 25 OH vitamina D pueden variar según el sexo, la edad, la época del año, la latitud geográfica y el grupo étnico. Por lo tanto valores mas bajos son esperables en epoca invernal.',
    },
    {
      position: 69,
      header: false,
      nombre: 'T4 Total - Tiroxina Total Electroquimioluminiscencia In',
      valor: '',
      referencia:
        'Valor de Referencia: 1 - 11 meses: 6.3 - 13.6 µg/dl 1-5 años: 6.0 - 13.0 µg/dl 6 - 10 años: 5.13 - 14.0 µg/dl 11 - 14 años: 5.4 - 12.0 µg/dl 15 - 18 años: 5.0 - 11.8 µg/dl Adultos : 5.0 - 11.8 µg/dl',
    },
    {
      position: 70,
      header: false,
      nombre: 'Marcador CA 19-9 (Colon) Metodo: Quimioluminiscencia',
      valor: '',
      referencia:
        'VR: individuos sanos: Hasta 37.0 UI/ml. En casos de pancreatitis, diabetes cirrosis, vesicula biliar, hepatitis y patologias renales los valores se pueden elevar hasta 500 UI/ml',
    },
    {
      position: 71,
      header: false,
      nombre: 'Marcador CA 15.3 (mama) Metodo: Quimioluminiscencia',
      valor: '',
      referencia: ' V R: 0.0 a 32.4 U/ml',
    },
    {
      position: 72,
      header: false,
      nombre: 'MARCADOR CA 125 (OVARIO) Metodo: Quimioluminiscencia',
      valor: '',
      referencia: 'Hasta 30.2 U/ml',
    },
  ];
  sedimentoUrinario: Table[] = [
    {
      position: 73,
      header: false,
      nombre: 'Leucocitos',
      valor: '',
      referencia: '',
    },
    {
      position: 74,
      header: false,
      nombre: 'Células Epiteliales',
      valor: '',
      referencia: '',
    },
    {
      position: 75,
      header: false,
      nombre: 'Hematíes',
      valor: '',
      referencia: '',
    },
    {
      position: 76,
      header: false,
      nombre: 'Color ',
      valor: '',
      referencia: '',
    },
    {
      position: 77,
      header: false,
      nombre: 'Aspecto',
      valor: '',
      referencia: '',
    },
    {
      position: 78,
      header: false,
      nombre: 'Ph',
      valor: '',
      referencia: '',
    },
    {
      position: 79,
      header: false,
      nombre: 'Densidad ',
      valor: '',
      referencia: '',
    },
    {
      position: 80,
      header: false,
      nombre:
        'Ferremia - Método: Colorimétrico Tecnologia: COBAS C311- ROCHE DIAGNOSTICS Material: Suero',
      valor: '',
      referencia:
        'Valores de Referencia: Adultos 33 a 193 ug/dl 6-12 meses 35 a 115 ug/dl 1-12 años 22 a 135 ug/dl La concentración de hierro depende de la ingestión de hierro y está sujeta a variaciones circadianas.',
    },
    {
      position: 81,
      header: false,
      nombre:
        'Vitamina B1 (Tiamina) - Metodo: Cromatografía líquida de alta presión (HPLC) Muestra: Suero protegido de la luz',
      valor: '',
      referencia: 'Valor de Referencia: Adultos: 4.0 a 20.0 ug/l',
    },
    {
      position: 82,
      header: false,
      nombre:
        'Vitamina B6 (Piridoxina) - Cromatografía líquida de alta presión (HPLC)',
      valor: '',
      referencia:
        'Valor de Referencia: 2 a 17 años: 3.0 a 40.0 ng/ml Adultos: 10 a 40 ng',
    },
    {
      position: 83,
      header: false,
      nombre: 'Apoliproteína Apo- B - Inmunoturbidimetría',
      valor: '',
      referencia: 'V.R.: Hombres: 66 a 133 mg/dl Mujeres: 60 a 117 mg/dl',
    },
    {
      position: 84,
      header: false,
      nombre:
        'Proteina C Reactivo Ultrasensible - Método: Turbidimetría Las instituciones CDC y AHA recomiendan los siguientes valores en la evaluación de riesgo de cardiopatías coronarias',
      valor: '',
      referencia:
        'Valor de Referencia: Hasta 5.0 mg/l Riesgo Cardiovascular <1.0 Riesgo Bajo 1.0-3.0 Riesgo Medio 3.0-10.0 Riesgo Alto >10.0 Riesgo muy alto',
    },
    {
      position: 85,
      header: false,
      nombre: 'Indice de HOMA ',
      valor: '',
      referencia:
        'Valores mayores a 3.0 dan indicios de resistencia a la insulina',
    },
    {
      position: 86,
      header: false,
      nombre: 'Acido Folico - Quimioluminscencia',
      valor: '',
      referencia: 'Valor de Referencia: Normal: mayor a 5.3 ng/ml',
    },
    {
      position: 87,
      header: false,
      nombre: 'Vitamina A (Retinol) - Cromatografía líquida',
      valor: '',
      referencia:
        'Valor de Referencia: 1 - 6 años: 0.25 a 0.43 mg/l Adultos: 0.34 a 0.80 mg/l',
    },
    {
      position: 88,
      header: false,
      nombre:
        'Vitamina B6 (Piridoxina) - Cromatografía líquida de alta presión (HPLC)',
      valor: '',
      referencia:
        'Valor de Referencia: 2 a 17 años: 3.0 a 40.0 ng/ml Adultos: 10 a 40 ng/ml',
    },
    {
      position: 89,
      header: false,
      nombre:
        'Vitamina B12 - Electroquimioluminiscencia Instrumento: Cobas E-411 - Roche Diagnostics Material: Suero protegido de la luz',
      valor: '',
      referencia: 'Valor de Referencia: 210 a 910 pg/ml',
    },
    {
      position: 90,
      header: false,
      nombre:
        'Vitamina C (Ac. Ascorbico) - Cromatografía líquida de alta presión (HPLC)',
      valor: '',
      referencia: 'Valor de Referencia: 0.20 - 2.00 mg/100 ml',
    },
    {
      position: 91,
      header: false,
      nombre: 'Apolipoproteinas Apo-A1 - Inmunoturbidimetría',
      valor: '',
      referencia: 'V.R. Hombres: 104 a 202 mg/dl Mujeres: 108 a 225 mg/dl',
    },
    {
      position: 92,
      header: false,
      nombre: 'Lipoproteína a -Lp(a) - ITD',
      valor: '',
      referencia: 'Valor de Referencia: Hasta 30 mg/dl',
    },
    {
      position: 93,
      header: false,
      nombre: 'Aluminio serico - Absorción atómica',
      valor: '',
      referencia:
        'Valor de Referencia: Hasta 0.60 ug/dl Diálisis crónica: hasta 6.0 ug/dl',
    },
    {
      position: 94,
      header: false,
      nombre: 'Manganeso en suero - Absorción atómica',
      valor: '',
      referencia:
        'Valor de Referencia: Hasta 0.23 µg/dl Límite de detección: 0.10 µg/dl',
    },
    {
      position: 95,
      header: false,
      nombre:
        'Selenio en Suero - Absorción atómica Mayo Clinic Laboratories. SES, (2020)',
      valor: '',
      referencia:
        'VR : 0 a 2 meses: 45 - 90 ng/ml 3 a 6 meses: 50-120 ng/ml 7 a 9 meses: 60-120 ng/ml 10 a 12 meses: 70-130 ng/ml Mayor de 1 año: 70-150 ng/ml',
    },
    {
      position: 96,
      header: false,
      nombre: 'Zinc Serico - Colorimétrico',
      valor: '',
      referencia: '0-11 años: 66-100 ug/dl Mayor de 11 años: 60',
    },
    {
      position: 97,
      header: false,
      nombre:
        'Dehidroepiandrosterona Sulfato (DHEA-S) - Electroquimioluminiscencia Instrumento: Cobas E-411 - Roche Diagnostics Material: Suero',
      valor: '',
      referencia:
        'Valor de Referencia: Hombres: 18-39 años 108-520 ug/dl mayores 39 años:28-530 ug/dl Mujeres: 18- 39 años:45-395 ug/dl mayores de 39 años:17-270 ug/dl',
    },
    {
      position: 98,
      header: false,
      nombre: 'Testosterona Libre - Quimioluminiscencia. Fórmula de Vermeulen',
      valor: '',
      referencia:
        'Valores de referencia: Mujer adulta : 2.0 a 8.5 pg/ml Hombre adulto : 50.0 a 220.0 pg/ml',
    },
    {
      position: 99,
      header: false,
      nombre: 'Clearence de Creatinina',
      valor: '',
      referencia: '',
    },
    {
      position: 100,
      header: false,
      nombre: 'Diuresis',
      valor: '',
      referencia: 'Adulto: 1200 a 1500 ml',
    },
    {
      position: 101,
      header: false,
      nombre: 'Volumen Minuto',
      valor: '',
      referencia: '',
    },
    {
      position: 102,
      header: false,
      nombre: 'Creatinina urinaria',
      valor: '',
      referencia: '',
    },
    {
      position: 103,
      header: false,
      nombre: 'Creatinina en sangre',
      valor: '',
      referencia: '0.60 a 1.15 mg/dl',
    },
    {
      position: 104,
      header: false,
      nombre: 'Proteinuria',
      valor: '',
      referencia: '',
    },
    {
      position: 105,
      header: false,
      nombre: 'Diuresis:',
      valor: '',
      referencia: '',
    },
    {
      position: 106,
      header: false,
      nombre: 'Proteinuria',
      valor: '',
      referencia: '',
    },
    {
      position: 107,
      header: false,
      nombre:
        'Tiroglobulina, anticuerpos anti - Electroquimioluminiscencia Instrumento: Cobas E-411 - Roche Diagnostics Material: Suero',
      valor: '',
      referencia: 'vr: Hasta 60 U/ml',
    },
    {
      position: 108,
      header: false,
      nombre:
        'Factor Reumatoideo - Inmunoturbidimetria instrumento: COBAS C311 Roche Diagnostics',
      valor: '',
      referencia: 'vr: No Reactivo',
    },
    {
      position: 109,
      header: false,
      nombre: 'Indice de Reactividad de FR:',
      valor: '',
      referencia: 'vr: hasta 14 UI/ml',
    },
    {
      position: 110,
      header: false,
      nombre:
        'VDRL - Quimioluminiscencia Test inmunológico in vitro para la determinación cualitativa de los anticuerpos totales contra el Treponema pallidum.',
      valor: '',
      referencia: 'VR: No Reactivo',
    },
    {
      position: 111,
      header: false,
      nombre: 'ANTIC. ANTI DNA - Quimioluminiscencia',
      valor: '',
      referencia:
        'Negativo: menor de 20 UI/ml Indeterminado: 20 a 25 UI/ml Positivo: mayor de 25 UI/ml',
    },
    {
      position: 112,
      header: false,
      nombre:
        'ANTICUERPO ANTI NUCLEOCITOPLASMATICO (FAN) - Inmunofluorescencia Indirecta IFI Sustrato: Celulas Hep-2(alveolar epithelial carcinoma cell line)',
      valor: '',
      referencia: 'Valor de referencia: Negativo Dilución de corte: 1/80',
    },
    {
      position: 113,
      header: false,
      nombre:
        'C3- COMPLEMENTO BETA 1C - NEFELOMETRIA CINETICA Material examinado: suero',
      valor: '',
      referencia: 'vr: 82 a 193 mg/dl',
    },
    {
      position: 114,
      header: false,
      nombre:
        'C4 - COMPLEMENTO BETA 1E - Turbidimético Material examinado: suero',
      valor: '',
      referencia: 'VR: 10 a 40 mg/dl',
    },
  ];
  perfilLipido: Table[] = [
    {
      position: 115,
      header: false,
      nombre:
        'Colesterol Total - Enzimatico Colorimetrico Tecnologia: COBAS C311- ROCHE DIAGNOSTICS',
      valor: '',
      referencia: 'Deseable < 180 mg/dl Elevado > 200 mg/dl',
    },
    {
      position: 116,
      header: false,
      nombre:
        'HDL colesterol - colorimetrico enzimatico homogeneo Tecnologia: COBAS C311- ROCHE DIAGNOSTICS Material examinado: Suero',
      valor: '',
      referencia:
        'Sin riesgo Mujeres > 65 mg/dl Hombres > 55 mg/dl Riesgo Moderado Mujeres 45-65 mg/dl Hombres 35-55 mg/dl Alto Riesgo Mujeres < 45 mg/dl Hombres < 35 mg/dl',
    },
    {
      position: 117,
      header: false,
      nombre:
        'LDL colesterol - colorimetrico enzimatico homogeneo Tecnologia: COBAS C311- ROCHE DIAGNOSTICS Material examinado: Suero',
      valor: '',
      referencia: 'Valor deseable < 100 Valor elevado 130 a 159',
    },
    {
      position: 118,
      header: false,
      nombre: 'Colesterol NO - HDL',
      valor: '',
      referencia:
        'Deseable < 130 mg/dl Riesgo Bajo 131 a 189 mg/dl Riesgo alto: 190 a 219 mg/dl Riesgo Muy Alto: > 220 mg/dl',
    },
    {
      position: 119,
      header: false,
      nombre: 'VLDL-colesterol, Lipoproteina de muy Baja densidad',
      valor: '',
      referencia: 'vr: 10 a 40 mg/dl',
    },
    {
      position: 120,
      header: false,
      nombre:
        'Trigliceridos - Enzimatico colorimetrico Teconologia: COBAS C111- ROCHE DIAGNOSTICS Material examinado: Suero',
      valor: '',
      referencia:
        'vr: 50 - 150 mg/dl Según NCEP (European atherosclerosis Society)',
    },
    {
      position: 121,
      header: true,
      nombre: 'Clearence de Creatinina',
      valor: '',
      referencia: '',
    },
    {
      position: 122,
      header: false,
      nombre: 'Peso',
      valor: '',
      referencia: '',
    },
    {
      position: 123,
      header: false,
      nombre: 'Altura',
      valor: '',
      referencia: '',
    },
    {
      position: 124,
      header: false,
      nombre: 'Superficie Corporal',
      valor: '',
      referencia: '',
    },
    {
      position: 125,
      header: false,
      nombre: 'Diuresis',
      valor: '',
      referencia: '',
    },
    {
      position: 126,
      header: false,
      nombre: 'Volumen Minuto',
      valor: '',
      referencia: '',
    },
    {
      position: 127,
      header: false,
      nombre: 'Taza de Filtracion Glomerular',
      valor: '',
      referencia: '',
    },
    {
      position: 128,
      header: false,
      nombre: 'Creatinina urinaria',
      valor: '',
      referencia: '',
    },
    {
      position: 129,
      header: false,
      nombre: 'Creatinina en sangre',
      valor: '',
      referencia: '',
    },
    {
      position: 130,
      header: true,
      nombre: 'Proteinuria',
      valor: '',
      referencia: '',
    },
    {
      position: 131,
      header: false,
      nombre: 'Diuresis:',
      valor: '',
      referencia: '',
    },
    {
      position: 132,
      header: false,
      nombre: 'Proteinuria',
      valor: '',
      referencia: '',
    },
  ];

  @ViewChild('pdf', { static: false }) pdf!: ElementRef;

  control: FormControl = new FormControl('');
  formularioGeneral: FormGroup = new FormGroup('');
  doc = new jsPDF('p', 'px', 'a4');

  cargaHemograma:boolean = false;
  cargaCoagruorama:boolean = false;
  chequeados:any = [];
  campos:any = []


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formularioGeneral = this.createFrom();
  }

  createFrom(): FormGroup {
    return this.fb.group({
      nombre_apellido: [],
      obra_social: [],
      fecha: [],
      nombre_medico: [],
      hemogramaCompleto: this.fb.array([]),
      coagluorama: this.fb.array([]),
      ionograma: this.fb.array([]),
      indice_aterogenico: this.fb.array([]),
    });
  }

  cambioValor(element: any, valor: any) {
    let repetido = this.campos.find((el:any)=>el[0] == element.position)
    if(repetido){
      let index = this.campos.findIndex((el:any)=>el[0] == element.position)
      this.campos.splice(index,1)
    }
    this.campos.push([element.position,element.nombre,valor,element.referencia])
  }


  exportPDF() {
    console.log(this.pdf.nativeElement);
    let doc = new jsPDF('p', 'px', 'a4');
    doc.html(this.pdf.nativeElement, {
      callback: (doc) => {
        doc.save();
      },
      margin: 10,
      autoPaging: "slice",
      filename: "Protocolo CREO",
      image: undefined,
      html2canvas: undefined,
      jsPDF: undefined,
      x: undefined,
      y: 10,
      width: 400,
      windowWidth: 1000,
      fontFaces: undefined,
    }
    )
  }

  generarPDF() {
    // console.log("item",[item.position,item.nombre,item.valor,item.referencia]);
    if (this.cargaHemograma) {
      this.doc.text("Hemograma Completo", this.doc.internal.pageSize.width / 2, 25, { align: 'center' })
    }
    else if (this.cargaCoagruorama) {
      this.doc.text("Coagruorama Básico", this.doc.internal.pageSize.width / 2, 25, { align: 'center' })
    }
    console.log("campos",this.campos);
    console.log("chequeados",this.chequeados);
    this.chequeados.forEach((c:any) => {
      if(this.campos.map((el:any)=>el[0]).includes(c[0])){
        //comparo los chequeados con los escritos, si estan iguales los mando a imprimir, crear funcion  
      }
      
      
    });

    // this.doc.save('table.pdf')
  }

  checkItem(target: any, item: any, isHemograma: boolean, isCoaglourama: boolean) {
    if (target.checked) {
      if (isHemograma) {
        this.cargaHemograma = true;
      }
      else if (isCoaglourama) {
        this.cargaCoagruorama = true;
      }
      else{
        let repetido = this.chequeados.find((el:any)=>el.position == item.position)
        if(!repetido){
          this.chequeados.push([item.position,item.nombre,item.valor,item.referencia])
        }
      }
    }else{
      if (isHemograma) {
        this.cargaHemograma = false;
      }
      else if (isCoaglourama) {
        this.cargaCoagruorama = false;
      }
      else{
        let repetido = this.chequeados.find((el:any)=>el[0] == item.position)
        if(repetido){
          let index = this.campos.findIndex((el:any)=>el[0] == item.position)
          this.chequeados.splice(index,1)
        }
      }
    }
  }
}
