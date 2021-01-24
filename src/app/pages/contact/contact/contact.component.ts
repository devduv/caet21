import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Menu, MenuService } from 'src/app/core/services/menu.service';
import { map } from 'rxjs/operators';
import { InfoContacto } from './../../../_model/infoContacto';
import { MatSnackBar } from '@angular/material/snack-bar';
declare let Email: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  controlArea: FormControl = new FormControl();

  areas: String[];
  areasFiltradas$: Observable<String[]>;
  areaSeleccionada: String;

  constructor(
    private menuService: MenuService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.menuService.changeMenu(Menu.contact);
    this.form = new FormGroup({
      'nombres': new FormControl('', Validators.required),
      'apellidos': new FormControl('', Validators.required),
      'correo': new FormControl('', [Validators.required, Validators.email]),
      'numero': new FormControl('', Validators.required),
      'area': this.controlArea,
      'mensaje': new FormControl('')
    });

    this.listarAreas();

    this.areasFiltradas$ = this.controlArea.valueChanges.pipe(map(val => this.filtrarAreas(val)));
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

  public enviar() {
    if (this.form.invalid) { return; }

    let data = new InfoContacto;
    data.nombres = this.form.value['nombres'];
    data.apellidos = this.form.value['apellidos'];
    data.correo = this.form.value['correo'];
    data.numero = this.form.value['numero'];
    data.areaInteres = this.form.value['area'];

    console.log(data);
    this.sendMessage(data.correo, data.areaInteres, data.nombres, data.apellidos);
    this.snackBar.open("Se envió", "AVISO", { duration: 2000 });

    setTimeout(() => {
      this.limpiarControles();
    }, 2000);


  }

  limpiarControles() {
    this.areaSeleccionada = null;
    this.controlArea.reset();
    this.form.reset();
  }

  sendMessage(correo: String, areaInteres: String, nombres: String, apellidos: String) {

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "caet21prueba@gmail.com",
        Password : "AC3EBF524C1A0E0EF64E56B62EFF419C43D1",
        To : correo,
        From : "caet21prueba@gmail.com",
        Subject : "Bienvenidos al "+areaInteres,
        Body : "<h1> Hola, "+nombres+" "+apellidos+"</h1>"
              +"\n <h2>Gracias por elegir el "+ areaInteres+" nos estaremos comunicando contigo.</h2>"
    }).then(message => alert(message));
  }
}
