import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionHistory from "./components/TransactionHistory";
import { AddNewTransaction } from "./components/AddNewTransaction";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionHistory />
        <AddNewTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
