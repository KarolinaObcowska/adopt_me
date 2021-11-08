import Layout from "./components/Layout";
import {useEffect,useState} from 'react'
import {isLogin} from './utils/isLogin'

function App() {
  const [isAuthenticated,setIsAuthenticated] = useState()
  useEffect(() => {
    setIsAuthenticated(isLogin)
  }, [])
  return (
    <div className="App">
      <Layout isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
    </div>
  );
}

export default App;
