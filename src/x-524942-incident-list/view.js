import { Card } from './components/Card';
import { Modal } from './components/Modal';
import { Filter } from './components/Filter';

export const view = (state, {updateState, dispatch}) => {
	return (
		<div id='main'>
			{Object.keys(state.chekedIncident).length == 0 ? '' : <Modal incident={state.chekedIncident}/>}
			<h2 className='titleStyles'>Incidents</h2>
			<Filter />
			{state.result.map((res) =>(
					<Card res={res}/>
			))}
		</div>
	);
};