
# Sobre
Ambiente que simulará o atacante numa tentativa de XSS
# Instalação
1. Clone o repositório do projeto
```bash
git clone https://github.com/natanaellopes/poc-cookie-httponly-server-v2
```
2. Acesse a pasta do projeto
```bash
cd poc-cookie-httponly-server-v2
```
3. Instale as dependências do projeto
```bash
yarn 
```
4. Rode o projeto usando o `live-server`
```bash
npx live-server
```
5. Para simular que estamos em outro domínio, utilize o para rodar num local remoto
```bash
npx localtunnel --port 3003
```
6. Copie a URL que o `localtunnel` vai exibir logo após a execução do comando acima. Ela será usada posteriormente.
> your url is: https://random-url-123-4-5-6.loca.lt

