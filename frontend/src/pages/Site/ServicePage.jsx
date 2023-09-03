import React from 'react'
import { GradientHeader } from '../../Components'

const ServicePage = () => {
    return (
        <main className='container-fluid d-flex p-0 vh-100'>
            <section className='container-fluid overflow-y-scroll mt-5 px-5 py-3'>
                <GradientHeader title={'Menu of Services'} />
                <div className='rounded-3 p-4 gr' style={{backgroundColor: '#B2830BBF'}}>
                    <div className=' d-flex align-items-start p-3 gap-4'>
                        <h3 className='col-lg-5 p-3 border border-dark border-1 rounded-3 bg-warning'>Dermatologica Facial Services</h3>
                        <ul className='px-5 py-4 border-top border-bottom border-1 border-dark' style={{backgroundColor: '#FFFFFF40'}}>
                            <li>Deep Cleansing Facial (For Normal skin Tone)</li>
                            <li>Anti-Oxidant Facial (for Oily to Pimple Probe Skin)</li>
                            <li>Rejuvinating Facial (for Dry, Oily, to Normal Skin)</li>
                            <li>Whitening Derma for All Skin Types</li>
                        </ul>
                    </div>

                    <div className=' d-flex align-items-start p-3 gap-4'>
                        <h3 className='col-5 p-3 border border-dark border-1 rounded-3 bg-warning'>Therapeutic Facial Treatment</h3>
                        <ul className='px-5 py-4 border-top border-bottom border-1 border-dark' style={{backgroundColor: '#FFFFFF40'}}>
                            <li>Acne Treatment</li>
                            <li>Intralesional Acne Injection</li>
                            <li>Glycolic Acid Peel (AHIA) Theraphy</li>
                        </ul>
                    </div>

                    <div className=' d-flex align-items-start p-3 gap-4'>
                        <h3 className='col-5 p-3 border border-dark border-1 rounded-3 bg-warning'>Removal / Extraction / Excision</h3>
                        <ul className='px-5 py-4 border-top border-bottom border-1 border-dark' style={{backgroundColor: '#FFFFFF40'}}>
                            <li>Warts Removal (Electrocautery)</li>
                            <li>Milia Extraction + Electrocautery</li>
                            <li>Oil Cyst or Cholesterol Cyst</li>
                            <li>Keloid Intralesional Injection</li>
                        </ul>
                    </div>

                    <div className=' d-flex align-items-start p-3 gap-4'>
                        <h3 className='col-5 p-3 border border-dark border-1 rounded-3 bg-warning'>Skin Rejuvination</h3>
                        <ul className='px-5 py-4 border-top border-bottom border-1 border-dark' style={{backgroundColor: '#FFFFFF40'}}>
                            <li>Lontophoresis Therapy + Facial</li>
                            <li>(Combination of Vit. C and Hyaluronic Serum)</li>
                            <li>Diamond Power + Facial</li>
                        </ul>
                    </div>

                    <div className=' d-flex align-items-start p-3 gap-4'>
                        <h3 className='col-5 p-3 border border-dark border-1 rounded-3 bg-warning'>RF + Cavitation LIPO</h3>
                        <ul className='px-5 py-4 border-top border-bottom border-1 border-dark' style={{backgroundColor: '#FFFFFF40'}}>
                            <li>(Skin Tightening and Body contouring Treatment)</li>
                            <li>Face</li>
                            <li>Tummy</li>
                        </ul>
                    </div>

                    <div className=' d-flex align-items-start p-3 gap-4'>
                        <h3 className='col-5 p-3 border border-dark border-1 rounded-3 bg-warning'>Laser Treatment</h3>
                        <ul className='px-5 py-4 border-top border-bottom border-1 border-dark' style={{backgroundColor: '#FFFFFF40'}}>
                            <li>IPL (for Facial, Skin Rejuvination, Wrinkle Removal, Figment Removal)</li>
                            <li>IPL (Upper Lip/ Underarm/ Bikini Area/ Legs)</li>
                            <li>Tummy</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ServicePage