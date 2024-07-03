import React from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/footer'
import Link from "next/link"

export default function page() {
  return (
    <div>
        <Navbar />
        <div className="container mx-auto px-4 py-8 font-darker-grotesque">
      <h1 className="text-4xl font-bold text-[#4C3768] mb-6">Politique de Confidentialité</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#4C3768] mb-4">1. Introduction</h2>
        <p className="mb-2">
          POMA s'engage à protéger la vie privée des utilisateurs de notre application. Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos informations personnelles.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#4C3768] mb-4">2. Informations collectées</h2>
        <p className="mb-2">Nous collectons les informations suivantes :</p>
        <ul className="list-disc pl-6 mb-2">
          <li>Informations d'identification (nom, prénom, âge)</li>
          <li>Coordonnées (adresse e-mail, numéro de téléphone)</li>
          <li>Préférences et centres d'intérêt</li>
          <li>Données d'utilisation de l'application</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#4C3768] mb-4">3. Utilisation des informations</h2>
        <p className="mb-2">Nous utilisons vos informations pour :</p>
        <ul className="list-disc pl-6 mb-2">
          <li>Faciliter les mises en relation entre grands-parents et petits-enfants de cœur</li>
          <li>Personnaliser votre expérience utilisateur</li>
          <li>Améliorer nos services</li>
          <li>Communiquer avec vous concernant votre compte et nos services</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#4C3768] mb-4">4. Partage des informations</h2>
        <p className="mb-2">
          Nous ne vendons pas vos informations personnelles. Nous pouvons partager vos informations avec :
        </p>
        <ul className="list-disc pl-6 mb-2">
          <li>D'autres utilisateurs de l'application, dans le cadre des mises en relation</li>
          <li>Nos prestataires de services, qui nous aident à fournir et améliorer nos services</li>
          <li>Les autorités légales, si la loi l'exige</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#4C3768] mb-4">5. Sécurité des données</h2>
        <p className="mb-2">
          Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos informations contre tout accès non autorisé, modification, divulgation ou destruction.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#4C3768] mb-4">6. Vos droits</h2>
        <p className="mb-2">
          Conformément au RGPD, vous avez le droit d'accéder, de rectifier, de supprimer vos données personnelles, de limiter leur traitement, de vous opposer au traitement et à la portabilité des données. Pour exercer ces droits, contactez-nous à <a href="mailto:privacy@poma.com" className="text-[#6C4F96] hover:underline">privacy@poma.com</a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#4C3768] mb-4">7. Modifications de la politique</h2>
        <p className="mb-2">
          Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#4C3768] mb-4">8. Contact</h2>
        <p className="mb-2">
          Pour toute question concernant cette politique de confidentialité, veuillez nous contacter à <a href="mailto:privacy@poma.com" className="text-[#6C4F96] hover:underline">privacy@poma.com</a>.
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
