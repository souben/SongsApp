import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if(!song) {
        return <div> select a song </div>
    }
    return  <div> {song.title } </div>  
};

// return the state of our store 

const mapStateToProps  = state => {
    return { song: state.selectedSong };
}
                                        //the action
export default connect(mapStateToProps)(SongDetail);
