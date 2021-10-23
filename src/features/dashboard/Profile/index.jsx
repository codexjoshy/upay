import React from 'react';
import { useSelector } from 'react-redux';
import PasswordLayout from '../Stakeholder/layouts/PasswordLayout';
import ProfileLayout from '../Stakeholder/layouts/ProfileLayout';

export default function Profile() {
  const {profile} = useSelector(state => state.stakeholder)
  if (!profile?.data.length) {
    //show network issue page
  }
  return (
    //   ignore style height
    <div className="container-full" style={{ height: '100vh' }}>
       <div className="content-header">
        <div className="d-flex align-items-center">
          <div className="mr-auto">
            <h3 className="page-title">Profile</h3>
            <div className="d-inline-block align-items-center">
              <nav>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#"><i className="mdi mdi-home-outline"></i></a></li>
                  <li className="breadcrumb-item" aria-current="page">Home</li>
                  <li className="breadcrumb-item active" aria-current="page">Profile</li>
                </ol>
              </nav>
            </div>
          </div>

        </div>
      </div>
      <section className="content">
        <div className="row">
          <div className="col-7 animated fadeInLeft">
            <div className="box">
              <div className="box-header with-border d-flex justify-content-between">
                <h5 className="box-title">Profile Info</h5>
              </div>
              <div className="box-body">
                {
                  profile?.data && <ProfileLayout profile={profile?.data} profileError ={profile?.error}/>
                }
              </div>
            </div>
          </div>
          <div className="col-5 animated fadeInRight">
            <div className="box">
              <div className="box-header with-border d-flex justify-content-between">
                <h5 className="box-title">Update Password</h5>
              </div>
              <div className="box-body">
                <PasswordLayout />
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
