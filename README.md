## Instalação e Configuração

Siga os passos abaixo para configurar e rodar o projeto localmente.

1. Clone o repositório para sua máquina:

   ```bash
   git clone https://github.com/opt120-ticke-it/api-ticke-it
   cd api-ticke-it
   ```

2. Instale as dependências do projeto:

   ```bash
   npm install
   ```

3. Execute o Docker Compose para iniciar o ambiente de banco de dados:

   ```bash
   docker-compose up
   ou
   docker-compose up -d #para rodar em segundo plano
   ```

4. Em outra instância do terminal, inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
