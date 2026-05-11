export default async function handler(req, res) {
  const username = req.query.username;

  if (!username) {
    return res.status(400).json({ error: "no username" });
  }

  try {
    const r = await fetch(`https://ngl.link/${encodeURIComponent(username)}`);

    if (r.status === 200) {
      return res.json({ status: "TAKEN" });
    }

    if (r.status === 404) {
      return res.json({ status: "AVAILABLE" });
    }

    return res.json({ status: "UNKNOWN" });

  } catch {
    return res.status(500).json({ status: "ERROR" });
  }
}
