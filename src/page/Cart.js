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

export default function Cart() {
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
                            <li><a className="nav-link" href="About">เกี่ยวกับเรา</a></li>
                            <li><a className="nav-link" href="blog">ผลงานของเรา</a></li>
                            <li><a className="nav-link" href="/Contact">ติดต่อเรา</a></li>
                        </ul>

                        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                            <li><a className="nav-link" onClick={showSwal}><img src="images/user.svg" /></a></li>
                            <li><a className="nav-link" href="Cart"><img src="images/cart.svg" /></a></li>
                        </ul>
                    </div>
                </div>

            </nav>

            <div className="hero bg-primary bg-gradient">
                <div className="container">
                    <div className="row justify-content-between ">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>รถเข็น</h1>
                            </div>
                        </div>
                        <div className="col-lg-7">

                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Hero Section --> */}

            <div class="untree_co-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center pt-5 shadow p-3 mb-5 bg-body rounded">
                            <span class="display-3 thankyou-icon text-primary">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart-check mb-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M11.354 5.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                    <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                </svg>
                            </span>
                            <h2 class="display-3 text-black " style={{ textShadow: "black 10px 10px 10px 10px" }}>Comming Soon...!</h2>
                            <p class="lead mb-5 mt-5">กำลังปรับปรุงระบบ การซื้อขายออนไลน์ กรุณาโทรติดต่อ หรือ แอดไลน์สอบถาม หรือสั่งซื้อสินค้า</p>
                            <ul className="list-unstyled custom-social" style={{ fontSize: "40px", display: "flex", justifyContent: "center", padding: "30px" }}>
                                <li><a href="https://www.facebook.com/jeerayut.wongkumlao"><span className="fa fa-brands fa-facebook-f " style={{ paddingRight: "30px", color: "blue" }}></span></a></li>
                                <li><a href="#"><span className="fa fa-brands fa-line" style={{ paddingRight: "30px", color: "#06C755" }}></span></a></li>
                                <li><a href="#"><span className="fa fa-brands fa-instagram" style={{ paddingRight: "30px", color: "#330066" }}></span></a></li>
                                <li><a href="#"><span className="fa fa-brands fa-youtube" style={{ color: "red" }}></span></a></li>
                            </ul>
                            <p><a href="/Shop" class="btn btn-sm btn-outline-black mt-3">กลับไปที่ร้านค้า</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer-section mt-5">
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

            </footer>
        </>
    )
}