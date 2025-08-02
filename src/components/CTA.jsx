import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { useTranslation } from 'react-i18next'

const CTA = ({ heading }) => {
    const { t } = useTranslation()
    return (
        <div className="text-center animate-fade-in">
            <Card className="bg-gradient-to-r from-main-green to-secondary-green text-white w-full mx-auto py-6">
                <CardContent className="p-8">
                    <h3 className="text-3xl font-gill-sans font-bold mb-3">{heading || t('upholstery.readyToRestore')}</h3>
                    <p className="text-lg font-doxent-light mb-4 opacity-90">
                        {t('upholstery.callNow')}
                    </p>
                    <div className="flex justify-center">
                        <a href="tel:+37360123456" className="bg-white text-main-green font-gill-sans text-lg transition-all duration-300 sm:w-[250px] rounded-xl py-1 px-8 hover:scale-105">
                            📞 +373 (60) 123-456
                        </a>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default CTA