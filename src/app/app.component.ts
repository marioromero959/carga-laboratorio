import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
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
        'HEMOGLOBINA GLICOSILADA Inmunoturbidimetria Teconologia: COBAS C111- ROCHE DIAGNOSTICS Material examinado: sangre entera',
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
      nombre: 'FOSFATEMIA - Colorimetrico',
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
    }
  ]
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
  }
  ]
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
    }
    ]
  clearence: Table[] = [
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
      header: false,
      nombre: 'Proteinuria',
      valor: '',
      referencia: 'vr: 0.03 a 0.14 g/24h',
    }
  ];
  sueltos1: Table[] = [
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
  sueltos2: Table[] = [
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
  sueltos3: Table[] = [
    {
      position: 131,
      header: false,
      nombre:
        'Estradiol - Electroquimioluminiscencia In',
      valor: '',
      referencia:
        'Valor de Referencia: Hombre adulto: Hasta 39.8 pg/ml Mujer fase folicular: 19.5 a 144.2 pg/ml Mujer mitad del ciclo: 63.9 a 356.7 pg/ml Mujer fase lútea: 55.8 a 214.2 pg/ml Postmenopausia: menor de 32.2 pg/ml Embarazadas: 1er Trimestre: 215 a 4300 pg/ml Niños (1 a 10 años): Varones: menor a 20 pg/ml Niñas: 6.00 a 27.0 pg/ml.',
    },
    {
      position: 132,
      header: false,
      nombre:
        'Hormona Folículoestimulante (FSH) - Electroquimioluminiscencia In',
      valor: '',
      referencia: 'Valor de Referencia: Hombre adulto: 1.4 a 18.1 mUI/ml Mujer fase folicular: 2.5 a 10.2 mUI/ml Mujer mitad del ciclo: 3.4 a 33.4 mUI/ml Mujer fase lútea: 1.5 a 9.1 mUI/ml Mujer postmenopausia: 23.0 a 116.3 mUI/ml',
    },
    {
      position: 133,
      header: false,
      nombre:
        'Hormona Luteinizante (LH) - Electroquimioluminiscencia In',
      valor: '',
      referencia:
        'Valor de Referencia: Hombre adulto: 1.5 a 9.3 mUI/ml Mujer fase folicular: 1.9 a 12.5 Mui/ml Mujer mitad del ciclo: 8.7 a 76.3 Mui/ml Mujer fase lútea: 0.5 a 16.9 Mui/ml Mujer pos menopausia: 15.9 a 54.0 Mui/Ml',
    },
    {
      position: 134,
      header: false,
      nombre: 'Progesterona - Electroquimioluminiscencia In',
      valor: '',
      referencia: 'vr: Hombres 0.28 a 1.22 ng/ml Mujeres F. Folicular: 0.15 a 1.40 ng/ml F. Ovulación: 0.8 a 3.00 ng/ml F. Lútea: 3.34 a 25.56 ng/ml Post menopausia: hasta 0.73 ng/ml',
    },
    {
      position: 135,
      header: false,
      nombre:
        'Prolactina (PRL) - Electroquimioluminiscencia In',
      valor: '',
      referencia:
        'Valor de Referencia: Hombre adulto 2.6 a 18.1 ng/ml Mujer adulta 1.2 a 23.3 ng/ml Hasta 1 mes: 3.7 - 81.0 ng/ml 1 mes A 1 año: 0.3 - 29.0 ng/ml Hasta la pubertad: 2.3-13.0ng/ml',
    },
    {
      position: 136,
      header: false,
      nombre: 'Testosterona total - Electroquimioluminiscencia In',
      valor: '',
      referencia:
        'Valor de Referencia: Hombre adulto: 2.41 a 8.27 ng/ml Mujer adulta: 0.14 a 0.76 ng/ml',
    },
    {
      position: 137,
      header: false,
      nombre: 'Testosterona Biodisponible - Metodo:Quimioluminiscencia - F',
      valor: '',
      referencia: 'Valor de Referencia: Mujer adultas: 5 a 19 ng/dl Hombre adulto: 120 a 480 ng/dl',
    },
    {
      position: 138,
      header: false,
      nombre: 'Gliadina Anticuerpos Ig A - Enzimoinmunoensayo Instrumen',
      valor: '',
      referencia:
        'Valor de Referencia: Negativo < 12 IU/ml',
    },
    {
      position: 139,
      header: false,
      nombre:
        'Gliadina, Ac. Ig G Anti- Peptido Deaminado - Enzimoinmunoensayo',
      valor: '',
      referencia:
        'VR: Hasta 10 UI/ml',
    },
    {
      position: 140,
      header: false,
      nombre:
        'Transglutaminasa Anti. Anticuerpos (IgA) - Método:Quimioluminiscencia I',
      valor: '',
      referencia: 'Vr: Menor de 8: Negativo Mayor o igual de 8: Positivo',
    },
    {
      position: 141,
      header: false,
      nombre:
        'Inmunoglobulina A (Ig.A) - Inmunoturbidimetría Instrumen',
      valor: '',
      referencia: 'VR: Adultos: 70 a 400 mg/dL 0-1 año 0.00 a 83 mg/dL 1-3 años 20 a 100 mg/Dl 4-6 años 27 a 195 mg/Dl 7-9 años 34 a 305 mg/Dl 10-11 años 53 a 204 mg/Dl 12-13 años 58 a 358 mg/Dl 14-15 años 47 a 249 mg/Dl',
    },
    {
      position: 142,
      header: false,
      nombre: 'PSA - Antigeno Prostatico Especifico - Electroquimioluminiscencia In',
      valor: '',
      referencia: 'Valor de Referencia: hasta 4.00 ng/ml',
    },
    {
      position: 143,
      header: false,
      nombre: 'Microalbuminuria - Inmunoturbidimetria',
      valor: '',
      referencia: 'Normal <30 mg/24hs Microalbuminuria 30-299 mg/24hs Albuminuria >300 mg/24hs',
    },
    {
      position: 146,
      header: false,
      nombre:
        '17 - Hidroxiprogesterona - RIA - RADIOINMUNOANALISIS',
      valor: '',
      referencia:
        'Valor de Referencia: Hombre adulto 0.4 a 3.3 ng/ml Mujeres.fase folicular: 0.4 a 2.0 ng/ml Mujeres fase lútea: 0.4 a 4.0 ng/ml Mujeres postmenopausia: 0.1 a 0.6 ng/ml Niños hasta 12 meses: hasta 17.6 ng/ml prepuberes: Hasta 1.2 ng/ml',
    },
    {
      position: 147,
      header: false,
      nombre: 'Cortisol Plasmatico, Matutino - Electroquimioluminiscencia Instrumento: Cobas E-411 - Roche Diagnostics Material: Suero',
      valor: '',
      referencia: 'Valor de Referencia: Matutino (8 a 10 hs) 4.3 a 22.4 ug/dl',
    },
    {
      position: 150,
      header: false,
      nombre:
        'Ferritina - Inmunoturbidimetrica Instrumento: Cobas C-311 - Roche Diagnostics Material: Suero',
      valor: '',
      referencia: 'Valor de Referencia: Hombre adulto: 20 a 320 ng/ml Mujer adulta: 10 a 280 ng/ml Recién nacidos: 25 a 200 ng/mL 1 mes de edad: 200 a 600 ng/mL 2-5 meses de edad: 50 a 200 ng/mL 6 meses – 15 años de edad: 7 a 142 ng/mL',
    },
    {
      position: 151,
      header: false,
      nombre:
        'Saturación de la Transferrina - Inmunoturbidimetría Instrumento: Aeroset-Abbott Material: Suero',
      valor: '',
      referencia: '',
    },
    {
      position: 152,
      header: false,
      nombre: 'Capacidad total de fijación (TIBC)',
      valor: '',
      referencia: 'VR: 250 a 425 ug/dl',
    },
    {
      position: 153,
      header: false,
      nombre:
        'Capacidad latente de fijación (UIBC)',
      valor: '',
      referencia: 'VR: Hombres: 140 a 330 ug/dl Mujeres: 140 a 346 ug/dl',
    },
    {
      position: 154,
      header: false,
      nombre: 'Coeficiente de saturación (SAT)',
      valor: '',
      referencia:
        'VR: Hombres: 20 a 50 % Mujeres: 15 a 50 %',
    },
    {
      position: 155,
      header: false,
      nombre:
        'Transferrina - Método: Inmunoturbidimetría Instrumento: Aeroset - Abbott Material: Suero',
      valor: '',
      referencia: 'VR: 2.00 a 3.60 g/l',
    },
    {
      position: 156,
      header: false,
      nombre:
        'ATPO - Tiroperoxidasa anticuerpos - Electroquimioluminiscencia Instrumento: Cobas E-411 - Roche Diagnostics Material: Suero',
      valor: '',
      referencia: 'Valor de Referencia: hasta 60 U/ml',
    }
  ];

  @ViewChild('pdf', { static: false }) pdf!: ElementRef;

  control: FormControl = new FormControl('');
  formularioGeneral: FormGroup = new FormGroup('');
  cargaHemograma: boolean = false;
  cargaCoagruorama: boolean = false;
  chequeados: any = [];
  tableY: number = 0;
  numberOfPages:number[] = [];

  seDibujoFooter = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formularioGeneral = this.createFrom();
  }

  createFrom(): FormGroup {
    return this.fb.group({
      nombre_apellido: ["",Validators.required],
      dni: ["",Validators.required],
      obra_social: ["",Validators.required],
      fecha: ["",Validators.required],
      nombre_medico: ["",Validators.required],
      hemogramaCompleto: this.fb.array([]),
      coagluorama: this.fb.array([]),
    });
  }

  cambioValor(element: any, valor: any, isHemograma?: boolean, isCoagruorama?: boolean) {
    // if (isHemograma) {
    //   element.valor = valor;
    // }
    // else if (isCoagruorama) {
    //   element.valor = valor;
    // }
    element.valor = valor;

    let repetido = this.chequeados.find((el: any) => el[0] == element.position);
    
    if (repetido) {
      let index = this.chequeados.findIndex((el: any) => el[0] == element.position)
      this.chequeados.splice(index, 1)
      this.chequeados.push([element.position, element.nombre, valor, element.referencia])
    }
  }

drawTable(doc:any,arreglo:any){
  const spacer = (this.cargaHemograma || this.cargaCoagruorama) ? 35 : 65;
  autoTable(doc, {
    body: arreglo.map((el: any) => [el[1], el[2], el[3]]),
    columnStyles: {0:{cellWidth:168.8,textColor:'black'},1:{cellWidth:88.8,halign:'justify',textColor:'black'},2:{cellWidth:128.8,textColor:'#727377'}},
    headStyles:{fillColor:'#39968b',textColor:'white'},
    pageBreak: 'auto',
    rowPageBreak:"avoid",
    startY: this.tableY + spacer,
    margin:{top:40},
    didDrawPage: (data) => {
      //voy agregando la cantidad de paginas
      const actualNumber = data.doc.internal.getCurrentPageInfo().pageNumber;
      if(!this.numberOfPages.includes(actualNumber)){
        this.numberOfPages.push(actualNumber)
        if(!this.cargaHemograma){
          if(actualNumber >= 2){
            this.drawHeader(doc,false,actualNumber - 1);
          }else{
          if(actualNumber > 2){
            this.drawHeader(doc,false,actualNumber - 1);
          }
          }
      }else{
        if(actualNumber > 2){
          this.drawHeader(doc,false,actualNumber - 1);
        }
      }
      } 
      this.getTableInfo(data)
    }
  })
}

  range(concepto: string): boolean {
    const posisionesOrdenadas = this.chequeados.sort().map((el: any) => el[0]);

    switch (concepto) {
      case 'hemoglobina': return this.hemoglobina.map(el => el.position).some(function (element) {
        return posisionesOrdenadas.indexOf(element) !== -1
      });
      case 'ionograma': return this.ionograma.map(el => el.position).some(function (element) {
        return posisionesOrdenadas.indexOf(element) !== -1
      });
      case 'hepatograma': return this.hepatograma.map(el => el.position).some(function (element) {
        return posisionesOrdenadas.indexOf(element) !== -1
      });
      case 'riesgo': return this.indiceAterogenico.map(el => el.position).some(function (element) {
        return posisionesOrdenadas.indexOf(element) !== -1
      });
      case 'sedimento': return this.sedimentoUrinario.map(el => el.position).some(function (element) {
        return posisionesOrdenadas.indexOf(element) !== -1
      });
      case 'lipido': return this.perfilLipido.map(el => el.position).some(function (element) {
        return posisionesOrdenadas.indexOf(element) !== -1
      });
      case 'sueltos1': return this.sueltos1.map(el => el.position).some(function (element) {
        return posisionesOrdenadas.indexOf(element) !== -1
      });
      case 'sueltos2': return this.sueltos2.map(el => el.position).some(function (element) {
        return posisionesOrdenadas.indexOf(element) !== -1
      });
      case 'sueltos3': return this.sueltos3.map(el => el.position).some(function (element) {
        return posisionesOrdenadas.indexOf(element) !== -1
      });
      case 'clearence': return this.clearence.map(el => el.position).some(function (element) {
        return posisionesOrdenadas.indexOf(element) !== -1
      });
      default:
        break;
    }
    return false;
  }

  getTableInfo(table: any) {
    this.tableY = table.cursor.y;
  }

  drawHeader(doc:jsPDF,first:boolean,pageNumber:number){
    const y = (first) ? this.tableY + 20 : 20;
    const {nombre_apellido,nombre_medico,obra_social,fecha,dni} = this.formularioGeneral.getRawValue();
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12)
    doc.setFont("helvetica", "bold");
    doc.text(`Paciente: ${nombre_apellido}`,10,y)
    doc.text(`Documento: DU - ${dni}`,180,y)
    doc.setFont("helvetica", "normal");
    doc.text(`Fecha/Nro. Entrada: ${fecha}`,10, y + 10)
    doc.text(`Médico Solicitante: ${nombre_medico}`,180, y + 10)
    doc.text(`Obs: ${obra_social}`,350, y + 10)
    doc.text(`_____________________________________________________________________________________`,10,y+15)

    doc.text(`Página ${doc.getCurrentPageInfo().pageNumber}`,350, 620)
    console.log("doc",doc);
    
  }


  async generarPDF() {
    // if(!this.formularioGeneral.valid) return;
    this.tableY = 60;
    this.numberOfPages.splice(0,this.numberOfPages.length)
    let img = new Image()
    img.src = "../assets/creo.jpeg";
    let doc = new jsPDF('p', 'px', 'a4');
    doc.addImage(img,'JPEG',0,0,200,60)
    //Dibujo el primer header
    this.drawHeader(doc,true,1)
    if (this.cargaHemograma) {
      const hemo = this.hemograma.map(e => [e.nombre, e.valor, e.referencia]);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12)
      doc.text("HEMOGRAMA COMPLETO ", 30, this.tableY + 65, { align: 'left' })
      doc.setFont("helvetica", "normal");
      doc.text("- Método: Citometría de Flujo Laser Modelo: SYSMEX XS-1000", 155, this.tableY + 65, { align: 'left' })
      autoTable(doc, {
        body: hemo,
        columnStyles: {0:{cellWidth:168.8,textColor:'black'},1:{cellWidth:88.8,halign:'justify',textColor:'black'},2:{cellWidth:128.8,textColor:'#727377'}},
        headStyles:{fillColor:'#39968b',textColor:'white'},
        startY: this.tableY + 75,
        rowPageBreak:"auto",
        //margen para la tabla partida 
        margin:{top:40},
        didDrawPage:(data) => {
          this.getTableInfo(data)
          if(data.pageNumber ==  2){
            this.drawHeader(doc,false,1)
          }
        }
      })
    }
    if (this.cargaCoagruorama) {
      const spacer = (this.cargaHemograma) ? 85 : 125;
      const coa = this.coagulograma.map(e => [e.nombre, e.valor, e.referencia]);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12)
      doc.text("COAGRUORAMA BÁSICO", 30, spacer, { align: 'left' })
      doc.setFont("helvetica", "normal");
      doc.setFontSize(12)
      doc.text("- Coagulométrico turbidimétrico Automatizado Instrumento: ST4 / ST-ART", 145, spacer, { align: 'left' })
      autoTable(doc, {
        body: coa,
        columnStyles: {0:{cellWidth:168.8,textColor:'black'},1:{cellWidth:88.8,halign:'justify',textColor:'black'},2:{cellWidth:128.8,textColor:'#727377'}},
        headStyles:{fillColor:'#39968b',textColor:'white'},
        pageBreak:"auto",
        margin:{top:240},
        startY: this.tableY + spacer - 50,
        didDrawPage: (data) => {
          this.getTableInfo(data)
          if(data.pageNumber ==  2)
          this.drawHeader(doc,false,1)
        }
      })
    }
    //el spacer para las demas secciones
      const spacer2 = (this.cargaHemograma || this.cargaCoagruorama) ? 25 : 55;
    if (this.range('hemoglobina')) {
      doc.text("", 30, this.tableY + spacer2, { align: 'left' })
      const hemoglobina = this.chequeados.filter((el: any) => { return this.hemoglobina.map(el => el.position).indexOf(el[0]) !== -1 });
      this.drawTable(doc,hemoglobina)
    }
    if (this.range('ionograma')) {
      doc.setFont("helvetica", "bold");
      doc.text("IONOGRAMA SÉRICO", 30, this.tableY + spacer2, { align: 'left' })
      const ionograma = this.chequeados.filter((el: any) => { return this.ionograma.map(el => el.position).indexOf(el[0]) !== -1 });
      console.log("iono",ionograma);
      this.drawTable(doc,ionograma)
    }
    if (this.range('hepatograma')) {
      doc.setFont("helvetica", "bold");
      doc.text("HEPATOGRAMA", 30, this.tableY + spacer2, { align: 'left' })
      const hepatograma = this.chequeados.filter((el: any) => { return this.hepatograma.map(el => el.position).indexOf(el[0]) !== -1 });
      this.drawTable(doc,hepatograma)
    }
    if (this.range('lipido')) {
      doc.setFont("helvetica", "bold");
      doc.text("PERFIL LIPIDICO", 30, this.tableY + spacer2, { align: 'left' })
      const perfilLipido = this.chequeados.filter((el: any) => { return this.perfilLipido.map(el => el.position).indexOf(el[0]) !== -1 });
      this.drawTable(doc,perfilLipido)
    }
    if (this.range('riesgo')) {
      doc.setFont("helvetica", "bold");
      doc.text("ÍNDICE DE RIESGO ATEROGENICO", 30, this.tableY + spacer2, { align: 'left' })
      const indiceAterogenico = this.chequeados.filter((el: any) => { return this.indiceAterogenico.map(el => el.position).indexOf(el[0]) !== -1 });
      this.drawTable(doc,indiceAterogenico)
    }
    if (this.range('sueltos2')) {
      doc.text("", 30, this.tableY + spacer2, { align: 'left' })
      const sueltos2 = this.chequeados.filter((el: any) => { return this.sueltos2.map(el => el.position).indexOf(el[0]) !== -1 });
      this.drawTable(doc,sueltos2)
    }
    if (this.range('sueltos1')) {
      doc.text("", 30, this.tableY + spacer2, { align: 'left' })
      const sueltos1 = this.chequeados.filter((el: any) => { return this.sueltos1.map(el => el.position).indexOf(el[0]) !== -1 });
      this.drawTable(doc,sueltos1)
    }
    if (this.range('sueltos3')) {
      doc.text("", 30, this.tableY + spacer2, { align: 'left' })
      const sueltos3 = this.chequeados.filter((el: any) => { return this.sueltos3.map(el => el.position).indexOf(el[0]) !== -1 });
      this.drawTable(doc,sueltos3)
    }
    if (this.range('clearence')) {
      doc.setFont("helvetica", "bold");
      doc.text("CLEARENCE DE CREATININA", 30, this.tableY + spacer2, { align: 'left' })
      const clearence = this.chequeados.filter((el: any) => { return this.clearence.map(el => el.position).indexOf(el[0]) !== -1 });
      this.drawTable(doc,clearence)
    }
    if (this.range('sedimento')) {
      doc.setFont("helvetica", "bold");
      doc.text("SEDIMENTO URINARIO", 30, this.tableY + spacer2, { align: 'left' })
      const sedimentoUrinario = this.chequeados.filter((el: any) => { return this.sedimentoUrinario.map(el => el.position).indexOf(el[0]) !== -1 });
      this.drawTable(doc,sedimentoUrinario)
    }
    
    doc.save('informe-laboratorio.pdf')
  }

  checkItem(target: any, item: any, isHemograma: boolean, isCoaglourama: boolean) {
    console.log("target",target,"item",item);
    
    if (target.checked) {
      if (isHemograma) {
        this.cargaHemograma = true;
      }
      else if (isCoaglourama) {
        this.cargaCoagruorama = true;
      }
      else {
        let repetido = this.chequeados.find((el: any) => el.position == item.position)
        if (!repetido) {
          this.chequeados.push([item.position, item.nombre, item.valor, item.referencia])
        }
      }
    } else {
      if (isHemograma) {
        this.cargaHemograma = false;
      }
      else if (isCoaglourama) {
        this.cargaCoagruorama = false;
      }
      else {
        let repetido = this.chequeados.find((el: any) => el[0] == item.position)
        if (repetido) {
          let index = this.chequeados.findIndex((el: any) => el[0] == item.position)
          this.chequeados.splice(index, 1)
        }
      }
    }
  }
}
