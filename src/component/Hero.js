function hero() {
    return (
        <>
            <div className="hero bg-dark bg-gradient">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>ทำแพลอยน้ำ <span clsas="d-block">ฉีดโฟมทุ่นลอยน้ำ</span></h1>
                                <p className="mb-4">รับสร้างแพลอยน้ำ ฉีดโฟมทุ่นลอยน้ำ จำหน่ายถังฉีดโฟม ทุ่นแพสูบน้ำ ทุ่นลอยน้ำ รับอุดรอยรั่ว ซ่อมแซมแพสูบน้ำ รับซ่อมทุ่นรั่ว ทุ่นแตก ทุ่นชำรุด เสื่อมสภาพป้องกันน้ำเข้าทุ่น แพจม แพเอียง พ่นโฟมหลังคา พ่นโฟมกันร้อน</p>
                                <p><a href="/Shop" className="btn btn-secondary me-2">สินค้า</a><a href="Blog" className="btn btn-white-outline">สำรวจ</a></p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="hero-img-wrap">
                                <img src="images/แพ1.jpg" className="img-fluid mt-4 shadow-lg p-2 mb-5 bg-body rounded" style={{ height:"400px", borderRadius: "30px"}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default hero;