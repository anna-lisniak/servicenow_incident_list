import React from 'react';
import '@servicenow/now-tabs';

export const Filter = (props) => {
    return (
        <now-tabs
        items={[
            {"id":"All","label":"All"},
            {"id":"Closed","label":"Closed"},
            {"id":"On Hold","label":"On Hold"},
            {"id":"In Progress","label":"In Progress"},
            {"id":"New","label":"New"}
        ]}
        selectedItem="" maxWidth=""
    ></now-tabs>
    );
};