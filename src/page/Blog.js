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

export default function blog() {
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
                            <li className="active"><a className="nav-link" href="/Blog">ผลงานของเรา</a></li>
                            <li><a className="nav-link" href="Contact">ติดต่อเรา</a></li>
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
            <div className="hero bg-info  bg-gradient">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1 className="text-dark">ผลงานของเรา</h1>
                                <p className="mb-4 text-secondary">รับสร้างแพลอยน้ำ ฉีดโฟมทุ่นลอยน้ำ จำหน่ายถังฉีดโฟม ทุ่นแพสูบน้ำ ทุ่นลอยน้ำ รับอุดรอยรั่ว ซ่อมแซมแพสูบน้ำ รับซ่อมทุ่นรั่ว ทุ่นแตก ทุ่นชำรุด เสื่อมสภาพป้องกันน้ำเข้าทุ่น แพจม แพเอียง พ่นโฟมหลังคา พ่นโฟมกันร้อน</p>
                                <p><a href="/Shop" className="btn btn-secondary me-2">สินค้า</a><a href="#" className="btn btn-white-outline">สำรวจ</a></p>
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



            {/* <!-- Start Blog Section --> */}
            <div class="blog-section ">
                <div class="container " >

                    <div class="row shadow-lg p-2 mb-5 bg-body rounded " >

                        <div class="col-12 col-sm-6 col-md-4 mb-5" >
                            <div class="post-entry">
                                <a href="#" class="post-thumbnail"><img src="images/แพบ้าน.jpg" alt="Image" class="img-fluid" /></a>
                                <div class="post-content-entry">
                                    <h3><a href="#">แพลอยน้ำแบบมีห้อง ขนาดตามสั่ง</a></h3>
                                    <div class="meta">
                                        <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
                                    </div>
                                    <button className="btn btn-dark mt-2" style={{ marginLeft: "30%", background: "red" }}><a className="text-white" href="contact">สอบถามราคา</a></button>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 mb-5">
                            <div class="post-entry">
                                <a href="#" class="post-thumbnail"><img src="images/แพ2.jpg" alt="Image" class="img-fluid" /></a>
                                <div class="post-content-entry">
                                    <h3><a href="#">แพลอยน้ำแบบมีสะพานข้าม ขนาดตามสั่ง</a></h3>
                                    <div class="meta">
                                        <span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
                                    </div>
                                    <button className="btn btn-dark mt-2" style={{ marginLeft: "30%", background: "red" }}><a className="text-white" href="contact">สอบถามราคา</a></button>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 mb-5">
                            <div class="post-entry">
                                <a href="#" class="post-thumbnail"><img src="images/แพ1.jpg" alt="Image" class="img-fluid" /></a>
                                <div class="post-content-entry">
                                    <h3><a href="#">แพลอยน้ำแบบ ขนาดและวัสดุตามสั่ง</a></h3>
                                    <div class="meta">
                                        <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
                                    </div>
                                    <button className="btn btn-dark mt-2" style={{ marginLeft: "30%", background: "red" }}><a className="text-white" href="contact">สอบถามราคา</a></button>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 mb-5">
                            <div class="post-entry">
                                <a href="#" class="post-thumbnail"><img src="images/แพ-3.jpg" alt="Image" class="img-fluid" /></a>
                                <div class="post-content-entry">
                                    <h3><a href="#">แพลอยน้ำ แบบมีตาข่ายนอนดูดาว</a></h3>
                                    <div class="meta">
                                        <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
                                    </div>
                                    <button className="btn btn-dark mt-2" style={{ marginLeft: "30%", background: "red" }}><a className="text-white" href="contact">สอบถามราคา</a></button>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 mb-5">
                            <div class="post-entry">
                                <a href="#" class="post-thumbnail"><img src="images/แพ4.jpg" alt="Image" class="img-fluid" /></a>
                                <div class="post-content-entry">
                                    <h3><a href="#">แพลอยน้ำ วัสดุตามสั่ง</a></h3>
                                    <div class="meta">
                                        <span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
                                    </div>
                                    <button className="btn btn-dark mt-2" style={{ marginLeft: "30%", background: "red" }}><a className="text-white" href="contact">สอบถามราคา</a></button>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 mb-5">
                            <div class="post-entry">
                                <a href="#" class="post-thumbnail"><img src="images/img-1.jpg" alt="Image" class="img-fluid" /></a>
                                <div class="post-content-entry">
                                    <h3><a href="#">แพลอยน้ำ แบบสะพานตาข่ายเหล็ก</a></h3>
                                    <div class="meta">
                                        <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
                                    </div>
                                    <button className="btn btn-dark mt-2" style={{ marginLeft: "30%", background: "red" }}><a className="text-white" href="contact">สอบถามราคา</a></button>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 mb-5">
                            <div class="post-entry">
                                <a href="#" class="post-thumbnail"><img src="images/img2.jpg" alt="Image" class="img-fluid" /></a>
                                <div class="post-content-entry">
                                    <h3><a href="#">แพลอยน้ำตามสั่ง ขนาดและสะพาน</a></h3>
                                    <div class="meta">
                                        <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
                                    </div>
                                    <button className="btn btn-dark mt-2" style={{ marginLeft: "30%", background: "red" }}><a className="text-white" href="contact">สอบถามราคา</a></button>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 mb-5">
                            <div class="post-entry">
                                <a href="#" class="post-thumbnail"><img src="images/img4.jpg" alt="Image" class="img-fluid" /></a>
                                <div class="post-content-entry">
                                    <h3><a href="#">แพลอยน้ำตามสั่ง</a></h3>
                                    <div class="meta">
                                        <span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
                                    </div>
                                    <button className="btn btn-dark mt-2" style={{ marginLeft: "30%", background: "red" }}><a className="text-white" href="contact">สอบถามราคา</a></button>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-4 mb-5">
                            <div class="post-entry">
                                <a href="#" class="post-thumbnail"><img src="images/img5.jpg" alt="Image" class="img-fluid" /></a>
                                <div class="post-content-entry">
                                    <h3><a href="#">แพลอยน้ำ แบบ2ชั้น มีห้อง และดาดฟ้า</a></h3>
                                    <div class="meta">
                                        <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
                                    </div>
                                    <button className="btn btn-dark mt-2" style={{ marginLeft: "30%", background: "red" }}><a className="text-white" href="contact">สอบถามราคา</a></button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <footer className="footer-section">
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
                                <li><a href="#"><span className="fa fa-brands fa-facebook-f" style={{ paddingRight: "3px", color: "blue" }}></span></a></li>
                                <li><a href="#"><span className="fa fa-brands fa-line" style={{ paddingRight: "0.2px", color: "#06C755" }}></span></a></li>
                                <li><a href="#"><span className="fa fa-brands fa-instagram" style={{ paddingLeft: "0.2px", color: "#330066" }}></span></a></li>
                                <li><a href="#"><span className="fa fa-brands fa-youtube" style={{ color: "red" }}></span></a></li>
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
                                    <li className="me-4"><a href="#">ทีมงาน &amp; ปรึกษาปัญหา</a></li>
                                    <li><a href="#">เงื่อนไขและบริการ</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </footer>

            {/* <!-- End Blog Section -->	 */}
        </>
    )
}