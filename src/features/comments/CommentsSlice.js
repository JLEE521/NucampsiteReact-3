import { COMMENTS } from '../../app/shared/COMMENTS';
//import CampsiteCard from '../campsites/CampsiteCard';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    commentsArray: COMMENTS
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState
});

export const commentsReducer = commentsSlice.reducer;

export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
    return state.comments.commentsArray.filter(
        (comment) => comment.campsiteId === parseInt(campsiteId)
    );
};

