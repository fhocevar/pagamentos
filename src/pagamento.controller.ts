import { Controller, Post, Body } from '@nestjs/common';
import { PagamentoService } from './pagamento.service';

@Controller('pagamentos')
export class PagamentoController {
  constructor(private readonly pagamentoService: PagamentoService) {}

  @Post()
  async processarPagamento(@Body() body: { valor: number; token: string; metodo: string }) {
    return this.pagamentoService.processarPagamento(body.valor, body.token, body.metodo);
  }
}