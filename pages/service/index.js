import Head from "next/head";
import styles from '../../styles/Service.module.css'
import { Center, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function index() {
    return (
        <>
            <Head>
                <title>事業内容|合同会社リバイブ(Revive.llc)</title>
            </Head>

            <motion.main
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <section className={styles.kv}>
                    <Center>
                        <h2>事業内容</h2>
                    </Center>
                </section>

                <section className={styles.human}>
                    <div className={styles.title}>
                        <h2>HUMAN</h2>
                    </div>

                    <Center className={styles.wrap}>
                        <Center className={styles.content}>
                            <Center>
                                <h3
                                >
                                    転職支援事業
                                </h3>
                                <p
                                >
                                    仕事探しの際の面談から<br/>
                                    ライフプランの作成<br/>
                                    お仕事の提案までサポートいたします。 
                                </p>

                                <Link href='/service/jobchange' passHref>
                                    <motion.a
                                        whileHover={{ backgroundColor: 'white', color: '#409FE1' }}>
                                        もっと詳しく見る
                                    </motion.a>
                                </Link>
                            </Center>

                            <Image className="pc_only" src="/service/service01.jpg" alt="転職支援事業" width='50%' height='auto'/>
                        </Center>
                    </Center>

                    <Center className={styles.wrap}>
                        <Center className={styles.content}>
                            <Center>
                                <h3
                                >
                                    アウトソーシング事業
                                </h3>
                                <p
                                >
                                    Reviveでは業務委託の形で<br/>
                                    業務の一部を委託できる<br/>
                                    個人パートナー様を募集しております。
                                </p>

                                <Link href='/service/outsourcing' passHref>
                                    <motion.a
                                        whileHover={{ backgroundColor: 'white', color: '#409FE1' }}>
                                        もっと詳しく見る
                                    </motion.a>
                                </Link>
                            </Center>

                            <Image className="pc_only" src="/service/service02.jpg" alt="アウトソーシング事業" width='50%' height='auto'/>
                        </Center>
                    </Center>

                    <Center className={styles.wrap}>
                        <Center className={styles.content}>
                            <Center>
                                <h3
                                >
                                    人材育成事業
                                </h3>
                                <p
                                >
                                    Reviveでは未経験からでも活躍できる<br/>
                                    クリエイターや営業スタッフの<br/>
                                    育成研修を積極的に行っております。 
                                </p>

                                <Link href='/service/resourcedev' passHref>
                                    <motion.a
                                        whileHover={{ backgroundColor: 'white', color: '#409FE1' }}>
                                        もっと詳しく見る
                                    </motion.a>
                                </Link>
                            </Center>

                            <Image className="pc_only" src="/service/service03.jpg" alt="人材育成事業" width='50%' height='auto'/>
                        </Center>
                    </Center>
                </section>

                <section className={styles.media}>
                    <div className={styles.title}>
                        <h2>MEDIA</h2>
                    </div>

                    <Center className={styles.wrap}>
                        <Center className={styles.content}>
                            <Center>
                                <h3 
                                >
                                    動画制作事業
                                </h3>
                                <p
                                >
                                    企業PRやインタビュー動画など<br/>
                                    動画制作を通じて会社の魅力を<br/>
                                    多くの人に届けます。 
                                </p>

                                <Link href='/service/moviecreator' passHref>
                                    <motion.a
                                        whileHover={{ backgroundColor: 'white', color: '#409FE1' }}>
                                        もっと詳しく見る
                                    </motion.a>
                                </Link>
                            </Center>

                            <Image className="pc_only" src="/service/service04.jpg" alt="動画制作事業" width='50%' height='auto'/>
                        </Center>
                    </Center>

                    <Center className={styles.wrap}>
                        <Center className={styles.content}>
                            <Center>
                                <h3
                                >
                                    HP・LP制作事業
                                </h3>
                                <p
                                >
                                    現代において必須となりつつある<br/>
                                    WEBサイトでの販促広告。<br/>
                                    Reviveが貴社の活動をサポートいたします。 
                                </p>

                                <Link href='/service/webcreator' passHref>
                                    <motion.a
                                        whileHover={{ backgroundColor: 'white', color: '#409FE1' }}>
                                        もっと詳しく見る
                                    </motion.a>
                                </Link>
                            </Center>

                            <Image className="pc_only" src="/service/service05.jpg" alt="HP・LP制作事業" width='50%' height='auto'/>
                        </Center>
                    </Center>
                </section>
            </motion.main>
        </>
    );
}