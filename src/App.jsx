import { AppContextProvider } from "./context/AppContext";
import RegisterName from "./component/RegisterName";
import NameList from "./component/NameList";

function App() {
  return (
    <AppContextProvider>
      <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow-lg">
        <RegisterName />
        <NameList />
      </div>
    </AppContextProvider>
  );
}

export default App;
