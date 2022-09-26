import { Image, Center, Flex } from "@chakra-ui/react";
import Head from "next/head";
import styles from '../../styles/Interview.module.css'
import { motion } from "framer-motion";

export default function interview() {
    return (
        <>
            <Head>
                <title>スペシャル対談|合同会社リバイブ(Revive.llc)</title>
            </Head>

            <motion.main
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
            >
                <Center className={styles.kv}>
                    <div><iframe width="100%" height="100%" src="https://www.youtube.com/embed/unpEwEOlCw0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>

                    <div className="sp_only">
                        <h2>INTERVIEW　<span>熊野拓人×伊藤愛莉</span></h2>
                        <h3>「会社経営の想いを語る」</h3>
                    </div>
                </Center>

                <section className={styles.interview}>
                    <Flex className={styles.wrap}>
                        <span>
                            <Image src="/interview/interview01.jpg" alt="企業理念について" width='50.5rem' height='auto'/>
                        </span>
                        <div>
                            <h3>【企業理念について】</h3>
                            <p>
                                伊藤】この会社の企業理念ってどういう感じなんですか？<br/>
                                <br/>
                                <span>熊野】「誰もが粋がる心躍る世界へ」ってのを掲げてるんですけど、自分への自信で満ち溢れてる大人って僕はすっごくかっこいいと思うんですよね。</span><br/>
                                <br/>
                                伊藤】　ほぉ～　確かに<br/>
                                <br/>
                                <span>熊野】日本て割と謙遜したりする文化があって、もちろんそれが必要なときもあるんだろけど、そうじゃなくてもっと、「自分はこれで生きてるんだ！」って言える何かがある人って僕は素敵だと思うんですよね。</span><br/>
                                <br/>
                                伊藤】あぁ～、確かにそれ言える人少ないですよね。<br/>
                                基本的に褒められても、「いやいや、そんな～」みたいなのが美徳って言うかそんな感じのところはありますよね。<br/>
                                <br/>
                                <span>熊野】そうそう。<br/>
                                でも、そうじゃなくて、もっと自信にあふれてる人で溢れたら、この成果はもっと良くなると思うんです。<br/>
                                だから、そういう人を増やしていこうよ。そういう世界にして行こうよってのが僕のかかげてる企業理念ですね。<br/>
                                </span>
                                <br/>
                                伊藤】なるほど～<br/>
                            </p>
                        </div>
                    </Flex>

                    <Flex className={styles.wrap}>
                        <span>
                            <Image src="/interview/interview02.jpg" alt="会社経営で大切にしてる事" width='50.5rem' height='auto'/>
                        </span>
                        <div>
                            <h3>【会社経営で大切にしてる事】</h3>
                            <p>
                                伊藤】熊野さんの中で、会社経営をして行く上で大切にしてる事ってあるんですか？<br/>
                                <br/>
                                <span>熊野】会社経営って言うか、全部に言える事なんだけど「義理と人情」ですかね。<br/>
                                人から何かしてもらったり、つらい時に何かしてもらったら、必ず何かしらの形で返すのが筋だと思うし、そういう姿勢が信頼につながっていくんだと思います。<br/>
                                そういう信頼を積み重ねていくのがやっぱり大事かなって思いますね。</span><br/>
                                <br/>
                                仕事ってやっぱり人と人だと思ってるので、クオリティが良い事はもちろんなんだけど、それ以上に人として一緒に何かできるかなってのは結構大事だと思います。<br/>
                                <br/>
                                伊藤】あぁ～、確かに！<br/>
                                なんか、お金だけの関係だと先が見えちゃうというか、終わりがある感じがしますけど、心が通っていれば、ずっと一緒に何かできそうですよね！<br/>
                                <br/>
                                <span>熊野】そうそう！<br/>
                                だから、長期的に関係築ける人と仕事していきたいと思ってるんですけど、これってお互いに思ってないとできないことだからね(笑)</span><br/>
                                <br/>
                                伊藤】確かに！<br/>
                                お互いが思い会えてる状態で仕事で来たらベストですよね！<br/>
                                <br/>
                                <span>熊野】そう！<br/>
                                よく、「仕事は100％のクオリティでこなしてくれるんだけど、人間性がちょっと。。。」って人もいるんだけど、これだとやっぱ、「一緒に何かをやって行こう！」とはならない。やっぱり人として信用できる人とじゃないと、一緒に何かやるのは難しいから、そういった意味でも義理を通すとか、相手を敬う人情は大事にしてますね。</span><br/>
                            </p>
                        </div>
                    </Flex>

                    <Flex className={styles.wrap}>
                        <span>
                            <Image src="/interview/interview03.jpg" alt="会社への想い" width='50.5rem' height='auto'/>
                        </span>
                        <div>
                            <h3>【会社への想い】</h3>
                            <p>
                                伊藤】動画の事業はなんで始めたんですか？<br/>
                                <br/>
                                <span>熊野】これはもう、より深い部分まで伝える為ですね！感情が揺さぶられて何かを決める時ってあると思うんだけど、それって文字とか画像だけだと難しいんですよ。<br/>
                                <br/>
                                例えば気になる事ご飯に行くときにグルメサイトとか結構見るんだけど、あれだとイマイチよくわかんないのですよ。</span><br/>
                                <br/>
                                伊藤】あぁ～、確かに！<br/>
                                写真じゃお店の雰囲気とか、店員さんどんな感じとかわかんないですもんね！<br/>
                                それはあるかも。<br/>
                                <br/>
                                <span>熊野】求人とか打つ時もそうで、僕らみたいなこれからの企業が、給料とか条件面で広告打っても人って集まってこないんですよ。どこで勝負するかってなったら、もう人間性だったり、会社の雰囲気だったりで、そういうのを伝える為にって言うのが、この事業の本筋ですね！</span>
                            </p>
                        </div>
                    </Flex>

                    <Flex className={styles.wrap}>
                        <span>
                            <Image src="/interview/interview04.jpg" alt="今後の展望について" width='50.5rem' height='auto'/>
                        </span>
                        <div>
                            <h3>【今後の展望について】</h3>
                            <p>
                                伊藤】今後の展望とかそういうのあるんですか？<br/>
                                <br/>
                                <span>熊野】僕の中で、会社ってお祭りみたいなものだと思ってて、単純にお金稼ぎましょうっていうより、もっと活気に満ちたものだと思ってるんですよ！(笑)</span><br/>
                                <br/>
                                伊藤】みんなでワッショイしましょう的なね(笑)<br/>
                                そしたら、「熊野さん！これやりたいです！」みたいな提案とかもありなんですか？<br/>
                                <br/>
                                <span>熊野】あ、全然有りだと思う！<br/>
                                むしろそうしていきたいから、勢いのある子はどんどん雇っていくし、もっと面白い事業とかを展開して行きたいですね！<br/>
                                その中で、どこまでこの世界に自分たちの爪痕を残せるのか？ってのは結構僕の中では思ってるところですね！</span><br/>
                                <br/>
                                伊藤】なるほど～
                            </p>
                        </div>
                    </Flex>

                    <Flex className={styles.wrap}>
                        <span>
                            <Image src="/interview/interview05.jpg" alt="求めてる人物とは" width='50.5rem' height='auto'/>
                        </span>
                        <div>
                            <h3>【求めてる人物とは】</h3>
                            <p>
                                伊藤】そしたら、熊野さんの求めてる人ってどんな人なんですか？<br/>
                                具田的に聞いてみたいです！<br/>
                                <br/>
                                <span>熊野】僕の好きな人は、自分の世界観を持ってる人ですかね！ワールドある人。<br/>
                                言ってしまったら個性の強い人なんだけど、そういう人の方が扱いづらいかもしれないけど、そういう人の方がオモシロイ。</span><br/>
                                <br/>
                                経験とか知識の部分は後から付けたらよいので、正直どうでも良くて、それよりも自分の軸を持ててるかって部分の方が大きいですね！<br/>
                                だから僕の理想で言うと博物館ですね！<br/>
                                <br/>
                                伊藤】え、熊野ミュージアムってことですか？<br/>
                                <br/>
                                <span>熊野】そうですね！いろんな人がいて、どの人も魅力的って環境を作っていきたいと思いますね！</span>
                            </p>
                        </div>
                    </Flex>
                </section>
            </motion.main>
        </>
    );
}