export default async function handler(req, res) {
  const apiKey = process.env.FORMBRICKS_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'FORMBRICKS_API_KEY not set' });

  const r = await fetch(
    'https://app.formbricks.com/api/v1/management/surveys/cmomkosjf60cbx1017ai6d0jl',
    { headers: { 'x-api-key': apiKey } }
  );

  const json = await r.json();
  if (!r.ok) return res.status(502).json({ error: 'upstream failed', detail: json });

  // DEBUG: return raw to find correct path
  res.json({ raw: json });
}
