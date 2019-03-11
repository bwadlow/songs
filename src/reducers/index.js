import { combineReducers } from 'redux'


const  songsReducer = () => {
  return [
    {title:'Englishmen in New York', duration: '3:05'},
    {title:'DaDoDoDo, DaDaDaDa', duration:'4:12'},
    {title:'Every Little Thing She Does', duration:'3:40'},
    {title:'Canary in a Coal Mine', duration: '3:30'}
  ];
}


const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type==='SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
}
export default combineReducers ({
  songs: songsReducer,
  selectSong: selectedSongReducer
})
