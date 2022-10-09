import React from 'react';
import {
  ScrollView,
  Box,
  Text,
  VStack,
  Icon,
  Image,
  useColorModeValue,
} from 'native-base';

const AboutScreen = () => {
  return (
    <Box
      flex={1}
      bg={useColorModeValue('warmGray.50', 'warmGray.900')}
      w="full">
      <ScrollView
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt="-20px"
        pt="30px"
        p={4}>
        <VStack flex={1} space={4}>
          <Box alignItems="center"></Box>
          <Text fontSize="md" w="full">
            This is a React Native tutorial built in the YouTube channel called
            DevAsLife.
          </Text>
          <Text fontSize="md" w="full">
            Are you looking for a Markdown note-taking app? Check out my app
            called Inkdrop!
          </Text>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default AboutScreen;
