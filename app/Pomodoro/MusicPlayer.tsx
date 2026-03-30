import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

type MusicPlayerProps = {
    songName: string;
};

export default function MusicPlayer({songName}: MusicPlayerProps) {
    return (
        <View>
            <Text>Now Playing: {songName}</Text>
            
        </View>
    );
}
