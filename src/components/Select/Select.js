
import React, { useState, useEffect } from "react";
import customFetch from "../../utils/customFetch";

const Selector = ({ value }) => {

    const [roles, setRoles] = useState([]),
        [role, setRole] = useState(value);

    useEffect(() => {

        customFetch('https://custom-cms-ac.herokuapp.com/roles', 'GET').then(data => {

            if (data.error) {

                console.error(data.message);
                return;
            }

            setRoles(data);
        });
    }, []); 

    return (
        <select value={role} onChange={(e) => setRole(e.target.value)}>

            {roles ? roles.map(role => {
        
                return (<option key={role._id} value={role._id} >{role.name}</option>)
            }) : null}
        </select>
    )
}

export default Selector;