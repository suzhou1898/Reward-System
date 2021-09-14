import React from 'react';
 
const Transaction = ({transaction}) => {
   return (
       <div className='row'>
            <div className='col-sm-2 offset-sm-3'>
                {transaction.userId}
            </div>
            <div className='col-sm-2'>
                {transaction.amount}
            </div>
            <div className='col-sm-2'>
                {transaction.date}
            </div>
       </div>
   );
};
 
export default Transaction;