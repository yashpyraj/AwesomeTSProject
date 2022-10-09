import React, {useCallback, useState} from 'react';
import {
  Text,
  Box,
  Center,
  VStack,
  useColorModeValue,
  Fab,
  Icon,
} from 'native-base';
import ThemeToggle from '../components/theme-toggle';
import shortid from 'shortid';
import Feather from 'react-native-vector-icons/Feather';
import TaskList from '../components/task-list';
import AnimatedColorBox from '../components/animated-color-box';
import Masthead from '../components/mashead';
import NavBar from '../components/navbar';

const initialData = [
  {
    id: shortid.generate(),
    subject: 'Buy movie tickets for Friday',
    done: false,
  },
  {
    id: shortid.generate(),
    subject: 'Make a React Native tutorial',
    done: false,
  },
];

function main() {
  const [data, setData] = useState(initialData);
  const [editingItemId, setEditingItemId] = useState<string | null>(null);

  const handleToggleTaskItem = useCallback((item: any) => {
    setData(prevData => {
      const newData = [...prevData];
      const index = prevData.indexOf(item);
      newData[index] = {
        ...item,
        done: !item.done,
      };
      return newData;
    });
  }, []);
  const handleChangeTaskItemSubject = useCallback(
    (item: any, newSubject: any) => {
      setData(prevData => {
        const newData = [...prevData];
        const index = prevData.indexOf(item);
        newData[index] = {
          ...item,
          subject: newSubject,
        };
        return newData;
      });
    },
    [],
  );
  const handleFinishEditingTaskItem = useCallback((_item: any) => {
    setEditingItemId(null);
  }, []);
  const handlePressTaskItemLabel = useCallback((item: any) => {
    setEditingItemId(item.id);
  }, []);
  const handleRemoveItem = useCallback((item: any) => {
    setData(prevData => {
      const newData = prevData.filter(i => i !== item);
      return newData;
    });
  }, []);

  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'primary.900')}
      w="full">
      <Masthead title="What's up!" image={require('../assets/image.jpeg')}>
        <NavBar />
      </Masthead>
      <VStack
        space={1}
        flex={1}
        mt="-20px"
        borderTopLeftRadius="20px"
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        borderRightRadius="20px"
        pt="20px">
        <TaskList
          data={data}
          onToggleItem={handleToggleTaskItem}
          onChangeSubject={handleChangeTaskItemSubject}
          onFinishEditing={handleFinishEditingTaskItem}
          onPressLabel={handlePressTaskItemLabel}
          onRemoveItem={handleRemoveItem}
          editingItemId={editingItemId}
        />
      </VStack>
      <Fab
        position="absolute"
        renderInPortal={false}
        size="sm"
        icon={<Icon color="white" as={<Feather name="plus" />} size="sm" />}
        colorScheme={useColorModeValue('blue', 'darkBlue')}
        bg={useColorModeValue('blue.800', 'blue.300')}
        onPress={() => {
          const id = shortid.generate();
          setData([
            {
              id,
              subject: '',
              done: false,
            },
            ...data,
          ]);
          setEditingItemId(id);
        }}
      />
    </AnimatedColorBox>
  );
}

export default main;
