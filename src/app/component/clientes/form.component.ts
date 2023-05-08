import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})

export class FormComponent implements OnInit{

  public titulo: string = "Crear Cliente";
  public tituloActualizar: string = "Actualizar Cliente";
  public cliente: Cliente = new Cliente();
  public errores: string[] = [];

  constructor (
    private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargarCliente();
  }

  // Cargar cliente
  public cargarCliente(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.clienteService.getCliente(id).subscribe(
          (cliente) => this.cliente = cliente
        )
      }
    })
  }

  // Crear cliente
  public create(): void {
    this.clienteService.create(this.cliente).subscribe(
      Response => {
        this.router.navigate(['/clientes'])
        Swal.fire('Nuevo cliente', `${Response.mensaje}: ${Response.cliente.nombre} `, 'success')
        console.log(Response);
      },
      err => {
        this.errores = err.error.errors as string[];
        console.error('Codigo del error desde el backend: ' + err.status);
        console.error(err.error.errors);
      }
    );
  }

  // Actualizar cliente
  public update(): void {
    this.clienteService.update(this.cliente).subscribe(
      Response => {
        this.router.navigate(['/clientes'])
        Swal.fire('Cliente actualizado', `${Response?.mensaje} : ${Response.cliente.nombre}`, 'success')
        console.log(Response.cliente);
      },
      err => {
        this.errores = err.error.errors as string[];
        console.error('Codigo del error desde el backend: ' + err.status);
        console.error(err.error.errors);
      }
    );
  }
}
