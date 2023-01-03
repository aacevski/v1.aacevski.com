import { NextApiRequest, NextApiResponse } from 'next';

import { getNowPlaying } from '~utils/spotify';

export const config = {
  runtime: 'experimental-edge',
};

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({
      isPlaying: false,
    });
  }

  const song = await response.json();

  if (song.item === null) {
    return res.status(200).json({
      isPlaying: false,
    });
  }

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((_artist: { name: string }) => _artist.name).join(', ');

  return res.status(200).json({
    isPlaying,
    artist,
    title,
  });
}
