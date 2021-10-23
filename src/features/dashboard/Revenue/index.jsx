import React from 'react';
import { useSelector } from 'react-redux';


export default function Revenue() {
  const { profile } = useSelector(state => state.stakeholder)
  if (!profile?.data.length) {
    //show network issue page
  }
  return (
    //   ignore style height
    <div className="container-full" style={{ height: '100vh' }}>
      <div className="content-header">
        <div className="d-flex align-items-center">
          <div className="mr-auto">
            <h3 className="page-title">Revenue</h3>
            <div className="d-inline-block align-items-center">
              <nav>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#"><i className="mdi mdi-home-outline"></i></a></li>
                  <li className="breadcrumb-item" aria-current="page">Home</li>
                  <li className="breadcrumb-item active" aria-current="page">Revenue</li>
                </ol>
              </nav>
            </div>
          </div>

        </div>
      </div>
      <section className='content'>
        <form className="form">
          <div className="box-body">
            
            <div className="form-group">
              <label>Revenue Title</label>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="ti-user"></i></span>
                </div>
                <input  type="text" className="form-control" placeholder="Title" />
              </div>
            </div>
            <div className="form-group">
              <label>Revenue Amount</label>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="ti-money"></i></span>
                </div>
                <input  type="text" className="form-control" placeholder="Amount" />
              </div>
            </div>
          </div>
          <div className="box-footer">

            <button type="button" className="btn btn-rounded btn-warning btn-outline mr-1">
              <i className="ti-trash"></i> Update
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
