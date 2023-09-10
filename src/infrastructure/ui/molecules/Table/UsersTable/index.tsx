'use client';
import { useMemo } from 'react';
import classNames from 'classnames';
import { Chip, NoSsr } from '@mui/material';
import { MRT_Localization_FR } from 'material-react-table/locales/fr';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import RemoveSoldModal from '~/infrastructure/ui/molecules/Modal/RemoveSoldModal';

import styles from './UserTable.module.scss';

export type SubscribesData = {
  name: string;
  type: string;
  sold: number | null;
};

export type UsersDataTable = {
  id: string;
  name: string;
  email: string;
  mobile_number: string;
  subscribes: SubscribesData[];
};

interface UsersTableProps {
  data: UsersDataTable[];
  className?: string | number | symbol | undefined;
}

const UsersTable = ({ data, className }: UsersTableProps) => {
  const columns = useMemo<MRT_ColumnDef<UsersDataTable>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        size: 150
      },
      {
        accessorKey: 'name',
        header: 'Nom Complet',
        size: 150
      },
      {
        accessorKey: 'email',
        header: 'E-amil',
        size: 150
      },
      {
        accessorKey: 'mobile_number',
        header: 'Numéro de téléphone',
        size: 200
      },
      {
        accessorKey: 'subscribes',
        header: 'Souscriptions',
        Cell: ({ cell }) => {
          const subscribes = cell.getValue<SubscribesData[]>();

          return (
            <div
              style={{
                display: 'flex',
                gap: '5px',
                flexWrap: 'wrap'
              }}
            >
              {subscribes?.length ? (
                subscribes.map((subscribe, key) => {
                  let label = `${subscribe.name} - ${subscribe.type}`;

                  if (subscribe.sold && subscribe.type === 'classroom') {
                    label += ` - ${subscribe.sold}`;
                    return <Chip key={key} size="small" color="success" label={label} />;
                  } else if (subscribe.type === 'online') {
                    return <Chip key={key} size="small" color="success" label={label} />;
                  }
                })
              ) : (
                <Chip size="small" color="error" label="Pas souscription" />
              )}
            </div>
          );
        }
      }
    ],
    []
  );

  return (
    <div
      className={classNames(styles.usersTable, {
        [className || '']: Boolean(className)
      })}
    >
      <NoSsr>
        <MaterialReactTable
          data={data}
          enableRowActions
          positionActionsColumn="last"
          renderRowActions={({ row }) => {
            const idRow = row.getValue<string>('id');
            const subscribes = row.getValue<SubscribesData[]>('subscribes');
            const filteredSubscribes = subscribes.filter((subscribe) => {
              if (subscribe?.sold) return subscribe.type !== 'online' && subscribe.sold > 0;
            });

            return (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                {filteredSubscribes.length ? (
                  <RemoveSoldModal userId={idRow} subscribes={filteredSubscribes} />
                ) : (
                  <Chip size="small" color="error" label="Pas d'action" />
                )}
              </div>
            );
          }}
          columns={columns}
          localization={MRT_Localization_FR}
        />
      </NoSsr>
    </div>
  );
};

export default UsersTable;
