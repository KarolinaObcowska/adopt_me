import Layout from "./components/Layout";
import { ModalProvider } from "./context/modalContext";
import { AuthProvider } from "./hooks/useAuth";
import {AnimalProvider } from './hooks/useApi';

function App() {
  return (
    <div className="App">
      <ModalProvider>
        <AuthProvider>
          <AnimalProvider>
          <Layout />
          </AnimalProvider>
        </AuthProvider>
      </ModalProvider>
    </div>
  );
}

export default App;
