import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I use to build</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <h3 className="text-white text-[14px] font-bold text-center">
              {technology.name}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, 'tech');
