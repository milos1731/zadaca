const Task14 = (props) => {
  const data = Data;
  let sorted = [...data];
  const [sortedField, setSortedField] = React.useState(null);

  sorted.sort((a, b) => {
    if (a.Country < b.Country) {
      return -1;
    }
    if (a.Country > b.Country) {
      return 1;
    }
    return 0;
  });
  return (
    <table>
      <caption>Corona Virus Data</caption>
      <thead>
        <tr>
          <th>Id</th>
          <th>
            <button type="button" onClick={() => setSortedField("Country")}>
              Country
            </button>
          </th>
          <th>TotalCases</th>
          <th>NewCases</th>
          <th>TotalDeaths</th>
          <th>NewDeaths</th>
          <th>Recovered</th>
          <th>ActiveCases</th>
          <th>Serious</th>
          <th>Tot1M</th>
          <th>Deaths1M</th>
          <th>TotalTests</th>
          <th>Tests1M</th>
          <th>Population</th>
        </tr>
      </thead>
      <tbody>
        {sorted.map((a) => (
          <tr key={a.id}>
            <td>{a.id}</td>
            <td>{a.Country}</td>
            <td>{a.TotalCases}</td>
            <td>{a.NewCases}</td>
            <td>{a.TotalDeaths}</td>
            <td>{a.NewDeaths}</td>
            <td>{a.TotalRecovered}</td>

            <td>{a.ActiveCases}</td>
            <td>{a.Serious}</td>
            <td>{a.Tot1M}</td>
            <td>{a.TotalTests}</td>
            <td>{a.Tests1M}</td>
            <td>{a.Deaths1M}</td>
            <td>{a.Population}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Task14;
