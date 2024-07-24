import Contador from "./componentes/contador.jsx";
import 'bootstrap/dist/css/bootstrap.css'
import Form from "./componentes/form.jsx";
import {ChakraProvider} from '@chakra-ui/react'
import Cajas from "./componentes/boxchakra.jsx";

function App() {
  return (
    <div >
      <ChakraProvider>
      <Contador/>
      <Cajas/>
      <Form/>
      </ChakraProvider>
    </div>
  );
}

export default App;
