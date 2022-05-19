import React from 'react';

const WithLocation = (MyComponent) => props => {
    return <MyComponent location="this is the location"></MyComponent>
}
export default WithLocation;
