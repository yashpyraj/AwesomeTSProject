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
import Feather from 'react-native-vector-icons/Feather';
import AnimatedColorBox from '../components/animated-color-box';
import Navbar from '../components/navbar';
import LinkButton from '../components/link-button';
import Masthead from '../components/mashead';

const AboutScreen = () => {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'warmGray.900')}
      w="full">
      <Masthead title="About this app" image={require('../assets/image.jpeg')}>
        <Navbar />
      </Masthead>
      <ScrollView
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt="-20px"
        pt="30px"
        p={4}>
        <VStack flex={1} space={4}>
          <Box alignItems="center">
            <Image
              source={require('../assets/profile.jpeg')}
              borderRadius="full"
              resizeMode="cover"
              w={120}
              h={120}
              alt="author"
            />
          </Box>
          <Text fontSize="md" w="full">
            This is a React Native App made with Typescripts by Yash
          </Text>
          {/* <LinkButton
            colorScheme="red"
            size="lg"
            borderRadius="full"
            href="https://www.youtube.com/devaslife"
            leftIcon={
              <Icon as={Feather} name="youtube" size="sm" opacity={0.5} />
            }>
            Go to YouTube channel
          </LinkButton>
          <LinkButton
            colorScheme={useColorModeValue('blue', 'darkBlue')}
            size="lg"
            borderRadius="full"
            href="https://twitter.com/inkdrop_app"
            leftIcon={
              <Icon as={Feather} name="twitter" size="sm" opacity={0.5} />
            }>
            @inkdrop_app
          </LinkButton>
          <Text fontSize="md" w="full">
            Are you looking for a Markdown note-taking app? Check out my app
            called Inkdrop!
          </Text>
          <LinkButton
            colorScheme="purple"
            size="lg"
            borderRadius="full"
            href="https://www.inkdrop.app/"
            leftIcon={
              <Icon as={Feather} name="external-link" size="sm" opacity={0.5} />
            }>
            https://www.inkdrop.app/
          </LinkButton> */}
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  );
};

export default AboutScreen;
