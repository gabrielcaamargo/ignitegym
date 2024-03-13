import { useState } from "react";
import { Heading, VStack, SectionList, Text } from "native-base";

import { HistoryCard } from "@/components/HistoryCard";
import { ScreenHeader } from "@/components/ScreenHeader";

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: '13.08.2024',
      data: ['Puxada frontal', 'Serrote']
    },
    {
      title: '20.08.2024',
      data: ['Puxada frontal']
    },
  ])

  return (
    <VStack flex={1}>
      <ScreenHeader title='Histórico de exercícios' />

      <SectionList 
        sections={exercises}
        keyExtractor={item => item}
        px={8}
        renderItem={({ item }) => (
          <HistoryCard />
        )}
        renderSectionHeader={({ section }) => (
          <Heading 
            color='gray.200' 
            fontSize='md' 
            mt={12} 
            mb={3}
          >
            {section.title}
          </Heading>
        )}
        contentContainerStyle={exercises.length === 0 && { flex: 1, justifyContent: 'center' }}
        ListEmptyComponent={() => (
          <Text 
            color='gray.100' 
            textAlign='center'
          >
            Não há exercícios registrados ainda. 
            {'\n'} 
            Vamos treinar hoje?
          </Text>
        )}
      />
    </VStack>
  )
}