import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyContext from './My_Context/MyContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import { store } from './Redex_Toolkit/Store.js'
createRoot(document.getElementById('root')).render(
  
  <MyContext>
<BrowserRouter>
<Provider store={store}>
<App/>

</Provider>
</BrowserRouter>
  </MyContext>

)