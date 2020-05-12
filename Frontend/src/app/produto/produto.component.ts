import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './produto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'a-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  public produto;

  public produtos = [];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.criarProduto();
    this.listar()
  }

  listar(){
    this.produtoService.listar().subscribe(r => {
      console.log(r);
      this.produtos = r;
    });
  }

  criarProduto(){
    this.produto = {nome: "", valor: 0.0};
  }

  editar(p){
    this.produto = p;
  }

  deletar(id){
    Swal.fire({
      text: 'Tem certeza??',
      showCancelButton: true,
      cancelButtonText: 'Não',
      confirmButtonText: 'Sim, pode deletar!'
    }).then(result => {
      if (result.value) {
        this.produtoService.deletar(id).subscribe(r => {
          this.listar();
        });
      }
    });
    
  }

  salvar() {
    this.produtoService.salvar(this.produto).subscribe(r => {
      this.criarProduto()
      this.listar();
    });
  }

  
}
