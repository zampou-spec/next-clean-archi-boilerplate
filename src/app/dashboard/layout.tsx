import { ReactNode } from 'react';
import Layout from '~/infrastructure/ui/layouts';

interface DashboadLayoutProps {
  session: any;
  children: ReactNode;
}

const DashboadLayout = ({ children }: DashboadLayoutProps) => <Layout>{children}</Layout>;

export default DashboadLayout;
