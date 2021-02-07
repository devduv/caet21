import { Component, OnInit } from '@angular/core';
import { Menu, MenuService } from 'src/app/core/services/menu.service';
import { map } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InfoContacto } from '../../../core/models/infoContacto';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfigurationService } from 'src/app/core/services/configuration.service';
import { Observable } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/actions/dialog/dialog/dialog.component';
const keys = require('src/assets/js/keys.json');

declare let Email: any;

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  form: FormGroup;
  controlArea: FormControl = new FormControl();
  avaliable: boolean;
  areas: String[];
  areasFiltradas$: Observable<String[]>;
  areaSeleccionada: String;

  configuration: any;

  constructor(
    private menuService: MenuService,
    private snackBar: MatSnackBar,
    private configurationService: ConfigurationService,
    public dialog: MatDialog,
    private contactoService: ContactoService,
  ) { 
    this.listarAreas();
  }

  ngOnInit() {
    this.menuService.changeMenu(Menu.contact);
    this.getConfiguration();
    this.initForm();
   
    this.areasFiltradas$ = this.controlArea.valueChanges.pipe(map(val => this.filtrarAreas(val)));
  }

  private initForm() {
    this.form = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.maxLength(40),
      Validators.pattern(/^[^0-9]{1,40}$/)]),
      'lastname': new FormControl('', [Validators.required, Validators.maxLength(40),
      Validators.pattern(/^[^0-9]{1,40}$/)]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'phone': new FormControl('', Validators.required),
      'area': this.controlArea,
      'mensaje': new FormControl('')
    });
  }

  get f() { return this.form.controls; }

  listarAreas() {
    this.areas = [
      "Área de Desarrollo Web", "Área de Desarrollo Móvil", "Área de Base de Datos", "Área de Inteligencia Artificial",
      "Área de Redes e Infraestructura", "Área de Modelamiento de Procesos de Negocios", "Área de Calidad de Software",
      "Área de Seguridad informática", "Área de Ciencia de Datos"
    ];
  }

  mostrarAreas(p: String) {
    return p;
  }

  seleccionarArea(p: any) {
    console.log(p);
    this.areaSeleccionada = p.option.value;
  }

  filtrarAreas(val: any) {
    return this.areas.filter(ele =>
      ele.includes(val)
      );
  }

  private findArea(areaSelected: string) {
    return this.areas.find(area => area === areaSelected);
  }

  public enviar() {
    if (this.form.invalid) return; 
    if (this.validationFileds()) return;
    let data = new InfoContacto;
    data.nombres = this.form.value['name'];
    data.apellidos = this.form.value['lastname'];
    data.correo = this.form.value['email'];
    data.numero = this.form.value['phone'];
    data.areaInteres = this.form.value['area'];
    data.mensaje = this.form.value['mensaje'];
    this.fillGoogleSheet(data);
    this.sendMessage(data.correo, data.areaInteres, data.nombres, data.apellidos);
  }

  fillGoogleSheet(data: any){
    this.contactoService.sendContactoData(data).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

  private validationFileds() {
    let flag = false;
    if (this.findArea( this.form.value['area']) === undefined) {
     this.snackBarrError('Área de Interés no existe');
      flag = true;
    }
    if (this.emailDomains(this.form.value['email'])) {
      this.snackBarrError('Email no válido');
      flag = true;
    }
    return flag;
  }

  private emailDomains(msg: string) {
    if (msg.endsWith('@gmail.com') || msg.endsWith('@unmsm.edu.pe') || msg.endsWith('@hotmail.com')){
      return false;
    }
    return true;
  }

  private snackBarrError(msg: string) {
    this.snackBar.open(msg, "", { duration: 2000, panelClass: ['mat-snack-bar-error'] });
  }

  limpiarControles() {
    this.areaSeleccionada = null;
    this.controlArea.reset();
    this.form.reset();
  }

  sendMessage(correo: String, areaInteres: String, nombres: String, apellidos: String) {
    Email.send({
      Host: this.configuration.smtp.host,
      Username: this.configuration.smtp.username,
      Password: this.configuration.smtp.password,
      To: correo,
      From: this.configuration.smtp.from,
      Subject: "Bienvenidos al " + areaInteres,
      Body: "<h1> Hola, " + nombres + " " + apellidos + "</h1>"
        + "\n <h2>Gracias por elegir el " + areaInteres + " nos estaremos comunicando contigo.</h2>"
    });

    this.openDialog();
  }

  async getConfiguration() {
    this.configuration = await this.configurationService.getConfiguration();
  }

  keyPressMobil($event, flag) {
    const textInput = $event.target.value.toString();
    const text = textInput.replace(/[^a-zA-ZÀ-ÿ\u00f1\u00d1\u0020\u0027]/g, '');
    if (flag == 'name') {
      this.form.patchValue({ name: text });
    } else if (flag = 'lastname') {
      this.form.patchValue({ lastname: text });
    }
    
  }

  private openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
     this.limpiarControles();
    });
  }
}
