function blog() {
    return (
        <>
            <div className="blog-section ">
                <div className="container ">
                    <div className="row mb-5">
                        <div className="col-md-6">
                            <h2 className="section-title">ผลงานที่ผ่านมา</h2>
                        </div>
                        <div className="col-md-6 text-start text-md-end">
                            <a href="/Blog" className="more">ดูทั้งหมด</a>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                            <div className="post-entry">
                                <a href="#" className="post-thumbnail" ><img src="images/แพบ้าน.jpg" alt="Image" className="img-fluid" /></a>
                                <div className="post-content-entry">
                                    <h3><a href="#">แพลอยน้ำแบบมีห้อง</a></h3>
                                    <div className="meta">
                                        <span>by <a href="#">จีระยุทธ วงษ์คำเหลา</a></span> <span><a href="#"></a></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                            <div className="post-entry">
                                <a href="#" className="post-thumbnail"><img src="images/แพ2.jpg" alt="Image" className="img-fluid" /></a>
                                <div className="post-content-entry">
                                    <h3><a href="#">แพลยน้ำแบบ โล่งมีสะพาน</a></h3>
                                    <div className="meta">
                                        <span>by <a href="#">จีระยุทธ วงษ์คำเหลา</a></span> <span> <a href="#"></a></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                            <div className="post-entry">
                                <a href="#" className="post-thumbnail"><img src="images/แพ1.jpg" alt="Image" className="img-fluid" /></a>
                                <div className="post-content-entry">
                                    <h3><a href="#">แบลอยน้ำ แบบหลังคาจั่ว</a></h3>
                                    <div className="meta">
                                        <span>by <a href="#">จีระยุทธ วงษ์คำเหลา</a></span> <span> <a href="#"></a></span>
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

export default blog;