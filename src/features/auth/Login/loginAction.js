import { userLogin } from '../../../api/authApi'
import { TOKEN_KEY } from '../../../constant';
import { destroyToken } from '../../../helpers';
import { getProfile } from '../../dashboard/Stakeholder/stakeholderAction';
import { loginFailure, loginPending, loginSuccess, logoutAuth } from './loginSlice'

export const stakeholderLogin =  (data) => async dispatch=>{

    try {
        dispatch(loginPending());
        const isAuth = await userLogin(data);
        if (isAuth?.success) {
            dispatch(loginSuccess())
            await dispatch(getProfile());
        }
    }catch (error) {
        const {data} = error.response;
        await dispatch(loginFailure(data?.error ?? 'Sorry unable to login at this time'));
    }
}

export const stakeholderLogout = () => async dispatch => {
    try {
        dispatch(logoutAuth());
        destroyToken(TOKEN_KEY);
    } catch (error) {
        console.log(error.message);
    }
}