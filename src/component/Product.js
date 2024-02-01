
function product() {
    return (
        <>
            <div className="product-section bg-info bg-gradient">
                <div className="container">
                    <div className="row shadow p-3 mb-5 bg-body rounded">
                        <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                            <h2 className="mb-4 section-title">ถังฉีดพียูโฟม</h2>
                            <p className="mb-2">ถังฉีดโฟมมือสอง สภาพเหมือนใหม่ และถังฉีดโฟมมือ1  </p>
                            <strong className="bg-danger text-white" style={{fontSize: "16px", borderRadius: "6px" , padding: "0.21rem"}}>***สำคัญ ก่อนสั่งซื้อกรุณาแจ้งให้ทีมงานหรือ แอดมินเพจ !!!</strong>
                            <p className="mt-3"><a href="/Shop" className="btn">ร้านค้า</a></p>
                        </div>

                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <a className="product-item bg-primary bg-gradient" style={{ borderRadius: "20px"}} href="shop">
                                <img src="images/F1.jpg" className="img-fluid product-thumbnail" style={{borderRadius: "20px 20px 0px 0px"}} />
                                <h3 className="product-title">ถังฉีดโฟมมือสอง</h3>
                                <strong className="product-price">1,550 บาท</strong>

                                <span className="icon-cross">
                                    <img src="images/cross.svg" className="img-fluid" />
                                </span>
                            </a>
                        </div>

                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <a className="product-item bg-primary bg-gradient " style={{ borderRadius: "20px"}} href="shop">
                                <img src="images/โฟมมือ2.jpg" className="img-fluid product-thumbnail" style={{borderRadius: "20px 20px 0px 0px"}} />
                                <h3 className="product-title">ถังฉีดโฟมมือสอง แบบ2 ขอบ บน/ล่าง</h3>
                                <strong className="product-price">1,600 บาท</strong>

                                <span className="icon-cross">
                                    <img src="images/cross.svg" className="img-fluid" />
                                </span>
                            </a>
                        </div>

                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <a className="product-item bg-primary bg-gradient" style={{ borderRadius: "20px"}} href="shop">
                                <img src="images/tnnew.jpg" className="img-fluid product-thumbnail" style={{borderRadius: "20px 20px 0px 0px"}} />
                                <h3 className="product-title">ถังฉีดโฟมมือ1</h3>
                                <strong className="product-price">2,100 บาท</strong>

                                <span className="icon-cross">
                                    <img src="images/cross.svg" className="img-fluid" />
                                </span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default product;