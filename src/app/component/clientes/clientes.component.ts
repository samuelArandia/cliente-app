import { Component } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import Swal from 'sweetalert2';
import  { tap } from 'rxjs/operators';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent {

  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.getClientes().pipe(
      tap(clientes => {
        this.clientes = clientes
        console.log('ClientesComponent: tap 3');
        clientes.forEach(cliente => {
          console.log(cliente.nombre);
        })
      })
    ).subscribe(
    );
  }

  delete(cliente: Cliente): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Está seguro?',
      text: `Seguro que desea eliminar el cliente: ${cliente.nombre} ${cliente.apellido}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        if (cliente.id) { // Verificar que cliente.id no sea undefined o null
          this.clienteService.delete(cliente.id).subscribe(
            response => {
              this.clientes = this.clientes?.filter(cli => cli !== cliente)
              swalWithBootstrapButtons.fire(
                'Cliente eliminado!',
                'El cliente ha sido eliminado con éxito.',
                'success'
              )
            }
          )
        } else {
          // Mostrar un mensaje de error o realizar alguna otra acción apropiada
          console.error('No se puede eliminar el cliente porque no se especificó su ID')
        }
      }
    })
  }
}
