import { Button } from "components/Button/Button"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Amy Freelander Portfolio",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://alf.tchldr.com",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://alf.tchldr.com/logo.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <div className="text-xl">
        <section className="from-christalle-950 bg-gradient-to-br to-black text-white">
          <div className="flex flex-row">
            <div className="basis-2/5">
              <div className="flex justify-end py-8">
                <Image
                  src={`/imgs/rainbow_self.png`}
                  alt="Rainbow-coloured self drawn head of Amy with long hair from a slight side profile."
                  width="200"
                  height="200"
                  className="animate-wiggle-more animate-once animate-ease-in place-self-center"
                />
              </div>
            </div>
            <div className="basis-3/5 justify-start px-8 py-16">
              <div className="place-self-left mx-auto">
                <h1 className="animate-fade-up font-callout mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl xl:text-6xl">
                  Hi. I'm Amy.
                </h1>
                <p className="animate-fade-up font-callout2 text-christalle-600 text-2xl">
                  And this is my portfolio website.
                </p>
                <div className="mt-8 inline-grid grid-cols-2 gap-0">
                  <a target="_blank" href="https://www.linkedin.com/in/freelanderamy" rel="noopener noreferrer">
                    <Image
                      src={`/imgs/linkedin_icon.png`}
                      alt="LinkedIn icon."
                      width="20"
                      height="20"
                      className="animate-fade-up place-self-center border-2 hover:border-3 hover:border-white"
                    />
                  </a>
                  <a target="_blank" href="https://www.linkedin.com/in/freelanderamy" rel="noopener noreferrer">
                    <Image
                      src={`/imgs/cv_icon.png`}
                      alt="LinkedIn icon."
                      width="20"
                      height="20"
                      className="animate-fade-up ml-4 place-self-center border-2 hover:border-3 hover:border-white"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="from-mosque-900 bg-gradient-to-br to-black">
          <div className="flex flex-row">
            <div className="basis-1/5"></div>
            <div className="basis-3/5 place-self-center p-6 pb-12 text-white">
              <p className="mt-4 text-2xl leading-relaxed">
                I'm an <span className="text-mosque-400">MBA-weilding</span>, recovering{" "}
                <span className="text-mosque-400">software engineer turned</span> passionate, creative and inclusive{" "}
                <span className="text-mosque-400">product leader</span>. I've been a{" "}
                <span className="text-mosque-400">dedicated Product Manager for 6 years</span> but I've been working{" "}
                <span className="text-mosque-400">in tech for over 15 years</span>. I suit collaborative, innovative,
                ambitious and dynamic environments best, so{" "}
                <span className="text-mosque-400">startups and scaleups</span>, although I've done some great stuff in
                some of the largest tech firms out there (Google & Visa).
              </p>
              <p className="mt-4 text-2xl leading-relaxed">
                Please use this website to get to know me and my Product work a little better with the help of some
                rainbow animals.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-row bg-black p-4 text-white">
            <div className="basis-2/12"></div>
            <div className="basis-8/12 pb-4">
              <div className="pb-2">
                <a id="contents">CONTENTS</a>
              </div>
              <div className="grid grid-cols-6 gap-2">
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
        <section className="from-anzac-400 bg-gradient-to-br to-black">
          <div className="flex flex-row">
            <div className="basis-2/12"></div>
            <div className="place-self-top basis-3/12 p-12 text-white">
              <h2 className="animate-once animate-ease-in font-callout text-anzac-200 animate-pulse text-2xl ">
                <a id="strengths">My Strengths</a>
              </h2>
              <ul className="list-disc pt-2">
                <li>Storytelling and presentations</li>
                <li>Critical thinking and decision making</li>
                <li>Data fluency and new information processing</li>
                <li>Curiosity and openness to try new things</li>
                <li>Creativity, innovation, and workshops</li>
                <li>Efficiency, organisation, and process creation</li>
                <li>Inclusivity and caring about people</li>
                <li>Very fast learner</li>
                <li>Enjoys change and working through ambiguity</li>
              </ul>
            </div>{" "}
            <div className="basis-2/12 items-end justify-items-center pt-16">
              <div className="relative pt-4">
                <div className="absolute top-[150px]">
                  <Image
                    src={`/imgs/Colour_Hummingbird.png`}
                    alt="Rainbow-coloured self drawn hummingbird."
                    width="256"
                    height="274"
                    className="animate-fade-up place-self-center self-end"
                  />
                </div>
              </div>
            </div>
            <div className="place-self-top basis-3/12 p-12 text-white">
              <h2 className="animate-once animate-ease-in font-callout text-anzac-200 animate-pulse text-2xl ">
                <a id="areas">
                  Areas I've Worked In <br />
                  (All B2B)
                </a>
              </h2>
              <ul className="list-disc pt-2">
                <li>Payments/FinTech</li>
                <li>BigTech/AdTech</li>
                <li>Internal Tooling</li>
                <li>CCaaS</li>
                <li>SaaS</li>
                <li>EdTech</li>
                <li>HRTech</li>
                <li>Ecomm Ops</li>
                <li>APIs and Integrations</li>
                <li>Startups</li>
                <li>Scaleups</li>
                <li>Software Consultancies</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="basis-1/5"></div>
            <div className="place-self-top basis-3/5 p-12 text-white">
              <h2 className="font-callout text-anzac-200 text-xl">
                Things I'm learning and working on improving (the journey is lifelong):
              </h2>
              <p>
                Coaching skills, conflict management techniques, pacing myself to adjust to change at a rate suitable
                for the environment, working out how to balance authenticity with professionalism, Portuguese,
                playwriting, crotcheting, acting, improv, and AI.
              </p>
            </div>
          </div>
          <div className="relative pt-4">
            <div className="absolute -top-3 start-1/2">
              <Button href="#contents" intent="back">
                ^ Back To Top
              </Button>
            </div>
          </div>
        </section>
        <section className="from-bright-turquoise-900 bg-gradient-to-br to-black">
          <div className="flex flex-row">
            <div className="basis-1/5"></div>
            <div className="place-self-top basis-2/5 p-12 text-white">
              <h2 className="animate-once animate-ease-in font-callout text-bright-turquoise-200 animate-pulse text-2xl">
                <a id="interests">My Professional Interests & Passions</a>
              </h2>
              <ul className="list-disc pt-2">
                <li>DEIB (Diversity, Equity, Inclusion & Belonging)</li>
                <li>Lean Agile ways of working (bit of a Toyota geek)</li>
                <li>Automation and using tech to improve how humans spend their time and energy</li>
                <li>Ethical, deliberate, and mindful applications of tech (tech for good)</li>
                <li>User, customer, and employee experience</li>
                <li>UI/Web design and front-end development</li>
                <li>Scripting, machine learning, and APIs</li>
                <li>Strategy and working smart to discover and iterate on ideas</li>
                <li>Continuous improvement and experimentation</li>
                <li>Cognitive biases, behavioural sciences, and organisational psychology</li>
                <li>
                  Bringing theatre techniques to the tech profession, especially for better marketing, collaboration,
                  and innovation
                </li>
              </ul>
            </div>
            <div className="place-self-top basis-2/5 p-12 text-white">
              <h2 className="animate-once animate-ease-in font-callout text-bright-turquoise-200 animate-pulse text-2xl">
                <a id="motivations">My Motivations</a>
              </h2>
              <ul className="list-disc pt-2">
                <li>Learning new perspectives/worlds/contexts</li>
                <li>Problem solving and fixing things that are broken</li>
                <li>Making tech a positive force</li>
                <li>Helping people grow and be fulfilled</li>
                <li>Increasing social mobility and opportunities for marginalised groups</li>
                <li>Meaningful connections with humans</li>
                <li>Trying new techniques and developing skills</li>
                <li>Leaving things better than I found them</li>
                <li>Honing my craft and mastering my skills</li>
                <li>Being creative, having fun, and making things</li>
                <li>Making people laugh, providing clarity, and helping ease anxiety</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="basis-1/5"></div>
            <div className="basis-2/5 place-self-center p-12 text-white">
              <h2 className="animate-once animate-ease-in font-callout text-bright-turquoise-200 text-xlg animate-pulse">
                So my ideal working environment would probably be:
              </h2>
              <p>
                A place where people want to be on a journey, united by a shared vision and goals. Collaborative,
                trusting, and creative people. Managers and colleagues who care about people as well as profits,
                certainly more than status or personal wealth alone. Modern and improving tech/processes. So probably a
                startup or scaleup?
              </p>
            </div>
            <div className="basis-1/5">
              <Image
                src={`/imgs/Colour_Giraffe.png`}
                alt="Rainbow-coloured self drawn giraffe head looking curious."
                width="200"
                height="200"
                className="animate-fade-up place-self-center"
              />
            </div>
          </div>
          <div className="relative pt-4">
            <div className="absolute -top-3 start-1/2">
              <Button href="#contents" intent="back">
                ^ Back To Top
              </Button>
            </div>
          </div>
        </section>
        <section className="from-christalle-950 bg-gradient-to-br to-black text-white">
          <div className="flex flex-row">
            <div className="basis-1/6"></div>

            <div className="basis-4/6 place-self-center p-12 text-white">
              <div className="justify-items-end">
                <Image
                  src={`/imgs/Colour_Monkey_Baby.png`}
                  alt="Rainbow-coloured self drawn baby monkey looking shocked."
                  width="200"
                  height="200"
                  className="animate-fade-up right-0"
                />
              </div>
              <h2 className="animate-once animate-ease-in font-callout text-christalle-400 animate-pulse pt-4 text-2xl">
                <a id="achievements">My Key Achievements</a>
              </h2>
              <ul className="list-disc pt-2">
                <li>
                  Created a scientifically complex 0-1 product, including recruiting the product team (3 engineers, 1
                  data scientist, 1 product marketer, 3 psychometrician contractors), and launched within 6 months to
                  80% user approval
                </li>
                <li>Created an MVP and full business plan for a startup within 1 month by myself</li>
                <li>
                  Managed response to Brexit in first months at a company with technical complexities, a small team, and
                  last minute changes
                </li>
                <li>
                  Completed my MBA at Warwick Business School through COVID period whilst working (also accepted to
                  Imperial Business School)
                </li>
                <li>
                  Used machine learning techniques (which I taught myself) to perform an analysis on data I retrieved
                  online around gender pay gap reporting to create a unique dissertation using techniques never seen
                  before applied to business school research
                </li>
                <li>
                  Hired by Google as a top 1% candidate (only 1% of people who apply to Google get a 100% positive
                  indication to be hired by all interviewers)
                </li>
                <li>
                  Reduced product portfolio at Google by nearly 80% through end of life program, clearing the path for
                  efficiency and better tooling
                </li>
                <li>
                  Launched a multi-team, technically complex program at Google with the aim of saving $8bn/year within
                  my first 6 months
                </li>
                <li>
                  Took a battlefield promotion to manage a Product team with the aim of ensuring all colleagues stay
                  during the transition during a great period of change and actually grew the team within months
                </li>
                <li>
                  Successfully spoke at Women of Silicon Roundabout conference two years in a row, once in front of
                  thousands of people
                </li>
                <li>
                  Created multiple internal tools in various companies, saving thousands of hours in manual operations
                  and generating new business lines
                </li>
                <li>
                  Created an integration product that could be resold as an addon to a main product, which generated
                  hundreds of thousands of dollars a year in revenue and put the company on the radar for its eventual
                  acquisition by the product that I integrated our product into
                </li>
                <li>
                  Taught myself numerous programming languages and frameworks across decades including TypeScript,
                  Python, C#, JavaScript, Bash Scripting, Powershell and Perl
                </li>
                <li>
                  Numerous academic awards for attainment. Top of my undergraduate class and top of my faculty in my
                  first year. Received firsts in every Computing class.
                </li>
              </ul>
            </div>
          </div>
          <div className="relative pt-4">
            <div className="absolute -top-3 start-1/2">
              <Button href="#contents" intent="back">
                ^ Back To Top
              </Button>
            </div>
          </div>
        </section>
        <section className="from-christalle-400 bg-gradient-to-br to-black">
          <div className="flex flex-row">
            <div className="basis-1/5"></div>

            <div className="basis-3/5 place-self-center p-12 text-white">
              <div>
                <Image
                  src={`/imgs/Colour_Sheep.png`}
                  alt="Rainbow-coloured self drawn sheep head."
                  width="200"
                  height="200"
                  className="animate-fade-up place-self-center"
                />
              </div>
              <h2 className="font-callout text-christalle-950 pt-4 text-2xl">
                <a id="examples">Example Products I've Worked On As A PM</a>
              </h2>
              <div className="mt-4 rounded bg-white bg-opacity-25 px-4 py-2 shadow-md">
                <h3>
                  A semi-legacy platform with APIs for a lot of data ingestion from hardware sources. The backbone of a
                  monitoring service being used in high-stake environments.{" "}
                  <span className="text-black">
                    I helped navigate tech debt, strategic priorities and incident management.
                  </span>
                </h3>
              </div>

              <div className="mt-4 rounded bg-white bg-opacity-25 px-4 py-2 shadow-md">
                <h3>
                  A 0-1 online psychometric tool to help people navigate the roles in the cyber security industry and
                  work out how their personality and traits would be suited for cyber security with a strong UX, data
                  presentation, scientific rigour, and API integration.{" "}
                  <span className="text-black">I built the product and product team from scratch.</span>
                </h3>
              </div>

              <div className="mt-4 rounded bg-white bg-opacity-25 px-4 py-2 shadow-md">
                <h3>
                  A decisioning system for multiple territories/languages with lots of data integrations for an online
                  business credit card application and a third party integration with a tool to allow credit analysts to
                  iterate on and manually ratify their decisions.{" "}
                  <span className="text-black">
                    I helped iterate on an existing solution to make incremental improvements, to finalise a large
                    migration project to a third party system and to begin to prepare for territory changes.
                  </span>
                </h3>
              </div>

              <div className="mt-4 rounded bg-white bg-opacity-25 px-4 py-2 shadow-md">
                <h3>
                  A onboarding flow for multiple territories/languages for an online business credit card application
                  that allowed for experimentation and telemetry to increase acquisition growth.{" "}
                  <span className="text-black">
                    I ran a design sprint and iterated to devise a new system to allow for more growth experimentation
                    (A/B testing) without engineering input.
                  </span>
                </h3>
              </div>

              <div className="mt-4 rounded bg-white bg-opacity-25 px-4 py-2 shadow-md">
                <h3>
                  Reliable integrations into couriers for ecommerce operations to be able to create, facilitate and
                  manage shipments of goods ordered to customers internationally.{" "}
                  <span className="text-black">
                    I managed the company's response post-Brexit changes and devised a longer-term strategy to enable
                    territory and market growth.
                  </span>
                </h3>
              </div>

              <div className="mt-4 rounded bg-white bg-opacity-25 px-4 py-2 shadow-md">
                <h3>
                  Easy to use integrations into online marketplaces for ecommerce operations so that sellers did not
                  oversell and good efficiently manage orders and inventory.{" "}
                  <span className="text-black">
                    I prioritised and helped manage partners for small third-party compliance changes and devised a
                    longer-term partner and platform strategy to enable market growth.
                  </span>
                </h3>
              </div>

              <div className="mt-4 rounded bg-white bg-opacity-25 px-4 py-2 shadow-md">
                <h3>
                  Internal tools for use by customer service or support teams within BigTech. Tools often created by an
                  individual and needed to be professionalised to meet compliance, security and robustness standards. I
                  helped reduce the team's portfolio by almost 80%, ensuring that time spent was dedicated to the most
                  impactful tools and initiatives.{" "}
                  <span className="text-black">
                    I launched a large scale data workflow tool project to be able to access various complex data
                    sources and create automated actions within different internal systems saving $8bn/year. I assessed
                    new tooling ideas for inclusion within our portfolio.
                  </span>
                </h3>
              </div>

              <div className="mt-4 rounded bg-white bg-opacity-25 px-4 py-2 shadow-md">
                <h3>
                  Bug management tracking and communications system for use throughout BigTech to help ensure
                  information on customer-facing issues were resolved in a timely and transparent manner.{" "}
                  <span className="text-black">
                    I created an internal marketing campaign to start to bring new users to the system and worked to
                    disambiguate ongoing security and permissions-based changes following a company restructure.
                  </span>
                </h3>
              </div>

              <div className="mt-4 rounded bg-white bg-opacity-25 px-4 py-2 shadow-md">
                <h3>
                  Reliable and speedy integrations into workforce management solutions from a legacy contact centre
                  management platform through scheduled data ingestion files and SQL stored procedures.{" "}
                  <span className="text-black">
                    I took an existing collection of scrappy scripts and turned them into an application that could be
                    sold to customers. I devised and coded this product. I worked closely with pilot customers to
                    install, troubleshoot and monitor it in production.
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <div className="relative pt-4">
            <div className="absolute -top-3 start-1/2">
              <Button href="#contents" intent="back">
                ^ Back To Top
              </Button>
            </div>
          </div>
        </section>

        <section className="from-mosque-950 bg-gradient-to-br to-black text-white">
          <div className="flex flex-row">
            <div className="basis-1/5"></div>
            <div className="basis-2/5 place-self-center p-12 text-white">
              <h2 className="animate-once animate-ease-in font-callout text-mosque-400 animate-pulse text-2xl">
                <a id="samples">Some Samples of My Work</a>
              </h2>
              <p className="font-extralight">
                All samples are completely my own work. They should no longer be particularly commercially consequential
                to the companies I worked for. Where I think they might be, I have anonymised the company.
              </p>

              <h4 className="text-mosque-200 pt-12">Presentations/tasks from interviews</h4>
              <p>How I would move a Product team through a maturity matrix shortly after starting at a company</p>
              <p>Managing products in a multi-business-stakeholder environments</p>
              <p>My approach to roadmapping features at a fintech</p>
              <p>Initial strategic take for an online tool to help onboard engineers</p>
              <p>An idea to increase visitors to a zoo using tech</p>
              <p>Increase Netflix subscribers over 50</p>
              <p>Improving a B2C software ecommerce website in 12 weeks</p>
              <p>An integration product I built start to finish</p>

              <h4 className="text-mosque-200 pt-12">Actual artifacts from my recent Product career</h4>

              <p>Legacy Tech Company: Launching an innovation project (series of workshops)</p>
              <p>Legacy Tech Company: Proposal to create customer tiering</p>
              <p>Legacy Tech Company: Pirate prioritisation game following innovation workshops</p>
              <p>Magnetic Rock (HRTech/EdTech startup incubator): PMF narrative example</p>
              <p>
                Magnetic Rock (HRTech/EdTech startup incubator): Webinar and disc pt-2overy example to engage cyber
                security professionals in research
              </p>
              <p>
                Magnetic Rock (HRTech/EdTech startup incubator): Example specification for work given to engineering
                team
              </p>
              <p>
                Magnetic Rock (HRTech/EdTech startup incubator): Example specification for event and data dictionaries
              </p>
              <p>Linnworks (Ecommerce Operations scaleup): Incident Management workshop</p>
              <p>
                Tchldr (EdTech startup): My startup's pitch deck for an edTech platform for core human skills for
                engineering managers
              </p>
              <p>Google: Key aspects of a Lean Agile mindset</p>
            </div>
            <div className="mt-12 basis-1/5">
              <Image
                src={`/imgs/Colour_Prancing_Deer.png`}
                alt="Rainbow-coloured self drawn deer looking to camera, one leg raised."
                width="200"
                height="200"
                className="animate-fade-up place-self-center"
              />
              <h4 className="text-mosque-200 pt-12">Academic writing</h4>

              <p className="mb-4 font-extralight">
                Case studies were mainly from my career. Most names were anonymised. Some details were changed to
                anonymise circumstances without affecting analysis. Analysis was for academic/post-work-experience
                processing.
              </p>

              <p className="border-mosque-100 hover:border-mosque-700 hover:bg-mosque-700 my-4 border-y-2 p-2 font-semibold">
                MBA case study: Leveraging Diversity In An Internal Product Team in Google
              </p>

              <p className="border-mosque-100 hover:border-mosque-700 hover:bg-mosque-700 my-4 border-y-2 p-2 font-semibold">
                MBA case study: Google's HR Strategy
              </p>

              <p className="border-mosque-100 hover:border-mosque-700 hover:bg-mosque-700 my-4 border-y-2 p-2 font-semibold">
                MBA case study: Managing change in a French software company
              </p>

              <p className="border-mosque-100 hover:border-mosque-700 hover:bg-mosque-700 my-4 border-y-2 p-2 font-semibold">
                MBA essay: The Behavioural Sciences Behind Scrum
              </p>
              <p className="border-mosque-100 hover:border-mosque-700 hover:bg-mosque-700 my-4 border-y-2 p-2 font-semibold">
                MBA case study: What to do with a teenage software company?
              </p>
              <p className="border-mosque-100 hover:border-mosque-700 hover:bg-mosque-700 my-4 border-y-2 p-2 font-semibold">
                MBA case study with Cortex: Innovation and Creativity Study 2019
              </p>
              <p className="border-mosque-100 hover:border-mosque-700 hover:bg-mosque-700 my-4 border-y-2 p-2 font-semibold">
                MBA final dissertation (machine learning based): What, If Any, Are The Relationships Between Gender Pay
                Gaps And An Employer's Brand, Amongst Major UK Employers?
              </p>
            </div>
          </div>
          <div className="relative pt-4">
            <div className="absolute -top-3 start-1/2">
              <Button href="#contents" intent="back">
                ^ Back To Top
              </Button>
            </div>
          </div>
        </section>

        <section className="from-cerise-900 bg-gradient-to-br to-black">
          <div className="flex flex-row">
            <div className="basis-1/6"></div>
            <div className="basis-2/6 place-self-center p-12 text-white">
              <div className="basis-1/6">
                <Image
                  src={`/imgs/Colour_Zebra.png`}
                  alt="Rainbow-coloured self drawn zebra head."
                  width="200"
                  height="200"
                  className="animate-fade-up place-self-center"
                />
              </div>
              <h2 className=" animate-once animate-ease-in font-callout text-cerise-200 animate-pulse pt-12 text-2xl">
                <a id="personality">My Personality Profile</a>
              </h2>
              <h4 className="text-cerise-200 mt-4">Psychometrically:</h4>
              <ul className="list-disc pt-2">
                <li>MBTI: ENTJ-A "Executive”</li>
                <li>Quintax: elsT-V Logical with Theoretical Strategist</li>
                <li>True-Colors: Blue-Green</li>
                <li>StrengthsFinder: Responsibility, Relator, Intellection, Learner & Strategic</li>
                <li>
                  OCEAN/Big 5: Openness 98%; Conscientiousness 71%; Extraversion 90%; Agreeableness 67%; Neuroticism 77%
                </li>
                <li>IQ approx 137 as an adult (Wechsler Adult Intelligence Scale)</li>
              </ul>
              <h4 className="text-cerise-200 pt-12">Practically:</h4>
              <ul className="list-disc pt-2">
                <li>I'm extroverted, enthusiastic, communicative and honest, sometimes to my detriment</li>
                <li>I like to lead, grow and be strategic in my activities</li>
                <li>
                  I take my responsibilities seriously and am conscientious but I am prone to emotional irrationalities
                  (like most people!)
                </li>
                <li>
                  I care about people and am always keen to understand psychology and the why behind what people do
                </li>
                <li>I'm very liberal and open to new experiences and ideas, although it means that I need novelty</li>
                <li>I have a growth mindset but I still have high standards</li>
                <li>
                  I intellectualise things a lot and my personality is dominated by independent thinking,
                  cognitive/logical reasoning and models
                </li>
                <li>
                  I'm enthusiastic, optimistic, and generally seek harmony however I'm not afraid to speak my mind
                </li>
              </ul>
            </div>
            <div className="basis-2/6 place-self-center p-12 text-white">
              <h2 className="animate-once animate-ease-in font-callout text-cerise-200 animate-pulse text-2xl">
                <a id="goodToKnow">Good To Know</a>
              </h2>
              <ul className="list-disc pt-2">
                <li>
                  I'm a late-diagnosed (2024) autistic person. This has deep implications far too numerous to publicly
                  write here. However, I generally fit a{" "}
                  <a
                    href="https://the-art-of-autism.com/females-and-aspergers-a-checklist/"
                    className="underline hover:text-gray-200"
                    target="_blank"
                  >
                    typical presentation for the internalised AFAB autistic profile
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
                  >
                    neuroqueer
                  </a>
                  .
                </li>
                <li>
                  I love lists (as you can see). I can write a lot. Quickly. I don't have the same blocks/filters that
                  others seem to have.
                </li>
                <li>I'm a near lifelong vegetarian and I do not drink alcohol.</li>
                <li>
                  I grew up in a low socio-economic home, with a chronically-ill parent, who didn't work and another
                  parent who was their full-time carer. My father died when I was 16. I am the first generation to go to
                  university. Despite my current higher socio-economic status, I am quintessentially working class in a
                  lot of my attitudes, even though I am now estranged from my first family.
                </li>
                <li>
                  I am genetically and partially culturally Ashkenazi Jewish. This has some implications on some of my
                  attitudes to the world and I carry with me definite generational, heriditary traumas from the 20th
                  century.
                </li>
                <li>
                  Working in tech with my identity and in my generation has not been easy. &nbsp;
                  <a
                    href="http://accenture.com/techculturereset"
                    className="underline hover:text-gray-200"
                    target="_blank"
                  >
                    Please see horrendous stats on how 50% of females leave tech before 35
                  </a>
                  .
                </li>
                <li>
                  I've been coding since I was 13. I'm not in tech for money, status, or because I didn't know what else
                  to do. It's been my passion since I got my own computer.
                </li>
                <li>I am a domestic/sexual abuse survivor.</li>
                <li>
                  I speak Spanish, have lived in Spain and have a Portuguese family. I am heavily influenced by Iberian
                  culture and ways of being.
                </li>
                <li>
                  I read (and listen/watch) a lot of business, psychology, and non-fiction books/podcasts. In the last
                  decade alone, I've averaged about 50 books a year.
                </li>
                <li>
                  My main hobbies are all Arts related: theatre (going to and performing), drawing (I drew all the
                  animals on this site), and crotcheting.
                </li>
                <li>
                  I have some ethical hard lines in terms of industries I won't work for: gambling, oil and gas,
                  tobacco, payday lending, BNPL, investment banking, companies that test on animals, and a particular UK
                  supermarket beginning with T (I boycott them).
                </li>
              </ul>
            </div>
          </div>
          <div className="relative pt-4">
            <div className="absolute -top-3 start-1/2">
              <Button href="#contents" intent="back">
                ^ Back To Top
              </Button>
            </div>
          </div>
        </section>

        <section className="from-anzac-400 bg-gradient-to-br to-black">
          <div className="flex flex-row">
            <div className="basis-1/5"></div>
            <div className="basis-2/5 place-self-center p-12 text-white">
              <h2 className="font-callout text-anzac-700 text-2xl">
                <a id="qualifications">My Academic Qualifications</a>
              </h2>
              <div className="mt-4 rounded bg-white bg-opacity-25 px-4 py-2 shadow-md">
                <h3>MBA - Merit (68.5%) - Warwick Business School</h3>
                <h4 className="text-black">
                  0.5% from Distinction (very annoying!). Student representative. HR/People specialism. Completed mainly
                  during pandemic. <br />
                  <br />
                  Change Management, Org Behaviour, Marketing, Finance, Operations Management, Leadership, Economics,
                  Innovation, HR, Strategy, Wellbeing Economics and Behavioural Sciences. <br />
                  <br />
                  Distinctions in all exams (including 2 I took at Imperial Business School whilst enrolled there- I
                  switched schools after 1 term and started again).
                </h4>
              </div>
              <div className="mt-4 rounded bg-white bg-opacity-25 px-4 py-2 shadow-md">
                <h3>BA(Hons) Computing & Spanish - First Class - University of Kent</h3>
                <h4 className="text-black">
                  Top of my class and top of my faculty first year. Student representative. Retail work 15 hours/week.
                </h4>
              </div>
              <div className="mt-4 rounded bg-white bg-opacity-25 px-4 py-2 shadow-md">
                <h3>AVEC ICT (3 A Levels) ICT - AAA - Sussex Downs College</h3>
                <h3 className="pt-2">AS Spanish - B - Sussex Downs College</h3>
                <h4 className="text-black">
                  Only 1 of 60 starting students to complete 3 A Levels' worth of modules. Only student to study an
                  additional subject.
                </h4>
              </div>
              <div className="mt-4 rounded bg-white bg-opacity-25 px-4 py-2 shadow-md">
                <h3>11 GCSEs - 4 A*s, 5 As, 3 Bs - Bexhill High School</h3>
                <h4 className="text-black">
                  My father was diagnosed with terminal cancer months before my final exams and died a few weeks before
                  my exams started, so this was under severe adversity.
                </h4>
              </div>
            </div>
            <div className="basis-1/5">
              <div className="relative pt-4">
                <div className="absolute top-[420px]">
                  <Image
                    src={`/imgs/Colour_Lion.png`}
                    alt="Rainbow-coloured self drawn roaring lion profile."
                    width="300"
                    height="300"
                    className="animate-fade-up place-self-center "
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative pt-4">
            <div className="absolute -top-3 start-1/2">
              <Button href="#contents" intent="back">
                ^ Back To Top
              </Button>
            </div>
          </div>
        </section>

        <section className="from-christalle-400 bg-gradient-to-br to-black">
          <div className="flex flex-row">
            <div className="basis-1/5"></div>
            <div className="basis-1/5">
              <div className="relative pt-4">
                <div className="absolute top-[180px]">
                  <Image
                    src={`/imgs/Colour_Fox.png`}
                    alt="Rainbow-coloured self drawn fox sitting."
                    width="300"
                    height="300"
                    className="animate-fade-up place-self-center"
                  />
                </div>
              </div>
            </div>
            <div className="basis-2/5 place-self-center p-12 text-white">
              <h2 className="font-callout text-christalle-950 text-2xl">
                <a id="certifications">My Certifications & Vocational Training</a>
              </h2>
              <h3 className="pt-4">
                Micro-certs: Cloud Computing, AI Strategy, AI Transformers (GPTs), Generative AI x 2, Product Analytics,
                Product-Led Growth, Product Launches, Product Roadmapping, Product Strategy, and AI for Product
                Management.
              </h3>
              <h3 className="pt-4">Reforge Program- 8x courses on Product Management</h3>
              <h3 className="pt-4">SAFe Program Consultant (SPC4)</h3>
              <h3 className="pt-4">Professional Scrum Master</h3>
              <h3 className="pt-4">BCS Certificate in Business Analysis Practice</h3>
              <h3 className="pt-4">Agile Project Manager Practitioner</h3>
              <h3 className="pt-4">Lean Six Sigma Green Belt</h3>
              <h3 className="pt-4">PRINCE2 Practitioner</h3>
            </div>
          </div>
          <div className="relative pt-4">
            <div className="absolute -top-3 start-1/2">
              <Button href="#contents" intent="back">
                ^ Back To Top
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-black">
          <div className="flex flex-row">
            <div className="basis-1/5"></div>
            <div className="basis-2/5 place-self-center p-12 text-white">
              <h2 className="font-callout text-bright-turquoise-400 text-2xl">
                <a id="qa">Q&A</a>
              </h2>
              <h3 className="font-callout text-bright-turquoise-400 pt-4 text-xl">
                What am I looking for in a new opportunity/role?
              </h3>
              <p>
                A chance to improve, progress in seniority, and make a positive impact on something that is meaningful.
                A chance to be myself, be trusted and understood/appreciated. Easy, right? :D
              </p>
              <h3 className="font-callout text-bright-turquoise-400 pt-4 text-xl">What makes me different?</h3>
              <p>
                Too much. I don't really fit in a box or the norm in my industry. I've never really worked with anyone
                like me. I'd say that it's rare to find someone with a good technical background/sense that is a good
                storyteller, strategy thinker, and is courageous enough to take risks and embrace change.
              </p>
              <h3 className="font-callout text-bright-turquoise-400 pt-4 text-xl">When should someone not hire me?</h3>
              <p>
                If the organisational power structure is very hierarchial, or heavily based on unwritten social dynamics
                (like politics or in-groups), instead of outcomes or collaborative relationship building, I'm unlikely
                to navigate the environment well. Additionally, if the executives are too busy, not available or not
                able to set a clear strategic direction, I'd also not do so well. If you want people to stay in their
                lane, do as they are told, or as sleepwalk as Seth Godin puts it in the book Tribes, I'm likely to cause
                you stress. If the environment is slow to change, embrace new ideas, people or ways of doing things,
                also I'm unlikely to be compatible and it will cause tension as I am a changemaker.
              </p>
              <h3 className="font-callout text-bright-turquoise-400 pt-4 text-xl">
                Why have I had short tenures in previous roles?
              </h3>
              <p>
                I'm going to give a very honest answer here; I'm not going to give the "interview safe" version. In a
                word: autism. Or more specifically, undiagnosed, misunderstood autistic behaviours. It's a common
                pattern for undiagnosed autistic people to go through the world, feeling like we don't belong so I have
                chosen to move on from places because I felt I didn't belong, always trying to be optimistic that I just
                had to find the right place. My particular personality and autistic traits mean that I don't keep my
                head down, I try to make an impact quickly and I'm vocal and confident. This doesn't go down well in low
                trust or hierarchial environments. I've also seemingly gone into a lot of environments as a PM, where
                the company or people above or around just didn't really understand what Product Managers were. Most
                seemed to think that the primary marker of a PM's success was people being "happy" with them. As most
                seasoned PMs know, this is often the sign of a bad PM who never says no or a very tactical operator!
                I've only worked in a role for 1 month with a manager that was also a Product person. I've also just had
                some bad luck/timing. Not one of the Product roles I've held was backfilled after I left. Despite short
                tenures however, I've been able to have standout impacts because I am a fast learner and executor. I
                don't seem to need as long as other people to ramp up, or at least I can't pretend to need as long as to
                not upset anyone.{" "}
              </p>
              <p className="pt-2">
                And it shouldn't matter that I'm non-binary/female but tech is a sexist place, we cannot deny it. I,
                like many other people from under-represented groups do have more of a spotlight on me; I am judged by
                stricter standards. It's basic psychology: I'm basically othered by most people I meet so when I do
                something they don't expect, I don't have the benefit of affinity or in-group biases to be easily
                forgiven or understood or even given the benefit of the doubt. It's also a competitive environment
                generally, and whilst not everyone will actively try to make you fail, they certainly don't help you
                succeed. At least, that has been my experience.
              </p>

              <h3 className="font-callout text-bright-turquoise-400 pt-4 text-xl">
                In a nutshell, why should someone hire me?
              </h3>
              <p>
                I'm a generalist. I can do a lot of things pretty well, at least to a good enough standard to get things
                going or to help others out. I'm an executor. I'll swallow frogs on behalf of the team. I get things
                done. I'm efficient and quick but I also care about quality. I care about what I do and I don't just
                dial it in. I care about people and I can easily imagine what it's like to be in other's shoes. I've
                worked with many businesses, in different businesses and industries so I have a bredth of experience. I
                study and I learn fast. I'm creative. I'm technically competent and can bridge the gaps between
                different teams. I've been around the block enough to have learnt major lessons and to have honed a
                decent instinct on what and how to do things. And I love tech and I love Product, because it's different
                every day (I like the variety of different tasks and types of work), it's strategic, it allows me to use
                a lot of my skills and I think companies with strong Product people and cultures, build better products.
              </p>
              <h3 className="font-callout text-bright-turquoise-400 pt-4 text-xl">Hybrid, remote, or in-office?</h3>
              <p>
                I've only ever worked as a PM in remote or remote-hybrid setups. I have a strong preference for remote
                but I recognise that in person collaboration, or at least knowing colleagues as people is important for
                most people. So my preference is remote, with quarterly or ad-hoc meetups. I could potentially do hybrid
                2 days a week in office, but on those days I'm likely not to be at my best, especially if a commute on
                public transport or longer than an hour is involved (it's an autism sensory thing). I would not
                appreciate going into an empty office or an office so busy there's nowhere to have a meeting. In office
                100% is a no-go for me. I live in Reading, UK. Ideally, I'd love to be able to work from anywhere in the
                world for short stints as I have family abroad and a partner who travels for work a lot. Office
                socials/parties are not really a plus for me. Alcohol and work especially are something I try to avoid
                due to past experiences and because I don't believe that intoxicating substances have a place in a
                workplace.
              </p>
              <h3 className="font-callout text-bright-turquoise-400 pt-4 text-xl">
                What's with all the animals and the rainbows?
              </h3>
              <p>
                I love animals. I love rainbows (I am queer after all). I love drawing. And, well I needed something so
                that this didn't just look like any other portfolio site. Love it or hate it, hopefully you'll remember
                it.
              </p>
            </div>
            <div className="mt-4 basis-1/5">
              <Image
                src={`/imgs/Colour_Guinea.png`}
                alt="Rainbow-coloured self drawn guinea pig face."
                width="200"
                height="200"
                className="animate-fade-up place-self-center"
              />
            </div>
          </div>
          <div className="relative pt-4">
            <div className="absolute -top-3 start-1/2">
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
