import '../styles/App.css';
import { CartaA1 } from "./CartaA1";
import matriz from '../matriz/matriz';

function App() {
    return ( 
        <> 
         <CartaA1 back={matriz[0].theme}/>
         <CartaA1 back={matriz[1].theme} />
         <CartaA1 back={matriz[2].theme} />
        
        </>
     
    );
}
export default App;