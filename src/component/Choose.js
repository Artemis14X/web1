function help() {
    return (
        <>
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
                                        <h3  style={{borderRadius: "10px" ,}} > <strong>จัดส่งเร็วถึงหน้าบ้าน</strong></h3>
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
                                        <p>สามารถติดต่อเข้ามาสอบถาม ประเมินราคา และคุณสมบัติ ของวัสดุที่ใช้</p>
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
                            <div className="img-wrap" style={{ width: "100%"}}>
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
        </>
    )
}

export default help;