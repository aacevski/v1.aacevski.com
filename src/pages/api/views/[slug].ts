import type { NextApiRequest, NextApiResponse } from 'next';

import db from '../../../../db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const slug = req.query.slug as string;

    if (req.method === 'GET') {
      const postMeta = await db.postMeta.findUnique({
        where: {
          slug,
        },
      });

      return res.status(200).json({ views: postMeta?.views ?? 0 });
    }

    if (req.method === 'POST') {
      const postMeta = await db.postMeta.upsert({
        create: {
          slug,
          likes: 0,
          views: 1,
        },
        update: {
          views: {
            increment: 1,
          },
        },
        where: {
          slug,
        },
      });

      return res.status(200).json({ views: postMeta?.views ?? 0 });
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      return res.status(500).json({ message: e.message });
    }

    return res.status(500).json({ message: 'Something went wrong' });
  }

  return res.status(405).json({ message: 'Method not allowed' });
};

export default handler;
