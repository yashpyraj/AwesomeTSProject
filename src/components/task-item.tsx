import React, {useCallback} from 'react';
import {PanGestureHandlerProps} from 'react-native-gesture-handler';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import AnimatedCheckbox from 'react-native-checkbox-reanimated';
import {
  Pressable,
  Box,
  HStack,
  useColorModeValue,
  Icon,
  Input,
  useToken,
  Text,
} from 'native-base';
import AnimatedTaskLabel from './animated-textlabe';
interface Props extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  isEditing: boolean;
  isDone: boolean;
  onToggleCheckbox?: () => void;
  onPressLabel?: () => void;
  onRemove?: () => void;
  onChangeSubject?: (subject: string) => void;
  onFinishEditing?: () => void;
  subject: string;
}

const TaskItem = (props: Props) => {
  const {
    isEditing,
    isDone,
    onToggleCheckbox,
    subject,
    onPressLabel,
    onRemove,
    onChangeSubject,
    onFinishEditing,
    simultaneousHandlers,
  } = props;

  const highlightColor = useToken(
    'colors',
    useColorModeValue('blue.500', 'blue.400'),
  );
  const boxStroke = useToken(
    'colors',
    useColorModeValue('muted.300', 'muted.500'),
  );

  const checkmarkColor = useToken(
    'colors',
    useColorModeValue('white', 'white'),
  );

  const activeTextColor = useToken(
    'colors',
    useColorModeValue('darkText', 'lightText'),
  );
  const doneTextColor = useToken(
    'colors',
    useColorModeValue('muted.400', 'muted.600'),
  );

  const handleChangeSubject = useCallback(
    (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      onChangeSubject && onChangeSubject(e.nativeEvent.text);
    },
    [onChangeSubject],
  );

  return (
    <HStack
      alignItems="center"
      w="full"
      px={4}
      py={2}
      bg={useColorModeValue('warmGray.50', 'primary.900')}>
      <Box width={30} height={30} mr={2}>
        <Pressable onPress={onToggleCheckbox}>
          <AnimatedCheckbox
            highlightColor={highlightColor}
            checkmarkColor={checkmarkColor}
            boxOutlineColor={boxStroke}
            checked={isDone}
          />
        </Pressable>
      </Box>
      <AnimatedTaskLabel
        textColor={activeTextColor}
        inactiveTextColor={doneTextColor}
        strikethrough={isDone}
        onPress={onPressLabel}>
        Yash
      </AnimatedTaskLabel>
    </HStack>
  );
};

export default TaskItem;
