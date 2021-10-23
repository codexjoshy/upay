import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updatePassword } from '../stakeholderAction';

export default function PasswordLayout() {
    const [details, setDetails] = useState({});
    const [error, setError] = useState({});
    const dispatch =  useDispatch();
    const {password} = useSelector(state => state.stakeholder)
    const updateDetails = (data)=>{
        setError({})
        setDetails((state)=>({
            ...state,
            ...data,
        }));
    };
    const handleUpdate = (e)=>{
        e.preventDefault();
        setError({});
        const {newPassword, currentPassword, confirm} = details;
        if (!newPassword){
            setError({current:'Invalid new password entered'});
        }
        if (!currentPassword){
            setError({old:'Invalid password entered'});
        }
        if (newPassword != confirm) {
            setError({confirm:'New Password mismatch'});
        }
        if(!Object.keys(error).length) {
            dispatch(updatePassword({newPassword, currentPassword}));
        }
    }
    
    return (
        <form className="form">
            <div className="box-body">
            
                {
                    password?.error && (<div className="alert alert-dismissable alert-danger">{password?.error}</div>)
                }
                <div className="form-group">
                    <label>Old Password</label>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="ti-lock"></i></span>
                        </div>
                        <input onChange={(e) => updateDetails({ currentPassword: e.target.value })} defaultValue={details?.currentPassword} type="password" className="form-control" placeholder="Enter ..." />
                    </div>
                    <span className='text-danger'>{error?.old}</span>
                </div>
                <div className="form-group">
                    <label>New Password</label>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="ti-lock"></i></span>
                        </div>
                        <input onChange={(e) => updateDetails({ newPassword: e.target.value })} defaultValue={details?.newPassword} type="password" className="form-control" placeholder="Enter ..." />
                    </div>
                    <span className='text-danger'>{error?.current}</span>
                </div>

                <div className="form-group">
                    <label>Confirm New Password</label>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="ti-user"></i></span>
                        </div>
                        <input onChange={(e) => updateDetails({ confirm: e.target.value })} defaultValue={details?.confirm} type="password" className="form-control" placeholder="Confirm Password" />
                    </div>
                    <span className='text-danger'>{error?.confirm}</span>
                </div>
            </div>
            <div className="box-footer">
                { 
                    password?.loading ?(
                        <h4>Loading...</h4>
                    ) : (
                        <button onClick={handleUpdate} type="button" className="btn btn-rounded btn-warning btn-outline mr-1">
                            <i className="ti-trash"></i> Update
                        </button>
                    )
                }
                
            </div>
        </form>
    )
}
