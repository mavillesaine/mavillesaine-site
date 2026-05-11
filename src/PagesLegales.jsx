import { useState } from "react";

// ============================================================
// MAVILLESAINE — Pages légales
// Mentions légales · CGU · Politique de confidentialité
// ============================================================
// UTILISATION :
// Importez ce composant dans votre site et affichez-le
// selon la page demandée (route /mentions-legales, /cgu, /confidentialite)
// ============================================================

const G = {
  vert:"#1a6b3c", vertClair:"#e8f5ee",
  dark:"#0a1628",
  g50:"#f8fafc", g100:"#f1f5f9", g200:"#e2e8f0",
  g500:"#64748b", g700:"#334155", g900:"#0f172a",
};

function PageLegale({ titre, children }) {
  return (
    <div style={{ fontFamily:"'Outfit','DM Sans',system-ui,sans-serif",
      background:G.g50, minHeight:"100vh" }}>
      {/* Nav */}
      <nav style={{ background:"#fff", padding:"0 40px", height:66, display:"flex",
        alignItems:"center", justifyContent:"space-between",
        boxShadow:"0 1px 0 #e2e8f0", position:"sticky", top:0, zIndex:100 }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <div style={{ width:34, height:34, background:G.vert, borderRadius:10,
            display:"flex", alignItems:"center", justifyContent:"center", fontSize:17 }}>🏘️</div>
          <span style={{ fontSize:18, fontWeight:900, color:G.g900 }}>
            <span style={{color:"#1a4a8a"}}>MaVille</span><span style={{color:G.vert}}>Saine</span>
          </span>
        </div>
        <a href="/" style={{ fontSize:14, color:G.g500, textDecoration:"none" }}>← Retour au site</a>
      </nav>

      {/* Contenu */}
      <div style={{ maxWidth:780, margin:"0 auto", padding:"48px 40px" }}>
        <h1 style={{ fontSize:32, fontWeight:900, color:G.g900, marginBottom:8,
          letterSpacing:-0.5 }}>{titre}</h1>
        <div style={{ fontSize:13, color:G.g500, marginBottom:40 }}>
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR",{day:"numeric",month:"long",year:"numeric"})}
        </div>
        <div style={{ background:"#fff", borderRadius:16, padding:"36px 40px",
          boxShadow:"0 2px 16px rgba(0,0,0,0.06)", lineHeight:1.8 }}>
          {children}
        </div>
      </div>

      {/* Footer */}
      <footer style={{ background:G.dark, color:"rgba(255,255,255,0.4)",
        padding:"24px 40px", textAlign:"center", fontSize:12, marginTop:40 }}>
        © 2026 MaVilleSaine SAS · mavillesaine@hotmail.com
      </footer>
    </div>
  );
}

function H2({ children }) {
  return <h2 style={{ fontSize:18, fontWeight:800, color:G.g900, marginTop:32,
    marginBottom:12, paddingBottom:8, borderBottom:`2px solid ${G.vertClair}` }}>{children}</h2>;
}

function H3({ children }) {
  return <h3 style={{ fontSize:15, fontWeight:700, color:G.vert, marginTop:20, marginBottom:8 }}>{children}</h3>;
}

function P({ children }) {
  return <p style={{ fontSize:14, color:G.g700, marginBottom:12, lineHeight:1.8 }}>{children}</p>;
}

function Li({ children }) {
  return (
    <div style={{ display:"flex", gap:10, marginBottom:8, alignItems:"flex-start" }}>
      <span style={{ color:G.vert, fontWeight:700, flexShrink:0, marginTop:1 }}>•</span>
      <span style={{ fontSize:14, color:G.g700, lineHeight:1.7 }}>{children}</span>
    </div>
  );
}

// ── MENTIONS LÉGALES ──────────────────────────────────────────

export function MentionsLegales() {
  return (
    <PageLegale titre="Mentions légales">
      <H2>Éditeur du site</H2>
      <P>Le site <strong>mavillesaine.fr</strong> et l'application mobile <strong>MaVilleSaine</strong> sont édités par :</P>
      <P><strong>MaVilleSaine SAS</strong><br/>
      Société par Actions Simplifiée au capital de 1 000€<br/>
      Siège social : 23 impasse Valentin Haüy, 85000 La Roche-sur-Yon<br/>
      SIRET : [À COMPLÉTER après immatriculation]<br/>
      RCS : [À COMPLÉTER]<br/>
      Directeur de la publication : [NOM DU PRÉSIDENT]<br/>
      Email : mavillesaine@hotmail.com</P>

      <H2>Hébergement</H2>
      <P><strong>Backend API :</strong> Railway Technologies Inc. — 885 Park Ave, New York, NY 10075, USA<br/>
      <strong>Base de données :</strong> Supabase Inc. — 970 Toa Payoh North, Singapour<br/>
      <strong>Site web :</strong> Vercel Inc. — 340 Pine Street, Suite 1002, San Francisco, CA 94104, USA</P>
      <P>Les données des utilisateurs français sont stockées sur des serveurs hébergés dans l'Union Européenne conformément au RGPD.</P>

      <H2>Propriété intellectuelle</H2>
      <P>L'ensemble du contenu du site mavillesaine.fr et de l'application MaVilleSaine (textes, graphiques, logo, icônes, code source) est la propriété exclusive de MaVilleSaine SAS et est protégé par le droit d'auteur français et international.</P>
      <P>Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, de ces éléments, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable de MaVilleSaine SAS.</P>

      <H2>Limitation de responsabilité</H2>
      <P>MaVilleSaine SAS s'efforce d'assurer la précision et la mise à jour des informations diffusées sur ce site. Cependant, elle ne peut garantir l'exactitude, la complétude et l'actualité des informations diffusées sur ce site.</P>
      <P>MaVilleSaine SAS ne peut être tenue responsable des dommages directs ou indirects résultant de l'utilisation du site ou de l'impossibilité d'y accéder.</P>

      <H2>Droit applicable</H2>
      <P>Le présent site et ses mentions légales sont soumis au droit français. En cas de litige, les tribunaux français seront seuls compétents.</P>
    </PageLegale>
  );
}

// ── CONDITIONS GÉNÉRALES D'UTILISATION ───────────────────────

export function CGU() {
  return (
    <PageLegale titre="Conditions Générales d'Utilisation">

      <H2>Article 1 — Objet</H2>
      <P>Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation de l'application mobile et du site internet MaVilleSaine, édités par MaVilleSaine SAS.</P>
      <P>En utilisant l'application ou le site, vous acceptez sans réserve les présentes CGU. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services.</P>

      <H2>Article 2 — Description du service</H2>
      <P>MaVilleSaine est une application permettant aux citoyens de signaler des problèmes urbains (voirie, propreté, mobilier urbain, éclairage, graffiti) auprès de leur commune.</P>
      <H3>Pour les citoyens</H3>
      <P>L'application est <strong>100% gratuite</strong> pour les citoyens. Son utilisation ne requiert pas de création de compte. Aucune donnée personnelle n'est collectée à des fins commerciales.</P>
      <H3>Pour les communes</H3>
      <P>L'accès au back-office de gestion est réservé aux agents municipaux désignés (superviseurs) et est soumis à la souscription d'un abonnement par la commune.</P>

      <H2>Article 3 — Utilisation acceptable</H2>
      <P>En utilisant MaVilleSaine, vous vous engagez à :</P>
      <Li>Signaler uniquement des problèmes réels constatés sur la voie publique</Li>
      <Li>Fournir des photos et informations exactes et de bonne foi</Li>
      <Li>Ne pas utiliser le service à des fins frauduleuses, malveillantes ou contraires à la loi</Li>
      <Li>Ne pas effectuer de signalements abusifs, répétitifs ou sans fondement</Li>
      <Li>Respecter la vie privée des tiers dans les photos soumises (ne pas photographier de personnes sans leur consentement)</Li>

      <H2>Article 4 — Contenu soumis par les utilisateurs</H2>
      <P>En soumettant des photos et descriptions via l'application, vous accordez à MaVilleSaine SAS une licence non exclusive d'utilisation de ces contenus dans le cadre du traitement de votre signalement.</P>
      <P>Vous certifiez être l'auteur des photos soumises ou disposer des droits nécessaires pour les utiliser.</P>
      <P>MaVilleSaine SAS se réserve le droit de supprimer tout contenu inapproprié, offensant ou contraire à la loi.</P>

      <H2>Article 5 — Disponibilité du service</H2>
      <P>MaVilleSaine SAS s'efforce d'assurer la disponibilité du service 24h/24 et 7j/7. Cependant, des interruptions peuvent survenir pour des opérations de maintenance ou en cas de force majeure.</P>
      <P>MaVilleSaine SAS ne peut être tenue responsable des conséquences d'une indisponibilité temporaire du service.</P>

      <H2>Article 6 — Limitation de responsabilité</H2>
      <P>MaVilleSaine est un outil de signalement. La prise en charge et le traitement des signalements relèvent de la seule responsabilité de la commune concernée. MaVilleSaine SAS n'est pas responsable des délais ou de l'absence de traitement d'un signalement par une commune.</P>

      <H2>Article 7 — Modification des CGU</H2>
      <P>MaVilleSaine SAS se réserve le droit de modifier les présentes CGU à tout moment. Les modifications prennent effet dès leur publication sur le site. L'utilisation continue du service après modification vaut acceptation des nouvelles CGU.</P>

      <H2>Article 8 — Droit applicable</H2>
      <P>Les présentes CGU sont soumises au droit français. Tout litige relatif à leur interprétation ou à leur exécution relèvera de la compétence exclusive des tribunaux français.</P>
    </PageLegale>
  );
}

// ── POLITIQUE DE CONFIDENTIALITÉ ─────────────────────────────

export function Confidentialite() {
  return (
    <PageLegale titre="Politique de confidentialité">

      <div style={{ background:G.vertClair, borderRadius:12, padding:"14px 16px",
        border:"1px solid #86efac", marginBottom:24 }}>
        <div style={{ fontSize:14, fontWeight:700, color:G.vert, marginBottom:4 }}>
          🎁 Pour les citoyens : aucune donnée vendue, aucune publicité
        </div>
        <div style={{ fontSize:13, color:"#14532d", lineHeight:1.6 }}>
          MaVilleSaine collecte uniquement les données strictement nécessaires au fonctionnement du service.
          Vos données ne sont jamais revendues ni utilisées à des fins publicitaires.
        </div>
      </div>

      <H2>1. Responsable du traitement</H2>
      <P><strong>MaVilleSaine SAS</strong> — 23 impasse Valentin Haüy, 85000 La Roche-sur-Yon — mavillesaine@hotmail.com</P>

      <H2>2. Données collectées</H2>
      <H3>2.1 Lors d'un signalement (citoyen)</H3>
      <Li><strong>Localisation GPS</strong> : utilisée uniquement pour identifier la commune et géolocaliser le signalement. Non conservée à des fins de traçage.</Li>
      <Li><strong>Photos</strong> : 2 photos du problème signalé. Stockées de manière sécurisée et uniquement accessibles à la commune concernée.</Li>
      <Li><strong>Description</strong> : texte optionnel décrivant le problème.</Li>
      <Li><strong>Numéro de téléphone</strong> : optionnel, uniquement si vous souhaitez recevoir des notifications de suivi. Non utilisé à d'autres fins.</Li>

      <H3>2.2 Lors de la navigation sur le site</H3>
      <Li><strong>Logs de connexion</strong> : adresse IP, navigateur, pages visitées. Conservés 30 jours maximum à des fins de sécurité.</Li>
      <Li><strong>Formulaire de contact</strong> : nom, email, commune. Utilisés uniquement pour répondre à votre demande.</Li>

      <H3>2.3 Comptes superviseurs (agents municipaux)</H3>
      <Li>Nom, email, mot de passe chiffré (bcrypt)</Li>
      <Li>Historique des actions sur les signalements (traçabilité)</Li>

      <H2>3. Finalités du traitement</H2>
      <Li>Transmission du signalement à la commune compétente</Li>
      <Li>Suivi et résolution du signalement</Li>
      <Li>Notification au citoyen (si numéro fourni)</Li>
      <Li>Amélioration du service (statistiques anonymisées)</Li>
      <Li>Sécurité et prévention des abus</Li>

      <H2>4. Base légale</H2>
      <P>Le traitement est fondé sur :</P>
      <Li>L'exécution d'un service demandé par l'utilisateur (signalement)</Li>
      <Li>L'intérêt légitime de MaVilleSaine SAS à sécuriser et améliorer son service</Li>
      <Li>Le consentement de l'utilisateur pour les notifications (numéro de téléphone optionnel)</Li>

      <H2>5. Destinataires des données</H2>
      <P>Vos données sont accessibles :</P>
      <Li><strong>À la commune concernée</strong> : les superviseurs de la commune voient les signalements de leur territoire</Li>
      <Li><strong>À MaVilleSaine SAS</strong> : dans le cadre de la maintenance et de l'amélioration du service</Li>
      <P>Vos données ne sont jamais vendues ni transmises à des tiers commerciaux.</P>

      <H2>6. Durée de conservation</H2>
      <Li>Signalements résolus : conservés 2 ans puis archivés ou supprimés</Li>
      <Li>Numéros de téléphone : supprimés après résolution du signalement</Li>
      <Li>Comptes superviseurs : conservés pendant la durée du contrat + 1 an</Li>
      <Li>Logs de sécurité : 30 jours</Li>

      <H2>7. Sécurité des données</H2>
      <P>MaVilleSaine SAS met en œuvre les mesures techniques et organisationnelles appropriées :</P>
      <Li>Chiffrement des données en transit (HTTPS/TLS)</Li>
      <Li>Mots de passe hachés avec bcrypt (12 rounds)</Li>
      <Li>Authentification par token JWT à durée limitée</Li>
      <Li>Accès aux données restreint aux personnels autorisés</Li>
      <Li>Hébergement dans l'Union Européenne</Li>

      <H2>8. Vos droits (RGPD)</H2>
      <P>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</P>
      <Li><strong>Droit d'accès</strong> : obtenir une copie de vos données</Li>
      <Li><strong>Droit de rectification</strong> : corriger des données inexactes</Li>
      <Li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</Li>
      <Li><strong>Droit d'opposition</strong> : vous opposer à certains traitements</Li>
      <Li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</Li>
      <P>Pour exercer ces droits : <strong>mavillesaine@hotmail.com</strong><br/>
      Délai de réponse : 30 jours maximum.</P>
      <P>Vous disposez également du droit d'introduire une réclamation auprès de la CNIL (www.cnil.fr).</P>

      <H2>9. Cookies</H2>
      <P>Le site mavillesaine.fr n'utilise que des cookies strictement nécessaires au fonctionnement (session, sécurité). Aucun cookie publicitaire ou de tracking n'est utilisé.</P>

      <H2>10. Contact</H2>
      <P>Pour toute question relative à vos données personnelles :<br/>
      <strong>MaVilleSaine SAS — Délégué à la Protection des Données</strong><br/>
      Email : mavillesaine@hotmail.com<br/>
      23 impasse Valentin Haüy, 85000 La Roche-sur-Yon</P>
    </PageLegale>
  );
}

// ── APP (pour visualisation standalone) ──────────────────────

export default function PagesLegales({ page = "mentions", onBack }) {
  const [currentPage, setCurrentPage] = useState(page);
  return (
    <div>
      {/* Bouton retour */}
      <div style={{ position:"fixed", bottom:20, right:20, zIndex:999,
        background:"#fff", borderRadius:12, padding:"10px 14px",
        boxShadow:"0 4px 20px rgba(0,0,0,0.15)", display:"flex", gap:8, flexWrap:"wrap" }}>
        {[
          ["mentions","Mentions légales"],
          ["cgu","CGU"],
          ["confidentialite","Confidentialité"],
        ].map(([id,l])=>(
          <button key={id} onClick={()=>setCurrentPage(id)}
            style={{ padding:"6px 12px", borderRadius:8, border:"none", cursor:"pointer",
              background:currentPage===id?G.vert:"#f1f5f9",
              color:currentPage===id?"#fff":"#334155", fontSize:12, fontWeight:600 }}>{l}</button>
        ))}
        {onBack && <button onClick={onBack}
          style={{ padding:"6px 12px", borderRadius:8, border:"1px solid #e2e8f0",
            cursor:"pointer", background:"#fff", color:"#64748b", fontSize:12, fontWeight:600 }}>
          ← Retour
        </button>}
      </div>
      {currentPage==="mentions"         && <MentionsLegales/>}
      {currentPage==="cgu"              && <CGU/>}
      {currentPage==="confidentialite"  && <Confidentialite/>}
    </div>
  );
}
