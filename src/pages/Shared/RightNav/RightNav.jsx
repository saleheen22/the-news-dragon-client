import React from 'react';
import { Button } from 'react-bootstrap';

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button variant="outline-primary">Login With Google</Button>
            <Button variant="outline-secondary">Login With Github</Button>
        </div>
    );
};

export default RightNav;