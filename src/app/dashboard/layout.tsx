import { ReactNode } from 'react';
import Layout from '~/infrastructure/ui/layouts';

interface DashboadLayoutProps {
  children: ReactNode;
}

const DashboadLayout = ({ children }: DashboadLayoutProps) => <Layout>{children}</Layout>;

export default DashboadLayout;
