import React from "react";

function Work() {
  return (
    <section name="work" className="w-full px-4 bg-[#161616] pb-24">
      <div className="max-w-[1000px] mx-auto w-full mb-8 mt-24">
        <div className="pb-2 mb-8">
          <h2 className="text-4xl font-bold inline border-b-4 text-gray-300 border-orange-700">
            Work Experience
          </h2>
        </div>
        {/* 1st Work Experince */}
        <div className="work-content-container">
          <article className="work-content ml-6 mb-8">
            <h3 className="work-heading text-2xl font-bold text-gray-300 mb-3">
              <span className="border-l-4 border-orange-700 pl-2 mb-1 block">
                Software Engineer
              </span>
              <span className="block text-sm pl-3">
                ( OOP Technologies | February 2024 - Present )
              </span>
            </h3>

            <ul className="text-1xl list-disc ml-6 max-w-3xl">
              <li>
                Developed the MERN application, dedicating 40 hours weekly for
                on-time project delivery with code quality.
              </li>
              <li>
                Resolved complex challenges proactively in a dynamic development
                setting.
              </li>
              <li>
                Skillfully combined creativity and technical acumen to deliver
                high-quality applications within specific timelines.
              </li>
              <li>
                Quickly addressed code issues to enhance application performance
                and functionality.
              </li>
              <li>
                Collaborated closely with UI/UX teams to translate designs into
                functional, visually appealing interfaces.
              </li>
            </ul>
          </article>
        </div>
        {/* 2nd Work Experience */}
        <div className="work-content-container">
          <article className="work-content ml-6 mb-8">
            <h3 className="work-heading text-2xl font-bold text-gray-300 mb-3">
              <span className="border-l-4 border-orange-700 pl-2 mb-1 block">
                Software Engineer - MERN Stack
              </span>
              <span className="block text-sm pl-3">
                ( 7 Skies Solutions | July 2021 - January 2024 )
              </span>
            </h3>

            <ul className="text-1xl list-disc ml-6 max-w-3xl">
              <li>
                Developed MERN stack applications, dedicating 40 hours weekly
                for on-time project delivery with code quality.
              </li>
              <li>
                Created responsive UIs using React, Next.js, and ensured
                pixel-perfect designs across devices.
              </li>
              <li>
                Practiced Test-Driven Development (TDD) for bug reduction and
                code robustness.
              </li>
              <li>
                Utilized AWS Amplify - React for streamlined cloud deployment of
                applications.
              </li>
              <li>
                Reviewed code collaboratively, providing valuable feedback and
                promoting a teamwork environment.
              </li>
              <li>
                Extended skills to React Native, contributing to cross-platform
                mobile app development.
              </li>
              <li>
                Translated design mockups into functional user interfaces in
                collaboration with UI/UX designers.
              </li>
              <li>
                Conducted thorough testing, debugging, and adopted new
                technologies for continuous enhancement.
              </li>
              <li>
                Resolved complex challenges proactively in a dynamic development
                setting.
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Work;
