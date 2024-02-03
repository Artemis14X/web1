import Swal from "sweetalert2";

const showSwal = () => {
    Swal.fire({
        title: 'สำหรับ ผู้ดูแลระบบ',
        icon: 'question',
        text: 'คุณคือผู้ดูแลระบบ หรือไม่? ',
        timer: '400000',
        iconColor: 'green',
        showCancelButton: true,
        cancelButtonColor: "#d33",
        cancelButtonText: 'ไม่ใช่',
        confirmButtonText: 'ใช่'
    }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "ไม่พบ โทเค็น KEY",
            text: "คุณไม่ใช่ ผู้ดูแลระบบ",
            iconColor: "red",
            icon: "warning",
            confirmButtonText: 'ยกเลิก',
            confirmButtonColor:'red'
            
          });
        }
      });
}

export default function Header() {
    return (
        <>
            <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

                <div className="container">
                    <a className="navbar-brand" href="/">แพลอยน้ำ</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsFurni">
                        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                            <li className="nav-item ">
                                <a className="nav-link" href="/">หน้าแรก</a>
                            </li>
                            <li><a className="nav-link" href="Shop">สินค้า</a></li>
                            <li className="active"><a className="nav-link" href="About">เกี่ยวกับเรา</a></li>
                            <li><a className="nav-link" href="/Blog">ผลงานของเรา</a></li>
                            <li><a className="nav-link" href="Contact">ติดต่อเรา</a></li>
                        </ul>

                        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                            <li ><a className="nav-link" onClick={showSwal}><img src="images/user.svg" /></a></li>
                            <li><a className="nav-link" href="/Cart"><img src="images/cart.svg" /></a></li>
                        </ul>
                    </div>
                </div>

            </nav>

            {/* <!-- Start Hero Section --> */}
            <div className="hero bg-dark bg-gradient">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>เกี่ยวกับเรา</h1>
                                <p className="mb-4">รับสร้างแพลอยน้ำ ฉีดโฟมทุ่นลอยน้ำ จำหน่ายถังฉีดโฟม ทุ่นแพสูบน้ำ ทุ่นลอยน้ำ รับอุดรอยรั่ว ซ่อมแซมแพสูบน้ำ รับซ่อมทุ่นรั่ว ทุ่นแตก ทุ่นชำรุด เสื่อมสภาพป้องกันน้ำเข้าทุ่น แพจม แพเอียง พ่นโฟมหลังคา พ่นโฟมกันร้อน</p>
                                <p><a href="/Shop" className="btn btn-secondary me-2">สินค้า</a><a href="blog" className="btn btn-white-outline">สำรวจ</a></p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="hero-img-wrap">
                                <img src="images/แพ1.jpg" className="img-fluid mt-4 shadow-lg p-2 mb-5 bg-body rounded" style={{ height: "400px", borderRadius: "30px" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Hero Section --> */}

            <div className="why-choose-section">
                <div className="container">
                    <div className="row justify-content-between ">
                        <div className="col-lg-6 shadow p-3 mb-5 bg-body rounded">
                            <h2 className="section-title"><strong>จำหน่ายถังโฟม</strong></h2>
                            <p>เรามีบริการจัดส่ง และซื้อขายหน้าร้าน สำหรับลูกค้าที่มีถังเก่า สามารถเรียกเราไปฉีดใส่ถังเก่าได้</p>

                            <div className="row my-5">
                                <div className="col-6 col-md-6">
                                    <div className="feature">
                                        <div className="icon">
                                            <img src="images/truck.svg" alt="Image" className="imf-fluid" />
                                        </div>
                                        <h3 style={{ borderRadius: "10px", }} > <strong>จัดส่งเร็วถึงหน้าบ้าน</strong></h3>
                                        <p>จัดส่งรวดเร็ว รอบรับได้ที่หน้าบ้าน ค่าบริการตามระยะทาง ลูกค้าสามารภมารับเองที่โกดังของเราก็ได้เช่นกัน</p>
                                    </div>
                                </div>

                                <div className="col-6 col-md-6">
                                    <div className="feature">
                                        <div className="icon">
                                            <img src="images/bag.svg" alt="Image" className="imf-fluid" />
                                        </div>
                                        <h3><strong>ซื้อขายง่าย ออกใบกำกับภาษี</strong></h3>
                                        <p>เรารับทั้งลูกค้า ธรรมดา และ นิติบุคคล สามารถขอ ออกใบกำกับภาษีได้</p>
                                    </div>
                                </div>

                                <div className="col-6 col-md-6">
                                    <div className="feature">
                                        <div className="icon">
                                            <img src="images/support.svg" alt="Image" className="imf-fluid" />
                                        </div>
                                        <h3><strong>สอบถาม ปรึกษาปัญหา</strong></h3>
                                        <p>สามารถติดต่อเข้ามาสอบถาม การคำณวนราคา และคุณสมบัติ ของวัสดุที่ใช้</p>
                                    </div>
                                </div>

                                <div className="col-6 col-md-6">
                                    <div className="feature">
                                        <div className="icon">
                                            <img src="images/return.svg" alt="Image" className="imf-fluid" />
                                        </div>
                                        <h3><strong>สามารถซื้อขายแบบตัวต่อตัว</strong></h3>
                                        <p>สามารโทรติดต่อซื้อขายตัวต่อตัว และรับของที่บริษัทได้เลย</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="img-wrap" style={{ width: "100%" }}>
                                <img src="images/ถังโฟมแก้.png" alt="Image" className="img-fluid" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="we-help-section">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-7 mb-5 mb-lg-0">
                            <div className="imgs-grid">
                                <div className="grid grid-1"><img src="images/ฉนวน.png" alt="Untree.co" /></div>
                                <div className="grid grid-2"><img src="images/โปรสเตอร์พ่น.png" alt="Untree.co" /></div>
                                <div className="grid grid-3"><img src="images/posterFom.png" alt="Untree.co" /></div>
                            </div>
                        </div>
                        <div className="col-lg-5 ps-lg-5 shadow p-3 mb-5 bg-body bg-gradient rounded ">
                            <h2 className="section-title mb-4"><strong>รับพ่นโฟม หลังคา กำแพงผนัง ใต้ถุน ช่องชาร์ป</strong></h2>
                            <p>รับพ่นโฟมหลังคา กันความร้อน เก็บเสียง ตามขนาดที่ ท่านต้องการ</p>

                            <ul className="list-unstyled custom-list my-4">
                                <li>กันลามไฟ</li>
                                <li>ป้องกันการรั่วซึม</li>
                                <li>มีความแข็งแรง</li>
                                <li>กั้กเสียง</li>
                            </ul>
                            <p><a herf="#" className="btn">ดูเพิ่มเติม</a></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* {/* <!-- End Why Choose Us Section --> */}



            <footer className="footer-section mt-5">
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
                            <div className="mb-4 footer-logo-wrap"><a href="#" className="footer-logo">แพลอยน้ำ ฉีดโฟมทุ่นลอยน้ำ พ่นโฟม<span>.</span></a></div>
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
                                        <li><a href="#">เกี่ยวกับเรา</a></li>
                                        <li><a href="#">บริการ</a></li>
                                        <li><a href="#">ผลงาน</a></li>
                                        <li><a href="#">ติดต่อเรา</a></li>
                                    </ul>
                                </div>

                                <div className="col-6 col-sm-6 col-md-3">
                                    <ul className="list-unstyled">
                                        <li><a href="#">ช่วยเหลือ</a></li>
                                        <li><a href="#">....</a></li>
                                        <li><a href="#">Live chat</a></li>
                                    </ul>
                                </div>

                                <div className="col-6 col-sm-6 col-md-3">
                                    <ul className="list-unstyled">
                                        <li><a href="#">งานของเรา</a></li>
                                        <li><a href="#">ทีมงาน</a></li>
                                        <li><a href="/Shop">สินค้า</a></li>
                                        <li><a href="#">ข้อตกลง เงื่อนไข</a></li>
                                    </ul>
                                </div>

                                <div className="col-6 col-sm-6 col-md-3">
                                    <ul className="list-unstyled">
                                        <li><a href="#">ฉีดโฟมทุ่นลอยน้ำ</a></li>
                                        <li><a href="#">แพลอยน้ำ</a></li>
                                        <li><a href="#">จำหน่ายถังโฟม</a></li>
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