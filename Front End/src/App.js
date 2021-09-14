import React, { useState } from 'react';
import Header from './Header';
import TransactionList from './TransactionList';
import RecordList from './RecordList';
import data from "./data.json";
import axios from 'axios';

function App() {
    const inputStyle = {
        "padding": "10px"
    }

    const formStyle = {
        "marginTop": "30px",
        "marginBottom": "30px"
    }

    const hrStyle = {
        "margin": "10px auto",
        "width": "50%"
    }

    const [ transaction, setTransaction ] = useState(data);

    let initialUserInput = {
        userId: "",
        amount: "",
        date: ""
    };
    const [ userInput, setUserInput ] = useState(initialUserInput);

    const [records, setRecords] = useState([]);

    const handleChange = (e) => {
        setUserInput({...userInput, [e.target.name]: e.target.value})
    }

    const addTransaction = (userInput) => {
        if (userInput.userId.length === 0 ||
            isNaN(userInput.amount) ||
            userInput.date === "") {
            alert("Wrong format");
            return;
        }
        
        let newTransaction = {
            userId: userInput.userId,
            amount: parseInt(userInput.amount),
            date: userInput.date
        };
        setTransaction([...transaction, newTransaction]);
    }

    const handleAddNew = (e) => {
        e.preventDefault();
        addTransaction(userInput);
        setUserInput({
            userId: "",
            amount: "",
            date: ""
        });
    }

    const submitAll = () => {
        console.log(transaction);
        axios.post("http://localhost:8080/calculate", transaction).then(resp => {
            console.log(resp.data);
            setRecords(resp.data);
        });
        setTransaction([]);
    }

    return (
        <div className="App">
            <Header />
            <form className="text-center" onSubmit={handleAddNew}>
                <div className="container" style={formStyle}>
                    <div className="row">
                        <div className="col-sm-2 offset-sm-3" style={inputStyle}>
                            <input value={userInput.userId} type="text" name="userId" placeholder="userId" onChange={handleChange} />
                        </div>

                        <div className="col-sm-2" style={inputStyle}>
                            <input value={userInput.amount} type="text" name="amount" placeholder="amount" onChange={handleChange} />
                        </div>

                        <div className="col-sm-2" style={inputStyle}>
                            <input value={userInput.date} type="date" name="date" onChange={handleChange} />
                        </div>

                        <div className="col-sm-2">
                            <input type="submit" value="Add new transaction" className="btn btn-primary my-1" />
                        </div>
                    </div>
                </div>
            </form>

            <hr style={hrStyle} />
            <TransactionList transactionList={transaction} />
            <div className="text-center">
                <button type="button" onClick={submitAll} className='btn btn-primary my-1'>Submit All</button>
            </div>
            <br />
            
            <hr style={hrStyle} />
            <RecordList recordList={records}/>
        </div>
    );
}

export default App;
