# Curso de React.js

## Introducción a React.js

### ¿Qué es React.js?

Es una librería/biblioteca de JS para crear UI.

React es declarativo. HTML en JS es JSX. *Componentes (como bloques de lego)* son usados en React. Muchas compañías usan React.

### Pre-requisitos

Clases, asíncronia, promesas, HTML, CSS, JS, terminal y comandos.

### Herramientas que usaremos

Chrome y herramientas de desarrollo. También tenemos las *React Developer Tools*.

### Create-react-app

Con este comando nuestro entorno estará listo para usar React. Usamos `npm install -g npx` (Si tienes problemas en linux, usa sudo). Y luego creas el proyecto con `npx create-react-app my-app`.

## Fundamentos

### Clonar el código de GitHub

[Link del reposotorio](https://github.com/sparragus/platzi-badges)

Para iniciar desde 0 y a la par con el profe: `git clone --branch 1.ReactDOM.render https://github.com/Sparragus/platzi-badges.git`

### ReactDOM.render

`React` es análogo a `createElement`.

`ReactDOM` es análogo a `appendChild`.

`ReactDOM.render(qué, dónde)`

Siempre que vayamos a usar JSX, tenemos que importar React arriba de todo el código

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
```

### JSX

JSX es sugar syntax, mucho más fácil de leer y escribir. Una expresión en JS es algo que se va a interpretar y se va a evaluar.

Los valores false o undefined o null no se ven.

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

const name = "Miguel"

const sum = () => 3+3

const jsx = <h1>Hola, soy {name} {sum()}</h1>

const container = document.getElementById('app')

ReactDOM.render(jsx , container)
```

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

const jsx = (
  <div>
    <h1>Hola, soy Miguel</h1>
    <p>Soy desarrollador frontend jr</p>
  </div>
)

const container = document.getElementById('app')

ReactDOM.render(jsx , container)
```

## Creación y diseño de componentes

### ¿Qué es un componente?

En react tenemos una unidad básica de desarollo: los *componentes*, que son bloques de construcción.

Componente vs Elemento: Un elemento es a un objeto como un componente es a una clase. Si el elemento fuera una casa, el componente sería los planos para hacer esa casa.

Identificación de componentes: 2 preguntas clave:

1. ¿Qué elementos se repiten?
2. Qué elementos cumplen una función muy específica?

Elementos con una función específica:

- Sirven para encapsular lógica
- Permiten juntar muchos comportamientos y aspectos visuales en un solo lugar

"Identificar componentes es una habilidad esencial para poder desarrollar aplicaicones de React"

### ¿Qué es y cómo funciona un componente en React.js

Los componentes en React tienen vida; nacen, crecen y desaparecen .

El ciclo de vida de los componentes tiene 3 fases :

1. El Montaje es cuando los usuarios llegan a nuestra aplicación, cuando tienen su 1era interacción con él.
2. La Actualización , es cuando se ejecuta el render, generando el nuevo DOM, es cuando React manda una señal de actualización componentDidUpdate() .
3. Eliminación de los componentes, al entrar a otra página, varios componentes no estarán en ella, React manda la señal componentWIllUnmount(), seguido de la eliminación del código en el DOM.

### Nuestro primer componente

Todos los componentes deberían estar dentro de la carpeta `src` y dentro de `components`. Todos deben tener obligatoriamente el método `render()`.

### Cómo aplicar estilos

Basta con mandar a llamar al archivo de estilos `import './styles/Badge.css'`

Para dar clases a las etiquetas HTML, en React no podemos usar `class`, tenemos que usar `className`

### Props

"props" es corto para "properties". Son análogos a los atributos HTML.

Son argumentos a una función. Atributos del componente.

Lo que se conoce como atributos en HTML, se llama propiedades en JSX.

```javascript
import Badge from './components/Badge'

ReactDOM.render(
  <Badge
    firstName="Mike"
    lastName="Kings"
    jobTitle="Frontend Senior"
    avatar="https://s.gravatar.com/avatar/3d35651d8d87873b9fbcb1342f47b197?s=80"
    twitter="@miguelAngelRe28"
  />,
  container
)
```

```javascript
class Badge extends React.Component {
  render(){
    const { //Destructurando
      firstName,
      lastName,
      avatar,
      jobTitle,
      twitter
    } = this.props
    return(
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
        <img className="Badge__avatar" src={avatar} alt="Avatar"/>
          <h1>{firstName} <br></br> {lastName}</h1>
        </div>

        <div className="Badge__section-info">
          <h3>{jobTitle}</h3>
          <div>{twitter}</div>
        </div>

        <footer className="Badge__footer">
          <p>#platziConf</p>
        </footer>
      </div>
    )
  }
}

export default Badge;
```

### Nuestra primera página

Las páginas en React siguen siendo componentes. Es un componente con varios componentes.

index.js:

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'
import BadgeNew from './pages/BadgeNew'

const container = document.getElementById('app')

ReactDOM.render(
  <BadgeNew />,
  container
)
```

BadgeNew.js:

```javascript
import React from 'react'
import './styles/BadgeNew.css'
import logo_header from './../images/badge-header.svg'
import Navbar from './../components/Navbar'
import Badge from './../components/Badge'

class BagdeNew extends React.Component{
  render() {
    return(
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid"  src={logo_header} alt="Logo"/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Miguel"
                lastName="Reyes"
                jobTitle="Frontend Developer"
                twitter="@miguelAngelRe28"
                avatar="https://s.gravatar.com/avatar/3d35651d8d87873b9fbcb1342f47b197?s=80"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BagdeNew
```

Navbar.js:

```javascript
import React from 'react'
import './styles/Navbar.css'
import logo from './../images/logo.svg'

class Navbar extends React.Component{
  render() {
    return(
      <div className="Navbar">
        <div className="container-fluid">
          <a className="Navbar__brand" href="/">
            <img className="Navbar__brand-logo" src={logo} alt="Logo"/>
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold">Conf</span>
          </a>
        </div>
      </div>
    )
  }
}

export default Navbar
```

Bagde.js:

```javascript
import React from 'react'
import './styles/Badge.css'
import confLogo from './../images/badge-header.svg'

class Badge extends React.Component {
  render(){
    const { //*Destructurando
      firstName,
      lastName,
      avatar,
      jobTitle,
      twitter
    } = this.props
    return(
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
        <img className="Badge__avatar" src={avatar} alt="Avatar"/>
          <h1>{firstName} <br></br> {lastName}</h1>
        </div>

        <div className="Badge__section-info">
          <h3>{jobTitle}</h3>
          <div>{twitter}</div>
        </div>

        <footer className="Badge__footer">
          <p>#platziConf</p>
        </footer>
      </div>
    )
  }
}

export default Badge;
```

### Enlazando eventos

`onChange` tendrá un evento llamado `handleChange`

Para obtener el valor de un input podemos hacer:

```javascript
handleChange = e => {
  console.log({
    name: e.target.name,
    value: e.target.value
  })
}
```

`onClick` tendrá un evento llamdo `handleClick`

```javascript
handleClick = () => {
  console.log("Button was clicked")
}
```

### Manejo de estado

`setState` y `state` son muy importantes en todo lo que hacemos en React.

```javascript
import React, { Component } from 'react'

export class BadgeForm extends Component {
  state = {} //*Creamos un objeto vacío de state

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = () => {
    console.log("Button was clicked")
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input onChange={this.handleChange} className="form-control" type="text" name="firstName" value={this.state.firstName}></input>

            <label>Last Name</label>
            <input onChange={this.handleChange} className="form-control" type="text" name="lastName" value={this.state.lastName}></input>


            <label>e-mail</label>
            <input onChange={this.handleChange} className="form-control" type="email" name="email" value={this.state.email}></input>


            <label>Job Title</label>
            <input onChange={this.handleChange} className="form-control" type="text" name="jobTitle" value={this.state.jobTitle}></input>


            <label>Twitter</label>
            <input onChange={this.handleChange} className="form-control" type="text" name="twitter" value={this.state.twitter}></input>
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}

export default BadgeForm

```

### Levantamiento del estado

"Levantar el estado" quiere decir que mandemos la información como props a los componentes.

```javascript
import React, { Component } from 'react'

export class BadgeForm extends Component {
  handleClick = () => {
    console.log("Button was clicked")
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}>
            </input>

            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}>
            </input>

            <label>e-mail</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}>
            </input>

            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}>
            </input>

            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}>
            </input>
          </div>

          <button
            onClick={this.handleClick}
            className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    )
  }
}

export default BadgeForm

```

```javascript
import React from 'react'
import './styles/BadgeNew.css'
import logo_header from './../images/badge-header.svg'
import Navbar from './../components/Navbar'
import Badge from './../components/Badge'
import BadgeForm from './../components/BadgeForm'

class BagdeNew extends React.Component{
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
      avatar: ''
    }
  }

  handleChange = e =>{
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    return(
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid"  src={logo_header} alt="Logo"/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                jobTitle={this.state.form.jobTitle}
                twitter={this.state.form.twitter}
                avatar={this.state.form.avatar}
                email={this.state.form.email}
              />
            </div>

            <div className="col-6">
              <BadgeForm onChange={this.handleChange} formValues={this.state.form} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BagdeNew
```

### Listas de componentes

Este fue un reto y me salió bien chido.

## React Router

### Introducción a React Router

Por lo general las páginas que hacemos en React son SPA (Single Page Application). Aquí reemplazamos el HTML para no tener que cargar la página totalmente.

También existe Multi Page Apps, cada vez que cambiamos de página se tiene que actualizar la página.

React Router (v4) nos da las herramientas para poder hacer SPA fácilmente.

Usamos 4 componentes:

- BrowserRouter -> es un componente que tenemos que poner en lo más arriba de nuestra app. Todo lo que esté adentro va a funcionar como si fuera una SPA. Permitirá que los demás componentes funcionen.
- Route -> Representa una dirección de internet. Cuando hay un match con el **path**(dónde lo voy a renderizar) se hace render del **component**(qué voy a renderizar). El componente recibirá 3 props; `match, history, location`, todos son información sobre la dirección de internet en la que está la app
- Switch -> Es un componente para 1 sola ruta. Es similiar a los switch de otros lenguajes de programación. Dentro del switch van elementos de Route. Switch se asegura que solamente un route se renderea.
- Link -> Toma el lugar del elemento `<a></a>`. Evita que se cargue la página completamente y actualiza la URL.

### División de la aplicación en rutas

Sustituimos la etiqueta `<a></a>` por:

```javascript
<Link to="/badges/new" className="btn btn-primary">New badge</Link>
```

```javascript
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import BadgeNew from '../pages/BadgeNew'
import Badges from '../pages/Badges'

function App() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/new" component={BadgeNew} />
      </Switch>
    </BrowserRouter>
  )
}
export default App
```

### Mejorando la User Interface con un Layout

`<React.Fragment></React.Fragment>` nos ayuda a elminar divs innecesarios.

## Component Lifecycle

### Introducción del ciclo de vida de un componente

Ciclo de vida -> Cuando un componente:

- Se renderiza: entra en escena
- Su estado cambia o recibe props diferentes: se actualizan
- Cambiamos de página y ese componente ya no está: se desmontó

En el montaje es el momento perfecto para inicializar valores. En el render, React va a calcular el elemento que representa el componente. -> `componentDidMount`

En actulización -> `render` y `componentDidUpdate`

En desmontaje -> `componentWillUnmount` . Es lugar perfecto para limpiar memoria.

### Práctica del ciclo de vida

1. `constructor`
2. `render`
3. `componentDidMount`
4. `componentDidUpdate`
5. `componentWillUnmount`

Si hacemos una llamada a una api y si nos esperamos a cargar los datos y cambiamos de página, el componente no se montó y es necesario hacer esto:

```javascript
this.timeoutId = setTimeout(() => {
      this.setState({ //*Vamos a imitiar una petición a una API
        data: [ //*Aquí hay mucha información
        ]
    }, 3000);

componentWillUnmount(){
  console.log('6. componente desmontado')
  clearTimeout(this.timeoutId)
}
```

Con lo de arriba prevenimos un warning muy común.

## Llamadas a una API

### Introducción a llamadas de una API

En React muchas cosas se tratan de patrones. Las llamadas a una API siguen un patrón muy similiar cada vez que las hacemos. Cada llamada a una API consta de 3 estados:

- Loading -> Es cuando la petición se envía. La respuesta puede venir de 2 formas
- Error -> De esta forma. si tenemos un error es muy importante poder notificarle al usuario.
- Datos -> O de esta otra forma

### React.js: Cómo traer datos de un API en React

Una llamada a una API es un proceso asincrono, es decir, lo comenzamos pero no sabemos cuándo va a terminar.

### Solicitando datos (GET)

Badges.js:

```javascript
state = {
    loading: true,
    error: null,
    data: undefined
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null })

    try {
      const data = await api.badges.list() //* Esta llamada es asíncrona
      this.setState({ loading: false, data: data })
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }

  render() {
    if (this.state.loading) {
      return 'Loading...'
    }

    if (this.state.error) {
      return `Error: ${this.state.error.message}`
    }
```

BadgesLists.js:

```javascript
if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to='/badges/new'>
            Create new badge
          </Link>
        </div>
      )
    }
```

### Mejorando la Experiencia de Usuario durante una petición

Lo importante es darle ese feedback al usuario y dejar que pueda hacer algo.

Badges.js:

```javascript
render() {
  if (this.state.loading) {
    return <PageLoading />
  }

  if (this.state.error) {
    return <PageError error={this.state.error} />
  }
```

PageLoading.js:

```javascript
import React from 'react'
import './styles/PageLoading.css'
import Loader from './Loader'

export default function PageLoading() {
  return (
    <div className="PageLoading">
      <Loader />
    </div>
  )
}
```

PageError.js:

```javascript
import React from 'react'

function PageError(props) {
  return (
    <div className="PageError">
      {props.error.message}
    </div>
  )
}

export default PageError

```

### Enviado datos (POST)

Badge.js:

```javascript
<Gravatar className="Badge__avatar" email={email} alt="Avatar"/>
```

Gravatar.js:

```javascript
import React from 'react'
import md5 from 'md5'

export default function Gravatar(props) {
  const email = props.email
  const hash = md5(email)

  return (
    <img
      className={props.className}
      src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
      alt="Avatar"
    >
    </img>
  )
}
```

### Manejando los estados de la petición durante POST

`this.props.history.push('/badges') //*Redirigimos al usuario a otra página`

BadgeForm.js:

```javascript
{this.props.error && (
  <p className="text-danger">{this.props.error.message}</p>
)}
```

### Actualizando datos (PUT)

### Actualizaciones automáticas

Usamos la técnica polling QUE ES MALA PRÁCTICA pero es con ejemplos didácticos.

## Mejorando la UI

### Los detalles de un Badge

### UI Components y Container Components

En la programación, es bueno separar las tareas en diferentes funciones. Claro que en React para lo mismo.

### Portales

Los portales nos ayudan a renderizar un elemento fuera del nodo principal de nuestra aplicación.

Los modales son esas ventanas pop up que generalmente usamos cuando queremos eliminar información y le advertimos al usuario: ¿Estás seguro/a de querer eliminar esto?

Es buena práctica hacer estos modals en archivos aparte y no incrustarlos en la app.

`{ReactDOM.createPortal(__quéRenderizar__ , __dónde__)}`

### Modales

### Hooks

Cuando los componentes son funciones, no tienen un estado propio que manejar. No tiene ciclos de vida, pero clases sí.

Los hooks harán que las funciones se comporten como clases.

Algunos ejemplos:

- useState -> Para manejo de estado
- useEffect -> Para suscribir el componente a su ciclo de vida
- useReducer -> Ejecutar un efecto basado en una acción

Custom Hooks. Usamos los hooks fundamentales para crear nuevos hooks custom. Estos hooks irán en su propia función y su nombre comenzará con la palabra 'use'.

```javascript
function useIncreaseCount(max){
  const [count, setCount] = React.useState(0)

  if (count > max) {
    setCount(0)
  }

  return [count, setCount]
}

```

```javascript
//Dentro de la función BadgeDetails
const [count, setCount] = useIncreaseCount(4)
const badge = props.badge

<button onClick={()=> setCount(count+1) }> Increase Count : {count} </button>
```

### Search filter

Los hooks solamente funcionan dentro de componentes funcionales. Los hooks van a lograr un código más limpio y organizado.

