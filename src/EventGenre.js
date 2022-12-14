import React, { useEffect, useState } from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);

  const getData = () => {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];

    const data = genres.map((genre) => {
      const value = events.filter((event) =>
        event.summary.replace(".js", "").split(" ").includes(genre)
      ).length;
      return {
        name: genre,
        value: value,
      };
    });
    return data;
  };

  useEffect(() => { setData(() => getData()); }, [events]);

  return (
    <ResponsiveContainer height={400}>
      <PieChart width={400} height={400}>
        <Pie
          data={getData()}
          cx='50%'
          cy='50%'
          labelLine={false}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          outerRadius='50%'
          fill="#227c9d"
          dataKey="value"
        >
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default EventGenre;