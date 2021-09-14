import React, { Fragment } from 'react';
import Transaction from './Transaction';
 
const marginStyle = {
    marginTop:'40px',
    marginBottom: '40px'
}
 
const TransactionList = ({transactionList}) => {
    return (
        <Fragment>
            <h2  className="text-center">Transaction List</h2>
            <div className='container text-center' style={marginStyle}>
                {
                    transactionList.map(
                            transaction => {
                                return (
                                    <Transaction transaction={transaction} />
                                );
                            }
                    )
                }
            </div>
        </Fragment>
    );
};
 
export default TransactionList;