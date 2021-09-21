import fileUpload from "express-fileupload";
import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { FORM_FIELD_FILE_NAME } from "../utils/constants";
import transformPolygonData, {
  IPolygonWithArea,
} from "../utils/transformPolygonData";

declare module "next" {
  interface NextApiRequest {
    files: any;
  }
}

type IError = {
  error: string;
};

type IPolygon = { polygons: IPolygonWithArea[] };

type IResponse = IError | IPolygon;

export const config = {
  api: {
    bodyParser: false,
  },
};

const router = nextConnect({
  onNoMatch(req: NextApiRequest, res: NextApiResponse<IError>) {
    const error = `Method '${req.method}' Not Allowed`;
    res.statusMessage = error;
    return res.status(405).json({ error });
  },
});

router.use(
  fileUpload({
    createParentPath: true,
  })
);

router.post((req: NextApiRequest, res: NextApiResponse<IResponse>) => {
  if (!req.files) {
    return res.status(400).send({
      error: "No File Uploaded",
    });
  }

  const buffer = (req.files[FORM_FIELD_FILE_NAME] as any).data;
  const data = JSON.parse(buffer.toString());
  const polygons = transformPolygonData(data);

  return res.status(200).json({ polygons });
});

export default router;
