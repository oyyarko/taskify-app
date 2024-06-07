import multer from 'multer';
import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import { promisify } from 'util';

const storage = multer.memoryStorage();
export const upload = multer({ storage });

export const uploadMiddleware = upload.single('profilePicture');

// export const runMiddleware = (req: NextApiRequest, res: NextApiResponse, fn: NextApiHandler) => {
//   return new Promise((resolve, reject) => {
//     fn(req, res, (result: any) => {
//       if (result instanceof Error) {
//         return reject(result);
//       }
//       return resolve(result);
//     });
//   });
// };
