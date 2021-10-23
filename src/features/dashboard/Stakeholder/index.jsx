import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CreateStakeHolder from './layouts/CreateStakeHolder';
import StakeHolderList from './layouts/StakeHolderList';
import { getAllStakeHolders } from './stakeholderAction';

export default function StakeHolders() {
  const [createForm, setCreateForm] = useState(false);
  // const [animate, setAnimation] = useState(false);
  const [selectedUser, setSelectedUser] = useState(false);
  const {isLoading, stakeholders} = useSelector(state => state.stakeholder)
  const dispatch = useDispatch();
  useEffect(() => {
    
    dispatch(getAllStakeHolders());
    
  }, [])
  const toggleSelectedUser = (user)=>{
    setCreateForm(!createForm);
    // setAnimation(!createForm);
    setSelectedUser(user);
  }

  const handleDisplay = ()=>{
    setCreateForm(!createForm);
    setSelectedUser(false);
  }

  return (
    //   ignore style height
    <div className="container-full" style={{ height: '100vh', marginBottom: '10%' }}>
      <div className="content-header">
        <div className="d-flex align-items-center">
          <div className="mr-auto">
            <h3 className="page-title">Stakeholders</h3>
            <div className="d-inline-block align-items-center">
              <nav>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#"><i className="mdi mdi-home-outline"></i></a></li>
                  <li className="breadcrumb-item" aria-current="page">Home</li>
                  <li className="breadcrumb-item active" aria-current="page">Stakeholders</li>
                </ol>
              </nav>
            </div>
          </div>

        </div>
      </div>
      <section className="content">
        <div className="row">
          <div className="col-12">
            <div className="box">
              <div className="box-header with-border d-flex justify-content-between">
                <h4 className="box-title">
                  {
                    selectedUser ? `Update ${selectedUser.username} Details` :  (createForm ? 'Create StakeHolder' : 'Stakeholders List')
                  }
                   
                </h4>
                {
                  createForm ? 
                    <button onClick={()=>handleDisplay()} className="btn btn-danger" type="button"> <span><i className="fa fa-times"></i> Close</span> </button>
                  : <button onClick={()=>handleDisplay()} className="btn btn-success" type="button"> <span><i className="fa fa-plus"></i> Create</span> </button>

                }
              </div>
              <div className="box-body">
                {
                  isLoading?
                  <div><p>Loading...</p></div>
                  :
                  (
                    createForm ?                                                                                                                                                                             
                      <CreateStakeHolder stakeholder={selectedUser} animate={createForm ? 'fadeInLeft' : ''} />
                    : <StakeHolderList stakeholders={stakeholders} toggleForm ={(selected)=>toggleSelectedUser(selected)} />
                  )
                  
                }
                
              </div>
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
