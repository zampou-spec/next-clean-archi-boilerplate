'use client';
import { useMemo } from 'react';
import classNames from 'classnames';
import { Button, NoSsr } from '@mui/material';
import { Iconify } from '~/shared/ui/components';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import CRUDChapterModal from '~/infrastructure/ui/molecules/Modal/CRUDChapterModal';

import styles from './ChapterTable.module.scss';

export type ChapterDatable = {
  id: number;
  name: string;
  course_id: number;
  playlist_id: string;
};

interface ChapterTableProps {
  courseId: number;
  data: ChapterDatable[];
  className?: string | number | symbol | undefined;
}

const ChapterTable = ({ courseId, data, className }: ChapterTableProps) => {
  const columns = useMemo<MRT_ColumnDef<ChapterDatable>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        size: 150
      },
      {
        accessorKey: 'name',
        header: 'Nom',
        size: 150
      },
      {
        accessorKey: 'playlist_id',
        header: 'Playliste ID',
        size: 150
      }
    ],
    []
  );

  return (
    <div
      className={classNames(styles.courseTable, {
        [className || '']: Boolean(className)
      })}
    >
      <NoSsr>
        <MaterialReactTable
          data={data}
          enableRowActions
          columns={columns}
          positionActionsColumn="last"
          renderRowActions={({ row }) => {
            const chapter: ChapterDatable = {
              id: row.getValue<number>('id'),
              name: row.getValue<string>('name'),
              course_id: courseId,
              playlist_id: row.getValue<string>('playlist_id')
            };

            return (
              <div
                style={{
                  display: 'flex',
                  gap: 10,
                  justifyContent: 'center'
                }}
              >
                <CRUDChapterModal
                  type="edit"
                  chapter={chapter}
                  button={
                    <Button variant="contained">
                      <Iconify icon="mdi:pencil" fontSize={20} />
                    </Button>
                  }
                  title="Mettre a jours le chapitre"
                />
                <CRUDChapterModal
                  type="delete"
                  chapter={chapter}
                  button={
                    <Button variant="contained" color="error">
                      <Iconify icon="mdi:delete" fontSize={20} />
                    </Button>
                  }
                  title="Supprimer le chapitre"
                />
              </div>
            );
          }}
          renderTopToolbarCustomActions={() => {
            const chapter: ChapterDatable = {
              id: 0,
              name: '',
              course_id: courseId,
              playlist_id: ''
            };

            return (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <CRUDChapterModal
                  type="create"
                  chapter={chapter}
                  button={
                    <Button variant="contained">
                      <Iconify icon="mdi:plus" fontSize={20} />
                    </Button>
                  }
                  title="Crée un chapitre"
                />
              </div>
            );
          }}
        />
      </NoSsr>
    </div>
  );
};

export default ChapterTable;
