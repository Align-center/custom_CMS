import React, { Fragment, useEffect, useState } from 'react';
import { Navigate } from 'react-router';
import { Row } from '../../components/index';
import customFetch from '../../utils/customFetch';

const DataTable = () => {

    const [users, setUsers] = useState([]),
        [error, setError] = useState(null);

    useEffect(() => {

        customFetch('https://custom-cms-ac.herokuapp.com/users', 'GET').then(data => {

            if (data.error) {

                setError(data.error);
                return;
            }

            let bufferUsers = [];

            data.forEach(user => {

                let tempUser = (({_id, name, lastName, email, role}) => ({_id, name, lastName, email, role}))(user);

                bufferUsers.push(tempUser);
            });

            setUsers(bufferUsers);
        });
    }, []);   

    function updateUser (user) {

        let bufferUsers = [...users];

        let output = bufferUsers.map(bufferUser => {

            if (bufferUser._id === user._id) {

                bufferUser = user;
            }

            return bufferUser;
        });

        setUsers(output);
    }

    return (
        <Fragment>

            {error ? 
                <Navigate to='/signIn' state={{error: error}} /> :
                <table>

                    <thead>

                        <tr>

                            <th>ID</th>

                            <th>Prénom</th>

                            <th>Nom</th>

                            <th>Email</th>

                            <th>Role</th>

                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>

                        {users.map(user => <Row updateUser={updateUser} key={user._id} user={user} />)}
                        
                    </tbody>
                </table> 
            }
        </Fragment>
    );
}

export default DataTable;