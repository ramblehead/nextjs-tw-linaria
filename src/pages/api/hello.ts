// Hey Emacs, this is -*- coding: utf-8 -*-

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

const handler = (_req: NextApiRequest, res: NextApiResponse<Data>): void => {
  res.status(200).json({ name: 'ramblehead' });
};

export default handler;
