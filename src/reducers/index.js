import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
       { title: 'no scrubs', duration: '09:94'},
       { title: 'lala lhaja', duration: '09:56'},
       { title: 'thank u', duration: '08:56'},
       { title: 'Ahain', duration: '09:74'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SELECT_SONG'){
        return action.payload;
    }
    return selectedSong; 
}

// put together our reducers
export default combineReducers({
    songs : songsReducer,
    selectedSong: selectedSongReducer
});