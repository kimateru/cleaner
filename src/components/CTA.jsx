import React from 'react'
import { useTranslation } from 'react-i18next'
import { Phone } from 'lucide-react'
const CTA = ({ heading }) => {
    const { t } = useTranslation()
    return (
        <div className="text-center animate-fade-in">
            <div className="bg-[#456C5D] text-white w-full mx-auto py-6 rounded-lg border shadow-sm" style={{ backgroundColor: '#456C5D' }}>
                <div className="p-8">
                    <h3 className="text-3xl lg:text-4xl font-gill-sans font-bold mb-3">{heading || t('upholstery.readyToRestore')}</h3>
                    <div className="flex justify-center mt-3">
                        <a href="tel:+37369971222" className="bg-white text-main-green font-gill-sans transition-all duration-300 sm:w-[280px] rounded-xl py-3 px-8 hover:scale-105 flex items-center justify-center gap-3">
                            <Phone className="w-6 h-6 lg:w-8 lg:h-8" />
                            <span className='text-2xl lg:text-3xl font-semibold tracking-wide'>
                                +373 (69) 971222
                            </span>
                        </a>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default CTA