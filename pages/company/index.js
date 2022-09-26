import { Center, Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";
import styles from '../../styles/Company.module.css'

export default function comapny() {
    return (
        <>
            <Head>
                <title>会社概要|合同会社リバイブ(Revive.llc)</title>
            </Head>

            <motion.main
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
            >
                <section className={styles.kv}>
                    <h2>会社概要</h2>
                </section>

                <section className={styles.message}>
                    <div className={styles.wrap}>
                        <Flex className={styles.name}>
                            <h3
                            >
                                代表メッセージ<br/><br/>
                                熊野 拓人
                            </h3>

                            <Image src="/company/kumano.jpg" alt="熊野 拓人" width='32rem' height='auto'/>
                        </Flex>

                        <div className={styles.art01}>
                            <h3>
                                合言葉は「change the world」<br/>
                                あなたの力で世界を変えろ
                            </h3>

                            <p>
                                自分の仕事で、誰かの人生が変わる。<br/>
                                私が起業する前から大切にしている価値観です。<br/>
                                <br/>
                                生きていく中で他者との関係は<br/>
                                切っても切ることが出来ず、<br/>
                                自分の放った一言が、その人の人生を<br/>
                                大きく左右することが往々にしてあります。<br/>
                                <br/>
                                これは、仕事だけではなく、<br/>
                                社会生活全般に言える事ですが、<br/>
                                自分の行動に対してして責任が伴うという反面、<br/>
                                誰もが自分の行動で、その人の人生を<br/>
                                変えうる力を秘めていることを意味します。<br/>
                                <br/>
                                ここで言う「世界」というのは<br/>
                                地球という意味ではなく、<br/>
                                人それぞれが持っている人生観であったり、<br/>
                                アイデンティティであったりします。
                            </p>
                        </div>

                        <div className={styles.art02}>
                            <h3>
                                「自分の仕事が誰かに、<br/>
                                何かしらの影響を与えているのでれば、<br/>
                                どうせだったらでかいことしてみない？」
                            </h3>

                            <p>
                                これが私のいつも考えていることなのですが、<br/>
                                理由は単純で、そっちの方がオモシロイから。<br/>
                                <br/>
                                もっと自分の力を信じ、<br/>
                                もっと自分の魅力を社会に伝えていこう。<br/>
                                一人一人がそう思って行動に移したとき、<br/>
                                この世界はもっと良くなる。<br/>
                                そう考えています。
                            </p>
                        </div>

                        <Center className={styles.promise}>
                            <p
                            >
                                私達は、あなたが世界を変える為に<br/>
                                伴走者として共に走り続ける<br/>
                                企業であることを約束します。
                            </p>
                        </Center>
                    </div>

                    <div className={styles.wrap}>
                        <Center className={styles.name}>
                            <h3
                            >
                                代表メッセージ<br/>
                                宮尾 航平
                            </h3>

                            <Image src="/company/miyao.jpg" alt="宮尾 航平" width='32rem' height='auto'/>
                        </Center>

                        <div className={styles.art01}>
                            <h3>
                                「Restart」<br/>
                                走り出す準備は出来てるかい？
                            </h3>

                            <p>
                                人生の転機というのは、奇跡的に起こるように見えて、<br/>
                                実は必然的な物です。<br/>
                                <br/>
                                学生の時は決められたタイミングでる義のステップが<br/>
                                用意されていました。<br/>
                                <br/>
                                小学校6年通ったら、中学校3年間みたいに。<br/>
                                時間が来れば自動的に次のステップに進むことが出来ました。<br/>
                                <br/>
                                しかし大人になると、時間が来ても、<br/>
                                何かを変えようとしない限り、<br/>
                                何も変わらずにずっとそれが続いていきます。<br/>
                                <br/>
                                だから難しい。
                            </p>
                        </div>

                        <div className={styles.art02}>
                            <h3>
                                大切なのは、次の目的地を定め、<br/>
                                新しいスタートを切っていく事。
                            </h3>

                            <p>
                                大切なのは、次の目的地を定め、新しいスタートを切っていく事。<br/>
                                <br/>
                                人生の中で決断し、新しい道へ進んでいく。
                            </p>
                        </div>

                        <Center className={styles.promise}>
                            <p
                            >
                                私達の仕事がそんな人々の<br/>
                                きっかけになるもので在りたいと<br/>
                                思っています。
                            </p>
                        </Center>
                    </div>
                </section>

                <Flex className={styles.philosophy}>
                    <Center>
                        <h2
                        >企業理念</h2>

                        <p
                        >
                            誰もが粋がる<br/>
                            心躍る世界へ
                        </p>
                    </Center>

                    <Image src="/company/logo.svg" alt="企業理念" width='46rem' height='auto'/>
                </Flex>

                <Flex className={styles.motto}>
                    <Image src="/company/motto.jpg" alt="社訓" width='46rem' height='auto'/>

                    <Center>
                        <h2
                        >社訓</h2>

                        <p
                        >愛情  美学  勝利</p>
                    </Center>
                </Flex>

                <Center as="section" className={styles.company}>
                    <div className={styles.wrap}>
                        <h2>COMPANY</h2>

                        <Flex className={styles.content}>
                            <div className={styles.left}>
                                <Flex>
                                    <h3>事業所名</h3>
                                    <p>
                                        合同会社Revive<br/>
                                        （Revive.llc）
                                    </p>
                                </Flex>
                                <Flex>
                                    <h3>
                                        代表<br/>
                                        代表<br/>
                                        執行役員<br/>
                                    </h3>
                                    <p>
                                        熊野　拓人<br/>
                                        宮尾　航平<br/>
                                        川﨑　公一朗
                                    </p>
                                </Flex>
                                <Flex>
                                    <h3>設立</h3>
                                    <p>2021年5月28日</p>
                                </Flex>
                                <Flex>
                                    <h3>資本金</h3>
                                    <p>2,500,000円</p>
                                </Flex>
                                <Flex>
                                    <h3>代表番号</h3>
                                    <p>03-5829-4001</p>
                                </Flex>
                            </div>
                            <div className={styles.right}>
                                <Flex>
                                    <h3>所在地</h3>
                                    <p>
                                        〒104-0061<br/>
                                        東京都中央区<br/>
                                        東日本橋2-25-4<br/>
                                        第三シラカワビル7F
                                    </p>
                                </Flex>
                                <Flex>
                                    <h3>従業員数</h3>
                                    <p>60名</p>
                                </Flex>
                                <Flex>
                                    <h3>事業内容</h3>
                                    <p>
                                        人材業、営業代行<br/>
                                        SES、映像制作
                                    </p>
                                </Flex>
                                <Flex>
                                    <h3>取引銀行</h3>
                                    <p>みずほ銀行</p>
                                </Flex>
                            </div>
                        </Flex>
                    </div>
                </Center>

                <Center as="section" className={styles.access}>
                    <div className={styles.wrap}>
                        <h2>ACCESS</h2>
                        <Flex className={styles.content}>
                            <iframe className={styles.left} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.296887461473!2d139.78519651525906!3d35.69431108019128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018894cb40c6c17%3A0x34c067fc2b8631b1!2z44CSMTAzLTAwMDQg5p2x5Lqs6YO95Lit5aSu5Yy65p2x5pel5pys5qmL77yS5LiB55uu77yS77yV4oiS77yU!5e0!3m2!1sja!2sjp!4v1663650146212!5m2!1sja!2sjp" style={{border: 'none'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            <div className={styles.right}>
                                <Flex>
                                    <p>
                                        都営地下鉄 東銀座線<br/>
                                        馬喰横山駅A4出口
                                    </p>
                                    <p>徒歩7分</p>
                                </Flex>
                                <Flex>
                                    <p>
                                        都営地下鉄 浅草線<br/>
                                        東日本橋駅B3出口
                                    </p>
                                    <p>徒歩4分</p>
                                </Flex>
                                <Flex>
                                    <p>
                                        JR 総武線<br/>
                                        浅草橋駅A1出口
                                    </p>
                                    <p>徒歩6分</p>
                                </Flex>
                            </div>
                        </Flex>
                    </div>
                </Center>
            </motion.main>
        </>
    );
}