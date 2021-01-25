import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Menu, MenuService } from 'src/app/core/services/menu.service';
import { map } from 'rxjs/operators';
import { InfoContacto } from './../../../_model/infoContacto';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfigurationService } from 'src/app/core/services/configuration.service';
declare let Email: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

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
    private configurationService: ConfigurationService
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
      ele.includes(val));
  }

  private findArea(areaSelected: string) {
    return this.areas.find(area => area === areaSelected);
  }

  public enviar() {
    if (this.form.invalid) return; 
    if (this.findArea( this.form.value['area']) === undefined) {
      this.snackBar.open("Área de Interés no existe", "", { duration: 2000, panelClass: ['mat-snack-bar-error'] });
      return;
    }
    let data = new InfoContacto;
    data.nombres = this.form.value['name'];
    data.apellidos = this.form.value['lastname'];
    data.correo = this.form.value['email'];
    data.numero = this.form.value['phone'];
    data.areaInteres = this.form.value['area'];
    data.mensaje = this.form.value['mensaje'];
    this.sendMessage(data.correo, data.areaInteres, data.nombres, data.apellidos);
    this.snackBar.open("Datos enviados satisfactoriamente!", "", { duration: 2000, panelClass: ['mat-snack-bar'] });
  }

  limpiarControles() {
    this.areaSeleccionada = null;
    this.controlArea.reset();
    this.form.reset();
  }

  sendMessage(correo: String, areaInteres: String, nombres: String, apellidos: String) {
    Email.send({
      Host: this.configuration.email.host,
      Username: this.configuration.email.username,
      Password: this.configuration.email.password,
      To: correo,
      From: this.configuration.email.from,
      Subject: "Bienvenidos al " + areaInteres,
      Body: "<h1> Hola, " + nombres + " " + apellidos + "</h1>"
        + "\n <h2>Gracias por elegir el " + areaInteres + " nos estaremos comunicando contigo.</h2>"
    });
  }

  async getConfiguration() {
    this.configuration = await this.configurationService.getConfiguration();
  }

  keyPressMobil($event) {
    const textInput = $event.target.value.toString();
    const text = textInput.replace(/[^a-zA-ZÀ-ÿ\u00f1\u00d1\u0020\u0027]/g, '');
    this.form.patchValue({ name: text });
  }
}
