import Expenses from "./components/expenses/Expenses.js";
import NewExpense from "./components/newExpense/NewExpense";

function App() {
    const expenses = [
        {
            expanseDate: new Date(2025, 1, 4),
            expanseTitle: "Car Insurance",
            expanseAmount: 294.67
        },
        {
            expanseDate: new Date(2025, 1, 5),
            expanseTitle: "Udemy course",
            expanseAmount: 10.67
        },
        {
            expanseDate: new Date(2025, 1, 2),
            expanseTitle: "AWS skill builder subscription",
            expanseAmount: 30
        },
        {
            expanseDate: new Date(2024, 12, 19),
            expanseTitle: "AWS exam",
            expanseAmount: 100
        }
    ]
    return (
        <div className="App">
            <NewExpense/>
            <Expenses expenses={expenses}/>
        </div>
    );
}

export default App;
