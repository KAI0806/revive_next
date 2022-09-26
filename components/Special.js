import { Flex, Center } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { MdPlayArrow } from 'react-icons/md'
import Link from "next/link"

export default function Special(){
    return(
        <Center className='special'>
          <Flex className='wrap'>
            <div className='left'>
              <iframe width='100%' height='100%' src="https://www.youtube.com/embed/unpEwEOlCw0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

            <Center className='right'>
              <h2 className='pc_only'>
                スペシャルインタビュー<br/>
                弊社代表の想い
              </h2>

              <Link href='/interview' passHref>
                <motion.a
                  whileHover={{ boxShadow: 'inset .3rem .3rem 1rem rgb(0, 0, 0 / 10%)' }}>
                  本編はこちら　<MdPlayArrow/>
                </motion.a>
              </Link>
            </Center>
          </Flex>
        </Center>
    )
}