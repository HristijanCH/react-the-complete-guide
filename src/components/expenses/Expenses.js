import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../ui/Card";

function Expenses(props){
    return (
        <Card className="expenses">
            <ExpenseItem
                date={props.expenses[0].expanseDate}
                title={props.expenses[0].expanseTitle}
                amount={props.expenses[0].expanseAmount}
            />
            <ExpenseItem
                date={props.expenses[1].expanseDate}
                title={props.expenses[1].expanseTitle}
                amount={props.expenses[1].expanseAmount}
            />
            <ExpenseItem
                date={props.expenses[2].expanseDate}
                title={props.expenses[2].expanseTitle}
                amount={props.expenses[2].expanseAmount}
            />
            <ExpenseItem
                date={props.expenses[3].expanseDate}
                title={props.expenses[3].expanseTitle}
                amount={props.expenses[3].expanseAmount}
            />
        </Card>
    )
}

export default Expenses;