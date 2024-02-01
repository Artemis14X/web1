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

function Nevbar() {
    return (
        <>
            <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

                <div className="container">
                    <a className="navbar-brand"  href="/">แพลอยน้ำ</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsFurni">
                        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">หน้าแรก</a>
                            </li>
                            <li><a className="nav-link" href="Shop">สินค้า</a></li>
                            <li><a className="nav-link" href="About">เกี่ยวกับเรา</a></li>
                            <li><a className="nav-link" href="/Blog">ผลงานของเรา</a></li>
                            <li><a className="nav-link" href="Contact">ติดต่อเรา</a></li>
                        </ul>

                        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                            <li ><a className="nav-link" onClick={showSwal}><img src="images/user.svg"/></a></li>
                            <li><a className="nav-link" href="/Cart"><img src="images/cart.svg"/></a></li>
                        </ul>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Nevbar;