// Sauvegarde en ligne (Supabase) + anti-robot (Cloudflare Turnstile).
// url : adresse du projet. key : clé PUBLIQUE (publishable). captcha : clé du SITE Turnstile (publique).
// Ne mets jamais ici une clé secrète (secret / service_role / Turnstile Secret Key).
window.CARNET_CFG={
  url:"https://lsrsgutmhespnqnynjno.supabase.co",
  key:"sb_publishable_pXqIInrsyjHsW08dJNWCzw_5qncJLa2",
  captcha:"0x4AAAAAAFunQE5wJvpM2Ab0",
  // Abonnement : texte affiché quand l'abonnement expire bientôt (comment payer), et numéro WhatsApp du support (indicatif + numéro, chiffres seulement).
  // Paiement automatique de l'abonnement (SasPay) : pay:true affiche le bouton. prix et jours servent seulement à l'affichage (le serveur décide du vrai montant).
  pay:true,
  prix:3100,
  jours:30,
  abo:"",
  wa:""};
