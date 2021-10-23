import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { TOKEN_KEY } from '../../../constant';
import { LOGO } from '../../../constant/Images';
import { getToken } from '../../../helpers';
import { stakeholderLogin } from './loginAction';

export default function Login() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");
  
  const history = useHistory();
  const dispatch = useDispatch();
  const {isLoading, loginError, isAuth} = useSelector(state=>state.login);
  useEffect(() => {
    (async ()=>{ 
      const token = await getToken(TOKEN_KEY);
      if (isAuth || token) {
        history.push('/home')
      }
      
    })()
  }, [isAuth, history])
  const handleLogin = async (e)=>{
    e.preventDefault();
    if(!username || !password) {
      setError('kindly provide a valid Email and Password');
      return;
    }
    if (!error) {
      await dispatch(stakeholderLogin({username, password}))

      
      // try {
      //   dispatch(loginPending());
      //   const isAuth = await userLogin({username, password});
      //   console.log('auth:',isAuth);
      //   if (isAuth?.success) {
      //     dispatch(loginSuccess())
      //     history.push('/stakeholders')
      //   }
      //   // console.log(isAuth);
      //   // dispatch()
      // } catch (error) {
      //   const {data} = error.response;
      //   await dispatch(loginFailure(data?.error ?? 'Sorry unable to login at this time'));
      // }
      
    }
  };
  return (
    <div
      className="hold-transition theme-primary bg-img"
      style={{
        backgroundImage: 'url(../../../images/auth-bg/bg-1.jpg)',
        height: '100vh',
      }}
    >
      <div className="container h-p100">
        <div className="row align-items-center justify-content-md-center h-p100">
          <div className="col-12">
            <div className="row justify-content-center no-gutters">
              <div className="col-lg-5 col-md-5 col-12">
                <div className="bg-white rounded30 shadow-lg">
                  <div className="content-top-agile p-20 pb-0">
                    {/* <h2 className="text-primary">UhuruPay App</h2> */}
                    <div className="logo-mini row">
                      <div className="logoCont col-4 offset-4">
                        <img src={LOGO.square} alt="logo" />
                      </div>
                    </div>
                    <p className="mb-0">Sign in to continue to UhuruPay.</p>
                  </div>
                  <div className="p-40">
                    <form action="index.html" method="post">
                      <div style={{color:'red'}}>{error} {loginError}</div>
                      <div className="form-group">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text bg-transparent">
                              <i className="ti-user"></i>
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control pl-15 bg-transparent"
                            placeholder="Username"
                            defaultValue={username}
                            onChange={(e)=>{
                              setUsername(e.target.value)
                              setError('')
                            }}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text  bg-transparent">
                              <i className="ti-lock"></i>
                            </span>
                          </div>
                          <input
                            type="password"
                            className="form-control pl-15 bg-transparent"
                            placeholder="Password"
                            defaultValue={password}
                            onChange={(e)=>setPassword(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div className="checkbox">
                            {/* <input type="checkbox" id="basic_checkbox_1" />
                            <label htmlFor="basic_checkbox_1">Remember Me</label> */}
                          </div>
                        </div>
                        {/* <!-- /.col --> */}
                        <div className="col-6">
                          <div className="fog-pwd text-right">
                            {/* <a href="#" className="hover-warning">
                              <i className="ion ion-locked"></i> Forgot pwd?
                            </a> */}
                            <br />
                          </div>
                        </div>
                        {/* <!-- /.col --> */}
                        <div className="col-12 text-center">
                          {
                            isLoading ?
                              <p>Login in progress...</p>
                            :(
                              <button onClick={handleLogin} type="button" className="btn btn-success mt-10">
                                SIGN IN
                              </button>
                            )
                          }
                          
                        </div>
                        {/* <!-- /.col --> */}
                      </div>
                    </form>
      
                  </div>
                </div>
    
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
