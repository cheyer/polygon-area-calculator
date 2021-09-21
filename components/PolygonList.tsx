import { groupBy } from "lodash";
import compareNumbers from "../utils/compareNumbers";
import { IPolygonWithArea } from "../utils/transformPolygonData";

interface IListeItemProps {
  area: number;
}

const ListItem: React.FC<IListeItemProps> = ({ area }) => {
  return (
    <li className="flex justify-center p-4 hover:bg-gray-50 cursor-pointer">
      {area}
    </li>
  );
};

interface IPolygonListProps {
  polygons: IPolygonWithArea[];
}

const PolygonList: React.FC<IPolygonListProps> = ({ polygons }) => {
  const groups = groupBy(polygons, "category");
  const categories = Object.keys(groups);

  return (
    <div>
      {categories.map((category) => (
        <>
          <h1 className="font-medium text-xl text-purple-700 py-6">
            {category}
          </h1>
          <div className="bg-white shadow-xl rounded-lg w-1/2">
            <ul className="divide-y divide-gray-300">
              {groups[category]
                .sort((a, b) => compareNumbers(a.area, b.area))
                .map((item, index) => (
                  <ListItem key={index} area={item.area} />
                ))}
            </ul>
          </div>
        </>
      ))}
    </div>
  );
};

export default PolygonList;
