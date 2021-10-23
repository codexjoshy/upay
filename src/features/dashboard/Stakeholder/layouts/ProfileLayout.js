import React, { useEffect, useState } from 'react'

export default function ProfileLayout({profile, profileError}) {
    const [details, setDetails] = useState({});
    const updateDetails = (data)=>{
        setDetails((state)=>({
            ...state,
            ...data,
        }));
    };
    const handleUpdate = (data)=>{

    }
    // console.log('profile',profile?.role);
    
    return (
        <form className="form">
            <div className="box-body">
                {
                    profileError && (<div className="alert alert-dismissable alert-danger">{profileError}</div>)
                }
                <div className="form-group">
                    <label>First Name</label>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="ti-user"></i></span>
                        </div>
                        <input onChange={(e) => updateDetails({ firstname: e.target.value })} defaultValue={details?.firstname ?? profile?.firstname} type="text" className="form-control" placeholder="firstname" />
                    </div>
                </div>
                <div className="form-group">
                    <label>Las tName</label>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="ti-user"></i></span>
                        </div>
                        <input onChange={(e) => updateDetails({ lastname: e.target.value })} defaultValue={details?.lastname ?? profile?.lastname} type="text" className="form-control" placeholder="lastname" />
                    </div>
                </div>

                <div className="form-group">
                    <label>UserName</label>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="ti-user"></i></span>
                        </div>
                        <input onChange={(e) => updateDetails({ username: e.target.value })} defaultValue={details?.username ?? profile?.username} type="text" className="form-control" placeholder="Username" />
                    </div>
                </div>
                <div className="form-group">
                    <label>Email Address</label>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="ti-email"></i></span>
                        </div>
                        <input onChange={(e) => updateDetails({ email: e.target.value })} defaultValue={details?.email ?? profile?.email} type="email" className="form-control" placeholder="Email" />
                    </div>
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-phone"></i></span>
                        </div>
                        <input onChange={(e) => updateDetails({ phone: e.target.value })} defaultValue={details?.phone ?? profile?.phone} type="number" className="form-control" placeholder="Phone" />
                    </div>
                </div>
                <div className="form-group">
                    <label>Role</label>
                    <input disabled={true}  value={ profile?.role} type="text" className="form-control" placeholder="Role" />

                </div>

            </div>
            <div className="box-footer">
    
                <button onClick={handleUpdate} type="button" className="btn btn-rounded btn-warning btn-outline mr-1">
                    <i className="ti-trash"></i> Update
                </button>
            </div>
        </form>
    )
}
