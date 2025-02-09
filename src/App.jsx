import { AppContextProvider } from "./context/AppContext";
import NameInput from "./components/NameInput";
import NameList from "./components/NameList";

function App() {
  return (
    <AppContextProvider>
      <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow-lg">
        <NameInput />
        <NameList />
      </div>
    </AppContextProvider>
  );
}

export default App;
