import React from "react";
import Work from "../Components/Work";
import { logos } from "../Details";
import { workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className=" container mx-auto max-width pt-10 pb-20 ">
      <img className="h-20 mx-auto mb-10" src={logos.logo} alt="logo" />
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className="text-content pt-8 lg:max-w-3xl">
        Hi my name is 
        
        <span className="text-gradient font-medium"> MOHAMMAD FATTACHUL 'ALIM</span> Commonly called or perhaps known on social media as
        <span className="text-gradient font-medium"> Mofttach</span>
          . I am currently Informatics student at Universitas Nahdlatul Ulama Yogyakarta
        </p>
        <p className="text-content pt-3 lg:max-w-3xl">
        In high school, I studied various fields in Vocational High School with a major in Computer and Network Engineering, including Web Development, Networking, Cyber Security, and IoT. However, upon entering university, I became particularly interested in 
        <span className="text-gradient font-medium"> AI and Machine Learning.</span>
        </p>
        <p className="text-content pt-3 pb-8 lg:max-w-3xl">
I'm always excited and happy to connect with someone. What's more, we can learn together, so if you want to connect with me, I'm very open. You can visit my social media or you can email me.
        </p>


      </section>
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Work Experience
        </h1>
        {React.Children.toArray(
          workDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;
