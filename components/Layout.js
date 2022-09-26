import { Center, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import { NavData } from "./NavData";
import { ServiceData } from "./ServiceData";
import { FootNavData } from "./FootNavData";
import { motion } from "framer-motion";

export default function Layout({ children }) {
    return (
        <>
            <Flex as='header'>
                <h1>
                    <Link href='/' passHref>
                        <motion.a
                            whileHover={{ opacity: .3 }}>
                            <Image className="pc_only" src="/common/logo.svg" alt="ロゴ" width='19.57rem' height='auto'/>
                            <Image className="sp_only" src="/common/logo_color.svg" alt="ロゴ" width='19.57rem' height='auto'/>
                        </motion.a>
                    </Link>
                </h1>

                <nav className="pc_only">
                    <Flex as='ul'>
                        {NavData.map((value, key) => {
                            return(
                                <li key={key}>
                                    <Link href={`${value.url}`} passHref>
                                        <motion.a
                                            whileHover={{ opacity: .3 }}>
                                            {value.title}
                                        </motion.a>
                                    </Link>
                                </li>
                            )
                        })}
                    </Flex>
                </nav>

                <div id='hamburger' className='sp_only'>
                    <span id='line1' className='inner_line'></span>
                    <span id='line2' className='inner_line'></span>
                    <span id='line3' className='inner_line'></span>
                </div>
            </Flex>

            <nav id='nav' className='sp_only'>
                <ul className='nav_wrap'>
                    {NavData.map((value, key) => {
                        return(
                            <li key={key}>
                                <Link href={`${value.url}`} passHref>
                                    <motion.a
                                        whileHover={{ opacity: .3 }}>
                                        {value.title}
                                    </motion.a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>

            {children}

            <Center as="footer">
                <Center className="top">
                    <h2>お問い合わせ</h2>

                    <p>
                        ご依頼・ご相談など、お気軽にご連絡ください。<br/>
                        お問い合わせはこちらから
                    </p>

                    <Link href='/contact' passHref>
                        <motion.a
                            whileHover={{ boxShadow: 'inset .3rem .3rem .6rem rgba(0,0,0,50%)' }}>
                            コンタクト
                        </motion.a>
                    </Link>
                </Center>
                <Center className="bottom">
                    <div>
                        <Link href='/' passHref>
                            <motion.a
                                whileHover={{ opacity: .5 }}>
                                <Image src="/common/logo.svg" alt="ロゴ" width='19.57rem' height='auto'/>
                            </motion.a>
                        </Link>
                    </div>
                    <div className="content">
                        <Link href='/' passHref>
                            <a>ホーム</a>
                        </Link>
                        <div>
                            <Link href='/service' passHref>
                                <a>事業</a>
                            </Link>

                            <ul>
                                {ServiceData.map((value, key) => {
                                    return(
                                        <li key={key}>
                                            <Link href={value.url} passHref>
                                                <a>{value.title}</a>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>

                            <ul className="pc_only">
                                {FootNavData.map((value, key) => {
                                    return(
                                        <li key={key}>
                                            <Link href={value.url} passHref>
                                                <a>{value.title}</a>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <p className="copy">&copy; {getYear()} REVIVE LLC.</p>
                </Center>
            </Center>
        </>
    );
}

function getYear() {
    return new Date().getFullYear();
}