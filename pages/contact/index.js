import Head from "next/head";
import styles from '../../styles/Contact.module.css'
import { Center } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function contact() {
    return (
        <>
            <Head>
                <title>お問合せ|合同会社リバイブ(Revive.llc)</title>
            </Head>

            <motion.main
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
            >
                <section className={styles.kv}>
                    <h2>コンタクト</h2>
                </section>

                <Center as="section" className={styles.contact}>
                    <form id={styles.wrap} className="formrun" action="https://form.run/api/v1/r/s4ewp0h47tb25f6hgipvw1h2" method="post">
                        <div>
                            <label>会社名</label>
                            <input name="会社名" type="text" placeholder="会社名"/>
                        </div>

                        <div>
                            <label>お名前　<span className={styles.must}>必須</span></label>
                            <input name="お名前" type="text" placeholder="お名前" data-formrun-required/>
                        </div>

                        <div>
                            <label>電話番号　<span className={styles.must}>必須</span></label>
                            <input name="電話番号" type="text" data-formrun-type="tel" placeholder="08012345678" data-formrun-required/>
                        </div>

                        <div>
                            <label>メールアドレス　<span className={styles.must}>必須</span></label>
                            <input name="メールアドレス" type="text" data-formrun-type="email" placeholder="example@mail.com" data-formrun-required/>
                        </div>

                        <fieldset>
                            <p>お問い合わせ種別　<span className={styles.must}>必須</span></p>
                            <div>
                                <label className="form-check-label form-check-inline">
                                    <input className="form-check-input" type="radio" name="お問い合わせ種別" value="人材" data-formrun-required/>
                                    人材
                                </label>
                                <label className="form-check-label form-check-inline">
                                    <input className="form-check-input" type="radio" name="お問い合わせ種別" value="メディア" data-formrun-required/>
                                    メディア
                                </label>
                                <label className="form-check-label form-check-inline">
                                    <input className="form-check-input" type="radio" name="お問い合わせ種別" value="その他" data-formrun-required/>
                                    その他
                                </label>
                            </div>
                        </fieldset>

                        <div>
                            <label>お問い合わせ内容の詳細　<span className={styles.must}>必須</span></label>
                            <textarea name="お問い合わせ" data-formrun-required placeholder="お問い合わせ入力してください"></textarea>
                        </div>

                        <div>
                            <label>個人情報利用同意　<span className={styles.must}>必須</span></label>

                            <div className={styles.policy}>
                                <p>
                                    合同会社Revive個人情報保護基本方針<br/>
                                    <br/>
                                    合同会社Revive※（以下「当社」という）は、個人情報の保護を社会的責務とし、個人情報の保護に関する法律(以下「個人情報保護法」という)、その他の関係法令及び個人情報保護法に関するガイドライン等（以下「個人情報に関する法令」という）を遵守し、以下の基本方針に基づいて、個人情報を適切に取り扱います。<br/>
                                    <br/>
                                    ■基本方針<br/>
                                    当社は、個人情報を取得する場合は、利用目的をできる限り特定し、必要な範囲で取得します。
                                    当社は、利用目的を変更する場合は、変更前の利用目的と関連性を有すると合理的に認められる範囲を超えて、利用目的を変更しません。<br/>
                                    当社は、利用目的の範囲を超えて個人情報を利用する必要が生じた場合には、法令により許される場合を除き、その利用について本人の同意を得るものとします。<br/>
                                    当社は、個人情報に関する個人の権利を尊重し、個人情報保護法に基づき個人情報の開示・訂正・削除・利用停止等の請求等があった場合はこれに適切に対応します。<br/>
                                    当社は、本人の同意を得た場合または法令により許された場合を除き、個人情報を第三者に提供しません。<br/>
                                    当社は、役員及び全ての従業員（社員、派遣社員、契約社員などを含む）に対し、個人情報に関する法令を遵守するための社内教育を実施します。<br/>
                                    当社は、個人情報管理体制について、法令等の変化に応じて適宜改善を行います。<br/>
                                    <br/>
                                    ■個人情報の取扱いについて<br/>
                                    個人情報の利用目的について<br/>
                                    合同会社Revive（以下「当社」という）は、以下の利用目的の達成に必要な範囲において、個人情報を利用します。<br/>
                                    <br/>
                                    お客様に満足いただけるより良い当社の製品及びサービスの調査、開発、提供を行うため<br/>
                                    取引に伴う代金の請求・支払いのため<br/>
                                    当社の営業・資材の購買等の各種取引における交渉及び連絡・問合せを行うため<br/>
                                    お客様に対し、新サービス等の当社が企画するイベント、消費者キャンペーン及びその他当社に関する情報のご案内、資料送付及びお問合せへの対応のため<br/>
                                    新聞、雑誌、テレビＣＭ等を通じて広報活動を行う際の企画及び連絡・問合せを行うため<br/>
                                    お客様からのお問合せ・苦情に関する連絡及び対応のため<br/>
                                    製品の運送及び加工、その他業務を外部に委託する際の交渉及び連絡・問合せを行うため<br/>
                                    採用選考及び入社手続き、その他採用活動に係わる業務執行のため<br/>
                                    会社法に基づく株主様の権利利益の保護及び行使のため<br/>
                                    各種法令に基づく所定の基準による株主データを作成する等、株主様の管理を行うため<br/>
                                    その他当社の事業に付帯・関連する事項のため<br/>
                                    ■クッキーについて<br/>
                                    当社グループのウェブサイト（以下「当社サイト」という。）では、お客様が当社サイトを再度訪れた際に便利にご利用いただくことができるようにするため、クッキー（Cookie）と呼ばれるテキスト・データをお客様のお使いのコンピュータのブラウザに送信する場合があります。 クッキーは、お使いのブラウザの設定で、受信した際に通知するようにしたり、受け取るかどうかを任意に選択することができます。クッキーを受け取ることを了承した場合は、ご使用のコンピュータに保存されますが、個人を特定する情報は含まれません。なお、クッキーを受け取られない場合は、ウエブサイトの機能の一部がご利用いただけない場合があります。<br/>
                                    <br/>
                                    ■GoogleAnalyticsについて<br/>
                                    当社サイトでは、お客様に有用な情報を提供するために、Google Analyticsを利用し、利用状況の分析・解析を行っています。 Google AnalyticsではCookieを利用して利用者の情報を収集します。収集される情報はGoogle社のプライバシーポリシーに基づいて管理されます。 Google Analyticsの利用規約・プライバシーポリシーについては、Google Analyticsのホームページでご確認ください。<br/>
                                    ・Google Analytics　https://policies.google.com/terms<br/>
                                    ・Google プライバシーポリシー https://policies.google.com/privacy　<br/>
                                    <br/>
                                    ■お問い合せ<br/>
                                    当社の個人情報の取扱に関するお問い合せは下記までご連絡ください。<br/>
                                    合同会社Revive<br/>
                                    東京都中央区東日本橋2-25-4 第三シラカワビル7F<br/>
                                    TEL： 03-5829-4001（平日10:00〜19:00）<br/>
                                    MAIL：info.all@revive.gift
                                </p>
                            </div>

                            <Center className={styles.check}>
                                <input type="checkbox" name="個人情報利用同意" data-formrun-required/>
                                　確認しました。
                            </Center>
                        </div>

                        <div className="_formrun_gotcha" style={{position:'absolute!important', height:'1px', width:'1px', overflow:'hidden'}}>
                            <label htmlFor="_formrun_gotcha">If you are a human, ignore this field</label>
                            <input type="text" name="_formrun_gotcha" id="_formrun_gotcha" tabIndex="-1"/>
                        </div>

                        <Center>
                            <button type="submit" data-formrun-error-text="未入力の項目があります" data-formrun-submitting-text="送信中...">送信</button>
                        </Center>
                    </form>
                </Center>
            </motion.main>
        </>
    );
}