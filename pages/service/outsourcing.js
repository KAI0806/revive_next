import Head from "next/head";
import { Center, Image, Flex } from "@chakra-ui/react";
import styles from '../../styles/Human.module.css'
import { OutSourcingData } from "../../components/OutSoucingData";
import { IconContext } from "react-icons";
import { FaBriefcase, FaLaptopCode, FaPaintBrush } from 'react-icons/fa'
import { MdAssignment } from 'react-icons/md'
import Special from "../../components/Special";
import { motion } from "framer-motion";

export default function OutSoucing() {
    return (
        <>
            <Head>
                <title>{OutSourcingData.title}|合同会社リバイブ(Revive.llc)</title>
            </Head>

            <motion.main className={styles.outsoucing}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
            >
                <Center as="section" className={styles.kv}>
                    <Center className={styles.wrap}>
                        <div>
                            <h2>{OutSourcingData.title}</h2>

                            <p>{OutSourcingData.comment}</p>
                        </div>

                        <Image className="pc_only" src={`${OutSourcingData.media}`} alt={OutSourcingData.title} width='50%' height='auto'/>
                    </Center>
                </Center>

                <Center as="section" className={styles.feature}>
                    <div className={styles.wrap}>
                        <h2>特徴</h2>

                        <Flex>
                            <p>{OutSourcingData.feature01}</p>
                            <p>{OutSourcingData.feature02}</p>
                        </Flex>
                    </div>
                </Center>

                <Center as="section" className={styles.about}>
                    <div className={styles.wrap}>
                        <h2>Reviveの転職支援</h2>

                        <Flex>
                            <p>{OutSourcingData.descriptopn01}</p>
                            <p>{OutSourcingData.descriptopn02}</p>
                        </Flex>
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