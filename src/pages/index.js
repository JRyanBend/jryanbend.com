import * as React from "react"

// styles
const pageStyles = {
  color: "#345",
  padding: "0px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  height: "100vh",
  backgroundColor: "#232129"
}
const headingStyles = {
  marginTop: 0,
  marginLeft: 16,
  fontSize: "2.5rem",
  verticalAlign: "middle",

  position: "relative",
  top: "45%"
}
const headingAccentStyles = {
  color: "#FFF",
  fontSize: "1.8rem",
  textShadow: "#03f 0px 0 10px",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Welcome to the thunderdome</title>
      <h1 style={headingStyles}>
        Hi, my name is Ryan
        <br />
        <span style={headingAccentStyles}>I'm a Product Solution Evangelist who specializes in web development</span>
      </h1>
    </main>
  )
}

export default IndexPage
