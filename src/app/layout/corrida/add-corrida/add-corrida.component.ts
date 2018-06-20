import {
    Component,
    OnInit,
} from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Cliente } from '../../../domain/cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { Corrida } from '../../../domain/corrida';
import { StatusEntregaEnum, TipoClienteEnum } from '../../../domain/enums';
import { PessoaFisica } from '../../../domain/pessoaFisica';
import { Dinheiro } from '../../../domain/dinheiro';
import { Responsavel } from '../../../domain/responsavel';

// just an interface for type safety.
// interface Marker {
//     lat: number;
//     lng: number;
//     label?: string;
//     draggable: boolean;
// }
@Component({
    selector: 'app-add-corrida',
    templateUrl: './add-corrida.component.html',
    styleUrls: ['./add-corrida.component.scss'],
    animations: [routerTransition()]
})
export class AddCorridaComponent implements OnInit {
    allClientes: Cliente[] = [];
    selectedCliente: Cliente;
    corrida: Corrida;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {

            const pessoaFisica: PessoaFisica = new PessoaFisica();
            pessoaFisica.cpf = '999999999';
            pessoaFisica.nome = 'Alberto João';
            pessoaFisica.email = 'ajoao@gmail.com';
            pessoaFisica.telefone = '(41)9696969696';

            this.selectedCliente = new Cliente(pessoaFisica);
            this.selectedCliente.tipoCliente = TipoClienteEnum.FATURADO.toString();

          this.allClientes.push(
              {
                  id: 1,
                  tipoCliente: 'Faturado',
                  pagamento: new Dinheiro(),
                  responsavel: [new Responsavel()],
                  pessoa: {
                      telefone: '35558955',
                      email: 'mueller@email.com',
                      razãoSocial: 'Shopping Mueller',
                      cnpj: '12345645/0001-58'
                    },
              });
    }

      loadClientes () {
        //
      }

      newCorridaEsporadico() {
          this.corrida.statusEntrega = StatusEntregaEnum.REGISTRADO.toString();
        //   this.corrida.pagamento =
          this.corrida.tipo = this.selectedCliente.tipoCliente.toString();
      }
}
