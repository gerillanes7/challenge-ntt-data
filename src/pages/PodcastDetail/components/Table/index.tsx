import { FC } from "react";
import { TableContainer, TableHeader, TableRow } from "./styled";

type Episode = {
  audioUrl: string;
  description: string;
  pubDate: string;
  title: string;
  duration: string;
  id: string;
};

type TableProps = {
  data: Episode[];
  onClick: (episode: Episode) => void;
};

type DataRowProps = {
  id: string;
  date: string;
  duration: string;
  isEven: boolean;
  onClick: (episode: Episode) => void;
  title: string;
  audio: string;
  description: string;
};

const HeaderRow = () => (
  <TableHeader>
    <th>Title</th>
    <th>Date</th>
    <th>Duration</th>
  </TableHeader>
);

const DataRow: FC<DataRowProps> = ({
  id,
  date,
  duration,
  isEven,
  onClick,
  title,
  audio,
  description,
}) => (
  <TableRow $isEven={isEven}>
    <td
      onClick={() =>
        onClick({
          audioUrl: audio,
          description,
          duration,
          pubDate: date,
          title,
          id,
        })
      }
    >
      {title}
    </td>
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
            audio={row.audioUrl}
            description={row.description}
            date={row.pubDate}
            duration={row.duration}
            id={row.id}
            isEven={i % 2 === 0}
            onClick={onClick}
            title={row.title}
            key={`${row.id}-${row.title}`}
          />
        ))}
      </tbody>
    </TableContainer>
  );
};
