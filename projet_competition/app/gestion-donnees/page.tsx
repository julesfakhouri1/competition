import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import Link from "next/link"

export default function page() {
  return (
    <div>
        <Navbar />
        <div className="container mx-auto px-4 py-8 font-darker-grotesque">
      <h1 className="text-4xl font-bold text-[#4C3768] mb-6">Gestion des Données</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#4C3768] mb-4">1. Collecte des données</h2>
        <p className="mb-2">
          POMA collecte les données personnelles suivantes :
        </p>
        <ul className="list-disc pl-6 mb-2">
          <li>Nom et prénom</li>
          <li>Adresse e-mail</li>
          <li>Âge</li>
          <li>Centres d'intérêt</li>
          <li>Préférences de mise en relation</li>
        </ul>
        <p className="mb-2">
          Ces données sont collectées lors de votre inscription et de l'utilisation de notre application.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#4C3768] mb-4">2. Utilisation des données</h2>
        <p className="mb-2">
          Vos données sont utilisées pour :
        </p>
        <ul className="list-disc pl-6 mb-2">
          <li>Créer et gérer votre compte utilisateur</li>
          <li>Faciliter la mise en relation entre grands-parents et petits-enfants de cœur</li>
          <li>Personnaliser votre expérience sur notre plateforme</li>
          <li>Vous informer sur nos services et événements</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#4C3768] mb-4">3. Protection des données</h2>
        <p className="mb-2">
          POMA s'engage à protéger vos données personnelles. Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour prévenir la perte, l'utilisation abusive, l'altération ou la divulgation de vos informations personnelles.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#4C3768] mb-4">4. Durée de conservation</h2>
        <p className="mb-2">
          Vos données personnelles sont conservées aussi longtemps que nécessaire pour les finalités pour lesquelles elles ont été collectées, et conformément aux obligations légales.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#4C3768] mb-4">5. Vos droits</h2>
        <p className="mb-2">
          Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
        </p>
        <ul className="list-disc pl-6 mb-2">
          <li>Droit d'accès à vos données personnelles</li>
          <li>Droit de rectification de vos données</li>
          <li>Droit à l'effacement de vos données</li>
          <li>Droit à la limitation du traitement</li>
          <li>Droit à la portabilité de vos données</li>
          <li>Droit d'opposition au traitement de vos données</li>
        </ul>
        <p className="mb-2">
          Pour exercer ces droits, veuillez nous contacter à l'adresse suivante : <a href="mailto:privacy@poma.com" className="text-[#6C4F96] hover:underline">privacy@poma.com</a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#4C3768] mb-4">6. Modifications de notre politique</h2>
        <p className="mb-2">
          Nous nous réservons le droit de modifier cette politique de gestion des données à tout moment. Toute modification sera publiée sur cette page.
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
