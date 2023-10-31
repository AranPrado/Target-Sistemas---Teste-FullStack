# Teste Target Sistemas - (Backend C#)

## Descrição

Este é o backend do projeto "Teste Target Sistemas". Foi desenvolvido em C# e atua como a parte servidora do sistema.

## Pré-requisitos

- .NET Core SDK: [https://dotnet.microsoft.com/download](https://dotnet.microsoft.com/download)

## Instalação

1. Clone o repositório:

```shell
git clone -b https://github.com/AranPrado/tsistemas-TesteFullStack.git
```
```shell
cd tsistemas-TesteFullStack
```
```shell
dotnet add package Microsoft.AspNetCore.OpenApi --version 7.0.12
dotnet add package Microsoft.EntityFrameworkCore --version 7.0.13
dotnet add package Microsoft.EntityFrameworkCore.Design --version 7.0.13
dotnet add package Microsoft.EntityFrameworkCore.Tools --version 7.0.13
dotnet add package Pomelo.EntityFrameworkCore.MySql --version 7.0.0
dotnet add package Swashbuckle.AspNetCore --version 6.5.0

```
# Uso

Inicie o servidor
```shell
dotnet run
```

## Configurando a conexão com o banco de dados

Entre no arquivo `appsettings.json` e adicione a seguinte configuração seguindo os passos abaixo:
```shell
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "DataBase" : "Server=127.0.0.1;Database=nomedobancodedados;Uid=usuariodobancodedados;Pwd=senhadousuariodobancodedados;"
  }
}

```


## Autores

- [@AranPrado](https://github.com/AranPrado)




