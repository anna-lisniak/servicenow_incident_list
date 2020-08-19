import React from 'react';
import '@servicenow/now-template-card';

export const Card = (props) => {
    return (
        <now-template-card-assist
            id={props.res.sys_id}
            className='cardStyle'
            tagline={{ icon: "tree-view-long-outline", label: 'Process' }}
            actions={[
                { id: 'check', label: 'Open Record', sys_id: props.res.sys_id },
                { id: 'delete', label: 'Delete', sys_id: props.res.sys_id }
            ]}
            heading={{"label": props.res.short_description}}
            content={[
                { label: 'Number', value: { type: 'string', value: props.res.number}},
                { label: 'State', value: { type: 'string', value: props.res.state } },
                { label: 'Assigned Group', value: { type: 'string', value: props.res.assignment_group.display_value } },
                { label: 'Assigned To', value: { type: 'string', value: props.res.assigned_to.display_value } }
            ]}
            contentItemMinWidth='750'
            footer-content={{
                label: 'Updated',
                value: props.res.sys_updated_on
            }}
        ></now-template-card-assist>
    );
}