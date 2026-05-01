export default async function handler(req, res) {
  const apiKey = process.env.FORMBRICKS_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'FORMBRICKS_API_KEY not set' });

  const r = await fetch(
    'https://app.formbricks.com/api/v1/management/responses?surveyId=cmomkosjf60cbx1017ai6d0jl&limit=1',
    { headers: { 'x-api-key': apiKey } }
  );

  const json = await r.json();
  if (!r.ok) return res.status(502).json({ error: 'upstream failed', detail: json });

  const count = json.meta?.total ?? 0;
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
  res.json({ count });
}
