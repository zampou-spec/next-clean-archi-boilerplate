'use client';
import { useMemo } from 'react';
import classNames from 'classnames';
import { Product } from '~/domain/entities';
import { Iconify } from '~/shared/ui/components/Iconify';
import Image from '~/infrastructure/ui/atoms/Image';
import { useGetAllProducts } from '~/infrastructure/api';
import { Button, NoSsr, Typography } from '@mui/material';
import { truncateString } from '~/shared/utils/truncateString';
import { MRT_Localization_FR } from 'material-react-table/locales/fr';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import CRUDProductModal from 'src/infrastructure/ui/molecules/Modal/CRUDProductModal';

import styles from './ProductsTable.module.scss';

type ProductsTableProps = {
  className?: string | number | symbol | undefined;
};

const ProductsTable = ({ className }: ProductsTableProps) => {
  const { data } = useGetAllProducts();

  const columns = useMemo<MRT_ColumnDef<Product>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        size: 5
      },
      {
        accessorKey: 'name',
        header: 'Nom du produit',
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
        accessorKey: 'price',
        header: 'Prix',
        size: 50
      },
      {
        accessorKey: 'quantity',
        header: 'Quantite',
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
              const product: Product = {
                id: row.getValue<number>('id'),
                name: row.getValue<string>('name'),
                image: row.getValue<string>('image'),
                price: row.getValue<number>('price'),
                quantity: row.getValue<number>('quantity'),
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
                  <CRUDProductModal
                    type="edit"
                    product={product}
                    button={
                      <Button variant="contained">
                        <Iconify icon="mdi:pencil" fontSize={20} />
                      </Button>
                    }
                    title="Mettre a jours le produit"
                  />

                  <CRUDProductModal
                    type="delete"
                    product={product}
                    button={
                      <Button variant="contained" color="error">
                        <Iconify icon="mdi:delete" fontSize={20} />
                      </Button>
                    }
                    title="Supprimer le produit"
                  />
                </div>
              );
            }}
            renderTopToolbarCustomActions={() => {
              const product: Product = {
                id: 0,
                name: '',
                price: 0,
                image: '',
                quantity: 0,
                description: ''
              };

              return (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <CRUDProductModal
                    type="create"
                    product={product}
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

export default ProductsTable;
