import { actionTypes} from '@servicenow/ui-core';
import {createHttpEffect} from '@servicenow/ui-effect-http';

const {COMPONENT_BOOTSTRAPPED} = actionTypes;

export const actionHandlers = {
    [COMPONENT_BOOTSTRAPPED] (coeffects) {
        const { dispatch } = coeffects;
        dispatch('FETCH_INCIDENTS');
    },
    'FETCH_INCIDENTS': createHttpEffect('api/now/table/incident?sysparm_display_value=true', {
        method: 'GET',
        successActionType: 'FETCH_INCIDENT_SUCCESS'
    }),
        
    'FETCH_INCIDENT_SUCCESS' (coeffects) {
        const { action, updateState } = coeffects;
        const { result } = action.payload;

        if( coeffects.state.filterBy !== 'All') {
            let sorted = result.filter(incident => incident.state.toLowerCase() == coeffects.state.filterBy.toLowerCase())
            console.log('sorted', sorted);
            updateState({ result: sorted });
        }

        if(coeffects.state.filterBy == 'All') {
            updateState({ result });
        }
    },
    'NOW_DROPDOWN_PANEL#ITEM_CLICKED' (coeffects) {
        const { action, dispatch } = coeffects;
        const sys_id = action.payload.item.sys_id;

        if(action.payload.item.id == 'delete') {
            dispatch('DELETE_INCIDENT', {
                sys_id
            });
        }
        else if(action.payload.item.id == 'check') {
            dispatch('CHECK_INCIDENT', {
                sys_id
            });
        }
    },
    'DELETE_INCIDENT': createHttpEffect('api/now/table/incident/:sys_id', {
        method: 'DELETE',
        headers: {},
        pathParams: ['sys_id'],
        successActionType: 'FETCH_INCIDENTS'
    }),
    'CHECK_INCIDENT': createHttpEffect('api/now/table/incident/:sys_id', {
        method: 'GET',
        headers: {},
        pathParams: ['sys_id'],
        successActionType: 'CHECK_SUCCESS'
    }),
    'CHECK_SUCCESS' (coeffects) {
        const { updateState } = coeffects;
        updateState({chekedIncident: coeffects.action.payload.result})
    },
    'NOW_MODAL#FOOTER_ACTION_CLICKED' (coeffects) {
        const { dispatch, updateState } = coeffects;

        updateState({chekedIncident: {}})
        dispatch('DELETE_INCIDENT', {
            sys_id: coeffects.state.chekedIncident.sys_id
        });
    },
    'NOW_MODAL#OPENED_SET' (coeffects) {
        const { updateState } = coeffects;
        updateState({chekedIncident: {}})
    },
    'NOW_TABS#SELECTED_ITEM_SET' (coeffects) {
        const { dispatch, updateState } = coeffects;

        updateState({filterBy: coeffects.action.payload.value})
        dispatch('FETCH_INCIDENTS')
    }
};