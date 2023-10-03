'use client';
import { useMemo } from 'react';
import classNames from 'classnames';
import { News } from '~/domain/entities';
import { Iconify } from '~/shared/ui/components/Iconify';
import Image from '~/infrastructure/ui/atoms/Image';
import { useGetAllNews } from '~/infrastructure/api';
import { truncateString } from '~/shared/utils/truncateString';
import { Button, Chip, NoSsr, Typography } from '@mui/material';
import { MRT_Localization_FR } from 'material-react-table/locales/fr';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import CRUDNewsModal from '~/infrastructure/ui/molecules/Modal/CRUDNewsModal';

import styles from './NewsTable.module.scss';

type NewsTableProps = {
  className?: string | number | symbol | undefined;
};

const NewsTable = ({ className }: NewsTableProps) => {
  const { data } = useGetAllNews();

  const columns = useMemo<MRT_ColumnDef<News>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        size: 5
      },
      {
        accessorKey: 'title',
        header: 'Titre',
        size: 150,
        Cell: ({ cell }) => {
          const title = cell.getValue<string>();
          return <Typography variant="body2">{truncateString(title, 48)}</Typography>;
        }
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
        accessorKey: 'author',
        header: 'Auteur',
        size: 50
      },
      {
        accessorKey: 'category',
        header: 'Categories',
        Cell: ({ cell }) => {
          const category = cell.getValue<string[]>();

          return (
            <div
              style={{
                display: 'flex',
                gap: '5px',
                flexWrap: 'wrap'
              }}
            >
              {category && category?.length > 0 ? (
                category.map((cate, key) => {
                  return <Chip key={key} size="small" color="success" label={cate} />;
                })
              ) : (
                <Chip size="small" color="error" label="Pas Categorie" />
              )}
            </div>
          );
        }
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
      className={classNames(styles.newsTable, {
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
              const news: News = {
                id: row.getValue<number>('id'),
                title: row.getValue<string>('title'),
                image: row.getValue<string>('image'),
                author: row.getValue<string>('author'),
                description: row.getValue<string>('description'),
                category: row.getValue<string[]>('category').join(', ') as string
              };

              return (
                <div
                  style={{
                    display: 'flex',
                    gap: 10,
                    justifyContent: 'center'
                  }}
                >
                  <CRUDNewsModal
                    type="edit"
                    news={news}
                    button={
                      <Button variant="contained">
                        <Iconify icon="mdi:pencil" fontSize={20} />
                      </Button>
                    }
                    title="Mettre a jours l'actualité"
                  />

                  <Button variant="contained" href={`/dashboard/admin/news/${news.id}`}>
                    <Iconify icon="mdi:eye" fontSize={20} />
                  </Button>

                  <CRUDNewsModal
                    type="delete"
                    news={news}
                    button={
                      <Button variant="contained" color="error">
                        <Iconify icon="mdi:delete" fontSize={20} />
                      </Button>
                    }
                    title="Supprimer l'actualité"
                  />
                </div>
              );
            }}
            renderTopToolbarCustomActions={() => {
              const news: News = {
                id: 0,
                title: '',
                image: '',
                author: '',
                category: '',
                description: ''
              };

              return (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <CRUDNewsModal
                    type="create"
                    news={news}
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

export default NewsTable;
