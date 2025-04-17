import styles from './About.module.css';
import image1 from '../public/image1.jpeg';
import portrait from '../public/portrait.jpg';

const galleryItems = [
  { src: image1, caption: 'Piano for fun!' },
];

const About = () => {
  return (
    <div className={styles.aboutPage}>
      {/* top section */}
      <section className={styles.introSection}>
        <img
          src= {portrait}
          alt="imagine pic here"
          className={styles.portrait}
        />
        <div className={styles.bio}>
          <h2>A little bit about me:</h2>
          <p>
            I am an Electrical & Computer Engineer interested in building scalable infrastructure for machine learning and networking. A lot of my expertise lies with object-oriented programming (Java, C++), and also lower-level embedded systems work with RPis and FPGAs (C, Python, Verilog). By extension, I have worked on lots of projects in both of these domains for companies like Google and AWS. As my work is designed for scalability, a lot of the code I write is heavily optimized and readable to allow for future development and improvements. Feel free to check out my public-facing work on my Github!
          </p>
        </div>
      </section>

      {/* gallery section */}
      <section className={styles.gallerySection}>
        <p className={styles.captionNote}>
          Will be adding more pictures over time!
        </p>
        <div className={styles.galleryGrid}>
          {galleryItems.map((item, i) => (
            <div key={i} className={styles.galleryItem}>
              <img src={item.src} alt={`Gallery item ${i + 1}`} />
              <p className={styles.caption}>{item.caption}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
