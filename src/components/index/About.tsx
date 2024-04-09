import AboutCard from "@/components/AboutCard";
import { Tech } from "../../../typings";
import { motion } from "framer-motion";

export default function About() {

  let frontendTech: Tech[] = [
    { title: "HTML", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" /> },
    { title: "CSS", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" /> },
    { title: "React", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /> },
    { title: "NextJS", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" /> }
  ]

  let backendTech: Tech[] = [
    { title: "JavaScript", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" /> },
    { title: "TypeScript", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" /> },
    { title: "NodeJS", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" /> },
    { title: "MongoDB", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" /> },
  ]

  let otherTech: Tech[] = [
    { title: "Git", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" /> },
    { title: "Github", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /> },
    { title: "Github Desktop", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.nest.rip/uploads/261f733a-3d7c-41ce-a328-0f45a45be9e3.svg" /> },
    { title: "Yarn", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.nest.rip/uploads/2f9edfee-601c-4fae-be0d-2611596c35cc.svg" /> },
    { title: "Visual Studio Code", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" /> },
    { title: "Postman", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.nest.rip/uploads/0dfe6102-38dd-4a7c-9c8f-052a9cdc2b11.svg" /> },
    { title: "Cloudflare", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/me2uv8xk95n010sdwz.png" /> },
    { title: "Google Cloud", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.nest.rip/uploads/c530c3c5-411a-4f1b-ab5b-b244d18c48d0.svg" /> },
    { title: "Namecheap", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.nest.rip/uploads/9f8af5a4-941a-46c6-ad72-62f3287fa860.svg" /> },
    { title: "Linux", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" /> },
  ]

  return (
    <>
      <section id='about' className="max-w-4xl w-full flex flex-col mx-auto">
        <motion.h1
          className="font-leaguespartan text-center font-bold text-5xl text-text mt-16"
          initial={{ transform: 'translateY(-30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
          viewport={{ amount: 0.1, once: true }}
        >
          About Me
        </motion.h1>
        <ul className="grid grid-cols-2 gap-4 mt-4">
        
          <AboutCard
            title="Frontend"
            description="I have about 6 months' worth of experience in frontend development; it's not something I am keen on."
            tech={frontendTech}
            direction="left"
            span={1}
            delay={0.15}
            gradient="bg-gradient-to-br"
          />
          <AboutCard
            title="Backend"
            description="I have Alot of expriance in backend development and API's. I love to know how and why things work ans see behind the scenes :)"
            tech={backendTech}
            direction="right"
            span={1}
            delay={0.2}
            gradient="bg-gradient-to-tl"
          />
          <AboutCard
            title="Other Technologies"
            description="When it comes to the development process, I like to use lots of diffrent tools and software to help me."
            tech={otherTech}
            direction="bottom"
            span={2}
            delay={0.1}
            gradient="bg-gradient-to-t"
          />
        </ul>
      </section>
    </>
  );
}
