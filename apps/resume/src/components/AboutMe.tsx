import { Box, Container, Flex, Text, Strong, Button } from "@radix-ui/themes"
import person from "@/assets/person.png"
import personMobile from "@/assets/preson-mobile.png"

export const AboutMe = () => {
  return (
    <Box data-testid='about-me'>
      <Container size='4'>
        <Flex
          width='100%'
          py='6'
          position='relative'
          direction={{
            initial: "column-reverse",
            sm: "row",
          }}
          gap={{
            initial: "4",
            sm: "5",
          }}
        >
          <Box
            width={{
              initial: "100%",
              sm: "50%",
            }}
            position='relative'
          >
            <Flex
              width={{
                initial: "100%",
                sm: "600px",
              }}
              position={{
                initial: "relative",
                sm: "absolute",
              }}
              top={{
                initial: "0",
                sm: "20%",
              }}
              direction='column'
              gap='2'
            >
              <Text
                as='div'
                size={{
                  initial: "6",
                  sm: "8",
                }}
              >
                Hello I'am <Strong>Adam Ajsaen.</Strong>
              </Text>
              <Text
                as='div'
                size={{
                  initial: "6",
                  sm: "8",
                }}
              >
                <Strong>Software</Strong>
                <Text className='stroke' ml='2'>
                  Engineer
                </Text>
              </Text>
              <Text
                as='div'
                size={{
                  initial: "6",
                  sm: "8",
                }}
                mb='5'
              >
                Base In <Strong>Thailand.</Strong>
              </Text>

              <Box
                display={{
                  initial: "block",
                  sm: "none",
                  md: "block",
                }}
              >
                <Text size='3' color='gray'>
                  I'm Adam Ajsaen, Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to
                  specimen book.
                </Text>
              </Box>
            </Flex>
          </Box>

          <Box
            display={{
              initial: "none",
              sm: "block",
            }}
          >
            <img src={person} style={{ width: "100%", height: "auto" }} />
          </Box>
          <Box
            display={{
              initial: "block",
              sm: "none",
            }}
          >
            <img src={personMobile} style={{ width: "100%", height: "auto" }} />
          </Box>

          <Flex
            position='absolute'
            bottom={{
              initial: "-24px",
              sm: "24px",
            }}
            left='0'
            gap='4'
          >
            <Button color='gray' highContrast>
              Github
            </Button>
            <Button variant='outline' color='gray' highContrast>
              Email
            </Button>
            <Button variant='outline' color='gray' highContrast>
              linkedin
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}
