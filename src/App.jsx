import { Provider } from "react-redux"
import Layout from "./Layout"
import { appStore } from "./utils/appStore"


function App() {


  return (
    <>
    <Provider store ={appStore}>
    <Layout />
    </Provider >
    </>
  )
}
// helo twet

export default App
