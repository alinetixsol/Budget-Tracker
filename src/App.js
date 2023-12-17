import "./App.css";
import Transaction from "./components/Transaction";
import Balance from "./components/Balance";
import Details from "./components/Details";
import Header from "./components/Header";
import History from "./components/History";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <div className="app">
          <Header />
          <Balance />
          <Details />
          <History />
          <Transaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
