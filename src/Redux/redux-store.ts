import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import profileReducer, {ActionTypeProfile} from "./profile-reducer";
import dialogsReducer, {ActionTypeDialogs} from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import {reducer as formReducer} from 'redux-form';

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer
})
export type RootStateType = typeof rootReducer;
export type ReduxStateType = ReturnType<RootStateType>

export type ActionTypes = ActionTypeDialogs | ActionTypeProfile
export let store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>
export type RootState = ReturnType<typeof store.getState>



export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    AnyAction
    >