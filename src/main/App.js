import React from 'react'
import 'bootswatch/dist/flatly/bootstrap.css'
import 'toastr/build/toastr.min.js'
import '../custom.css'
import Rotas from './rotas'
import Navbar from '../components/navbar'
import 'toastr/build/toastr.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";      
import { Button } from 'primereact/button';
import ProvedorAutenticacao from './provedorAutenticacao'
                                           
class App extends React.Component {

  // eslint-disable-next-line react/require-render-return
  render(){
    return(
        <ProvedorAutenticacao>
          <Navbar></Navbar>
          <div className="container">
            <Rotas></Rotas>  
          </div>
        </ProvedorAutenticacao>
    )
  }
 
}
   


export default App
