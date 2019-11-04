// Action creator
export const selectSong = song => {
    // return an action
    return {
        type : 'SELECT_SONG', // required
        payload : song          // optional
    };
};

