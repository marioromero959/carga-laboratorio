import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms'
import { MatTable } from '@angular/material/table';

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
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {

  hemograma: Table[] = [
    {
      position: 1, header: false, nombre: 'Globulos Rojos', valor: '',
      referencia: 'vr: 3.800.000 a 6.500.000'
    },
    {
      position: 2, header: false, nombre: 'Globulos Blancos', valor: '',
      referencia: 'vr: 4.000 a 10.500'
    },
    {
      position: 3, header: false, nombre: 'Hemoglobina', valor: '',
      referencia: 'vr: 12.0 a 17.0'
    },
    {
      position: 4, header: false, nombre: 'Hematocrito', valor: '',
      referencia: 'vr: 37.0 a 54.0'
    },
    {
      position: 5, header: false, nombre: 'Vol.Corp.Medio', valor: '',
      referencia: '80 - 97 fl'
    },
    {
      position: 6, header: false, nombre: 'Hemogl.Corp.Media', valor: '',
      referencia: '27 - 32 pg'
    },
    {
      position: 7, header: false, nombre: 'Conc.Hemogl.Corp.Media', valor: '',
      referencia: '31 - 36 gr/dl'
    },
    {
      position: 8, header: false, nombre: 'Indice de anisocitosis (RDW', valor: '',
      referencia: 'hasta 14.5%'
    },
    {
      position: 9, header: false, nombre: 'Plaquetas', valor: '',
      referencia: 'vr: 150.000 a 450.000'
    },
    {
      position: 10, header: true, nombre: 'Formula Leucocitaria', valor: '',
      referencia: ''
    },
    {
      position: 11, header: false, nombre: 'Neutrófilos', valor: '',
      referencia: 'vr: 37.0 a 72.0 (1.665 a 7.560)'
    },
    {
      position: 12, header: false, nombre: 'Eosinófilos', valor: '',
      referencia: 'vr: 0.0 a 6.0 (0 a 630)'
    }, {
      position: 13, header: false, nombre: 'Basófilos', valor: '',
      referencia: 'vr:0.0 a 1.0 (0 a 105)'
    }, {
      position: 14, header: false, nombre: 'Linfocitos', valor: '',
      referencia: 'vr: 20 a 50 (900 a 5.250)'
    }, {
      position: 15, header: false, nombre: 'Monocitos', valor: '',
      referencia: 'vr: 0.0 a 14.0 (0 a 1470)'
    },
    {
      position: 16, header: true, nombre: 'Morfología Eritrocitaria:', valor: '',
      referencia: ''
    },
    {
      position: 17, header: false, nombre: 'Volumen del eritrocito:', valor: '',
      referencia: ''
    },
    {
      position: 18, header: false, nombre: 'Hipocromia Eritrocitaria:', valor: '',
      referencia: ''
    },
    {
      position: 19, header: false, nombre: 'Hipercromia Eritrocitaria:', valor: '',
      referencia: ''
    },
    {
      position: 20, header: false, nombre: 'Anisocitosis Eritrocitos:', valor: '',
      referencia: ''
    },
    {
      position: 21, header: true, nombre: 'Alteraciones Leucocitarias:', valor: '',
      referencia: ''
    },
    {
      position: 22, header: false, nombre: 'Leucocitosis:', valor: '',
      referencia: ''
    },
    {
      position: 23, header: false, nombre: 'Leucopenia:', valor: '',
      referencia: ''
    },
    {
      position: 24, header: false, nombre: 'Desviacion a la Izquierda:', valor: '',
      referencia: ''
    },
    {
      position: 25, header: false, nombre: 'Desviacion a la Derecha:', valor: '',
      referencia: ''
    },
    {
      position: 26, header: false, nombre: 'Neutrofilos:', valor: '',
      referencia: ''
    },
    {
      position: 27, header: false, nombre: 'Eosinofilos:', valor: '',
      referencia: ''
    },
    {
      position: 28, header: false, nombre: 'Linfocitos:', valor: '',
      referencia: ''
    },
    {
      position: 28, header: true, nombre: 'Eritrosedimentacion 1 hr', valor: '',
      referencia: ''
    }
  ];
  coagulograma: Table[] = [
    {
      position: 1, header: true, nombre: 'Tiempo de Protrombina', valor: '',
      referencia: ''
    },
    {
      position: 2, header: false, nombre: 'Coagulométrico turbidimétrico Automatizado Instrumento: ST4 / ST-ART', valor: '',
      referencia: 'vr: 10.0 - 15.4 seg'
    },
    {
      position: 3, header: false, nombre: 'Actividad Protrombínica', valor: '',
      referencia: 'V.N. 70 a 110'
    }, {
      position: 4, header: true, nombre: 'RIN', valor: '',
      referencia: ''
    }, {
      position: 5, header: false, nombre: 'Coagulométrico turbidimétrico Automatizado Instrumento: ST4 / ST-ART', valor: '',
      referencia: '1.50 Rango terapéutico: entre 2-3'
    }, {
      position: 6, header: true, nombre: 'K.P.T.T.', valor: '',
      referencia: ''
    }, {
      position: 7, header: false, nombre: 'Coagulométrico turbidimétrico Automatizado Instrumento: ST4 / ST-ART', valor: '',
      referencia: 'vr: 25-45 seg'
    },
    {
      position: 8, header: true, nombre: 'Hemoglobina glicosilada', valor: '',
      referencia: ''
    },
    {
      position: 9, header: false, nombre: 'Inmunoturbidimetria Teconologia: COBAS C111- ROCHE DIAGNOSTICS Material examinado: sangre entera', valor: '',
      referencia: 'vr: 4.8 a 6.0'
    },
    {
      position: 10, header: false, nombre: 'GLUCEMIA Método: Enzimático de referencia con hexoquinasa Tecnologia: COBAS C311- ROCHE DIAGNOSTICS', valor: '',
      referencia: 'vr: Adultos: 70 - 110 mg/dl Niños: 60 - 110 mg/dl Glucemia en ayuna alterada (sin FR) : 110 - 126 mg/dl (con FR): 100 - 126 mg/dl Diabetes Mellitus: 2 veces >126 mg/dl'
    },
    {
      position: 11, header: false, nombre: 'UREMIA Método: Cinético con Ureasa y Glutamato Deshidrogenasa Tecnologia: COBAS C311- ROCHE DIAGNOSTICS', valor: '',
      referencia: 'vr: 10-50 mg/dl'
    },
    {
      position: 12, header: false, nombre: 'CREATININA Cinetico Tecnologia: COBAS C311- ROCHE DIAGNOSTICS', valor: '',
      referencia: 'vr: De 1-3 años 0.24-0.41 mg/dl De 3-5 años 0.31-0.47 mg/dl De 5-7 años 0.32-0.59 mg/dl De 7-9 años 0.40-0.60 mg/dl De 9-11 años 0.39-0.73 mg/dl De 11-13 años 0.53-0.79 mg/dl De 13-15 años 0.57-0.87 mg/dl Adulto Hombre: 0.70-1.20 Adulto Mujer: 0.50-1.10'
    },
    {
      position: 13, header: false, nombre: 'CALCEMIA Método: Complejometria', valor: '',
      referencia: 'Recién Nacido: 7.6-10.4 mg/dl Niños:8,8-10,8 mg/dl - Adultos:8,6-10,0 mg/dl'
    },
    {
      position: 14, header: false, nombre: 'CALCEMIA Método: Complejometria', valor: '',
      referencia: 'Recién Nacido: 7.6-10.4 mg/dl Niños:8,8-10,8 mg/dl - Adultos:8,6-10,0 mg/dl'
    }
  ]
  ionograma: Table[] = [
    {
      position: 1, header: false, nombre: 'Potasio serico - ISE - Electrodo ion selectivo', valor: '',
      referencia: 'vr: 3.5 - 5.1 meq/L'
    },
    {
      position: 2, header: false, nombre: 'Sodio Serico - ISE - Electrodo ion selectivo', valor: '',
      referencia: 'vr: 136 - 145 meq/L'
    }, {
      position: 3, header: false, nombre: 'Cloro Serico - ISE - Electrodo ion selectivo', valor: '',
      referencia: 'vr: 98.0 - 107.0 meq/L'
    }, {
      position: 4, header: false, nombre: 'URICEMIA Enzimatico Colorimetrico Tecnologia: COBAS C311- ROCHE DIAGNOSTICS', valor: '',
      referencia: 'vr: Hombre: 3,40 a 7,00 mg/dl Mujer: 2,40 a 5,70 mg/dl'
    }, {
      position: 5, header: false, nombre: 'Bilirubinemia Total', valor: '',
      referencia: 'vr: adultos hasta 1.2 mg/dl'
    }, {
      position: 6, header: false, nombre: 'Bilirrubina Directa', valor: '',
      referencia: 'vr : hasta 0.30 mg/dl '
    }, {
      position: 7, header: false, nombre: 'Bilirrubina Indirecta', valor: '',
      referencia: 'vr : hasta 0.90 mg/dl'
    }, {
      position: 8, header: false, nombre: 'Transaminasas Glutamico Oxalacetica (AST)', valor: '',
      referencia: 'Hombres hasta 40 U/l Mujer hasta 32 u/l'
    }, {
      position: 9, header: false, nombre: 'Transaminasas Glutamico Piruvica (ALT)', valor: '',
      referencia: 'Hombres hasta 41 U/l Mujer hasta  33 u/l'
    },
    {
      position: 10, header: false, nombre: 'Fosfatasa Alcalina ', valor: '',
      referencia: 'Hombres 40 a 129 U/l - Mujeres 35 a 104 U/l - Niños hasta 5 veces el valor del adulto'
    },
    {
      position: 11, header: false, nombre: 'Proteinas Totales Albumina', valor: '',
      referencia: 'vr: 6.40 a 8.30 g/dL'
    },
    {
      position: 12, header: false, nombre: 'Albumina', valor: '',
      referencia: 'neonatos: 2.80 a 4.40 g/dl menor 14 años 3.80 a 5.40 g/dl 14 a 18 años 3.20 a 4.50 g/dl adultos: 3.50 a 5.20 d/dl'
    },
    {
      position: 13, header: false, nombre: 'Relación ALB/GLOB', valor: '',
      referencia: 'vr: 1.20 a 2.20'
    },
    {
      position: 14, header: false, nombre: 'COLESTEROL TOTAL', valor: '',
      referencia: 'Deseable < 180 mg/dl Elevado > 200 mg/dl'
    },
    {
      position: 15, header: false, nombre: 'HDL COLESTEROL', valor: '',
      referencia: 'Sin riesgo Mujeres > 65 mg/dl Hombres > 55 mg/dl Riesgo Moderado Mujeres 45-65 mg/dl Hombres 35-55 mg/dl  Alto Riesgo Mujeres < 45 mg/dl Hombres < 35 mg/dl'
    },
    {
      position: 16, header: false, nombre: 'LDL COLESTEROL', valor: '',
      referencia: 'Valor deseable < 100'
    },
    {
      position: 17, header: false, nombre: 'VLDL-colesterol, Lipoproteina de muy Baja densidad', valor: '',
      referencia: 'vr: 10 a 40 mg/dl'
    },
    {
      position: 18, header: false, nombre: 'TRIGLICERIDOS', valor: '',
      referencia: 'vr: 50 - 150 mg/dl Según NCEP (European atherosclerosis Society)'
    },
    {
      position: 19, header: false, nombre: '', valor: '',
      referencia: ''
    }
  ]
  indiceAterogenico: Table[] = [
    {
      position: 1, header: false, nombre: 'Colesterol NO HDL', valor: '',
      referencia: 'Deseable < 130 mg/dl Riesgo Bajo 131 a 189 mg/dl Riesgo alto: 190 a 219 mg/dl Riesgo Muy Alto: > 220 mg/dl'
    },
    {
      position: 2, header: false, nombre: 'Colesterol Total/C-HDL', valor: '',
      referencia: 'Vr: Menor 4.00'
    },
    {
      position: 3, header: false, nombre: 'Colesterol-LDL/Colesterol-HDL', valor: '',
      referencia: 'Vr: menor a 3.00'
    },
    {
      position: 4, header: false, nombre: 'Trigliceridos / Colesterol HDL', valor: '',
      referencia: 'Vr: Menor a 3.5'
    },
    {
      position: 5, header: false, nombre: 'Aspecto del Plasma', valor: '',
      referencia: ''
    },
    {
      position: 6, header: false, nombre: 'Insulina Electroquimioluminiscencia Instrumento: Cobas E-411 - Roche Diagnostics Material: Suero', valor: '',
      referencia: 'Valor de Referencia: Adultos 2.00 a 24.9 uUI/ml Prepúberes:Hasta 15 uUI/ml Pubertad media : Hasta 20 uUI/ml'
    },
    {
      position: 7, header: false, nombre: 'TSHu - Tirotropina (ultrasensible)Electroquimioluminiscencia Instrumento : Cobas E -411', valor: '',
      referencia: 'Valor de Referencia: 1 - 11 meses: 0.8 - 6.2 µUI/ml 1-5 años: 0.7 - 5.7 µUI/ml 6 - 10 años: 0.6 - 5.0 µUI/ml 11 - 14 años: 0.5 - 4.4 µUI/ml 15 - 18 años: 0.5 - 4.4 µUI/ml Adultos : 0.27 a 4.12 µUI/ml'
    },
    {
      position: 8, header: false, nombre: 'T3 Total - Triiodotironina Total Electroquimioluminiscencia Instrumento : Cobas E -411', valor: '',
      referencia: 'Valor de Referencia: 1 - 11 meses: 1.0 - 2.2 ng/ml 1-5 años: 0.9 - 2.2 ng/ml 6 - 10 años: 0.9 - 2.1 ng/ml 11 - 14 años: 0.7 - 1.9 ng/ml 15 - 18 años: 0.6 - 1.7 ng/ml Adultos : 0.84 a 2.0 ng/ml'
    },
    {
      position: 9, header: false, nombre: 'T4L - Tiroxina Libre Electroquimioluminiscencia Instrumento: Cobas E 411 Roche Diagnostics Material: suero ', valor: '',
      referencia: 'Valor de Referencia: 1 - 11 meses: 0.9 - 1.8 ng/dl 1-5 años: 0.9 - 1.6 ng/dl 6 - 10 años: 0.8 - 1.5 ng/dl 11 - 14 años: 0.7 - 1.5 ng/dl 15 - 18 años: 0.7 - 1.5 ng/dl Adultos : 0.93 a 1.71 ng/dl'
    },
    {
      position: 10, header: false, nombre: 'Peptido C Electroquimioluminiscencia Instrumento Cobas E -411 Materia: suero ', valor: '',
      referencia: 'Valor de Referencia: 0.9 a 4.0 ng/ml'
    },
    {
      position: 11, header: false, nombre: 'Vitamina D2 YD3 (25-Hidroxi Vitamina D2 YD3)  Electroquimioluminiscencia Isntrumento Cobas E-411', valor: '',
      referencia: 'VR: Recomendado: mayor a 30 ng/ml Insuficiencia: entre 20 y 29 ng/ml Deficiencia: Menor a 20 ng/ml Se recomienda tener en cuenta que los niveles de 25 OH vitamina D pueden variar según el sexo, la edad, la época del año, la latitud geográfica y el grupo étnico. Por lo tanto valores mas bajos son esperables en epoca invernal.'
    },
    {
      position: 12, header: false, nombre: 'T4 Total - Tiroxina Total Electroquimioluminiscencia In', valor: '',
      referencia: 'Valor de Referencia: 1 - 11 meses: 6.3 - 13.6 µg/dl 1-5 años: 6.0 - 13.0 µg/dl 6 - 10 años: 5.13 - 14.0 µg/dl 11 - 14 años: 5.4 - 12.0 µg/dl 15 - 18 años: 5.0 - 11.8 µg/dl Adultos : 5.0 - 11.8 µg/dl'
    },
    {
      position: 13, header: false, nombre: 'Marcador CA 19-9 (Colon) Metodo: Quimioluminiscencia', valor: '',
      referencia: 'VR: individuos sanos: Hasta 37.0 UI/ml. En casos de pancreatitis, diabetes cirrosis, vesicula biliar, hepatitis y patologias renales los valores se pueden elevar hasta 500 UI/ml'
    },
    {
      position: 14, header: false, nombre: 'Marcador CA 15.3 (mama) Metodo: Quimioluminiscencia', valor: '',
      referencia: ' V R: 0.0 a 32.4 U/ml'
    },
    {
      position: 15, header: false, nombre: 'MARCADOR CA 125 (OVARIO) Metodo: Quimioluminiscencia', valor: '',
      referencia: 'Hasta 30.2 U/ml'
    }
  ]
  sedimentoUrinario: Table[] = [
    {
      position: 1, header: false, nombre: 'Leucocitos', valor: '',
      referencia: ''
    },
    {
      position: 2, header: false, nombre: 'Células Epiteliales', valor: '',
      referencia: ''
    },
    {
      position: 3, header: false, nombre: 'Hematíes', valor: '',
      referencia: ''
    },
    {
      position: 4, header: false, nombre: 'Color ', valor: '',
      referencia: ''
    },
    {
      position: 5, header: false, nombre: 'Aspecto', valor: '',
      referencia: ''
    },{
      position: 6, header: false, nombre: 'Ph', valor: '',
      referencia: ''
    },
    {
      position: 7, header: false, nombre: 'Densidad ', valor: '',
      referencia: ''
    },
    {
      position: 8, header: false, nombre: 'Ferremia - Método: Colorimétrico Tecnologia: COBAS C311- ROCHE DIAGNOSTICS Material: Suero', valor: '',
      referencia: 'Valores de Referencia: Adultos 33 a 193 ug/dl 6-12 meses 35 a 115 ug/dl 1-12 años 22 a 135 ug/dl La concentración de hierro depende de la ingestión de hierro y está sujeta a variaciones circadianas.'
    },
    {
      position: 9, header: false, nombre: 'Vitamina B1 (Tiamina) - Metodo: Cromatografía líquida de alta presión (HPLC) Muestra: Suero protegido de la luz', valor: '',
      referencia: 'Valor de Referencia: Adultos: 4.0 a 20.0 ug/l'
    },
    {
      position: 10, header: false, nombre: 'Vitamina B6 (Piridoxina) - Cromatografía líquida de alta presión (HPLC)', valor: '',
      referencia: 'Valor de Referencia: 2 a 17 años: 3.0 a 40.0 ng/ml Adultos: 10 a 40 ng'
    }
  ]

  @ViewChild(MatTable)
  table!: MatTable<any>;

  control: FormControl = new FormControl('')
  formularioGeneral: FormGroup = new FormGroup('')
  displayedColumns: string[] = ['nombre', 'valor', 'referencia'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formularioGeneral = this.createFrom()
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
    })
  }

  createHemogramaForm(): any {
    return this.fb.group({
      globulos_rojos: [],
      globulos_blancos: [],
      hemoglobina: [],
      hematocrito: [],
      vol_corp_medio: [],
      hemogl_copr_media: [],
      conc_hemogl_copr_media: [],
      indice_anisocitosis: [],
      plaquetas: [],
    })
  }

  get hemogramaCompleto() {
    let hemogramaCompleto = this.formularioGeneral.get("hemogramaCompleto") as FormArray;
    return hemogramaCompleto;
  }

  cambioValor(value: any, target: any) {
    this.hemograma[value.position - 1].valor = target.value;

  }
}
