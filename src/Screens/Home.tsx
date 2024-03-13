import { useState } from "react";
import { Group } from "@/components/Group";
import { HomeHeader } from "@/components/HomeHeader";
import { VStack, HStack, FlatList } from "native-base";

export function Home() {
  const [groups, setGroups] = useState(['costa', 'ombro', 'perna', 'biceps', 'triceps']);
  const [selectedGroup, setSelectedGroup] = useState('costa');

  return (
    <VStack flex={1}>
      <HomeHeader />
      
      <FlatList
        data={groups}
        keyExtractor={item => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={8}
        maxH={12}
        renderItem={({ item }) => (
          <Group 
            name={item} 
            isActive={selectedGroup === item}
            onPress={() => setSelectedGroup(item)}
          />
        )}
      />  
    </VStack>
  )
}