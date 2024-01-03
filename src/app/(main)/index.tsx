import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import React from 'react';

export default function Home() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Link href="/Login/LoginWrapper" asChild>
          <Pressable style={{
              borderWidth: 1, 
              paddingVertical: 16,
              paddingHorizontal: 24, 
              backgroundColor: '#400460',
              borderRadius: 8,
            }}>
            <Text style={{
              color: "#FFF"
            }}>Go to Login</Text>
        </Pressable>
      </Link>
    </View>
  );
}