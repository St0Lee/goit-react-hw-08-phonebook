import { createAsyncThunk } from "@reduxjs/toolkit";

import { Notify } from "notiflix";

import { signupRequest, loginRequest, currentRequest, logoutRequest } from "api/auth-api";

export const signup = createAsyncThunk(
    "auth/signup",
    async (body, {rejectWithValue}) => {
        try{    
            const data = await signupRequest(body);
            Notify.success("Registration has been successful!")
            return data;
        }
        catch(error){
            Notify.failure(`${error.response.data.message}`)
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async (body, {rejectWithValue}) => {
        try{    
            const data = await loginRequest(body);
            Notify.success("You've successfully logged in!")
            return data;
        }
        catch(error){
            Notify.failure("Wrong email or password")
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const current = createAsyncThunk(
    "auth/current",
    async(_, {rejectWithValue, getState}) => {
        try{
            const {auth} = getState();
            const data = await currentRequest(auth.token);
            return data;
        }
        catch(error){
            return rejectWithValue(error.response.data.message)
        }
    },
    {
        condition: (_, {getState}) => {
            const {auth} = getState();
            if(!auth.token) {
                return false
            };
        }
    }
);

export const logout = createAsyncThunk(
    "auth/logout",
    async(_, {rejectWithValue}) => {
        try{
            const data = await logoutRequest();
            Notify.success("You've successfully logged out!")
            return data;
        }
        catch(error){
            Notify.failure("Something went wrong. Please try refreshing the page.")
            return rejectWithValue(error.response.data.message);
        }
    }
)

