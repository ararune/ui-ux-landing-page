// src/components/Contact.tsx
import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa';

interface ContactProps {
    primaryGlow: string;
    viteButton: string;
}

const Contact: React.FC<ContactProps> = ({ viteButton }) => {
    
    // Contact Details
    const phoneNumber = '+385 12 345 678';
    const emailAddress = 'info@heartwood.hr';
    const whatsappLink = `https://wa.me/${phoneNumber.replace(/\D/g, '').replace('+', '')}`;

    const ContactItem: React.FC<{ icon: React.ReactElement; label: string; detail: string; href?: string }> = ({ icon, label, detail, href }) => (
        <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 mt-1 text-purple-400">
                {icon}
            </div>
            <div>
                <p className="font-medium text-white">{label}</p>
                {href ? (
                    <a href={href} className="text-gray-400 hover:text-purple-400 transition-colors text-lg">
                        {detail}
                    </a>
                ) : (
                    <p className="text-gray-400 text-lg">{detail}</p>
                )}
            </div>
        </div>
    );

    return (
        <section id="kontakt" className="py-20 px-4 bg-[#111113] scroll-mt-20">
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Spremni za izgradnju prostora iz snova?
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                        Razgovarajmo o vašem projektu. Kontaktirajte nas za besplatne konzultacije i ponudu.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16">
                        
                        <div className="flex flex-col items-center">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${viteButton} bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-pink-600/30 flex items-center justify-center`}
                            >
                                <FaWhatsapp className="w-5 h-5 mr-2" />
                                Chat na WhatsAppu
                            </a>
                            <p className="text-gray-300 text-sm font-medium mt-2">{phoneNumber}</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <a
                                href={`mailto:${emailAddress}`}
                                className="flex items-center justify-center px-8 py-3 border border-white text-white rounded-lg hover:bg-gray-500/10 transition-colors"
                            >
                                <FaEnvelope className="w-5 h-5 mr-2" />
                                Pošaljite Email
                            </a>
                            <p className="text-gray-300 text-sm font-medium mt-2">{emailAddress}</p>
                        </div>
                    </div>
                </div>
            
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto text-left">
                    <ContactItem 
                        icon={<FaMapMarkerAlt className="w-6 h-6" />}
                        label="Lokacija"
                        detail="Ulica stolara 5, 21000 Split, Hrvatska"
                    />
                    <ContactItem 
                        icon={<FaPhone className="w-6 h-6" />}
                        label="Telefon"
                        detail={phoneNumber}
                        href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                    />
                    <ContactItem 
                        icon={<FaEnvelope className="w-6 h-6" />}
                        label="Email"
                        detail={emailAddress}
                        href={`mailto:${emailAddress}`}
                    />
                    <ContactItem 
                        icon={<FaClock className="w-6 h-6" />}
                        label="Radno Vrijeme"
                        detail="Pon-Pet: 8:00 - 16:00 | Sub: 9:00 - 13:00"
                    />
                </div>
            </div>
        </section>
    );
};

export default Contact;