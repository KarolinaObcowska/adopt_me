import Layout from "./components/Layout";
import { ModalProvider } from "./context/modalContext";
import { AuthProvider } from "./hooks/useAuth";

function App() {
  return (
    <div className="App">
      <ModalProvider>
        <AuthProvider>
          <Layout />
        </AuthProvider>
      </ModalProvider>
    </div>
  );
}

export default App;
