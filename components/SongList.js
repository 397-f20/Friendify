import React, {useState, useEffect} from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Song from './Song';
import GetSongInfo from '../spotifyQ/GetSongInfo';

const SongList = ({songs}) => {
    const [songInfo, setSongInfo] = useState([]);

    console.log(songs);

    const getInfo = async(songIds) => {
        let tempSongInfos = [];
        await Promise.all(songIds.map(async (id) => {
          const info = await GetSongInfo(id);
          //Sometimes, GetSongInfo Failes and info ends up being undefined. Conditional to avoid crashes
          if (info){
          tempSongInfos = tempSongInfos.concat({
            name: info.name,
            artists: info.artists,
            images: info.images,
            id: id
          });
        }}));
        setSongInfo(tempSongInfos);
    }

    useEffect(()=>{
      if (songs && songInfo.length === 0) {
        getInfo(songs);
      } 
    }, [songs]);

    return(
      <View style={styles.save}>

        <ScrollView>
          {songInfo.map(song => <Song key={song.id} song={song} />)}
        </ScrollView>
      </View>
    )
}


const styles = StyleSheet.create({
    save: {
      height: 300,
      justifyContent: 'flex-start',
      flex: 1,
    }
    });

export default SongList;