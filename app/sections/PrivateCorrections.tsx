import React from 'react'
import ButtonCta from '../components/buttonCta'

export default function PrivateCorrections() {
  return (
    <section className='private-correction'>
        <div className='w-(--container) mx-auto'>
            <div>
                <h3 className='font-mono font-light text-2xl'>Private Corrections</h3>
                <p className='font-manrope text-lg font-normal'>
                    Alerts happen locally on the user's screen with a friendly  interface that looks and feels like a spell-check. If they fix the issue, no one needs to know.
                </p>
            </div>
              <div>
                <h3 className='font-mono font-light text-2xl'>Aggregate Analytics</h3>
                <p className='font-manrope text-lg font-normal'>
                   You get a dashboard showing which policies are being triggered and fixed, so you can identify confusion, without singling out specific employees.
                </p>
            </div>
            <div>
                <ButtonCta classBtn={" border-2.3 !border-black !px-7 !py-[9px] mt-6"}>
                       
                <p className=" text-base capitalize">Try It Yourself</p>
                </ButtonCta>
            </div>
        </div>
    </section>
  )
}
