/* eslint-disable react/prop-types */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { textVariant, fadeIn } from '../utils/motion'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../constants/translations'
import { personalProjectsMeta } from '../constants'
import { HiChevronLeft, HiChevronRight, HiOutlineAcademicCap, HiOutlineSparkles } from 'react-icons/hi2'
import { LuLeaf, LuNewspaper, LuTrendingUp } from 'react-icons/lu'
import { FaGithub } from 'react-icons/fa'

const GALLERY_SWIPER_SPEED = 450
const GALLERY_AUTOPLAY_MS = 5200

const statusVisual = {
  in_progress: 'border border-white/35 bg-white/[0.08] text-[#FCC986] shadow-[0_0_0_1px_rgba(252,201,134,0.15)]',
  completed: 'border border-white/20 bg-white/[0.06] text-white/90',
  planned: 'border border-dashed border-white/25 bg-transparent text-white/55'
}

const SCREEN_FRAME_CLASS =
  'group/screen relative flex w-full cursor-zoom-in items-center justify-center overflow-hidden rounded-md bg-black/[0.08] ' +
  'h-[168px] min-h-[168px] sm:h-[200px] sm:min-h-[200px] md:h-[228px] md:min-h-[228px] lg:h-[248px] lg:min-h-[248px]'

const SCREEN_IMG_CLASS =
  'h-full w-full max-h-full max-w-full origin-center object-contain object-top rounded ' +
  'shadow-[0_8px_24px_-10px_rgba(0,0,0,0.4)] ' +
  'transition-transform duration-200 ease-out ' +
  'group-hover/screen:scale-[1.04] group-hover/screen:[will-change:transform] ' +
  'motion-reduce:transition-none motion-reduce:group-hover/screen:scale-100 motion-reduce:group-hover/screen:[will-change:auto]'

const carouselNavBtnClass =
  'pointer-events-auto absolute top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full ' +
  'border border-white/[0.12] bg-black/45 text-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.35)] backdrop-blur-md ' +
  'transition-[opacity,transform,background-color,border-color,color] duration-200 ' +
  'hover:border-[#FCC986]/40 hover:bg-black/60 hover:text-[#FCC986] ' +
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FCC986]/80 ' +
  'active:scale-[0.96] motion-reduce:transition-none ' +
  'max-md:opacity-90 md:opacity-0 md:group-hover/card:opacity-100 motion-reduce:opacity-100'

