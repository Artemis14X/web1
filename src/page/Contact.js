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

export default function Contact() {
    return (
        <>

            {/* <!-- Start Header/Navigation --> */}
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
                            <li><a className="nav-link" href="About">เกี่ยวกับเรา</a></li>
                            <li><a className="nav-link" href="blog">ผลงานของเรา</a></li>
                            <li className="active"><a className="nav-link" href="Contact">ติดต่อเรา</a></li>
                        </ul>

                        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                            <li><a className="nav-link" onClick={showSwal}><img src="images/user.svg" /></a></li>
                            <li><a className="nav-link" href="/Cart"><img src="images/cart.svg" /></a></li>
                        </ul>
                    </div>
                </div>

            </nav>
            {/* <!-- End Header/Navigation --> */}

            {/* <!-- Start Hero Section --> */}
            <div className="hero bg-gradient bg-dark">
                <div className="container ">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>ติดต่อเรา</h1>
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


            {/* <!-- Start Contact Form --> */}
            <div class="untree_co-section">
                <div class="container">

                    <div class="block">
                        <div class="row justify-content-center">


                            <div class="col-md-8 col-lg-8 pb-4">


                                <div class="row mb-5">
                                    <div class="col-lg-4">
                                        <div class="service no-shadow align-items-center link horizontal d-flex active" data-aos="fade-left" data-aos-delay="0">
                                            <div class="service-icon color-1 mb-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                                </svg>
                                            </div>
                                            {/* <!-- /.icon --> */}
                                            <div class="service-contents">
                                                <p>บริษัท ธนะบอมฐ์ คอนทรัคชั่นกรุ๊ป จำกัด, 1998, ซอยด่านสำโรง 28, แยก 1/2, ตำบล สำโรงเหนือ
                                                    อ.เมืองสมุทรปราการ จ.สมุทรปราการ 10270
                                                </p>
                                            </div>
                                            {/* <!-- /.service-contents--> */}
                                        </div>
                                        {/* <!-- /.service --> */}
                                    </div>

                                    <div class="col-lg-4">
                                        <div class="service no-shadow align-items-center link horizontal d-flex active" data-aos="fade-left" data-aos-delay="0">
                                            <div class="service-icon color-1 mb-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                                                </svg>
                                            </div>
                                            {/* <!-- /.icon --> */}
                                            <div class="service-contents">
                                                <p>bestsodayza@gmail.com</p>
                                            </div>
                                            {/* <!-- /.service-contents--> */}
                                        </div>
                                        {/* <!-- /.service --> */}
                                    </div>

                                    <div class="col-lg-4">
                                        <div class="service no-shadow align-items-center link horizontal d-flex active" data-aos="fade-left" data-aos-delay="0">
                                            <div class="service-icon color-1 mb-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                                </svg>
                                            </div>
                                            {/* <!-- /.icon --> */}
                                            <div class="service-contents">
                                                <p>082-229-8655</p>
                                            </div>
                                            {/* <!-- /.service-contents--> */}
                                        </div>
                                        {/* <!-- /.service --> */}
                                    </div>
                                </div>



                            </div>

                        </div>

                    </div>

                </div>



            </div>



            {/* <!-- End Contact Form --> */}

            <footer className="footer-section">
                <div className="container relative">
                    {/* รูปวงกลมด้านล่าง */}
                    <div className="sofa-img">
                        <img src="images/Logo.jpg" alt="something" className="img-fluid" style={{ width: "300px", borderRadius: "50%" }} />
                    </div>

                    <div className="row">
                        <div className="col-lg-8" >
                            <div className="subscription-form" >
                                <ul className="list-unstyled custom-social" >
                                    <li><a href="https://www.facebook.com/jeerayut.wongkumlao"><span className="fa fa-brands fa-facebook-f" style={{ fontSize: "40px", paddingRight: "30px", color: "blue" }}></span></a></li>
                                    <p className="mt-1 bg-secondary bg-gradient text-white" style={{ width: "130px", borderRadius: "20px", textAlign: "center" }}><a href="https://www.facebook.com/jeerayut.wongkumlao">จีระยุทธ วงษ์คำเหลา</a></p>
                                    <li><a href="https://line.me/ti/p/kmwy__R4cs?fbclid=IwAR01iVXBZMf6Mw_0hOK-RfhsSwJliu8phMsc6dJHD5RjLE3leYv2A9-vAYc"><span className="fa fa-brands fa-line" style={{ fontSize: "40px", paddingRight: "30px", color: "#06C755" }}></span></a></li>
                                    <p className="mt-1 bg-secondary bg-gradient text-white" style={{ width: "135px", borderRadius: "20px", textAlign: "center" }}><a href="https://line.me/ti/p/kmwy__R4cs?fbclid=IwAR01iVXBZMf6Mw_0hOK-RfhsSwJliu8phMsc6dJHD5RjLE3leYv2A9-vAYc">LineID: Wongkumlao</a></p>
                                    <li><a href="#"><span className="fa fa-brands fa-instagram" style={{ fontSize: "40px", paddingRight: "30px", color: "#330066" }}></span></a></li>
                                    <p className="mt-1 bg-secondary bg-gradient text-white" style={{ width: "135px", borderRadius: "20px", textAlign: "center" }}><a href="">จีระยุทธ วงษ์คำเหลา</a></p>
                                    <li><a href="https://www.youtube.com/@Artemis14xDev"><span className="fa fa-brands fa-youtube" style={{ fontSize: "40px", paddingRight: "30px", color: "red" }}></span></a></li>
                                    <p className="mt-1 bg-secondary bg-gradient text-white" style={{ width: "135px", borderRadius: "20px", textAlign: "center" }}><a href="https://www.youtube.com/@Artemis14xDev">ฉีดโฟม ทุ่นลอยน้ำ short</a></p>
                                </ul>

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