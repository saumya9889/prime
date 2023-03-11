<Flex
  align={"center"}
  justify="space-between"
  w="100%"
  pr="25px"
  py="5px"
  mt="50px"
  direction={"column"}
  key={tes.name}
>
  <Text fontSize="16px" fontFamily="veralaRound">
    {tes.text}
  </Text>
  <Flex w="100%" pt="25px" align="center" justify="flex-start">
    <Avatar h="80px" w="80px" src={tes.avtr} alt={tes.name} />
    <Stack spacing={-1}>
      <Text fontSize="18px" fontFamily="veralaRound" fontWeight={400}>
        {tes.name}
      </Text>
      <Text
        fontFamily="veralaRound"
        fontWeight={400}
        fontSize="16px"
        color="black"
      >
        {tes.title}
      </Text>
    </Stack>
  </Flex>
</Flex>;

//
{
  testimonial.map((tes) => (
    <Flex
      align={"center"}
      justify="space-between"
      w="100%"
      pr="25px"
      mt={8}
      direction={"column"}
      key={tes.name}
    >
      <Text fontSize="16px" fontFamily="veralaRound">
        {tes.text}
      </Text>
      <Flex w="100%" pt="25px" align="center" justify="flex-start">
        <Avatar h="80px" w="80px" src={tes.avtr} alt={tes.name} />
        <Stack spacing={-1}>
          <Text
            px="2"
            fontSize="18px"
            fontFamily="veralaRound"
            fontWeight={400}
          >
            {tes.name}
          </Text>
          <Text
            px="2"
            fontFamily="veralaRound"
            fontWeight={400}
            fontSize="16px"
            color="black"
          >
            {tes.title}
          </Text>
        </Stack>
      </Flex>
    </Flex>
  ));
}
