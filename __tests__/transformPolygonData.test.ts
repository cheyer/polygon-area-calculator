import transformPolygonData, { IFile } from "../utils/transformPolygonData";

describe("transformPolygonData", () => {
  it("should throw error if file format is not correct", () => {
    const data = { payload: {} } as IFile;
    expect(() => transformPolygonData(data)).toThrowError(
      "Not correct file format."
    );
  });

  it("should calculate area for polygon", () => {
    const points = [
      { x: 0, y: 0 },
      { x: 4, y: 0 },
      { x: 4, y: 4 },
      { x: 0, y: 4 },
    ];
    const data = {
      payload: {
        polygons: [
          {
            polygon: {
              points,
            },
          },
        ],
      },
    } as IFile;
    expect(transformPolygonData(data)).toEqual([{ area: 16, points }]);
  });
});
