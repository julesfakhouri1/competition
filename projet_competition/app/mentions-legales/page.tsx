import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import Link from "next/link"

export default function page() {
  return (
    <div>
        <Navbar />
        <div className="container mx-auto px-4 py-8 font-darker-grotesque">
      <h1 className="text-4xl font-bold text-[#4C3768] mb-6">Mentions Légales</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#4C3768] mb-4">1. Informations légales</h2>
        <p className="mb-2">
          Nom de l'entreprise : POMA
          <br />
          Forme juridique : [Insérer forme juridique]
          <br />
          Siège social : [Insérer adresse]
          <br />
          SIRET : [Insérer numéro SIRET]
          <br />
          Directeur de la publication : [Nom du directeur]
          <br />
          Contact : <a href="mailto:contact@poma.com" className="text-[#6C4F96] hover:underline">contact@poma.com</a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#4C3768] mb-4">2. Hébergement</h2>
        <p className="mb-2">
          Ce site est hébergé par : [Nom de l'hébergeur]
          <br />
          Adresse : [Adresse de l'hébergeur]
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#4C3768] mb-4">3. Propriété intellectuelle</h2>
        <p className="mb-2">
          L'ensemble du contenu de ce site (textes, images, vidéos) est la propriété exclusive de POMA ou de ses partenaires. Toute reproduction, même partielle, est interdite sans autorisation préalable.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#4C3768] mb-4">4. Protection des données personnelles</h2>
        <p className="mb-2">
          Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ces droits, veuillez nous contacter à l'adresse suivante : <a href="mailto:privacy@poma.com" className="text-[#6C4F96] hover:underline">privacy@poma.com</a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#4C3768] mb-4">5. Cookies</h2>
        <p className="mb-2">
          Ce site utilise des cookies pour améliorer l'expérience utilisateur. En continuant à naviguer sur ce site, vous acceptez l'utilisation de ces cookies.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#4C3768] mb-4">6. Loi applicable et juridiction</h2>
        <p className="mb-2">
          Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
        </p>
      </section>

      <div className="mt-8">
        <Link href="/" className="text-[#6C4F96] hover:underline">
          Retour à l'accueil
        </Link>
      </div>
    </div>
        <Footer />
    </div>
  )
}
