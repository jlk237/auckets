export default function handler(req, res) {
  res.status(200).json({
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseAnon: process.env.SUPABASE_ANON_KEY,
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY
  });
}
