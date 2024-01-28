import React from 'react'
import Hero from './Hero'
import About from './About'
import Contact from './Contact'
import Chapters from './Chapters'
import Sponsors from './Sponsors'
import Advisors from './Advisors'

export default function Home() {
  return (
    <div>
      <section id="hero"><Hero/></section>
      <section id="about"><About/></section>
      <section id="chapters"><Chapters/></section>
      <section id="advisors"><Advisors/></section>
      <section id='sponsors'><Sponsors/></section>
      <section id="contact"><Contact/></section>
    </div>
  )
}
