import React from "react"

import Header from "../components/header"
import Contact from "../components/contactForm"
import Github from '../components/githubRepos'

export default function Home() {
  return (
    <React.Fragment>
      <Header></Header>
      <Contact></Contact>
      <Github></Github>
    </React.Fragment>
  )
}
