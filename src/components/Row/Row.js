import React, { useState } from 'react';
import { Edit, Delete, Save } from '@mui/icons-material';
import { IconButton } from '@mui/material';

import { Select } from '../index';
import customFetch from '../../utils/customFetch';

const Row = ({ updateUser, user }) => {

    const [isEditModeON, setIsEditModeON] = useState(false);

    const handleEditClick = (e) => {

        let row = e.target.closest('tr');

        let children = [...row.children];

        children.forEach(child => {

            if (child.dataset.editable) {

                setIsEditModeON(true);
            }
        })
    }

    const handleSaveClick = (e) => {

        let row = e.target.closest('tr'),
            children = [...row.children];

        children.forEach(child => {

            if (child.dataset.editable) {

                let value = child.firstChild.value;

                customFetch('https://custom-cms-ac.herokuapp.com/users/admin/' + user._id, 'PUT', JSON.stringify({
                    "role": value
                })).then(data => {

                    setIsEditModeON(false);
                    updateUser(data);
                });
            }
        })
    }

    const handleDeleteClick = (e) => {


    }

    return (
        <tr>

            <td data-field='id'>{user._id}</td>
            <td data-field='name'>{user.name}</td>
            <td data-field='lastName'>{user.lastName}</td>
            <td data-field='email'>{user.email}</td>
            <td  data-field='role' data-editable='true' >{isEditModeON ? <Select value={user.role._id} /> : user.role.name}</td>
            <td>
                
                { isEditModeON ? 

                    <IconButton onClick={handleSaveClick} >

                        <Save />
                    </IconButton> 
                    :
                    <IconButton onClick={handleEditClick} >

                    <Edit />
                    </IconButton> 
                }

                <IconButton onClick={handleDeleteClick} >

                    <Delete />
                </IconButton>
            </td>
        </tr>
    )
}

export default Row;