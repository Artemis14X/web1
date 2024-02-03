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
                            <li className="active"><a className="nav-link" href="Shop">สินค้า</a></li>
                            <li><a className="nav-link" href="About">เกี่ยวกับเรา</a></li>
                            <li><a className="nav-link" href="blog">ผลงานของเรา</a></li>
                            <li><a className="nav-link" href="/Contact">ติดต่อเรา</a></li>
                        </ul>

                        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                            <li><a className="nav-link" onClick={showSwal}><img src="images/user.svg" /></a></li>
                            <li><a className="nav-link" href="/Cart"><img src="images/cart.svg" /></a></li>
                        </ul>
                    </div>
                </div>

            </nav>

            <div className="hero bg-primary bg-gradient">
                <div className="container">
                    <div className="row justify-content-between ">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>ถังฉีดพียูโฟม</h1>
                            </div>
                        </div>
                        <div className="col-lg-7">

                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Hero Section --> */}



            <div className="untree_co-section product-section before-footer-section">
                <div className="container">
                    <div className="row">

                        {/* <!-- Start Column 1 --> */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <a className="product-item bg-primary bg-gradient" style={{ borderRadius: "15px" }} href="cart">
                                <img src="images/F1.jpg" className="img-fluid product-thumbnail " style={{ borderRadius: "15px 15px 0px 0px" }} />
                                <h3 className="product-title">ถังมือสอง แบบ1ขอบ (บน)</h3>
                                <p classNameName="bg-danger text-white" style={{ borderRadius: "6px" }}>***สำคัญ สอบถามก่อนสั่งซื้อทุกครั้ง</p>
                                <strong className="product-price">1,550</strong>

                                <span className="icon-cross">
                                    <img src="images/cross.svg" className="img-fluid" />
                                </span>
                            </a>
                        </div>
                        {/* <!-- End Column 1 -->
						
					<!-- Start Column 2 --> */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <a className="product-item bg-primary bg-gradient" style={{ borderRadius: "15px" }} href="cart">
                                <img src="images/โฟมมือ2.jpg" className="img-fluid product-thumbnail" style={{ borderRadius: "15px 15px 0px 0px" }} />
                                <h3 className="product-title">ถังมือสอง แบบ2ขอบ (บน/ล่าง)</h3>
                                <p classNameName="bg-danger text-white" style={{ borderRadius: "6px" }}>***สำคัญ สอบถามก่อนสั่งซื้อทุกครั้ง</p>
                                <strong className="product-price">1,600</strong>

                                <span className="icon-cross">
                                    <img src="images/cross.svg" className="img-fluid" />
                                </span>
                            </a>
                        </div>
                        {/* <!-- End Column 2 -->

					<!-- Start Column 3 --> */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <a className="product-item bg-primary bg-gradient" style={{ borderRadius: "15px" }} href="cart">
                                <img src="images/tnnew.jpg" className="img-fluid product-thumbnail" style={{ borderRadius: "15px 15px 0px 0px" }} />
                                <h3 className="product-title">ถังฉีดโฟมมือ1</h3>
                                <p classNameName="bg-danger text-white" style={{ borderRadius: "6px" }}>***สำคัญ สอบถามก่อนสั่งซื้อทุกครั้ง</p>
                                <strong className="product-price">2,100</strong>

                                <span className="icon-cross">
                                    <img src="images/cross.svg" className="img-fluid" />
                                </span>
                            </a>
                        </div>
                        {/* {/* <!-- End Column 3 --> */}


                        {/* <!-- Start Column 4 --> */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <a className="product-item" href="#">
                                <img src="images/ถังโฟมแก้.png" className="img-fluid product-thumbnail" />
                                <h3 className="product-title"> </h3>
                                <strong className="product-price"></strong>

                                <span className="icon-cross">
                                    <img src="images/cross.svg" className="img-fluid" />
                                </span>
                            </a>
                        </div>
                        {/* {/* <!-- End Column 4 --> */}

                        <p classNameName="bg-secondary bg-gradient text-dark">***หมายเหตุ อัตตราค่าบริการจัดส่งขึ้นอยู่กับระยะทางที่ลูกค้าต้องการจัดส่ง ลูกค้าสามารถมารับสินค้าเองได้ ที่คลังสินค้าของเรา</p>

                    </div>
                </div>
            </div>

            <div className="hero bg-dark bg-gradient">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5 ">
                            <div className="intro-excerpt">
                                <h1>แพลอยน้ำ</h1>
                            </div>
                        </div>
                        <div className="col-lg-7">

                        </div>
                    </div>
                </div>
            </div>

            <div className="untree_co-section product-section before-footer-section">
                <div className="container">
                    <div className="row">

                        {/* <!-- Start Column 1 --> */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <a className="product-item" href="contact">
                                <img src="images/แพ1.jpg" className="img-fluid product-thumbnail" style={{ borderRadius: "10px" }} />
                                <h3 className="product-title">แพลอยน้ำ xxx</h3>
                                <h3><span>ขนาดตาม สั่งลูกค้า</span></h3>
                                <button className="btn btn-dark mt-3">สอบถามราคา</button>

                                <span className="icon-cross">
                                    <img src="images/cross.svg" className="img-fluid" />
                                </span>
                            </a>
                        </div>
                        {/* {/* <!-- End Column 1 --> */}


                        {/* <!-- Start Column 2 --> */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <a className="product-item" href="contact">
                                <img src="images/แพ2.jpg" className="img-fluid product-thumbnail" style={{ borderRadius: "10px" }} />
                                <h3 className="product-title">แพลอยน้ำขนาด 5x5</h3>
                                <h3><span>สะพาน 8 เมตร มีหลังคา</span></h3>
                                <button className="btn btn-dark mt-3">สอบถามราคา</button>
                                <span className="icon-cross">
                                    <img src="images/cross.svg" className="img-fluid" />
                                </span>
                            </a>
                        </div>
                        {/* <!-- End Column 2 -->

					<!-- Start Column 3 --> */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <a className="product-item" href="contact">
                                <img src="images/แพ-3.jpg" className="img-fluid product-thumbnail" style={{ borderRadius: "10px" }} />
                                <h3 className="product-title">แพขนาด 4x4</h3>
                                <h3><span>มีตาข่ายนอนดูดาว สะพาน 5 เมตร</span></h3>
                                <button className="btn btn-dark mt-3">สอบถามราคา</button>

                                <span className="icon-cross">
                                    <img src="images/cross.svg" className="img-fluid" />
                                </span>
                            </a>
                        </div>
                        {/* <!-- End Column 3 --> */}

                        {/* <!-- Start Column 4 --> */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <a className="product-item" href="contact">
                                <img src="images/แพ4.jpg" className="img-fluid product-thumbnail" style={{ borderRadius: "10px" }} />
                                <h3 className="product-title">แพลอยน้ำ</h3>
                                <h3><span>ขนาด ตามสั่งลูกค้า</span></h3>
                                <button className="btn btn-dark mt-3">สอบถามราคา</button>

                                <span className="icon-cross">
                                    <img src="images/cross.svg" className="img-fluid" />
                                </span>
                            </a>
                        </div>
                        {/* <!-- End Column 4 --> */}
                        <p className="bg-secondary bg-gradient text-dark"> ***หมายเหตุ การสร้างแพเราจะนำอุปกรณ์ไปทำที่หน้างาน นอนที่หน้างาน ในเขตพื้นกรุงเทพ**ฟรี**
                            เขตพื้นต่างจังหวัด คิดตามระยะทาง กิโลเมตรล่ะ 15 บาท </p>
                        <p className="bg-warning bg-gradient text-dark mt-5" style={{ borderRadius: "6px" }}><i className="fa fa-bullhorn" style={{ fontSize: "25px" }}></i> ทางบริษัทของเรา ในการสร้างแพลอยน้ำทุกครั้ง
                            มีการทำสื่อ ทางโซเชียลมิเดีย ไลฟ์สด ขั้นตอนการสร้างทุกขั้นตอน เพื่อให้ลูกค้าเกิดความมั่นใจ ในคุณภาพของงาน และขั้นตอนสุดท้าย
                            เรามีการ บินโดรน สำรวจบนที่สูง ทั้งนี้ถือเป็นการ โปรโหมดสถานที่ให้ ลูกค้าไปในตัว โดยที่ลูกค้าไม่เสียค่าใช้จ่าย
                            สำหรับทำสื่อใดๆ
                        </p>

                    </div>
                </div>
            </div>

            <div className="hero bg-info bg-gradient">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5 ">
                            <div className="intro-excerpt">
                                <h1>พ่นพียูโฟม</h1>
                                <p className="text-secondary" style={{ fontSize: '15px' }}>รับพ่นพียูโฟมกันความร้อน หลังคา ผนังห้อง กำแพงบ้าน และฉีดโฟมใต้ถุนบ้าน ป้องกัน สัตว์เข้าไปอาศัย กันบ้านทรุดตัว รักษาโครงสร้างของบ้าน
                                    ทั้งนี้ยังช่วยถนอม ลดเวลาการเสื่อมสภาพของ เหล็ก และไม้ ไม่ว่าจะเป็นหลังคา และผนังห้องที่เป็นไม้ ช่วยยืออายุการใช้งานให้นานขึ้น
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7">

                        </div>
                    </div>
                </div>
            </div>

            <div className="untree_co-section product-section before-footer-section">
                <div className="container">
                    <div className="row">

                        {/* <!-- Start Column 1 --> */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <a className="product-item" href="contact">
                                <img src="images/พ่นโฟม1.jpg" className="img-fluid product-thumbnail" style={{ borderRadius: "10px" }} />
                                <h3 className="product-title">พ่นพียูโฟม ใต้หลังคา</h3>
                                <h3><span>ความหนาตามที่ลูกค้าต้องการ</span></h3>
                                <button className="btn btn-dark mt-3 text-dark" style={{ background: "orange" }}>สอบถามราคา</button>

                                <span className="icon-cross">
                                    <img src="images/cross.svg" className="img-fluid" />
                                </span>
                            </a>
                        </div>
                        {/* {/* <!-- End Column 1 --> */}


                        {/* <!-- Start Column 2 --> */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <a className="product-item" href="contact">
                                <img src="images/พ่นโฟม2.jpg" className="img-fluid product-thumbnail" style={{ borderRadius: "10px" }} />
                                <h3 className="product-title">พ่นพียูโฟม ผนัง กำแพง</h3>
                                <h3><span>พ่นพียูโฟม ผนัง ทับหน้าด้วยสีดำ</span></h3>
                                <button className="btn btn-dark mt-3 text-dark" style={{ background: "orange" }}>สอบถามราคา</button>
                                <span className="icon-cross">
                                    <img src="images/cross.svg" className="img-fluid" />
                                </span>
                            </a>
                        </div>
                        {/* <!-- End Column 2 -->

					<!-- Start Column 3 --> */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <a className="product-item" href="contact">
                                <img src="images/พ่นโฟม3.jpg" className="img-fluid product-thumbnail" style={{ borderRadius: "10px" }} />
                                <h3 className="product-title">พ่นพียูโฟม หลังคา</h3>
                                <h3><span>ความหนาตามที่ลูกค้าต้องการ</span></h3>
                                <button className="btn btn-dark mt-3 text-dark" style={{ background: "orange" }}>สอบถามราคา</button>

                                <span className="icon-cross">
                                    <img src="images/cross.svg" className="img-fluid" />
                                </span>
                            </a>
                        </div>
                        {/* <!-- End Column 3 --> */}

                        {/* <!-- Start Column 4 --> */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5">
                            <a className="product-item" href="contact">
                                <img src="images/พ่นโฟม4.jpg" className="img-fluid product-thumbnail" style={{ borderRadius: "10px" }} />
                                <h3 className="product-title">พ่นพียูโฟม ห้องใต้หลังคา</h3>
                                <h3><span>ความหนาตามที่ลูกค้าต้องการ</span></h3>
                                <button className="btn btn-dark mt-3 text-dark" style={{ background: "orange" }}>สอบถามราคา</button>

                                <span className="icon-cross">
                                    <img src="images/cross.svg" className="img-fluid" />
                                </span>
                            </a>
                        </div>
                        {/* <!-- End Column 4 --> */}
                        <p className="bg-secondary bg-gradient text-dark"> ***หมายเหตุ สำหรับการเดินทางไปหน้างาน ในเขตพื้นกรุงเทพ**ฟรี**
                            เขตพื้นต่างจังหวัด คิดตามระยะทาง</p>
                        <p className="bg-warning bg-gradient text-dark mt-5" style={{ borderRadius: "6px" }}><i className="fa fa-bullhorn" style={{ fontSize: "25px" }}></i> ทางบริษัทของเรา ในการทำงานทุกครั้ง
                            มีการทำสื่อ ทางโซเชียลมิเดีย ไลฟ์สด ขั้นตอนการสร้างทุกขั้นตอน เพื่อให้ลูกค้าเกิดความมั่นใจ ในคุณภาพของงาน และขั้นตอนสุดท้าย
                            เรามีการ บินโดรน สำรวจบนที่สูง ทั้งนี้ถือเป็นการ โปรโหมดสถานที่ให้ ลูกค้าไปในตัว โดยที่ลูกค้าไม่เสียค่าใช้จ่าย
                            สำหรับทำสื่อใดๆ
                        </p>

                    </div>
                </div>
            </div>

            {/* Footer */}

            <footer className="footer-section">
                <div className="container relative">
                    {/* รูปวงกลมด้านล่าง */}
                    <div className="sofa-img">
                        <img src="images/Logo.jpg" alt="Image" className="img-fluid" style={{ width: "300px", borderRadius: "50%" }} />
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
                                <p className="mb-2 text-center text-lg-start">Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash; บริษัท ธนะบอมฐ์ คอนทรัคชั่น จำกัด <a href="/">แพลอยน้ำ.com</a><a hreff="#"></a>
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