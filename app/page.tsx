import { Metadata } from "next"
import Image from "next/image"

import { Button } from "components/Button/Button"
import Heading from "components/Heading/Heading"
import LoadPanel from "components/LoadPanel/LoadPanel"
import SamplePanel from "components/SamplePanel/SamplePanel"
import { Tooltip } from "components/Tooltip/Tooltip"
export const metadata: Metadata = {
  title: "Amy Freelander Portfolio",
  description: "Amy Freelander's Portfolio Website showcasing product work and personal profile.",
  authors: { name: "Amy Freelander", url: "alf.tchldr.com" },
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    description: "Amy Freelander's Portfolio Website showcasing product work and personal profile.",
    type: "website",
    url: "https://alf.tchldr.com",
    images: [
      {
        width: 520,
        height: 270,
        url: "https://alf.tchldr.com/imgs/preview.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <div className="text-xl">
        <section className="bg-gradient-to-br from-christalle-950 to-black text-white">
          <div className="flex flex-row">
            <div className="basis-2/5">
              <div className="flex justify-end py-8">
                <Tooltip explainer={"To contact me, send me a message on LinkedIn!"}>
                  <Image
                    priority
                    src={`/imgs/rainbow_self.png`}
                    alt="Rainbow-coloured self drawn head of Amy with long hair from a slight side profile."
                    width="200"
                    height="200"
                    className="animate-wiggle-more place-self-center animate-ease-in hover:animate-wiggle-more hover:animate-thrice hover:animate-ease-linear"
                  />
                </Tooltip>
              </div>
            </div>
            <div className="justify-left basis-3/5 px-8 py-16">
              <div className="place-self-left mx-auto">
                <h1 className="mb-4 max-w-2xl animate-fade-up font-callout text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl xl:text-6xl">
                  Hi. I&apos;m Amy.
                </h1>
                <p className="animate-fade-up font-callout2 text-2xl text-christalle-600">
                  And this is my portfolio website.
                </p>
                <div className="mt-8 inline-grid grid-cols-2 gap-0">
                  <a target="_blank" href="https://www.linkedin.com/in/freelanderamy" rel="noopener noreferrer">
                    <Image
                      src={`/imgs/linkedin_icon.png`}
                      alt="LinkedIn icon."
                      width="25"
                      height="25"
                      className="animate-fade-up place-self-center rounded hover:border-3 hover:border-white"
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1J-kcMwq81sOc-P5Og9GoDbEC4ScbktwW/view?usp=drive_link"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={`/imgs/cv_icon.png`}
                      alt="CV icon."
                      width="25"
                      height="25"
                      className="ml-4 animate-fade-up place-self-center rounded hover:border-3 hover:border-white"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-br from-mosque-900 to-black">
          <LoadPanel effect="fade">
            <div className="flex flex-row">
              <div className="basis-1/12 md:basis-2/12"></div>
              <div className="basis-10/12 place-self-center p-12 pb-12 text-white md:basis-8/12 md:px-24 md:pb-12">
                <p className="text-2xl leading-relaxed">
                  I&apos;m an <span className="text-mosque-400">MBA-wielding</span>, recovering{" "}
                  <span className="text-mosque-400">software engineer turned</span> passionate, creative and inclusive{" "}
                  <span className="text-mosque-400">product leader</span>. I&apos;ve been a{" "}
                  <span className="text-mosque-400">dedicated Product Manager for 6 years</span> but I&apos;ve been
                  working <span className="text-mosque-400">in tech for over 15 years</span>. I suit collaborative,
                  innovative, ambitious and dynamic environments best, so{" "}
                  <span className="text-mosque-400">startups and scaleups</span>, although I&apos;ve done some great
                  stuff in some of the largest tech firms out there (Google & Visa).
                </p>
                <p className="mt-4 text-2xl leading-relaxed">
                  Please use this website to get to know me and my work in Product a little better with the help of some
                  rainbow animals.
                </p>
              </div>
            </div>
          </LoadPanel>
        </section>
        <section>
          <div className="flex flex-row bg-black p-4 text-white">
            <div className="basis-2/12"></div>
            <div className="basis-8/12 pb-4">
              <div className="py-2">
                <span id="contents"></span>
              </div>
              <div className="grid gap-2 md:grid-cols-3 lg:grid-cols-6">
                <div>
                  <Button href={"#strengths"} intent="nav" size="md" odd className="hover:text-anzac-500">
                    Strengths
                  </Button>
                </div>
                <div>
                  <Button href={"#areas"} intent="nav" size="md" className="hover:text-anzac-700">
                    Areas Worked On
                  </Button>
                </div>
                <div>
                  <Button href={"#interests"} intent="nav" size="md" odd className="hover:text-mosque-500">
                    Interests & Passions
                  </Button>
                </div>
                <div>
                  <Button href={"#motivations"} intent="nav" size="md" className="hover:text-mosque-700">
                    Motivations
                  </Button>
                </div>
                <div>
                  <Button href={"#achievements"} intent="nav" size="md" odd className="hover:text-christalle-800">
                    Achievements
                  </Button>
                </div>
                <div>
                  <Button href={"#examples"} intent="nav" size="md" className="hover:text-christalle-400">
                    Example Products
                  </Button>
                </div>
                <div>
                  <Button href={"#samples"} intent="nav" size="md" odd className="hover:text-bright-turquoise-900">
                    Work Samples
                  </Button>
                </div>
                <div>
                  <Button href={"#personality"} intent="nav" size="md" className="hover:text-cerise-500">
                    Personality
                  </Button>
                </div>
                <div>
                  <Button href={"#goodToKnow"} intent="nav" size="md" odd className="hover:text-cerise-700">
                    Good To Know
                  </Button>
                </div>
                <div>
                  <Button href={"#qualifications"} intent="nav" size="md" className="hover:text-anzac-500">
                    Academic Qualifications
                  </Button>
                </div>
                <div>
                  <Button href={"#certifications"} intent="nav" size="md" odd className="hover:text-christalle-400">
                    Certifications & Training
                  </Button>
                </div>
                <div>
                  <Button href={"#qa"} intent="nav" size="md" className="hover:text-bright-turquoise-500">
                    Q&A
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-br from-anzac-400 to-black">
          <LoadPanel>
            <div className="md:flex md:flex-row">
              <div className="md:basis-1/12"></div>
              <div className="place-self-top p-12 text-white md:basis-3/12">
                <Heading className="pt-4 font-callout text-3xl font-semibold" from="anzac-200" to="anzac-300">
                  <span id="strengths">My Strengths</span>
                </Heading>
                <ul className="list-disc pl-6 pt-2">
                  <li>Very fast learner</li>
                  <li>Storytelling and presentations</li>
                  <li>Inclusivity and caring about people</li>
                  <li>Critical thinking and decision making</li>
                  <li>Creativity, innovation, and workshops</li>
                  <li>Curiosity and openness to try new things</li>
                  <li>Efficiency, organisation, and process creation</li>
                  <li>Data fluency and new information processing</li>
                  <li>Enjoys change and working through ambiguity</li>
                </ul>
              </div>
              <div className="place-items-center content-center justify-center pl-6 md:basis-3/12">
                {" "}
                <Tooltip explainer={"We share about 98% of our DNA with gorillas. We share even more with each other."}>
                  <Image
                    src={`/imgs/Rainbow_Gorilla.png`}
                    alt="Rainbow-coloured self drawn gorilla face."
                    width="256"
                    height="274"
                    className="place-self-center self-center hover:animate-wiggle-more hover:animate-thrice hover:animate-ease-linear"
                  />
                </Tooltip>
              </div>
              <div className="place-self-top p-12 text-white md:basis-3/12">
                <Heading className="font-callout text-3xl font-semibold" from="anzac-100" to="anzac-500">
                  <span id="areas">
                    Areas I&apos;ve Worked In <br />
                    (All B2B)
                  </span>
                </Heading>
                <ul className="list-disc pl-6 pt-2">
                  <li>Software Consultancies</li>
                  <li>APIs and Integrations</li>
                  <li>Payments/FinTech</li>
                  <li>BigTech/AdTech</li>
                  <li>Internal Tooling</li>
                  <li>Ecomm Ops</li>
                  <li>Startups</li>
                  <li>Scaleups</li>
                  <li>CCaaS</li>
                  <li>EdTech</li>
                  <li>HRTech</li>
                  <li>SaaS</li>
                </ul>
              </div>
            </div>
            <div className="md:flex md:flex-row">
              <div className="md:basis-1/12"></div>
              <div className="md:basis-8/12">
                <div className="place-self-top px-12 pb-14 text-white">
                  <Heading className="pt-4 font-callout text-2xl font-semibold" from="anzac-100" to="anzac-500">
                    Things I&apos;m learning and working on improving (always looking to learn/improve):
                  </Heading>
                  <p>
                    Coaching skills, conflict management techniques, pacing myself to adjust to change at a rate
                    suitable for the environment, working out how to balance authenticity with professionalism,
                    Portuguese, playwriting, crotcheting, acting, improv, and AI.
                  </p>
                </div>
              </div>
            </div>
          </LoadPanel>
          <div className="relative pt-4">
            <div className="absolute -top-[4px] left-0 right-0 grid place-items-center">
              <Button href="#contents" intent="back">
                ^ Back To Top
              </Button>
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-br from-bright-turquoise-900 to-black">
          <LoadPanel>
            <div className="md:flex md:flex-row">
              <div className="md:basis-1/12"></div>
              <div className="place-self-top p-12 text-white md:basis-5/12">
                <Heading
                  className="pt-4 font-callout text-3xl font-semibold"
                  from="bright-turquoise-200"
                  to="bright-turquoise-500"
                >
                  <span id="interests">My Professional Interests & Passions</span>
                </Heading>
                <ul className="list-disc pl-6 pt-2">
                  <li>Scripting, machine learning, and APIs</li>
                  <li>User, customer, and employee experience</li>
                  <li>UI/Web design and front-end development</li>
                  <li>DEIB (Diversity, Equity, Inclusion & Belonging)</li>
                  <li>Continuous improvement and experimentation</li>
                  <li>Lean Agile ways of working (bit of a Toyota geek)</li>
                  <li>Strategy and working smart to discover and iterate on ideas</li>
                  <li>Ethical, deliberate, and mindful applications of tech (tech for good)</li>
                  <li>Cognitive biases, behavioural sciences, and organisational psychology</li>
                  <li>Automation and using tech to improve how humans spend their time and energy</li>
                  <li>
                    Bringing theatre techniques to the tech profession, especially for better marketing, collaboration,
                    and innovation
                  </li>
                </ul>
              </div>
              <div className="place-self-top p-12 text-white md:basis-5/12">
                {" "}
                <Heading
                  className="pt-4 font-callout text-3xl font-semibold"
                  from="bright-turquoise-200"
                  to="bright-turquoise-500"
                >
                  <span id="motivations">My Motivations</span>
                </Heading>
                <ul className="list-disc pl-6 pt-2">
                  <li>Increasing social mobility and opportunities for marginalised groups</li>
                  <li>Making people laugh, providing clarity, and helping ease anxiety</li>
                  <li>Problem solving and fixing things that are broken</li>
                  <li>Trying new techniques and developing skills</li>
                  <li>Learning new perspectives/worlds/contexts</li>
                  <li>Being creative, having fun, and making things</li>
                  <li>Leaving things better than I found them</li>
                  <li>Honing my craft and mastering my skills</li>
                  <li>Meaningful connections with humans</li>
                  <li>Helping people grow and be fulfilled</li>
                  <li>Making tech a positive force</li>
                </ul>
              </div>
            </div>
            <div className="pl-6 md:flex md:flex-row md:pl-0">
              <div className="md:basis-2/12"></div>
              <div className="place-self-center p-6 text-white md:basis-7/12 md:p-0 md:pb-12">
                <Heading
                  className="pt-4 font-callout text-2xl font-semibold"
                  from="bright-turquoise-200"
                  to="bright-turquoise-500"
                >
                  So my ideal working environment would probably be:
                </Heading>
                <p>
                  A place where people want to be on a journey, united by a shared vision and goals. Collaborative,
                  trusting, and creative people. Managers and colleagues who care about people as well as profits,
                  certainly more than status or personal wealth alone. Modern and improving tech/processes. So probably
                  a startup or scaleup?
                </p>
              </div>
              <div className="basis-2/5 p-6">
                <Tooltip
                  explainer={
                    "Giraffes have very large (2 foot long), heavy hearts. They definitely put their heart into things. Probably why I like them."
                  }
                >
                  <Image
                    src={`/imgs/Colour_Giraffe.png`}
                    alt="Rainbow-coloured self drawn giraffe head looking curious."
                    width="200"
                    height="200"
                    className="place-self-center hover:animate-wiggle-more hover:animate-thrice hover:animate-ease-linear"
                  />
                </Tooltip>
              </div>
            </div>
          </LoadPanel>
          <div className="relative pt-4">
            <div className="absolute -top-[4px] left-0 right-0 grid place-items-center">
              <Button href="#contents" intent="back">
                ^ Back To Top
              </Button>
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-br from-christalle-950 to-black text-white">
          <LoadPanel>
            <div className="md:flex md:flex-row">
              <div className="md:basis-1/5"></div>
              <div className="place-self-center p-12 text-white md:basis-3/5 md:p-0">
                <div className="justify-items-end">
                  <Tooltip
                    explainer={
                      "Capuchins are one of the first primates to be observed using tools in the wild. What's that joke about a monkey and a typewriter?"
                    }
                  >
                    <Image
                      src={`/imgs/Colour_Monkey_Baby.png`}
                      alt="Rainbow-coloured self drawn baby monkey looking shocked."
                      width="200"
                      height="200"
                      className="right-0 place-self-center hover:animate-wiggle-more hover:animate-thrice hover:animate-ease-linear"
                    />
                  </Tooltip>
                </div>

                <Heading className="pt-4 font-callout text-3xl font-semibold" from="christalle-100" to="christalle-400">
                  <span id="achievements">My Key Achievements</span>
                </Heading>

                <div className="double-list gap-12 pb-6 md:columns-2">
                  <LoadPanel>
                    <ul className="break-inside-avoid-column pt-2">
                      <li>
                        Created a scientifically complex 0-1 product, including recruiting the product team (3
                        engineers, 1 data scientist, 1 product marketer, 3 psychometrician contractors), and launched
                        within 6 months to 80% user approval
                      </li>
                      <li>Created an MVP, pitch deck, and business plan for a startup within 1 month by myself</li>
                      <li>
                        Managed response to Brexit in first months at a company with technical complexities, a small
                        team, and last minute changes
                      </li>
                      <li>
                        Created multiple internal tools in various companies, saving thousands of hours in manual
                        operations and generating new business lines
                      </li>
                      <li>
                        Created an integration product that could be resold as an addon to a main product, which
                        generated hundreds of thousands of dollars a year in revenue and put the company on the radar
                        for its eventual acquisition by the product that I integrated our product into
                      </li>
                      <li>
                        Reduced product portfolio at Google by nearly 80% through end of life program, clearing the path
                        for efficiency and better tooling
                      </li>
                      <li>
                        Launched a multi-team, technically complex program at Google with the aim of saving $8bn/year
                        within my first 6 months
                      </li>
                    </ul>
                  </LoadPanel>
                  <LoadPanel>
                    <ul className="list-disc break-inside-avoid-column pt-2">
                      <li>
                        Took a battlefield promotion to manage a Product team with the aim of ensuring all colleagues
                        stay during the transition during a great period of change and actually grew the team within
                        months
                      </li>
                      <li>
                        Hired by Google as a top 1% candidate (only 1% of people who apply to Google get a 100% positive
                        indication to be hired by all interviewers)
                      </li>
                      <li>
                        Completed my MBA at Warwick Business School through COVID period whilst working (also accepted
                        to Imperial Business School)
                      </li>
                      <li>
                        Used machine learning techniques (which I taught myself) to perform an analysis on data I
                        retrieved online around gender pay gap reporting to create a unique dissertation using
                        techniques never seen before applied to business school research
                      </li>
                      <li>
                        Successfully spoke at Women of Silicon Roundabout conference two years in a row, once in front
                        of thousands of people
                      </li>
                      <li>
                        Taught myself numerous programming languages and frameworks across decades including TypeScript,
                        Python, C#, JavaScript, HTML, CSS, Bash Scripting, Powershell and Perl
                      </li>
                      <li>
                        Numerous academic awards for attainment. Top of my undergraduate class and top of my faculty in
                        my first year. Received firsts in every Computing class.
                      </li>
                    </ul>
                  </LoadPanel>
                </div>
              </div>
            </div>
          </LoadPanel>
          <div className="relative pt-4">
            <div className="absolute -top-[4px] left-0 right-0 grid place-items-center">
              <Button href="#contents" intent="back">
                ^ Back To Top
              </Button>
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-br from-christalle-400 to-black">
          <LoadPanel>
            <div className="md:flex md:flex-row">
              <div className="md:basis-1/5"></div>
              <div className="place-self-center p-12 text-white md:basis-3/5">
                <div>
                  <Tooltip
                    explainer={
                      "Sheep have large, rectangular pupils that allow them to see almost 360 degrees, including behind themselves without turning their heads. I have to turn my head unless I've got a mirror."
                    }
                  >
                    <Image
                      src={`/imgs/Colour_Sheep.png`}
                      alt="Rainbow-coloured self drawn sheep head."
                      width="200"
                      height="200"
                      className="place-self-center hover:animate-wiggle-more hover:animate-thrice hover:animate-ease-linear"
                    />
                  </Tooltip>
                </div>
                <Heading className="pt-4 font-callout text-3xl font-semibold" from="christalle-800" to="christalle-950">
                  <span id="examples">
                    Example Products I&apos;ve Worked On As A Dedicated PM <br />
                    <span className="text-xl">
                      (I&apos;ve worked on a lot more products as an engineer, or consultant)
                    </span>
                  </span>
                </Heading>
                <LoadPanel>
                  <div className="mt-4 rounded bg-white/25 px-4 py-2 shadow-md">
                    <h3>
                      A semi-legacy platform with APIs for a lot of data ingestion from hardware sources. The backbone
                      of a monitoring service being used in high-stake environments.{" "}
                      <span className="block text-black">
                        I helped navigate tech debt, strategic priorities and incident management.
                      </span>
                    </h3>
                  </div>

                  <div className="mt-4 rounded bg-white/25 px-4 py-2 shadow-md">
                    <h3>
                      A 0-1 online psychometric tool to help people navigate the roles in the cyber security industry
                      and work out how their personality and traits would be suited for cyber security with a strong UX,
                      data presentation, scientific rigour, and API integration.{" "}
                      <span className="block text-black">I built the product and product team from scratch.</span>
                    </h3>
                  </div>

                  <div className="mt-4 rounded bg-white/25 px-4 py-2 shadow-md">
                    <h3>
                      A decisioning system for multiple territories/languages with lots of data integrations for an
                      online business credit card application and a third party integration with a tool to allow credit
                      analysts to iterate on and manually ratify their decisions.{" "}
                      <span className="block text-black">
                        I helped iterate on an existing solution to make incremental improvements, to finalise a large
                        migration project to a third party system and to begin to prepare for territory changes.
                      </span>
                    </h3>
                  </div>

                  <div className="mt-4 rounded bg-white/25 px-4 py-2 shadow-md">
                    <h3>
                      A onboarding flow for multiple territories/languages for an online business credit card
                      application that allowed for experimentation and telemetry to increase acquisition growth.{" "}
                      <span className="block text-black">
                        I ran a design sprint and iterated to devise a new system to allow for more growth
                        experimentation (A/B testing) without engineering input.
                      </span>
                    </h3>
                  </div>

                  <div className="mt-4 rounded bg-white/25 px-4 py-2 shadow-md">
                    <h3>
                      Reliable integrations into couriers for ecommerce operations to be able to create, facilitate and
                      manage shipments of goods ordered to customers internationally.{" "}
                      <span className="block text-black">
                        I managed the company&apos;s response post-Brexit changes and devised a longer-term strategy to
                        enable territory and market growth.
                      </span>
                    </h3>
                  </div>

                  <div className="mt-4 rounded bg-white/25 px-4 py-2 shadow-md">
                    <h3>
                      Easy to use integrations into online marketplaces for ecommerce operations so that sellers did not
                      oversell and good efficiently manage orders and inventory.{" "}
                      <span className="block text-black">
                        I prioritised and helped manage partners for small third-party compliance changes and devised a
                        longer-term partner and platform strategy to enable market growth.
                      </span>
                    </h3>
                  </div>

                  <div className="mt-4 rounded bg-white/25 px-4 py-2 shadow-md">
                    <h3>
                      Internal tools for use by customer service or support teams within BigTech. Tools often created by
                      an individual and needed to be standardised to meet compliance, security and robustness standards.
                      I helped reduce the team&apos;s portfolio by almost 80%, ensuring that time spent was dedicated to
                      the most impactful tools and initiatives.{" "}
                      <span className="block text-black">
                        I launched a large scale data workflow tool project to be able to access various complex data
                        sources and create automated actions within different internal systems saving $8bn/year. I
                        assessed new tooling ideas for inclusion within our portfolio.
                      </span>
                    </h3>
                  </div>

                  <div className="mt-4 rounded bg-white/25 px-4 py-2 shadow-md">
                    <h3>
                      Bug management tracking and communications system for use throughout BigTech to help ensure
                      information on customer-facing issues were resolved in a timely and transparent manner.{" "}
                      <span className="block text-black">
                        I created an internal marketing campaign to start to bring new users to the system and worked to
                        disambiguate ongoing security and permissions-based changes following a company restructure.
                      </span>
                    </h3>
                  </div>

                  <div className="mt-4 rounded bg-white/25 px-4 py-2 shadow-md">
                    <h3>
                      Reliable and speedy integrations into workforce management solutions from a legacy contact centre
                      management platform through scheduled data ingestion files and SQL stored procedures.{" "}
                      <span className="block text-black">
                        I took an existing collection of scrappy scripts and turned them into an application that could
                        be sold to customers. I devised and coded this product. I worked closely with pilot customers to
                        install, troubleshoot and monitor it in production.
                      </span>
                    </h3>
                  </div>
                </LoadPanel>
              </div>
            </div>
          </LoadPanel>
          <div className="relative pt-4">
            <div className="absolute -top-[4px] left-0 right-0 grid place-items-center">
              <Button href="#contents" intent="back">
                ^ Back To Top
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-mosque-950 to-black text-white">
          <LoadPanel>
            <div className="md:flex md:flex-row">
              <div className="md:basis-1/5"></div>
              <div className="place-self-center p-8 text-white md:basis-2/5">
                <Heading className="pt-4 font-callout text-3xl font-semibold" from="mosque-400" to="mosque-700">
                  <span id="samples">Some Samples of My Work </span>
                </Heading>
                <p className="font-extralight">
                  All samples are completely my own work. They should no longer be particularly commercially
                  consequential to the companies I worked for. Where I think they might be, I have anonymised the
                  company.
                </p>

                <h4 className="pt-12 text-2xl font-semibold text-mosque-200">Presentations/tasks from interviews</h4>
                <LoadPanel faster>
                  <SamplePanel
                    beforeColon={
                      "How I would move a Product team through a maturity matrix shortly after starting at a company"
                    }
                    link={"https://drive.google.com/file/d/1Z335IeGcTEa12kbhTxBStylDwPq-fgtV/view?usp=sharing"}
                  ></SamplePanel>
                  <SamplePanel
                    beforeColon={"How I manage products in a multi-business-stakeholder environments"}
                    link={"https://drive.google.com/file/d/1sOQwCVCn6iUW11kz2dCsZ6xkw64q_FEs/view?usp=sharing"}
                  ></SamplePanel>
                  <SamplePanel
                    beforeColon={"Ideating and choosing a solution to a customer reported product criticism"}
                    link={"https://drive.google.com/file/d/1lNPOxUlqT-fBTP3FQQDA9R8ubNM-7eCG/view?usp=sharing"}
                  ></SamplePanel>

                  <SamplePanel
                    beforeColon={"My approach to roadmapping features at a fintech startup"}
                    link={"https://drive.google.com/file/d/1jgSeheRzTOZ71nd_K8f07EQ167mq8tY_/view?usp=sharing"}
                  ></SamplePanel>
                  <SamplePanel
                    beforeColon={"Initial strategic take for an online tool to help onboard engineers"}
                    link={"https://drive.google.com/file/d/1ZXhQe8eWbsN8tHKmW7NSPZir0xItFJI4/view?usp=sharing"}
                  ></SamplePanel>
                  <SamplePanel
                    beforeColon={"An idea to increase visitors to a zoo using tech"}
                    link={"https://drive.google.com/file/d/1SEXIajcERWn3gHzKOUAh0t_POnyTf_jQ/view?usp=sharing"}
                  ></SamplePanel>
                  <SamplePanel
                    beforeColon={"How To Increase Netflix subscribers over 50"}
                    link={"https://drive.google.com/file/d/1dTarolyphx7RJ0idcbKOPvqb5mTeSHui/view?usp=sharing"}
                  ></SamplePanel>
                  <SamplePanel
                    beforeColon={"Investigating an AOV drop on a B2C product ecommerce website"}
                    link={"https://drive.google.com/file/d/1ZnaTJ_MYKC4rioc7cnzpXc4Tys761f-1/view?usp=sharing"}
                  ></SamplePanel>
                  <SamplePanel
                    beforeColon={"Improving a B2C software ecommerce website in 12 weeks"}
                    link={"https://drive.google.com/file/d/1vHgIIPQhQFfyasdW6bbUmpPwyVEjUuhU/view?usp=sharing"}
                  ></SamplePanel>
                  <SamplePanel
                    beforeColon={"An integration product I built start to finish"}
                    link={"https://drive.google.com/file/d/1rZmSmQwyW_am0DCnJ2lAol3x-Bbb-lvg/view?usp=sharing"}
                  ></SamplePanel>
                </LoadPanel>
                <h4 className="pt-12 text-2xl font-semibold text-mosque-200">
                  Actual artifacts from my recent Product career
                </h4>
                <LoadPanel faster>
                  <SamplePanel
                    beforeColon={"Launching an innovation project (series of workshops)"}
                    link={"https://drive.google.com/file/d/1B_GItm0B_X8CxsEwIAoERESjM9pqD-XW/view?usp=sharing"}
                  ></SamplePanel>
                  <SamplePanel
                    beforeColon={"Pirate prioritisation game following innovation workshops I invented"}
                    link={"https://drive.google.com/file/d/1IlkUuxFb_PaCRIgPZzG9XsM6f3gA3FLI/view?usp=sharing"}
                  ></SamplePanel>
                  <SamplePanel
                    beforeColon={"Qualitative Interview Script"}
                    link={"https://drive.google.com/file/d/1g_Mcxviagr8M9Nc85iLDOCtvkbQwM55r/view?usp=sharing"}
                  ></SamplePanel>
                  <SamplePanel
                    beforeColon={
                      "Proposal to create customer tiering to help prioritisation and other problems (created in 2 hours after 7 weeks in company)"
                    }
                    link={"https://drive.google.com/file/d/1Mfe59ZJQSitAKheFa0XzJwaBRjRHHGQN/view?usp=sharing"}
                  ></SamplePanel>
                  <SamplePanel
                    beforeColon={"Product Market Fit narrative example"}
                    link={"/files/Amy Freelander Product-Market Fit Narrative.html"}
                  ></SamplePanel>
                  <SamplePanel
                    beforeColon={"Pricing workshop withe executives to get direction setup"}
                    link={"https://miro.com/app/board/uXjVLdOzd0w=/?share_link_id=955841538693"}
                  ></SamplePanel>

                  <SamplePanel
                    beforeColon={"Pre-mortem before a big launch"}
                    link={"https://miro.com/app/board/uXjVLdO_KKc=/?share_link_id=716484686149"}
                  ></SamplePanel>
                  <SamplePanel
                    beforeColon={
                      "Closed public webinar and research based explanation to engage cyber security professionals (customers and field experts) in research"
                    }
                    link={"https://drive.google.com/file/d/13HpPnHwh4reFuwXi-XaS6Vlqi9QT9UBj/view?usp=sharing"}
                  ></SamplePanel>
                  <SamplePanel
                    beforeColon={"Example high level score card (measuring product success)"}
                    link={"/files/Amy Freelander Portfolio High-Level Score Card.html"}
                  ></SamplePanel>
                  <SamplePanel
                    beforeColon={"Example jobs to be done (product hypotheses)"}
                    link={"/files/Amy Freelander Portfolio Jobs To Be Done.html "}
                  ></SamplePanel>
                  <SamplePanel
                    beforeColon={"Example new Product team introductory guide (Product team/charter explainer)"}
                    link={"https://drive.google.com/file/d/12D8xd8eUL4UOvdMJQTPpL85wjyiXFHuR/view?usp=sharing"}
                  ></SamplePanel>
                  <SamplePanel
                    beforeColon={"Incident Management workshop"}
                    link={"https://drive.google.com/file/d/1kv9a-LsmcepcGwdP2L6F4yNCUONbCDcf/view?usp=sharing"}
                  ></SamplePanel>
                  <SamplePanel
                    beforeColon={"Cats In Hats Retrospective"}
                    link={"https://miro.com/app/board/uXjVLdOqjy4=/?share_link_id=253837241456"}
                  ></SamplePanel>
                  <SamplePanel
                    beforeColon={
                      "My startup's pitch deck for an edTech platform for core human skills for engineering managers"
                    }
                    link={"https://drive.google.com/file/d/1VFHWucCF5Fl7lfbOVN1K9hUOTvoXpOUs/view?usp=sharing"}
                  ></SamplePanel>
                </LoadPanel>
              </div>
              <div className="p-8 md:basis-1/5">
                <Tooltip
                  explainer={
                    "Deer are considered intelligent animals because of their keen sense of smell, good vision, and acute hearing. Maybe that's why they generally stay away from humans who don't have food."
                  }
                >
                  <Image
                    src={`/imgs/Colour_Prancing_Deer.png`}
                    alt="Rainbow-coloured self drawn deer looking to camera, one leg raised."
                    width="200"
                    height="200"
                    className="place-self-center hover:animate-wiggle-more hover:animate-thrice hover:animate-ease-linear"
                  />
                </Tooltip>
                <h4 className="pt-12 text-2xl font-semibold text-mosque-200">Academic writing</h4>
                <LoadPanel faster>
                  <p className="mb-4 font-extralight">
                    Case studies were mainly from my career. Names were anonymised. Some details were changed to
                    anonymise circumstances without affecting analysis. Analysis was for academic/post-work-experience
                    processing.
                  </p>
                  <SamplePanel
                    beforeColon={"MBA Organisational Behaviour case study"}
                    afterColon={"Leveraging Diversity In An Internal Product Team in Google"}
                    link={"https://drive.google.com/file/d/1Jabw_UJECUfQdFefVa8uL_3aEVngZTOO/view?usp=sharing"}
                  ></SamplePanel>
                  <SamplePanel
                    beforeColon={"MBA HR case study"}
                    afterColon={"Google's HR Strategy"}
                    link={"https://drive.google.com/file/d/1nUmmH99PBsxYeV8MXClrtyuR8YLsvd7x/view?usp=sharing"}
                  ></SamplePanel>
                  <SamplePanel
                    beforeColon={"MBA Change Management case study"}
                    afterColon={"Managing change in a French software company"}
                    link={"https://drive.google.com/file/d/1NYzkRUsAnkPgz6odZ5t89chQkdKc2sbr/view?usp=sharing"}
                  ></SamplePanel>
                  <SamplePanel
                    beforeColon={"MBA Behavioural Sciences case study"}
                    afterColon={"The Behavioural Sciences Behind Scrum"}
                    link={"https://drive.google.com/file/d/1KiErdGMSop0OTAWj8-CwtORNqpnetv8a/view?usp=sharing"}
                  ></SamplePanel>
                  <SamplePanel
                    beforeColon={"MBA Strategy case study"}
                    afterColon={"What to do with a teenage software company?"}
                    link={"https://drive.google.com/file/d/1lCso14OdmYnAqEhtRn_FzZWh9ATduMPG/view?usp=sharing"}
                  ></SamplePanel>
                  <SamplePanel
                    beforeColon={"MBA Innovation case study with Cortex"}
                    afterColon={"Innovation and Creativity in a Software Company Field Study 2019 Presentation"}
                    link={"https://drive.google.com/file/d/1O-GdRbraw0I_YTqT8VCXCn2gnmU7x31f/view?usp=sharing"}
                  ></SamplePanel>
                  <SamplePanel
                    beforeColon={"MBA Innovation case study with Cortex"}
                    afterColon={"Innovation and Creativity in a Software Company  Field Study Analysis"}
                    link={"https://drive.google.com/file/d/1Sdce7lyiVwkeR_u4slvluutqcHnH-9D0/view?usp=sharing"}
                  ></SamplePanel>
                  <SamplePanel
                    beforeColon={"MBA final dissertation"}
                    afterColon={
                      "Do UK employees think more highly of employers if they report smaller gender pay gaps? An Analysis Using Machine Learning."
                    }
                    link={"https://drive.google.com/file/d/1YMjiJRxu0QjrgXDUgwaaLjIM35SzO4xg/view?usp=sharing"}
                  ></SamplePanel>
                </LoadPanel>
              </div>
            </div>
          </LoadPanel>
          <div className="relative pt-4">
            <div className="absolute -top-[4px] left-0 right-0 grid place-items-center">
              <Button href="#contents" intent="back">
                ^ Back To Top
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-cerise-900 to-black">
          <LoadPanel>
            <div className="md:flex md:flex-row">
              <div className="md:basis-1/6"></div>
              <div className="place-self-center p-12 text-white md:basis-2/6">
                <div className="md:basis-1/6">
                  <Tooltip
                    explainer={
                      "Every zebra has unique black and white stripes, similar to fingerprints in their uniqueness. We're all unique, but zebras really give it to us in black and white."
                    }
                  >
                    <Image
                      src={`/imgs/Colour_Zebra.png`}
                      alt="Rainbow-coloured self drawn zebra head."
                      width="200"
                      height="200"
                      className="place-self-center hover:animate-wiggle-more hover:animate-thrice hover:animate-ease-linear"
                    />
                  </Tooltip>
                </div>

                <Heading className="pt-4 font-callout text-3xl font-semibold" from="cerise-200" to="cerise-400">
                  <span id="personality">My Personality Profile</span>
                </Heading>
                <h4 className="mt-4 text-2xl text-cerise-200">Psychometrically:</h4>
                <LoadPanel faster>
                  <ul className="list-disc pt-2">
                    <li>MBTI: ENTJ-A &quot;Executive&quot;</li>
                    <li>Quintax: elsT-V Logical with Theoretical Strategist</li>
                    <li>True-Colors: Blue-Green</li>
                    <li>StrengthsFinder: Responsibility, Relator, Intellection, Learner & Strategic</li>
                    <li>
                      OCEAN/Big 5: Openness 98%; Conscientiousness 71%; Extraversion 90%; Agreeableness 67%; Neuroticism
                      77%
                    </li>
                    <li>IQ approx 137 as an adult (Wechsler Adult Intelligence Scale)</li>
                  </ul>
                  <h4 className="pt-12 text-2xl text-cerise-200">Practically:</h4>
                  <ul className="list-disc pt-2">
                    <li>I&apos;m extroverted, enthusiastic, communicative and honest, sometimes to my detriment</li>
                    <li>I like to lead, grow and be strategic in my activities</li>
                    <li>
                      I take my responsibilities seriously and am conscientious but I am prone to emotional
                      irrationalities (like most people!)
                    </li>
                    <li>
                      I care about people and am always keen to understand psychology and the why behind what people do
                    </li>
                    <li>
                      I&apos;m very liberal and open to new experiences and ideas, although it means that I need novelty
                    </li>
                    <li>I have a growth mindset but I still have high standards</li>
                    <li>
                      I intellectualise things a lot and I&apos;m often driven by independent thinking,
                      cognitive/logical reasoning and mental models
                    </li>
                    <li>
                      I&apos;m enthusiastic, optimistic, and generally seek harmony however I&apos;m not afraid to speak
                      my mind
                    </li>
                  </ul>
                </LoadPanel>
              </div>
              <div className="place-self-center p-12 text-white md:basis-2/6">
                <Heading className="font-callout text-3xl font-semibold md:pt-4" from="cerise-200" to="cerise-400">
                  <span id="goodToKnow">Good To Know</span>
                </Heading>
                <LoadPanel faster>
                  <ul className="list-disc pt-2">
                    <li>
                      I&apos;m a late-diagnosed (2024) autistic person. This has deep implications far too numerous to
                      publicly write here. However, I generally fit a lot of{" "}
                      <a
                        href="https://the-art-of-autism.com/females-and-aspergers-a-checklist/"
                        className="underline hover:text-gray-200"
                        target="_blank"
                        rel="noreferrer"
                      >
                        typical traits for the internalised AFAB autistic profile
                      </a>
                      .
                    </li>
                    <li>
                      I am non-binary. My pronouns are they/them and she/her. Why? Because my gender is non-binary but I
                      have a very female body/sex.
                    </li>
                    <li>
                      I am queer (LGBTQIA+). I am{" "}
                      <a
                        href="https://neuroqueer.com/neuroqueer-an-introduction/neuroqueer"
                        className="underline hover:text-gray-200"
                        target="_blank"
                        rel="noreferrer"
                      >
                        neuroqueer
                      </a>
                      .
                    </li>
                    <li>
                      I&apos;m a near lifelong vegetarian and I do not drink alcohol. I do not want to work in an
                      environment where alcohol is present or plays a part in the culture (beer on tap is not a perk for
                      me).
                    </li>{" "}
                    <li>
                      I grew up in a low socio-economic home, with a chronically-ill parent. My father died when I was
                      16. I am the first generation to go to university. Despite my current higher socio-economic
                      status, I am quintessentially working class in a lot of my attitudes.
                    </li>
                    <li>
                      I am genetically and partially culturally Ashkenazi Jewish. This has driven some of my attitudes
                      to the world and I carry with me definite generational, hereditary traumas from the 20th century.
                    </li>
                    <li>
                      Working in tech with my identity and in my generation has not been easy. &nbsp;
                      <a
                        href="http://accenture.com/techculturereset"
                        className="underline hover:text-gray-200"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Please see stats on how 50% of females leave tech before 35
                      </a>
                      .
                    </li>
                    <li>
                      I&apos;ve been coding since I was 13. I&apos;m not in tech for money, status, or because I
                      didn&apos;t know what else to do. It&apos;s been my passion since I got my own computer.
                    </li>
                    <li>
                      I speak Spanish, have lived in Spain and have a Portuguese family. I am heavily influenced by
                      Iberian culture and ways of being.
                    </li>
                    <li>
                      I read (and listen/watch) a lot of business, psychology, and non-fiction books/podcasts. In the
                      last decade alone, I&apos;ve averaged about 50 books a year.
                    </li>
                    <li>
                      My main hobbies are all Arts related: theatre (going to and performing), drawing (I drew all the
                      animals on this site), and crotcheting.
                    </li>
                    <li>
                      I have some ethical hard lines in terms of industries I won&apos;t work for: gambling, oil and
                      gas, tobacco, alcohol, payday lending, BNPL, investment banking, and companies that test on
                      animals.
                    </li>
                  </ul>
                </LoadPanel>
              </div>
            </div>
          </LoadPanel>
          <div className="relative pt-4">
            <div className="absolute -top-[4px] left-0 right-0 grid place-items-center">
              <Button href="#contents" intent="back">
                ^ Back To Top
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-anzac-400 to-black">
          <LoadPanel>
            <div className="md:flex md:flex-row">
              <div className="md:basis-1/5"></div>
              <div className="place-self-center p-12 text-white md:basis-2/5">
                <Heading className="py-4 font-callout text-3xl font-semibold" from="anzac-600" to="anzac-900">
                  <span id="qualifications">My Academic Qualifications</span>
                </Heading>{" "}
                <LoadPanel faster>
                  <div className="mt-4 rounded-br-lg rounded-tl-lg bg-white/25 px-4 py-2 shadow-md">
                    <h3 className="text-2xl font-medium">🎓 MBA - Merit (68.5%) - Warwick Business School</h3>
                    <h4 className="text-black">
                      0.5% from Distinction (very annoying!). Student representative. HR/People specialism. Completed
                      mainly during pandemic. <br />
                      <br />
                      Change Management, Org Behaviour, Marketing, Finance, Operations Management, Leadership,
                      Economics, Innovation, HR, Strategy, Wellbeing Economics and Behavioural Sciences. <br />
                      <br />
                      Distinctions in all exams (including 2 I took at Imperial Business School whilst enrolled there- I
                      switched schools after 1 term and started again).
                    </h4>
                  </div>
                  <div className="mt-4 rounded-br-lg rounded-tl-lg bg-white/25 px-4 py-2 shadow-md">
                    <h3 className="text-2xl font-medium">
                      🎓 BA(Hons) Computing & Spanish - First Class - University of Kent
                    </h3>
                    <h4 className="text-black">
                      Top of my class and top of my faculty first year. Student representative. Retail work 15
                      hours/week. Year abroad in Spain teaching English as a second language to children and adults with
                      no prior training.
                    </h4>
                  </div>
                  <div className="mt-4 rounded-br-lg rounded-tl-lg bg-white/25 px-4 py-2 shadow-md">
                    <h3 className="text-2xl font-medium">🎓 AVCE ICT (3 A Levels) ICT - AAA</h3>
                    <h3 className="pt-2 text-2xl font-medium">🎓 AS Spanish - B</h3>
                    <h4 className="text-black">
                      Only 1 of 60 starting students to complete 3 A Levels&apos; worth of technology modules. Only
                      student to study an additional subject. Achieved As in every technology module which was
                      nationally recognised as standout. This was also in a state-run non-selective college in another
                      town with a high turnover of teaching staff and 50% of students left after the first year. I
                      taught myself a lot. Also worked most weekends whilst studying in retail or a library.
                    </h4>
                  </div>
                  <div className="mt-4 rounded-br-lg rounded-tl-lg bg-white/25 px-4 py-2 shadow-md">
                    <h3 className="text-2xl font-medium">🎓 11 GCSEs - 4 A*s, 5 As, 3 Bs</h3>
                    <h4 className="text-black">
                      My father was diagnosed with terminal cancer months before my final exams and died a few weeks
                      before my exams started, so this was under severe adversity. This was also in a state-run
                      non-selective school with a poor Ofsted rating. I needed to teach myself a lot.
                    </h4>
                  </div>
                </LoadPanel>
              </div>
              <div className="p-12 pt-0 md:basis-1/5 md:p-0 md:pb-0">
                <div className="md:relative md:pt-4">
                  <div className="md:absolute md:top-[420px]">
                    {" "}
                    <Tooltip
                      explainer={
                        "A lion's roar can be heard from up to eight kilometers away. I'm not saying that some people are like lions, but I've definitely heard many people roaring about their education to anyone in the vicinity"
                      }
                    >
                      <Image
                        src={`/imgs/Colour_Lion.png`}
                        alt="Rainbow-coloured self drawn roaring lion profile."
                        width="300"
                        height="300"
                        className="place-self-center hover:animate-wiggle-more hover:animate-thrice hover:animate-ease-linear"
                      />
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
          </LoadPanel>
          <div className="relative pt-4">
            <div className="absolute -top-[4px] left-0 right-0 grid place-items-center">
              <Button href="#contents" intent="back">
                ^ Back To Top
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-christalle-400 to-black">
          <LoadPanel>
            <div className="md:flex md:flex-row">
              <div className="md:basis-1/5"></div>
              <div className="md:basis-1/5">
                <div className="pt-4 md:relative">
                  <div className="md:absolute md:top-[180px]">
                    <Tooltip
                      explainer={
                        "Foxes are difficult to surprise and are known to be able to think well on the spot and adjust their plans. Smart and always ready to adapt, that's why they are cool."
                      }
                    >
                      <Image
                        src={`/imgs/Colour_Fox.png`}
                        alt="Rainbow-coloured self drawn fox sitting."
                        width="300"
                        height="300"
                        className="place-self-center hover:animate-wiggle-more hover:animate-thrice hover:animate-ease-linear"
                      />
                    </Tooltip>
                  </div>
                </div>
              </div>
              <div className="place-self-center p-12 text-white md:basis-2/5">
                <Heading className="pt-4 font-callout text-3xl font-semibold" from="christalle-800" to="black">
                  <span id="certifications">My Certifications & Vocational Training</span>
                </Heading>{" "}
                <LoadPanel faster>
                  <h3 className="pt-4">
                    📃 Micro-certs: Cloud Computing, AI Strategy, AI Transformers (GPTs), Generative AI x 2, Product
                    Analytics, Product-Led Growth, Product Launches, Product Roadmapping, Product Strategy, and AI for
                    Product Management.
                  </h3>
                  <h3 className="pt-4">📃 Reforge Program- 8x courses on Product Management</h3>
                  <h3 className="pt-4">📃 SAFe Program Consultant (SPC4)</h3>
                  <h3 className="pt-4">📃 Professional Scrum Master</h3>
                  <h3 className="pt-4">📃 BCS Certificate in Business Analysis Practice</h3>
                  <h3 className="pt-4">📃 Agile Project Manager Practitioner</h3>
                  <h3 className="pt-4">📃 Lean Six Sigma Green Belt</h3>
                  <h3 className="pt-4">📃 PRINCE2 Practitioner</h3>
                </LoadPanel>
              </div>
            </div>
          </LoadPanel>
          <div className="relative pt-4">
            <div className="absolute -top-[4px] left-0 right-0 grid place-items-center">
              <Button href="#contents" intent="back">
                ^ Back To Top
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-black">
          <LoadPanel>
            <div className="md:flex md:flex-row">
              <div className="md:basis-1/5"></div>
              <div className="place-self-center p-12 text-white md:basis-2/5">
                <Heading
                  className="pt-4 font-callout text-3xl font-semibold"
                  from="bright-turquoise-400"
                  to="bright-turquoise-600"
                >
                  <span id="qa">Q&A</span>
                </Heading>{" "}
                <LoadPanel faster>
                  <h3 className="pt-4 font-callout text-2xl font-medium text-bright-turquoise-400">
                    What am I looking for in a new opportunity/role?
                  </h3>
                  <p>
                    A chance to improve, progress in seniority, and make a positive impact on something that is
                    meaningful. A chance to be myself, be trusted and understood/appreciated. Easy, right? :D
                  </p>
                  <h3 className="pt-4 font-callout text-2xl font-medium text-bright-turquoise-400">
                    What makes me different?
                  </h3>
                  <p>
                    Too much. I don&apos;t really fit in a box or the norm in my industry. I&apos;ve never really worked
                    with anyone like me. I&apos;d say that it&apos;s rare to find someone with a good technical
                    background/sense that is a good storyteller, strategy thinker, and is courageous enough to take
                    risks and embrace change.
                  </p>
                  <h3 className="pt-4 font-callout text-2xl font-medium text-bright-turquoise-400">
                    When should someone not hire me?
                  </h3>
                  <p>
                    If the organisational power structure is very hierarchial, or heavily based on unwritten social
                    dynamics (like politics or in-groups), instead of outcomes or collaborative relationship building,
                    I&apos;m unlikely to navigate the environment well. Additionally, if the executives are too busy,
                    not available or not able to set a clear strategic direction, I&apos;d also not do so well. If you
                    want people to stay in their lane, do as they are told, or sleepwalk as Seth Godin puts it in the
                    book Tribes, I&apos;m likely to cause you stress. If the environment is slow to change, embrace new
                    ideas, people or ways of doing things, also I&apos;m unlikely to be compatible and it will cause
                    tension as I am a changemaker.
                  </p>
                  <h3 className="pt-4 font-callout text-2xl font-medium text-bright-turquoise-400">
                    Why have I had short tenures in previous roles?
                  </h3>
                  <p>
                    I&apos;m going to give a very honest answer here; I&apos;m not going to give the &quot;interview
                    safe&quot; version. Apart from some bad luck/randomness in the fates of the companies I was working
                    for or my ability to make my position look redundant/easy (as I've not been replaced in the last 5+
                    roles I've left), there's a general volatility working for companies pre-PMF or with shifting PMF.
                    The only personably attributable thing I can think of, is autism. Or more specifically, undiagnosed,
                    misunderstood autistic behaviours. It&apos;s a common pattern for undiagnosed autistic people to go
                    through the world, feeling like we don&apos;t belong so I have chosen to move on from places because
                    I felt I didn&apos;t belong, always trying to be optimistic that I just had to find the right place.
                    I think, also because I'm autistic, I can get the measure of somewhere fast and I don't have an
                    ability to ignore things once I've realised them. I'm also not as great as others claim to be at
                    spotting problems in interviews. Or maybe I am but I am often looking for roles in a state of
                    desperation that I feel I have to ignore them or at least give the company the benefit of the doubt.
                    I'm still not sure how anyone knows what it's like to work somewhere until they actually do?! My
                    particular personality and autistic traits also mean that I don&apos;t keep my head down, I try to
                    make an impact quickly and I&apos;m vocal and confident. This doesn&apos;t go down well in low trust
                    or hierarchial environments. It can put a target on my back too in low psychological safety zones
                    where people are competitive or insecure, and I am too trusting/open. I&apos;ve also seemingly gone
                    into a lot of environments as a PM, where the company or people above or around just didn&apos;t
                    really understand what Product Managers were. Most seemed to think that the primary marker of a
                    PM&apos;s success was people being &quot;happy&quot; with them. As most seasoned PMs know, this is
                    often the sign of a bad PM who never says no or a very tactical operator! I&apos;ve only worked in a
                    role for 1 month with a manager that was also a Product person. I&apos;ve also just had some bad
                    luck/timing. Not one of the Product roles I&apos;ve held was backfilled after I left. I've worked in
                    environments going through a lot of change or taking big risks, which so often don't pan out.
                    Despite short tenures however, I&apos;ve been able to have standout impacts because I am a fast
                    learner and executor. I don&apos;t seem to need as long as other people to ramp up, or at least I
                    can&apos;t pretend to need as long as to not upset anyone or to just coast through probationary
                    periods.
                  </p>
                  <p className="pt-2">
                    And it shouldn&apos;t matter that I&apos;m non-binary, female-presenting and queer but tech is a
                    sexist place, we cannot deny it (50% of women leave by 35). I, like many other people from
                    under-represented groups do have more of a spotlight on me; I am judged by stricter standards.
                    It&apos;s basic psychology: I&apos;m basically othered by most people I meet so when I do something
                    they don&apos;t expect, I don&apos;t have the benefit of affinity or in-group biases to be easily
                    forgiven or understood or even given the benefit of the doubt. It&apos;s also a competitive
                    environment generally, and whilst not everyone will actively try to make you fail, they certainly
                    don&apos;t help you succeed. At least, that has been my experience.
                  </p>

                  <h3 className="pt-4 font-callout text-2xl font-medium text-bright-turquoise-400">
                    In a nutshell, why should someone hire me?
                  </h3>
                  <p>
                    I&apos;m a generalist. I can do a lot of things pretty well, at least to a good enough standard to
                    get things going or to help others out. I&apos;m an executor. I&apos;ll swallow frogs on behalf of
                    the team. I get things done. I&apos;m efficient and quick but I also care about quality. I care
                    about what I do and I don&apos;t just dial it in. I care about people and I can easily imagine what
                    it&apos;s like to be in other&apos;s shoes. I&apos;ve worked with many businesses, in different
                    businesses and industries so I have a breadth of experience. I study and I learn fast. I&apos;m
                    creative. I&apos;m technically competent and can bridge the gaps between different teams. I&apos;ve
                    been around the block enough to have learnt major lessons and to have honed a decent instinct on
                    what and how to do things. And I love tech and I love Product, because it&apos;s different every day
                    (I like the variety of different tasks and types of work), it&apos;s strategic, it allows me to use
                    a lot of my skills and I think companies with strong Product people and cultures, build better
                    products.
                  </p>
                  <h3 className="pt-4 font-callout text-2xl font-medium text-bright-turquoise-400">
                    Hybrid, remote, or in-office?
                  </h3>
                  <p>
                    I&apos;ve only ever worked as a PM in remote or remote-hybrid setups. I have a strong preference for
                    remote but I recognise that in person collaboration, or at least knowing colleagues as people is
                    important for most people. So my preference is remote, with quarterly or ad-hoc meetups. I could
                    potentially do hybrid 2 days a week in office, but on those days I&apos;m likely not to be at my
                    best, especially if a commute on public transport or longer than an hour is involved (it&apos;s an
                    autism sensory thing). I would not appreciate going into an empty office or an office so busy
                    there&apos;s nowhere to have a meeting. In office 100% is a no-go for me. I live in Reading, UK.
                    Ideally, I&apos;d love to be able to work from anywhere in the world for short stints as I have
                    family abroad and a partner who travels for work a lot. Office socials/parties are not really a plus
                    for me. Alcohol and work especially are something I try to avoid due to past experiences and because
                    I don&apos;t believe that intoxicating substances have a place in a workplace.
                  </p>
                  <h3 className="pt-4 font-callout text-2xl font-medium text-bright-turquoise-400">
                    What&apos;s with all the animals and the rainbows?
                  </h3>
                  <p>
                    I love animals. I love rainbows (I am queer after all). I love drawing. And, well I needed something
                    so that this didn&apos;t just look like any other portfolio site. Love it or hate it, hopefully
                    you&apos;ll remember it.
                  </p>
                </LoadPanel>
              </div>
              <div className="mt-4 pb-6 pl-12 md:basis-1/5 md:pb-0 md:pl-0">
                <Tooltip
                  explainer={
                    "When guinea pigs are happy they jump around, twisting their body up to 90 degrees and kicking their legs out. Humans have named this popcorning. I'm not averse to jumping with glee myself."
                  }
                >
                  <Image
                    src={`/imgs/Colour_Guinea.png`}
                    alt="Rainbow-coloured self drawn guinea pig face."
                    width="200"
                    height="200"
                    className="place-self-center hover:animate-wiggle-more hover:animate-thrice hover:animate-ease-linear"
                  />
                </Tooltip>
              </div>
            </div>
          </LoadPanel>
          <div className="relative pt-4">
            <div className="absolute -top-[4px] left-0 right-0 grid place-items-center">
              <Button href="#contents" intent="back">
                ^ Back To Top
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
