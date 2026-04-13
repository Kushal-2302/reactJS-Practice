import React from 'react'

const Child = (props) => {
    let {user, count} = props;
    console.log(props)
    return (
        <div>
            <h1>I am in Child Component</h1>

            {/* Without Destructring */}
            {/* <h1>{props.user} scored {props.count}%</h1> */}

            {/* With Destructuring */}
            <h1>{user} scored {count}%</h1>

        </div>
    )
}

export default Child
