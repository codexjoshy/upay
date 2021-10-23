import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CreateStakeHolder from './layouts/CreateStakeHolder';
import StakeHolderList from './layouts/StakeHolderList';
import { getAllStakeHolders } from './stakeholderAction';

export default function Profile() {
  const [createForm, setCreateForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState(false);
  const {isLoading, stakeholders} = useSelector(state => state.stakeholder)
  const dispatch = useDispatch();


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
     
    </div>
  );
}
