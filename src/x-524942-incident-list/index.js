import {createCustomElement, actionTypes} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import {actionHandlers} from './actionHandlers'
import { view } from './view'

// const {COMPONENT_BOOTSTRAPPED} = actionTypes;

createCustomElement('x-524942-incident-list', {
	actionHandlers,
	initialState: {
		result: [],
		chekedIncident: {},
		filterBy: 'All'
    },
	renderer: {type: snabbdom},
	view,
	styles
} );
