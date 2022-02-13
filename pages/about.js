import Layout from 'src/components/Layout';
import {
  Avatar,
  Box,
  Flex,
  Heading,
  Text,
  Icon,
  Stack,
  Link,
} from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

function About() {
  return (
    <Layout>
      <Box>
        <Flex
          justifyContent="center"
          alignItems="center"
          h={['20vh', '40vh']}
          w="100%"
          minW="100%"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          direction="column"
        >
          <Heading as="h3" size="xl" mb={2}>
            @rifeaqui
          </Heading>
          <Stack direction="row" spacing={2}>
            <Link href="https://www.instagram.com/abiliomarcos">
              <Icon w={6} h={6} as={FaInstagram} />
            </Link>
            <Link href="https://www.linkedin.com/in/abilioazevedo">
              <Icon w={6} h={6} as={FaLinkedin} />
            </Link>
            <Link href="https://www.youtube.com/channel/UCRSJUz7z9LI0CSrKmQ4hY5w">
              <Icon w={6} h={6} as={FaYoutube} />
            </Link>
          </Stack>
        </Flex>
        <Flex justify="center">
          <Flex
            w="full"
            maxW="1200px"
            px={[4, 8]}
            direction="column"
            position="relative"
          >
            <Box top="-8" position="absolute">
              <Avatar size="xl" src="/avatar.jpeg" />
            </Box>
            <Box ml="105px" mt={1}>
              <Heading as="h3" size="md">
                RifeAqui
              </Heading>
              <Text fontSize="sm">Seu site de rifas</Text>
            </Box>
            <Box mt={10}>
              <Text fontSize="sm">
                Nascemos para facilitar a gestão de suas rifas
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Layout>
  );
}

export default About;
