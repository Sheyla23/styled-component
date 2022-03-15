import React from 'react';
import { Button } from './styles/Button.styled';
import { Article, Flex, H2, Hero } from './styles/Main.styled';

const Main = () => {
  return (
    <main> 
      <Hero>
        <picture>
          <source media="(max-width: 500px)" srcSet="images/family-mobile.jpg" />
          <img src="images/family-desktop.jpg" alt="family" />
        </picture>
        <article>
          <h2> Humanizing your insurance.</h2>
          <p>Get your life insurance coverage easier and faster. We blend our expertise 
          and technology to help you find the plan that's right for you. Ensure you 
          and your loved ones are protected.</p>
          <Button mg='none' >view plans</Button>
        </article>
      </Hero>
      <section>
        <H2> We're different</H2>
        <Flex>
          <div>
            <img src="images/icon-snappy-process.svg" alt="process" />
            <h3>Snappy Process</h3>
            <p> Our application process can be completed in minutes, not hours. Don't get 
            stuck filling in tedious forms.</p>
          </div>
          <div>
            <img src="images/icon-affordable-prices.svg" alt="price" />
            <h3>Affordable Prices</h3>
            <p>We don't want you worrying about high monthly costs. Our prices may be low, 
            but we still offer the best coverage possible.</p>
          </div>
          <div>
            <img src="images/icon-people-first.svg" alt="people" />
            <h3>People First</h3>
            <p>Our plans aren't full of conditions and clauses to prevent payouts. We make 
            sure you're covered when you need it.</p>
          </div>
        </Flex>
      </section>
      <Article>
       <h2>Find out more about how we work</h2>
        <Button>how we work</Button>
      </Article>
    </main>
  )
}

export default Main