
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
1. Rode o projeto
```bash
yarn dev
```
5. Para simular que estamos em outro domínio, utilize o para rodar num local remoto
```bash
npx localtunnel --port 3003
```
6. Copie a URL que o `localtunnel` vai exibir logo após a execução do comando acima. Similar a essa abaixo.
> your url is: https://random-url-123-4-5-6.loca.lt
7. Define a variável `server` em public/malware.js:1.
> const server = 'https://random-url-123-4-5-6.loca.lt';
