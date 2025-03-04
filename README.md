# pagamentos
Aqui está um exemplo de **README** para o código fornecido. Esse README descreve o que o serviço de pagamento faz, como instalá-lo, configurá-lo e utilizá-lo.

---

# Pagamento Service - NestJS

Este serviço em **NestJS** integra várias plataformas de pagamento, incluindo **Stripe**, **PayPal**, **Square**, **PagSeguro** e **MercadoPago**. O objetivo do serviço é processar pagamentos de maneira eficiente e segura, com suporte para diferentes métodos de pagamento.

## Descrição

O `PagamentoService` oferece uma funcionalidade para processar pagamentos através de diferentes gateways:

- **Stripe**: Processamento de pagamentos com o Stripe.
- **PayPal**: Integração com a API do PayPal.
- **Square**: Processamento de pagamentos utilizando o Square.
- **PagSeguro**: Suporte ao processamento de pagamentos através do PagSeguro.
- **MercadoPago**: Integração para pagamentos via MercadoPago.

O serviço permite processar pagamentos utilizando um token de pagamento, especificando o valor e o método de pagamento escolhido.

## Instalação

### 1. Clonar o Repositório

Se ainda não tiver o repositório, clone-o usando o seguinte comando:

```bash
git clone <URL_DO_REPOSITORIO>
cd <DIRETORIO_DO_REPOSITORIO>
```

### 2. Instalar as Dependências

Use o **npm** ou **yarn** para instalar as dependências do projeto.

Com **npm**:

```bash
npm install
```

Com **yarn**:

```bash
yarn install
```

### 3. Instalar as Bibliotecas de Pagamento

O serviço depende das bibliotecas **Stripe**, **PayPal**, **Square**, **Axios**, então instale-as também:

```bash
npm install stripe @paypal/checkout-server-sdk axios @square/client
```

### 4. Configuração de Chaves de API

Para que o serviço funcione corretamente, você precisa configurar suas chaves de API:

- **Stripe**: Acesse sua conta Stripe e gere uma chave secreta.
- **PayPal**: Crie uma conta no [PayPal Developer](https://developer.paypal.com/) e gere as credenciais necessárias.
- **Square**: Crie uma conta no [Square Developer](https://developer.squareup.com/) e obtenha seu token de acesso.
- **PagSeguro**: Obtenha a chave de integração do PagSeguro através de [PagSeguro API](https://dev.pagseguro.uol.com.br/).
- **MercadoPago**: Obtenha o token de acesso no [MercadoPago Developers](https://www.mercadopago.com.br/developers).

Substitua as credenciais de API no código do serviço, como mostrado abaixo:

```typescript
this.stripe = new Stripe('sua-chave-secreta', {
  apiVersion: null,
});

this.squareClient = new Client({
  environment: Environment.Sandbox,
  accessToken: 'seu-token-do-square',
});

this.paypalClient = new paypal.core.PayPalHttpClient(
  new paypal.core.SandboxEnvironment('seu-cliente-id', 'seu-cliente-secreto')
);
```

## Uso

### Exemplo de uso no controlador

Você pode usar o `PagamentoService` para processar pagamentos de maneira simples, especificando o valor, o token e o método de pagamento desejado.

```typescript
import { Controller, Post, Body } from '@nestjs/common';
import { PagamentoService } from './pagamento.service';

@Controller('pagamento')
export class PagamentoController {
  constructor(private readonly pagamentoService: PagamentoService) {}

  @Post()
  async processarPagamento(
    @Body() { valor, token, metodo }: { valor: number; token: string; metodo: string },
  ) {
    return this.pagamentoService.processarPagamento(valor, token, metodo);
  }
}
```

### Exemplo de Payload de Requisição

Para processar o pagamento, envie uma requisição POST para o endpoint `/pagamento` com o seguinte corpo:

```json
{
  "valor": 100.00,
  "token": "seu-token-de-pagamento",
  "metodo": "stripe"  // Pode ser "stripe", "paypal", "square", "pagseguro", "mercadopago"
}
```

### Resposta

A resposta será um **booleano** indicando se o pagamento foi bem-sucedido ou não. Exemplo de resposta:

```json
{
  "status": true  // true se o pagamento for processado com sucesso
}
```

Se ocorrer algum erro, uma exceção `BadRequestException` será lançada com uma mensagem descrevendo o erro.

## Log de Erros

O serviço utiliza a funcionalidade de **logger** do **NestJS** para registrar informações sobre o processo de pagamento. Além disso, ele captura erros durante o processamento e lança exceções adequadas para que você possa tratá-las no seu código.

Exemplo de log de erro:

```text
[PagamentoService] Erro ao processar pagamento no Stripe: <mensagem_do_erro>
[PagamentoService] Erro ao processar pagamento no PayPal: <mensagem_do_erro>
```

## Contribuindo

Se você deseja contribuir para este projeto, siga as etapas abaixo:

1. Faça o **fork** deste repositório.
2. Crie uma nova **branch** para sua contribuição.
3. Faça as alterações necessárias e **commite** suas mudanças.
4. Envie um **pull request** com suas alterações.

## Licença

Este projeto está licenciado sob a **MIT License**. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Esse é um modelo básico de **README**. Você pode adaptá-lo conforme a necessidade do seu projeto, com mais detalhes, personalizações ou exemplos de configuração.
