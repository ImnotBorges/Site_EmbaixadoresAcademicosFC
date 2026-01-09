# Backend (Node + DB2)

## 1) Dependencias

```bash
npm install
```

## 2) Variaveis de ambiente

Crie um arquivo `.env` baseado no `.env.example`:

```bash
cp .env.example .env
```

Edite o `DB2_CONN_STRING` com os dados do seu DB2.

## 3) Tabela no DB2

```sql
CREATE TABLE VISITS (
  ID INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  RESPONSAVEL VARCHAR(200) NOT NULL,
  INSTITUICAO VARCHAR(200) NOT NULL,
  CIDADE VARCHAR(120) NOT NULL,
  QUANTIDADE_ALUNOS INTEGER NOT NULL,
  SERIE_CURSO VARCHAR(160) NOT NULL,
  EMAIL VARCHAR(200) NOT NULL,
  TELEFONE VARCHAR(40) NOT NULL,
  OBSERVACOES CLOB,
  CRIADO_EM TIMESTAMP NOT NULL DEFAULT CURRENT TIMESTAMP
);
```

## 4) Rodar servidor

```bash
npm start
```

O site e a API ficam em `http://localhost:3000`.

## Estrutura do projeto

```
src/
  client/  -> frontend estatico
  server/  -> backend (Express + DB2)
```
