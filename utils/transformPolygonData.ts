import calculateArea from "area-polygon";

interface IPolygon {
  x: number;
  y: number;
}

export interface IFile {
  payload: { polygons: IPolygonData[] };
}

interface IPolygonData {
  author: string;
  category: string;
  polygon: { points: IPolygon[] };
}

export interface IPolygonWithArea {
  area: number;
  category: string;
  points: IPolygon[];
}

const transformPolygonData = (data: IFile): IPolygonWithArea[] => {
  try {
    return data.payload.polygons.map((item) => ({
      area: calculateArea(item.polygon.points),
      category: item.category,
      points: item.polygon.points,
    }));
  } catch (error: any) {
    throw Error("Not correct file format.");
  }
};

export default transformPolygonData;
