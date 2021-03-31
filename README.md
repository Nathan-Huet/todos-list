# todos

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### fonctionnalités

Création de compte, authentification avec token conservé en local storage
Sidebar avec toutes les listes créé par l'utilisateur, un click deçu affiche les todos de cette liste
On peut créér et supprimer les listes, on peut créér, modifier, compléter, supprimer des todos
On peut filtrer l’affichage des todos
Tout est stocké sur la base de donnée accédé avec l'api postman, on utilise vuex avec lors d'une modification des données une action et faite qui commit une mutation.
