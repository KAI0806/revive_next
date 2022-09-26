import Head from "next/head";
import { Center, Image, Flex } from "@chakra-ui/react";
import styles from '../../styles/Media.module.css'
import { WebcreatorData } from "../../components/WebcreatorData";
import { IconContext } from "react-icons";
import { BsPersonFill } from 'react-icons/bs'
import { FaBriefcase, FaLaptopCode, FaPaintBrush, FaSearch, FaYenSign } from 'react-icons/fa'
import { MdAssignment, MdAccessTime } from 'react-icons/md'
import Special from "../../components/Special";
import { motion } from "framer-motion";

export default function moviecreator() {
    return (
        <>
            <Head>
                <title>{WebcreatorData.title}|合同会社リバイブ(Revive.llc)</title>
            </Head>

            <motion.main className={styles.webcreator}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
            >
                <Center as="section" className={styles.kv}>
                    <Center className={styles.wrap}>
                        <div>
                            <h2>{WebcreatorData.title}</h2>

                            <p>{WebcreatorData.comment}</p>
                        </div>

                        <Image className='pc_only' src={`${WebcreatorData.media}`} alt={WebcreatorData.title} width='50%' height='auto'/>
                    </Center>
                </Center>

                <Center as="section" className={styles.feature}>
                    <div className={styles.wrap}>
                        <h2>特徴</h2>
                        <Center className={styles.content}>
                            <Center>
                                <IconContext.Provider value={{ size: '6rem', color: '#0F5093' }}>
                                    <span>
                                        <FaSearch/>
                                    </span>
                                </IconContext.Provider>

                                <div>
                                    <h3>{WebcreatorData.featuretitle01}</h3>
                                    <p>{WebcreatorData.featuredescript01}</p>
                                </div>
                            </Center>

                            <Center>
                                <IconContext.Provider value={{ size: '6rem', color: '#0F5093' }}>
                                    <span>
                                        <FaYenSign/>
                                    </span>
                                </IconContext.Provider>

                                <div>
                                    <h3>{WebcreatorData.featuretitle02}</h3>
                                    <p>{WebcreatorData.featuredescript02}</p>
                                </div>
                            </Center>

                            <Center>
                                <IconContext.Provider value={{ size: '6rem', color: '#0F5093' }}>
                                    <span>
                                        <BsPersonFill/>
                                    </span>
                                </IconContext.Provider>

                                <div>
                                    <h3>{WebcreatorData.featuretitle03}</h3>
                                    <p>{WebcreatorData.featuredescript03}</p>
                                </div>
                            </Center>
                        </Center>
                    </div>
                </Center>

                <Center as="section" className={styles.pr}>
                    <Center className={styles.wrap}>
                        <div><Image src='/service/web.jpg' alt="企業PR" width='44.8rem' height='auto'/></div>
                        <Center className={styles.right}>
                            <h2>企業PR</h2>

                            <p>{WebcreatorData.pr}</p>
                        </Center>
                    </Center>
                </Center>

                <Center as="section" className={styles.works}>
                    <div className={styles.wrap}>
                        <h2>制作事例</h2>

                        <Center className={styles.content}>
                            <div className={styles.left}><Image src='/service/web.jpg' alt="企業PR" width='38rem' height='auto'/></div>
                            <div className={styles.right}>
                                <Flex>
                                    <IconContext.Provider value={{ size: '5rem', color: '#4F4F4F' }}>
                                        <span>
                                            <MdAccessTime/>
                                        </span>
                                    </IconContext.Provider>
                                    <div>
                                        <p>制作納期</p>
                                        <p>{WebcreatorData.date}</p>
                                    </div>
                                </Flex>
                                <Flex>
                                    <IconContext.Provider value={{ size: '2.8rem', color: '#4F4F4F' }}>
                                        <span>
                                            <FaYenSign/>
                                        </span>
                                    </IconContext.Provider>
                                    <div>
                                        <p>制作費用</p>
                                        <p>{WebcreatorData.cost}</p>
                                    </div>
                                </Flex>
                                <Flex>
                                    <IconContext.Provider value={{ size: '2.8rem', color: '#4F4F4F' }}>
                                        <span>
                                            <BsPersonFill/>
                                        </span>
                                    </IconContext.Provider>
                                    <div>
                                        <p>制作体制</p>
                                        <p>
                                            企画担当がヒアリングを<br/>
                                            行いながら作成いたします。
                                        </p>
                                    </div>
                                </Flex>
                            </div>
                        </Center>
                    </div>
                </Center>

                <Center className={styles.joblist}>
                    <p>様々な職種に対応しております。</p>
                    <Center>
                        <Center>
                            <IconContext.Provider value={{ size: '6rem' }}>
                                <FaBriefcase/>
                            </IconContext.Provider>
                            <p>営業</p>
                        </Center>
                        <Center>
                            <IconContext.Provider value={{ size: '6rem' }}>
                                <MdAssignment/>
                            </IconContext.Provider>
                            <p>一般事務</p>
                        </Center>
                        <Center>
                            <IconContext.Provider value={{ size: '6rem' }}>
                                <FaLaptopCode/>
                            </IconContext.Provider>
                            <p>エンジニア</p>
                        </Center>
                        <Center>
                            <IconContext.Provider value={{ size: '5.5rem' }}>
                                <FaPaintBrush/>
                            </IconContext.Provider>
                            <p>クリエイター</p>
                        </Center>
                        <p>…</p>
                    </Center>
                </Center>

                <Special/>
            </motion.main>
        </>
    );
}