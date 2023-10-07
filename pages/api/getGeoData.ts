import { NextApiRequest, NextApiResponse } from 'next';

const apiKey = process.env.GEO_API_KEY;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const visitorIp = req.headers['x-forwarded-for'];

    if (!visitorIp) {
      throw new Error('Visitor IP not found in headers');
    }

    const geoResponse = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${visitorIp}`
    );

    if (geoResponse.ok) {
      const geoData = await geoResponse.json();
      res.status(200).json(geoData);
    } else {
      res
        .status(500)
        .json({ error: 'Failed to fetch geolocation information' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
