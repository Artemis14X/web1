function popular() {
    return (
        <>
            <div className="popular-product">
                <div className="container">
                    <div className="row " >

                        <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="product-item-sm d-flex " >
                                <div className="thumbnail" >
                                    <img src="images/01.jpg" alt="Image" className="img-fluid" style={{borderRadius: "10px"}} />
                                </div>
                                <div className="pt-3" >
                                    <h3>พ่นโฟมผนัง</h3>
                                    <p>กันลามไฟ กั้กเสียง กันความร้อน </p>
                                    <p><a href="#">ติดต่อ</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="product-item-sm d-flex">
                                <div className="thumbnail">
                                    <img src="images/02.jpg" alt="Image" className="img-fluid" style={{borderRadius: "10px"}} />
                                </div>
                                <div className="pt-3">
                                    <h3>ฉีดโฟมช่องชาร์ป</h3>
                                    <p>ฉีดโฟมช่องชาร์ป </p>
                                    <p><a href="#">ติดต่อ</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="product-item-sm d-flex">
                                <div className="thumbnail">
                                    <img src="images/03.jpg" alt="Image" className="img-fluid" style={{borderRadius: "10px"}} />
                                </div>
                                <div className="pt-3">
                                    <h3>พ่นหลังคา ฉนวนกันความร้อน</h3>
                                    <p>พ่นกันความร้อน ความหนาตามที่ลูกค้าต้องการ </p>
                                    <p><a href="#">ติดต่อ</a></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="testimonial-section ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 mx-auto text-center">
                            <h2 className="section-title">ติดต่อเรา</h2>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="testimonial-slider-wrap text-center">

                                <div id="testimonial-nav">
                                    <span className="prev" data-controls="prev"><span className="fa fa-chevron-left"></span></span>
                                    <span className="next" data-controls="next"><span className="fa fa-chevron-right"></span></span>
                                </div>

                                <div className="testimonial-slider ">

                                    <div className="item">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-8 mx-auto">

                                                <div className="testimonial-block text-center ">
                                                    <blockquote className="mb-5">
                                                        <p>&ldquo; สามารถติดต่อเราได้ ตามช่องทาง ของ Facebook, Line, Instagram และติดตามผลงานของเรา ได้ผ่านช่องทาง Youtube, Facebook เว็ปไซท์ ของเรา &rdquo;</p>
                                                    </blockquote>

                                                    <div className="author-info">
                                                        <div className="author-pic">
                                                            <img src="images/person-1.png" alt="Maria Jones" className="img-fluid" />
                                                        </div>
                                                        <h3 className="font-weight-bold">จีระยุทธ วงษ์คำเหลา</h3>
                                                        <span className="position d-block mb-3">ฝ่ายขาย</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default popular;