const ProjectMediaCarousel = ({
  projectId,
  projectName,
  shots,
  labels,
  preview,
  cardIndex,
  sizesAttr,
  tr,
  onSlideIndexChange,
  onSlideAreaClick
}) => {
  const manyShots = shots.length > 1
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  const modules = useMemo(
    () => (manyShots ? [Autoplay, EffectFade, Navigation, Pagination] : []),
    [manyShots]
  )

  const bindNavigationRefs = useCallback((swiper) => {
    if (!manyShots || !swiper.params.navigation || typeof swiper.params.navigation === 'boolean') return
    swiper.params.navigation.prevEl = prevRef.current
    swiper.params.navigation.nextEl = nextRef.current
  }, [manyShots])

  const initNavigation = useCallback((swiper) => {
    if (!manyShots) return
    swiper.navigation?.init()
    swiper.navigation?.update()
  }, [manyShots])

  const handleSwiperClick = useCallback(
    (swiper, event) => {
      if (
        event.target.closest('.swiper-pagination') ||
        event.target.closest('[data-carousel-nav]')
      ) {
        return
      }
      onSlideAreaClick(swiper.realIndex)
    },
    [onSlideAreaClick]
  )

  return (
    <div className='personal-project-swiper relative w-full'>
      {manyShots && (
        <>
          <button
            ref={prevRef}
            type='button'
            data-carousel-nav='prev'
            aria-label={tr.slidePrev}
            className={`${carouselNavBtnClass} left-1.5 sm:left-2`}
          >
            <HiChevronLeft className='h-5 w-5 -translate-x-px' aria-hidden />
          </button>
          <button
            ref={nextRef}
            type='button'
            data-carousel-nav='next'
            aria-label={tr.slideNext}
            className={`${carouselNavBtnClass} right-1.5 sm:right-2`}
          >
            <HiChevronRight className='h-5 w-5 translate-x-px' aria-hidden />
          </button>
        </>
      )}

      <Swiper
        className='relative z-[2] w-full cursor-zoom-in'
        modules={modules}
        slidesPerView={1}
        loop={manyShots}
        effect={manyShots ? 'fade' : undefined}
        fadeEffect={manyShots ? { crossFade: true } : undefined}
        speed={GALLERY_SWIPER_SPEED}
        autoplay={
          manyShots
            ? {
                delay: GALLERY_AUTOPLAY_MS,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }
            : false
        }
        pagination={
          manyShots
            ? { clickable: true, dynamicBullets: shots.length > 4 }
            : false
        }
        navigation={
          manyShots
            ? { prevEl: prevRef.current, nextEl: nextRef.current }
            : false
        }
        onBeforeInit={bindNavigationRefs}
        onSwiper={initNavigation}
        aria-label={`${tr.galleryLabel} — ${tr.clickToEnlarge}`}
        onSlideChange={(s) => onSlideIndexChange(s.realIndex)}
        onClick={handleSwiperClick}
      >
        {shots.map((src, i) => (
          <SwiperSlide key={`${projectId}-slide-${i}`} className='!flex'>
            <div className={`${SCREEN_FRAME_CLASS} px-1.5 py-1.5 sm:px-2 sm:py-2`}>
              <img
                src={src}
                alt={labels[i] ?? `${projectName} ${i + 1}`}
                width={preview ? preview.width : undefined}
                height={preview ? preview.height : undefined}
                className={SCREEN_IMG_CLASS}
                loading={cardIndex === 0 && i === 0 ? 'eager' : 'lazy'}
                decoding='async'
                draggable={false}
                sizes={sizesAttr}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

const ProjectCard = ({ project, index, tr }) => {
  const badgeLabel = tr.status[project.status] ?? project.status
  const badgeClass = statusVisual[project.status] ?? statusVisual.planned
  const [activeSlide, setActiveSlide] = useState(0)
  const [zoomOpen, setZoomOpen] = useState(false)

  const shots = useMemo(
    () => [project.image, ...(Array.isArray(project.gallery) ? project.gallery : [])],
    [project.image, project.gallery]
  )
  const labels = useMemo(() => {
    const g = Array.isArray(project.galleryAlts) ? project.galleryAlts : []
    return [project.imageAlt, ...g].filter(Boolean)
  }, [project.imageAlt, project.galleryAlts])

  const preview =
    project.preview && typeof project.preview.width === 'number' && typeof project.preview.height === 'number'
      ? project.preview
      : null

  const isGithub = (project.link ?? '').toLowerCase().includes('github.com')
  const sizesAttr = '(max-width: 640px) 92vw, (max-width: 1024px) 44vw, min(480px, 42vw)'

  const openZoomAt = useCallback((slideIndex) => {
    setActiveSlide(slideIndex)
    setZoomOpen(true)
  }, [])

  useEffect(() => {
    if (!zoomOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') setZoomOpen(false)
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [zoomOpen])

  const zoomSrc = shots[activeSlide] ?? project.image
  const zoomAlt = labels[activeSlide] ?? project.imageAlt ?? project.name
  const zoomSizes = '(max-width: 640px) 96vw, (max-width: 1024px) 92vw, min(1600px, 90vw)'

  return (
    <motion.article
      variants={fadeIn('up', 'spring', index * 0.12, 0.55)}
      className='group/card relative flex flex-col overflow-hidden rounded-2xl
                 border border-white/[0.09] bg-white/[0.03] shadow-[0_12px_40px_-18px_rgba(0,0,0,0.4)]
                 backdrop-blur-sm transition-[border-color,box-shadow] duration-200
                 hover:border-white/[0.14] hover:shadow-[0_16px_44px_-14px_rgba(0,0,0,0.48)]'
    >
      <div className='flex flex-wrap items-start justify-between gap-2.5 px-4 pt-4 sm:px-5 sm:pt-5'>
        <div className='flex min-w-0 flex-1 items-start gap-2.5'>
          <span
            className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-[#FCC986] sm:h-10 sm:w-10'
            aria-hidden
          >
            {project.icon === 'trading'
              ? <LuTrendingUp className='h-[1.05rem] w-[1.05rem] sm:h-5 sm:w-5' />
              : project.icon === 'secours'
                ? <HiOutlineAcademicCap className='h-[1.05rem] w-[1.05rem] sm:h-5 sm:w-5' />
                : project.icon === 'veille'
                  ? <LuNewspaper className='h-[1.05rem] w-[1.05rem] sm:h-5 sm:w-5' />
                  : project.icon === 'ecosort'
                    ? <LuLeaf className='h-[1.05rem] w-[1.05rem] sm:h-5 sm:w-5' />
                    : <HiOutlineSparkles className='h-[1.05rem] w-[1.05rem] sm:h-5 sm:w-5' />}
          </span>
          <div className='min-w-0'>
            <div className='flex flex-wrap items-center gap-x-2 gap-y-1.5'>
              <h3 className='text-lg font-semibold tracking-tight text-white sm:text-xl'>
                {project.name}
              </h3>
              {(project.category ?? '').trim() !== '' && (
                <span
                  className='shrink-0 rounded-md border border-[#FCC986]/35 bg-[#FCC986]/[0.1] px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#FCC986]/95'
                  title={`${tr.categoryLabel}: ${project.category}`}
                  aria-label={`${tr.categoryLabel}: ${project.category}`}
                >
                  {project.category}
                </span>
              )}
            </div>
          </div>
        </div>
        <span
          className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${badgeClass}`}
        >
          {project.status === 'in_progress' && (
            <span className='relative flex h-2 w-2' aria-hidden>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FC6735] opacity-60 motion-reduce:hidden' />
              <span className='relative inline-flex h-2 w-2 rounded-full bg-[#FC6735]' />
            </span>
          )}
          {badgeLabel}
        </span>
      </div>

      <div className='mt-4 px-3 sm:px-4'>
        <div
          className='relative overflow-hidden rounded-xl bg-gradient-to-b from-white/[0.05] to-white/[0.015]
                     pb-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]'
        >
          <div
            className='pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_65%_40%_at_50%_0%,rgba(252,201,134,0.05),transparent_50%)]'
            aria-hidden
          />
          <ProjectMediaCarousel
            projectId={project.id}
            projectName={project.name}
            shots={shots}
            labels={labels}
            preview={preview}
            cardIndex={index}
            sizesAttr={sizesAttr}
            tr={tr}
            onSlideIndexChange={setActiveSlide}
            onSlideAreaClick={openZoomAt}
          />
        </div>
      </div>

      <div className='flex flex-col gap-3.5 px-4 py-4 sm:gap-4 sm:px-5 sm:py-5'>
        <p className='text-[13px] leading-relaxed text-white/72 sm:text-sm'>
          {project.description}
        </p>

        <div>
          <p className='mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/38'>
            {tr.stackLabel}
          </p>
          <ul className='flex flex-wrap gap-1.5' aria-label={tr.stackLabel}>
            {project.stack.map((tech) => (
              <li
                key={tech}
                className='rounded-md border border-white/[0.1] bg-black/15 px-2 py-0.5 text-[11px] font-medium text-primary sm:text-xs'
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {(project.link ?? '').trim() !== '' && (
          <a
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex w-fit items-center gap-2 text-[13px] font-semibold text-primary underline-offset-4
                       transition-colors hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-sm'
          >
            {isGithub && <FaGithub className='h-4 w-4 shrink-0 sm:h-[1.125rem] sm:w-[1.125rem]' aria-hidden />}
            {tr.viewProject}
            {!isGithub && <span aria-hidden>→</span>}
          </a>
        )}
      </div>

      {typeof document !== 'undefined' && zoomOpen && createPortal(
        <motion.div
          key={`zoom-${project.id}`}
          className='fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6'
          role='dialog'
          aria-modal='true'
          aria-label={tr.closeImageZoom}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.18 }}
        >
          <button
            type='button'
            className='absolute inset-0 bg-black/85 backdrop-blur-sm'
            aria-label={tr.closeImageZoom}
            onClick={() => setZoomOpen(false)}
          />
          <div className='relative z-[1] flex max-h-[min(92vh,1080px)] w-full max-w-[min(96vw,1600px)] flex-col items-center'>
            <button
              type='button'
              onClick={() => setZoomOpen(false)}
              className='mb-3 inline-flex h-9 min-w-[2.25rem] items-center justify-center self-end rounded-lg border border-white/20 bg-white/10 px-3 text-lg font-light leading-none text-white transition hover:bg-white/20'
              aria-label={tr.closeImageZoom}
            >
              ×
            </button>
            <img
              src={zoomSrc}
              alt={zoomAlt}
              width={preview ? preview.width : undefined}
              height={preview ? preview.height : undefined}
              className='max-h-[min(86vh,1000px)] w-auto max-w-full select-none rounded-lg object-contain shadow-2xl'
              draggable={false}
              decoding='async'
              sizes={zoomSizes}
            />
          </div>
        </motion.div>,
        document.body
      )}
    </motion.article>
  )
}

const PersonalProjects = () => {
  const { language } = useLanguage()
  const tr = translations[language].personalProjects

  const projects = personalProjectsMeta.map((meta) => {
    const copy = tr.itemsById?.[meta.id] ?? {}
    return { ...meta, ...copy }
  })

  return (
    <>
      <motion.div variants={textVariant()} className='flex w-full flex-col items-center text-center'>
        <p className={styles.sectionSubText}>{tr.subtitle}</p>
        <h2 className={styles.sectionHeadText}>{tr.title}</h2>
      </motion.div>

      <div className='mx-auto mt-12 grid w-full max-w-6xl grid-cols-1 gap-7 sm:gap-8 lg:grid-cols-2 lg:gap-6'>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} tr={tr} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(PersonalProjects, 'projects')
