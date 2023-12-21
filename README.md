# Pokedéx para treinadores

:hourglass: Projeto em desenvolvimento 

## 🎯 Objetivo
criar um sistema onde treinadores possam entrar se cadastrando com o seu nome de treinador e senha e, ao entrarem possuam essas seguintes funcionalidades:
- [X] Criar um time de pokémons com 5 pokémons (o total de pokémons no time é 5)
- [X] Listar todos os pokémons da API
- [X] Filtrar tanto por nome quanto por tipo ou ambos, se eu não achar o pokémons pesquisando pelo nome quero que seja informado que o pokémon que eu procurei não existe na pokedéx
- [X] Seja possível visualizar as evoluções dos pokémons

## 📘 Descrição
Desenvolvi o frontend de uma aplicação web de listagem de Pokémons, onde é possível procurar um Pokémon por nome, tipo ou ambos, além de ser possível criar times de até 5 Pokémons.

Lista com as funcionalidades:
- [] Registrar usuário
- [] Login 
- [X] Criar um time de pokémons com 5 pokémons
- [X] Listar todos os pokémons da API
- [X] Filtrar tanto por nome quanto por tipo ou ambos
- [X] Visualizar as evoluções dos pokémons

![Home](https://github.com/jessicavsampaio/trainers-pokedex/blob/main/assets/Print_Home_.png)

## 🔧 Instalação
1. Clone este repositório em [gitHub/jessicavsampaio](https://github.com/jessicavsampaio/trainers-pokedex)
2. Entre na pasta criada com o comando:

```
cd trainers-pokedex
```

3. Você pode dar um build usando o seguinte comando via cmd na pasta do seu projeto:
```
docker build -t trainers-pokedex .
```

4. No arquivo vite.config.js, já está definida a porta 8080.

5. Assim que o build estiver completo, você pode rodar o container com o seguinte comando:
```
docker run -p 8080:8080 -d trainers-pokedex
```


## 🛠️ Tecnologias

* React
* JavaScript
* HTML


## ✒️ Autores

* **[Jéssica Vieira](https://www.linkedin.com/in/jessicavsampaio/)** - Desenvolvedora
