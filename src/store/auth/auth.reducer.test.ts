import { authReducer, initialState } from './auth.reducer';
import { fetchEditUser, fetchLogin, fetchLogout, fetchRegister, fetchUser } from './auth.actions';
import { User } from 'types';

describe('ingredients.reducer', () => {
    const user: User = {
        email: 'test@gmail.com',
        name: 'test'
    };
    const name = 'testName';
    const email = 'test@gmail.com';
    const password = '123';
    const accessToken = 'testAccessToken';
    const refreshToken = 'testRefreshToken';

    it('should return the initial state', () => {
        expect(authReducer(undefined, {type: ''})).toEqual(initialState);
    });

    // User
    it('should return the state with user loading', () => {
        expect(authReducer(initialState, fetchUser.pending))
            .toEqual({...initialState, userLoading: true, userError: false});
    });

    it('should return the user rejected state', () => {
        expect(authReducer(initialState, fetchUser.rejected))
            .toEqual({...initialState, userLoading: false, userError: true});
    });

    it('should return the state with filled user', () => {
        const response = {user, success: true};
        expect(authReducer(initialState, fetchUser.fulfilled(response, '')))
            .toEqual({...initialState, userLoading: false, userError: false, user});
    });

    // Edit user
    it('should return the state with edit user loading', () => {
        expect(authReducer(initialState, fetchEditUser.pending))
            .toEqual({...initialState, editUserLoading: true, editUserError: false});
    });

    it('should return the user rejected state', () => {
        expect(authReducer(initialState, fetchEditUser.rejected))
            .toEqual({...initialState, editUserLoading: false, editUserError: true});
    });

    it('should return the state with edited user', () => {
        const newUser: User = {name, email};
        const response = {user: newUser, success: true};
        expect(authReducer({...initialState, user}, fetchEditUser.fulfilled(response, '', {...newUser, password})))
            .toEqual({...initialState, editUserLoading: false, editUserError: false, user: newUser});
    });

    // Login
    it('should return the state with login loading', () => {
        expect(authReducer(initialState, fetchLogin.pending))
            .toEqual({...initialState, loginLoading: true, loginError: false});
    });

    it('should return the login rejected state', () => {
        expect(authReducer(initialState, fetchLogin.rejected))
            .toEqual({...initialState, loginLoading: false, loginError: true});
    });

    it('should return the state with filled user on login', () => {
        const response = {accessToken, refreshToken, user, success: true};
        expect(authReducer(initialState, fetchLogin.fulfilled(response, '', {email, password})))
            .toEqual({...initialState, loginLoading: false, loginError: false, user});
    });

    // Logout
    it('should return the state with logout loading', () => {
        expect(authReducer(initialState, fetchLogout.pending))
            .toEqual({...initialState, logoutLoading: true, logoutError: false});
    });

    it('should return the logout rejected state', () => {
        expect(authReducer(initialState, fetchLogout.rejected))
            .toEqual({...initialState, logoutLoading: false, logoutError: true});
    });

    it('should return the state with empty user', () => {
        expect(
            authReducer({...initialState, user}, fetchLogout.fulfilled({message: 'test', success: true}, ''))
        ).toEqual({...initialState, loginLoading: false, loginError: false, user: null});
    });

    // Register
    it('should return the state with register loading', () => {
        expect(authReducer(initialState, fetchRegister.pending))
            .toEqual({...initialState, registerLoading: true, registerError: false});
    });

    it('should return the register rejected state', () => {
        expect(authReducer(initialState, fetchRegister.rejected))
            .toEqual({...initialState, registerLoading: false, registerError: true});
    });

    it('should return the state with filled user on register', () => {
        const response = {accessToken, refreshToken, user, success: true};
        expect(authReducer(initialState, fetchRegister.fulfilled(response, '', {...user, password})))
            .toEqual({...initialState, registerLoading: false, registerError: false, user});
    });


});
