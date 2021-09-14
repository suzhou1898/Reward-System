import React from 'react';
 
const Record = ({record}) => {
    let years = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let display = []
    for (let i = 1; i <= 12; i++) {
        if (record.years[i] !== 0) {
            display.push({month: years[i], amount: record.years[i]});
        }
    }
    
    return (
        <div className="row">
            <div className="col-sm-2 offset-sm-2">{record.userId}</div>
            <div className="col-sm-8">
                <div className="container">
                    <div className="row">
                        {
                            display.map(entry => {
                                return (
                                    <div className="col-sm-1">
                                        {entry.month + ": " + entry.amount}
                                    </div>
                                );
                            })
                        }
                        <div className="col-sm-1">
                            {"total: " + record.years[0]}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default Record;