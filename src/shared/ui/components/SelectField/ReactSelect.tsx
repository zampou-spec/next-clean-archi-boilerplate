'use client';
import { Typography } from '@mui/material';
import { ReactNode, useMemo } from 'react';
import pxToRem from '~/shared/utils/pxToRem';
import { useTheme } from '@mui/material/styles';
import Select, { StylesConfig } from 'react-select';
import { Props as RSSelectProps } from 'react-select';

export type ReactSelectProps = RSSelectProps & {
  size?: 'medium' | 'small';
  label?: ReactNode;
  helperText?: ReactNode;
  controlId?: string;
  fullWidth?: boolean;
  error?: boolean;
};

export const ReactSelect = ({ error, ...props }: ReactSelectProps) => {
  const theme = useTheme();

  const styles = useMemo<StylesConfig>(
    () => ({
      menu: (provided) => ({
        ...provided,
        borderRadius: 0
      }),
      control: (base, state) => ({
        ...base,
        minHeight: '38.1333px',
        fontSize: '14px',
        borderRadius: pxToRem(4),
        borderColor: '1px solid hsl(0, 0%, 80%)',
        fontWeight: 500,
        boxShadow: 'none',
        '&:hover': {
          border: '1px solid inherit'
        },
        ...(error && {
          border: `1px solid ${theme.palette.error.main} !important`
        }),
        ...(!error && {
          border: state.isFocused ? `1px solid ${theme.palette.primary.main}` : '1px solid #ced4da'
        })
      }),
      option: (provided, state) => ({
        ...provided,
        background: state.isSelected ? theme.palette.primary.main : 'initial',
        color: state.isSelected ? theme.palette.common.white : '#000',
        borderRadius: '0',
        '&:hover': {
          color: theme.palette.common.white,
          background: theme.palette.primary.main
        },
        fontSize: '0.89rem',
        fontWeight: 500,
        zIndex: 9999
      }),
      input: (provided) => ({
        ...provided,
        margin: 0
      }),
      container: (provided) => ({
        ...provided
      }),
      placeholder: (base) => ({
        ...base,
        color: '#b6b6b5'
      }),
      valueContainer: (provided) => ({
        ...provided,
        padding: 0,
        paddingLeft: 12,
        fontWeight: 500
      }),
      multiValueLabel: (base) => ({
        ...base,
        backgroundColor: theme.palette.primary.main,
        color: 'white'
      }),
      menuList: (base) => ({
        ...base,
        borderRaduis: 10
      })
    }),
    [error, theme]
  );

  return (
    <Select
      {...props}
      styles={styles}
      menuPosition="fixed"
      components={{
        IndicatorSeparator: () => null,
        NoOptionsMessage
      }}
      classNamePrefix="react__select"
    />
  );
};

const NoOptionsMessage = () => (
  <Typography variant="body2" textAlign="center" px={1}>
    Aucune donnée
  </Typography>
);

export default ReactSelect;
ReactSelect.displayName = 'ReactSelect';
