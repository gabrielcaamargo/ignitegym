import { useState } from "react";
import { VStack, HStack, FlatList, Heading, Text } from "native-base";

import { Group } from "@/components/Group";
import { HomeHeader } from "@/components/HomeHeader";
import { ExerciseCard } from "@/components/ExerciseCard";

export function Home() {
  const [groups, setGroups] = useState(['Costas', 'Ombros', 'Pernas', 'Biceps', 'Triceps']);
  const [exercises, setExercises] = useState(['Remada curvada', 'Puxada frontal', 'Serrote', 'Levantamento terra']);
  const [selectedGroup, setSelectedGroup] = useState('costas');

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
            isActive={String(selectedGroup).toLocaleUpperCase() === String(item).toLocaleUpperCase()}
            onPress={() => setSelectedGroup(item)}
          />
        )}
      />  

      <VStack flex={1} px={8}>
        <HStack justifyContent='space-between' mb={5}>
          <Heading color='gray.400' fontSize='md'>
            Exercícios
          </Heading>

          <Text color='gray.400' fontSize='sm'>
            {exercises.length}
          </Text>
        </HStack>

        <FlatList 
          data={exercises}
          keyExtractor={item => item}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{
            paddingBottom: 24
          }}
          renderItem={({ item }) => (
            <ExerciseCard />
          )}
        />
      </VStack>
    </VStack>
  )
}