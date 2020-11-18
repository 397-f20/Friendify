import React, {useState, useEffect} from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import SongWithFriend from './SongWithFriend';
import GetSongInfo from '../spotifyQ/GetSongInfo';

const SongListWithFriend = ({songs}) => {
    const [songInfo, setSongInfo] = useState([]);

    const getInfo = async(songTups) => {
        let tempSongInfos = [];
        await Promise.all(songTups.map(async (tup) => {
          const info = await GetSongInfo(tup[0]);
          //Sometimes, GetSongInfo Failes and info ends up being undefined. Conditional to avoid crashes
          if (info){
          tempSongInfos = tempSongInfos.concat({
            name: info.name,
            artists: info.artists,
            images: info.images,
            id: tup[0],
            friendWhoAdded: tup[1]
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
          {songInfo.map(song => <SongWithFriend key={song.id} song={song}/>)}
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

export default SongListWithFriend;