import React, { useState } from 'react'
import { v1 as uuid } from 'uuid';

export default function SongList() {
    const [songs, setSongs] = useState([
        { title: 'let me ride', id: 1 },
        { title: 'carpet burn', id: 2 },
        { title: 'love', id: 3 }
    ]);
    const addSong = () => {
        setSongs([...songs, {title: 'new song', id: uuid()}])
    }
    return (
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return ( <li key={song.id}>{song.title}</li>)
                })}
            </ul>
            <button onClick = {addSong}>Add a song</button>
            
        </div>
    )
}
