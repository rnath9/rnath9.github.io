import styles from './Projects.module.css';

const projects = [
  {
    category: 'Functional Programming | OCaml',
    title: 'Burger Clicker',
    description: 'In this project, I collaborated with a group of 3 to create an OCaml game called Burger Clicker. We followed a functional programming paradigm while also creating a fully functional game with a interactable GUI. A lot of my work focused on making the GUI smooth, such as adding animations for when users hover over buttons or icons, and making sure our animations occurred smoothly and efficiently so that our code could maintain 30 to 60 frames per second.',
    link: 'https://github.com/rnath9/burger-clicker',
  },
  {
    category: 'Embedded Systems | Python',
    title: 'Mungo',
    description: 'In this project, I collaborated with a group of 3 to design a functional voice assistant called Mungo. Mungo ran fully on a 4GB RAM RPi, but also involved two ML models (a voice recognition model and a text-to-speech model), which meant that a lot of my implementation work involved heavily optimizing our code with multi-threaded solutions, especially given that Mungo had many different capabilities that were supposed to be able to execute at once. For example, Mungo had an accelerometer that could detect whether it was moving at all times, which could trigger another thread to play the sounds of Mungo screaming, all while still listening for a user’s voice and also playing music or speaking. ',
    link: 'https://github.com/rnath9/5725-assistant'
  }
];

const Projects = () => {
  return (
    <div className={styles.container}>
      {projects.map((proj, idx) => (
        <div key={idx} className={styles.card}>
          <p className={styles.category}>{proj.category}</p>
          <h2 className={styles.title}>{proj.title}</h2>
          <p className={styles.description}>{proj.description}</p>
          <a className={styles.link} href={proj.link}>
            Check out the Git Repo! <span className={styles.arrow}>→</span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
