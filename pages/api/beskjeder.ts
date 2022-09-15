import { NextApiRequest, NextApiResponse } from 'next';
import { getAccessTokenFromRequest } from '../../auth/accessToken';
import { beskyttetApi } from '../../auth/beskyttetApi';
import {Beskjed, Søknad} from '../../types/types';

const handler = beskyttetApi(async (req: NextApiRequest, res: NextApiResponse) => {
  const accessToken = getAccessTokenFromRequest(req);
  const søknader = await getBeskjeder(accessToken);
  res.status(200).json(søknader);
});

export const getBeskjeder = async (accessToken?: string) => {
  const beskjeder: Beskjed[] = [
    {
      uid: "2313ef1a-a69a-45d9-a3ff-38e4522710e0",
      forstBehandlet: "2020-03-13T08:53:17.47Z",
      eventId: "1584093197470",
      tekst:
        "Vi mottok søknaden din 18. september 2019. Du kan følge med på statusen i Dine foreldrepenger.",
      link: "https://enNyLenke",
      sistOppdatert: "2020-03-13T08:53:17.773555Z",
      sikkerhetsnivaa: 3,
    },
    {
      uid: "934de6ce-f94f-47de-84d2-639ac2674627",
      forstBehandlet: "2019-11-27T12:24:34.671Z",
      eventId: "1174857474672",
      tekst:
        "Søknad om forskudd på dagpenger er mottatt.",
      link: null,
      sistOppdatert: "2019-11-27T12:24:35.014517Z",
      sikkerhetsnivaa: 3,
    },
  ];

  return beskjeder;
};

export default handler;
