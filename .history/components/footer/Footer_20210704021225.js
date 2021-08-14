import Link from 'next/link'

const Footer = props => {
    // export default function Footer({ Footer }) {
    return (
        <div>
            <div className="footer_inner">
                <div className="footer_item">
                    <h3>Find Us On</h3>
                    <ul className="footer_list">
                        <a target="blank" href="https://wa.link/74wpl7">
                            <li className="footer_listItem">Whats App</li>
                        </a>
                        <a target="blank" href="http://www.instagram.com/fauzaan.mhmd/">
                            <li className="footer_listItem">Instagram</li>
                        </a>
                    </ul>
                </div>
                <div className="footer_item">
                    <h3>Legal</h3>
                    <ul className="footer_list">
                        <Link href={`privacypolicy`}>
                            <li className="footer_listItem">Privacy & Policy</li>
                        </Link>
                        <Link href={`./termofuse`}>
                            <li className="footer_listItem">Term Of Use</li>
                        </Link>
                    </ul>
                </div>
                <div className="footer_item">
                    <h3>Informasi
                        <div className="footer_item_img">
                            <img className="img_location" src="img/location.png"></img> <p>
                                GEDUNG SETIABUDI 2
                                ESTUBIZI BUSINESS CENTER, LT 2, SUITE 207B-C
                                JL. HR RASUNA SAID, KAV 62 RT.018 RW.002 KARET, SETIABUDI
                            </p>
                            <img className="img_telp" src="img/telp.png"></img>
                            <p>
                                021 87973384
                            </p>
                            <img className="img_jam" src="img/jam.png"></img> <p>
                                Senin - Sabtu
                                <p>08.30 – 18.00 WIB.</p>
                            </p>
                            <img className="img_email" src="img/email.png"></img>
                            <p>
                                reswaraarvinjaya@gmail.com
                            </p>
                        </div>

                    </h3>
                </div>
            </div>
            <div className="icon_wa">
                <a target="blank" href="https://wa.link/74wpl7">
                    <img className="icon_waImg" src="/img/wa.png" alt="" />
                </a>
            </div>
        </div>

    )
}

export default Footer