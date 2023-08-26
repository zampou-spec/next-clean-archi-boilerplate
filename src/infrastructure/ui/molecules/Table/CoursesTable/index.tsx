'use client';
import { useMemo } from 'react';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';

import styles from './CoursesTable.module.scss';
import { NoSsr } from '@mui/material';
import classNames from 'classnames';

type Person = {
  name: {
    firstName: string;
    lastName: string;
  };
  address: string;
  city: string;
  state: string;
};

const data: Person[] = [
  {
    name: {
      firstName: 'John',
      lastName: 'Doe'
    },
    address: '261 Erdman Ford',
    city: 'East Daphne',
    state: 'Kentucky'
  },
  {
    name: {
      firstName: 'Jane',
      lastName: 'Doe'
    },
    address: '769 Dominic Grove',
    city: 'Columbus',
    state: 'Ohio'
  },
  {
    name: {
      firstName: 'Joe',
      lastName: 'Doe'
    },
    address: '566 Brakus Inlet',
    city: 'South Linda',
    state: 'West Virginia'
  },
  {
    name: {
      firstName: 'Kevin',
      lastName: 'Vandy'
    },
    address: '722 Emie Stream',
    city: 'Lincoln',
    state: 'Nebraska'
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs'
    },
    address: '32188 Larkin Turnpike',
    city: 'Omaha',
    state: 'Nebraska'
  }
];

interface CoursesTableProps {
  className?: string | number | symbol | undefined;
}

const CoursesTable = ({ className }: CoursesTableProps) => {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'name.firstName',
        header: 'First Name',
        size: 150
      },
      {
        accessorKey: 'name.lastName',
        header: 'Last Name',
        size: 150
      },
      {
        accessorKey: 'address',
        header: 'Address',
        size: 200
      },
      {
        accessorKey: 'city',
        header: 'City',
        size: 150
      },
      {
        accessorKey: 'state',
        header: 'State',
        size: 150
      }
    ],
    []
  );

  return (
    <div
      className={classNames(styles.coursesTable, {
        [className || '']: Boolean(className)
      })}
    >
      <NoSsr>
        <MaterialReactTable columns={columns} data={data} />
      </NoSsr>
    </div>
  );
};

export default CoursesTable;
