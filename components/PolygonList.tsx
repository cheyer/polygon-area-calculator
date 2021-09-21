import compareNumbers from "../pages/utils/compareNumbers";
import { IPolygonWithArea } from "../pages/utils/transformPolygonData";

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
  return (
    <div>
      <div className="bg-white shadow-xl rounded-lg w-1/2">
        <ul className="divide-y divide-gray-300">
          {polygons
            .sort((a, b) => compareNumbers(a.area, b.area))
            .map((item, index) => (
              <ListItem key={index} area={item.area} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default PolygonList;
