import React from 'react'

export default function StakeHolderList({stakeholders, toggleForm}) {
    const handleSelected = (e, details)=>{
        e.preventDefault();
        toggleForm(details);
    }
    const handleStatus = (e, details) => {}
    
    return (
        // <div className="box-body p-15">
            <div className="table-responsive animated  fadeInRight">
                <table id="tickets" className="table mt-0 table-hover no-wrap table-borderless" data-page-size="10">
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            stakeholders && stakeholders.map((stakeholder, index)=>{
                                const {firstname, lastname, role, phone, username, email} = stakeholder
                                let fullName = `${firstname} ${lastname}`;
                                return (
                                    <tr key={index}>
                                        <td>{++index}</td>
                                        <td>
                                            <a href="#">{fullName}</a>
                                        </td>
                                        <td>{stakeholder?.username}</td>
                                        <td>{stakeholder?.phone}</td>
                                        <td>{stakeholder?.email}</td>
                                        <td>{stakeholder?.role}</td>
                                        <td className='d-flex justify-content-between'>
                                            <a onClick={(e)=>handleSelected(e,{firstname, lastname, username, email, role, phone})} href="#" className="text-success" data-toggle="tooltip" data-original-title="View"><i className="ti-eye" aria-hidden="true"></i></a>
                                            <a onClick={(e)=>handleStatus()} href="#" className="text-danger" data-toggle="tooltip" data-original-title="Deactivate">
                                                <i className={stakeholder?.status=='active' ? 'ti-lock' : 'ti-unlock'} aria-hidden="true"></i></a>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        {
                            !stakeholders&&(
                                <tr>
                                    <td >No Stakeholder Created</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            )
                        }
                        
                       
                    </tbody>
                </table>
            </div>
        // </div>
    )
}
