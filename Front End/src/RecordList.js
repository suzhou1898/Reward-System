import React, { Fragment } from 'react';
import Record from './Record';

const RecordList = ({recordList}) => {
    return (
        <Fragment>
            <h2  className="text-center">Record List</h2>
            <div className='container text-center'>
                {
                    recordList.map(
                            record => {
                                return (
                                    <Record record={record} />
                                )
                            }
                    )
                }
            </div>
        </Fragment>
    );
}

export default RecordList;