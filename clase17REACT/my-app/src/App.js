import Footer from "./footer/footer.jsx";
import Header from "./header/header.jsx";
import axios, { Axios } from 'axios'



function App() {
   const personas = async () => {
    let users = await axios.get('http://jsonplaceholder.typicode.com/users')
    console.log(users.data)}
  personas()
  return (
    <>
      <Header title='soy el titulo de header' />
      <h1>soy app</h1>
      {/* <Footer user={personas}/> */}
   </>
  );
}

export default App;
