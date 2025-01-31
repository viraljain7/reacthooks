
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Navbar from './Components/Navbar'
import ReducerHook from './Components/useReducer/ReducerHook';
// import ClearUp from './Components/useEffect/ClearUp';
// import UseEffect from './Components/useEffect/UseEffect'
// import UseState from './Components/useState/useState'

function App() {



  return (
    <>

      <ToastContainer theme='dark' />
      <Navbar />

      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <ClearUp /> */}
      <ReducerHook />
    </>
  )
}

export default App




