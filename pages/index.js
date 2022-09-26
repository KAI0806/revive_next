import { Center, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import { Image } from '@chakra-ui/react'
import Special from '../components/Special'
import styles from '../styles/Home.module.css'
import { IconContext } from 'react-icons'
import { IoIosArrowDropdown } from 'react-icons/io'
import Slick from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 15000,
    autoplaySpeed: 0,
    slidesToShow: 0.8,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false,
    cssEase: "linear",
  };


  return (
    <>
      <Head>
        <title>合同会社リバイブ(Revive.llc)|誰もが粋がる心躍る世界へ</title>
      </Head>

      <motion.main className='home'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      >
        <section className={styles.mv}>
          <Center className={styles.wrap}>
            <motion.h2 className='pc_only'
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ amount: 'all' }}
              transition={{ duration: .5, ease: 'easeOut' }}
              >CHANGE <span>THE WORLD</span></motion.h2>
          </Center>

          <Center className={styles.txt}>
            <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ amount: 'all' }}
            transition={{ duration: .5, ease: 'easeOut', delay: .5 }}
            >新しい世界を見に行こう</motion.p>
          </Center>

          <div className='sp_only'>
            <Slick {...settings}>
              <p>CHANGE THE WORLD</p>
              <p>CHANGE THE WORLD</p>
              <p>CHANGE THE WORLD</p>
            </Slick>
          </div>
        </section>

        <Special/>

        <section className={styles.about}>
          <Flex className={styles.wrap}>
            <div className={styles.left}>
              <p>
                「一度諦めた道を再び目指したい」<br/>
                「子供のころに描いた未来を実現させたい」<br/>
                人材事業を主軸に置くReviveは<br/>
                そんな思いを秘めた人の為に誕生しました。
              </p>

              <p
              >「Revive」＝「復活」</p>

              <p
              >
                1回目の挑戦よりも2回目の挑戦の方がつらい。<br/>
                失敗の痛みを知っているから。<br/>
                だから、私たちが居る。
              </p>

              <p
              >
                痛みを知っているけど挑戦するのは、<br/>
                それでも叶えたいと願うから。
              </p>

              <p
              >
                プロフェッショナルである私たちは、<br/>
                そんなあなたをサポートしたい。
              </p>
            </div>

            <div className={styles.right}>
              <Image src='/home/logo.svg' alt='ロゴ' width='37.2rem' height='auto'/>
            </div>
          </Flex>

          <Flex className={styles.link}>
            <p
            >さぁ、新しい世界を見に行こう。</p>

            <Link href='/company' passHref>
              <a>MORE</a>
            </Link>
          </Flex>

          <Center className={styles.sp_link}>
            <IconContext.Provider value={{ size: '1.6rem' }}>
              <Link href='/company' passHref>
                  <motion.a
                    whileHover={{ boxShadow: 'inset .3rem .3rem .6rem rgb(0,0,0)' }}>
                    MORE&nbsp;<IoIosArrowDropdown/>
                  </motion.a>
              </Link>
            </IconContext.Provider>
          </Center>
        </section>

        <section className={styles.service}>
          <h2
          >事業内容</h2>

          <Flex className={styles.wrap}>
            <div
            >
              <h3>HUMAN</h3>
              
              <ul>
                <li>転職支援事業</li>
                <li>アウトソーシング事業</li>
                <li>人材育成事業</li>
              </ul>
            </div>
            <Image src='/home/service01.png' alt='人材事業' width='auto' height='43.4rem'/>
          </Flex>

          <Flex className={styles.wrap}>
            <div
            >
              <h3>MEDIA</h3>

              <ul>
                <li>動画制作事業</li>
                <li>HP・LP制作事業</li>
              </ul>
            </div>
            <Image src='/home/service02.png' alt='メディア事業' width='auto' height='43.4rem'/>
          </Flex>

          <Center className={styles.link}>
            <IconContext.Provider value={{ size: '2.6rem' }}>
              <Link href='/service' passHref>
                  <motion.a
                    whileHover={{ boxShadow: 'inset .3rem .3rem .6rem rgb(0,0,0)' }}>
                    MORE&nbsp;<IoIosArrowDropdown/>
                  </motion.a>
              </Link>
            </IconContext.Provider>
          </Center>
        </section>

        {/* <Center as='section' className={styles.news}>
          <div className={styles.wrap}>
            <h2>NEWS・BLOG</h2>

            <div className={styles.content}>
              <Center>
                <p>2022.05.04</p>
                <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
              </Center>
              <Center>
                <p>2022.05.04</p>
                <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
              </Center>
              <Center>
                <p>2022.05.04</p>
                <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
              </Center>
            </div>

            <Center className={styles.link}>
              <IconContext.Provider value={{ size: '2.6rem' }}>
                <Link href='/' passHref>
                    <motion.a
                      whileHover={{ boxShadow: 'inset .3rem .3rem .6rem rgba(0,0,0,10%)' }}>
                      MORE&nbsp;<IoIosArrowDropdown/>
                    </motion.a>
                </Link>
              </IconContext.Provider>
            </Center>
          </div>
        </Center> */}

        <Center as='section' className={styles.recruit}>
          <Center className={styles.wrap}>
            <div className={styles.content}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ amount: 'all' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            >
              <h2>共に働く仲間を募集</h2>

              <p>
                実践の中で学びながら成長できる環境があるので、<br/>
                キャリアアップにつながります。
              </p>

              <p>
                営業、事務、エンジニア、在宅など未経験からの<br/>
                応募可能案件も多く取り扱っています。
              </p>

              <p>女性管理職の登用実績もあり、人間性を一番に考えた採用です。</p>

              <Center className={styles.link}>
                <IconContext.Provider value={{ size: '2.6rem' }}>
                  <Link href='/recruit' passHref>
                      <motion.a
                        whileHover={{ boxShadow: 'inset .3rem .3rem .6rem rgba(0,0,0,10%)' }}>
                        MORE&nbsp;<IoIosArrowDropdown/>
                      </motion.a>
                  </Link>
                </IconContext.Provider>
              </Center>
            </div>

            <Image className='pc_only' src='/home/recruit.jpg' alt='求人情報' width='47.68%' height='auto'/>
          </Center>
        </Center>
      </motion.main>
    </>
  )
}
