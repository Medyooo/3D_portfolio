/* eslint-disable react/prop-types */
import {
    VerticalTimeline,
    VerticalTimelineElement
} from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css'

import { styles } from '../styles'
import { studies, studiesEn } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../constants/translations'

const StudiesCard = ({ study }) => {
    return (
        <VerticalTimelineElement
            style={{ borderColor: '#fff' }}
            contentStyle={{
                background: '#9F2808'

            }}
            contentArrowStyle={{ borderRight: '7px solid  #9F2808' }}
            date={study.date}
            iconStyle={{ background: study.iconBg }}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <img
                        src={study.icon}
                        alt={study.company_name}
                        className='w-[60%] h-[60%] object-contain'
                    />
                </div>
            }
        >
            <div>
                <h3 className='text-white text-[24px] font-bold'>{study.title}</h3>
                <p
                    className='text-white text-[16px] font-semibold'
                    style={{ margin: 0 }}
                >
                    {study.company_name}
                </p>
            </div>
            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {study.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className='text-white text-[14px] pl-1 tracking-wider'
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    )
}

const Studies = () => {
    const { language } = useLanguage()
    const studyList = language === 'en' ? studiesEn : studies
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>{t(language, 'studies.subtitle')}</p>
                <h2 className={`${styles.sectionHeadText} text-center`}>{t(language, 'studies.title')}</h2>
            </motion.div>

            <div className='mt-20 flex flex-col'>
                <VerticalTimeline>
                    {studyList.map((study, index) => (
                        <StudiesCard
                            key={`Studies-${index}`}
                            study={study}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    )
}

export default SectionWrapper(Studies, 'studies')
