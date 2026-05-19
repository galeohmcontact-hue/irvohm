const Stripe = require('stripe');

exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Corps de requête invalide.' }) };
  }

  const { paymentMethodId, paiement, borne, totalTTC, client, date, heure } = body;

  if (!paymentMethodId || !totalTTC || !client) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Données manquantes.' }) };
  }

  // Montant à débiter maintenant (en centimes)
  const montant = paiement === 'acompte'
    ? Math.ceil(totalTTC * 0.4)
    : totalTTC;

  const montantCentimes = Math.round(montant * 100);

  // Description lisible sur le tableau de bord Stripe
  const description = paiement === 'acompte'
    ? `IRV'OHM — Acompte 40% — ${borne} — Installation le ${date} ${heure}`
    : `IRV'OHM — Paiement comptant — ${borne} — Installation le ${date} ${heure}`;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: montantCentimes,
      currency: 'eur',
      payment_method: paymentMethodId,
      confirm: true,
      description,
      receipt_email: client.email,
      metadata: {
        borne,
        totalTTC: String(totalTTC),
        paiement,
        date,
        heure,
        prenom: client.prenom,
        nom: client.nom,
        tel: client.tel,
        adresse: client.adresse,
      },
      // Stripe gère le 3D Secure automatiquement
      return_url: `${process.env.SITE_URL}/confirmation.html?mode=carte`,
    });

    // 3D Secure requis
    if (paymentIntent.status === 'requires_action') {
      return {
        statusCode: 200,
        body: JSON.stringify({
          requiresAction: true,
          clientSecret: paymentIntent.client_secret,
        }),
      };
    }

    if (paymentIntent.status === 'succeeded') {
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ error: 'Paiement non abouti. Veuillez réessayer.' }),
    };

  } catch (err) {
    console.error('Stripe error:', err);
    return {
      statusCode: 200,
      body: JSON.stringify({ error: err.message || 'Erreur lors du paiement.' }),
    };
  }
};
