import Slick from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Center } from '@chakra-ui/react';
import { IoIosMan, IoIosBriefcase } from 'react-icons/io'
import { FaLaptopCode } from 'react-icons/fa'
import { IconContext } from "react-icons";

export default function Slider() {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
      };

      return (
       <div className='sp_only slider'>
            <Slick {...settings}>
                <Center className='slide'>
                    <IconContext.Provider value={{ size: '8rem', color: '#427CB9' }}>
                        <span>
                            <IoIosMan/>
                            <IoIosMan/>
                        </span>
                    </IconContext.Provider>
                    <h3>在籍メンバーについて</h3>
                    <p>現在、合計80名以上のスタッフが在籍しており業務に取り組んでおります。</p>
                    <p>Reviveでは20代30代の若手を中心に男女に関係なく一人ひとりの適正と向き合って最適な配置を行っております。</p>
                </Center>

                <Center className='slide'>
                    <IconContext.Provider value={{ size: '10rem', color: '#427CB9' }}>
                        <span>
                            <FaLaptopCode/>
                        </span>
                    </IconContext.Provider>
                    <h3>環境・言語など</h3>
                    <p>現場ではjavaやpythonを用いた作業を行う現場もあり、希望者は適性に応じて実際の現場にて豊かな経験を積む機会があります。そのための研修制度もReviveでは設けております。</p>
                </Center>

                <Center className='slide'>
                    <IconContext.Provider value={{ size: '10rem', color: '#427CB9' }}>
                        <span>
                            <IoIosBriefcase/>
                        </span>
                    </IconContext.Provider>
                    <h3>派遣先・営業職の種類</h3>
                    <p>コールセンター、決済アプリ営業、インフラ訪販、通信、営業、インサイドセールス、キッティング、 他</p>
                    <p>[1都3県（埼玉県、千葉県、東京都、神奈川県）、大阪、名古屋]</p>
                </Center>
            </Slick>
       </div>
      );
}