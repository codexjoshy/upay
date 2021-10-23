import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getRoles } from '../../../../constant';
import { registerStakeHolders } from '../stakeholderAction';
export default function CreateStakeHolder({stakeholder, animate}) {
    const dispatch = useDispatch();
    const [details, setDetails] = useState({});
    const updateDetails = (data)=>{
        setDetails((state)=>({
            ...state,
            ...data,
        }));
    };
    const {stakeholderError, profile} = useSelector(state => state.stakeholder);
    // console.log(profile);
    const rolesData = getRoles(profile?.data?.role);
    // console.log(rolesData);

    const handleUpdate = ()=>{
        
    }
    const handleCreation = async ()=>{
        await dispatch(registerStakeHolders(details));
    }


    
    return (
        <div className={`col-lg-12 col-12 animated ${animate}`}>
            <div className="box">
               
                <form className="form">
                    <div className="box-body">
                        {
                          stakeholderError && (<div className="alert alert-dismissable alert-danger">{stakeholderError}</div>)  
                        }
                        <div className="form-group">
                            <label>First Name</label>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="ti-user"></i></span>
                                </div>
                                <input onChange={(e)=>updateDetails({firstname: e.target.value})} defaultValue={details?.firstname ?? stakeholder?.firstname} type="text" className="form-control" placeholder="firstname" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Las tName</label>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="ti-user"></i></span>
                                </div>
                                <input onChange={(e)=>updateDetails({lastname: e.target.value})} defaultValue={details?.lastname ?? stakeholder?.lastname} type="text" className="form-control" placeholder="lastname" />
                            </div>
                        </div>
                       
                        <div className="form-group">
                            <label>UserName</label>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="ti-user"></i></span>
                                </div>
                                <input onChange={(e)=>updateDetails({username: e.target.value})} defaultValue={details?.username ?? stakeholder?.username} type="text" className="form-control" placeholder="Username" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="ti-email"></i></span>
                                </div>
                                <input onChange={(e)=>updateDetails({email: e.target.value})} defaultValue={details?.email ?? stakeholder?.email} type="email" className="form-control" placeholder="Email" />
                            </div>
                        </div>
                        <div className="form-group"> 
                            <label>Phone Number</label>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-phone"></i></span>
                                </div>
                                <input  onChange={(e)=>updateDetails({phone: e.target.value})}  defaultValue={details?.phone ?? stakeholder?.phone} type="number" className="form-control" placeholder="Phone" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Role</label>
                            <select defaultValue={stakeholder?.role} onChange={(e)=>updateDetails({role: e.target.value})} className="form-control mb-20 mr-10" data-style="btn-primary">
                                {
                                    rolesData.map((role,i)=>(
                                        <option  key={i} value={role?.value}>{role?.title}</option>
                                    ))
                                }
                            </select>
							
                        </div>
                        
                    </div>
                    <div className="box-footer">
                        {
                            stakeholder ?
                                (
                                    <button onClick={handleUpdate} type="button" className="btn btn-rounded btn-warning btn-outline mr-1">
                                        <i className="ti-trash"></i> Update
                                    </button>
                                )
                            :   (
                                <button onClick={handleCreation} type="button" className="btn btn-rounded btn-primary btn-outline">
                                    <i className="ti-save-alt"></i> Create
                                </button>
                            )
                        }
                        
                       
                    </div>
                </form>
            </div>
        </div>
    )
}
