'use client';

import React, { useState } from 'react';
import { Header, Footer, ContactModal, ThemeProvider, ModalProvider } from '@cidqueiroz/cdkteck-ui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const customSobreLinks = [
  { href: '/sobre', text: 'Filosofia & Identidade', external: false },
  { href: '/pbi', text: 'Portfólio de Dashboards', external: false },
  { href: '/portfolio', text: 'Laboratório de Projetos', external: false },
  { href: '/certificados', text: 'Certificados', external: false },
];

const customUniversoLinks = [
  { href: '/', text: 'CDK TECK (Home)', external: false, disabled: false },
  { href: 'https://papodados.cdkteck.com.br', text: 'PapoDados', external: true, disabled: true },
  { href: 'https://cacapreco.cdkteck.com.br', text: 'Caça-Preço', external: true, disabled: true },
  { href: 'https://senseidb.cdkteck.com.br', text: 'SenseiDB', external: true, disabled: false },
  { href: 'https://gestaorpd.cdkteck.com.br', text: 'Gestão RPD', external: true, disabled: false },
  { href: 'https://biocoach.cdkteck.com.br', text: 'BioCoach', external: true, disabled: true },
];

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const pathname = usePathname();

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);
  
  const NextLink = ({ href, className, children, ...props }: any) => (
    <Link href={href} className={className} {...props}>{children}</Link>
  );

  const isHomePage = pathname === '/';

  return (
    <ThemeProvider>
      <ModalProvider> {/* Provider para os modais das páginas filhas */}
        {!isHomePage && <Header 
          LinkComponent={NextLink}
          usePathname={() => pathname}
          customSobreLinks={customSobreLinks}
          customUniversoLinks={customUniversoLinks}
          />}
        
        <main>{children}</main>

         {!isHomePage && <Footer
            openContactModal={openContactModal}
            LinkComponent={NextLink}
          />}
        
        {/* O ContactModal é gerenciado de forma independente */}
        <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
        
        {!isHomePage && (
          <button 
            className="fixed-contact-button" 
            onClick={openContactModal}
            aria-label="Abrir formulário de contato"
          >
            <i className="fas fa-envelope"></i>
          </button>
        )}
      </ModalProvider>
    </ThemeProvider>
  );
}