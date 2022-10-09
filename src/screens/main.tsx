import React, {useCallback, useState} from 'react';
import {Text, Box, Center, VStack, useColorModeValue} from 'native-base';
import ThemeToggle from '../components/theme-toggle';
import AnimatedCheckbox from 'react-native-checkbox-reanimated';
import {Pressable} from 'react-native';
import TaskItem from '../components/task-item';
function main() {
  const [checked, setChecked] = useState(false);
  const handlePress = useCallback(() => {
    setChecked(prev => !prev);
  }, []);
  return (
    <Center
      _dark={{bg: 'blueGray.900'}}
      _light={{bg: 'blueGray.50'}}
      px={4}
      flex={1}>
      <VStack space={5} alignItems="center" textAlign={'center'}>
        <TaskItem
          isDone={checked}
          isEditing={false}
          subject={'yash'}
          onToggleCheckbox={handlePress}
        />

        <Box p={10} bg={useColorModeValue('red.400', 'yellow.400')}>
          <Text>yash</Text>
        </Box>
        <ThemeToggle />
      </VStack>
    </Center>
  );
}

export default main;
