import Head from "next/head";
import { Center, Flex } from "@chakra-ui/react";
import { IoIosMan, IoIosBriefcase, IoIosArrowDropdown } from 'react-icons/io'
import { FaLaptopCode } from 'react-icons/fa'
import { IoMdPerson } from 'react-icons/io'
import { IconContext } from "react-icons";
import { RecruitData } from "../../components/RecruitData";
import { motion } from "framer-motion";
import React from "react";
import Slider from "../../components/Slider";
import Link from "next/link";
import styles from '../../styles/Recruit.module.css'

export default function recruit() {
    const settings = {
        dot: false,
        infinite: true,
        slidesToShow: 1,

    }

    return (
        <>
            <Head>
                <title>求人募集|合同会社リバイブ(Revive.llc)</title>
            </Head>

            <motion.main
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
            >
                <section className={styles.kv}>
                    <h2>求人募集</h2>

                    <Center className={styles.wrap}>
                        <h3
                        >
                            Reviveでは<br/>
                            共に働く仲間を<br/>
                            募集しています。
                        </h3>
                        <p className="pc_only"
                        >
                            キャリアプランやライフスタイルに合わせたお仕事をご選定し、<br/>
                            より良い生活へのご提案をします。<br/>
                            営業職や事務職、在宅案件など<br/>
                            未経験から可能な物も多数取り揃えていますので、<br/>
                            お気軽にご相談ください。
                        </p>
                    </Center>
                </section>

                <div className={styles.kv_txt}>
                    <p>
                        キャリアプランやライフスタイルに合わせたお仕事をご選定し、より良い生活へのご提案をします。<br/><br/>
                        営業職や事務職、在宅案件など未経験から可能な物も多数取り揃えていますので、お気軽にご相談ください。
                    </p>
                </div>

                <Center as="section" className={styles.about}>
                    <Slider/>
                    <Flex className={styles.wrap}>
                        <Center>
                            <IconContext.Provider value={{ size: '10rem', color: '#427CB9' }}>
                                <span>
                                    <IoIosMan/>
                                    <IoIosMan/>
                                </span>
                            </IconContext.Provider>
                            <h3>在籍メンバーについて</h3>
                            <p>現在、合計80名以上のスタッフが在籍しており業務に取り組んでおります。</p>
                            <p>Reviveでは20代30代の若手を中心に男女に関係なく一人ひとりの適正と向き合って最適な配置を行っております。</p>
                        </Center>

                        <Center>
                            <IconContext.Provider value={{ size: '10rem', color: '#427CB9' }}>
                                <span>
                                    <FaLaptopCode/>
                                </span>
                            </IconContext.Provider>
                            <h3>環境・言語など</h3>
                            <p>現場ではjavaやpythonを用いた作業を行う現場もあり、希望者は適性に応じて実際の現場にて豊かな経験を積む機会があります。そのための研修制度もReviveでは設けております。</p>
                        </Center>

                        <Center>
                            <IconContext.Provider value={{ size: '10rem', color: '#427CB9' }}>
                                <span>
                                    <IoIosBriefcase/>
                                </span>
                            </IconContext.Provider>
                            <h3>派遣先・営業職の種類</h3>
                            <p>コールセンター、決済アプリ営業、インフラ訪販、通信、営業、インサイドセールス、キッティング、 他</p>
                            <p>[1都3県（埼玉県、千葉県、東京都、神奈川県）、大阪、名古屋]</p>
                        </Center>
                    </Flex>
                </Center>

                <Center as="section" className={styles.example}>
                    {RecruitData.map((value, key) => {
                        return(
                            <Flex key={key} className={styles.wrap}>
                                <Center className={styles.left}>
                                    <IconContext.Provider value={{ size: '6rem', color: 'white' }}>
                                        <span>
                                            <IoMdPerson/>
                                        </span>
                                    </IconContext.Provider>
                                    <p>
                                        {value.name}<br/>
                                        {value.job}
                                    </p>
                                </Center>
                                <div className={styles.right}>
                                    <p>{value.descript01}</p>
                                    <p>{value.descript02}</p>
                                    <p>{value.descript03}</p>
                                </div>
                            </Flex>
                        )
                    })}
                    
                    <Link href='/contact' passHref>
                        <motion.a
                        whileHover={{ backgroundColor:'#0F5093', color: '#FFFF', boxShadow: 'none' }}
                        transition={{ duration: .3 }}
                        >
                            お問い合わせはこちら
                            <IoIosArrowDropdown/>
                        </motion.a>
                    </Link>
                </Center>
            </motion.main>
        </>
    );
}