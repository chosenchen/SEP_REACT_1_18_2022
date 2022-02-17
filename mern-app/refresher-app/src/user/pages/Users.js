import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Tom Jerry',
            image: 'https://ps.w.org/metronet-profile-picture/assets/icon-256x256.png?rev=2464419',
            places: 3
        },
        {
            id: 'u2',
            name: 'Taylor Max',
            image: 'https://ps.w.org/metronet-profile-picture/assets/icon-256x256.png?rev=2464419',
            places: 2
        }
    ];
    return <UsersList items={USERS}/>
}

export default Users;