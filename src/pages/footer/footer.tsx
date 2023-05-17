import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";
import JacobTitle from "../../assets/images/jacob.png";
import styles from "./footer.style";

const footer = [
  ["Home", "About Us", "Services", "Case Studies"],
  ["Support", "FAQ", "Privacy Policy", "Term of Service"],
  ["Social Media", "Twitter", "   ", "Behance"],
];

export default function Footer() {
  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();
  return (
    <Box sx={styles.root}>
      <Stack
        component="footer"
        gap={2}
        direction="row"
        justifyContent="space-between"
        alignItems="start"
        pt={8.75}
        pb={12.75}
        px={7}
      >
        <Stack gap={2} direction="column">
          <Box
            component="img"
            src={JacobTitle}
            maxWidth={174}
            maxHeight={80}
            mr={1}
          />
          <Typography sx={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut
            magna lobortis erat elementum consectetur. Praesent ullamcorper
            libero ornare maximus blandit.
          </Typography>
          <Typography sx={styles.description}>mail@jacob.com</Typography>
        </Stack>
        <Stack direction="row" gap={22.5}>
          {footer.map((list) => (
            <Stack direction="column" gap={7.375} justifyContent="space-around">
              {list.map((title, idx) => {
                if (idx === 0)
                  return (
                    <Link
                      href="#"
                      underline="hover"
                      sx={styles.headerLink}
                      onClick={preventDefault}
                    >
                      {title}
                    </Link>
                  );
                return (
                  <Link
                    href="#"
                    underline="hover"
                    sx={styles.link}
                    onClick={preventDefault}
                  >
                    {title}
                  </Link>
                );
              })}
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Typography sx={styles.copyright}>
        All right reserved by Jacob.
      </Typography>
      ;
    </Box>
  );
}
