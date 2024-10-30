import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PagamentoService } from './pagamento.service';
import { PagamentoModule } from './pagamento.module';
import { PagamentoController } from './pagamento.controller';
@Module({
  imports: [PagamentoModule],
  controllers: [AppController, PagamentoController],
  providers: [AppService, PagamentoService],
})
export class AppModule {}
