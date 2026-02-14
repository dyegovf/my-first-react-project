import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
        style:'color: red; font-size: 20px;'
    },
    children: 'Click me now'
}

function MyApp() {
    return (
        <div>
            <h1>Custom React App Modified!!!</h1>            
        </div>
    )
}

const AnotherElement = (
  <a href="https://google.com" target="_blank" style={{color: 'red', fontSize: '20px'}}>Visit Google 2222</a>
)
const username = "Dyego2"
const reactElement2 = React.createElement (

    'a',
    {
        href: 'https://google.com',
        target: '_blank',
        style: {color: 'blue', fontSize: '20px'}
    },
    'Click here 2222',
    username
)

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement2
  )
