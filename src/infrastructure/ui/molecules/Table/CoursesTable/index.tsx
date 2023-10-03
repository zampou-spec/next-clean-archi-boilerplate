'use client';
import { useMemo } from 'react';
import classNames from 'classnames';
import { Iconify } from '~/shared/ui/components/Iconify';
import Image from '~/infrastructure/ui/atoms/Image';
import { useGetAllCourses } from '~/infrastructure/api';
import { Button, NoSsr, Typography } from '@mui/material';
import { truncateString } from '~/shared/utils/truncateString';
import { MRT_Localization_FR } from 'material-react-table/locales/fr';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import CRUDCourseModal from 'src/infrastructure/ui/molecules/Modal/CRUDCourseModal';

import styles from './CoursesTable.module.scss';

export type CoursesDatable = {
  id: number;
  name: string;
  image: string;
  price_online: number;
  price_classroom: number;
  description: string;
};

type CoursesTableProps = {
  className?: string | number | symbol | undefined;
};

const CoursesTable = ({ className }: CoursesTableProps) => {
  const { data } = useGetAllCourses();

  const columns = useMemo<MRT_ColumnDef<CoursesDatable>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        size: 5
      },
      {
        accessorKey: 'name',
        header: 'Nom du cours',
        size: 150
      },
      {
        accessorKey: 'image',
        header: 'Image',
        size: 150,
        Cell: ({ cell }) => {
          const image = cell.getValue<string>();

          return (
            <Image
              src={image}
              alt=""
              imageSize={{
                width: 100,
                height: 100
              }}
            />
          );
        }
      },
      {
        accessorKey: 'price_online',
        header: 'Prix en ligne',
        size: 50
      },
      {
        accessorKey: 'price_classroom',
        header: 'Prix en presentiel',
        size: 50
      },
      {
        accessorKey: 'description',
        header: 'Description',
        size: 300,
        Cell: ({ cell }) => {
          const description = cell.getValue<string>();
          return <Typography variant="body2">{truncateString(description, 95)}</Typography>;
        }
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
        {data && (
          <MaterialReactTable
            data={data}
            enableRowActions
            columns={columns}
            positionActionsColumn="last"
            renderRowActions={({ row }) => {
              const course: CoursesDatable = {
                id: row.getValue<number>('id'),
                name: row.getValue<string>('name'),
                image: row.getValue<string>('image'),
                price_online: row.getValue<number>('price_online'),
                price_classroom: row.getValue<number>('price_classroom'),
                description: row.getValue<string>('description')
              };

              return (
                <div
                  style={{
                    display: 'flex',
                    gap: 10,
                    justifyContent: 'center'
                  }}
                >
                  <CRUDCourseModal
                    type="edit"
                    course={course}
                    button={
                      <Button variant="contained">
                        <Iconify icon="mdi:pencil" fontSize={20} />
                      </Button>
                    }
                    title="Mettre a jours le cours"
                  />

                  <Button variant="contained" href={`/dashboard/admin/courses/${course.id}`}>
                    <Iconify icon="mdi:eye" fontSize={20} />
                  </Button>

                  <CRUDCourseModal
                    type="delete"
                    course={course}
                    button={
                      <Button variant="contained" color="error">
                        <Iconify icon="mdi:delete" fontSize={20} />
                      </Button>
                    }
                    title="Supprimer le cours"
                  />
                </div>
              );
            }}
            renderTopToolbarCustomActions={() => {
              const course: CoursesDatable = {
                id: 0,
                name: '',
                image: '',
                description: '',
                price_online: 0,
                price_classroom: 0
              };

              return (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <CRUDCourseModal
                    type="create"
                    course={course}
                    button={
                      <Button variant="contained">
                        <Iconify icon="mdi:plus" fontSize={20} />
                      </Button>
                    }
                    title="Crée un cours"
                  />
                </div>
              );
            }}
            localization={MRT_Localization_FR}
          />
        )}
      </NoSsr>
    </div>
  );
};

export default CoursesTable;
