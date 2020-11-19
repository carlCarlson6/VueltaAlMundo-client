import React from 'react';
import { RecordContext } from '../RecordContext';
import { recordReducer } from '../RecordReducer';
import { RecordService } from '../RecordService';
import { initialRecordState } from './InitialRecordState';

export const RecordState = (props: any) => {
    const [state, dispatch] = React.useReducer(recordReducer, initialRecordState)

    const recordService: RecordService = new RecordService();

    return (
        <RecordContext.Provider
            value = {{
                state,
                service: recordService
            }}
        >
            {props.children}
        </RecordContext.Provider>
    );
}
