import React from 'react';
import '@servicenow/now-modal';
import { Info } from './Info';


export const Modal = (props) => {
    return (
        <now-modal
            headerLabel=""
            content=""
            footerActions={[
                {"label":"Delete","variant":"primary-negative"}
            ]}
            size="lg"
            opened={true}>
                <div >
                    <Info text='Number' value={props.incident.number ? props.incident.number : `—`}/>
                    <Info text='Description' value={props.incident.description ? props.incident.description : `—`}/>
                    <Info text='Opened At' value={props.incident.opened_at ? props.incident.opened_at : `—`}/>
                
                    <Info text='Closed At' value={props.incident.closed_at ? props.incident.closed_at : `—`}/>
                    <Info text='Short Description' value={props.incident.short_description ? props.incident.short_description : `—`}/>
                    <Info text='Notes' value={props.incident.close_notes ? props.incident.close_notes : `—`}/>
                </div>
            </now-modal>
    );
}