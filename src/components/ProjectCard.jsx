/* eslint-disable react/prop-types */
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { github } from '../assets'
import { fadeIn } from '../utils/motion'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../constants/translations'

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link
}) => {
  const { language } = useLanguage()
  const hasLink = Boolean(source_code_link)

  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.3, 1.2)} className='h-full'>
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 120
        }}
        className='bg-[#9F2808] p-5 rounded-2xl sm:w-[360px] w-full h-full min-h-[min(480px,85vh)] sm:min-h-[480px] flex flex-col'
      >
        <div className='relative w-full h-[230px] flex-shrink-0'>
          {image
            ? (
              <img
                src={image}
                alt={name}
                className='w-full h-full object-cover rounded-2xl'
              />
              )
            : (
              <div className='w-full h-full rounded-2xl bg-primary flex items-center justify-center'>
                <span className='text-white font-bold text-[20px] text-center px-4'>
                  {name}
                </span>
              </div>
              )}

          {hasLink && (
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <a
                href={source_code_link}
                target='_blank'
                rel='noopener noreferrer'
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                aria-label={name ? `${t(language, 'viewSource')} — ${name}` : t(language, 'viewSource')}
              >
                <img
                  src={github}
                  alt=''
                  className='w-1/2 h-1/2 object-contain'
                  aria-hidden='true'
                />
              </a>
            </div>
          )}
        </div>

        <div className='mt-5 flex-shrink-0'>
          <h3 className='text-white font-bold text-[24px] line-clamp-2'>{name}</h3>
          <p className='mt-2 text-white text-[14px] line-clamp-3 min-h-[60px]'>{description}</p>
        </div>

        {Array.isArray(tags) && tags.length > 0 && (
          <div className='mt-4 flex flex-wrap gap-2 min-h-[52px]'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        )}
      </Tilt>
    </motion.div>
  )
}

export default ProjectCard

