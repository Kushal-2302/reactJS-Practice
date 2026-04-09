import React from 'react'
import { friendsData } from './friendsData'
import './friends.css'
const Friends = () => {
    return (
        <>
            <div className="friends">
                    <h1>My Friends Details</h1>
                    <div className="container">
                      <table>
                        <thead>
                          <tr>
                            <th>SIno</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Photo</th>
                          </tr>
                        </thead>
                        <tbody>
                          {friendsData.map((elem,index) => {
                            let { id, name, phno, email, imageUrl } = elem
                            return (
                                <tr key={index}>
                                    <th>{index+1}</th>
                                    <td>{name}</td>
                                    <td>{phno}</td>
                                    <td>{email}</td>
                                    <td><img src={imageUrl} alt="" /></td>
                                </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
        </>
    )
}

export default Friends
