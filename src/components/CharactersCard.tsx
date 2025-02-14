import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
const CharactersCard = (item: any) => {
  return (
    <Card
      key={item?.name}
      className="shadow-lg hover:shadow-xl transition bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700"
    >
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{item?.name}</CardTitle>
        <CardDescription className="dark:text-gray-400">
          Gender: {item.gender}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-gray-700 dark:text-gray-300">
        <p>
          <strong>Height:</strong> {item?.height} cm
        </p>
        <p>
          <strong>Mass:</strong> {item?.mass} kg
        </p>
        <p>
          <strong>Birth Year:</strong> {item?.birth_year}
        </p>
      </CardContent>
      <CardFooter>
        <p className="text-blue-500 dark:text-blue-400 underline underline-offset-4 cursor-pointer">
          <Link href={`/character/${item?.url?.split("/")[5]}`}>
            Character Details
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default CharactersCard;
