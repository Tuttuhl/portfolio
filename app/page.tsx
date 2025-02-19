import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className="px-10 flex flex-col gap-10">
        <section id="about">
          <h1 className="text-xl font-bold">about me</h1>
          <p className="text-sm">
            graduated with B.S. in Computer Science from the University of
            Wyoming. software developer with 7 years working experience
          </p>
          <ol className="list-disc text-sm ps-10">
            <li>building and web forms in HTML, CSS, and vanilla JS</li>
            <li>
              building and maintaining websites in React utilizing the NextJS
              framework with Typescript
            </li>
            <li>
              building and maintaining controller and minimal APIs with .NET 8.0
            </li>
            <li>
              writing and maintaining SQL queries for API use and one-off use
            </li>
            <li>
              utilization of Git Feature Branch Workflow for version control
            </li>
            <li>utilization of JIRA for project tracking</li>
            <li>
              utilization of both GitHub and BitBucket for remote source control
            </li>
          </ol>
        </section>
        <section id="career">
          <h1 className="text-xl font-bold">career</h1>
          <div className="pb-5">
            <h2 className="text-lg font-bold">System Admin Technician</h2>
            <h3>Adams Bank & Trust</h3>
            <h4 className="italic">May 2020 - Present</h4>
            <p className="text-sm">
              Developed custom internal web forms and their document routing
              solutions using HTML, CSS, JavaScript, and Director Workflow.
              Implemented new API endpoints for getting and posting data to and
              from web forms in C# and .NET Core. Published updates and new
              pages to the customer-facing website using HTML, CSS, and
              JavaScript. Administered user security within the primary
              documentation application used by bank employees.
            </p>
          </div>
          <div className="py-5">
            <h2 className="text-lg font-bold">Customer Solutions Engineer</h2>
            <h3>Handel Information Technologies</h3>
            <h4 className="italic">January 2020 - May 2020</h4>
            <p className="text-sm">
              Implemented data conversions and system integrations with raw SQL
              queries.
            </p>
          </div>
          <div className="py-5">
            <h2 className="text-lg font-bold">Information Technology Intern</h2>
            <h3>Adams Bank & Trust</h3>
            <h4 className="italic">May 2019 - August 2019</h4>
            <p className="text-sm">
              Developed internal intranet web applications for displaying
              equipment and client data to employees using C# and .NET Core.
              Assisted in administration of user security rights within document
              storage application.
            </p>
          </div>
          <div className="py-5">
            <h2 className="text-lg font-bold">Development Intern</h2>
            <h3>RCS</h3>
            <h4 className="italic">June 2017 - August 2017</h4>
            <p className="text-sm">
              Implemented solutions for bugs and features within the Zetta
              product utilizing C# and .NET Core. Utilized the scrum framework
              from a developer perspective in order to prioritize tickets and
              explain previous work and roadblocks to colleagues.
            </p>
          </div>
          <div className="py-5">
            <h2 className="text-lg font-bold">Quality Assurance Tester</h2>
            <h3>RCS</h3>
            <h4 className="italic">May 2016 - August 2016</h4>
            <p className="text-sm">
              Completed manual bug, feature, and regression tests on flagship
              products Zetta and GSelector. Utilized the scrum framework from a
              quality assurance perspective in order to prioritize testing
              tasks. Wrote and edited clear and concise testing instructions for
              bug, feature, and regression tests.
            </p>
          </div>
        </section>
        <section id="projects">
          <h1 className="text-xl font-bold">projects</h1>
          <div className="pb-5">
            <h2 className="text-lg font-bold">Adams Bank & Trust Website</h2>
            <h3>
              <Link href="https://abtbank.com/" className="hover:underline">
                https://abtbank.com/
              </Link>
            </h3>
            <p className="text-sm">
              website built using NextJS, TailwindCSS, and Typescript. utilizes
              Prismic headless content management system.
            </p>
          </div>
          <div className="py-5">
            <h2 className="text-lg font-bold">MD Construction Website</h2>
            <h3>
              <Link
                href="https://mdconstruction.biz/"
                className="hover:underline"
              >
                https://mdconstruction.biz/
              </Link>
            </h3>
            <p className="text-sm">
              website built using NextJS, TailwindCSS, and Typescript. utilizes
              Prismic headless content management system. hosted on Netlify.
            </p>
          </div>
          <div className="py-5">
            <h2 className="text-lg font-bold">Willow & Oak Events Website</h2>
            <h3>
              <Link
                href="https://willowoakevents.com/"
                className="hover:underline"
              >
                https://willowoakevents.com/
              </Link>
            </h3>
            <p className="text-sm">
              website built using NextJS, TailwindCSS, Typescript, and Motion
              for animation. utilizes Prismic headless content management
              system. hosted on Netlify.
            </p>
          </div>
        </section>
        <section id="scripts"></section>
        <section id="contact"></section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </>
  )
}
