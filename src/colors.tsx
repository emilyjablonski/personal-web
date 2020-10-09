export const colors: {
  paletteBrown: string,
  paletteOrange: string,
  paletteYellow: string,
  paletteBlue: string,
  palettePink: string
} = {
  paletteBrown: `#513721`,
  paletteOrange: `#ff9e5e`,
  paletteYellow: `#fff952`,
  paletteBlue: `#9ef0ea`,
  palettePink: `#febfb6`
}

export const gradients: {
  brownOrange: string,
  orangeYellow: string
} = {
  brownOrange: `linear-gradient(to bottom right,${colors.paletteBrown},${colors.paletteOrange})`,
  orangeYellow: `linear-gradient(to bottom right,${colors.paletteOrange},${colors.paletteYellow})`
}

export default colors

// export const statusColors = {
//   active: colors.example,
//   success: colors.example,
//   warning: colors.example,
//   error: colors.example,
// }