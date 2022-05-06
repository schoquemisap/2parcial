import '../styles/App.css';
import { CartaA1 } from "./CartaA1";
import cd from '../matriz/matriz';

function App() {
    return ( 
        <> 
         <CartaA1 back={cd[0].theme}/>
         <CartaA1 back={cd[1].theme} />
         <CartaA1 back={cd[2].theme} />
        
        </>
     
    );
}
export default App;