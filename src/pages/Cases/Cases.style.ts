import { StylesType } from "../../theme/type";

const styles: StylesType<"grid"> = {
  grid: {
    color: ({ palette }) => palette.primary[900],
    // color: ({ palette }) => palette.primary.light,
    display: "grid",
    gridTemplateColumns: "repeat(12 ,1fr)",
    gridTemplateRows: "460px 354px 354px",
    gap: 2,

    gridTemplateAreas: `description1 description1 description1 description1 picture1 picture1 picture1 picture1 picture1 picture1 picture1 picture1
    picture2 picture2 picture2 picture2 picture2 description2 description2 description2 description2 description2 description2 description2
    picture3 picture3 picture3 description3 description3 description3 description3 description3 picture4 picture4 picture4 picture4`,
  
  },

  // header: {
  //   gridArea: "header",
  // },
  description1: {
    gridArea: "description1",
  },
  picture1: {
    gridArea: "picture1",
  },
  picture2: {
    gridArea: "picture2",
  },
  description2: {
    gridArea: "description2",
  },
  picture3: {
    gridArea: "picture3",
  },
  description3: {
    gridArea: "description3",
  },
  picture4: {
    gridArea: "picture4",
  },
  label: {
    "&:first-word": {
      color: ({ palette }) => palette.error.main,
    },
    color: ({ palette }) => palette.primary[900],
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 98,
    lineHeight: "120.5%",
    letterSpacing: "0.033em",
  },
  des: {
    fontFamily: "Outfit",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 20,
    lineHeight: "120.5%",
    letterSpacing: "0.033em",
  },
};
export default styles;
