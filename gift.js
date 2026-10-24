// Vercel Serverless Function. Simpan data di Upstash Redis (gratis).
const U = process.env.UPSTASH_REDIS_REST_URL, T = process.env.UPSTASH_REDIS_REST_TOKEN;
const redis = (cmd) => fetch(U, { method: 'POST', headers: { Authorization: 'Bearer ' + T }, body: JSON.stringify(cmd) }).then((r) => r.json());

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method === 'GET') {
    const d = await redis(['GET', 'gift']);
    return res.status(200).json({ state: d.result ? JSON.parse(d.result) : null });
  }
  if (req.method === 'POST') {
    if (!process.env.EDIT_PASSWORD || req.headers['x-password'] !== process.env.EDIT_PASSWORD)
      return res.status(401).json({ error: 'unauthorized' });
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
    if (body.state) await redis(['SET', 'gift', JSON.stringify(body.state)]);
    return res.status(200).json({ ok: true });
  }
  res.status(405).end();
}
