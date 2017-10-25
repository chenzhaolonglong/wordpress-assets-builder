## desc 
build assets without installing packages again..


## usage

```bash
    # path of wordpress-assets-builder
    npm install
    npm link

    # path of wordpress-theme, containing assets/theme.js 
    # watch mode
    wp dev
    # product mode
    wp pro
```


## containing packages

### vue
- vue
- vuex
- vue-router
- iview
- elements-ui

### react
- react-dom
- react-redux
- redux
- react-router-dom
- react-router-redux
- dva
- material-ui 

### css
- normalize.css
- animate.css
- bootstrap4

### externals
- jquery ```jQuery```
- env ```/pro/.test(process.env.NODE_ENV)?'"pro"':'"dev"'```
