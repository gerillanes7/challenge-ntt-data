import { FC } from "react";
import { TableContainer, TableHeader, TableRow } from "./styled";

type Chapter = {
  audioUrl: string;
  description: string;
  pubDate: string;
  title: string;
  duration: string;
  id: string;
};

type TableProps = {
  data: Chapter[];
  onClick: (id: string) => void;
};

const HeaderRow = () => (
  <TableHeader>
    <th>Title</th>
    <th>Date</th>
    <th>Duration</th>
  </TableHeader>
);

const DataRow = ({
  id,
  date,
  duration,
  isEven,
  onClick,
  title,
}: {
  id: string;
  date: string;
  duration: string;
  isEven: boolean;
  onClick: (id: string) => void;
  title: string;
}) => (
  <TableRow isEven={isEven}>
    <td onClick={() => onClick(id)}>{title}</td>
    <td>{date}</td>
    <td>{duration}</td>
  </TableRow>
);

export const Table: FC<TableProps> = ({ data, onClick }) => {
  return (
    <TableContainer>
      <thead>
        <HeaderRow />
      </thead>
      <tbody>
        {data?.map((row, i) => (
          <DataRow
            date={row.pubDate}
            duration={row.duration}
            id={row.id}
            isEven={i % 2 === 0}
            onClick={onClick}
            title={row.title}
            key={row.id}
          />
        ))}
      </tbody>
    </TableContainer>
  );
};
