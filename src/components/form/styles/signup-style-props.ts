const flexStyleProps = {
  minH: "100vh",
  align: "center",
  justify: "center",
};

const stackStyleProps = {
  spacing: 8,
  mx: "auto",
  maxW: "2xl",
  py: 12,
  px: 6,
};

const boxContainerStyleProps = {
  rounded: "lg",
  boxShadow: "lg",
  p: 8,
  minW: "2xl",
};

const headingStyleProps = {
  fontSize: "4xl",
  textAlign: "center" as "center",
  mb: "1rem",
};

const textStyleProps = {
  fontSize: "lg",
  color: "gray.600",
};

const signupButtonStyleProps = {
  fontFamily: "heading",
  w: "full",
  bgGradient: "linear(to-r, red.400,pink.400)",
  color: "white",
  _hover: {
    bgGradient: "linear(to-r, red.400,pink.400)",
    boxShadow: "xl",
  },
};

const signupContainerStyleProps = {
  spacing: 10,
  mt: 6,
};

const linkStyleProps = {
  color: "#2B6CB0",
  textDecoration: "underline",
};
export {
  flexStyleProps,
  stackStyleProps,
  boxContainerStyleProps,
  headingStyleProps,
  textStyleProps,
  signupButtonStyleProps,
  signupContainerStyleProps,
  linkStyleProps,
};
