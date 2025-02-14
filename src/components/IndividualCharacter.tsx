const IndividualCharacter = (data: any) => {
  return (
    <div className="border p-6 rounded-md shadow-md bg-gray-100 dark:bg-gray-800 space-y-4">
      <h2 className="text-2xl font-semibold">{data?.name}</h2>
      <p>
        <strong>Height:</strong> {data?.height} cm
      </p>
      <p>
        <strong>Mass:</strong> {data?.mass} kg
      </p>
      <p>
        <strong>Hair Color:</strong> {data?.hair_color}
      </p>
      <p>
        <strong>Skin Color:</strong> {data?.skin_color}
      </p>
      <p>
        <strong>Eye Color:</strong> {data?.eye_color}
      </p>
      <p>
        <strong>Birth Year:</strong> {data?.birth_year}
      </p>
      <p>
        <strong>Gender:</strong> {data?.gender}
      </p>

      {/* Homeworld Link */}
      <p>
        <strong>Homeworld:</strong>{" "}
        <a
          href={data?.homeworld}
          className="text-blue-500 dark:text-blue-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Planet
        </a>
      </p>

      {/* Films */}
      {data?.films.length > 0 && (
        <div>
          <strong>Films:</strong>
          <ul className="list-disc ml-6">
            {data?.films.map((film: string, index: number) => (
              <li key={index}>
                <a
                  href={film}
                  className="text-blue-500 dark:text-blue-400 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Film {index + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Vehicles */}
      {data?.vehicles.length > 0 && (
        <div>
          <strong>Vehicles:</strong>
          <ul className="list-disc ml-6">
            {data?.vehicles.map((vehicle: string, index: number) => (
              <li key={index}>
                <a
                  href={vehicle}
                  className="text-blue-500 dark:text-blue-400 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vehicle {index + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Starships */}
      {data?.starships.length > 0 && (
        <div>
          <strong>Starships:</strong>
          <ul className="list-disc ml-6">
            {data?.starships.map((starship: string, index: number) => (
              <li key={index}>
                <a
                  href={starship}
                  className="text-blue-500 dark:text-blue-400 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Starship {index + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default IndividualCharacter;
