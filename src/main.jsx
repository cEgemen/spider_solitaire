import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import  "./index.css"
import 'primereact/resources/themes/saga-blue/theme.css';  
import 'primereact/resources/primereact.min.css';          
import 'primeicons/primeicons.css'; 
import 'primeflex/primeflex.css'; 
import { Provider } from 'react-redux';
import store from './management/store.jsx';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <DndProvider backend={HTML5Backend} >
         <App /> 
      </DndProvider>
    </Provider>
    
  </React.StrictMode>,
)
