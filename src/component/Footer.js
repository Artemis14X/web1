function Footer() {
    return (
        <>
            <footer className="footer-section ">
                <div className="container relative">
                    {/* รูปวงกลมด้านล่าง */}
                    <div className="sofa-img ">
                        <img src="images/Logo.jpg" alt="something" className="img-fluid" style={{ width: "300px", borderRadius: "50%" }} />
                    </div>

                    <div className="row">
                        <div className="col-lg-8">
                            <div className="subscription-form">
                                <h3 className="d-flex align-items-center"><span className="me-1"><img src="images/envelope-outline.svg" alt="Image" className="img-fluid" /></span><span>Subscribe to Newsletter</span></h3>

                                <form action="#" className="row g-3">
                                    <div className="col-auto">
                                        <input type="text" className="form-control" placeholder="Enter your name" />
                                    </div>
                                    <div className="col-auto">
                                        <input type="email" className="form-control" placeholder="Enter your email" />
                                    </div>
                                    <div className="col-auto">
                                        <button className="btn btn-primary">
                                            <span className="fa fa-paper-plane"></span>
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>

                    <div className="row g-5 mb-5">
                        <div className="col-lg-4">
                            <div className="mb-4 footer-logo-wrap"><a href="/" className="footer-logo">แพลอยน้ำ ฉีดโฟมทุ่นลอยน้ำ พ่นโฟม<span>.</span></a></div>
                            <p className="mb-4">รับทำแพลอยน้ำ ฉีดโฟมทุ่นลอยน้ำ พ่นโฟม หลังคา ผนัง กำแพง ใต้ถุน ป้องกันความร้อน รักษาความเย็น
                                จำหน่าย และติดตั้ง ถังฉีดโฟม มือ1 มือสอง ราคาถูก ส่งทั่วประเทศ</p>

                            <ul className="list-unstyled custom-social" style={{ fontSize: "30px", display: "flex", justifyContent: "center", padding: "30px", marginRight: '70px' }}>
                                <li><a href="https://www.facebook.com/jeerayut.wongkumlao"><span className="fa fa-brands fa-facebook-f" style={{ paddingRight: "3px", color: "blue" }}></span></a></li>
                                <li><a href="https://line.me/ti/p/kmwy__R4cs?fbclid=IwAR01iVXBZMf6Mw_0hOK-RfhsSwJliu8phMsc6dJHD5RjLE3leYv2A9-vAYc"><span className="fa fa-brands fa-line" style={{ paddingRight: "0.2px", color: "#06C755" }}></span></a></li>
                                <li><a href="#"><span className="fa fa-brands fa-instagram" style={{ paddingLeft: "0.2px", color: "#330066" }}></span></a></li>
                                <li><a href="https://www.youtube.com/@Artemis14xDev"><span className="fa fa-brands fa-youtube" style={{ color: "red" }}></span></a></li>
                            </ul>
                        </div>

                        <div className="col-lg-8">
                            <div className="row links-wrap">
                                <div className="col-6 col-sm-6 col-md-3">
                                    <ul className="list-unstyled">
                                        <li><a href="about">เกี่ยวกับเรา</a></li>
                                        <li><a href="#">บริการ</a></li>
                                        <li><a href="blog">ผลงาน</a></li>
                                        <li><a href="contact">ติดต่อเรา</a></li>
                                    </ul>
                                </div>

                                <div className="col-6 col-sm-6 col-md-3">
                                    <ul className="list-unstyled">
                                        <li><a href="contact">ช่วยเหลือ</a></li>
                                        <li><a href="#">....</a></li>
                                        <li><a href="#">Live chat</a></li>
                                    </ul>
                                </div>

                                <div className="col-6 col-sm-6 col-md-3">
                                    <ul className="list-unstyled">
                                        <li><a href="blog">งานของเรา</a></li>
                                        <li><a href="contact">ทีมงาน</a></li>
                                        <li><a href="/Shop">สินค้า</a></li>
                                        <li><a href="#">ข้อตกลง เงื่อนไข</a></li>
                                    </ul>
                                </div>

                                <div className="col-6 col-sm-6 col-md-3">
                                    <ul className="list-unstyled">
                                        <li><a href="shop">ฉีดโฟมทุ่นลอยน้ำ</a></li>
                                        <li><a href="shop">แพลอยน้ำ</a></li>
                                        <li><a href="shop">จำหน่ายถังโฟม</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="border-top copyright">
                        <div className="row pt-4">
                            <div className="col-lg-6">
                                <p className="mb-2 text-center text-lg-start">Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash; บริษัท ธนะบอมฐ์ คอนทรัคชั่น จำกัด <a href="#">แพลอยน้ำ.com</a><a hreff="#"></a>
                                </p>
                            </div>

                            <div className="col-lg-6 text-center text-lg-end">
                                <ul className="list-unstyled d-inline-flex ms-auto">
                                    <li className="me-4"><a href="contact">ทีมงาน &amp; ปรึกษาปัญหา</a></li>
                                    <li><a href="#">เงื่อนไขและบริการ</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer;